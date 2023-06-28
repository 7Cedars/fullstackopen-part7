import { useSelector } from 'react-redux'

const Notification = () => {
  
  const notification = useSelector(state => {
    console.log("state in notification: ", state)
    
    if (state.notification) { 
      const currentNotification = state.notification
      return currentNotification;
    } else {
      return null;
    }
  })

  return (
    notification ? 
    <div className={notification.className}>
      {notification.message}
  </div> : null 
  )
};

export default Notification ;


// const Success = () => {
//   const message = useSelector(state => {
    
//     if (state.notification) { 
//       return <div className="success">{message}</div>;
//     } else {
//       return null;
//     }
//   })
// };

// const Error = () => {
//   const message = useSelector(state => {
    
//     if (state.notification) { 
//       return <div className="error">{message}</div>;
//     } else {
//       return null;
//     }
//   })
// };

// export default { Success, Error };


// import { useSelector } from 'react-redux'

// const Notification = () => {
//   const notification = useSelector(state => {
    
//       if (state.notification) { 
//         const currentNotification = state.notification
//         return currentNotification
//       }

//     })

//   const style = {
//     border: 'solid',
//     padding: 10,
//     borderWidth: 1
//   }
//   return (
//     <div style={style}>
//       {notification}
//     </div>
//   )
// }

// export default Notification

