import WithGSAP from '@/config/gsap';
import HeroSection from '@/components/section/Hero';
import FeaturesSection from '@/components/section/Features';

export default function Home() {
    return (
        <main className='space-y-20'>
            <WithGSAP />
            <HeroSection />
            <FeaturesSection />
        </main>
    );
}
