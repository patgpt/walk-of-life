import React from 'react';

export default function ProcessPage() {
    return (
        <div className="px-4 py-8 bg-base-200">
            <main className="max-w-6xl mx-auto text-base-content">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    <div className="card bg-base-100 shadow-xl md:col-span-2 lg:col-span-3">
                        <div className="card-body text-content">
                            <h1 className="card-title text-4xl">The Walk of Life</h1>
                            <p className="text-lg mb-6">
                                The Walk of Life is a community-driven healing tool that helps individuals connect with their ancestors,
                                understand their past, and share their stories in a supportive environment. Inspired by ancient traditions
                                and modern approaches, The Walk of Life allows us to explore our lives through the symbolism of the healing
                                circle—a journey from ancestors to elders.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl lg:col-span-2">
                        <div className="card-body text-content">
                            <h2 className="card-title text-3xl">The Walk of Life as a Therapeutic Tool</h2>
                            <p className="mb-6">
                                The Walk of Life is more than just a symbolic journey; it is a therapeutic experience that encourages
                                self-reflection, community connection, and emotional healing.
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li className="mb-2"><strong>Connect with their heritage</strong>: By understanding the experiences of ancestors,
                                    participants gain a deeper appreciation for the challenges and triumphs that have shaped their family and personal history.</li>
                                <li className="mb-2"><strong>Process loss and grief</strong>: The Walk of Life offers a safe space to acknowledge
                                    and process the losses experienced throughout one's life, providing a pathway to emotional recovery.</li>
                                <li className="mb-2"><strong>Build a support network</strong>: Participants share their stories with others in a
                                    supportive group setting, fostering a sense of belonging and mutual understanding.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl row-span-2">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Join Our Workshops</h2>
                            <p className="mb-6">
                                We invite you to participate in our regular Walk of Life workshops. These sessions are held in a variety of
                                settings—community centers, outdoor spaces, and online—to provide everyone an opportunity to join, regardless of location.
                            </p>
                            <div className="card-actions justify-end mt-6">
                                <button className="btn btn-primary btn-lg">
                                    Register for a Workshop
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl md:col-span-2">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">The Healing Process</h2>
                            <p className="mb-6">
                                The healing process in the Walk of Life involves creating a sacred space, reflecting on the different stages of life,
                                and participating in community-led discussions. Each stage of the healing circle—Ancestors, Parents, Pre-Natal, Birth,
                                Child, Teen, Adult, Elder—represents a unique phase of life, allowing participants to explore their experiences, release
                                past traumas, and reconnect with themselves and others.
                            </p>
                            <p className="mb-6">
                                Using simple materials like a compass, candle, bell, masking tape, and a walking stick or flute, participants form a
                                healing circle and walk through these different phases, guided by experienced facilitators.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
