import { SummitNavigation } from '../ClientComponents';
import styles from '../summit2025.module.css';

export default function DemosPage() {
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
                    <h2 style={{ marginBottom: '40px' }}>Live Demos</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto 50px', lineHeight: 1.8 }}>
                        Experience cutting-edge AI technology in action at our live demo stations throughout the summit.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div className={styles.featureCard} style={{ textAlign: 'left', padding: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                <span style={{ fontSize: '2.5rem' }}>🚀</span>
                                <h3 style={{ color: 'var(--dark-blue)', margin: 0, fontSize: '1.5rem' }}>
                                    NVIDIA GB10 GPU - Hands-On Demo
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
                                <img 
                                    src="/genai-community/images/summit2025/GB10.jpeg" 
                                    alt="NVIDIA GB10 GPU" 
                                    style={{ width: '100%', maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
                                />
                                <div>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '20px' }}>
                                        Get hands-on with the new <strong>NVIDIA GB10 GPU</strong> - essentially the same as the NVIDIA DGX Spark but housed in a sleek Lenovo PGX chassis. This palm-sized, 240W powerhouse is among only a few in Australia, with stock still extremely limited.
                                    </p>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '20px' }}>
                                        Despite its small footprint - about the size of two mobile phones - the <strong>Blackwell-architecture-based GB10</strong> offers a portable and low-carbon alternative to larger systems like the RTX 4090, RTX 6000 Ada, and server-grade A100 GPUs. This is where <strong>AI and Sustainability meet</strong>.
                                    </p>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '20px' }}>
                                        In testing, it ran training scripts for a report generation model <strong>several times faster than an A100</strong> - while remaining impressively cool and quiet at 70% GPU utilisation. It can even be configured as a Wi-Fi hotspot for wireless remote access!
                                    </p>
                                </div>
                            </div>

                            <div style={{ background: '#f0f9f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #76b900' }}>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', margin: 0 }}>
                                    <strong>Presented by:</strong> Dr Ash Doshi
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f8fafc', borderRadius: '12px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>
                            More Demos Coming Soon
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Stay tuned for additional live demonstrations to be announced.
                        </p>
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
