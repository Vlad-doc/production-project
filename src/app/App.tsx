import { Suspense } from "react";
import "shared/config/i18n/i18n";

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/styles.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
};

export default App;