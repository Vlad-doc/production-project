import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { MainAsyncPage } from './pages/MainPage/MainPage.async';
import { AboutAsyncPage } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

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
          <Route path='/' element={<MainAsyncPage/>}/>
          <Route path='/about' element={<AboutAsyncPage/>}/>
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>
        Сменить тему
      </button>
    </div>
  )
};

export default App;