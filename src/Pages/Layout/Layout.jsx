import { Outlet } from "react-router-dom"
import Sidebar from "../Side-bar/Sidebar.jsx"

export default function Layout(){
    return (
        <>
            <Sidebar />
            <main>                
                <Outlet />
            </main>
        </>
    )
};