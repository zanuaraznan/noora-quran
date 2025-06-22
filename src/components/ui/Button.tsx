import { cn } from '@/utils/lib';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    as?: 'primary';
}

export default function Button({ as, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                as === 'primary' &&
                    'p-4 font-medium text-yellow-400 rounded-2xl bg-zinc-900 ring-inset ring-2 ring-zinc-800 border-2 border-zinc-900 transition-colors hover-active:bg-zinc-800',
                props.className
            )}
        />
    );
}
