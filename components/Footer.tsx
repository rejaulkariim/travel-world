"use client";

const Footer = () => {
  return (
    <footer className="text-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a team of avid travelers who are passionate about curating
              unforgettable experiences for our clients. Explore the world with
              us and create memories that last a lifetime.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Phone: [Your Phone Number]
              <br />
              Email: [Your Email Address]
            </p>
          </div>
          <div className="md:text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Mia Travel World. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
