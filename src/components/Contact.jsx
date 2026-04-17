import { motion } from 'framer-motion';

const Contact = () => {
    const contactMethods = [
        {
            label: 'Name',
            value: 'Dheeraj',
            meta: 'MERN Stack Developer',
            icon: 'fas fa-user',
            tone: 'identity'
        },
        {
            label: 'Mobile',
            value: '+91 9518184601',
            meta: 'For quick discussion',
            icon: 'fas fa-phone-alt',
            tone: 'phone',
            href: 'tel:+919518184601'
        },
        {
            label: 'Email',
            value: 'dheerajsorout16500@gmail.com',
            meta: 'Best for project inquiries',
            icon: 'fas fa-envelope',
            tone: 'email',
            href: 'mailto:dheerajsorout16500@gmail.com'
        }
    ];

    const methodsVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.12
            }
        }
    };

    const methodVariants = {
        hidden: { opacity: 0, y: 26 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="contact" className="contact section">
            <motion.h2
                className="section-title text-gradient"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Contact Me
            </motion.h2>

            <motion.p
                className="contact-section-copy text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                Feel free to reach out for collaborations or just a friendly chat.
            </motion.p>

            <motion.div
                className="contact-shell card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="contact-orb contact-orb-one" aria-hidden="true" />
                <span className="contact-orb contact-orb-two" aria-hidden="true" />
                <span className="contact-grid-overlay" aria-hidden="true" />

                <motion.div
                    className="contact-panel"
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.12, duration: 0.5 }}
                >
                    <span className="contact-kicker">Open for Collaboration</span>
                    <h3 className="contact-headline">Let&apos;s build something clean, fast, and production-ready.</h3>
                    <p className="contact-copy">
                        If you&apos;re planning a modern web app, improving an existing product, or need strong frontend and backend execution, reach out through the channels here.
                    </p>

                    <div className="contact-actions">
                        <motion.a
                            href="mailto:dheerajsorout16500@gmail.com"
                            className="btn btn-primary"
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <i className="fas fa-paper-plane"></i> Email Me
                        </motion.a>
                        <motion.a
                            href="tel:+919518184601"
                            className="contact-action-secondary"
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <i className="fas fa-phone-alt"></i> Schedule a Call
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-method-grid"
                    variants={methodsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {contactMethods.map((item) => {
                        const Tag = item.href ? motion.a : motion.div;
                        const linkProps = item.href ? { href: item.href } : {};

                        return (
                            <Tag
                                key={item.label}
                                className={`contact-method-card contact-tone-${item.tone}`}
                                variants={methodVariants}
                                {...linkProps}
                                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(16, 185, 129, 0.4)" }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <span className="contact-method-icon" aria-hidden="true">
                                    <i className={item.icon}></i>
                                </span>
                                <span className="contact-method-label">{item.label}</span>
                                <span className={`contact-method-value ${item.href ? 'is-link' : ''}`}>{item.value}</span>
                                <span className="contact-method-meta">{item.meta}</span>
                            </Tag>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
