import Link from 'next/link';
import SectionWrapper from "../ui/SectionWrapper";
/**
 * HealingCircleSection component renders a section of the page dedicated to the concept of the Healing Circle.
 * It uses the SectionWrapper component to wrap the content and applies specific styling classes.
 * 
 * The section includes a card with a title and a descriptive paragraph explaining the significance of the Healing Circle.
 * 
 * @component
 * @example
 * return (
 *   <HealingCircleSection />
 * )
 */
const HealingCircleSection = () => (
    <SectionWrapper id="healing-circle" className="bg-base-300">
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-4xl mb-6 text-base-content">Building the Healing Circle</h2>
                <p className="text-lg leading-relaxed text-base-content/80">
                    Participants use the four cardinal directions to create a sacred space that symbolizes the stages of life. Standing in each section of the circle—Ancestors, Parents, Child, Teen, Adult, Elder—allows us to open up to our history and find connection and healing.
                </p>
                <div className="card-actions justify-end mt-4">
                    <Link href="/healing-circle">
                        <button className="btn btn-primary">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

HealingCircleSection.displayName = "HealingCircleSection";
export default HealingCircleSection;