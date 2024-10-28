const CardComponent = ({ title, description, onClick, isEnabled, buttonColor }) => {
  return (
    <div
      className={`bg-white p-6 shadow-lg rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
        isEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'
      }`}
      style={{ transitionProperty: 'transform, opacity, box-shadow' }}
    >
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 rounded text-white transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg ${
          isEnabled ? buttonColor : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Learn More
      </button>
    </div>
  );
};

export default CardComponent;