"use client"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * A button component that scrolls the window to the top when clicked.
 *
 * @component
 * @example
 * return (
 *   <BackToTop />
 * )
 *
 * @returns {JSX.Element} The BackToTop button component.
 */
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
                    aria-label="Scroll to top"
                    className="btn btn-circle btn-lg btn-primary fixed bottom-8 right-8 shadow-lg"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    &uarr;
                </motion.button>
            )}
        </AnimatePresence>
    );
};

BackToTop.displayName = "BackToTop";
export default BackToTop;