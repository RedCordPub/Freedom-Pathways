"use server"

import { Resend } from "resend"

const resend = new Resend("re_KkMSSKhL_LF6NTQRNutRAjyss4oUq6cT5")

export async function submitFreedomSessionRequest(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      age: formData.get("age") as string,
      sessionType: formData.get("session-type") as string,
      sessionFormat: formData.get("session-format") as string,
      availability: formData.get("availability") as string,
      areasOfConcern: formData.get("areas-of-concern") as string,
      previousMinistry: formData.get("previous-ministry") as string,
      urgency: formData.get("urgency") as string,
      additionalInfo: formData.get("additional-info") as string,
    }

    console.log("Attempting to send confirmation email to:", data.email)

    // Send confirmation email to the person who submitted the form
    const confirmationResult = await resend.emails.send({
      from: "Together in Battle Ministry <info@battletogether.com>",
      to: [data.email],
      subject: "Freedom Session Request Received - Together in Battle Ministry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0F3543 0%, #1a4a5a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Together in Battle Ministry</h1>
            <p style="color: #e0e0e0; margin: 10px 0 0 0;">Freedom Session Request Confirmation</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543; margin-bottom: 20px;">Thank you for requesting a freedom session!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Dear ${data.name},
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              We have received your request for a freedom session. Thank you for taking this step toward healing and breakthrough.
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              <strong>What happens next?</strong>
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Someone from Together in Battle Ministry will reach out to you soon to schedule your 1-hour session and provide any additional information you might need.
            </p>
            
            <div style="background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="color: #0F3543; margin-top: 0;">Preparation Reminders:</h4>
              <ul style="color: #333; line-height: 1.6; padding-left: 20px; margin: 0;">
                <li>Spend time in prayer asking God to prepare your heart</li>
                <li>Consider fasting if you feel led by the Holy Spirit</li>
                <li>Come with an open heart and willingness to receive</li>
                <li>Trust that God wants your freedom more than you do</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
              If you have any questions in the meantime, please don't hesitate to contact us directly.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://battletogether.com" style="background: #0F3543; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our Website</a>
            </div>
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

    console.log("Attempting to send notification email to ministry team")

    // Send notification email to ministry team
    const notificationResult = await resend.emails.send({
      from: "Freedom Sessions <noreply@battletogether.com>",
      to: ["info@battletogether.com"],
      subject: `New Freedom Session Request from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F3543; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Freedom Session Request</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543;">Contact Information</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
              <li><strong>Age:</strong> ${data.age || "Not provided"}</li>
            </ul>
            
            <h2 style="color: #0F3543;">Session Preferences</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Type:</strong> ${data.sessionType}</li>
              <li><strong>Format:</strong> ${data.sessionFormat}</li>
              <li><strong>Urgency:</strong> ${data.urgency}</li>
              <li><strong>Availability:</strong> ${data.availability || "Not specified"}</li>
            </ul>
            
            <h2 style="color: #0F3543;">Areas of Concern</h2>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 0; white-space: pre-wrap;">${data.areasOfConcern}</p>
            </div>
            
            ${
              data.previousMinistry
                ? `
              <h2 style="color: #0F3543;">Previous Ministry Experience</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                <p style="margin: 0; white-space: pre-wrap;">${data.previousMinistry}</p>
              </div>
            `
                : ""
            }
            
            ${
              data.additionalInfo
                ? `
              <h2 style="color: #0F3543;">Additional Information</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                <p style="margin: 0; white-space: pre-wrap;">${data.additionalInfo}</p>
              </div>
            `
                : ""
            }
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; color: #0F3543; font-weight: bold;">
                📧 Reply directly to this email to respond to ${data.name}
              </p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                Urgency Level: <strong>${data.urgency}</strong>
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: data.email,
    })

    console.log("Notification email result:", notificationResult)

    return { success: true, message: "Freedom session request submitted successfully!" }
  } catch (error) {
    console.error("Error submitting freedom session request:", error)
    return { success: false, message: "Failed to submit request. Please try again." }
  }
}
