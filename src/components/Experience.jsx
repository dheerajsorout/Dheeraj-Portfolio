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
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section id="experience" className="experience section">
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>
            <motion.div 
                className="experience-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        key={`${experience.company}-${experience.title}`}
                        className="card experience-card"
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10, 
                            scale: 1.02,
                            boxShadow: "0 25px 35px -10px rgba(0, 0, 0, 0.2), 0 10px 15px -10px rgba(16, 185, 129, 0.2)"
                        }}
                    >
                        <h3 className="accent">{experience.title}</h3>
                        <p className="company-date">
                            {experience.company}
                            {experience.meta ? ` | ${experience.meta}` : ''}
                        </p>
                        <p className="experience-desc">{experience.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
