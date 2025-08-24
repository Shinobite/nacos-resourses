const ResourceSection = ({ title, resources }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">{title}</h2>
      <ul className="space-y-4">
        {resources.map((item, index) => (
          <li
            key={index}
            className="bg-gray-800 border-2 border-gray-700 rounded-xl p-4 hover:border-blue-400 transition-colors duration-300 shadow-md hover:shadow-blue-500/40"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 font-semibold text-lg"
            >
              {item.name}
            </a>
            <p className="text-gray-400 mt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceSection;
