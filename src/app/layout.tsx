/**
 * Project Name: Noora - Qur'an
 * Description: A landing page for a online learning Qur'an for muslimah based on Indonesia.
 *
 * Author: Zanuar Rasyidin
 * Email: zanuar.rsy08@gmail.com
 * Date: 7th June 2025
 */

import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import { siteConfig } from '@/config/site';
import Footer from '@/components/ui/Footer';
import { Playfair, Poppins } from 'next/font/google';

const playfair = Playfair({
    subsets: ['latin'],
    variable: '--font-playfair',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: {
        default: `Home | ${siteConfig.title}`,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    authors: siteConfig.authors,
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body
                className={`${poppins.className} ${playfair.variable} antialiased bg-amber-100 text-zinc-800`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
