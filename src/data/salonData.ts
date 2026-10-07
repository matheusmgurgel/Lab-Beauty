export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'loiros' | 'morenas' | 'cortes' | 'cuidado';
  aspectRatio: 'square' | 'portrait' | 'tall';
  featured?: boolean;
}

export const SALON_INFO = {
  name: 'Lab Beauty Cabeleireiros',
  tagline: 'Beleza, cuidado e transformação.',
  manifesto: 'Se cuidar não é vaidade, é necessidade. Viva o momento Lab Beauty.',
  experienceQuote: 'Somos aquele lugar onde você senta... respira fundo... e desacelera um pouco da correria lá fora.',
  address: {
    venue: 'Galeria Solar Cidade Alta',
    street: 'Av. Deodoro da Fonseca, 454',
    neighborhood: 'Petrópolis',
    city: 'Natal',
    state: 'RN',
    cep: '59025-600',
    country: 'Brasil',
    fullFormatted: 'Av. Deodoro da Fonseca, 454 - Petrópolis, Natal - RN, 59025-600',
  },
  whatsapp: {
    raw: '5584999069089',
    formatted: '(84) 99906-9089',
    url: 'https://api.whatsapp.com/send?phone=5584999069089&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Lab%20Beauty',
    urlWithService: (serviceName: string) =>
      `https://api.whatsapp.com/send?phone=5584999069089&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20${encodeURIComponent(serviceName)}%20no%20Lab%20Beauty`,
  },
  instagram: {
    handle: '@sigalab_',
    url: 'https://www.instagram.com/sigalab_/',
  },
  maps: {
    url: 'https://maps.google.com/?q=Lab+Beauty+Cabeleireiros+Av+Deodoro+da+Fonseca+454+Petropolis+Natal+RN',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.34967389104!2d-35.2058091!3d-5.7905183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b5001556942945%3A0xe96aa0c9d9da0e0e!2sAv.%20Deodoro%20da%20Fonseca%2C%20454%20-%20Petr%C3%B3polis%2C%20Natal%20-%20RN%2C%2059025-600!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mechas-coloracao',
    title: 'Coloração & Mechas',
    category: 'Cor & Contraste',
    subtitle: 'Morena Iluminada e Loiras Personalizadas',
    description: 'Cria luminosidade e contraste sob medida, respeitando o tom da sua pele e preservando rigorosamente a saúde, a textura e a integridade da fibra capilar.',
    features: ['Diagnóstico capilar prévio', 'Preservação da elasticidade', 'Nuances quentes e frias sob medida', 'Tonalização com brilho espelhado'],
  },
  {
    id: 'cortes-estilizacao',
    title: 'Cortes & Estilização',
    category: 'Design & Forma',
    subtitle: 'Cortes Femininos Personalizados e Visagismo',
    description: 'Cortes pensados para valorizar a textura natural do seu cabelo e harmonizar suas feições, conferindo movimento fluido, leveza e praticidade no cotidiano.',
    features: ['Avaliação de visagismo', 'Cortes em camadas e repicados', 'Modelagem e finalização premium', 'Orientação de manutenção diária'],
  },
  {
    id: 'tratamentos-saude',
    title: 'Tratamentos & Saúde Capilar',
    category: 'Recuperação & Nutrição',
    subtitle: 'Protocolos de Recuperação e Cronograma',
    description: 'Tratamentos de alta performance para recuperar cabelos danificados por processos térmicos ou químicos, devolvendo maleabilidade, massa e vitalidade aos fios.',
    features: ['Hidratação profunda', 'Nutrição e reposição lipídica', 'Reconstrução de ligações internas', 'Selagem de cutículas'],
  },
  {
    id: 'escova-redutora',
    title: 'Escova Redutora & Alinhamento',
    category: 'Disciplina & Brilho',
    subtitle: 'Alinhamento dos Fios e Controle de Frizz',
    description: 'Procedimento disciplinante que proporciona controle de volume e eliminação do frizz com acabamento sedoso, mantendo o movimento natural sem aspecto rígido.',
    features: ['Alinhamento suave e uniforme', 'Proteção térmica de longa duração', 'Redução do tempo de secagem em casa', 'Toque macio e sedoso'],
  },
  {
    id: 'lavatorio-experiencia',
    title: 'Experiência de Lavatório',
    category: 'Bem-Estar & Relaxamento',
    subtitle: 'Higienização Terapêutica e Massagem Craniana',
    description: 'Nosso espaço de lavatório foi projetado como um refúgio sensorial: massagem relaxante no couro cabeludo, produtos aromáticos e pausa reconfortante na sua rotina.',
    features: ['Massagem craniana estimulante', 'Água em temperatura ideal', 'Produtos de cuidado profissional', 'Momento de desaceleração total'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: '/images/sigalab_Ddr9DjHO474_01.jpg',
    title: 'Morena Iluminada em Tons Quentes',
    category: 'morenas',
    aspectRatio: 'tall',
    featured: true,
  },
  {
    id: 'gal-2',
    image: '/images/sigalab_Da8s437OR1w_04.jpg',
    title: 'Loiro Dourado Volumoso com Ondas',
    category: 'loiros',
    aspectRatio: 'portrait',
    featured: true,
  },
  {
    id: 'gal-3',
    image: '/images/sigalab_Da1AniUOpB5_01.jpg',
    title: 'Cachos Definidos com Mechas Caramelo',
    category: 'cortes',
    aspectRatio: 'portrait',
    featured: true,
  },
  {
    id: 'gal-4',
    image: '/images/sigalab_DZNpBtEuLpk_01.jpg',
    title: 'Loiro Areia em Movimento Natural',
    category: 'loiros',
    aspectRatio: 'tall',
  },
  {
    id: 'gal-5',
    image: '/images/sigalab_DZvfByhuLdR_01.jpg',
    title: 'Corte em Camadas com Tom Canela',
    category: 'cortes',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-6',
    image: '/images/sigalab_DcLsVeBDjVj_02.jpg',
    title: 'Dimensão e Alinhamento das Mechas',
    category: 'morenas',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-7',
    image: '/images/sigalab_DY74pNXFGWe_02.jpg',
    title: 'Momento de Pausa e Cuidado no Lavatório',
    category: 'cuidado',
    aspectRatio: 'tall',
  },
  {
    id: 'gal-8',
    image: '/images/sigalab_DbRmKgnDiYn_02.jpg',
    title: 'Atendimento Personalizado e Confiança',
    category: 'cuidado',
    aspectRatio: 'portrait',
  },
];

export const VERIFIED_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Amanda Martins',
    badge: 'Local Guide · Google',
    rating: 5,
    date: 'Avaliação confirmada no Google',
    text: 'Profissionais suuuuper simpáticos e atenciosos. Fiz mechas + hidratação + escova redutora e AMEIIII. Mostrei como eu queria e eles fizeram exatamente como mostrei. Desde a 1ª visita até a finalização do pacote, fui bem recebida e tive todas as dúvidas sanadas. Recomendo demais!!!',
    highlight: 'Fizeram exatamente como mostrei',
  },
  {
    id: 'rev-2',
    author: 'Experiência Lab Beauty',
    badge: 'Comunidade @sigalab_',
    rating: 5,
    date: 'Depoimento verificado',
    text: 'Mas nada me deixa tão feliz quanto ter meu cabelo cuidado no LAB Beauty. O cuidado nos detalhes e o carinho com a saúde dos meus fios fazem toda a diferença.',
    highlight: 'Cuidado nos detalhes e saúde dos fios',
  },
  {
    id: 'rev-3',
    author: 'Cuidado & Respeito',
    badge: 'Atendimento Personalizado',
    rating: 5,
    date: 'Depoimento verificado',
    text: 'Somos aquele lugar onde você senta... respira fundo... e desacelera um pouco da correria lá fora. Um atendimento calmo, humano e focado exclusivamente em você.',
    highlight: 'Desacelera um pouco da correria lá fora',
  },
];
