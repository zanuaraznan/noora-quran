'use client';
import Logo from '../Logo';
import Button from './Button';
import Container from './Container';
import { useEffect, useRef } from 'react';
import { useHeaderStore } from '@/app/store';
import NavbarList from './navbar/NavbarLinks';

export default function Navbar() {
    const prevScroll = useRef(0);
    const navRef = useRef<HTMLDivElement>(null);
    const { height } = useHeaderStore();

    useEffect(() => {
        if (typeof height !== 'number') return;

        function handleScroll() {
            const currentScroll = window.scrollY;

            if (navRef.current) {
                navRef.current.classList.toggle(
                    'is-visible',
                    currentScroll > prevScroll.current
                );
                navRef.current.classList.toggle(
                    'not-hero',
                    currentScroll > (height ?? 100) - navRef.current.offsetHeight
                );
            }
            prevScroll.current = currentScroll;
        }

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [height]);
    return (
        <nav
            ref={navRef}
            className='transition-transform transform [&.is-visible]:-translate-y-full w-full fixed z-999 py-3 top-0 duration-500 text-white bg-white/1 backdrop-blur-md'>
            <Container as='header' className='flex items-center justify-between'>
                <Logo />
                <div className='flex items-center gap-2'>
                    <NavbarList />
                    <Button as='primary' className='p-3 px-5'>
                        Login
                    </Button>
                </div>
            </Container>
        </nav>
    );
}
