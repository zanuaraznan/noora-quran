import Image from 'next/image';
import { createElement } from 'react';
import { cn, toCustomCase } from '@/utils/lib';

function RoundImage({ ...props }) {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            className={cn('rounded-2xl', props.className)}
            {...props}
        />
    );
}

function createHeading(level: number) {
    function Heading({ children }: { children: string }) {
        const slug = toCustomCase(children);
        return createElement(`h${level}`, { id: slug }, children);
    }
    Heading.displayName = `Heading${level}`;
    return Heading;
}

export const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundImage,
};
