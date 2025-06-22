import Link from 'next/link';
import Image from 'next/image';
import WithGSAP from '@/config/gsap';
import { MdHome } from 'react-icons/md';
import Container from '@/components/ui/Container';

export default function NotFound() {
    return (
        <section className='h-dvh relative w-full bg-black text-white'>
            <WithGSAP />
            <Image
                priority
                src='/img/home/carousel_2.jpg'
                width={1920}
                height={1280}
                alt="Backgroud membaca Al-Qur'an"
                className='absolute object-cover inset-0 h-full w-full opacity-35'
            />
            <Container className='flex flex-col items-center justify-center gap-4 text-white h-full relative z-1'>
                <h1 className='!text-6xl split'>404</h1>
                <p className='split'>Halaman tidak ditemukan</p>
                <Link
                    href='/'
                    className='appear group p-3 px-4 rounded-full bg-zinc-800 text-white ring-inset ring-3 ring-zinc-600 flex items-center gap-2 w-fit hover-active:bg-zinc-700'>
                    <MdHome size={18} />
                    Kembali ke beranda
                </Link>
            </Container>
        </section>
    );
}
