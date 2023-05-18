import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSensors } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="sidebar" className="flex flex-col">
      <h1>Room monitoring</h1>
      <Link to="/" className="flex items-center m-2">
        <AiOutlineHome size={20} />
        <span>Dashboard</span>
      </Link>
      <Link to={"/readings"} className="flex items-center m-2">
        <MdOutlineSensors />
        <span>Readings</span>
      </Link>
    </div>
  );
};

export default Sidebar;
