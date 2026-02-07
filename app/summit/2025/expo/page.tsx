import { SummitNavigation } from '../ClientComponents';
import styles from '../summit2025.module.css';

export default function ExpoPage() {
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

            {/* Main Content */}
            <div className={styles.container}>
                <section>
                    <h2 style={{ marginBottom: '40px' }}>Startup Expo Profiles</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto 50px', lineHeight: 1.8 }}>
                        Meet the innovative local startups driving the future of AI in Western Australia. These companies are actively disrupting industries and looking for new talent and investors.
                    </p>

                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                        AI Start-ups
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://www.podyssey.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/podyssey.svg" alt="Podyssey logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Podyssey</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                AI podcast search engine to find and save the best moments instantly.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://www.reschematic.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/reschematic.jpeg" alt="Reschematic logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Reschematic</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Interactive, reference-backed business cases with instant scenarios.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://talk2view.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/talk2view.jpeg" alt="Talk2View logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Talk2View</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Talk to 3D medical images with natural language chat and guidance.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                        Early Stage
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://www.aiadvancements.com.au/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/aiadvancements.webp" alt="AIAdvancements logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>AIAdvancements</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Custom AI solutions across LLMs, vision, agents, and cloud delivery.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://argostech.net/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/argostech_logo.jpeg" alt="Indrus logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Indrus</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Turns existing cameras into GPS-precise asset tracking and digital twins.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://veilnet.net/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/veilnet.jpeg" alt="VeilNet logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>VeilNet</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                AI-driven secure overlay without mesh overhead for multi-cloud workloads.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://www.alphaimmersion.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px', position: 'relative' }}>
                                <img src="/genai-community/images/summit2025/Alpha Immersion Logo White Background.png" alt="Alpha Immersion logo" style={{ width: '100%', height: 'auto' }} />
                                <img src="/genai-community/images/summit2025/ecu logo.png" alt="ECU logo" style={{ position: 'absolute', bottom: '5px', right: '5px', width: '35%', height: 'auto', maxHeight: '40%', objectFit: 'contain', background: 'white', borderRadius: '4px', padding: '3px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Alpha Immersion</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Immersive VR training to help clinical staff de‑escalate violence.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                        Idea Stage
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="http://www.vincla.net" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/logo-vincla.jpeg" alt="Vincla Work Suite" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Vincla Work Suite</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Compliance and sustainability workspace for designers and planners.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/goflow.jpeg" alt="GoFlow Logo" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>GoFlow</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Automation to streamline AI workflows and ops.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/tradiescribe.jpeg" alt="Tradie Scribe logo" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Tradie Scribe</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                AI notes and paperwork assistant to give tradies their time back.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://www.wespotturtles.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/WeSpotTurtles.png" alt="We Spot Turtles logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>We Spot Turtles!</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Caitlin McKweon</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Citizen science app using ML and geolocation to aid sea turtle conservation.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/SoulScope Logo Big.png" alt="SoulScope logo" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>SoulScope</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Jia Keatnuxsuo</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                AI mental health companion for reflection and guided journaling.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/CaseMate 1763910075780.jpeg" alt="CaseMate logo" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>CaseMate</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                AI legal co-pilot for drafting, review, and case prep.
                            </p>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center' }}>
                            <a href="https://y-ivory-alpha.vercel.app/create" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/MadeApt.png" alt="MadeApt logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>MadeApt</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                                Design unique fashion pieces with AI.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                        Sponsors
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div className={styles.featureCard} style={{ textAlign: 'center', padding: '20px' }}>
                            <a href="https://www.blackbird.vc/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px' }}>
                                <img src="/genai-community/images/summit2025/blackbird-logo.svg" alt="Blackbird logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Blackbird</h4>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center', padding: '20px' }}>
                            <a href="https://www.bloom.org.au/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px' }}>
                                <img src="/genai-community/images/summit2025/bloom-logo.png" alt="Bloom logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Bloom</h4>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center', padding: '20px' }}>
                            <div style={{ display: 'block', marginBottom: '10px' }}>
                                <img src="/genai-community/images/summit2025/curtin.jpeg" alt="Curtin Entrepreneurship logo" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Curtin Entrepreneurs</h4>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center', padding: '20px' }}>
                            <a href="https://www.matilda.health/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px' }}>
                                <img src="/genai-community/images/summit2025/Matilda Logo Green.png" alt="Matilda logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>Matilda</h4>
                        </div>

                        <div className={styles.featureCard} style={{ textAlign: 'center', padding: '20px' }}>
                            <a href="https://wadsih.org.au/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px' }}>
                                <img src="/genai-community/images/summit2025/WADSIH-logo.png" alt="WadSIH logo" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)' }}>WADSIH</h4>
                        </div>
                    </div>
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
