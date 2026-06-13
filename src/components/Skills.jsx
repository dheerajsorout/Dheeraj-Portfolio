import { motion } from 'framer-motion';
import { hoverLift, revealScale, revealUp, sectionStagger, viewport } from './animations/variants';

const Skills = () => {
    const skills = [
        { name: 'React.js', badge: 'R', accent: '#61dafb', soft: 'rgba(97, 218, 251, 0.16)', border: 'rgba(97, 218, 251, 0.34)', badgeText: '#042334' },
        { name: 'Next.js', badge: 'N', accent: '#111827', soft: 'rgba(17, 24, 39, 0.14)', border: 'rgba(17, 24, 39, 0.2)', badgeText: '#ffffff' },
        { name: 'JavaScript', badge: 'JS', accent: '#f7df1e', soft: 'rgba(247, 223, 30, 0.17)', border: 'rgba(247, 223, 30, 0.3)', badgeText: '#1f2937' },
        { name: 'HTML5', badge: 'H5', accent: '#e34f26', soft: 'rgba(227, 79, 38, 0.16)', border: 'rgba(227, 79, 38, 0.28)', badgeText: '#ffffff' },
        { name: 'CSS3', badge: 'C3', accent: '#1572b6', soft: 'rgba(21, 114, 182, 0.16)', border: 'rgba(21, 114, 182, 0.28)', badgeText: '#ffffff' },
        { name: 'Node.js', badge: 'ND', accent: '#339933', soft: 'rgba(51, 153, 51, 0.16)', border: 'rgba(51, 153, 51, 0.28)', badgeText: '#ffffff' },
        { name: 'Express.js', badge: 'EX', accent: '#4b5563', soft: 'rgba(75, 85, 99, 0.14)', border: 'rgba(75, 85, 99, 0.22)', badgeText: '#ffffff' },
        { name: 'Shopify', badge: 'SH', accent: '#95bf47', soft: 'rgba(149, 191, 71, 0.16)', border: 'rgba(149, 191, 71, 0.28)', badgeText: '#173000' },
        { name: 'Python', badge: 'PY', accent: '#3776ab', soft: 'rgba(55, 118, 171, 0.16)', border: 'rgba(55, 118, 171, 0.28)', badgeText: '#ffffff' },
        { name: 'Antigravity', badge: 'AG', accent: '#8b5cf6', soft: 'rgba(139, 92, 246, 0.16)', border: 'rgba(139, 92, 246, 0.28)', badgeText: '#ffffff' },
        { name: 'Codex', badge: 'CX', accent: '#14b8a6', soft: 'rgba(20, 184, 166, 0.16)', border: 'rgba(20, 184, 166, 0.28)', badgeText: '#032d29' },
        { name: 'MongoDB', badge: 'MG', accent: '#47a248', soft: 'rgba(71, 162, 72, 0.16)', border: 'rgba(71, 162, 72, 0.28)', badgeText: '#ffffff' },
        { name: 'Neon DB', badge: 'NE', accent: '#00e699', soft: 'rgba(0, 230, 153, 0.16)', border: 'rgba(0, 230, 153, 0.3)', badgeText: '#03261b' },
        { name: 'Git', badge: 'GT', accent: '#f05032', soft: 'rgba(240, 80, 50, 0.16)', border: 'rgba(240, 80, 50, 0.28)', badgeText: '#ffffff' },
        { name: 'GitHub', badge: 'GH', accent: '#24292f', soft: 'rgba(36, 41, 47, 0.14)', border: 'rgba(36, 41, 47, 0.2)', badgeText: '#ffffff' },
        { name: 'VS Code', badge: 'VS', accent: '#007acc', soft: 'rgba(0, 122, 204, 0.16)', border: 'rgba(0, 122, 204, 0.28)', badgeText: '#ffffff' },
        { name: 'Vercel', badge: 'VC', accent: '#111111', soft: 'rgba(17, 17, 17, 0.14)', border: 'rgba(17, 17, 17, 0.2)', badgeText: '#ffffff' }
    ];

    const skillRows = [skills.slice(0, 7), skills.slice(7)];

    const getTrackAnimation = (rowIndex) => ({
        x: rowIndex % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
        transition: {
            duration: rowIndex % 2 === 0 ? 22 : 26,
            ease: 'linear',
            repeat: Infinity,
        },
    });

    return (
        <motion.section
            id="skills"
            className="skills section"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionStagger(0.12, 0.08)}
        >
            <motion.h2
                className="section-title"
                variants={revealUp(24)}
            >
                Technical Skills
            </motion.h2>

            <motion.div
                className="skills-showcase card"
                variants={revealScale(0.04)}
            >
                <motion.span
                    className="skills-aura skills-aura-one"
                    aria-hidden="true"
                    animate={{
                        x: [0, 18, -10, 0],
                        y: [0, -16, 8, 0],
                        scale: [1, 1.08, 0.98, 1],
                    }}
                    transition={{
                        duration: 12,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <motion.span
                    className="skills-aura skills-aura-two"
                    aria-hidden="true"
                    animate={{
                        x: [0, -16, 10, 0],
                        y: [0, 12, -14, 0],
                        scale: [1, 0.96, 1.1, 1],
                    }}
                    transition={{
                        duration: 13.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <motion.span
                    className="skills-grid-glow"
                    aria-hidden="true"
                    animate={{ x: ['-110%', '110%'] }}
                    transition={{
                        duration: 5.4,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 1.8,
                    }}
                />

                {skillRows.map((row, rowIndex) => (
                    <div
                        key={`row-${rowIndex}`}
                        className={`skills-marquee ${rowIndex % 2 === 0 ? 'skills-marquee-forward' : 'skills-marquee-reverse'}`}
                    >
                        <motion.div className="skills-track" animate={getTrackAnimation(rowIndex)}>
                            {[...row, ...row].map((skill, index) => (
                                <motion.span
                                    key={`${rowIndex}-${skill.name}-${index}`}
                                    className="skill-chip skill-chip-premium"
                                    style={{
                                        '--skill-accent': skill.accent,
                                        '--skill-soft': skill.soft,
                                        '--skill-border': skill.border,
                                        '--skill-badge-text': skill.badgeText
                                    }}
                                    initial={{ opacity: 0, scale: 0.9, y: 16 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    whileHover={hoverLift}
                                    transition={{
                                        delay: rowIndex * 0.08 + (index % row.length) * 0.035,
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    aria-hidden={index >= row.length}
                                >
                                    <motion.span
                                        className="skill-chip-badge"
                                        aria-hidden="true"
                                        whileHover={{ rotate: -5, scale: 1.06 }}
                                    >
                                        {skill.badge}
                                    </motion.span>
                                    <span className="skill-chip-label">{skill.name}</span>
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Skills;
