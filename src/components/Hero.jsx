import { motion, useScroll, useTransform } from 'framer-motion';
import heroProfile from '../../hero-profile.png';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

    const springTransition = { type: 'spring', stiffness: 100, damping: 20 };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: springTransition }
    };

    return (
        <section id="home" className="hero section">
            <motion.div 
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Hi, I'm <span className="accent text-gradient">DHEERAJ</span>
                </motion.h1>
                <motion.h2 
                    className="hero-subtitle accent"
                    variants={itemVariants}
                    style={{ display: "inline-block" }}
                >
                    MERN Stack Developer
                </motion.h2>
                <motion.p className="hero-description" variants={itemVariants}>
                    MERN Stack Developer with strong expertise in building scalable, responsive, and user-centric web applications. Skilled in full-stack development using React.js, Next.js, Node.js, and MongoDB, with hands-on experience in AI-integrated applications and real-world deployment.
                </motion.p>
                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.a 
                        href="#projects" 
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a 
                        href="#contact" 
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </motion.div>
            <motion.div 
                className="hero-image-container"
                style={{ y: yParallax }}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ...springTransition }}
            >
                <motion.img 
                    src={heroProfile} 
                    alt="Dheeraj" 
                    className="hero-image"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
