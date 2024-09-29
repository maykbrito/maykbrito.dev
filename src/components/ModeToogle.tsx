import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export function ModeToggle({ ...props }) {
  const initialState = localStorage.getItem('theme') ?? 'dark'
  const [theme, setThemeState] = React.useState(initialState)

  React.useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove'](
      'dark'
    )
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div {...props}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setThemeState(theme === 'light' ? 'dark' : 'light')}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle mode</span>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    </div>
  )
}
