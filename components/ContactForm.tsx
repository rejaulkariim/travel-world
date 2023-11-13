"use client";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "./ui/button";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (formData.name && formData.email && formData.message)
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
          {
            from_name: formData.name,
            to_name: "Miah Travel",
            from_email: formData.email,
            to_email: "miahtravels8@gmail.com",
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
        );
      setLoading(false);
      toast({
        title: "Scheduled: Catch up",
        description: "Your message has been sent.",
        action: <ToastAction altText="Goto schedule to undo">Okay</ToastAction>,
      });
      setFormData(initialFormData);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast({
        description: "Ahh, Something went wrong.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-foreground font-medium mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-300"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-foreground font-medium mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-300"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-foreground font-medium mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full py-2 h-56 px-3 border border-gray-300 rounded-lg resize-none focus:ring focus:ring-blue-300 focus:border-blue-300"
          placeholder="Your Message"
        ></textarea>
      </div>
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        size="lg"
        disabled={!formData.name || !formData.email || !formData.message}
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
