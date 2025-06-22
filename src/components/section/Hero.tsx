'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { useHeaderHeight } from '@/utils/hooks';

export default function HeroSection() {
    const ref = useHeaderHeight();

    return (
        <section
            ref={ref}
            className='h-screen relative flex items-center w-full bg-black text-white'>
            <Image
                priority
                src='/img/home/carousel_1.jpg'
                width={1920}
                height={1280}
                alt="Backgroud membaca Al-Qur'an"
                className='absolute object-cover inset-0 h-full w-full opacity-35'
            />

            <Container as='div' className='relative z-1 space-y-6'>
                <h1 className='split md:w-[80%]'>
                    Belajar Membaca Al-Qur'an untuk dengan Mudah dan Sistematis
                </h1>
                <p className='split md:w-[50%] text-justify'>
                    Kami menyediakan kelas online membaca Al-Qur'an yang dirancang untuk
                    membantu muslimah Indonesia membaca setiap ayat dengan benar.
                </p>
                <Button className='appear' as='primary'>
                    Daftar program
                </Button>
            </Container>
        </section>
    );
}
