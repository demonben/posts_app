import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLogin(true);
      setUser(localStorage.getItem("user"));
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault(e.target);
    if (user) {
      setIsLogin(true);
    }
    localStorage.setItem("user", user);
  };

  const logout = () => {
    setUser("");
    setIsLogin(false);
    localStorage.clear();
  };

  return (
    <div className="App">
      {!isLogin ? (
        <LoginPage
          onSubmitLogin={onSubmitLogin}
          handleChange={handleChange}
          user={user}
        />
      ) : (
        <MainPage user={user} logout={logout} />
      )}
    </div>
  );
}

export default App;
//todo line 19, 23, 31 - better to wrap in useCallback hook
//todo line 7, 8 all such data better to store in redux and do not pass in all components as param (line 43, 46)