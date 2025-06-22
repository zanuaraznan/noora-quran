import { IconType } from 'react-icons';
import { FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import {
    MdCastForEducation,
    MdEmail,
    MdLocationPin,
    MdOutlineGroups,
    MdOutlineVolunteerActivism,
} from 'react-icons/md';

const navLinks = ['Beranda', 'Tentang kami', 'Program', 'Kontak'];

type SocialType = {
    icon: IconType;
    href: string;
};

const socials: Record<string, SocialType> = {
    Youtube: { icon: FaYoutube, href: 'https://www.youtube.com/watch?v=bT8xfu3AeTY' },
    Telegram: { icon: FaTelegram, href: 'https://t.me/nooraprogram' },
    Whatsapp: { icon: FaWhatsapp, href: 'https://noora-quran.id/082311665438' },
};

const contactInfo: Record<string, SocialType & { label: string }> = {
    Location: { label: 'Lokasi Online', icon: MdLocationPin, href: '#' },
    Email: {
        label: 'nqinoora@gmail.com',
        icon: MdEmail,
        href: 'mailto:nqinoora@gmail.com',
    },
    Whatsapp1: {
        label: '+6282311665438',
        icon: FaWhatsapp,
        href: 'https://wa.me/082311665438?text=Assalamu%27alaikum%2C+saya+ingin+mendapatkan+informasi+lebih+lanjut+tentang+Noora+Program.+Mohon+bantuannya.',
    },
    Whatsapp2: {
        label: '+6281315458727',
        icon: FaWhatsapp,
        href: 'https://wa.me/081315458727?text=Assalamu%27alaikum%2C+saya+ingin+mendapatkan+informasi+lebih+lanjut+tentang+Noora+Program.+Mohon+bantuannya.',
    },
};

export type FeatureType = {
    icon: IconType;
    title: string;
    description: string;
    href: string;
};

const features: FeatureType[] = [
    {
        icon: MdOutlineVolunteerActivism,
        title: 'Program',
        description:
            "Ikuti pelatihan membaca Al-Qur'an khusus Muslimah dengan metode efektif dan menyenangkan.",
        href: '/program',
    },
    {
        icon: MdCastForEducation,
        title: 'Pengajar & Admin',
        description: 'Kenali pengajar berpengalaman kami yang siap membimbing Anda.',
        href: '/our-team',
    },
    {
        icon: MdOutlineGroups,
        title: 'Peserta & Alumni',
        description:
            'Temui peserta dan alumni yang telah merasakan manfaat program kami.',
        href: '/alumni',
    },
];

export { navLinks, features, socials, contactInfo };
