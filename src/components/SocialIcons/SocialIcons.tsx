import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 items-center justify-center pt-8 w-full">
      <Link href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
        <FaFacebookF />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#405de6] via-[#833ab4] to-[#fd1d1d] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
        <FaInstagram />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
        <FaTiktok />
      </Link>
    </div>
  );
};

export default SocialIcons;