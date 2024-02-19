import type { APIRoute } from "astro";

// export GET astro api
export const GET: APIRoute = async ({ request }) => {
  const res = await fetch("https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id=UCkr-unKyg_SiEzUwUY_uluQ").then(res => res.json())
  
  return Response.json(res)
}