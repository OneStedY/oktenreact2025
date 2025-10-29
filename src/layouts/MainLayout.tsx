import {Outlet} from "react-router";
import {MenuConponent} from "../components/menu/MenuComponent.tsx";


export const MainLayout = () => {
    return <div>
        <MenuConponent/>
        <Outlet/>
    </div>
};