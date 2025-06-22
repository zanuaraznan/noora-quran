import { createRef, RefObject } from 'react';
import { create } from 'zustand';

type ModalState = {
    isOpen: boolean;
    isAnimating: boolean;
    toggle(): void;
    setOpen(): void;
    setClose(delay?: number): void;
};

const useModalStore = create<ModalState>((set, get) => ({
    isOpen: false,
    isAnimating: false,
    setOpen: () => {
        set({ isOpen: true });
        setTimeout(() => set({ isAnimating: true }), 10);
    },
    setClose: (delay = 0) => {
        set({ isAnimating: false });
        setTimeout(() => set({ isOpen: false }), delay);
    },
    toggle: () => {
        const { isOpen, setOpen, setClose } = get();
        if (isOpen) {
            setClose();
        } else {
            setOpen();
        }
    },
}));

type HeaderState = {
    height: number | undefined;
    setHeight: (height: number) => void;
};

const useHeaderStore = create<HeaderState>((set) => ({
    height: undefined,
    setHeight: (height) => set({ height }),
}));

export { useModalStore, useHeaderStore };
