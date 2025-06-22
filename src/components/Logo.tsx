import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Logo() {
    return (
        <Link href='/' className='flex items-center gap-3'>
            <Image
                priority
                src='/img/noora.png'
                width={36}
                height={36}
                alt={siteConfig.title}
            />
            <h2 className='font-semibold text-xl playfair'>Noora Qur&apos;an</h2>
        </Link>
    );
}
