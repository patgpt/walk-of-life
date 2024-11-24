// healing-circle.tsx

const HealingCirclePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-base-100 px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-base-content mb-6">
          The Walk of Life
        </h1>

        <section className="prose prose-lg">
          <p className="text-base-content">
            The Walk of Life is a community-driven healing tool that helps individuals connect with their ancestors,
            understand their past, and share their stories in a supportive environment. Inspired by ancient traditions
            and modern approaches, The Walk of Life allows us to explore our lives through the symbolism of the
            healing circle—a journey from ancestors to elders.
          </p>
        </section>

        <section className="prose prose-lg">
          <h2 className="text-2xl font-semibold mb-4">The Walk of Life as a Therapeutic Tool</h2>
          <p className="text-base-content">
            The Walk of Life is more than just a symbolic journey; it is a therapeutic experience that encourages
            self-reflection, community connection, and emotional healing.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Connect with your heritage</li>
            <li>Process loss and grief</li>
            <li>Build a support network</li>
          </ul>
        </section>

        <section className="prose prose-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Our Workshops</h2>
          <p className="text-base-content">
            We invite you to participate in our regular Walk of Life workshops. These sessions are held in a variety
            of settings—community centers, outdoor spaces, and online—to provide everyone an opportunity to join,
            regardless of location.
          </p>
        </section>

        <div className="bg-primary/10 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-semibold mb-4">Weekly Sessions Available</h3>
          <p className="mb-6">Join our supportive community in our weekly Walk of Life sessions.
            Experience the healing power of shared stories and ancestral connections.</p>
          <button className="btn btn-primary">
            Register for Next Session
          </button>
        </div>
      </div>
    </div>
  )
}

HealingCirclePage.displayName = "HealingCirclePage";
export default HealingCirclePage;