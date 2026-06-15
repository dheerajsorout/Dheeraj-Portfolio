import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroProfile from '../../hero-profile.png';
import InkReveal from './InkReveal';
import { hoverLift, revealScale, revealUp, sectionStagger, springSoft } from './animations/variants';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TypewriterText = ({
    text,
    className = '',
    textClassName = '',
    startDelay = 0,
    speed = 70,
}) => {
    const [typedText, setTypedText] = useState(() => (prefersReducedMotion() ? text : ''));

    useEffect(() => {
        if (prefersReducedMotion()) {
            setTypedText(text);
            return undefined;
        }

        let currentIndex = 0;
        let typingTimer;
        const startTimer = window.setTimeout(() => {
            setTypedText('');
            typingTimer = window.setInterval(() => {
                currentIndex += 1;
                setTypedText(text.slice(0, currentIndex));

                if (currentIndex >= text.length) {
                    window.clearInterval(typingTimer);
                }
            }, speed);
        }, startDelay);

        return () => {
            window.clearTimeout(startTimer);
            window.clearInterval(typingTimer);
        };
    }, [text, speed, startDelay]);

    const typewriterClassName = [
        'typewriter',
        typedText.length === text.length ? 'is-complete' : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <span className={typewriterClassName}>
            <span className="sr-only">{text}</span>
            <span className={`typewriter-ghost ${textClassName}`} aria-hidden="true">
                {text}
            </span>
            <span className="typewriter-visible" aria-hidden="true">
                <span className={textClassName}>{typedText}</span>
                <span className="typewriter-cursor" />
            </span>
        </span>
    );
};

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 0.45], [0, 110]);

    const imageReveal = {
        hidden: {
            opacity: 0,
            y: 150,
            scale: 0.9,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1.25,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
            }
        }
    };

    return (
        <motion.section
            id="home"
            className="hero section"
            initial="hidden"
            animate="visible"
            variants={sectionStagger(0.14, 0.14)}
        >
            <motion.div
                className="hero-content"
                variants={sectionStagger(0.12, 0.12)}
            >
                <motion.span
                    className="hero-kicker"
                    variants={revealUp(18)}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                    Full-stack web developer
                </motion.span>

                <motion.h1 className="hero-title" variants={revealUp(36)}>
                    Hi, I'm{' '}
                    <TypewriterText
                        text="DHEERAJ"
                        className="hero-name-typewriter"
                        textClassName="hero-name-gradient"
                        startDelay={520}
                        speed={95}
                    />
                </motion.h1>

                <motion.h2
                    className="hero-subtitle accent"
                    variants={revealUp(28, 0.02)}
                >
                    <TypewriterText
                        text="MERN Stack Developer"
                        className="hero-subtitle-typewriter"
                        startDelay={1450}
                        speed={58}
                    />
                </motion.h2>

                <motion.p className="hero-description" variants={revealUp(30, 0.05)}>
                    MERN Stack Developer with strong expertise in building scalable, responsive, and user-centric web applications. Skilled in full-stack development using{' '}
                    <span className="tech-highlight tech-python">Python</span>,{' '}
                    <span className="tech-highlight tech-js">JavaScript</span>,{' '}
                    <span className="tech-highlight tech-react">React.js</span>,{' '}
                    <span className="tech-highlight tech-next">Next.js</span>,{' '}
                    <span className="tech-highlight tech-node">Node.js</span> and{' '}
                    <span className="tech-highlight tech-mongo">MongoDB</span>,<span className="tech-highlight tech-neon">NeonDB</span>{' '}
                    with hands-on experience in AI-integrated applications and real-world deployment.
                </motion.p>

                <motion.div className="hero-buttons" variants={revealUp(24, 0.08)}>
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={hoverLift}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="btn btn-outline"
                        whileHover={hoverLift}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div className="hero-stats" variants={revealUp(24, 0.12)}>
                    <motion.div className="hero-stat-chip" whileHover={{ y: -4 }} transition={springSoft}>
                        <strong>MERN + AI</strong>
                        <span>Frontend, backend, APIs, and deployment</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-image-container"
            >
                <motion.span
                    className="hero-orb hero-orb-one"
                    aria-hidden="true"
                    animate={{
                        x: [0, 22, -10, 0],
                        y: [0, -18, 12, 0],
                        scale: [1, 1.08, 0.96, 1],
                    }}
                    transition={{
                        duration: 10,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <motion.span
                    className="hero-orb hero-orb-two"
                    aria-hidden="true"
                    animate={{
                        x: [0, -18, 12, 0],
                        y: [0, 14, -10, 0],
                        scale: [1, 0.94, 1.1, 1],
                    }}
                    transition={{
                        duration: 12,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />

                <motion.div
                    className="hero-image-shell"
                    variants={imageReveal}
                    style={{ y: yParallax }}
                >
                    <span className="hero-image-badge" aria-hidden="true">
                        <i className="fas fa-sparkles"></i>
                        <span>Focused builder</span>
                    </span>
                <span className="hero-image-ring hero-image-ring-one" aria-hidden="true" />
                <span className="hero-image-ring hero-image-ring-two" aria-hidden="true" />
                <InkReveal className="hero-ink-reveal" />
                <img
                    src={heroProfile}
                    alt="Dheeraj"
                    className="hero-image"
                        loading="eager"
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
