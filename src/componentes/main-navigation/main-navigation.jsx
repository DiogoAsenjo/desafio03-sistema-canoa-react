import { Link } from "react-router-dom";
import "./main-navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const MainNavigation = () => {
  const navigate = useNavigate();

  return (
    <header className="main-navigation">
      <ul>
        <div className="links">
          <li>
            <Link to="/user-workouts">My Workouts</Link>
          </li>
          <li>
            <Link to="/all-workouts">All Workouts</Link>
          </li>
        </div>
        <li>
          <button
            onClick={() => {
              sessionStorage.removeItem("token");
              navigate("/");
            }}
            className="logout"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </li>
      </ul>
    </header>
  );
};
