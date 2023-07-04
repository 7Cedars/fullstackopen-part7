import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Notification from "./components/Notification";
import BlogList from "./components/BlogList";
import UsersOverview from "./components/UsersOverview";
import UserView from "./components/UserView";
import BlogView from "./components/BlogView";
import Header from "./components/Header";

import blogService from "./services/blogs";
import { initialiseBlogs } from "./reducers/blogsReducer";
import { loggedInUser, fetchAllUsers } from "./reducers/usersReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialiseBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(initialiseBlogs());
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    console.log("loggedUserJSON CALLED:", loggedUserJSON);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log("user: ", user);
      blogService.setToken(user.token);
      dispatch(loggedInUser(user));
    }
  }, []);

  return (
    <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Router>
        <Notification />
        <Header />
        <div class="max-w-2xl mx-auto text-center p-4 mb-6 lg:mb-8">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Blogs App
          </h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            An example app made for the Fullstack Open course.
          </p>
        </div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/users" element={<UsersOverview />} />
          <Route path="/users/:id" element={<UserView />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
