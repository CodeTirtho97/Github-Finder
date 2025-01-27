import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });

      setText("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="flex">
          <input
            type="text"
            className="flex-grow bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-l-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search GitHub Users..."
            value={text}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-r-lg"
          >
            Search
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={() => dispatch({ type: "CLEAR_USERS" })}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg"
        >
          Clear Results
        </button>
      )}
    </div>
  );
}

export default UserSearch;
