import { SessionizeEmbed } from '../SessionizeEmbed';
import { SummitNavigation } from '../ClientComponents';
import styles from '../summit2025.module.css';

export default function SpeakersPage() {
    return (
        <>
            {/* Header */}
            <header className={styles.hero}>
                <div style={{ position: 'absolute', top: '50px', left: '100px', zIndex: 10 }}>
                    <img src="/genai-community/images/summit2025/logo-curtin.svg" alt="Curtin Logo" width={200} height="auto" style={{ height: 'auto' }} />
                </div>

                <div className={styles.heroContent}>
                    <img 
                        src="/genai-community/images/summit2025/adobe-express-logo.png" 
                        alt="AI Disrupt Summit 2025" 
                        width={450} 
                        height={300}
                        className={styles.logo}
                    />
                    <h1 className={styles.heroTitle}>AI DISRUPT SUMMIT<br />PERTH 2025</h1>
                </div>
            </header>

            {/* Navigation */}
            <SummitNavigation />

            {/* Sessionize Embed */}
            <div className={styles.container}>
                <section>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.2rem', margin: 0 }}>
                            👆 <strong>Click on any speaker and title below to learn more about the speakers and their talks</strong>
                        </p>
                    </div>
                    <SessionizeEmbed />
                </section>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Shape the Future?</h2>
                    <a href="https://luma.com/ywxrt4pk" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Register Now</a>

                    <div className={styles.footerNote}>
                        <p><strong>Important Notes:</strong></p>
                        <p>Photos and videos will be taken at the event.</p>
                        <p>As this is a community event, tickets are non-refundable.</p>
                        <p style={{ marginTop: '30px', opacity: 0.7 }}>Build Club AU ABN: 64 674 988 562</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
