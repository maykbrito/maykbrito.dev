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
      'https://logodownload.org/wp-content/uploads/2019/09/hostgator-logo-768x135.png',
    url: 'https://www.hostgator.com.br/50930.html',
  },
  {
    name: 'Wispr Flowvoice',
    description: 'Transcrição de voz em texto em tempo real com inteligência artificial',
    imgSrc: 'https://i.imgur.com/dALsbfX.png',
    url: 'https://www.flowvoice.ai/?referral=MAYK1',
  },
]

export default partnerships
