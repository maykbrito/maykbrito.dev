import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function({...props}) {
  return (<Avatar {...props} >
    <img src="/me.png" alt="@maykbrito" />
    <AvatarFallback>MB</AvatarFallback>
  </Avatar>)
}