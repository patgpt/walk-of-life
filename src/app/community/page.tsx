"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import 'daisyui';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

const CommunityPage: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (carouselRef.current) {
                if (event.key === 'ArrowLeft') {
                    const prevButton = carouselRef.current.querySelector<HTMLAnchorElement>('[aria-label="Previous testimonial"]');
                    prevButton?.click();
                } else if (event.key === 'ArrowRight') {
                    const nextButton = carouselRef.current.querySelector<HTMLAnchorElement>('[aria-label="Next testimonial"]');
                    nextButton?.click();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <main className="container mx-auto py-16 px-4 lg:px-0 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Welcome Section */}
            <section className="p-6 bg-base-200 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold mb-6">Welcome to Our Community</h2>
                <p className="text-lg">
                    The Walk of Life isn't just an individual journey—it's a collective experience deeply enriched by the community around us. Whether you’re looking to share your story, connect with others, or simply learn more about the healing process, our community is here to welcome you.
                </p>
                <SocialIcons />
            </section>

            {/* Event Preview Section - Replacing Countdown */}
            <section className="p-6 bg-base-200 rounded-lg shadow-md text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Next Walks and Talks Friday</h2>
                <p className="mb-6">Join us every Friday for community support and healing conversations.</p>
                <Link href="#contact" className="btn btn-primary">
                    Join the Event Now
                </Link>
            </section>

            {/* Group Chat Section - Updated Images */}
            <section className="p-6 bg-base-200 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold mb-6">Group Chat: Community Support in Action</h2>
                <div className="chat chat-start mb-6">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full relative">
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Emma - Community Member"
                                fill
                                className="rounded-full object-cover"
                                sizes="40px"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Emma
                        <time className="text-xs opacity-50 ml-2">09:15</time>
                    </div>
                    <div className="chat-bubble">
                        Hey everyone! I’m feeling a bit overwhelmed today. Any tips on how to stay positive?
                    </div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>

                <div className="chat chat-end mb-6">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full relative">
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="John - Community Mentor"
                                fill
                                className="rounded-full object-cover"
                                sizes="40px"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        John
                        <time className="text-xs opacity-50 ml-2">09:17</time>
                    </div>
                    <div className="chat-bubble">
                        Hi Emma! Take a deep breath and remember, it's okay to take things one step at a time. We’re all here for you!
                    </div>
                    <div className="chat-footer opacity-50">Seen at 09:17</div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="https://www.facebook.com" passHref>
                        <button className="btn btn-primary w-full">Join Our Facebook Community for More Support</button>
                    </Link>
                </div>
            </section>

            {/* Community Testimonials Carousel Section */}
            <section className="p-6 bg-base-200 rounded-lg shadow-md col-span-1 md:col-span-2" ref={carouselRef}>
                <h2 className="text-4xl font-bold mb-6">Community Testimonials</h2>
                <div className="carousel w-full mb-8">
                    <div id="testimonial1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-lg">
                            <div className="w-24 h-24 relative mb-4">
                                <Image
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Emma - Community Member"
                                    fill
                                    className="rounded-full object-cover"
                                    sizes="96px"
                                />
                            </div>
                            <blockquote className="text-lg text-center m-4">
                                "Joining Walks and Talks Fridays has been a life-changing experience. I've never felt more supported."
                            </blockquote>
                            <div className="text-sm text-center text-gray-600">- Emma, Community Member</div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#testimonial3" className="btn btn-circle" aria-label="Previous testimonial">❮</a>
                            <a href="#testimonial2" className="btn btn-circle" aria-label="Next testimonial">❯</a>
                        </div>
                    </div>
                    <div id="testimonial2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-lg">
                            <div className="w-24 h-24 relative mb-4">
                                <Image
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="John - Community Member"
                                    fill
                                    className="rounded-full object-cover"
                                    sizes="96px"
                                />
                            </div>
                            <blockquote className="text-lg text-center m-4">
                                "The healing circles have been such a powerful tool for processing grief and finding a path forward."
                            </blockquote>
                            <div className="text-sm text-center text-gray-600">- John, Community Member</div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#testimonial1" className="btn btn-circle" aria-label="Previous testimonial">❮</a>
                            <a href="#testimonial3" className="btn btn-circle" aria-label="Next testimonial">❯</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Involved Section */}
            <section className="p-6 bg-base-200 rounded-lg shadow-md text-center">
                <h2 className="text-4xl font-bold mb-6">Get Involved Today</h2>
                <p className="text-lg mb-4">
                    We welcome you to join our regular Walk of Life workshops, participate in Walks and Talks Fridays, or simply connect with us online. Together, we can foster healing, community, and growth.
                </p>
                <Link href="#contact" passHref>
                    <button className="btn btn-primary">Join the Community Now</button>
                </Link>
            </section>
        </main>
    );
};

export default CommunityPage;