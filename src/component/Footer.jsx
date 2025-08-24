import { QRCodeSVG } from "qrcode.react";
import { Phone, User } from "lucide-react";

const Footer = ({ siteUrl }) => {
  const contacts = [
    {
      name: "A.R Bena",
      role: "President NACOS",
      phone: "09067061900",
    },
    {
      name: "Musa Muhammad",
      role: "Academic Director",
      phone: "08140387235",
    },
    {
      name: "Mustapha Salihu",
      role: "UG4 Classrep",
      phone: "08161153208",
    },
  ];

  return (
    <footer className="mt-12 py-10 text-center bg-gray-900 border-t border-gray-700">
      
      <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-2xl shadow-lg">
        <QRCodeSVG
          value={siteUrl}
          size={300}
          bgColor="#111827"
          fgColor="#ffffff"
        />
        <p className="text-gray-300 mt-4 text-sm break-all text-center">
          {siteUrl}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-200 mb-4">
          📞 Contact Info
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition transform duration-300"
            >
              <User className="text-blue-400 mb-2" size={28} />
              <p className="text-gray-200 font-medium">{contact.name}</p>
              <p className="text-gray-400 text-sm">{contact.role}</p>
              <div className="flex items-center mt-2 text-blue-400">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">{contact.phone}</span>
              </div>
            </div>
          ))}
        </div>

                <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-100">📧 NACOS Email</h4>
          <a
            href="mailto:nacos@fubk.edu.ng"
            className="text-blue-400 hover:underline text-sm"
          >
            nacos@fubk.edu.ng
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Built with React & Tailwind CSS | Questions? Contact any of the above
      </p>
    </footer>
  );
};

export default Footer;
