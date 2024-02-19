export const prerender = false;

import { XMLParser } from "fast-xml-parser";

type Author = {
  name: string;
  uri: string;
};

type YouTubeRSSFeed = {
  link: string[];
  id: string; // yt:channel:{id}
  "yt:channelId": string;
  title: string;
  author: Author;
  entry: YouTubeRSSEntry[];
};

type YouTubeRSSEntry = {
  id: string; // yt:video:{id}
  "yt:videoId": string;
  "yt:channelId": string;
  title: string;
  link: string;
  published: string;
  updated: string;
  author: Author;
  "media:group": YouTubeRSSMediaGroup;
};

type YouTubeRSSMediaGroup = {
  "media:title": string;
  "media:description": string;
  "media:content": {
    "@_url": string;
    "@_type": string;
    "@_width": string;
    "@_height": string;
  };
  "media:thumbnail": {
    "@_url": string;
    "@_width": string;
    "@_height": string;
  };
};

type YouTubeRSS = {
  feed: YouTubeRSSFeed;
};

type Props = {
  channelID: string;
};

import type { APIRoute } from "astro";

// export GET astro api
export const GET: APIRoute = async ({ request }) => {

  const channelID = "UCkr-unKyg_SiEzUwUY_uluQ"
  
  const youtubeRSS = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;
  const rssData = await fetch(youtubeRSS).then((res) => res.text());
  
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  };
  const parser = new XMLParser(options);
  
  const rss = parser.parse(rssData) as YouTubeRSS;
  const video = rss.feed.entry[0];

  const res = {
    title: video["media:group"]["media:title"],
    thumbnail: video["media:group"]["media:thumbnail"]["@_url"],
    url: video["media:group"]["media:content"]["@_url"],
  };

  return Response.json(res)
}