"use client";

const ContactSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Have questions or ready to book your next adventure? Get in touch
              with us!
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our team of travel experts is here to assist you with any
              inquiries you may have. Feel free to reach out through the
              following channels:
            </p>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Phone: [Your Phone Number]</li>
              <li>Email: [Your Email Address]</li>
              <li>Visit Us: [Your Address]</li>
            </ul>
          </div>
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
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
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
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
                  className="block text-gray-700 font-medium mb-1"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
