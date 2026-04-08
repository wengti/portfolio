import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
    subsets: ['latin']
})


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-background-black text-letter-gray">
                <Header />
                
                <main className='mb-12'>
                    {children}
                </main>

                <Footer />
        </body>
        </html >
    );
}
