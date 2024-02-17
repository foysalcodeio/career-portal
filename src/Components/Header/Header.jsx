import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/jobs">Jobs</NavLink></li>
         <li><NavLink to="/applied">Applied-Jobs</NavLink></li>
         <li><NavLink to="/statistic">Statistic</NavLink></li>
         <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-cyan-50 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow rounded-box w-52">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Career Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex:md menu-dropdown menu menu-horizontal px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none bg-slate-800 text-white">Apply Now</a>
        </div>
      </div>
    );
};

export default Header;