import { useLocation, NavLink } from "react-router-dom";

export function NavLinkQueryString({ to, ...props }) {
  let location = useLocation();
  return <NavLink
    to={to + location.search}
    style={({ isActive }) => {
      return {
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : "",
      };
    }}
    {...props}
  />;
}
