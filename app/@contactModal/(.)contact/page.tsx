"use client";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ContactModal = () => {
  const router = useRouter();
  return (
    <div className="fixed backdrop-blur-md shadow-xl inset-0 z-50">
      <div className="flex items-center h-full max-w-2xl mx-auto">
        <div className="relative bg-background w-full rounded-2xl">
          <div className="absolute top-4 right-4">
            <Button variant="ghost" onClick={() => router.back()}>
              X
            </Button>
          </div>

          <div className="p-10">
            <p>Get in touch</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
