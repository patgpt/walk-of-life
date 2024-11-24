import SectionWrapper from "../ui/SectionWrapper";

const ProcessSection = () => (
    <SectionWrapper id="process" className="bg-base-100">
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-4xl mb-6 text-base-content">The Healing Process</h2>
                <p className="text-lg leading-relaxed text-base-content/80">
                    Using simple materials like a compass, candle, and masking tape, participants form a healing circle and walk through the different phases of life: from ancestors to elderhood. This ceremonial practice connects us to the chain of being, exploring loss, identity, and healing in a gentle, safe manner.
                </p>
            </div>
        </div>
    </SectionWrapper>
);
ProcessSection.displayName = "ProcessSection";
export default ProcessSection;