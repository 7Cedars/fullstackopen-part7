import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => {
    // console.log("state in notification: ", state)

    if (state.notification) {
      const currentNotification = state.notification;
      return currentNotification;
    } else {
      return null;
    }
  });

  return notification ? (
    <div className="absolute inset-x-0 top-0 max-w-[85rem] rounder-md px-4 py-4 sm:px-6 lg:px-8 mx-auto ">
      {notification.className === "success" ? (
        <div className="bg-green-500 rounded-md text-center p-1">
          <p class="mr-2 inline-block text-white">{notification.message}</p>
        </div>
      ) : (
        <div className="bg-red-500 rounded-md text-center p-1">
          <p class="mr-2 inline-block text-white">{notification.message}</p>
        </div>
      )}
    </div>
  ) : null;
};

export default Notification;
