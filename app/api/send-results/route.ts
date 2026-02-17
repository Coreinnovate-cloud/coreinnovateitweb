import { NextRequest, NextResponse } from "next/server"

interface SendResultsRequest {
  email: string
  riskScore: number
  riskLevel: string
  recommendedPackage: string
  userCountRange: string
  complianceFlag: boolean
  supportLevel: string
  riskFactors: string[]
}

export async function POST(request: NextRequest) {
  try {
    const body: SendResultsRequest = await request.json()

    const {
      email,
      riskScore,
      riskLevel,
      recommendedPackage,
      userCountRange,
      complianceFlag,
      supportLevel,
      riskFactors,
    } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if Klaviyo is configured
    const klaviyoApiKey = process.env.KLAVIYO_PRIVATE_API_KEY
    if (!klaviyoApiKey) {
      console.error("Klaviyo API key not configured")
      return NextResponse.json({
        success: true,
        message: "Submission received (email not configured)",
      })
    }

    // Package details
    const packageDetails = recommendedPackage === "elite"
      ? {
          name: "CORE Elite",
          tagline: "Comprehensive protection for high-risk environments",
          features: [
            "24/7 Security Operations Centre (SOC)",
            "Advanced Endpoint Detection & Response (EDR)",
            "Managed Detection and Response (MDR)",
            "Compliance Management & Reporting",
            "Dark Web Monitoring",
            "Phishing Simulation & Training",
            "Priority Support (20-min response)",
          ],
        }
      : {
          name: "CORE Secure",
          tagline: "Essential protection for growing organisations",
          features: [
            "Managed IT Support",
            "Endpoint Protection",
            "Email Security",
            "Cloud Backup & Recovery",
            "Security Awareness Training",
            "Regular Security Assessments",
            "Business Hours Support",
          ],
        }

    // Risk level colors
    const riskColors = {
      low: { bg: "#10B981", text: "#ECFDF5" },
      moderate: { bg: "#F59E0B", text: "#FFFBEB" },
      high: { bg: "#EF4444", text: "#FEF2F2" },
      critical: { bg: "#DC2626", text: "#FEF2F2" },
    }

    const riskColor = riskColors[riskLevel as keyof typeof riskColors] || riskColors.moderate

    // Create HTML email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your IT & Security Assessment Results</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%); padding: 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <img src="https://coreinnovateit.com/logo.png" alt="Core Innovate IT" style="height: 50px; margin-bottom: 20px;">
              <h1 style="color: #ffffff; font-size: 28px; margin: 0 0 10px 0; font-weight: 700;">Your IT & Security Assessment Results</h1>
              <p style="color: #94a3b8; font-size: 16px; margin: 0;">Here's your personalised security analysis</p>
            </td>
          </tr>

          <!-- Risk Score -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="text-align: center; padding-bottom: 20px;">
                    <div style="display: inline-block; background-color: ${riskColor.bg}; color: #ffffff; padding: 8px 20px; border-radius: 50px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      ${riskLevel} Risk
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center;">
                    <div style="font-size: 64px; font-weight: 700; color: #60a5fa; line-height: 1;">${riskScore}</div>
                    <div style="font-size: 14px; color: #94a3b8; margin-top: 5px;">Risk Score (out of 100)</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Assessment Summary -->
          <tr>
            <td style="background-color: #1e293b; padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0f172a; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="color: #ffffff; font-size: 16px; margin: 0 0 15px 0; font-weight: 600;">Assessment Summary</h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Organisation Size</td>
                        <td style="padding: 8px 0; color: #ffffff; font-size: 14px; text-align: right; font-weight: 500;">${userCountRange}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Compliance Requirements</td>
                        <td style="padding: 8px 0; color: #ffffff; font-size: 14px; text-align: right; font-weight: 500;">${complianceFlag ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Support Preference</td>
                        <td style="padding: 8px 0; color: #ffffff; font-size: 14px; text-align: right; font-weight: 500;">${supportLevel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${riskFactors.length > 0 ? `
          <!-- Risk Factors -->
          <tr>
            <td style="background-color: #1e293b; padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #451a03; border: 1px solid #78350f; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="color: #fbbf24; font-size: 16px; margin: 0 0 15px 0; font-weight: 600;">Key Risk Factors Identified</h3>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #fde68a; font-size: 14px; line-height: 1.8;">
                      ${riskFactors.map(factor => `<li>${factor}</li>`).join("")}
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ""}

          <!-- Recommended Package -->
          <tr>
            <td style="background-color: #1e293b; padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 30px;">
                    <div style="text-align: center; margin-bottom: 20px;">
                      <span style="background-color: rgba(255,255,255,0.2); color: #ffffff; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Recommended</span>
                    </div>
                    <h2 style="color: #ffffff; font-size: 28px; margin: 0 0 10px 0; text-align: center; font-weight: 700;">${packageDetails.name}</h2>
                    <p style="color: #c7d2fe; font-size: 16px; margin: 0 0 25px 0; text-align: center;">${packageDetails.tagline}</p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      ${packageDetails.features.map(feature => `
                        <tr>
                          <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">
                            <span style="color: #34d399; margin-right: 10px;">&#10003;</span>
                            ${feature}
                          </td>
                        </tr>
                      `).join("")}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color: #1e293b; padding: 0 30px 40px 30px; text-align: center;">
              <p style="color: #94a3b8; font-size: 16px; margin: 0 0 25px 0;">Ready to protect your organisation?</p>
              <a href="https://coreinnovateit.com/contact-us" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 16px; font-weight: 600;">Book a Consultation</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px; border-radius: 0 0 16px 16px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
                Core Innovate IT | Secure IT & Cybersecurity Solutions
              </p>
              <p style="color: #475569; font-size: 12px; margin: 0;">
                This email was sent because you completed our IT & Security Cost Estimator.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    // Create custom event in Klaviyo with all email data
    // This will trigger a Flow in Klaviyo that sends the email
    const eventPayload = {
      data: {
        type: "event",
        attributes: {
          profile: {
            data: {
              type: "profile",
              attributes: {
                email: email,
              },
            },
          },
          metric: {
            data: {
              type: "metric",
              attributes: {
                name: "Assessment Results Ready",
              },
            },
          },
          properties: {
            // Assessment data
            risk_score: riskScore,
            risk_level: riskLevel,
            recommended_package: recommendedPackage === "elite" ? "CORE Elite" : "CORE Secure",
            user_count_range: userCountRange,
            compliance_flag: complianceFlag,
            support_level: supportLevel,
            risk_factors: riskFactors.join(", "),

            // Package details for email template
            package_name: packageDetails.name,
            package_tagline: packageDetails.tagline,
            package_features: packageDetails.features.join("|"),

            // Email subject
            email_subject: `Your IT & Security Assessment Results - ${riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk`,

            // Risk color for email styling
            risk_bg_color: riskColor.bg,
            risk_text_color: riskColor.text,

            // CTA link
            cta_url: "https://coreinnovateit.com/contact-us",
          },
          time: new Date().toISOString(),
        },
      },
    }

    // Validate API key format
    if (klaviyoApiKey.startsWith("pk_")) {
      console.error("ERROR: You are using a Klaviyo PUBLIC key (pk_...). The Events API requires a PRIVATE key. Go to Klaviyo > Settings > API Keys > Create Private API Key.")
      return NextResponse.json({
        error: "Klaviyo configuration error",
        message: "Using a public key (pk_) instead of a private key. Please update KLAVIYO_PRIVATE_API_KEY in .env.local with a private API key from Klaviyo > Settings > API Keys.",
      }, { status: 500 })
    }

    console.log("Sending Klaviyo event for:", email, "Event: Assessment Results Ready")

    const eventResponse = await fetch("https://a.klaviyo.com/api/events/", {
      method: "POST",
      headers: {
        "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
        "Content-Type": "application/json",
        "revision": "2024-02-15",
      },
      body: JSON.stringify(eventPayload),
    })

    if (!eventResponse.ok) {
      const errorText = await eventResponse.text()
      console.error("Klaviyo event error:", eventResponse.status, errorText)
      return NextResponse.json({
        error: "Failed to trigger email",
        status: eventResponse.status,
        details: errorText
      }, { status: 500 })
    }

    console.log("Klaviyo event created successfully for:", email)

    // Parse response if there's content
    let result = null
    const contentType = eventResponse.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      const responseText = await eventResponse.text()
      if (responseText) {
        try {
          result = JSON.parse(responseText)
        } catch (e) {
          console.log("Could not parse response, but event was successful")
        }
      }
    }

    return NextResponse.json({
      success: true,
      eventId: result?.data?.id || "created",
      message: "Event tracked successfully. Email will be sent via Klaviyo Flow once configured."
    })
  } catch (error) {
    console.error("Send results error:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json({
      error: "Failed to send email",
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
}
