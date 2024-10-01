import { useState } from 'react'
import { dayjs } from '@/lib/dayjs'
import { Button } from './ui/button'

export default function ({ ...props }) {
  const showItems = 10
  const [currentItems, setCurrentItems] = useState(showItems)

  return (
    <>
      {props.videos.slice(0, currentItems).map(({ data: video }: any) => (
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
      ))}

      {currentItems < props.videos.length && (
        <Button
          className="w-full"
          variant="outline"
          onClick={() => setCurrentItems(() => currentItems + showItems)}
        >
          Mostrar mais
        </Button>
      )}
    </>
  )
}
