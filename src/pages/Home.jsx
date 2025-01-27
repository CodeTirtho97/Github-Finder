import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div className="home-container bg-gray-900 text-gray-100 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-400">
          GitHub Finder
        </h1>
        <p className="text-lg font-medium text-gray-400">
          Search for GitHub Users and View their Profiles and Repositories.
        </p>
      </header>
      <div className="search-section mb-12">
        <UserSearch />
      </div>
      <div className="results-section">
        <UserResults />
      </div>
    </div>
  );
}

export default Home;
