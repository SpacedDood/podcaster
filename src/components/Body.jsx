import { Outlet } from "react-router-dom";


function Body() {
  return (
    <div className="body">
        <Outlet />
    </div>
  )
}

export default Body;
