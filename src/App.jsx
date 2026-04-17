import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeAnimatedBlock from './components/ThemeAnimatedBlock';
import ThemeTransitionLayer from './components/ThemeTransitionLayer';

function App() {
    const { scrollYProgress } = useScroll();
    const { isTransitioning } = useTheme();
    const resumeUrl = `${import.meta.env.BASE_URL}Dheeraj_Resume.pdf`;

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="portfolio-app">
            <ThemeTransitionLayer />

            <div className={`page-shell ${isTransitioning ? 'is-transitioning' : ''}`}>
                <motion.div className="progress-bar" style={{ scaleX }} />

                <Navbar />

                <main>
                    <ThemeAnimatedBlock index={0}>
                        <Hero />
                    </ThemeAnimatedBlock>
                    <ThemeAnimatedBlock index={1}>
                        <About />
                    </ThemeAnimatedBlock>
                    <ThemeAnimatedBlock index={2}>
                        <Experience />
                    </ThemeAnimatedBlock>
                    <ThemeAnimatedBlock index={3}>
                        <Projects />
                    </ThemeAnimatedBlock>
                    <ThemeAnimatedBlock index={4}>
                        <Skills />
                    </ThemeAnimatedBlock>

                    <ThemeAnimatedBlock index={5}>
                        <section id="resume" className="resume section">
                            <motion.h2
                                className="section-title text-gradient"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Resume
                            </motion.h2>
                            <div className="resume-btn-container">
                                <motion.a
                                    href={resumeUrl}
                                    className="btn btn-primary"
                                    download="Dheeraj_Resume.pdf"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="fas fa-file-pdf"></i> Download Resume
                                </motion.a>
                            </div>
                        </section>
                    </ThemeAnimatedBlock>

                    <ThemeAnimatedBlock index={6}>
                        <Contact />
                    </ThemeAnimatedBlock>
                </main>

                <ThemeAnimatedBlock index={7}>
                    <Footer />
                </ThemeAnimatedBlock>
            </div>
        </div>
    )
}

export default App
