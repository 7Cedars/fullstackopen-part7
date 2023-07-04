import { useState } from "react";
import { likeBlog, removeBlogs } from "../reducers/blogsReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  console.log("BLOG: ", blog);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      {blog.name}
      <Link to={`/blogs/${blog.id}`}>{blog.name}</Link>
    </div>
  );
};

export default Blog;
