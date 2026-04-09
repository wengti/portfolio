import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Metadata } from "next";

const inter = Inter({
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: {
        template: '%s | WWT',
        default: 'WWT'
    },
    description: "The home page for Wong Weng Ti's portfolio site."
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-background-black text-letter-gray">
                <Header />
                
                <main className='min-h-[calc(100vh-136px)] flex flex-col'> {/* main has a min height of 100vh minus the height of header and footer */}
                    {children}
                </main>

                <Footer />
        </body>
        </html >
    );
}
