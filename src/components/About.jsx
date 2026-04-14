import { motion } from 'framer-motion';

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
        'Testing and deployment support: preparing applications for stable production delivery.'
    ];

    return (
        <section id="about" className="about section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="about-ref-intro"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
            >
                Hello! It&apos;s <strong>Dheeraj</strong>, a <strong>MERN Stack Developer</strong> with 1.3+ years of experience building responsive and user-friendly web applications. I can handle both Frontend and Backend perfectly. My core JavaScript, React, and Next.js skills are strong. I specialize in turning complex problems into simple, elegant solutions.
            </motion.p>

            <motion.div
                className="about-ref-board card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
            >
                <div className="about-ref-column">
                    <h3 className="about-ref-heading">Core Strengths</h3>
                    <ol className="about-ref-list">
                        {coreStrengths.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>

                <div className="about-ref-column">
                    <h3 className="about-ref-heading">Key Responsibilities</h3>
                    <ol className="about-ref-list">
                        {keyResponsibilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </motion.div>

            <motion.p
                className="about-ref-summary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                In short, I&apos;m a FullStack developer delivering modern, scalable web applications efficiently in a unified JavaScript ecosystem.
            </motion.p>
        </section>
    );
};

export default About;
