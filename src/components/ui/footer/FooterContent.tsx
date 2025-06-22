'use client';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { HTMLAttributes } from 'react';
import { contactInfo, socials } from '@/config/data';
import { NavbarLinks } from '../navbar/NavbarLinks';

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
}

function ItemWrapper({ title, ...props }: WrapperProps) {
    return (
        <div {...props}>
            <h1 className='mb-4 !text-3xl'>{title}</h1>
            {props.children}
        </div>
    );
}

function About() {
    return (
        <div className='space-y-4'>
            <Logo />
            <p className='max-md:w-[80%]'>
                Noora Program: Solusi Tepat Belajar Tajwid bagi Muslimah.
            </p>
            <div className='flex items-center gap-2'>
                {Object.entries(socials).map(([key, { href, icon: Icon }]) => (
                    <Link
                        key={key}
                        href={href}
                        aria-label={key}
                        target='_blank'
                        rel='noopener noreferrer'
                        referrerPolicy='no-referrer'
                        className='p-3 rounded-full bg-zinc-800 text-white ring-inset ring-2 ring-zinc-600'>
                        <Icon size={18} aria-hidden />
                    </Link>
                ))}
            </div>
        </div>
    );
}

function QuickLinks() {
    return (
        <ItemWrapper title='Tautan Cepat' className='flex flex-col'>
            <NavbarLinks className='p-2 transition-opacity hover-active:opacity-50' />
        </ItemWrapper>
    );
}

function OperationalTime() {
    return (
        <ItemWrapper title='Jam Operasional' className='flex flex-col'>
            <ul className='[&_li>:first-child]:text-lg [&_li>:first-child]:font-medium [&_span]:block space-y-4'>
                <li>
                    <span>Ahad - Jum'at</span>
                    <span>07.00 - 21.00 WIB</span>
                </li>
                <li>
                    <span>Sabtu</span>
                    <span className='text-red-500'>Libur</span>
                </li>
            </ul>
        </ItemWrapper>
    );
}

function ContactInfo() {
    return (
        <ItemWrapper title='Info Kontak' className='space-y-4'>
            {Object.entries(contactInfo).map(([key, { label, icon: Icon, href }]) => (
                <Link
                    key={key}
                    aria-label={key}
                    href={href}
                    className='flex items-center gap-2 transition-opacity hover-active:opacity-50'>
                    <Icon size={18} aria-hidden />
                    <span>{label}</span>
                </Link>
            ))}
        </ItemWrapper>
    );
}

export { About, QuickLinks, OperationalTime, ContactInfo };
