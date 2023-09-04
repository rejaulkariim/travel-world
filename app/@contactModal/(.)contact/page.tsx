"use client";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";

const ContactModal = () => {
  const router = useRouter();
  return (
    <div className="fixed backdrop-blur-md shadow-xl inset-0 z-50">
      <div className="flex items-center h-full p-2 max-w-lg mx-auto">
        <div className="relative bg-card w-full h-fit py-12 px-2 rounded-lg">
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
