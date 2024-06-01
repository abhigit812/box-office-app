import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import Apptitle from "./AppTitle";

const MainLayout = () => {
    return(
        <div>
            <Navs/>
            <Apptitle/>
            <Outlet/>
        </div>
    )
};

export default MainLayout;