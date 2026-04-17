import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const handleResize = () => setIsMobile(window.innerWidth <= 900);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

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

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <motion.div
                className="logo"
                whileHover={{
                    scale: 1.1,
                    color: 'var(--accent)',
                    textShadow: "0 0 8px var(--accent-glow)"
                }}
                whileTap={{ scale: 0.9 }}
            >
                DHEERAJ
            </motion.div>

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
                                    variants={isMobile ? linkVariants : {}}
                                    initial={!isMobile ? { opacity: 0, y: -20 } : false}
                                    animate={!isMobile ? { opacity: 1, y: 0 } : false}
                                    transition={!isMobile ? { delay: i * 0.1, type: "spring" } : {}}
                                >
                                    <motion.a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ x: isMobile ? 5 : 0, y: isMobile ? 0 : -2, color: 'var(--accent)' }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
