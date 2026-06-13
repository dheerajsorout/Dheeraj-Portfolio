import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home', icon: 'fas fa-house-chimney' },
    { name: 'About', href: '#about', icon: 'fas fa-user' },
    { name: 'Experience', href: '#experience', icon: 'fas fa-briefcase' },
    { name: 'Projects', href: '#projects', icon: 'fas fa-code' },
    { name: 'Skills', href: '#skills', icon: 'fas fa-layer-group' },
    { name: 'Resume', href: '#resume', icon: 'fas fa-file-lines' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-paper-plane' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= 900 : false));
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

        const handleScroll = () => {
            setScrolled(window.scrollY > 18);

            const currentOffset = window.scrollY + 160;
            let currentSection = sectionIds[0];

            sectionIds.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (section && currentOffset >= section.offsetTop) {
                    currentSection = sectionId;
                }
            });

            setActiveSection(currentSection);
        };

        const handleResize = () => {
            const mobileView = window.innerWidth <= 900;
            setIsMobile(mobileView);

            if (!mobileView) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuVariants = {
        closed: { 
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
        },
        open: { 
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    const handleNavClick = (href) => {
        setActiveSection(href.replace('#', ''));
        setIsOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <motion.a
                href="#home"
                className="logo"
                whileHover={{
                    scale: 1.03,
                    color: 'var(--accent)',
                    textShadow: "0 0 10px var(--accent-glow)"
                }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="logo-mark" aria-hidden="true">
                    <span className="logo-mark-core" />
                </span>
                <span className="logo-text">DHEERAJ</span>
            </motion.a>

            <AnimatePresence>
                {(!isMobile || isOpen) && (
                    <motion.nav 
                        className={`nav ${isOpen ? 'nav-open' : ''}`}
                        variants={isMobile ? menuVariants : {}}
                        initial={isMobile ? "closed" : false}
                        animate={isMobile ? "open" : false}
                        exit={isMobile ? "closed" : false}
                        style={!isMobile ? { position: 'static', opacity: 1 } : {}}
                    >
                        <ul className="nav-list">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    className="nav-item"
                                    variants={isMobile ? linkVariants : {}}
                                    initial={!isMobile ? { opacity: 0, y: -20 } : false}
                                    animate={!isMobile ? { opacity: 1, y: 0 } : false}
                                    transition={!isMobile ? { delay: i * 0.1, type: "spring" } : {}}
                                >
                                    <motion.a
                                        href={link.href}
                                        className={`nav-link ${activeSection === link.href.replace('#', '') ? 'is-active' : ''}`}
                                        onClick={() => handleNavClick(link.href)}
                                        whileHover={{
                                            x: isMobile ? 6 : 0,
                                            y: isMobile ? 0 : -2,
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {activeSection === link.href.replace('#', '') ? (
                                            <motion.span
                                                layoutId="nav-link-highlight"
                                                className="nav-link-highlight"
                                                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                                            />
                                        ) : null}
                                        <span className="nav-link-icon" aria-hidden="true">
                                            <i className={link.icon}></i>
                                        </span>
                                        <span className="nav-link-label">{link.name}</span>
                                        <span className="nav-link-arrow" aria-hidden="true">
                                            <i className="fas fa-chevron-right"></i>
                                        </span>
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            <div className="header-actions">
                <ThemeToggle />

                <button
                    className={`nav-toggle ${isOpen ? 'nav-open' : ''}`}
                    aria-label="toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="hamburger"></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
