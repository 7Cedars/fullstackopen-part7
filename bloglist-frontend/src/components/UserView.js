import { useMatch } from "react-router-dom";
import { useSelector } from "react-redux";

const UserView = () => {
  const allUsers = useSelector((state) => {
    if (state.users.all) {
      const all = state.users.all;
      // console.log("FULL Redux state at USERVIEW: ", state)
      return all;
    } else {
      return null;
    }
  });

  const match = useMatch("/users/:id");

  if (allUsers) {
    const user = match
      ? allUsers.find((user) => user.id === String(match.params.id))
      : null;

    return (
      <div className="px-4 mx-auto sm:w-1/2 w-full">
        <div className="bg-white rounded-md shadow-lg ps-8 pe-8 pb-4">
          <h2 className="mb-2 text-xl font-bold text-gray-800">
            {" "}
            {user.name}{" "}
          </h2>
          <div className="border rounder-md p-2">
            <h3 className="text-l font-bold text-gray-800"> Added Blogs </h3>
            <ul>
              {user.blogs.map((blog) => (
                <li className="mt-1 ms-1 text-gray-600"> {blog.title} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserView;
