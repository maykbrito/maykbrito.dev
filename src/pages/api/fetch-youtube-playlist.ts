import type { APIRoute } from 'astro'

const cache = new Map<string, any>()
const CLEAR_CACHE_INTERVAL = 1000 * 60 * 60 * 24 // 24 hours

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
      publishedAt: snippet.publishedAt,
      title: snippet.title,
      description: snippet.description,
      thumbnails: snippet.thumbnails,
      videoId: snippet.resourceId.videoId,
    }
  })

export const GET: APIRoute = async ({ request }) => {
  // request playlistID from params
  const playlistId = new URLSearchParams(new URL(request.url).search).get('id')

  if (!playlistId) {
    return Response.json(
      {
        error: 'param id for the Playlist ID is required',
      },
      {
        status: 400,
      }
    )
  }

  const GOOGLE_KEY = import.meta.env.GOOGLE_KEY

  const url = (playlistId: string) =>
    `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=50&part=snippet&playlistId=${playlistId}&key=${GOOGLE_KEY}`

  if (cache.has(playlistId) && CLEAR_CACHE_INTERVAL > Date.now() - cache.get(playlistId).timestamp) {
    console.log("hit cache saved at: ", new Date(cache.get(playlistId).timestamp))
    return Response.json(cache.get(playlistId).videos)
  }

  const response = await fetch(url(playlistId))
  let data = await response.json()
  let videos = organizeVideos(data.items)

  while (data.nextPageToken) {
    data = await fetch(
      url(playlistId) + `&pageToken=${data.nextPageToken}`
    ).then(res => res.json())
    videos = [...videos, ...organizeVideos(data.items)]
  }

  // cache the response with timestamp
  cache.set(playlistId, {
    timestamp: Date.now(),
    videos,
  })
  return Response.json(videos)
}
