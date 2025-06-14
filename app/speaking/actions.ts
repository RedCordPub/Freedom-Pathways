"use server"

import { Resend } from "resend"

const resend = new Resend("re_KkMSSKhL_LF6NTQRNutRAjyss4oUq6cT5")

export async function submitSpeakingRequest(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      organization: formData.get("organization") as string,
      eventDate: formData.get("event-date") as string,
      eventType: formData.get("event-type") as string,
      expectedAttendance: formData.get("expected-attendance") as string,
      location: formData.get("location") as string,
      topic: formData.get("topic") as string,
      message: formData.get("message") as string,
    }

    // Send confirmation email to the person who submitted the form
    await resend.emails.send({
      from: "Together in Battle Ministry <info@battletogether.com>", // Updated to use your domain
      to: [data.email],
      subject: "Speaking Request Received - Together in Battle Ministry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0F3543 0%, #1a4a5a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Together in Battle Ministry</h1>
            <p style="color: #e0e0e0; margin: 10px 0 0 0;">Speaking Request Confirmation</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543; margin-bottom: 20px;">Thank you for your speaking request!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Dear ${data.name},
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              We have received your speaking request for <strong>${data.organization}</strong> and are excited about the opportunity to minister at your event.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0F3543; margin-top: 0;">Event Details:</h3>
              <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
                <li><strong>Event Date:</strong> ${new Date(data.eventDate).toLocaleDateString()}</li>
                <li><strong>Event Type:</strong> ${data.eventType}</li>
                <li><strong>Location:</strong> ${data.location}</li>
                ${data.expectedAttendance ? `<li><strong>Expected Attendance:</strong> ${data.expectedAttendance}</li>` : ""}
                ${data.topic ? `<li><strong>Preferred Topic:</strong> ${data.topic}</li>` : ""}
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              <strong>What happens next?</strong>
            </p>
            
            <ul style="color: #333; line-height: 1.8; padding-left: 20px; margin-bottom: 20px;">
              <li>We will review your request within 48 hours</li>
              <li>Pastor Cody will personally respond to discuss your event details</li>
              <li>We'll work together to customize the message for your specific needs</li>
              <li>All logistics and arrangements will be confirmed prior to the event</li>
            </ul>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
              If you have any immediate questions or need to make changes to your request, please don't hesitate to contact us directly.
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
              Empowering believers to find freedom and victory through Christ
            </p>
          </div>
        </div>
      `,
    })

    // Send notification email to ministry team
    await resend.emails.send({
      from: "Speaking Requests <noreply@battletogether.com>", // Updated to use your domain
      to: ["info@battletogether.com"],
      subject: `New Speaking Request from ${data.name} - ${data.organization}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F3543; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Speaking Request</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543;">Contact Information</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
              <li><strong>Organization:</strong> ${data.organization}</li>
            </ul>
            
            <h2 style="color: #0F3543;">Event Details</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Date:</strong> ${new Date(data.eventDate).toLocaleDateString()}</li>
              <li><strong>Type:</strong> ${data.eventType}</li>
              <li><strong>Location:</strong> ${data.location}</li>
              <li><strong>Expected Attendance:</strong> ${data.expectedAttendance || "Not specified"}</li>
              <li><strong>Preferred Topic:</strong> ${data.topic || "Not specified"}</li>
            </ul>
            
            ${
              data.message
                ? `
              <h2 style="color: #0F3543;">Additional Details</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
                <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
              </div>
            `
                : ""
            }
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 5px;">
              <p style="margin: 0; color: #0F3543; font-weight: bold;">
                📧 Reply directly to this email to respond to ${data.name}
              </p>
            </div>
          </div>

          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              Together in Battle Ministry<br>
              Email: info@battletogether.com<br>
              Website: battletogether.com
            </p>
            <p style="color: #999; margin: 10px 0 0 0; font-size: 12px;">
              Empowering believers to find freedom and victory through Christ
            </p>
          </div>
        </div>
      `,
      replyTo: data.email,
    })

    return { success: true, message: "Speaking request submitted successfully!" }
  } catch (error) {
    console.error("Error submitting speaking request:", error)
    return { success: false, message: "Failed to submit request. Please try again." }
  }
}
