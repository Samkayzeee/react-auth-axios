import { Link } from "react-router-dom";


const UserLayout = ({children}) => {
    return (
       <main className="d-flex" style={{height: "100vh"}}>
            <ul className="nav flex-column bg-primary p-2 h-100" style={{width: "300px"}}>
                <li className="nav-item">
                    <Link to={"/admin/dashboard"} className="nav-link text-light">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/admin/users"} className="nav-link text-light">Users</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/admin/settings"} className="nav-link text-light">Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/"} className="nav-link text-danger">Logout</Link>
                </li>   
            </ul>
            <div className="w-100 p-3">
                {children}
            </div>
            {/* footer */}
       </main>
    )
}

export default UserLayout;