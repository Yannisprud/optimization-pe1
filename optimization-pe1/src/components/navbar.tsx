import { NavLink } from "react-router-dom";

const NavBar = () => {

  const navItems = [
    { to: "/features", label: "Photos" },
    { to: "/about", label: "Description" },
    { to: "/contact", label: "Contact" },
  ];

//   const handleLogout = () => {
//     logoutService.logout();   
//     navigate("/");     
//   };

  return (
    <nav className="space-x-6">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? "underline text-white"
              : "hover:underline text-white"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
