import Fuse from 'fuse.js'
import { useState } from 'react'
import { dayjs } from '@/lib/dayjs'

const options = {
  keys: ['title', 'description'],
  includeMatches: true,
  minMatchCharLength: 2,
}

export function SearchVideos({ searchList, placeholder }: any) {
  const [query, setQuery] = useState('')

  const fuse = new Fuse(searchList, options)

  const posts = fuse
    .search(query)
    .map(result => result.item)
    .slice(0, 10)

  function handleOnSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setQuery(() => value)
  }

  return (
    <>
      <label htmlFor="search" className="sr-only">
        Pesquisar
      </label>
      <input
        className="block w-full p-4 pl-6 text-gray-900 border border-gray-300 dark:border-gray-800 rounded bg-gray-50 dark:bg-gray-950 dark:text-gray-100"
        type="text"
        id="search"
        value={query}
        onChange={handleOnSearch}
        placeholder={placeholder ? placeholder : "Pesquise por vídeos"}
      />
      {query.length > 1 && (
        <p className="my-4">
          Encontrado {posts.length} {posts.length === 1 ? 'resultado' : 'resultados'} para
          '{query}'
        </p>
      )}

      <ul className="list-none">
        {posts &&
          posts.map((post: any) => (
            <li className="py-4 border-b" key={post.videoId}>
              <a
                className='flex gap-4'
                target='_blank' 
                rel="noreferrer noopenner"
                href={`https://www.youtube.com/watch?v=${post.videoId}`}>

              
              <img 
                className='w-12 h-12 rounded-md object-cover shrink-0'
              src={post.thumbnails.medium.url} alt="cover" />

              <div className='space-y-4 flex-1'>
                <p>{post.title}</p>

                <p className="text-sm text-muted-foreground">
                  {post.description.slice(0, 140)}...
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-right">
                  postado {dayjs(post.publishedAt).fromNow()}
                </p>
              </div>

              </a>
            </li>
          ))}
      </ul>
    </>
  )
}
