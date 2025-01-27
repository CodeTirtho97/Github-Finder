import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="about-container bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center px-8 py-12">
      <div className="max-w-3xl text-center">
        <div className="flex items-center justify-center mb-6">
          <FaGithub className="text-6xl text-blue-400" />
        </div>
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6">About GitHub Finder</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
        GitHub Finder is a simple React Application that allows users to search for GitHub Profiles and View detailed information such as Repositories, Followers, and more. This app was built using the GitHub API and modern React features.
        </p>
        <p className="text-md text-gray-400">
          <strong>Version:</strong> 1.1.2
        </p>
      </div>
    </div>
  );
}

export default About;
