import { useContext, useState } from "react";
import { ContentCard, Header, Searchbar } from "./components";
import { UserData, Theme } from "./types";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { theme } = useContext( ThemeContext );
  const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  return (
    <div className={`app ${currentTheme}`}>
      <Header />
      <Searchbar
        setErrorMessage={setErrorMessage}
        setUserData={setUserData}
      />
      <ContentCard errorMessage={errorMessage} userData={userData} />
    </div>
  );
}

export default App;
