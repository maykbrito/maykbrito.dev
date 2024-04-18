// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {GithubIcon, DiscordIcon, InstagramIcon, TwitchIcon, YoutubeIcon} from '@/components/Icons';


export default {
  head: {
    title: 'Mayk Brito',
    description: 'Descomplicando a programação WEB!',
    image: 'https://github.com/maykbrito.png'
  },
  links: {
    primary: [
      {
        url: "https://www.brazilmentioned.com/?utm_source=youtube&utm_medium=referral&utm_campaign=theprimeagen-youtube-referral&utm_term=event-future-of-applications-primeagen-youtube-referral&utm_content=brazilmentioned-lp",
        title: "@ThePrimeagen in Brazil",
        description: "Future of applications | @ArenaMagalu @Azion @Turso",
        colors: {
          'background': 'bg-gradient-to-br from-[#22D3EE] to-amber-200',
          'title': 'text-black',
          'description': 'text-gray-800'
        }
      },
      { 
        url: 'https://discover.maykbrito.dev',
        title: 'Discover (gratuito)',
        description: '+5h de curso de programação WEB para iniciantes'
      },
      {
        url: 'https://one.maykbrito.dev',
        title: 'Rocketseat',
        description: 'Formação completa em programação WEB'
      },
      {
        url: 'https://masterclassjs.maykbrito.dev',
        title: 'Masterclass de JavaScript',
        description: 'Domine os fundamentos de JavaScript'
      },
      {
        url: 'https://biblioteca.maykbrito.dev',
        title: '+20 Cursos (gratuitos)',
        description: 'Cursos de HTML, CSS, JS, Node, SQL, etc...'
      }
    ],
    social: [
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
      }
      
    ]
  }
} as { 
  head: { 
    title: string; 
    description: string;
    image: string;
  }, 
  links: {
    primary: {
      url: string
      title: string
      description: string
      colors?: {
        title?: string
        description?: string
        background?: string
      }
    }[],
    social: {
      url: string
      title: string
      icon: any
    }[]
  },
}
