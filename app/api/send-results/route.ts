import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

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
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      )
    }

    // Package details
    const packageDetails =
      recommendedPackage === "elite"
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

    const riskColor =
      riskColors[riskLevel as keyof typeof riskColors] || riskColors.moderate

    // Create HTML email — theme: #239dea primary, #16365f dark, #1d2739 secondary, #f7f9fc light, #475367 tertiary
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your IT & Security Assessment Results</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f7f9fc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(22,54,95,0.10);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #16365f 0%, #1d2739 100%); padding: 40px 30px; text-align: center;">
              <img src="https://www.coreinnovateit.co.uk/_next/image?url=%2Flogo.png&w=256&q=75" alt="Core Innovate IT Managed IT & Cybersecurity" style="height: 50px; margin-bottom: 20px;">
              <h1 style="color: #ffffff; font-size: 26px; margin: 0 0 10px 0; font-weight: 700; letter-spacing: -0.5px;">Your IT & Security Assessment Results</h1>
              <p style="color: #239dea; font-size: 15px; margin: 0; font-weight: 500;">Here's your personalised security analysis</p>
            </td>
          </tr>

          <!-- Risk Score -->
          <tr>
            <td style="padding: 32px 30px 24px 30px;">
              <div style="text-align: center; margin-bottom: 20px;">
                <span style="display: inline-block; background-color: ${riskColor.bg}; color: #ffffff; padding: 10px 28px; border-radius: 50px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">
                  ${riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
                </span>
              </div>
              <div style="text-align: center; padding: 28px; background: linear-gradient(135deg, #eaf6fd 0%, #dbeafe 100%); border-radius: 12px; border: 1px solid #bfdbfe;">
                <div style="font-size: 72px; font-weight: 700; color: #239dea; line-height: 1;">${riskScore}</div>
                <div style="font-size: 13px; color: #475367; margin-top: 6px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Risk Score (out of 100)</div>
              </div>
            </td>
          </tr>

          <!-- Assessment Summary -->
          <tr>
            <td style="padding: 0 30px 24px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f7f9fc; border-radius: 12px; border: 1px solid #e5eaf0;">
                <tr>
                  <td style="padding: 22px 24px;">
                    <h3 style="color: #1d2739; font-size: 16px; margin: 0 0 16px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Assessment Summary</h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 11px 0; color: #475367; font-size: 14px; border-bottom: 1px solid #e5eaf0;">Organisation Size</td>
                        <td style="padding: 11px 0; color: #1d2739; font-size: 14px; text-align: right; font-weight: 600; border-bottom: 1px solid #e5eaf0;">${userCountRange}</td>
                      </tr>
                      <tr>
                        <td style="padding: 11px 0; color: #475367; font-size: 14px; border-bottom: 1px solid #e5eaf0;">Compliance Requirements</td>
                        <td style="padding: 11px 0; color: #1d2739; font-size: 14px; text-align: right; font-weight: 600; border-bottom: 1px solid #e5eaf0;">${complianceFlag ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td style="padding: 11px 0; color: #475367; font-size: 14px;">Support Preference</td>
                        <td style="padding: 11px 0; color: #1d2739; font-size: 14px; text-align: right; font-weight: 600;">${supportLevel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${
            riskFactors.length > 0
              ? `
          <!-- Risk Factors -->
          <tr>
            <td style="padding: 0 30px 24px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fffbeb; border: 2px solid #f59e0b; border-radius: 12px;">
                <tr>
                  <td style="padding: 22px 24px;">
                    <h3 style="color: #92400e; font-size: 16px; margin: 0 0 14px 0; font-weight: 700;">&#9888; Key Risk Factors Identified</h3>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #92400e; font-size: 14px; line-height: 1.9;">
                      ${riskFactors.map((factor) => `<li>${factor}</li>`).join("")}
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Recommended Package -->
          <tr>
            <td style="padding: 0 30px 24px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #16365f 0%, #239dea 100%); border-radius: 12px;">
                <tr>
                  <td style="padding: 32px;">
                    <div style="text-align: center; margin-bottom: 14px;">
                      <span style="display: inline-block; background-color: rgba(255,255,255,0.18); color: #ffffff; padding: 5px 16px; border-radius: 50px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; border: 1px solid rgba(255,255,255,0.3);">Recommended Package</span>
                    </div>
                    <h2 style="color: #ffffff; font-size: 30px; margin: 0 0 8px 0; text-align: center; font-weight: 700;">${packageDetails.name}</h2>
                    <p style="color: rgba(255,255,255,0.8); font-size: 15px; margin: 0 0 24px 0; text-align: center;">${packageDetails.tagline}</p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      ${packageDetails.features
                        .map(
                          (feature) => `
                        <tr>
                          <td style="padding: 9px 0; color: #ffffff; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.12);">
                            <span style="color: #a8edbb; margin-right: 10px; font-weight: 700;">&#10003;</span>
                            ${feature}
                          </td>
                        </tr>
                      `,
                        )
                        .join("")}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 32px 30px 40px 30px; text-align: center; background-color: #f7f9fc;">
              <p style="color: #1d2739; font-size: 17px; margin: 0 0 6px 0; font-weight: 700;">Ready to protect your organisation?</p>
              <p style="color: #475367; font-size: 14px; margin: 0 0 28px 0;">Speak with our team and get a tailored security plan.</p>
              <!-- Email-safe button: solid background-color for Outlook fallback -->
              <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                <tr>
                  <td style="background-color: #239dea; border-radius: 8px; text-align: center;">
                    <a href="https://www.coreinnovateit.co.uk/contact-us"
                       style="display: inline-block; background-color: #239dea; color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-size: 15px; font-weight: 700; letter-spacing: 0.3px; mso-padding-alt: 0; font-family: Arial, sans-serif;">
                      Book a Free Consultation
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1d2739; padding: 28px 30px; border-radius: 0 0 16px 16px; text-align: center;">
              <p style="color: #239dea; font-size: 14px; margin: 0 0 6px 0; font-weight: 700;">Core Innovate IT</p>
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 6px 0;">Managed IT Services, Cybersecurity & Compliance</p>
              <p style="color: #475367; font-size: 12px; margin: 0;">
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

    const emailSubject = `Your IT & Security Assessment Results - ${riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk`

    // Send email directly via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("Resend API key not configured")
      return NextResponse.json(
        {
          error: "Email service not configured",
          message: "RESEND_API_KEY is missing from environment variables",
        },
        { status: 500 },
      )
    }

    const resend = new Resend(resendApiKey)
    const fromEmail =
      process.env.KLAVIYO_FROM_EMAIL || "noreply@coreinnovateit.co.uk"

    console.log("Sending assessment email to:", email)

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: `Core Innovate IT <${fromEmail}>`,
      to: [email],
      subject: emailSubject,
      html: htmlContent,
    })

    if (emailError) {
      console.error("Resend email error:", emailError)
      return NextResponse.json({
        error: "Failed to send email",
        message: emailError.message,
      })
    }

    console.log("Email sent successfully:", emailData?.id)

    // Also track event in Klaviyo for CRM/analytics (non-blocking)
    const klaviyoApiKey = process.env.KLAVIYO_PRIVATE_API_KEY
    if (klaviyoApiKey) {
      const eventPayload = {
        data: {
          type: "event",
          attributes: {
            profile: {
              data: {
                type: "profile",
                attributes: { email },
              },
            },
            metric: {
              data: {
                type: "metric",
                attributes: { name: "Assessment Results Ready" },
              },
            },
            properties: {
              risk_score: riskScore,
              risk_level: riskLevel,
              recommended_package: packageDetails.name,
              user_count_range: userCountRange,
              compliance_flag: complianceFlag,
              support_level: supportLevel,
              risk_factors: riskFactors.join(", "),
              email_sent: true,
            },
            time: new Date().toISOString(),
          },
        },
      }

      fetch("https://a.klaviyo.com/api/events/", {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${klaviyoApiKey}`,
          "Content-Type": "application/json",
          revision: "2024-02-15",
        },
        body: JSON.stringify(eventPayload),
      }).catch((err) => console.error("Klaviyo event tracking error:", err))
    }

    return NextResponse.json({
      success: true,
      emailId: emailData?.id,
      message: "Assessment results email sent successfully",
    })
  } catch (error) {
    console.error("Send results error:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        message: errorMessage,
      },
      { status: 500 },
    )
  }
}
