import Link from 'next/link';
import Button from '../Button';
import { cn } from '@/utils/lib';
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { navLinks } from '@/config/data';
import { useModalStore } from '@/app/store';
import { MdClose, MdMenu } from 'react-icons/md';
import { useCheckMobile, useClickOutside } from '@/utils/hooks';

export function NavbarLinks({ ...props }: HTMLAttributes<HTMLAnchorElement>) {
    return navLinks.map((nav) => {
        const id = nav === 'Beranda' ? '/' : nav.toLowerCase().split(' ')[0];
        return (
            <Link key={id} href={id} {...props}>
                {nav}
            </Link>
        );
    });
}

function NavbarModal() {
    const { setClose, isAnimating, isOpen } = useModalStore();
    const modalRef = useClickOutside(() => setClose(150), [isOpen]);

    return createPortal(
        <div className='fixed z-9999 inset-0 bg-black/25 backdrop-blur-xs flex justify-end'>
            <aside
                ref={modalRef}
                className={cn(
                    'w-1/2 p-4 bg-white h-full flex flex-col gap-4 list-none transition-transform transform translate-x-full text-[initial]',
                    isAnimating && 'translate-x-0'
                )}>
                <header className='flex items-center justify-between mb-4'>
                    <h1 className='playfair text-xl font-semibold'>Menu</h1>
                    <button className='p-3' onClick={() => setClose(150)}>
                        <MdClose size={18} />
                    </button>
                </header>
                <NavbarLinks
                    onClick={() => setClose(150)}
                    className='p-3 transition-opacity hover-active:opacity-50'
                />
            </aside>
        </div>,
        document.body
    );
}

export default function NavbarList() {
    const checkMobile = useCheckMobile();
    const { setOpen, isOpen } = useModalStore();

    return (
        checkMobile != null &&
        (checkMobile ? (
            <>
                <Button
                    aria-label='Open navigation menu'
                    className='p-3'
                    onClick={() => setOpen()}>
                    <MdMenu size={18} aria-hidden />
                </Button>
                {isOpen && <NavbarModal />}
            </>
        ) : (
            <ul className='flex items-center gap-4 *:p-3'>
                <NavbarLinks />
            </ul>
        ))
    );
}
