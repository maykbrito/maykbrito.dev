export interface Post {
  frontmatter: Frontmatter
  __usesAstroImage: boolean
  url: string
  file: string
  __esModule: boolean
}

export interface Frontmatter {
  layout: string
  id: string
  slug: string
  title: string
  cover: string
  tags: Tag[]
  created_time: string
  last_edited_time: string
  icon: any
  archived: boolean
  status: string
  publish_date: string
  description: string
  reading_time: string
  dateStr: string
  optimizedCoverImage: OptimizedCoverImage
  coverImageSrc: string
}

export interface Tag {
  id: string
  name: string
  color: string
}

export interface OptimizedCoverImage {
  rawOptions: RawOptions
  options: Options
  src: string
  srcSet: SrcSet
  attributes: Attributes
}

export interface RawOptions {
  src: Src
  width: number
  format: string
}

export interface Src {
  src: string
  width: number
  height: number
  format: string
}

export interface Options {
  src: Src2
  width: number
  format: string
}

export interface Src2 {
  src: string
  width: number
  height: number
  format: string
}

export interface SrcSet {
  values: any[]
  attribute: string
}

export interface Attributes {
  width: number
  height: number
  loading: string
  decoding: string
}
