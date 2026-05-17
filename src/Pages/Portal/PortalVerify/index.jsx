import { useEffect } from "react";
import { useNavigate } from "react-router";

function PortalVerify() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/portal/login", { replace: true });
  }, []);

  return null;
}

export default PortalVerify;
