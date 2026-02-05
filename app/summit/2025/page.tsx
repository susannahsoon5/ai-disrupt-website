import Image from 'next/image';
import { CountdownTimer, FloatingCTA } from './ClientComponents';
import { SessionizeEmbed } from './SessionizeEmbed';
import styles from './summit2025.module.css';

export default function Summit2025() {
    return (
        <>
            <FloatingCTA />
            
            {/* Hero Section */}
            <header className={styles.hero}>
                <div style={{ position: 'absolute', top: '50px', left: '100px', zIndex: 10 }}>
                    <Image src="/images/summit2025/logo-curtin.svg" alt="Curtin Logo" width={200} height={100} style={{ height: 'auto' }} />
                </div>

                <div className={styles.heroContent}>
                    <Image 
                        src="/images/summit2025/Adobe Express - file.png" 
                        alt="AI Disrupt Summit 2025" 
                        width={450} 
                        height={300}
                        className={styles.logo}
                        priority
                    />
                    <h1 className={styles.heroTitle}>AI DISRUPT SUMMIT<br />PERTH 2025</h1>
                    <p className={styles.subtitle}>Perth&apos;s Premier AI Builder Conference</p>
                    <p className={styles.tagline}>Not just a conference - a movement</p>

                    <div className={styles.eventDetails}>
                        <div className={styles.eventDetail}>
                            <div className={styles.eventDetailIcon}>📅</div>
                            <div className={styles.eventDetailText}>December 13, 2025</div>
                        </div>
                        <div className={styles.eventDetail}>
                            <div className={styles.eventDetailIcon}>📍</div>
                            <div className={styles.eventDetailText}>Curtin University, Perth</div>
                        </div>
                        <div className={styles.eventDetail}>
                            <div className={styles.eventDetailIcon}>👥</div>
                            <div className={styles.eventDetailText}>200+ Attendees</div>
                        </div>
                    </div>

                    <a href="https://luma.com/ywxrt4pk" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
                        Register Now
                    </a>
                </div>
            </header>

            {/* Navigation */}
            <nav style={{ textAlign: 'center', padding: '15px 10px', background: 'white', borderBottom: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflowX: 'auto', whiteSpace: 'nowrap', position: 'sticky', top: 0, zIndex: 1000 }}>
                <a href="#home" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Home</a>
                <a href="#speakers" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Speaker Series</a>
                <a href="#expo" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Startup Expo</a>
                <a href="#hackathon" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Hackathon</a>
                <a href="#workshop" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Workshop</a>
                <a href="#demos" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Demos</a>
                <a href="#sundowner" style={{ margin: '0 15px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--dark-blue)', fontWeight: 700 }}>Sundowner</a>
            </nav>

            {/* Countdown */}
            <CountdownTimer />

            {/* About Section */}
            <div className={styles.container} id="home">
                <section>
                    <h2>About the Summit</h2>
                    <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.8 }}>
                        <span>
                            <a href="https://www.buildclub.ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Build Club Perth</a>
                            {' × '}
                            <a href="https://www.bloom.org.au" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Bloom</a>
                            {' × '}
                            <a href="https://www.curtin.edu.au/engage/entrepreneurs/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Curtin Entrepreneurs</a>
                        </span> are proud to present the <strong>AI Disrupt Summit</strong>,
                        a hands-on event shaping the future of technology in Western Australia. Taking place as part
                        of West Tech Fest, this one-day summit brings together over 200 AI engineers, researchers,
                        founders, and investors who are actively building the next generation of AI solutions.
                    </p>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard} id="speakers">
                            <div className={styles.featureIcon}>🎤</div>
                            <h3>Speaker Series</h3>
                            <p>Australia&apos;s leading AI thinkers and practitioners</p>
                        </div>

                        <div className={styles.featureCard} id="expo">
                            <div className={styles.featureIcon}>🚀</div>
                            <h3>Start-up Expo</h3>
                            <p>Innovative local ventures showcasing AI technology</p>
                        </div>

                        <div className={styles.featureCard} id="hackathon">
                            <div className={styles.featureIcon}>💻</div>
                            <h3>Hackathon</h3>
                            <p>Compete in our Hackathon sponsored by Lovable</p>
                        </div>

                        <div className={styles.featureCard} id="workshop">
                            <div className={styles.featureIcon}>🛠️</div>
                            <h3>Technical Workshop</h3>
                            <p>Build your first AI home lab with Ollama, n8n, and VeilNet</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🤝</div>
                            <h3>Networking</h3>
                            <p>Connect with mentors and industry leaders</p>
                        </div>

                        <div className={styles.featureCard} id="sundowner">
                            <div className={styles.featureIcon}>🍺</div>
                            <h3>Sundowner</h3>
                            <p>Networking drinks sponsored by Blackbird</p>
                        </div>
                    </div>
                </section>
            </div>

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

            {/* Highlight Boxes */}
            <div className={styles.highlightBox}>
                <div className={styles.container} style={{ padding: 0 }}>
                    <h2 style={{ marginBottom: '20px' }}>💻 Bring your devices</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        Attendees should bring their laptops to the summit<br />
                        Especially for Hackathon or Workshop sessions
                        where you&apos;ll be building and coding hands-on projects during the day
                    </p>
                </div>
            </div>

            <div className={styles.highlightBox}>
                <div className={styles.container} style={{ padding: 0 }}>
                    <h2 style={{ marginBottom: '20px' }}>🏆 Hackathon Prize</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        Compete in our hands-on hackathon and build real-world AI projects throughout the day.
                        The winning team will receive <strong>exciting prizes</strong> and recognition from industry leaders!
                    </p>
                </div>
            </div>

            <div className={styles.highlightBox}>
                <div className={styles.container} style={{ padding: 0 }}>
                    <h2 style={{ marginBottom: '20px' }}>💧 Bring Your Water Bottle</h2>
                </div>
            </div>

            {/* Sponsors */}
            <div className={styles.sponsorsSection}>
                <div className={styles.container}>
                    <h2>Our Sponsors</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px' }}>Thank you to our amazing sponsors making this event possible</p>
                    <div className={styles.sponsorsGrid}>
                        <a className={styles.sponsorItem} href="https://www.buildclub.ai/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/buildclub.png" alt="Build Club" width={150} height={80} className={styles.sponsorLogo} />
                            <div>
                                <div className={styles.sponsorName}>Build Club</div>
                                <span className={styles.sponsorCategory}>Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://www.bloom.org.au/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/bloom-logo.png" alt="Bloom" width={150} height={80} className={styles.sponsorLogo} />
                            <div>
                                <div className={styles.sponsorName}>Bloom</div>
                                <span className={styles.sponsorCategory}>Afternoon Tea and Venue Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://www.curtin.edu.au/engage/entrepreneurs/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/curtin.jpeg" alt="Curtin Entrepreneurs" width={150} height={80} className={styles.sponsorLogo} />
                            <div>
                                <div className={styles.sponsorName}>Curtin Entrepreneurs</div>
                                <span className={styles.sponsorCategory}>Lunch Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://www.blackbird.vc/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/blackbird-logo.svg" alt="Blackbird" width={150} height={80} className={styles.sponsorLogo} style={{ paddingTop: '20px' }} />
                            <div>
                                <div className={styles.sponsorName}>Blackbird</div>
                                <span className={styles.sponsorCategory}>Sundowner Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://dddperth.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/dddperth-logo.svg" alt="DDD Perth" width={150} height={80} className={styles.sponsorLogo} style={{ paddingTop: '20px' }} />
                            <div>
                                <div className={styles.sponsorName}>DDD Perth</div>
                                <span className={styles.sponsorCategory}>Community Partner</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://wadsih.org.au/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/WADSIH-logo.png" alt="WADSIH" width={150} height={80} className={styles.sponsorLogo} />
                            <div>
                                <div className={styles.sponsorName}>WADSIH</div>
                                <span className={styles.sponsorCategory}>Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://www.linkedin.com/in/horst-maberly-675b081b8/" target="_blank" rel="noopener noreferrer">
                            <div style={{ height: '90px', marginBottom: '10px' }}></div>
                            <div>
                                <div className={styles.sponsorName}>Horst Maberly</div>
                                <span className={styles.sponsorCategory}>Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://lovable.dev/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/lovable-logo.svg" alt="Lovable" width={150} height={80} className={styles.sponsorLogo} style={{ paddingTop: '20px' }} />
                            <div>
                                <div className={styles.sponsorName}>Lovable</div>
                                <span className={styles.sponsorCategory}>Sponsor</span>
                            </div>
                        </a>

                        <a className={styles.sponsorItem} href="https://www.matilda.health/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/summit2025/Matilda Logo Green.png" alt="Matilda Health" width={150} height={80} className={styles.sponsorLogo} />
                            <div>
                                <div className={styles.sponsorName}>Matilda Health</div>
                                <span className={styles.sponsorCategory}>Cinny Scroll Sponsor</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className={styles.locationSection}>
                <div className={styles.container}>
                    <h2>Venue</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '20px', lineHeight: 1.8 }}>
                        The AI Disrupt Summit is proudly sponsored by <a href="https://www.bloom.org.au/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Bloom</a> who are providing our venue space.
                    </p>
                    <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px' }}>
                        <a href="https://www.google.com/maps/search/?api=1&query=St+Catherine's+College+Curtin+University" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>St Catherine&apos;s College</a><br />
                        Building 433 University Boulevard, Curtin University
                    </p>
                    <p style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <a href="https://www.stcats.com.au/curtin-campus" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', marginRight: '20px' }}>St Catherine&apos;s Website</a>
                        <a href="https://campusmap.curtin.edu.au/bentley/?poi=1001354552" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Campus Map</a>
                    </p>

                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.95861037474384!2d115.88953796243057!3d-32.001872268013095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bdee579f0a73%3A0xfa766fa38853f194!2sSt%20Catherine&#39;s%20College%20at%20Curtin%20University!5e0!3m2!1sen!2sau!4v1763272878492!5m2!1sen!2sau"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className={styles.locationGrid}>
                        <div className={styles.locationCard}>
                            <h3>St Catherine&apos;s Dining Hall</h3>
                            <p>The main event will happen here - speakers, expo, and primary activities throughout the day</p>
                        </div>
                        <div className={styles.locationCard}>
                            <h3>Bloom Basement Space</h3>
                            <p>Additional activities in the basement area for hackathon, breakout sessions, and networking.</p>
                            <p style={{ marginTop: '10px', fontWeight: 600, color: 'var(--accent)' }}>
                                Directions: Turn left at main St Catherine&apos;s entrance and enter via the stairwell.
                            </p>
                        </div>
                        <div className={styles.locationCard}>
                            <h3>Courtyard</h3>
                            <p>Available for networking all day</p>
                        </div>
                        <div className={styles.locationCard}>
                            <h3>Car Parking</h3>
                            <p>Car parking will be readily available on Saturday at Curtin University</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className={styles.container}>
                <section>
                    <h2>Frequently Asked Questions</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>What should I bring?</h3>
                            <p>Please bring your laptop (essential for Hackathon and Workshop), charger, and a reusable water bottle to stay hydrated throughout the day.</p>
                        </div>
                        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Is food provided?</h3>
                            <p>Morning tea, lunch, afternoon tea and sundowner are catered.</p>
                        </div>
                        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Do I need to be technical to attend?</h3>
                            <p>No! While we have technical workshops and a hackathon, the summit welcomes everyone from beginners to experts. Our speaker series and networking opportunities are valuable for all skill levels.</p>
                        </div>
                        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Will there be WiFi?</h3>
                            <p>Yes! Wi-Fi is available at St Catherine&apos;s College and in the Bloom Basement Space. There are also plenty of PowerPoints for chargers in the Basement.</p>
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