import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

import "./styles/styles.scss";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
