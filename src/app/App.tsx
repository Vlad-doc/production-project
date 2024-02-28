import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import './styles/styles.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>
        Главная
      </Link>
      <Link to='/about'>
        О сайте
      </Link>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>
        Сменить тему
      </button>
    </div>
  )
};

export default App;