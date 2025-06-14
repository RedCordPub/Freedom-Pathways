"use server"

import { Resend } from "resend"

const resend = new Resend("re_KkMSSKhL_LF6NTQRNutRAjyss4oUq6cT5")

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !email.includes("@")) {
      return { success: false, message: "Please provide a valid email address." }
    }

    // Send confirmation email to subscriber
    const confirmationResult = await resend.emails.send({
      from: "Together in Battle Ministry <info@battletogether.com>",
      to: [email],
      subject: "Thank You for Subscribing to Our Book Updates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0F3543 0%, #1a4a5a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Together in Battle Ministry</h1>
            <p style="color: #e0e0e0; margin: 10px 0 0 0;">Book Updates & New Releases</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543; margin-bottom: 20px;">Thank you for subscribing!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              We're excited to have you join our community of readers and spiritual warriors. You'll be the first to know about our upcoming book releases, including "Sons of God" and "God's Sworn Enemy."
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0F3543; margin-top: 0;">What to expect:</h3>
              <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
                <li>New book announcements</li>
                <li>Early access opportunities</li>
                <li>Exclusive content and excerpts</li>
                <li>Special offers for subscribers</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, you might be interested in our currently available books:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://battletogether.com/books" style="background: #0F3543; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Explore Our Books</a>
            </div>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 10px;">
              Blessings,
            </p>
            
            <p style="color: #333; line-height: 1.6; font-weight: bold; margin-bottom: 30px;">
              Cody Persell<br>
              Together in Battle Ministry
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              Together in Battle Ministry<br>
              Email: info@battletogether.com<br>
              Website: battletogether.com
            </p>
            <p style="color: #999; margin: 10px 0 0 0; font-size: 12px;">
              If you no longer wish to receive these emails, you can <a href="#" style="color: #999;">unsubscribe</a> at any time.
            </p>
          </div>
        </div>
      `,
    })

    // Send notification to admin
    await resend.emails.send({
      from: "Book Newsletter <noreply@battletogether.com>",
      to: ["info@battletogether.com"],
      subject: "New Book Newsletter Subscriber",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Newsletter Subscriber</h2>
          <p>A new user has subscribed to receive book updates:</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Books page</p>
        </div>
      `,
    })

    return { success: true, message: "Thank you for subscribing! Check your email for confirmation." }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return { success: false, message: "Failed to subscribe. Please try again later." }
  }
}
