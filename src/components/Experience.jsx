import { motion } from 'framer-motion';
import { hoverLift, revealUp, sectionStagger, viewport } from './animations/variants';

const experiences = [
    {
        title: '1 Year Experience',
        company: 'Go Hype Media, Delhi',
        meta: '',
        description:
            'Gained practical knowledge in full-stack web development and collaborated on scaling web experiences. Actively contributed to professional projects while exploring industry standards and workflows.'
    },
    {
        title: 'Professional Training',
        company: 'DUCAT IT Training Institute, Noida',
        meta: '6 Months ',
        description:
            'Built strong practical knowledge in MERN stack development through hands-on training, real-world assignments, and focused work on frontend and backend fundamentals.'
    }
];

const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="experience section"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionStagger(0.16, 0.08)}
        >
            <motion.h2
                className="section-title text-gradient"
                variants={revealUp(24)}
            >
                Experience
            </motion.h2>

            <motion.div
                className="experience-grid"
                variants={sectionStagger(0.16, 0.08)}
            >
                {experiences.map((experience, index) => (
                    <motion.article
                        key={`${experience.company}-${experience.title}`}
                        className="card experience-card"
                        variants={revealUp(34 + index * 8, index * 0.06)}
                        whileHover={hoverLift}
                    >
                        <span className="experience-step">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                        <h3 className="accent">{experience.title}</h3>
                        <p className="company-date">
                            {experience.company}
                            {experience.meta ? ` | ${experience.meta}` : ''}
                        </p>
                        <p className="experience-desc">{experience.description}</p>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Experience;
