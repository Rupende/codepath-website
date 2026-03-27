export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, role, message } = await req.json();

    await resend.emails.send({
      from: "CodePath Website <onboarding@resend.dev>",
      to: ["codepathconsulting@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} (${role})`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F7FAF9; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #0F3D30, #1A5C4A); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New CodePath Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">From the website contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: white; border-radius: 8px; margin-bottom: 8px; display: block;">
                <strong style="color: #1A5C4A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</strong>
                <p style="margin: 4px 0 0; color: #1A2E28; font-size: 16px;">${name}</p>
              </td>
            </tr>
          </table>

          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 12px;">
            <p style="color: #5A7A70; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Name</p>
            <p style="color: #1A2E28; font-size: 16px; margin: 0;">${name}</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 12px;">
            <p style="color: #5A7A70; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Email</p>
            <p style="color: #E84E0F; font-size: 16px; margin: 0;">${email}</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 12px;">
            <p style="color: #5A7A70; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Role</p>
            <p style="color: #1A2E28; font-size: 16px; margin: 0; text-transform: capitalize;">${role}</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #5A7A70; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Message</p>
            <p style="color: #1A2E28; font-size: 16px; margin: 0; line-height: 1.6;">${message}</p>
          </div>

          <div style="background: linear-gradient(135deg, #E84E0F, #FF6B35); border-radius: 12px; padding: 16px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}