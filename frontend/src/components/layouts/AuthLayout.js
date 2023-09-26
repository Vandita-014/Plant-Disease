import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../static/auth.css";

const validRoutes = ["/auth/sign-up", "/auth/login"];

export function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/auth") {
      navigate("./sign-up", { replace: true });
    } else if (!validRoutes.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
