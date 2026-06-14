import { motion } from 'framer-motion';
import { hoverTilt, revealUp, sectionStagger, viewport } from './animations/variants';

const Projects = () => {
    const projects = [
        {
            title: 'BookMyInfluencer',
            slug: 'bookmyinfluencer',
            desc: 'Developed a platform for brands to collaborate with influencers. Implemented discovery, campaign tracking, and workflows.',
            link: 'https://www.bookmyinfluncer.com/'
        },
        {
            title: 'Data-Pedia AI',
            slug: 'data-pedia-ai',
            desc: 'Built an AI-powered spreadsheet assistant using natural language processing for data cleaning and insights.',
            link: 'https://data-pedia-ai.vercel.app/'
        },
        {
            title: 'Lead-Genius',
            slug: 'lead-genius',
            desc: 'Developed a lead management system for organizing and tracking business leads efficiently.',
            link: 'https://lead-genius-nn4h.vercel.app/'
        },
        {
            title: 'Hotel-Hider',
            slug: 'hotel-hider',
            icon: 'fas fa-hotel',
            desc: 'Designed a modern hotel website with responsive UI and service showcase.',
            link: 'https://hider-two.vercel.app/'
        },
        {
            title: 'Pubesto E-Commerce',
            slug: 'pubesto-ecommerce',
            desc: 'Built a responsive e-commerce platform with product catalog, category management, shopping cart, and secure checkout features.',
            link: 'https://www.pubesto.com/'
        }
    ];

    const renderProjectTitle = (project) => {
        if (project.slug === 'bookmyinfluencer') {
            return (
                <div className="project-brand project-brand-bookmyinfluencer" aria-label="BookMyInfluencer">
                    <span className="project-brand-mark">B</span>
                    <span className="project-brand-wordmark">
                        <span className="project-brand-bookmy">Bookmy</span>
                        <span className="project-brand-influencer">Influencer</span>
                    </span>
                </div>
            );
        }

        if (project.slug === 'data-pedia-ai') {
            return (
                <div className="project-brand project-brand-datapedia" aria-label="DATAPEDIA.AI">
                    <span className="project-brand-datapedia-aura" aria-hidden="true" />
                    <span className="project-brand-mark project-brand-mark-datapedia">
                        <span className="project-brand-datapedia-grid" aria-hidden="true" />
                        <span className="project-brand-datapedia-glyph">D</span>
                        <span className="project-brand-datapedia-scan" aria-hidden="true" />
                    </span>
                    <span className="project-brand-stack">
                        <span className="project-brand-datapedia-title-row">
                            <span className="project-brand-datapedia-title">DATAPEDIA</span>
                            <span className="project-brand-datapedia-pill">AI</span>
                        </span>
                        <span className="project-brand-datapedia-tagline">LET&apos;S EXPLORE DATA</span>
                    </span>
                </div>
            );
        }

        if (project.slug === 'lead-genius') {
            return (
                <div className="project-brand project-brand-leadgenius" aria-label="LeadGenius">
                    <span className="project-brand-mark project-brand-mark-leadgenius">
                        <i className="fas fa-bolt" aria-hidden="true"></i>
                    </span>
                    <span className="project-brand-leadgenius-text">LeadGenius</span>
                </div>
            );
        }

        if (project.slug === 'hotel-hider') {
            return (
                <div className="project-brand project-brand-hotelhider" aria-label="Hotel Hider">
                    <span className="project-brand-mark project-brand-mark-hotelhider" aria-hidden="true">
                        H
                    </span>
                    <span className="project-brand-stack">
                        <span className="project-brand-hotelhider-overline">HOTEL</span>
                        <span className="project-brand-hotelhider-title">HIDER</span>
                    </span>
                </div>
            );
        }

        if (project.slug === 'pubesto-ecommerce') {
            return (
                <div className="project-brand project-brand-pubesto" aria-label="Pubesto E-Commerce">
                    <img
                        className="project-brand-pubesto-logo"
                        src="/pubesto-logo.svg"
                        alt="Pubesto"
                        loading="lazy"
                    />
                </div>
            );
        }

        return (
            <span className="project-title-default">
                {project.icon && <i className={project.icon}></i>}
                <span>{project.title}</span>
            </span>
        );
    };

    return (
        <motion.section
            id="projects"
            className="projects section"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionStagger(0.14, 0.08)}
        >
            <motion.h2
                className="section-title text-gradient"
                variants={revealUp(24)}
            >
                Projects
            </motion.h2>

            <motion.div
                className="projects-grid dynamic-grid"
                variants={sectionStagger(0.16, 0.08)}
            >
                {projects.map((project, index) => (
                    <motion.article
                        key={index}
                        className={`card project-card project-card-${project.slug}`}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                        variants={revealUp(34 + index * 6, index * 0.06)}
                        whileHover={hoverTilt}
                    >
                        <motion.span
                            className="project-card-glow"
                            aria-hidden="true"
                            animate={{
                                x: [0, index % 2 === 0 ? 18 : -18, 0],
                                y: [0, index % 2 === 0 ? -12 : 14, 0],
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 9 + index,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                        />

                        <div>
                            <h3 className="project-title text-center">
                                {renderProjectTitle(project)}
                            </h3>
                            <p className="project-desc text-center">{project.desc}</p>
                        </div>
                        {project.link && (
                            <div className="text-center" style={{ marginTop: '15px' }}>
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9em', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                    whileHover={{ x: 6 }}
                                >
                                    Live Demo <i className="fas fa-external-link-alt"></i>
                                </motion.a>
                            </div>
                        )}
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
