import { defineCollection } from 'astro:content'

interface Item {
  snippet: {
    publishedAt: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
      }
    }
    resourceId: {
      videoId: string
      kind: string
    }
  }
}

const organizeVideos = (items: Item[]) =>
  items.map(({ snippet }) => {
    return {
      id: snippet.resourceId.videoId,
      publishedAt: snippet.publishedAt,
      title: snippet.title,
      description: snippet.description,
      thumbnails: snippet.thumbnails,
      videoId: snippet.resourceId.videoId,
    }
  })

const GOOGLE_KEY = import.meta.env.GOOGLE_KEY
const MAX_RESULTS = 50

const url = (playlistId: string) =>
  `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=${MAX_RESULTS}&part=snippet&playlistId=${playlistId}&key=${GOOGLE_KEY}`

const loadVideos = async (playlistId: string) => {
  const response = await fetch(url(playlistId))
  let data = await response.json()
  let videos = organizeVideos(data.items)
  while (data.nextPageToken) {
    data = await fetch(
      `${url(playlistId)}&pageToken=${data.nextPageToken}`
    ).then(res => res.json())
    videos = [...videos, ...organizeVideos(data.items)]
  }
  return videos
}

const videos = defineCollection({
  loader: async () => loadVideos('UULFkr-unKyg_SiEzUwUY_uluQ'),
})

const shorts = defineCollection({
  loader: async () => loadVideos('UUSHkr-unKyg_SiEzUwUY_uluQ'),
})

export const collections = { videos, shorts }
