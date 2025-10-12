import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import ProjectPage from './Pages/ProjectPage'
import ThemePage from './Pages/ThemePage'
import { useThemeStore } from './lib/useTheme'

function App() {
  const {theme} = useThemeStore();
  

  return (
    <div className='relative h-full w-full ' data-theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path = '/project/:name' element={<ProjectPage/>}/>


      </Routes>

    </div>
  )
}

export default App
