import SocialIcons from "../SocialIcons/SocialIcons"

/**
 * Footer component that displays a footer section with navigation, social icons, and copyright notice.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral text-neutral-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Blog</a>
            </nav>
            <nav>
                <SocialIcons />
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} The Walk of Life. All rights reserved.</p>
            </aside>
        </footer>
    )
}
