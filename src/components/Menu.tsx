import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Gift, Home, Menu as MenuIcon } from 'lucide-react'
import { useState } from 'react'

export default function NavigationMenuDemo() {
  const isActive = (path: string) => location.pathname === path
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="md:hidden fixed top-4 right-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon size={24} />
      </button>

      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" />}

      <NavigationMenu
        className={`
        md:relative fixed right-0 top-0 h-full w-[280px]
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0 bg-white dark:bg-gray-950' : 'translate-x-full'}
        md:translate-x-0
      `}
      >
        <NavigationMenuList className="max-w-[260px] sm:max-w-fit flex-wrap md:flex-row flex-col p-4 md:p-0">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              active={isActive('/')}
              className={navigationMenuTriggerStyle()}
            >
              <Home size={16} />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blog/"
              active={isActive('/blog/')}
              className={navigationMenuTriggerStyle()}
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/videos/"
              active={isActive('/videos/')}
              className={navigationMenuTriggerStyle()}
            >
              Videos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/projects/"
              active={isActive('/projects/')}
              className={navigationMenuTriggerStyle()}
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/setup/"
              active={isActive('/setup/')}
              className={navigationMenuTriggerStyle()}
            >
              Setup
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/ofertas/"
              active={isActive('/ofertas/')}
              className={navigationMenuTriggerStyle()}
              title="Ofertas e parcerias"
            >
              <Gift size={16} />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
