import { ReactNode } from 'react';
import { createElement } from 'react';
import { FaInfoCircle, FaRoad, FaHeart, FaUsers, FaEnvelope } from 'react-icons/fa';

export interface MenuItem {
    href: string;
    icon: ReactNode;
    label: string;
}

export const menuItems: MenuItem[] = [
    { href: '/about', icon: createElement(FaInfoCircle), label: 'About' },
    { href: '/process', icon: createElement(FaRoad), label: 'Process' },
    { href: '/healing-circle', icon: createElement(FaHeart), label: 'Healing Circle' },
    { href: '/community', icon: createElement(FaUsers), label: 'Community' },
    { href: '/contact', icon: createElement(FaEnvelope), label: 'Contact' },
];
