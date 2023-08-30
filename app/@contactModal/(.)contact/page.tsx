"use client";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";

const ContactModal = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-40">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-muted w-full h-fit py-20 px=2 rounded-lg">
          <div className="absolute top-4 right-4">
            <button onClick={() => router.back()}>X</button>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
