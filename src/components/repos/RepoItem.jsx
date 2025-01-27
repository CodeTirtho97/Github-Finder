import { FaEye, FaStar, FaInfoCircle, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="bg-purple-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors duration-300">
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h3>
      {description && (
        <p className="text-sm text-gray-200 mb-4">{description}</p>
      )}
      <div className="flex flex-wrap gap-4 justify-between items-center text-gray-300">
        <div className="flex items-center gap-2">
          <FaEye className="text-blue-400" />
          <span className="text-sm font-medium">{watchers_count} Watchers</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium">{stargazers_count} Stars</span>
        </div>
        <div className="flex items-center gap-2">
          <FaInfoCircle className="text-red-400" />
          <span className="text-sm font-medium">{open_issues} Issues</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUtensils className="text-green-400" />
          <span className="text-sm font-medium">{forks} Forks</span>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
