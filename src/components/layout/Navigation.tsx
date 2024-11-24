'use client';

import Link from 'next/link';
import ThemeController from '../ui/ThemeController';
import { menuItems } from '@/types/menu';

const Navigation = (): JSX.Element => {
    return (
        <div className="drawer">
            <input id="navigation-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <nav className="navbar bg-base-100/95 backdrop-blur-md border-b border-base-content/10"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <div className="navbar-start">
                        <label htmlFor="navigation-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <Link href="/" className="btn btn-ghost text-xl font-bold">
                            The Walk of Life
                        </Link>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        <div className="hidden lg:flex items-center gap-4">
                            {menuItems.map(({ href, icon, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="btn btn-ghost btn-sm gap-2"
                                    aria-label={label}
                                >
                                    <span aria-hidden="true">{icon}</span>
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <ThemeController />
                    </div>
                </nav>
            </div>
            <div className="drawer-side z-[999]">
                <label htmlFor="navigation-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-100 w-80 min-h-full p-4">
                    <div className="border-b border-base-content/10 pb-4 mb-4">
                        <h2 className="font-bold text-lg px-4">Menu</h2>
                    </div>
                    {menuItems.map(({ href, icon, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="btn btn-ghost justify-start gap-2 mb-2"
                            aria-label={label}
                        >
                            <span aria-hidden="true">{icon}</span>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navigation;