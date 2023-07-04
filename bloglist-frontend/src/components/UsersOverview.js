import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UsersOverview = () => {
  const allUsers = useSelector((state) => {
    if (state.users.all) {
      const all = state.users.all;
      console.log("FULL Redux state at UsersOverview: ", state);
      return all;
    } else {
      return [];
    }
  });

  return (
    <div className="px-4 mx-auto sm:w-1/2 w-full">
      <div className="bg-white rounded-md shadow-lg ps-8 pe-8">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Users</h2>

        <div className="grid grid-cols-12 gap-1 p-1 mb-4">
          <div className="col-span-9"></div>
          <div className="col-span-3 font-semibold justify-self-end">
            # Blogs
          </div>
          {allUsers.map((user) => (
            <div
              className="mb-1 col-span-12 grid grid-cols-12 border border-gray-200 hover:border-blue-600 transition-all duration-300 rounded-md p-2"
              key={user.id}
            >
              <div className="col-span-9">
                {" "}
                {<Link to={`/users/${user.id}`}>{user.name}</Link>}{" "}
              </div>
              <div className="col-span-3 justify-self-end">
                {" "}
                {user.blogs.length}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersOverview;
