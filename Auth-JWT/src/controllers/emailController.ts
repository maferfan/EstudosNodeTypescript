import { Request, Response } from 'express'
import nodemailer from 'nodemailer'

export const sendEmail = async (req: Request, res: Response) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "92775c1cb1a976",
            pass: "50c4a2c8a6f832"
        }
    });

    let message = {
        from: 'Matheus Ferrazza <matheus@email.com>',
        to: 'teste@hotmail.com',
        subject: "assunto legal",
        html: 'Opa <strong> teste <strong>, como vai?',
        text: 'Opa teste, como vai?'
    }

    let info = await transport.sendMail(message)
    console.log(info)
    res.json({success: true})
}