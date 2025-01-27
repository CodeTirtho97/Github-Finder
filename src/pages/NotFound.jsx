import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center px-8 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-extrabold text-red-500 mb-6">404</h1>
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-6">
          Sorry, the page you are looking for does not exist. Please check the URL or return to the home page.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md"
        >
          <FaHome className="mr-2" />
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
