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
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
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
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%); padding: 40px 30px; text-align: center;">
              <img src="https://coreinnovateit.com/logo.png" alt="Core Innovate IT" style="height: 50px; margin-bottom: 20px;">
              <h1 style="color: #ffffff; font-size: 28px; margin: 0 0 10px 0; font-weight: 700;">Your IT & Security Assessment Results</h1>
              <p style="color: #94a3b8; font-size: 16px; margin: 0;">Here's your personalised security analysis</p>
            </td>
          </tr>

          <!-- Risk Score -->
          <tr>
            <td style="padding: 30px;">
              <div style="text-align: center; margin-bottom: 20px;">
                <span style="display: inline-block; background-color: ${riskColor.bg}; color: #ffffff; padding: 10px 24px; border-radius: 50px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                  ${riskLevel} Risk
                </span>
              </div>
              <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 12px;">
                <div style="font-size: 64px; font-weight: 700; color: #3b82f6; line-height: 1;">${riskScore}</div>
                <div style="font-size: 14px; color: #64748b; margin-top: 5px;">Risk Score (out of 100)</div>
              </div>
            </td>
          </tr>

          <!-- Assessment Summary -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #1e293b; font-size: 18px; margin: 0 0 16px 0; font-weight: 600;">Assessment Summary</h3>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 14px; border-bottom: 1px solid #e2e8f0;">Organisation Size</td>
                        <td style="padding: 12px 0; color: #1e293b; font-size: 14px; text-align: right; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${userCountRange}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 14px; border-bottom: 1px solid #e2e8f0;">Compliance Requirements</td>
                        <td style="padding: 12px 0; color: #1e293b; font-size: 14px; text-align: right; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${complianceFlag ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Support Preference</td>
                        <td style="padding: 12px 0; color: #1e293b; font-size: 14px; text-align: right; font-weight: 500;">${supportLevel}</td>
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
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #92400e; font-size: 18px; margin: 0 0 16px 0; font-weight: 600;">Key Risk Factors Identified</h3>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #92400e; font-size: 14px; line-height: 1.8;">
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
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 32px;">
                    <div style="text-align: center; margin-bottom: 16px;">
                      <span style="display: inline-block; background-color: rgba(255,255,255,0.2); color: #ffffff; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Recommended</span>
                    </div>
                    <h2 style="color: #ffffff; font-size: 32px; margin: 0 0 8px 0; text-align: center; font-weight: 700;">${packageDetails.name}</h2>
                    <p style="color: #c7d2fe; font-size: 16px; margin: 0 0 24px 0; text-align: center;">${packageDetails.tagline}</p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      ${packageDetails.features.map(feature => `
                        <tr>
                          <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">
                            <span style="color: #34d399; margin-right: 12px; font-size: 18px;">&#10003;</span>
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
            <td style="padding: 0 30px 40px 30px; text-align: center; background-color: #f8fafc;">
              <div style="padding: 40px 0;">
                <p style="color: #64748b; font-size: 18px; margin: 0 0 24px 0;"><strong>Ready to protect your organisation?</strong></p>
                <a href="https://coreinnovateit.com/contact-us" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);">Book a Free Consultation</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px; border-radius: 0 0 16px 16px; text-align: center;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 8px 0;">
                <strong>Core Innovate IT</strong> | Secure IT & Cybersecurity Solutions
              </p>
              <p style="color: #64748b; font-size: 12px; margin: 0;">
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
      return NextResponse.json({
        error: "Email service not configured",
        message: "RESEND_API_KEY is missing from environment variables",
      }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)
    const fromEmail = process.env.KLAVIYO_FROM_EMAIL || "noreply@coreinnovateit.co.uk"

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
      }, { status: 500 })
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
          "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
          "Content-Type": "application/json",
          "revision": "2024-02-15",
        },
        body: JSON.stringify(eventPayload),
      }).catch(err => console.error("Klaviyo event tracking error:", err))
    }

    return NextResponse.json({
      success: true,
      emailId: emailData?.id,
      message: "Assessment results email sent successfully",
    })
  } catch (error) {
    console.error("Send results error:", error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json({
      error: "Failed to send email",
      message: errorMessage,
    }, { status: 500 })
  }
}
