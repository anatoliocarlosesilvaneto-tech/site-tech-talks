import { Post, Category } from './types';

export const HERO_POSTS: Post[] = [
  {
    id: 'hero-1',
    title: "RTX 5090: O Salto Quântico na Renderização?",
    excerpt: "A suposta nova placa da Nvidia promete redefinir o desempenho do ray tracing com arquitetura de núcleo impulsionada por IA. Vale a pena o upgrade?",
    category: Category.HARDWARE,
    date: "12 Out, 2023",
    imageUrl: "https://picsum.photos/1200/600?random=1",
    views: 15420,
    author: "Alex Chen"
  },
  {
    id: 'hero-2',
    title: "Cyberpunk 2077: Análise de Phantom Liberty",
    excerpt: "A redenção completa. Dogtown oferece a experiência mais densa e rica em narrativa que a CDPR já criou até hoje.",
    category: Category.GAMES,
    date: "10 Out, 2023",
    imageUrl: "https://picsum.photos/1200/600?random=2",
    views: 12100,
    author: "Sarah Connor"
  }
];

export const TOP_TEN_POSTS: Post[] = [
  {
    id: 'top-1',
    title: "Melhores Teclados Mecânicos de 2024",
    excerpt: "Do thocky ao clicky, classificamos os melhores modelos.",
    category: Category.HARDWARE,
    date: "01 Out, 2023",
    imageUrl: "https://picsum.photos/800/600?random=3",
    views: 98000,
    author: "Mestre das Teclas",
    ranking: 1
  },
  {
    id: 'top-2',
    title: "Rumores do GPT-5: O Que Sabemos",
    excerpt: "A próxima fronteira dos LLMs explicada.",
    category: Category.AI,
    date: "05 Out, 2023",
    imageUrl: "https://picsum.photos/800/600?random=4",
    views: 87500,
    author: "Caçador de Dados",
    ranking: 2
  },
  {
    id: 'top-3',
    title: "Guia de Mods para Starfield",
    excerpt: "Mods essenciais para corrigir UI e desempenho.",
    category: Category.GAMES,
    date: "28 Set, 2023",
    imageUrl: "https://picsum.photos/800/600?random=5",
    views: 76000,
    author: "Cowboy Espacial",
    ranking: 3
  },
  {
    id: 'top-4',
    title: "Vazamentos do iPhone 16 Pro Max",
    excerpt: "Titânio sai, Liquidmetal entra?",
    category: Category.TECH,
    date: "11 Out, 2023",
    imageUrl: "https://picsum.photos/800/600?random=6",
    views: 65000,
    author: "Apple Insider",
    ranking: 4
  },
  {
    id: 'top-5',
    title: "Top 10 Jogos Indie do Ano",
    excerpt: "Joias escondidas que você pode ter perdido.",
    category: Category.GAMES,
    date: "09 Out, 2023",
    imageUrl: "https://picsum.photos/800/600?random=7",
    views: 54000,
    author: "Amante Indie",
    ranking: 5
  },
  {
    id: 'top-6',
    title: "Python para Iniciantes: Parte 1",
    excerpt: "Comece sua jornada de programação aqui.",
    category: Category.TUTORIALS,
    date: "15 Set, 2023",
    imageUrl: "https://picsum.photos/800/600?random=8",
    views: 48000,
    author: "Mago do Código",
    ranking: 6
  },
  {
    id: 'top-7',
    title: "Steam Deck vs ROG Ally",
    excerpt: "A guerra dos portáteis esquenta.",
    category: Category.HARDWARE,
    date: "02 Out, 2023",
    imageUrl: "https://picsum.photos/800/600?random=9",
    views: 42000,
    author: "Herói Portátil",
    ranking: 7
  },
  {
    id: 'top-8',
    title: "A Queda da Unity?",
    excerpt: "Analisando a controvérsia de preços.",
    category: Category.GAMES,
    date: "20 Set, 2023",
    imageUrl: "https://picsum.photos/800/600?random=10",
    views: 39000,
    author: "Papo de Dev",
    ranking: 8
  },
  {
    id: 'top-9',
    title: "CSS Grid vs Flexbox",
    excerpt: "Quando usar qual modelo de layout.",
    category: Category.TUTORIALS,
    date: "25 Set, 2023",
    imageUrl: "https://picsum.photos/800/600?random=11",
    views: 35000,
    author: "Fã de Frontend",
    ranking: 9
  },
  {
    id: 'top-10',
    title: "WiFi 7 Explicado",
    excerpt: "Vale a pena atualizar seu roteador?",
    category: Category.TECH,
    date: "08 Out, 2023",
    imageUrl: "https://picsum.photos/800/600?random=12",
    views: 31000,
    author: "Net Runner",
    ranking: 10
  },
];

export const LATEST_POSTS: Post[] = [
  {
    id: 'latest-1',
    title: "React 19: A Era do Compilador",
    excerpt: "Esqueça o useMemo. O React está ficando mais inteligente com memoização automática.",
    category: Category.TECH,
    date: "Hoje",
    imageUrl: "https://picsum.photos/800/600?random=13",
    views: 1200,
    author: "Dan A."
  },
  {
    id: 'latest-2',
    title: "Hollow Knight Silksong: Ainda Esperando",
    excerpt: "Mais um evento passa sem data de lançamento. O que está acontecendo?",
    category: Category.GAMES,
    date: "Ontem",
    imageUrl: "https://picsum.photos/800/600?random=14",
    views: 3400,
    author: "Hornet"
  },
  {
    id: 'latest-3',
    title: "Monitores OLED Finalmente Acessíveis",
    excerpt: "Novos painéis da LG e Samsung estão baixando os preços.",
    category: Category.HARDWARE,
    date: "2 Dias Atrás",
    imageUrl: "https://picsum.photos/800/600?random=15",
    views: 890,
    author: "Pixel Peeper"
  },
  {
    id: 'latest-4',
    title: "Construindo um NAS com Raspberry Pi 5",
    excerpt: "Um guia completo para sua própria nuvem doméstica.",
    category: Category.TUTORIALS,
    date: "3 Dias Atrás",
    imageUrl: "https://picsum.photos/800/600?random=16",
    views: 5600,
    author: "Cara do Pi"
  },
  {
    id: 'latest-5',
    title: "Entendendo a Arquitetura Transformer",
    excerpt: "Mergulho profundo nas redes neurais que impulsionam a IA.",
    category: Category.AI,
    date: "4 Dias Atrás",
    imageUrl: "https://picsum.photos/800/600?random=17",
    views: 12000,
    author: "Pesquisador IA"
  },
  {
    id: 'latest-6',
    title: "Melhores Placas de Vídeo Custo-Benefício",
    excerpt: "Você não precisa gastar R$ 5000 para jogar títulos modernos.",
    category: Category.HARDWARE,
    date: "5 Dias Atrás",
    imageUrl: "https://picsum.photos/800/600?random=18",
    views: 7800,
    author: "Frame Chaser"
  }
];