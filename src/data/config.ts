// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from '@/components/Icons'

type Link = {
  url: string
  title: string
  description?: string
  icon?: React.FC
  colors?: {
    background: string
    title: string
    description: string
  }
}

const primaryLinks: Link[] = [
  // {
  //   url: 'https://app.rocketseat.com.br',
  //   title: '✨ Participe do próximo evento ✨',
  //   description: 'Veja o calendário de eventos no canal da Rocketseat',
  //   colors: {
  //     background:
  //       'bg-gradient-to-br from-[#e254ff] to-[#5f75f2] hover:from-[#9956f6] hover:to-[#29e0a9] ',
  //     title: 'text-black',
  //     description: 'text-gray-800',
  //   },
  // },
  {
    url: 'https://rseat.in/ebook_SemMisterios',
    title: '✨ Ebook: Programação sem mistérios ✨',
    description: 'O guia para iniciantes em programação',
  },
  {
    url: 'https://one.maykbrito.dev',
    title: 'Rocketseat',
    description: 'Formação completa em programação WEB',
  },
  {
    url: 'https://discover.maykbrito.dev',
    title: 'Programação WEB (gratuito)',
    description: '+5h de curso de programação WEB para iniciantes',
  },
  {
    url: 'https://masterclassjs.maykbrito.dev',
    title: 'Quiz JavaScript',
    description: 'Teste seus conhecimentos em JavaScript',
  },
  // {
  //   url: 'https://biblioteca.maykbrito.dev',
  //   title: '🎁 +25 Cursos (gratuitos) 🎁',
  //   description: 'Cursos de HTML, CSS, JS, Node, SQL, etc...',
  // },
]

const socialLinks: Link[] = [
  {
    url: 'https://github.com/maykbrito',
    title: 'Github',
    icon: GithubIcon,
  },
  {
    url: 'https://twitch.tv/maykbrito',
    title: 'Twitch',
    icon: TwitchIcon,
  },
  {
    url: 'https://youtube.com/maykbrito',
    title: 'Youtube',
    icon: YoutubeIcon,
  },
  {
    url: 'https://discord.maykbrito.dev',
    title: 'Discord',
    icon: DiscordIcon,
  },
  {
    url: 'https://instagram.com/maykbrito',
    title: 'Instagram',
    icon: InstagramIcon,
  },
]

export default {
  head: {
    title: 'Mayk Brito',
    description: 'Descomplicando a programação WEB!',
    image: 'https://github.com/maykbrito.png',
  },
  links: {
    primary: primaryLinks,
    social: socialLinks,
  },
}
