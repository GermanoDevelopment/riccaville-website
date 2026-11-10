export const siteConfig = {
  name: "Ricca Ville Chalé",
  legalName: "Grupo RICCA CASUAL LTDA",
  cnpj: "25.463.257/0001-00",
  description:
    "Viva dias inesquecíveis em nossa casa de temporada na Praia de Barra Grande - Piauí. Piscina com hidromassagem, área gourmet e muito mais a apenas 800m do mar.",
  url: "https://riccavillechale.com",
  ogImage: "/images/chale-vista-aerea.jpg",

  contact: {
    phoneFormatted: "(86) 9950-5437",
    phoneDigits: "8699505437",
    whatsappUrl: "https://wa.me/558699505437?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20reservas%20no%20Ricca%20Ville%20Chal%C3%A9.",
    phoneUrl: "tel:+558699505437",
    email: "casualricca@gmail.com",
    emailUrl: "mailto:casualricca@gmail.com",
    instagram: "@riccacasual",
    instagramUrl: "https://instagram.com/riccacasual",
  },

  location: {
    destination: "Praia de Barra Grande, Piauí - Brasil",
    distanceToBeach: "800m da praia",
    parkingCapacity: "Estacionamento para 5 carros",
    headquartersAddress: "Rua Landri Sales, 10a - Centro, Esperantina - PI, 64.180-000",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.661779852347!2d-41.40113742585912!3d-2.9133124970630777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec0569c462e513%3A0xfc3b099691ea8be!2sChal%C3%A9%20Ricca%20Ville-%20Barra%20Grande%20PI!5e0!3m2!1spt-BR!2sbr!4v1755452664895!5m2!1spt-BR!2sbr",
    geo: {
      latitude: -2.9133125,
      longitude: -41.4011374,
    },
  },

  navLinks: [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#area-lazer", label: "Área de Lazer" },
    { href: "#galeria", label: "Galeria" },
    { href: "#regras", label: "Regras" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contato" },
  ],

  faq: [
    {
      question: "A piscina com hidromassagem é de uso exclusivo?",
      answer: "Sim! A piscina com hidromassagem e iluminação em LED é 100% privativa para o seu grupo durante todo o período da hospedagem.",
    },
    {
      question: "Qual o horário de check-in e check-out?",
      answer: "O check-in inicia às 14h e o check-out é realizado até as 11h. A entrega e a vistoria das chaves são feitas no local pelo nosso caseiro.",
    },
    {
      question: "Quantas pessoas a propriedade acomoda?",
      answer: "Acomodamos com conforto até 10 pessoas (incluindo crianças), distribuídas em quarto térreo triplo climatizado, mezanino triplo climatizado e espaço avarandado para redes de dormir.",
    },
    {
      question: "O que está incluso na hospedagem?",
      answer: "Entregamos a casa limpa e preparada, piscina tratada, roupas de cama trocadas, Wi-Fi fibra óptica de alta velocidade e cozinha equipada. Recomendamos trazer seus itens de higiene pessoal e suas redes favoritas.",
    },
    {
      question: "Como funciona o uso da cozinha e da área gourmet?",
      answer: "O preparo de café da manhã pode ser realizado na cozinha interna. Para almoço e jantar, dispomos de uma área gourmet externa completa e ventilada, com churrasqueira, fogão a lenha e mesas para refeições ao ar livre.",
    },
    {
      question: "Qual a distância até a Praia de Barra Grande?",
      answer: "O chalé fica a aproximadamente 800 metros da praia — uma caminhada calma e tranquila de poucos minutos, com acesso fácil aos principais restaurantes e points de kitesurf.",
    },
    {
      question: "Aceita animais de estimação (pets)?",
      answer: "Para preservar o padrão de higienização e conforto de todos os hóspedes, não é permitida a entrada de animais de estimação.",
    },
    {
      question: "Como funciona o pagamento e confirmação da reserva?",
      answer: "A reserva é confirmada mediante o pagamento de 50% do valor total acordado, e o saldo restante é quitado conforme as condições combinadas diretamente pelo WhatsApp.",
    },
  ],
}

/**
 * Gera o link direto de WhatsApp com mensagem personalizada para reserva
 */
export function buildWhatsAppBookingUrl(params?: {
  checkIn?: string
  checkOut?: string
  guests?: number | string
}): string {
  const phone = siteConfig.contact.phoneDigits
  if (!params || (!params.checkIn && !params.checkOut && !params.guests)) {
    return siteConfig.contact.whatsappUrl
  }

  let text = "Olá! Gostaria de consultar a disponibilidade no Ricca Ville Chalé"
  if (params.guests) {
    text += ` para ${params.guests} pessoas`
  }
  if (params.checkIn && params.checkOut) {
    text += `, com entrada em ${params.checkIn} e saída em ${params.checkOut}`
  } else if (params.checkIn) {
    text += `, para a data de ${params.checkIn}`
  }
  text += ". Poderiam me passar os valores e informações?"

  return `https://wa.me/55${phone}?text=${encodeURIComponent(text)}`
}
