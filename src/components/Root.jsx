import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div className="ml-16 mr-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;