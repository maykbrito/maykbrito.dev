import { useEffect, useRef, useState } from 'react'
import { dayjs } from '@/lib/dayjs'

export default function ({ ...props }) {
  const showItems = 10
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
        <div key={video.id}>
          <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer noopenner"
            key={video.id}
            className="transform rounded-lg border border-gray-200 bg-white shadow-md transition duration-100 ease-in dark:border-gray-700 dark:bg-gray-950 sm:hover:scale-[102%] lg:hover:scale-105 flex gap-4 flex-col sm:flex-row"
          >
            <img
              className="h-auto sm:w-60 rounded-md rounded-tr-none rounded-br-none object-cover aspect-video shrink-0"
              src={video.thumbnails.standard.url}
              loading="lazy"
              alt="cover"
              fetchPriority="low"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-gray-100">
                {video.title}
              </h2>

              <p className="mb-4 whitespace-pre-line font-light text-gray-500 dark:text-gray-400 text-xs break-words break-all">
                {video.description.replace('\n', ' ').trim().slice(0, 94)}...
              </p>

              <p className=" mt-auto text-xs text-gray-400 dark:text-gray-500 text-right">
                {dayjs(video.publishedAt).fromNow()}
              </p>
            </div>
          </a>
          <div>
            {video.comments.length > 0 && (
              <div className="flex flex-col gap-2 p-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Comments
                </h3>
                {/* {JSON.stringify(video.comments.slice(0, 1))} */}
                {video.comments.map((comment: any) => (
                  <div key={comment.id} className="flex flex-col gap-2">
                    <div className="w-12 h-12">
                      <img src={comment.avatar} alt={comment.author} />
                    </div>
                    <div>
                      <p>{comment.text}</p>
                      <cite>
                        {comment.author} -{' '}
                        {dayjs(comment.publishedAt).fromNow()}
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      <div ref={loader} />
    </>
  )
}
