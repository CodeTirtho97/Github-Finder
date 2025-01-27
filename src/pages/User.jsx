import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import { getUserAndRepos } from "../context/github/GithubActions";

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="user-container bg-gray-900 text-gray-100 min-h-screen px-6 py-8">
      <div className="w-full mx-auto lg:w-9/12">
        <div className="mb-4">
          <Link
            to="/"
            className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
          >
            Back to Search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={avatar_url} alt="" className="rounded-lg shadow-lg w-36 mb-4" />
            <h2 className="text-xl font-bold text-gray-100 text-center mb-2">{name}</h2>
            <p className="badge bg-green-500 text-white py-1 px-3 rounded-full mt-2">{type}</p>
            {hireable && (
              <p className="badge bg-blue-500 text-white py-1 px-3 rounded-full mt-2">
                Hireable
              </p>
            )}
          </div>
          <div className="col-span-2 bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-100 mb-3">{name}</h1>
              <p className="text-sm text-gray-300 mb-4">{bio}</p>
            </div>
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md self-start"
            >
              Visit GitHub Profile
            </a>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {location && (
                <div className="text-gray-400">
                  <strong>Location:</strong> {location}
                </div>
              )}
              {blog && (
                <div className="text-gray-400">
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${blog}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className="text-gray-400">
                  <strong>Twitter:</strong>{" "}
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    @{twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="stats bg-gray-800 p-4 rounded-lg shadow-md mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat text-center">
            <FaUsers className="text-5xl text-gray-400 mb-2" />
            <p className="text-lg text-gray-400">Followers</p>
            <p className="text-lg font-bold text-gray-100">{followers}</p>
          </div>
          <div className="stat text-center">
            <FaUserFriends className="text-5xl text-gray-400 mb-2" />
            <p className="text-lg text-gray-400">Following</p>
            <p className="text-lg font-bold text-gray-100">{following}</p>
          </div>
          <div className="stat text-center">
            <FaCodepen className="text-5xl text-gray-400 mb-2" />
            <p className="text-lg text-gray-400">Public Repos</p>
            <p className="text-lg font-bold text-gray-100">{public_repos}</p>
          </div>
          <div className="stat text-center">
            <FaStore className="text-5xl text-gray-400 mb-2" />
            <p className="text-lg text-gray-400">Public Gists</p>
            <p className="text-lg font-bold text-gray-100">{public_gists}</p>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </div>
  );
}

export default User;
