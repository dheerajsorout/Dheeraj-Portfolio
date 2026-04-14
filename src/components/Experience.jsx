import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Professional Training',
        company: 'DUCAT IT Training, Noida',
        meta: '1 Year Experience',
        description:
            'Built strong practical knowledge in MERN stack development through hands-on training, real-world assignments, and focused work on frontend and backend fundamentals.'
    },
    {
        title: 'Internship',
        company: 'Go Hype Media, Delhi',
        meta: '3 Months Experience',
        description:
            'Gained practical knowledge in full-stack web development and collaborated on scaling web experiences. Actively contributed to professional projects while exploring industry standards and workflows.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>
            <div className="experience-grid">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={`${experience.company}-${experience.title}`}
                        className="card experience-card"
                        style={{ margin: '0 auto', maxWidth: '700px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                    >
                        <h3 className="accent">{experience.title}</h3>
                        <p className="company-date">
                            {experience.company}
                            {experience.meta ? ` | ${experience.meta}` : ''}
                        </p>
                        <p className="experience-desc">{experience.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
