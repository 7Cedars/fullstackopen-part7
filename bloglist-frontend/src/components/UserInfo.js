import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.users.loggedIn);
  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
      <div className="font-medium text-white/[.8]">
        Logged in as: {user.name}
        <button
          type="submit"
          onClick={handleLogout}
          className="font-medium text-white/[.8] px-5 hover:text-white sm:py-6"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
