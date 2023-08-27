const CallToActionSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Ready to Embark on Your Next Adventure?
        </h2>
        <p className="text-white text-lg mb-6">
          Plan your dream vacation with us today and create unforgettable
          memories.
        </p>
        <button className="bg-white text-indigo-500 py-2 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-500 hover:text-white">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;
