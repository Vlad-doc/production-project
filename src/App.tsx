import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { MainAsyncPage } from './pages/MainPage/MainPage.async'
import { AboutAsyncPage } from './pages/AboutPage/AboutPage.async'

import './styles.scss'

const App = () => {
  return (
    <div className='app'>
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
    </div>
  )
}

export default App