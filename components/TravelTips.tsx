const TravelTipsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Travel Tips and Guides</h2>
        <p className="text-gray-600 mb-8">
          Discover valuable insights to make the most of your travel experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Travel Tip Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Packing Essentials</h3>
            <p className="text-gray-600">
              Learn what to pack for different types of destinations and
              seasons.
            </p>
          </div>
          {/* Travel Tip Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
            <p className="text-gray-600">
              Immerse yourself in the local culture through its delicious
              cuisine.
            </p>
          </div>
          {/* Travel Tip Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Exploring Landmarks</h3>
            <p className="text-gray-600">
              Discover hidden gems and iconic landmarks in your chosen
              destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTipsSection;
