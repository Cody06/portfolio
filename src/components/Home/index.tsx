'use client';
import { useEffect, useState } from 'react';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { AlertProvider } from '../context/alertContext';
import AlertBox from '../ui/AlertBox';

export default function Home() {
    const [state, setState] = useState({
        loading: true,
        viewedAnimations: false,
    });

    useEffect(() => {
        const sessionItem = !!sessionStorage.getItem('viewed_animations');
        if (!sessionItem) {
            sessionStorage.setItem('viewed_animations', '1');
        }

        setState({ loading: false, viewedAnimations: sessionItem });

        // Run effect only once (on componentDidMount) - only first render matters
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // This is a fake loading to wait until the state updates
    // because first render depends on the value in sessionStorage
    if (state.loading) return;

    return (
        <AlertProvider>
            <Header showAnimation={!state.viewedAnimations} />
            <main className="content-max-width mx-auto pb-16 px-4 select-none">
                <Projects showAnimation={!state.viewedAnimations} />
                <Experience />
                <Certifications />
            </main>
            <div className="bg-neutral-800">
                <Footer />
            </div>
            <AlertBox />
        </AlertProvider>
    );
}
