import { motion } from 'framer-motion';
import { hoverLift, revealScale, revealSide, revealUp, sectionStagger, viewport, viewportTight } from './animations/variants';

const About = () => {
    const coreStrengths = [
        'HTML: creating responsive and interactive web pages.',
        'CSS: styling responsive and interactive web pages.',
        'React: creating dynamic and reusable UI components.',
        'Next.js: building fast and production-ready React applications.',
        'JavaScript: building logic and working infrastructure.',
        'MongoDB: efficient database design and CRUD operations.',
        'Express.js: building robust backend services and APIs.',
        'Node.js: full-stack JavaScript environment for seamless development.'
    ];

    const keyResponsibilities = [
        'Full-stack development: client-side and server-side integration.',
        'API development: designing RESTful APIs.',
        'Database management: optimizing data storage and retrieval.',
        'Debugging and maintenance: improving performance and fixing issues.',
        'Collaboration: working with cross-functional teams effectively.',
        'Continuous learning: staying up-to-date with latest web technologies.',
        'UI optimization: improving responsiveness, usability, and overall user experience.',
    ]

    const sections = [
        {
            title: 'Core Strengths',
            badge: '01',
            className: 'about-ref-card-strengths',
            items: coreStrengths
        },
        {
            title: 'Key Responsibilities',
            badge: '02',
            className: 'about-ref-card-responsibilities',
            items: keyResponsibilities
        }
    ];

    return (
        <motion.section
            id="about"
            className="about section"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionStagger(0.14, 0.06)}
        >
            <motion.h2
                className="section-title"
                variants={revealUp(24)}
            >
                About Me
            </motion.h2>

            <motion.p
                className="about-ref-intro"
                variants={revealUp(20, 0.05)}
            >
                Hello! It&apos;s <strong>Dheeraj</strong>, a <strong>MERN Stack Developer</strong> with 1+ Years of Experience building responsive and user-friendly web applications. I can handle both Frontend and Backend perfectly. My core JavaScript, React, and Next.js skills are strong. I specialize in turning complex problems into simple, elegant solutions.
            </motion.p>

            <motion.div
                className="about-ref-grid"
                variants={sectionStagger(0.14, 0.08)}
            >
                {sections.map((section, sectionIndex) => (
                    <motion.article
                        key={section.title}
                        className={`about-ref-card card ${section.className}`}
                        variants={revealUp(36 + sectionIndex * 6, sectionIndex * 0.05)}
                        whileHover={hoverLift}
                    >
                        <motion.span
                            className="about-card-glow"
                            aria-hidden="true"
                            animate={{
                                x: sectionIndex === 0 ? [0, 12, -6, 0] : [0, -14, 8, 0],
                                y: sectionIndex === 0 ? [0, -14, 8, 0] : [0, 12, -10, 0],
                                scale: [1, 1.06, 0.96, 1],
                            }}
                            transition={{
                                duration: sectionIndex === 0 ? 9.5 : 11,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                        />

                        <motion.h3 className="about-ref-heading" variants={revealUp(20, 0.02)}>
                            <motion.span
                                className="about-ref-heading-badge"
                                variants={revealScale(0.04)}
                                whileHover={{ rotate: -4, scale: 1.06 }}
                            >
                                {section.badge}
                            </motion.span>
                            <span>{section.title}</span>
                        </motion.h3>

                        <motion.ol
                            className="about-ref-list"
                            variants={sectionStagger(0.06, 0.05)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportTight}
                        >
                            {section.items.map((item, index) => (
                                <motion.li
                                    key={item}
                                    variants={revealSide(index % 2 === 0 ? -20 : 20, index * 0.02)}
                                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ol>
                    </motion.article>
                ))}
            </motion.div>

            <motion.p
                className="about-ref-summary"
                variants={revealUp(20, 0.1)}
            >
                In short, I&apos;m a FullStack developer delivering modern, scalable web applications efficiently in a unified JavaScript ecosystem.
            </motion.p>
        </motion.section>
    );
};

export default About;
