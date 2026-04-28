import { motion } from 'framer-motion';
import { hoverLift, revealScale, revealUp, sectionStagger, viewport, viewportTight } from './animations/variants';

const Contact = () => {
    const phoneNumber = '+91 9518184601';
    const phoneHref = 'tel:+919518184601';
    const emailAddress = 'dheerajsorout16500@gmail.com';
    const emailHref = `mailto:${emailAddress}`;
    const whatsappHref = `https://wa.me/919518184601?text=${encodeURIComponent(
        'Hi Dheeraj, I found your portfolio and would like to connect about a project.'
    )}`;



    const contactMethods = [
        {
            label: 'WhatsApp',
            value: 'WhatsApp Chat',
            meta: 'Start the conversation here for the fastest reply.',
            icon: 'fab fa-whatsapp',
            tone: 'whatsapp',
            href: whatsappHref,
            cta: 'Open Chat',
            badge: 'Quickest',
            external: true,
            featured: true
        },
        {
            label: 'Email',
            value: emailAddress,
            meta: 'Best for briefs, references, and requirement details.',
            icon: 'fas fa-envelope',
            tone: 'email',
            href: emailHref,
            cta: 'Send Email',
            badge: 'Detailed'
        },
        {
            label: 'Call',
            value: phoneNumber,
            meta: 'Use this for direct discussion around timeline or delivery.',
            icon: 'fas fa-phone-alt',
            tone: 'phone',
            href: phoneHref,
            cta: 'Call Now',
            badge: 'Direct'
        }
    ];

    return (
        <motion.section
            id="contact"
            className="contact section"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={sectionStagger(0.14, 0.08)}
        >
            <motion.h2
                className="section-title text-gradient"
                variants={revealUp(24)}
            >
                Contact Me
            </motion.h2>

            <motion.p
                className="contact-section-copy text-center"
                variants={revealUp(18, 0.05)}
            >
                Premium contact, minimal friction. WhatsApp is the fastest route.
            </motion.p>

            <motion.div
                className="contact-shell card"
                variants={revealScale(0.06)}
            >
                <motion.span
                    className="contact-orb contact-orb-one"
                    aria-hidden="true"
                    animate={{
                        x: [0, 20, -8, 0],
                        y: [0, -18, 10, 0],
                        scale: [1, 1.08, 0.96, 1],
                    }}
                    transition={{
                        duration: 10.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <motion.span
                    className="contact-orb contact-orb-two"
                    aria-hidden="true"
                    animate={{
                        x: [0, -18, 10, 0],
                        y: [0, 14, -12, 0],
                        scale: [1, 0.96, 1.12, 1],
                    }}
                    transition={{
                        duration: 12,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <span className="contact-grid-overlay" aria-hidden="true" />

                <motion.div
                    className="contact-panel"
                    variants={revealUp(28, 0.04)}
                >
                    <span className="contact-kicker">Fast Contact</span>
                    <h3 className="contact-headline">A direct line to your next build.</h3>
                    <p className="contact-copy">
                        Freelance project, internship, or product collaboration? Start on WhatsApp for the quickest reply.
                    </p>

                    <motion.div
                        className="contact-availability"
                        variants={revealUp(16, 0.07)}
                    >
                        <span className="contact-availability-dot" aria-hidden="true" />
                        <span className="contact-availability-copy">Dheeraj | MERN Stack Developer | Available for work</span>
                    </motion.div>

                    <motion.div
                        className="contact-panel-badges"
                        variants={sectionStagger(0.08, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportTight}
                    >
                        {['Freelance', 'Product Builds', 'Internships'].map((item, index) => (
                            <motion.span
                                key={item}
                                className="contact-panel-badge"
                                variants={revealUp(18, index * 0.03)}
                                whileHover={{ y: -2 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>



                    <div className="contact-actions">
                        <motion.a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary contact-action-whatsapp"
                            whileHover={hoverLift}
                            whileTap={{ scale: 0.97 }}
                        >
                            <i className="fab fa-whatsapp"></i> WhatsApp Me
                        </motion.a>
                        <motion.a
                            href={emailHref}
                            className="contact-action-secondary contact-action-email"
                            whileHover={hoverLift}
                            whileTap={{ scale: 0.97 }}
                        >
                            <i className="fas fa-paper-plane"></i> Email Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-method-grid"
                    variants={sectionStagger(0.1, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportTight}
                >
                    {contactMethods.map((item, index) => {
                        const Tag = item.href ? motion.a : motion.div;
                        const linkProps = item.href
                            ? {
                                  href: item.href,
                                  ...(item.external ? { target: '_blank', rel: 'noreferrer' } : {}),
                              }
                            : {};

                        return (
                            <Tag
                                key={item.label}
                                className={`contact-method-card contact-tone-${item.tone} ${item.featured ? 'contact-method-card-featured' : ''} ${item.href ? 'contact-method-card-link' : 'contact-method-card-static'}`}
                                variants={revealUp(30 + index * 4, index * 0.04)}
                                {...linkProps}
                                whileHover={hoverLift}
                                whileTap={item.href ? { scale: 0.98 } : undefined}
                            >
                                <div className="contact-method-top">
                                    <motion.span
                                        className="contact-method-icon"
                                        aria-hidden="true"
                                        whileHover={{ rotate: -6, scale: 1.06 }}
                                    >
                                        <i className={item.icon}></i>
                                    </motion.span>
                                    <span className="contact-method-badge">{item.badge}</span>
                                </div>
                                <span className="contact-method-label">{item.label}</span>
                                <span className={`contact-method-value ${item.href ? 'is-link' : ''}`}>{item.value}</span>
                                <span className="contact-method-meta">{item.meta}</span>
                                <span className={`contact-method-cta ${item.href ? '' : 'is-static'}`}>
                                    {item.cta}
                                    {item.href ? <i className="fas fa-arrow-right"></i> : null}
                                </span>
                            </Tag>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;

