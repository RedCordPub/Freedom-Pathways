"use server"

import { Resend } from "resend"

const resend = new Resend("re_KkMSSKhL_LF6NTQRNutRAjyss4oUq6cT5")

export async function submitInterestForm(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const interests = formData.getAll("interests") as string[]
    const name = formData.get("name") as string
    const additionalInfo = formData.get("additionalInfo") as string

    console.log("Interest form submission:", {
      email,
      name,
      interests,
      additionalInfo,
    })

    // Send confirmation email to the person who submitted the form
    const confirmationResult = await resend.emails.send({
      from: "Together in Battle Ministry <info@battletogether.com>",
      to: [email],
      subject: "Thank You for Your Interest in Freedom Pathways",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0F3543 0%, #1a4a5a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Freedom Pathways</h1>
            <p style="color: #e0e0e0; margin: 10px 0 0 0;">Together in Battle Ministry</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543; margin-bottom: 20px;">Thank you for your interest in our Freedom Pathways Community!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Dear ${name || "Friend"},
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              You will be the first to know about our online community. We're excited to have you join us on this journey toward freedom and victory in Christ.
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, you can check out our content on our YouTube channel:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.youtube.com/@persellcody" style="background: #FF0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our YouTube Channel</a>
            </div>
            
            ${
              interests.length > 0
                ? `
                <div style="background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <h4 style="color: #0F3543; margin-top: 0;">You expressed interest in:</h4>
                  <ul style="color: #333; line-height: 1.6; padding-left: 20px; margin: 0;">
                    ${interests.map((interest) => `<li>${interest}</li>`).join("")}
                  </ul>
                </div>
                `
                : ""
            }
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
              If you have any questions in the meantime, please don't hesitate to contact us directly.
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 10px;">
              Blessings,
            </p>
            
            <p style="color: #333; line-height: 1.6; font-weight: bold; margin-bottom: 30px;">
              Cody Persell<br>
              Together in Battle
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              Together in Battle Ministry<br>
              Email: info@battletogether.com<br>
              Website: battletogether.com
            </p>
            <p style="color: #999; margin: 10px 0 0 0; font-size: 12px;">
              "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives" - Isaiah 61:1
            </p>
          </div>
        </div>
      `,
    })

    console.log("Confirmation email result:", confirmationResult)

    // Send notification email to ministry team
    const notificationResult = await resend.emails.send({
      from: "Freedom Pathways Interest <noreply@battletogether.com>",
      to: ["info@battletogether.com"],
      subject: `New Freedom Pathways Interest from ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F3543; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Freedom Pathways Interest</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543;">Contact Information</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Name:</strong> ${name || "Not provided"}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
            
            <h2 style="color: #0F3543;">Areas of Interest</h2>
            <ul style="line-height: 1.8;">
              ${interests.map((interest) => `<li>${interest}</li>`).join("")}
            </ul>
            
            ${
              additionalInfo
                ? `
              <h2 style="color: #0F3543;">Additional Information</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                <p style="margin: 0; white-space: pre-wrap;">${additionalInfo}</p>
              </div>
            `
                : ""
            }
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; color: #0F3543; font-weight: bold;">
                📧 Reply directly to this email to respond to ${name || "this person"}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    })

    console.log("Notification email result:", notificationResult)

    return { success: true }
  } catch (error) {
    console.error("Error submitting interest form:", error)
    return { success: false, error: "Failed to submit your information. Please try again." }
  }
}
