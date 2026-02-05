"use client";

import { useEffect, useState } from 'react';
import styles from './summit2025.module.css';

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isEventPast, setIsEventPast] = useState(false);

    useEffect(() => {
        const eventDate = new Date('December 13, 2025 09:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                setIsEventPast(true);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isEventPast) {
        return (
            <div style={{ background: 'white', padding: '30px 20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                        This event has concluded!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ background: 'white', padding: '30px 20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-dark)' }}>Event Starts In</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '15px 20px', borderRadius: '10px', minWidth: '80px', boxShadow: '0 4px 12px rgba(250, 143, 50, 0.3)' }}>
                        <div style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1 }}>{timeLeft.days}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginTop: '3px', opacity: 0.9 }}>Days</div>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '15px 20px', borderRadius: '10px', minWidth: '80px', boxShadow: '0 4px 12px rgba(250, 143, 50, 0.3)' }}>
                        <div style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1 }}>{timeLeft.hours}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginTop: '3px', opacity: 0.9 }}>Hours</div>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '15px 20px', borderRadius: '10px', minWidth: '80px', boxShadow: '0 4px 12px rgba(250, 143, 50, 0.3)' }}>
                        <div style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1 }}>{timeLeft.minutes}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginTop: '3px', opacity: 0.9 }}>Minutes</div>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '15px 20px', borderRadius: '10px', minWidth: '80px', boxShadow: '0 4px 12px rgba(250, 143, 50, 0.3)' }}>
                        <div style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1 }}>{timeLeft.seconds}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginTop: '3px', opacity: 0.9 }}>Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Show after scrolling past 600px
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href="https://luma.com/ywxrt4pk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                color: 'white',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: '50px',
                boxShadow: '0 8px 24px rgba(250, 143, 50, 0.4)',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
        >
            Register Now 🚀
        </a>
    );
}
