
import { useNavigate } from 'react-router-dom';

// Datos en formato JSON
const componentsData = [
  {
    title: 'Modal',
    description: 'A customizable modal to display content in a popup.',
    route: 'pages/modal',
    isEnabled: false, // Modal disabled
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    title: 'Notification',
    description: 'Send notifications with different variants.',
    route: 'pages/notification',
    isEnabled: true, // Notification enabled
    buttonColor: 'bg-green-500 hover:bg-green-600',
  },
  {
    title: 'Alert/Dialog',
    description: 'Use dialog boxes to confirm user actions or display alerts.',
    route: 'pages/alert-dialog',
    isEnabled: false, // Alert/Dialog disabled
    buttonColor: 'bg-red-500 hover:bg-red-600',
  },
  {
    title: 'WrapperContext',
    description: 'Reusable context wrapper to manage global state efficiently.',
    route: 'pages/wrapper-context',
    isEnabled: false, // WrapperContext disabled
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
  },
  {
    title: 'File Drag',
    description: 'Drag and drop files with ease and custom validations.',
    route: 'pages/file-drag',
    isEnabled: false, // File Drag disabled
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
];

// Componente reutilizable
const CardComponent = ({ title, description, onClick, isEnabled, buttonColor }) => {
  return (
    <div
      className={`bg-white p-6 shadow-lg rounded-lg transition-opacity duration-300 ${
        isEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'
      }`}
    >
      <h2 className="text-xl font-bold text-gray-700">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 rounded text-white ${isEnabled ? buttonColor : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Learn More
      </button>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-12 lg:py-0">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Tailwind UI Components
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A reusable collection of Tailwind CSS components
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentsData.map((component, index) => (
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
