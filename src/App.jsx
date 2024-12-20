import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  // Create a same action which is describe in theme.js

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Actual Theme Change
  useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) // []= ref.


  return (
    // Need to pass the value in themeProvider
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn /> {/* Child */}
            </div>

            <div className="w-full max-w-sm mx-auto">
              
              <Card />

            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
