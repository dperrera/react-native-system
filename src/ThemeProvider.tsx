import React, { useContext, useState } from 'react'
import { theme as defaultTheme } from './theme'

const ThemeContext = React.createContext({
  theme: defaultTheme,
  mode: defaultTheme.modes.light,
  setMode: (value: 'light' | 'dark') => {
    console.log(value)
  },
})

const ThemeProvider: React.FC<{
  theme?: typeof defaultTheme
}> = ({ children, theme }) => {
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light')
  const activeTheme = theme || defaultTheme
  const activeMode = activeTheme.modes[currentMode]

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        mode: activeMode,
        setMode: setCurrentMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, ThemeContext, useTheme }
