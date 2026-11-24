import { NavLink } from "react-router-dom";

const NavBar = () => {

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/library", label: "Library" },
  ];

//   const handleLogout = () => {
//     logoutService.logout();   
//     navigate("/");     
//   };

  return (
    <nav aria-label="Main navigation" className="flex gap-6">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? "text-stone-900 underline underline-offset-4"
              : "text-stone-600 hover:text-stone-900"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
