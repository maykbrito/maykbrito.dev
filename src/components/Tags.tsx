import { Badge } from "@/components/ui/badge"

interface TagProps {
  name: string;
  color: string;
}

export default function Tags({...props}) {
  return(<div className="flex gap-2">
    {props.tags.map((tag: TagProps) => {
      return(<Badge key={tag.name} variant="outline">{tag.name}</Badge>)
    })}
  </div>)
}