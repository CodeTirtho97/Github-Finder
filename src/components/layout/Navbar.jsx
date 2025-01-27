import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-8 shadow-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <FaGithub className="text-4xl mr-3" />
          <Link
            to="/"
            className="text-3xl font-bold tracking-wide hover:text-gray-200 transition-colors duration-300"
          >
            {title}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-lg font-medium hover:bg-white hover:text-indigo-600 px-4 py-2 rounded transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:bg-white hover:text-indigo-600 px-4 py-2 rounded transition-all duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
