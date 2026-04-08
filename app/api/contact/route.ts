import EmailTemplate from "@/components/email/EmailTemplate";
import { Resend } from "resend";

/* Resend client */
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {

    try {
        const res = await request.json()
        if(!res.name || !res.email || !res.message) throw new Error('Incomplete information.')

        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['wengti@hotmail.com'],
            subject: `[Portfolio] Reached out from ${res.name}`,
            react: EmailTemplate({
                name: res.name,
                email: res.email,
                message: res.message
            })
        })

        if (error) return Response.json({ error: error.message }, { status: 500 })
        return Response.json(data)
    }
    catch (error) {
        if (error instanceof Error) return Response.json({ error: error.message }, { status: 500 })
        else return Response.json({ error: 'An unknown error has occured.' }, { status: 500 })
    }
}