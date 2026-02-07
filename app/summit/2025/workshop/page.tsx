import { SummitNavigation } from '../ClientComponents';
import styles from '../summit2025.module.css';

export default function WorkshopPage() {
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
                    <h2 style={{ marginBottom: '5px', textAlign: 'center', color: 'var(--text-dark)' }}>
                        Your First AI Home Lab
                    </h2>
                    <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 500, marginBottom: '50px', color: 'var(--secondary-color)' }}>
                        Build It, Automate It, Securely Reach It
                    </h3>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="/genai-community/images/summit2025/yifei.jpeg" alt="Yifei Ren" style={{ width: '100%', maxWidth: '300px', height: '250px', borderRadius: '8px', objectFit: 'cover', marginBottom: '15px' }} />
                            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark-blue)', marginBottom: '5px', fontFamily: 'Arial, sans-serif' }}>
                                Yifei Ren
                            </p>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '15px', fontFamily: 'Arial, sans-serif' }}>
                                Workshop Presenter
                            </p>

                            <a href="https://www.veilnet.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <p style={{ fontSize: '1.1rem', color: 'var(--dark-blue)', fontWeight: 600, marginBottom: '25px' }}>
                                    Founder of VeilNet
                                </p>
                            </a>

                            <a href="https://www.veilnet.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                                <img src="/genai-community/images/summit2025/veilnet.png" alt="VeilNet Logo" style={{ maxHeight: '160px', margin: '0 auto', display: 'block' }} />
                            </a>
                        </div>

                        <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '30px', color: 'var(--text-dark)', textAlign: 'center' }}>
                            Want to run your own AI models and automation tools without relying on expensive cloud services? In this hands-on workshop, you'll learn how to build your own <strong>private, secure, and low-cost personal AI setup.</strong>
                        </p>
                    </div>
                </section>
            </div>

            <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', marginTop: '-70px', padding: '40px 20px' }}>
                <div className={styles.container} style={{ padding: 0 }}>
                    <h2 style={{ marginBottom: '20px', color: 'white' }}>Prerequisites & What to Bring</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, color: 'white' }}>
                        <strong>Essentials for this hands-on session:</strong>
                        <br /><br />
                        <strong>1. Laptop & Charger:</strong> You must bring a fully charged laptop ready for coding.
                        <br />
                        <strong>2. Basic Knowledge:</strong> Have a basic understanding of <strong>network concepts</strong> and <strong>virtual machines (VMs)</strong>.
                        <br />
                        <strong>3. Register:</strong> Make sure to <a href="https://luma.com/zvjopjpf" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 700, textDecoration: 'underline' }}>register for the workshop</a> in advance to secure your spot.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <section>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--dark-blue)', textAlign: 'center' }}>
                            What You Will Learn:
                        </h3>

                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <span style={{ fontSize: '1.8rem', marginRight: '15px', color: 'var(--accent)' }}>🧠</span>
                                <div style={{ textAlign: 'left' }}>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '5px', color: 'var(--primary-color)' }}>
                                        Self-host Ollama to run local LLMs
                                    </strong>
                                    <span style={{ color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                                        Take control of your AI by running powerful, open-source Large Language Models right on your own hardware.
                                    </span>
                                </div>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <span style={{ fontSize: '1.8rem', marginRight: '15px', color: 'var(--accent)' }}>🔁</span>
                                <div style={{ textAlign: 'left' }}>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '5px', color: 'var(--primary-color)' }}>
                                        Build powerful automations using n8n
                                    </strong>
                                    <span style={{ color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                                        Connect your self-hosted AI models and other services using this node-based automation tool.
                                    </span>
                                </div>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <span style={{ fontSize: '1.8rem', marginRight: '15px', color: 'var(--accent)' }}>🔐</span>
                                <div style={{ textAlign: 'left' }}>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '5px', color: 'var(--primary-color)' }}>
                                        Access both tools securely from anywhere using VeilNet
                                    </strong>
                                    <span style={{ color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                                        VeilNet makes your services feel like they're on a private LAN - even across the internet - so you can safely experiment and build.
                                    </span>
                                </div>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <span style={{ fontSize: '1.8rem', marginRight: '15px', color: 'var(--accent)' }}>🚫</span>
                                <div style={{ textAlign: 'left' }}>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '5px', color: 'var(--primary-color)' }}>
                                        Do it all without port forwarding, public IPs, or exposing your server
                                    </strong>
                                    <span style={{ color: 'var(--text-dark)', fontSize: '1.05rem' }}>
                                        Leverage best practices for security and privacy from day one.
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <h3 style={{ fontSize: '1.8rem', marginTop: '50px', marginBottom: '15px', color: 'var(--dark-blue)', textAlign: 'center' }}>
                            Ideal Use Cases:
                        </h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: 1.8, textAlign: 'center' }}>
                            Private chatbots, personal AI cloud storage, secure AI automation, low-cost and safe self-hosting, and more.
                        </p>
                    </div>
                </section>
            </div>

            <div className={styles.container}>
                <section style={{ background: 'white', padding: '40px 30px', borderRadius: '12px', textAlign: 'center', marginBottom: '60px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '3px solid var(--primary-color)' }}>
                    <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px', fontSize: '2rem' }}>
                        Reserve Your Workshop Spot
                    </h2>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.2rem', marginBottom: '25px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
                        Already registered for the summit? Please also register for the workshop so we can prepare materials and ensure we have space for everyone.
                    </p>
                    <a href="https://luma.com/zvjopjpf" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Register for Workshop</a>
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
