import { useNavigate } from 'react-router-dom';

// Datos en formato JSON
const componentsData = [
  {
    title: 'Modal',
    description: 'A customizable modal to display content in a popup.',
    route: 'pages/modal',
    isEnabled: false, 
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    title: 'Notification',
    description: 'Send notifications with different variants.',
    route: 'pages/notification',
    isEnabled: true, 
    buttonColor: 'bg-green-500 hover:bg-green-600',
  },
  {
    title: 'Alert/Dialog',
    description: 'Use dialog boxes to confirm user actions or display alerts.',
    route: 'pages/alert-dialog',
    isEnabled: false, 
    buttonColor: 'bg-red-500 hover:bg-red-600',
  },
  {
    title: 'WrapperContext',
    description: 'Reusable context wrapper to manage global state efficiently.',
    route: 'pages/wrapper-context',
    isEnabled: false, 
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
  },
  {
    title: 'File Drag',
    description: 'Drag and drop files with ease and custom validations.',
    route: 'pages/file-drag',
    isEnabled: false, 
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
];


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

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-gradient-to-b from-white to-green-200 min-h-screen flex flex-col items-center justify-center px-6 py-12 lg:py-20"
    >
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Tailwind UI Components
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          A reusable collection of Tailwind CSS components
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {componentsData.map((component) => (
            <CardComponent
              key={component.route}
              title={component.title}
              description={component.description}
              onClick={() => navigate(component.route)}
              isEnabled={component.isEnabled}
              buttonColor={component.buttonColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
