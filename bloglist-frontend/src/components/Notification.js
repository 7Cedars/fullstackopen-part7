import { useSelector } from 'react-redux'

const Notification = () => {
  
  const notification = useSelector(state => {
    // console.log("state in notification: ", state)
    
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
