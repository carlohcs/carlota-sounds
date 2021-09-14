const host = 'https://carlota-sounds.art'

const share = {
  url: host,
  title: 'Carlota Sounds - A reflection of sounds.',
  description:
    'Brazilian producer and artist, Carlota Sounds is the product of the author’s intimate expression. It is a job in which he deepest feelings are explored: from loneliness, euphoria to the widest reflections. The songs are based on the exploration of musical instruments, using the voices as support. May the reflection of these be with you.',
}

const configs = {
  metrics: {
    GA: 'G-Y3RZ09PXYR',
    GTM: 'GTM-TCLQQQM',
  },
  meta: [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#2C3240' },
    { name: 'msapplication-navbutton-color', content: '#2C3240' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#2C3240' },
    { name: 'author', content: 'Carlos Henrique | @carlohcs' },
    {
      hid: 'description',
      name: 'description',
      content: share.description,
    },
    { property: 'og:description', content: share.description },
    { property: 'og:url', content: share.url },
    { property: 'og:title', content: share.title },
    { property: 'twitter:title', content: share.title },
    // https://buffer.com/library/ideal-image-sizes-social-media-posts/
    { property: 'og:image', content: '/share/default.png' },
    {
      property: 'og:image:alt',
      content: 'Dandelion, a representation of reflection about the life: this is Carlota Sounds!',
    },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: 'article' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:site', content: '@carlohcs' },
    { property: 'twitter:creator', content: '@carlohcs' },
    { property: 'twitter:image', content: `${host}/share/twitter-card.png` },
    {
      name: 'keywords',
      content:
        'carlota, sounds, carlotasounds, indie, brazilian, producer, artist,author, intimate expression, deepest, feelings,explored, loneliness, euphoria, widest, reflections, songs, musical, instruments, voices',
    },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
  ],
  favicons: [
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/favicons/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/favicons/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/favicons/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/favicons/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/favicons/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/favicons/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/favicons/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/favicons/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/favicons/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/favicons/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicons/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicons/favicon-16x16.png' },
    { rel: 'manifest', href: '/icons/favicons/manifest.json' },
  ],
  listenAt: [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/4Kv6CaJSSTkaD9QHgjvrIn', icon: 'spotify' },
    { name: 'Deezer', url: 'https://www.deezer.com/us/artist/131229372', icon: 'deezer' },
    { name: 'Youtube Music', url: 'https://music.youtube.com/channel/UCg3L9N9ZCeQ8JB4qhdL8qlg', icon: 'youtube-play' },
    { name: 'Youtube', url: 'https://www.youtube.com/c/CarlosHenriqueCarvalhodeSantana/', icon: 'youtube' },
    { name: 'Apple Music', url: 'https://music.apple.com/br/artist/carlota-sounds/1564688803', icon: 'apple' },
  ],
  shareAt: [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${host}`,
      icon: 'facebook',
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${host}&hashtags=listen,carlotasounds,carlota,sounds&via=carlohcs`,
      icon: 'twitter',
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://twitter.com/intent/tweet?text=Mural%20de%20miss%C3%B5es%20-%20Miss%C3%A3o%20Pessoal&url=https%3A%2F%2Fmissaopessoal.com.br%2Fmural-de-missoes%2F&hashtags=missaopessoal,%20missao,%20pessoal,%20criar,%20objetivo,%20meta,%20vida&via=carlohcs',
    //   icon: 'instagram',
    // },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${host}&title=Check%20out%20this%20songs!&summary=Carlota-Sounds&source=LinkedIn`,
      icon: 'linkedin',
    },
  ],
  followAt: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/carlohcs',
      icon: 'instagram',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/c/CarlosHenriqueCarvalhodeSantana/',
      icon: 'youtube',
    },
  ],
}

export default configs
