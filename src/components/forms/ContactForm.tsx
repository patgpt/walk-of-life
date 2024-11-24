
"use client"
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormValues = {
    name: string;
    email: string;
    message: string;
}
/**
 * ContactForm component handles the rendering and submission of a contact form.
 * 
 * This component uses the `react-hook-form` library to manage form state and validation.
 * It includes fields for the user's name, email, and message, and displays validation
 * errors if the fields are not filled out correctly.
 * 
 * The form submission is handled asynchronously, with a loading state displayed while
 * the form is being submitted. If the submission fails, an error message is displayed.
 * 
 * @component
 * @example
 * return (
 *   <ContactForm />
 * )
 * 
 * @typedef {Object} FormValues
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} message - The message from the user.
 * 
 * @returns {JSX.Element} The rendered contact form component.
 */
export const ContactForm = (): JSX.Element => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Replace with your API call
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            reset(); // Reset form after successful submission
        } catch (error) {
            setSubmitError('Failed to send message. Please try again.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-control gap-6">
            {submitError && (
                <div className="alert alert-error">{submitError}</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Your Name"
                        className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <label className="label">
                            <span className="label-text-alt text-error">{errors.name.message}</span>
                        </label>
                    )}
                </div>
                <div className="form-control">
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        type="email"
                        placeholder="Your Email"
                        className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <label className="label">
                            <span className="label-text-alt text-error">{errors.email.message}</span>
                        </label>
                    )}
                </div>
            </div>
            <div className="form-control">
                <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    placeholder="Your Message"
                    className={`textarea textarea-bordered w-full ${errors.message ? 'textarea-error' : ''}`}
                    disabled={isSubmitting}
                />
                {errors.message && (
                    <label className="label">
                        <span className="label-text-alt text-error">{errors.message.message}</span>
                    </label>
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-lg w-full md:w-auto md:self-end"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}
