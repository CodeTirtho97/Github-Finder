import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-gray-800 text-gray-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="profile pic" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title text-gray-100">{login}</h2>
          <Link
            className="text-blue-400 hover:underline"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
