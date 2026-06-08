<script>
  import { onMount } from 'svelte'

  export let term = ''

  let giscusContainer
  let currentTheme = 'light'

  function getTheme() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.theme === 'dark' ? 'dark' : 'light'
    }
    return 'light'
  }

  function loadGiscus(theme) {
    if (!giscusContainer) return

    // Remove existing iframe if any
    const existingScript = giscusContainer.querySelector('script')
    if (existingScript) existingScript.remove()

    const existingFrame = giscusContainer.querySelector('.giscus')
    if (existingFrame) existingFrame.remove()

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'maykbrito/maykbrito.dev')
    script.setAttribute('data-repo-id', 'R_kgDOK_Nvtg')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDOK_Nvts4C-xAs')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    script.setAttribute('data-lang', 'pt')
    script.setAttribute('data-loading', 'lazy')
    script.crossOrigin = 'anonymous'
    script.async = true

    giscusContainer.appendChild(script)
  }

  function updateTheme(theme) {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (iframe) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        'https://giscus.app'
      )
    }
  }

  onMount(() => {
    currentTheme = getTheme()
    loadGiscus(currentTheme)

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = getTheme()
      if (newTheme !== currentTheme) {
        currentTheme = newTheme
        updateTheme(currentTheme)
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  })
</script>

<div bind:this={giscusContainer} class="giscus-wrapper mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
  <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Comentários</h3>
</div>
