
import { ContactForm } from "../forms/ContactForm";
import SectionWrapper from "../ui/SectionWrapper"


/**
 * The `ContactSection` component renders a section of the website dedicated to contacting the organization.
 * It includes a title, a description, and a contact form for users to fill out.
 * The section is styled with a neutral background and a card layout.
 * 
 * @component
 * @example
 * return (
 *   <ContactSection />
 * )
 * 
 * @returns {JSX.Element} A React component that renders the contact section.
 */
export const ContactSection = () => {
    return (
        <SectionWrapper id="contact">
            <div className="card backdrop-blur-md bg-neutral-focus/30 shadow-xl border border-neutral-content/10 bg-neutral">
                <div className="card-body">
                    <h2 className="card-title text-4xl mb-6 text-neutral-content">Contact Us</h2>
                    <p className="text-lg mb-8 text-neutral-content/80">If you are interested in joining or learning more about The Walk of Life, please get in touch. Let us heal, connect, and grow together.</p>
                    <ContactForm />
                </div>
            </div>
        </SectionWrapper>
    )
}
ContactSection.displayName = "ContactSection";
export default ContactSection;