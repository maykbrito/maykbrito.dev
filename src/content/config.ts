import { defineCollection } from 'astro:content'
const GOOGLE_KEY = import.meta.env.GOOGLE_KEY
const MAX_RESULTS = 50

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

interface Comment {
  id: string
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string
        authorProfileImageUrl: string
        textOriginal: string
        publishedAt: string
      }
    }
  }
}

const organizeVideos = async (items: Item[]) =>
  items.map(async ({ snippet }) => {
    const comments = await getVideoComments(snippet.resourceId.videoId)
    return {
      id: snippet.resourceId.videoId,
      publishedAt: snippet.publishedAt,
      title: snippet.title,
      description: snippet.description,
      thumbnails: snippet.thumbnails,
      videoId: snippet.resourceId.videoId,
      comments,
    }
  })

const url = (playlistId: string) =>
  `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=${MAX_RESULTS}&part=snippet&playlistId=${playlistId}&key=${GOOGLE_KEY}`

const loadVideos = async (playlistId: string) => {
  const response = await fetch(url(playlistId))
  let data = await response.json()
  let videos = await organizeVideos(data.items)
  while (data.nextPageToken) {
    data = await fetch(
      `${url(playlistId)}&pageToken=${data.nextPageToken}`
    ).then(res => res.json())
    const newVideos = await organizeVideos(data.items)
    videos = [...videos, ...newVideos]
  }

  const returnedVideos = await Promise.all(videos)
  return returnedVideos
}

const organizeComments = (comments: Comment[]) =>
  comments.map(({ id, snippet }) => ({
    id,
    author: snippet.topLevelComment.snippet.authorDisplayName,
    avatar: snippet.topLevelComment.snippet.authorProfileImageUrl,
    text: snippet.topLevelComment.snippet.textOriginal,
    publishedAt: snippet.topLevelComment.snippet.publishedAt,
  }))

const getVideoComments = async (videoId: string) => {
  const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${GOOGLE_KEY}&maxResults=100`

  const response = await fetch(commentsUrl)
  let data = await response.json()
  let comments = organizeComments(data.items)

  while (data.nextPageToken) {
    data = await fetch(`${commentsUrl}&pageToken=${data.nextPageToken}`).then(
      res => res.json()
    )
    comments = [...comments, ...organizeComments(data.items)]
  }
  return comments
}

const videos = defineCollection({
  loader: async () => loadVideos('UULFkr-unKyg_SiEzUwUY_uluQ'),
})

const shorts = defineCollection({
  loader: async () => loadVideos('UUSHkr-unKyg_SiEzUwUY_uluQ'),
})

export const collections = { videos, shorts }
