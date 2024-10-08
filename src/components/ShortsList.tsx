import { useEffect, useRef, useState } from 'react'
import { dayjs } from '@/lib/dayjs'

export default function ({ ...props }) {
  const showItems = 9
  const [currentItems, setCurrentItems] = useState(showItems)
  const loader = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 })
    if (loader.current) {
      observer.observe(loader.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleObserver = (entities: any) => {
    const target = entities[0]
    if (target.isIntersecting && currentItems < props.videos.length) {
      setCurrentItems(prevItems => prevItems + showItems)
    }
  }

  return (
    <>
      {props.videos.slice(0, currentItems).map(({ data: video }: any) => (
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noreferrer noopenner"
          key={video.id}
          className="transform rounded-lg border border-gray-200 bg-white shadow-md transition duration-100 ease-in dark:border-gray-700 dark:bg-gray-950 sm:hover:scale-[102%] lg:hover:scale-105"
        >
          <img
            className="h-auto w-full rounded-md rounded-tr-none rounded-br-none object-cover aspect-[9/10] shrink-0"
            src={video.thumbnails.standard.url}
            loading="lazy"
            alt="cover"
            fetchPriority="low"
          />

          <div className="p-4">
            <h2 className="mb-2 text-xs font-medium tracking-tight text-gray-900 dark:text-gray-100">
              {video.title.slice(0, 30)}
              {video.title.length > 30 && '...'}
            </h2>

            <p className=" mt-auto text-xs text-gray-400 dark:text-gray-500 ">
              {dayjs(video.publishedAt).fromNow()}
            </p>
          </div>
        </a>
      ))}

      <div ref={loader} />
    </>
  )
}
