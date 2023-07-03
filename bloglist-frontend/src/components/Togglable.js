import { useState, forwardRef, useImperativeHandle } from "react";

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div className="flex justify-center">
      <div className="lg:w-1/3 sm:w-2/3 w-full" style={hideWhenVisible}>
        <button 
          onClick={toggleVisibility}
          className="w-full py-2 my-5 px-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all text-sm"
          >{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="px-4 mx-auto sm:w-2/3 w-full mb-6">
        <div className="bg-white rounded-md shadow-lg ps-8 pe-8">
          {props.children}
          <div className="flex justify-end">
            <button 
              className="py-2 px-3 my-3 w-1/3 relative bottom-0 left-0  gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              onClick={toggleVisibility}>
                cancel  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Togglable.displayName = "Togglable";

export default Togglable;

// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddeeeeeeeeeeeeeee

