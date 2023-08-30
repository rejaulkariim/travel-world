"use client";
const ContactForm = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg resize-none focus:ring focus:ring-blue-300 focus:border-blue-300"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
