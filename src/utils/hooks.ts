import { useHeaderStore } from '@/app/store';
import {
    DependencyList,
    RefObject,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

function useClickOutside<T extends HTMLElement>(
    handler: () => void,
    dependencies: DependencyList
): RefObject<T> {
    const ref = useRef<T>(null as unknown as T);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handler, ...dependencies]);

    return ref;
}

function useHeaderHeight(): RefObject<HTMLElement | null> {
    const ref = useRef<HTMLElement | null>(null);
    const { setHeight } = useHeaderStore();

    useEffect(() => {
        if (!ref.current) return;
        setHeight(ref.current.offsetHeight);
    }, [setHeight]);

    return ref;
}

function useCheckMobile() {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    useLayoutEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 512);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
}

function useMounted(delay: number = 0) {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, delay);
    }, [delay]);

    return isMounted;
}

export { useClickOutside, useCheckMobile, useHeaderHeight, useMounted };
