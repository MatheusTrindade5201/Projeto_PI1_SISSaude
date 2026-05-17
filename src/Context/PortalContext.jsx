import { createContext, useContext, useLayoutEffect, useState } from "react";

const PORTAL_SESSION_KEY = "cc_portal_session";
const PORTAL_EMAIL_KEY = "cc_portal_email";

export const PortalContext = createContext({});

const PortalProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [developerEmail, setDeveloperEmail] = useState(null);

  const _isTokenValid = (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };

  const signIn = (sessionToken, email) => {
    localStorage.setItem(PORTAL_SESSION_KEY, sessionToken);
    localStorage.setItem(PORTAL_EMAIL_KEY, email);
    setDeveloperEmail(email);
    setIsAuthenticated(true);
  };

  const signOut = () => {
    localStorage.removeItem(PORTAL_SESSION_KEY);
    localStorage.removeItem(PORTAL_EMAIL_KEY);
    setDeveloperEmail(null);
    setIsAuthenticated(false);
  };

  useLayoutEffect(() => {
    const token = localStorage.getItem(PORTAL_SESSION_KEY);
    const email = localStorage.getItem(PORTAL_EMAIL_KEY);
    if (token && email && _isTokenValid(token)) {
      setDeveloperEmail(email);
      setIsAuthenticated(true);
    } else if (token) {
      signOut();
    }
  }, []);

  return (
    <PortalContext.Provider value={{ isAuthenticated, developerEmail, signIn, signOut }}>
      {children}
    </PortalContext.Provider>
  );
};

function usePortal() {
  return useContext(PortalContext);
}

export { PortalProvider, usePortal };
