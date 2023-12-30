import Fuse from 'fuse.js'
import { useState } from 'react'

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: ['frontmatter.title', 'fontmatter.description', 'frontmatter.slug'],
	includeMatches: true,
	minMatchCharLength: 2,
};

export default function Search({ searchList }) {
  const [query, setQuery] = useState('')

  const fuse = new Fuse(searchList, options)

  const posts = fuse
    .search(query)
    .map(result => result.item)
    .slice(0, 5)

  function handleOnSearch({ target = {}}) {
    const { value } = target
    setQuery(() => value)
  }

  return (
    <>
      <label htmlFor="search" className='sr-only'>Search</label>
      <input 
        className='block w-full p-4 pl-6 text-gray-900 border border-gray-300 dark:border-gray-800 rounded bg-gray-50 dark:bg-gray-950 dark:text-gray-100'
        type="text" 
        id="search"
        value={query} 
        onChange={handleOnSearch} placeholder='Search posts' />
      {query.length > 1 && (
        <p className='my-4'>
          Found {posts.length} {posts.length === 1 ? 'result' : 'results'} para '{query}'
        </p>
      )}

      <ul className='list-none'>
        {posts && posts.map(post => (
          <li className='py-2' key={post.frontmatter.slug}>
            <a href={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</a>
            <p className="text-sm text-muted-foreground">{post.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}