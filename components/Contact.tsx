"use client";

import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="mt-16 py-16 text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="leading-relaxed">
              Have questions or ready to book your next adventure? Get in touch
              with us!
            </p>
            <p className="mt-4 leading-relaxed">
              Our team of travel experts is here to assist you with any
              inquiries you may have. Feel free to reach out through the
              following channels:
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Phone: [Your Phone Number]</li>
              <li>Email: [Your Email Address]</li>
              <li>
                Visit Us: 3, Jln PJS 8/9, Bandar Sunway, Petaling Jaya, Malaysia
              </li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
