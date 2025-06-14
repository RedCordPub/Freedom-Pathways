"use server"

import { Resend } from "resend"

const resend = new Resend("re_KkMSSKhL_LF6NTQRNutRAjyss4oUq6cT5")

export async function sendDonationThankYou(data: {
  name: string
  email: string
  amount: string
  isMonthly: boolean
  transactionId: string
  date: string
}) {
  try {
    await resend.emails.send({
      from: "Together in Battle Ministry <info@battletogether.com>",
      to: [data.email],
      subject: "Thank You for Your Donation - Together in Battle Ministry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0F3543 0%, #1a4a5a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Together in Battle Ministry</h1>
            <p style="color: #e0e0e0; margin: 10px 0 0 0;">Donation Receipt</p>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0F3543; margin-bottom: 20px;">Thank you for your generous donation!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Dear Friend,
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Thank you for your ${data.isMonthly ? "monthly" : "one-time"} donation of $${data.amount} to Together in Battle Ministry. Your generosity helps us continue our mission of equipping believers to find freedom and victory through Christ.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0F3543; margin-top: 0;">Donation Details:</h3>
              <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
                <li><strong>Amount:</strong> $${data.amount}</li>
                <li><strong>Type:</strong> ${data.isMonthly ? "Monthly Recurring" : "One-time"}</li>
                <li><strong>Date:</strong> ${data.date}</li>
                <li><strong>Transaction ID:</strong> ${data.transactionId}</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Your donation is tax-deductible. Please keep this receipt for your tax records.
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
              If you have any questions about your donation, please don't hesitate to contact us at info@battletogether.com.
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
              Together in Battle Ministry is a registered 501(c)(3) nonprofit organization.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending donation thank you email:", error)
    return { success: false, error }
  }
}
