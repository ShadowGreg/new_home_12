import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex mx-5 h-[50px] bg-blue-950 items-center text-amber-50">
            <div className="flex-auto mx-5">Some Navigation</div>
            <div className="mx-5 select-auto">
                <Link to="/login">Login</Link>
            </div>
            <div className="mx-5 select-auto">
                <Link to="/registration">Registration</Link>
            </div>
        </nav>
    )
}