import { motion, useScroll, useTransform } from 'framer-motion';
import heroProfile from '../../hero-profile.png';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

    const springTransition = { type: 'spring', stiffness: 100, damping: 15 };

    return (
        <section id="home" className="hero section">
            <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ...springTransition }}
            >
                <h1 className="hero-title">
                    Hi, I'm <span className="accent">DHEERAJ</span>
                </h1>
                <motion.h2 
                    className="hero-subtitle accent"
                    initial={{ width: 0 }}
                    animate={{ width: "fit-content" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    style={{ whiteSpace: "nowrap", overflow: "hidden", borderRight: "3px solid var(--accent)" }}
                >
                    MERN Stack Developer
                </motion.h2>
                <p className="hero-description">
                    MERN Stack Developer with strong expertise in building scalable, responsive, and user-centric web applications. Skilled in full-stack development using React.js, Next.js, Node.js, and MongoDB, with hands-on experience in AI-integrated applications and real-world deployment.
                </p>
                <div className="hero-buttons">
                    <motion.a 
                        href="#projects" 
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a 
                        href="#contact" 
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>
            <motion.div 
                className="hero-image-container"
                style={{ y: yParallax }}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ...springTransition }}
            >
                <img src={heroProfile} alt="Dheeraj" className="hero-image" />
            </motion.div>
        </section>
    );
};

export default Hero;
