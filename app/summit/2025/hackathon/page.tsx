import { SummitNavigation } from '../ClientComponents';
import styles from '../summit2025.module.css';

export default function HackathonPage() {
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
                    <h2 style={{ marginBottom: '40px' }}>Hackathon</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.3rem', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.8 }}>
                        This year, we challenge you to build practical AI applications that enhance team collaboration or tool integration. Leverage modern AI frameworks and local datasets to solve real-world problems.
                    </p>

                    <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '40px 20px', borderRadius: '12px', marginTop: 0 }}>
                        <div className={styles.container} style={{ padding: 0, maxWidth: '800px' }}>
                            <h3 style={{ color: 'white', fontSize: '1.8rem', textAlign: 'center', marginBottom: '20px' }}>
                                🏆 Credits sponsored by Lovable
                            </h3>

                            <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginBottom: '15px' }}>
                                <img src="/genai-community/images/summit2025/lovable-logo.svg" alt="Lovable Logo" style={{ maxWidth: '200px', height: 'auto', background: 'white', padding: '10px 20px', borderRadius: '8px' }} />
                            </a>

                            <p style={{ textAlign: 'center', fontSize: '1.2rem', margin: '0 auto', lineHeight: 1.6 }}>
                                A massive thank you to <strong>Lovable</strong> for sponsoring the cloud credits! They help us ensure all participants have the resources they need to build something great.
                            </p>
                        </div>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '50px auto', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.6rem', marginBottom: '20px', color: 'var(--dark-blue)' }}>The Challenge</h3>
                        <p style={{ fontSize: '1.1rem' }}>
                            The specific <strong>problem statement and technical constraints will be revealed live</strong> at the summit during the Hackathon kick-off.
                        </p>
                    </div>
                </section>

                <section style={{ background: '#f8fafc', padding: '40px 20px', borderRadius: '20px', marginTop: '60px' }}>
                    <div style={{ marginBottom: '50px' }}>
                        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                            Hosts
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', justifyItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/mo.png" alt="Mo Jaimangal" style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Mo Jaimangal</div>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem' }}>Host</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/aidan.jpeg" alt="Aidan Morgan" style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Aidan Morgan</div>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem' }}>Host</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/jeron.jpeg" alt="Jeroen van Dalen" style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>Jeroen van Dalen</div>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem' }}>Host</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '50px' }}>
                        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                            Mentors
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/david.jpeg" alt="David Smith" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>David Smith</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/sean.jpeg" alt="Sean Oldenberger" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Sean Oldenberger</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/john.jpeg" alt="John Marshall" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>John Marshall</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/matthew.jpeg" alt="Matthew Curnow" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Matthew Curnow</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/rebecca.jpeg" alt="Rebecca Waters" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Rebecca Waters</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/ash_profile_pic.jpg" alt="Ash Doshi" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Ash Doshi</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: 0 }}>
                        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', fontWeight: 700 }}>
                            Judges
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', justifyItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/josephine.jpeg" alt="Josephine Tay" style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Josephine Tay</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/lisa.jpeg" alt="Lisa Longman" style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Lisa Longman</div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img src="/genai-community/images/summit2025/alex.jpeg" alt="Alex Jenkins" style={{ width: '100%', maxWidth: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
                                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Alex Jenkins</div>
                            </div>
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
