import { NextRequest, NextResponse } from "next/server"

interface KlaviyoSubscribeRequest {
  email: string
  userCountRange: string
  riskScore: number
  recommendedPackage: string
  complianceFlag: boolean
  supportLevel: string
  tags: string[]
}

export async function POST(request: NextRequest) {
  try {
    const body: KlaviyoSubscribeRequest = await request.json()

    const { email, userCountRange, riskScore, recommendedPackage, complianceFlag, supportLevel, tags } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Get Klaviyo API key from environment
    const klaviyoApiKey = process.env.KLAVIYO_PRIVATE_API_KEY

    if (!klaviyoApiKey) {
      console.error("Klaviyo API key not configured")
      // Return success anyway to not block the user experience
      // The lead can be captured through other means
      return NextResponse.json({
        success: true,
        message: "Submission received (Klaviyo not configured)"
      })
    }

    // Klaviyo API v3 - Create or update profile
    const profileData = {
      data: {
        type: "profile",
        attributes: {
          email: email,
          properties: {
            // Calculator data
            calculator_user_count_range: userCountRange,
            calculator_risk_score: riskScore,
            calculator_recommended_package: recommendedPackage,
            calculator_compliance_flag: complianceFlag,
            calculator_support_level: supportLevel,
            calculator_completed_at: new Date().toISOString(),
            // Source tracking
            source: "IT Cost Estimator",
          },
        },
      },
    }

    // Create/update profile in Klaviyo
    const profileResponse = await fetch("https://a.klaviyo.com/api/profiles/", {
      method: "POST",
      headers: {
        "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
        "Content-Type": "application/json",
        "revision": "2024-02-15",
      },
      body: JSON.stringify(profileData),
    })

    let profileId: string | null = null

    if (profileResponse.status === 201) {
      const profileResult = await profileResponse.json()
      profileId = profileResult.data?.id
    } else if (profileResponse.status === 409) {
      // Profile already exists, get the existing profile ID
      const existingResponse = await fetch(
        `https://a.klaviyo.com/api/profiles/?filter=equals(email,"${encodeURIComponent(email)}")`,
        {
          headers: {
            "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
            "revision": "2024-02-15",
          },
        }
      )

      if (existingResponse.ok) {
        const existingResult = await existingResponse.json()
        profileId = existingResult.data?.[0]?.id

        // Update the existing profile with new data
        if (profileId) {
          await fetch(`https://a.klaviyo.com/api/profiles/${profileId}/`, {
            method: "PATCH",
            headers: {
              "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
              "Content-Type": "application/json",
              "revision": "2024-02-15",
            },
            body: JSON.stringify({
              data: {
                type: "profile",
                id: profileId,
                attributes: profileData.data.attributes,
              },
            }),
          })
        }
      }
    }

    // Subscribe to list if list ID is configured
    const listId = process.env.KLAVIYO_CALCULATOR_LIST_ID

    if (listId && profileId) {
      await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, {
        method: "POST",
        headers: {
          "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
          "Content-Type": "application/json",
          "revision": "2024-02-15",
        },
        body: JSON.stringify({
          data: [{ type: "profile", id: profileId }],
        }),
      })
    }

    // Create event for tracking
    const eventData = {
      data: {
        type: "event",
        attributes: {
          profile: { $email: email },
          metric: { name: "Calculator Completed" },
          properties: {
            user_count_range: userCountRange,
            risk_score: riskScore,
            recommended_package: recommendedPackage,
            compliance_flag: complianceFlag,
            support_level: supportLevel,
            tags: tags,
          },
          time: new Date().toISOString(),
        },
      },
    }

    await fetch("https://a.klaviyo.com/api/events/", {
      method: "POST",
      headers: {
        "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
        "Content-Type": "application/json",
        "revision": "2024-02-15",
      },
      body: JSON.stringify(eventData),
    })

    return NextResponse.json({ success: true, message: "Successfully subscribed" })
  } catch (error) {
    console.error("Klaviyo subscription error:", error)
    // Return success to not block user experience
    return NextResponse.json({
      success: true,
      message: "Submission received"
    })
  }
}
