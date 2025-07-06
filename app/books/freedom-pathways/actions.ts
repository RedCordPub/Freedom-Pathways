"use server"

import { Resend } from "resend"

const resend = new Resend("re_KkMSSKhL_LF6NTQRNutRAjyss4oUq6cT5")

export async function requestBookDownload(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const book = formData.get("book") as string

    if (!email || !email.includes("@")) {
      return { success: false, message: "Please provide a valid email address." }
    }

    // Get the base URL for absolute links in emails
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://battletogether.com"

    // Send the book to the subscriber
    const bookResult = await resend.emails.send({
      from: "Together in Battle Ministry <info@battletogether.com>",
      to: [email],
      subject: "Your Free Copy of Freedom Pathways",
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0F3543 0%, #1a4a5a 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Together in Battle Ministry</h1>
        <p style="color: #e0e0e0; margin: 10px 0 0 0;">Your Free Book Download</p>
      </div>
      
      <div style="padding: 30px; background: #ffffff;">
        <h2 style="color: #0F3543; margin-bottom: 20px;">Thank you for your interest in "Freedom Pathways"</h2>
        
        <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
          I'm excited to share this comprehensive guide with you! "Freedom Pathways" provides biblical foundations and practical steps for inner healing and deliverance ministry.
        </p>
        
        <div style="text-align: center; margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <h3 style="color: #0F3543; margin-top: 0; margin-bottom: 15px;">📖 Download Your Free Book</h3>
          <a href="${baseUrl}/books/freedom-pathways.pdf" 
             style="background: #0F3543; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 16px; margin-bottom: 15px;"
             download="Freedom-Pathways.pdf">
            📥 Download PDF Now
          </a>
          <p style="color: #666; margin: 10px 0 0 0; font-size: 14px;">
            Click the button above to download your free copy
          </p>
        </div>
        
        <div style="background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="color: #0F3543; font-weight: bold; margin: 0 0 10px 0;">Alternative Download Options:</p>
          <p style="color: #333; margin: 0; font-size: 14px;">
            • <a href="${baseUrl}/books/freedom-pathways.pdf" style="color: #0F3543; text-decoration: underline;" download="Freedom-Pathways.pdf">Direct download link</a><br>
            • Right-click the button above and select "Save link as..."<br>
            • Visit our website: <a href="${baseUrl}/books" style="color: #0F3543;">battletogether.com/books</a>
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0F3543; margin-top: 0;">What You'll Learn</h3>
          <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
            <li>Biblical foundations for inner healing and deliverance</li>
            <li>How to identify emotional wounds and spiritual strongholds</li>
            <li>Practical steps for facilitating freedom sessions</li>
            <li>Understanding your authority as a believer</li>
            <li>Maintaining freedom and helping others find breakthrough</li>
          </ul>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0F3543; margin-top: 0;">Coming Soon</h3>
          <p style="color: #333; line-height: 1.6;">
            Be on the lookout for my upcoming books:
          </p>
          <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
            <li><strong>Sons of God:</strong> Understanding Your Identity and Authority in Christ</li>
            <li><strong>God's Sworn Enemy:</strong> Exposing Satan's Strategies and Defeating His Plans</li>
          </ul>
          <p style="color: #333; line-height: 1.6;">
            As a subscriber, you'll be the first to know when these resources become available.
          </p>
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
      from: "Book Download <noreply@battletogether.com>",
      to: ["info@battletogether.com"],
      subject: "New Book Download Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Book Download</h2>
          <p>Someone has requested a copy of "Freedom Pathways":</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Book:</strong> ${book}</p>
        </div>
      `,
    })

    return {
      success: true,
      message: "Thank you! Check your email for your free copy of 'Freedom Pathways'.",
    }
  } catch (error) {
    console.error("Error sending book:", error)
    return {
      success: false,
      message: "There was a problem sending your book. Please try again later.",
    }
  }
}
