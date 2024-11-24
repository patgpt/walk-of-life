"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => (
    <div className="hero min-h-screen relative">
        <Image
            src="/image.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={85}
        />
        <div className="hero-overlay bg-gradient-to-b from-base-300/95 to-base-300/98"></div>
        <div className="hero-content text-center z-10">
            <div className="max-w-md backdrop-blur-2xl bg-base-100/30 p-8 rounded-xl shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl font-bold mb-8 [text-wrap:balance] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-2xl">
                        A Journey of Healing and Connection
                    </h1>
                    <p className="text-xl mb-8 [text-wrap:balance] text-base-content drop-shadow">
                        Discover The Walk of Life—a simple, powerful way to heal, understand our past, and connect with our ancestors and each other.
                    </p>
                    <Link
                        href="#about"
                        className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                        Learn More &rarr;
                    </Link>
                </motion.div>
            </div>
        </div>
    </div>
);
HeroSection.displayName = "HeroSection";
export default HeroSection;