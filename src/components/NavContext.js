// NavContext.js
import { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState("home"); // Set the default active item to 'home'

  return (
    <NavContext.Provider value={{ activeNavItem, setActiveNavItem }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
