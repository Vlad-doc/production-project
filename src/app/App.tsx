import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

import "./styles/styles.scss";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>ChangeTheme</button>
        </div>
    );
};

export default App;
