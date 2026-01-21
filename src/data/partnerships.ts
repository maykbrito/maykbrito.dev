interface Partnership {
  name: string
  description: string
  couponCode?: string
  discount?: string
  imgSrc: string
  url: string
}

const partnerships: Partnership[] = [
  {
    name: 'Hostgator',
    description: 'Hospedagem de sites com CDN e migração Wordpress gratuitos',
    imgSrc:
      'https://cdn.brandfetch.io/idZxPLi9CZ/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668049460314',
    url: 'https://www.hostgator.com.br/50930.html',
  },
  {
    name: 'Wispr Flowvoice',
    description:
      'Transcrição de voz em texto em tempo real com inteligência artificial',
    imgSrc:
      'https://cdn.brandfetch.io/idTjxaVwO2/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761165441424',
    url: 'https://www.flowvoice.ai/?referral=MAYK1',
  },
  {
    name: 'Replit',
    description: 'Ambiente de desenvolvimento integrado online e colaborativo.',
    imgSrc:
      'https://cdn.brandfetch.io/ido8Wu58rI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668070768428',
    url: 'https://replit.maykbrito.dev',
  },
  {
    name: 'Hostinger',
    description: 'Hospedagem de sites com ótimo desempenho e suporte 24/7.',
    imgSrc:
      'https://cdn.brandfetch.io/idc4D4ETwV/w/173/h/133/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764454456285',
    url: 'https://hostinger.com/maykbrito10',
  },
  {
    name: 'Hetzner',
    description:
      'Servidores dedicados e cloud com alta performance e preços baixos.',
    imgSrc:
      'https://cdn.brandfetch.io/id8u1ssvi5/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767451569914',
    url: 'https://hetzner.maykbrito.dev/',
  },
  {
    name: 'Railway',
    description:
      'Plataforma de infraestrutura para deploy de aplicações sem complexidade.',
    imgSrc:
      'https://cdn.brandfetch.io/idtGAWag9F/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1764933249274',
    url: 'https://railway.maykbrito.dev/',
  },
]

export default partnerships
