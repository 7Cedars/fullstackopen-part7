import { useSelector } from 'react-redux'

const UsersOverview = () => {


  
  const blogs = useSelector(state => {

    if (state.blogs) { 
      const currentBlogs = state.blogs
      return currentBlogs;
    } else {
      return [];
    }
  })
  
  const names = blogs.map(blog => blog.user.name)
  const uniqueNames = [...new Set(names)]
  const countValue = names.reduce(function (count, currentValue) {
    return (
        count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
        count
    );
    }, {});

  return (
    <div>
      <h2>Users</h2>
      <table>
            <td> </td>
            <td> <b> # Blogs </b> </td>
        {uniqueNames.map((name) => (
          <tr> 
            <td> {name} </td>
            <td> {countValue[name]}</td>
          </tr> 
        ))}
      </table>
    </div>
  )
};

export default UsersOverview