
import SectionWrapper from "../ui/SectionWrapper";
/**
 * AboutSection component renders a section of the webpage that provides information
 * about "The Walk of Life". It uses the SectionWrapper component to wrap the content
 * and applies specific styling classes for layout and appearance.
 *
 * @component
 * @example
 * return (
 *   <AboutSection />
 * )
 *
 * @returns {JSX.Element} A section element containing information about "The Walk of Life".
 */
const AboutSection = (): JSX.Element => (
    <SectionWrapper id="about" className="bg-base-200">
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-4xl mb-6 text-base-content">About The Walk of Life</h2>
                <p className="text-lg leading-relaxed text-base-content/80">
                    The Walk of Life is a community-driven healing tool that helps individuals connect with their ancestors, understand their past, and share their stories in a supportive environment. Inspired by ancient traditions and modern approaches, The Walk of Life allows us to explore our lives through the symbolism of the healing circle—a journey from ancestors to elders.
                </p>
            </div>
        </div>
    </SectionWrapper>
);

AboutSection.displayName = "AboutSection";
export default AboutSection;