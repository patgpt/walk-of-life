"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
};

/**
 * A wrapper component that creates a section with a card-style container
 * @component
 */
const SectionWrapper = ({ children, id, className = "" }: {
    /** The content to be rendered inside the section */
    children: React.ReactNode;
    /** The HTML id attribute for the section element */
    id: string;
    /** Additional CSS classes to apply to the section element (optional) */
    className?: string;
}) => (
    <section id={id} className={cn("py-24", className)}>
        <div className="max-w-4xl mx-auto px-4">
            <motion.div 
                className="card backdrop-blur-md bg-base-100/60 shadow-xl border border-base-content/10 transition-all duration-300 hover:shadow-2xl hover:bg-base-100/70"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
                variants={variants}
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </div>
    </section>
);

SectionWrapper.displayName = "SectionWrapper";
export default SectionWrapper;