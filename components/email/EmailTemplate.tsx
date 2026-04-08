import { Body, Container, Font, Head, Heading, Html, Section, Text } from "@react-email/components";

export default function EmailTemplate({ name, email, message }: { name: string, email: string, message: string }) {

    const font = 'Inter, Arial, sans-serif'

    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Inter"
                    fallbackFontFamily='Arial'
                    webFont={{
                        url: "https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwY.woff2",
                        format: "woff2",
                    }}
                    fontWeight='100 900'
                    fontStyle="normal"
                />
            </Head>
            <Body style={{ backgroundColor: '#151515', color: 'whitesmoke', margin: 0 }}>
                <Container style={{ padding: '24px' }}>
                    <Section style={{ borderBottom: '1px solid #646464', paddingBottom: '16px', marginBottom: '16px' }}>
                        <Heading style={{ fontFamily: font, fontWeight: 600, fontSize: '2rem', color: '#F5C400', margin: 0 }}>
                            WWT
                        </Heading>
                    </Section>
                    <Section style={{ minHeight: '200px', marginBottom: '16px' }}>
                        <Text style={{ fontFamily: font, color: 'whitesmoke', margin: 0 }}>
                            {message}
                        </Text>
                    </Section>
                    <Section>
                        <Text style={{ fontFamily: font, color: 'whitesmoke', margin: 0 }}>
                            By {name}
                        </Text>
                        <Text style={{ fontFamily: font, color: 'whitesmoke', margin: 0, textDecoration:'underline' }}>
                            {email}
                        </Text>
                    </Section>
                </Container>
            </Body>

        </Html>
    )
}