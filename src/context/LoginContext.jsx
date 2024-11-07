import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const hardcodedUser = {
    name: "Hoirul Anam",
    NIM: "2312010003",
    username: "Namz437",
    password: "Password",
  };

  const login = (username, password) => {
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      setUser({
        name: hardcodedUser.name,
        NIM: hardcodedUser.NIM,
      });
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;