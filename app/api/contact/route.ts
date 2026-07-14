import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, phone, email, message, service } = data

    if (!name || !phone) {
      return NextResponse.json({ error: 'Nombre y teléfono son obligatorios.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'cp7122.webempresa.eu',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'info@constructoravalencia.com',
        pass: process.env.SMTP_PASS, // Needs to be configured in .env or Vercel
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'info@constructoravalencia.com'}>`, // Send FROM the authenticated email to avoid spam blocks
      replyTo: email || undefined,
      to: process.env.SMTP_USER || 'info@constructoravalencia.com', // Receive AT the same email
      subject: `NUEVO PRESUPUESTO: ${name} - ${service || 'General'}`,
      html: `
        <h2>Nuevo mensaje de presupuesto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
        <p><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
        <p><strong>Mensaje / Detalles:</strong></p>
        <p>${message || 'No se han proporcionado más detalles.'}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Correo enviado correctamente' })
  } catch (error: unknown) {
    console.error('Error al enviar correo:', error)
    return NextResponse.json(
      { error: 'Error enviando el mensaje. Por favor, llámanos directamente.' },
      { status: 500 }
    )
  }
}
