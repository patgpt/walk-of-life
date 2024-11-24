import { ContactForm } from "@/components/forms/ContactForm"
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import Link from "next/link";


export const Page = () => {
    return (
        <div className="mx-auto px-4 py-8 text-base-content bg-base-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main heading card */}
                    <div className="card bg-base-100 shadow-xl md:col-span-2 hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h1 className="card-title text-4xl">Contact Us</h1>
                            <p>We'd love to hear from you. Whether you have questions about The Walk of Life, want to participate in our workshops, or are interested in bringing this healing journey to your community.</p>
                        </div>
                    </div>

                    {/* Contact Form card */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h2 className="card-title text-3xl mb-6">Send us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Social Connection card */}
                    <div className="card bg-primary text-primary-content shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h2 className="card-title text-3xl mb-6">Connect With Us</h2>
                            <p className="mb-8">Follow us on social media to stay updated with our latest events, workshops, and community stories. Join our growing community of healers and supporters.</p>

                            <div className="mt-auto">
                                <h3 className="text-xl mb-4">Find us on social media:</h3>
                                <SocialIcons />
                            </div>

                            <div className="mt-6">
                                <Link href="/community" className="btn btn-secondary w-full text-lg">Join the Circle</Link>

                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl mb-4">Office Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM MST</p>
                                <p>Weekend workshops by appointment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

Page.displayName = "Contact Page";
export default Page;