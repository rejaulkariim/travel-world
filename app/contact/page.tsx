"use client";

import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";

const ContactPage = () => {
  return (
    <main className="section-padding">
      <div className="wrapper">
        <SectionHeader
          headerInfo={{
            title: "Get in Touch",
            subtitle: "We're Here to Assist You.",
            description:
              "Contact us for all your travel needs! Whether you have questions, need assistance, or just want to say hello, we're here for you. Start your journey with a message to our dedicated team!",
          }}
        />
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
