import Link from 'next/link';
import { cn } from '@/utils/lib';
import { HTMLAttributes } from 'react';
import Container from '../ui/Container';
import { MdArrowRightAlt } from 'react-icons/md';
import { features, FeatureType } from '@/config/data';

interface FeatureProps extends HTMLAttributes<HTMLDivElement> {
    featureData: FeatureType;
}

function Feauture({ featureData, ...props }: FeatureProps) {
    const { icon: Icon, title, description, href } = featureData;
    return (
        <div
            {...props}
            className={cn('p-8 rounded-2xl bg-white/75 space-y-4', props.className)}>
            <div className='flex items-center gap-3'>
                <Icon size={22} className='text-yellow-500' />
                <span className='text-lg font-medium'>{title}</span>
            </div>
            <p className='text-justify'>{description}</p>
            <Link
                href={href}
                className='group p-3 px-4 rounded-full bg-zinc-800 text-white ring-inset ring-3 ring-zinc-600 flex items-center gap-2 text-sm w-fit transition-colors hover-active:bg-zinc-700'>
                Baca lebih lanjut
                <div className='relative flex items-center overflow-hidden *:transition-transform'>
                    <MdArrowRightAlt size={22} className='group-hover:translate-x-full' />
                    <MdArrowRightAlt
                        size={22}
                        className='absolute -translate-x-full group-hover:translate-x-0'
                    />
                </div>
            </Link>
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <Container as='section'>
            <h1 className='split text-center mb-8'>Halaqah Online Khusus Muslimah</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {features.map((feature, idx) => (
                    <Feauture key={idx} featureData={feature} className='appear' />
                ))}
            </div>
        </Container>
    );
}
