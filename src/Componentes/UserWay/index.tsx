import { useEffect } from "react";

const UserWayWidget = (): null => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://cdn.userway.org/widget.js");
    script.setAttribute("data-language", "pt");
    script.setAttribute("data-color", "#007EC2");
    script.setAttribute("data-size", "small");
    script.setAttribute("data-position", "1");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default UserWayWidget;
