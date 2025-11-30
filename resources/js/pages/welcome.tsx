import { Navbar1 } from '@/components/shadcnblocks-com-navbar1';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { Hero } from '@/components/ui/animated-hero';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ }) {

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className='bg'>
                <Navbar1 />
            </div>
            <div className='block'>
                <Hero />
            </div>
        </>
    );
}
