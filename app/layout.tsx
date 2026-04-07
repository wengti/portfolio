import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header";

const inter = Inter({
    subsets: ['latin']
})


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-background-black text-letter-gray">
                <Header />
                {children}
            </body>
        </html >
    );
}
