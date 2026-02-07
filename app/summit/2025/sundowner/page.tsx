import { SummitNavigation } from '../ClientComponents';
import styles from '../summit2025.module.css';

export default function SundownerPage() {
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
            <div className={styles.container} style={{ paddingTop: '50px' }}>
                <section>
                    <h2 style={{ marginBottom: '10px', fontSize: '2.8rem', color: 'var(--text-dark)' }}>
                        AI Sundowner Networking
                    </h2>
                    <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 500, marginBottom: '50px', color: 'var(--secondary-color)' }}>
                        Connect Builders with Backers
                    </h3>

                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '40px', color: 'var(--text-dark)' }}>
                            Join us for an exclusive AI sundowner hosted by <strong>Josephine Tay</strong> from <strong>Blackbird</strong>. As the sun sets, gather with industry experts for intimate group networking sessions designed to spark meaningful connections between builders and backers. Whether you're developing the next breakthrough or investing in it, this is your opportunity to engage with the minds moving AI forward.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
                            <div style={{ flexBasis: '250px', padding: '25px', borderRadius: '12px', background: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ color: 'var(--dark-blue)', marginBottom: '5px', fontSize: '1.2rem' }}>Hosted By</h3>
                                <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-dark)' }}>Josephine Tay</p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Principal, Blackbird VC</p>
                            </div>

                            <div style={{ flexBasis: '250px', padding: '25px', borderRadius: '12px', background: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ color: 'var(--dark-blue)', marginBottom: '5px', fontSize: '1.2rem' }}>Focus</h3>
                                <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-dark)' }}>Builders & Backers</p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Intimate Group Sessions</p>
                            </div>
                        </div>

                        <div style={{ margin: '60px auto 40px', padding: '30px 20px', borderRadius: '12px', background: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', maxWidth: '700px' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '15px' }}>Proudly Sponsored By:</p>
                            <a href="https://www.blackbird.vc/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                                <img src="/genai-community/images/summit2025/blackbird-logo.svg" alt="Blackbird Logo" style={{ maxHeight: '50px', margin: '0 auto', display: 'block' }} />
                            </a>
                        </div>
                    </div>
                </section>

                <section style={{ background: '#f8fafc', padding: '60px 20px', borderRadius: '20px', marginTop: '60px' }}>
                    <h2 style={{ color: 'var(--dark-blue)', textAlign: 'center', marginBottom: '10px' }}>Meet the Experts</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '40px', fontSize: '1.1rem' }}>
                        Hosts of our intimate networking circles
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/aidan.jpeg" alt="Aidan Morgan" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Aidan Morgan</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>CTO advice</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/brian.jpeg" alt="Brian Foody" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Brian Foody</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Fine-tuning</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/david.jpeg" alt="David Smith" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>David Smith</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>AI agents and start-ups</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/horst.jpeg" alt="Horst Maberly" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Horst Maberly</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>AU and US investment scene</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/jeron.jpeg" alt="Jeroen van Dalen" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Jeroen van Dalen</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Future of AI</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/josephine.jpeg" alt="Josephine Tay" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Josephine Tay</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Blackbird / Raising Capital</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/matthew.jpeg" alt="Matthew Curnow" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Matthew Curnow</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Scaling agent workflows</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/mel.jpeg" alt="Melanie Johnston-Hollitt" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Melanie Johnston-Hollitt</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>University industry collaboration</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/nick.png" alt="Nick Jerrat" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Nick Jerrat</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Perth Angels</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/rebecca.jpeg" alt="Rebecca Waters" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Rebecca Waters</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Leadership</div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/thuushal.jpeg" alt="Thuushal Kumar" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Thuushal Kumar</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Investment</div>
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
