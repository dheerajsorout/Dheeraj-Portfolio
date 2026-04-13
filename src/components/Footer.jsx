import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: 'fab fa-instagram', href: '#' },
        { icon: 'fab fa-github', href: 'https://github.com/dheeraj' },
        { icon: 'fab fa-linkedin-in', href: '#' },
        { icon: 'fas fa-envelope', href: 'mailto:dheerajsorout16500@gmail.com' },
    ];

    return (
        <footer className="footer">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                &copy; 2025 Dheeraj | All Rights Reserved
            </motion.p>
            <div className="social-icons">
                {socialLinks.map((link, index) => (
                    <motion.a 
                        key={index}
                        href={link.href} 
                        target="_blank" 
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <i className={link.icon}></i>
                    </motion.a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
