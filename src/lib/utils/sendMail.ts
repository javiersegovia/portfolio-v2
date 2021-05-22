import sgMail from '@sendgrid/mail'

const { SENDGRID_API_KEY, DEFAULT_MAIL_FROM } = process.env

sgMail.setApiKey(SENDGRID_API_KEY as string)

type SendMailProps = {
  name: string
  email: string
  message: string
}

export const sendMail = ({ name, email, message }: SendMailProps) => {
  const mail = {
    to: DEFAULT_MAIL_FROM as string,
    from: {
      name: `${name} [Portfolio]`,
      email: DEFAULT_MAIL_FROM as string,
    },
    subject: `🚀🚀🚀 Nuevo mensaje del portfolio: ${name}`,
    html: `<p><strong>Client Name:</strong> ${name}</p> \n 
      <p><strong>Client Email:</strong> ${email}</p> \n 
      <p><strong>Message:</strong> ${message}</p>`,
  }

  return sgMail.send(mail)
}
