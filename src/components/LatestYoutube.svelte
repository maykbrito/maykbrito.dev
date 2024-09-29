<script>
import { onMount } from 'svelte'

let title, url, thumbnail

onMount(async () => {
  const res = await fetch('/api/fetch-youtube').then(res => res.json())

  title = res.title
  url = res.url
  thumbnail = res.thumbnail
})
</script>


<div class="flex flex-col w-full h-full">
  <a
    id="externalLink"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    class="flex-1 relative"
  >
    {#if !thumbnail }
        <div
          id="placeholder"
          class="animate-pulse flex items-center justify-center h-[288px] bg-gray-300 rounded w-[512px] dark:bg-gray-700"
        >
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <div role="status" class="max-w-sm animate-pulse">
          <div class="mt-4 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>
          <div class="mt-2 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
          <div class="mt-2 grid grid-flow-col max-w-[140px]">
            <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40px]"></div>
            <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40px]"></div>
            <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40px]"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
    {:else}
        <img
          id="video"
          class="rounded-lg object-cover object-center w-full shadow-xl aspect-video"
          src={thumbnail}
          height="288"
          width="512"
          alt={title}
        />
    
    <div class="flex flex-1 flex-col justify-between py-2">
      <h2 id="title" class="text-2xl font-bold text-smoke-50 mb-2 break-words">
        {title}
      </h2>
      <div class="my-1 text-sm">
        <span
          class="rounded-full inline-flex flex-row items-center px-2 ring-1 ring-smoke-800 text-smoke-300"
          >youtube</span
        >
        <span
          class="rounded-full inline-flex flex-row items-center px-2 ring-1 ring-smoke-800 text-smoke-300"
          >video</span
        >
        <span
          class="rounded-full inline-flex flex-row items-center px-2 bg-yellow-400 text-black"
          >new</span
        >
      </div>
    </div>

    {/if}
  </a>
</div>
