import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'React.js', badge: 'R', accent: '#61dafb', soft: 'rgba(97, 218, 251, 0.16)', border: 'rgba(97, 218, 251, 0.34)', badgeText: '#042334' },
        { name: 'Next.js', badge: 'N', accent: '#111827', soft: 'rgba(17, 24, 39, 0.14)', border: 'rgba(17, 24, 39, 0.2)', badgeText: '#ffffff' },
        { name: 'JavaScript', badge: 'JS', accent: '#f7df1e', soft: 'rgba(247, 223, 30, 0.17)', border: 'rgba(247, 223, 30, 0.3)', badgeText: '#1f2937' },
        { name: 'HTML5', badge: 'H5', accent: '#e34f26', soft: 'rgba(227, 79, 38, 0.16)', border: 'rgba(227, 79, 38, 0.28)', badgeText: '#ffffff' },
        { name: 'CSS3', badge: 'C3', accent: '#1572b6', soft: 'rgba(21, 114, 182, 0.16)', border: 'rgba(21, 114, 182, 0.28)', badgeText: '#ffffff' },
        { name: 'Node.js', badge: 'ND', accent: '#339933', soft: 'rgba(51, 153, 51, 0.16)', border: 'rgba(51, 153, 51, 0.28)', badgeText: '#ffffff' },
        { name: 'Express.js', badge: 'EX', accent: '#4b5563', soft: 'rgba(75, 85, 99, 0.14)', border: 'rgba(75, 85, 99, 0.22)', badgeText: '#ffffff' },
        { name: 'MongoDB', badge: 'MG', accent: '#47a248', soft: 'rgba(71, 162, 72, 0.16)', border: 'rgba(71, 162, 72, 0.28)', badgeText: '#ffffff' },
        { name: 'Neon DB', badge: 'NE', accent: '#00e699', soft: 'rgba(0, 230, 153, 0.16)', border: 'rgba(0, 230, 153, 0.3)', badgeText: '#03261b' },
        { name: 'Git', badge: 'GT', accent: '#f05032', soft: 'rgba(240, 80, 50, 0.16)', border: 'rgba(240, 80, 50, 0.28)', badgeText: '#ffffff' },
        { name: 'GitHub', badge: 'GH', accent: '#24292f', soft: 'rgba(36, 41, 47, 0.14)', border: 'rgba(36, 41, 47, 0.2)', badgeText: '#ffffff' },
        { name: 'VS Code', badge: 'VS', accent: '#007acc', soft: 'rgba(0, 122, 204, 0.16)', border: 'rgba(0, 122, 204, 0.28)', badgeText: '#ffffff' },
        { name: 'Vercel', badge: 'VC', accent: '#111111', soft: 'rgba(17, 17, 17, 0.14)', border: 'rgba(17, 17, 17, 0.2)', badgeText: '#ffffff' }
    ];

    const skillRows = [skills.slice(0, 7), skills.slice(7)];

    return (
        <section id="skills" className="skills section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Technical Skills
            </motion.h2>

            <motion.div
                className="skills-showcase card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
            >
                <span className="skills-aura skills-aura-one" aria-hidden="true" />
                <span className="skills-aura skills-aura-two" aria-hidden="true" />
                <span className="skills-grid-glow" aria-hidden="true" />

                {skillRows.map((row, rowIndex) => (
                    <div
                        key={`row-${rowIndex}`}
                        className={`skills-marquee ${rowIndex % 2 === 0 ? 'skills-marquee-forward' : 'skills-marquee-reverse'}`}
                    >
                        <div className="skills-track">
                            {[...row, ...row].map((skill, index) => (
                                <motion.span
                                    key={`${rowIndex}-${skill.name}-${index}`}
                                    className="skill-chip skill-chip-premium"
                                    style={{
                                        '--skill-accent': skill.accent,
                                        '--skill-soft': skill.soft,
                                        '--skill-border': skill.border,
                                        '--skill-badge-text': skill.badgeText,
                                        '--skill-delay': `${(index % row.length) * 0.18}s`
                                    }}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.03,
                                        boxShadow: '0 14px 26px rgba(16, 185, 129, 0.2)'
                                    }}
                                    transition={{
                                        delay: rowIndex * 0.08 + (index % row.length) * 0.04,
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    viewport={{ once: true }}
                                    aria-hidden={index >= row.length}
                                >
                                    <span className="skill-chip-badge" aria-hidden="true">
                                        {skill.badge}
                                    </span>
                                    <span className="skill-chip-label">{skill.name}</span>
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
