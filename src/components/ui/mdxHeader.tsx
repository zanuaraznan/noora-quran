'use client';

import Image from 'next/image';
import { cn } from '@/utils/lib';
import { HTMLAttributes } from 'react';
import { useHeaderHeight } from '@/utils/hooks';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
    title: string;
}

export default function MDXHeader({ title, ...props }: HeaderProps) {
    const ref = useHeaderHeight();
    return (
        <header
            {...props}
            ref={ref}
            className={cn(
                'relative flex items-center justify-center w-full bg-black text-white',
                props.className
            )}>
            <Image
                priority
                src='/img/home/carousel_2.jpg'
                width={1920}
                height={1280}
                alt="Backgroud membaca Al-Qur'an"
                className='absolute object-cover inset-0 h-full w-full opacity-35'
            />
            <h1 className='relative z-1'>{title}</h1>
        </header>
    );
}
