"use client";
import Link from "next/link";
import SectionWrapper from "../ui/SectionWrapper";
import SocialIcons from "../SocialIcons/SocialIcons";

const CommunitySection = () => (
    <SectionWrapper id="community" className="bg-base-200">
        <div className="card-body">
            <h2 className="card-title text-4xl mb-6 text-base-content">Community Involvement</h2>
            <p className="text-lg leading-relaxed text-base-content/80">
                The Walk of Life is about connection—sharing experiences, listening, and supporting each other. Whether gathering in homes, community centers, or online, everyone is welcome to join the circle and be part of the healing journey. Together, we create a safe space where our stories are heard and our past is honored.
            </p>
            <SocialIcons />
            <Link href="#contact" className="btn btn-primary mt-4">Join the Circle</Link>
        </div>
    </SectionWrapper>
);

CommunitySection.displayName = "CommunitySection";
export default CommunitySection;