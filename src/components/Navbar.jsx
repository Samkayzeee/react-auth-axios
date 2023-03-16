import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar  p-3">
            <div>
                <h1>Logo</h1>
            </div>

            <ul className="nav">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">App </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login/1"} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/signup"} className="nav-link">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">Admin</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar