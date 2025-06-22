import { cn } from '@/utils/lib';
import { ComponentPropsWithoutRef, ElementType } from 'react';

interface ContainerProps<T extends ElementType> {
    as?: T;
}

export default function Container<T extends ElementType = 'div'>({
    as,
    ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
    const Component = as ?? 'div';
    return (
        <Component {...props} className={cn('container mx-auto px-4', props.className)} />
    );
}
