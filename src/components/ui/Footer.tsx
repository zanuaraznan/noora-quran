'use client';
import Container from './Container';
import { About, ContactInfo, OperationalTime, QuickLinks } from './footer/FooterContent';

export default function Footer() {
    return (
        <Container
            as='footer'
            className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <About />
            <QuickLinks />
            <OperationalTime />
            <ContactInfo />
        </Container>
    );
}
