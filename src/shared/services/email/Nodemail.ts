import { createTransport } from 'nodemailer';

export class Nodemail {
    async sendEmail(to: string, subject: string, html: string) {
        const mailOptions = {
            from: process.env.MAIL_USER,
            to,
            subject,
            html,
        };

        const transporter = createTransport({
            service: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return error;
            }
            console.log(info);
            console.log('Email enviado com sucesso');
        });
    }
}
