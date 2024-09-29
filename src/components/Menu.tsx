import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export default function NavigationMenuDemo() {
  const isActive = (path: string) => location.pathname == path

  return (
    <NavigationMenu >
      <NavigationMenuList className="max-w-[260px] sm:max-w-fit flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            active={isActive('/')}
            className={navigationMenuTriggerStyle()}
          >
            Home
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
            href="/shorts/"
            active={isActive('/shorts/')}
            className={navigationMenuTriggerStyle()}
          >
            Shorts
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
      </NavigationMenuList>
    </NavigationMenu>
  )
}
