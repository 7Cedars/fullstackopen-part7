import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";

const Menu = () => {
  const menuStyle = {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 5,
    background: "lightgrey",
  };

  const user = useSelector((state) => {
    if (state.users) {
      const currentUser = state.users.loggedIn;
      return currentUser;
    } else {
      return null;
    }
  });

  return (
    <div className="flex items-center justify-between w-full bg-blue-600 text-sm py-3 sm:py-0 rounded-md">
      <div className="justify-self-start flex flex-col gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
        <Link
          to="/"
          className="font-medium text-white/[.8] hover:text-white sm:py-6"
        >
          {" "}
          blogs{" "}
        </Link>
        <Link
          to="/users"
          className="font-medium text-white/[.8] hover:text-white sm:py-6"
        >
          {" "}
          users{" "}
        </Link>
      </div>
      <div className="justify-self-end">
        {user ? <UserInfo /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Menu;
