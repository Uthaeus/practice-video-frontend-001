import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";
import MainFooter from "../footers/main-footer";

function MainLayout() {
    return (
        <div className="main-layout">
            <MainNavigation />
            <Outlet />
            <MainFooter />
        </div>
    );
}

export default MainLayout;