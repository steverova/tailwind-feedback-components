const HeroPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Tailwind UI Components Library
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A reusable collection of Tailwind CSS components to accelerate your UI development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Modal Component */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-700">Modal</h2>
            <p className="text-gray-600 mb-4">
              A customizable modal to display content in a popup.
            </p>
            <button type='button' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* Notification Component */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-700">Notification</h2>
            <p className="text-gray-600 mb-4">
              Send system notifications with different variants.
            </p>
            <button type='button' className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Learn More
            </button>
          </div>

          {/* Alert/Dialog Component */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-700">Alert/Dialog</h2>
            <p className="text-gray-600 mb-4">
              Use dialog boxes to confirm user actions or display alerts.
            </p>
            <button type='button' className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>

          {/* WrapperContext Component */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-700">WrapperContext</h2>
            <p className="text-gray-600 mb-4">
              Reusable context wrapper to manage global state efficiently.
            </p>
            <button type='button' className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Learn More
            </button>
          </div>

          {/* FileDrag Component */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-700">File Drag</h2>
            <p className="text-gray-600 mb-4">
              Drag and drop files with ease and custom validations.
            </p>
            <button type='button' className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
