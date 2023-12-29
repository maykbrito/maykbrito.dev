import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
  const isActive = (path: string) => location.pathname == path

  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
            <NavigationMenuLink href="/" active={isActive("/")} className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/blog" active={isActive("/blog")} className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}