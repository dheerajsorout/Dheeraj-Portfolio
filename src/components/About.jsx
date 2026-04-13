import { motion } from 'framer-motion';

const About = () => {
    const coreCompetencies = [
        'HTML: creating responsive and interactive web pages.',
        'CSS: Styling responsive and interactive web pages.',
        'React: Creating dynamic and reusable UI components.',
        'JavaScript: Build logics and working infrastructure.',
        'MongoDB: Efficient database design and CRUD operations.',
        'Express.js: Building robust backend services and APIs.',
        'Node.js: Full-stack JavaScript environment for seamless development.'
    ];

    const keyResponsibilities = [
        'Full-stack development: Client-side and server-side integration.',
        'API development: Designing RESTful APIs.',
        'Database management: Optimizing data storage and retrieval.',
        'Debugging & Maintenance: Improving performance and fixing issues.',
        'Collaboration: Working with cross-functional teams effectively.',
        'Continuous learning: Staying up-to-date with latest web technologies.'
    ];

    return (
        <section id="about" className="about section">
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>
            <motion.p 
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                Hello! It&apos;s <strong>Dheeraj</strong>, a <strong>MERN Stack Developer</strong>  with 1.3+ years of experience building responsive and user-friendly web applications. I can handle both Frontend and Backend perfectly. My core JavaScript and React skills are strong. I specialize in turning complex problems into simple, elegant solutions.
            </motion.p>
            
            <div className="about-grid">
                <motion.div 
                    className="competencies"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="accent">Core Competencies</h3>
                    <ol className="about-list about-list-numbered">
                        {coreCompetencies.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </motion.div>
                <motion.div 
                    className="responsibilities"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="accent">Key Responsibilities</h3>
                    <ol className="about-list about-list-numbered">
                        {keyResponsibilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </motion.div>
            </div>

            <motion.p
                className="about-summary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
            >
                In short, I&apos;m a FullStack developer delivering modern, scalable web applications efficiently in a unified JavaScript ecosystem.
            </motion.p>
        </section>
    );
};

export default About;
