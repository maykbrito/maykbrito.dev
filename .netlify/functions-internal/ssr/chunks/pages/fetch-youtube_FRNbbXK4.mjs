import { XMLParser } from 'fast-xml-parser';

const prerender = false;
const cache = /* @__PURE__ */ new Map();
const GET = async () => {
  let video;
  const channelID = "UCkr-unKyg_SiEzUwUY_uluQ";
  if (cache.has(channelID)) {
    const rss = cache.get(channelID);
    video = rss.feed.entry[0];
  } else {
    const youtubeRSS = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;
    const rssData = await fetch(youtubeRSS).then((res2) => res2.text());
    const options = {
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    };
    const parser = new XMLParser(options);
    const rss = parser.parse(rssData);
    video = rss.feed.entry[0];
    cache.set(channelID, rss);
  }
  const res = {
    title: video["media:group"]["media:title"],
    thumbnail: video["media:group"]["media:thumbnail"]["@_url"],
    url: video["media:group"]["media:content"]["@_url"]
  };
  return Response.json(res);
};

export { GET, prerender };
