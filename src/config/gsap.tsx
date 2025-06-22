'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase, ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);
CustomEase.create('myEase', 'M,0,0 .28,0,.01,.99,1,1');

export default function WithGSAP() {
    useGSAP(() => {
        const splitTargets = gsap.utils.toArray('.split');
        splitTargets.forEach((el) => {
            let target = el as HTMLElement;
            const split = new SplitText(target, {
                type: 'words,lines',
                mask: 'lines',
            });

            gsap.set(target, {
                willChange: 'transform, opacity',
                autoAlpha: 1,
                yPercent: 0,
            });

            gsap.from(split.words, {
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.05,
                autoAlpha: 0,
                yPercent: 100,
                scrollTrigger: {
                    trigger: target,
                    start: 'top 90%',
                    toggleActions: 'restart none none none',
                },
            });
        });

        const appearTargets = gsap.utils.toArray('.appear');
        appearTargets.forEach((el) => {
            const target = el as HTMLElement;
            gsap.set(target, {
                willChange: 'transform, opacity',
                autoAlpha: 1,
                yPercent: 0,
            });

            gsap.from(target, {
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1,
                autoAlpha: 0,
                yPercent: 100,
                scrollTrigger: target,
            });
        });
    }, []);
    return null;
}
