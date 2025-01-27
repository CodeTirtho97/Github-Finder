import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-orange-400 mb-6">
        Latest Repositories
      </h2>
      <div className="space-y-4">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
