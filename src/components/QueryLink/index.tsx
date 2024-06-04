import { NavLink, useLocation } from "react-router-dom";

export default function QueryLink({ to, ...props }: any) {
    const location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}