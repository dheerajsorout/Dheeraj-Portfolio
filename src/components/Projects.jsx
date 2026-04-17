import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'BookMyInfluencer',
            slug: 'bookmyinfluencer',
            desc: 'Developed a platform for brands to collaborate with influencers. Implemented discovery, campaign tracking, and workflows.',
            link: 'https://bookmyinfluencer.vercel.app/'
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
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

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
                    <span className="project-brand-mark project-brand-mark-datapedia">
                        <span className="project-brand-datapedia-glyph">D</span>
                    </span>
                    <span className="project-brand-stack">
                        <span className="project-brand-datapedia-title">DATAPEDIA.AI</span>
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
                        <span className="project-brand-hotelhider-glyph">
                            <span className="project-brand-hotelhider-glyph-core"></span>
                        </span>
                    </span>
                    <span className="project-brand-stack">
                        <span className="project-brand-hotelhider-overline">HOTEL</span>
                        <span className="project-brand-hotelhider-title">HIDER</span>
                    </span>
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
        <section id="projects" className="projects section">
            <motion.h2 
                className="section-title text-gradient" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Projects
            </motion.h2>
            <motion.div 
                className="projects-grid dynamic-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        className={`card project-card project-card-${project.slug}`}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                        variants={itemVariants}
                        whileHover={{ 
                            y: -10,
                            scale: 1.02, 
                            boxShadow: "0 30px 40px -10px rgba(0, 0, 0, 0.3), 0 15px 20px -10px rgba(16, 185, 129, 0.2)",
                            borderColor: "rgba(16, 185, 129, 0.4)"
                        }}
                    >
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
                                    whileHover={{ x: 5 }}
                                >
                                    Live Demo <i className="fas fa-external-link-alt"></i>
                                </motion.a>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
