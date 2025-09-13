// useColorMode.ts
import { useCallback, useEffect, useState } from 'react'

type Mode = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getInitialMode(): Mode {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem(STORAGE_KEY) as Mode | null
  if (saved) return saved
  // par défaut, respecter le système
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useColorMode() {
  const [mode, setMode] = useState<Mode>(getInitialMode)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', mode === 'dark')
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggle = useCallback(() => {
    setMode((m) => (m === 'dark' ? 'light' : 'dark'))
  }, [])

  return { mode, toggle, setMode }
}
