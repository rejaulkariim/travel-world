"use client";

const ContactForm = () => {
  return (
    <div className="px-2 md:px-4">
      <h2 className="text-xl font-bold">Contact us</h2>
      <p className="text-xs md:text-sm text-foreground">
        We appreciate your visit to our website. Your feedback and inquiries are
        important to us. Please use the information below to get in touch.
      </p>
      <form className="mt-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-xs text-foreground font-medium mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full py-2 px-3 border border-muted rounded-lg text-sm"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xs text-foreground font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-2 px-3 border border-muted rounded-lg text-sm"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-xs text-foreground font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full py-2 px-3 border border-muted rounded-lg resize-none text-sm"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-foreground py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
