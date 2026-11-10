# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [0.2.0] - 2026-11-10

### 🚀 Adicionado
- **Widget de Reserva para WhatsApp (`BookingWidget`)**: Seletor interativo de datas (Check-in / Check-out) e quantidade de hóspedes (1 a 10 pessoas), gerando mensagens pré-formatadas diretamente para o WhatsApp oficial.
- **Seção de FAQ Interativa (`FaqSection`)**: Acordeom com as 8 principais dúvidas dos hóspedes (horários de check-in/out, exclusividade da piscina com hidromassagem, capacidade, alimentação, regras e itens inclusos).
- **SEO Avançado & Rich Snippets**:
  - Marcação Schema.org estruturada via JSON-LD para `LodgingBusiness` e `FAQPage` (Google Rich Results).
  - Configuração de `metadataBase` para resolução de URLs sociais e OpenGraph.
  - Metatags de geolocalização (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) para a Praia de Barra Grande - PI.
  - Rotas automáticas de SEO nativas do App Router: `/robots.txt` (`app/robots.ts`) e `/sitemap.xml` (`app/sitemap.ts`).
  - Manifesto PWA Web App Manifest (`app/manifest.ts`) permitindo instalação e atalho em dispositivos móveis.
- **Centralização de Configurações (`lib/site-config.ts`)**: Fonte única de verdade para dados institucionais, contatos, telefones, redes sociais, endereço e coordenadas.
- **Fotos e Destaques nas Acomodações**: Inclusão de imagens de pré-visualização, efeitos de zoom no hover e listas de comodidades com ícones nos cards de quartos e áreas comuns.
- **Destaques Rápidos na Seção "Sobre"**: Grid visual de diferenciais (800m da praia, piscina com hidro e LED, ar-condicionado, Wi-Fi fibra e selo 100% privativo).

### ⚡ Performance & Otimização
- **Compressão Extrema de Imagens (-95% de payload)**: Conversão dos prints de depoimentos do WhatsApp e Instagram de PNG para WebP (redução drástica de ~3.2 MB para ~157 KB no total).
- **LCP Otimizado**: Substituição de tags HTML `<img>` nativas nos componentes `HeroSection`, `AboutSection` e `Lightbox` pelo componente `next/image` com atributo `priority` e geração responsiva de tamanhos.
- **Otimização de Imagens Reativada**: Configuração de formatos modernos (`image/avif` e `image/webp`) em `next.config.mjs`.

### 🛠️ Modificado & Corrigido
- **Upgrade do Next.js**: Atualização do framework para a versão estável `15.5.29`.
- **Correção de Divergência de Contatos**: Unificação do número oficial `(86) 9950-5437` e correção do link de discagem telefônica que apontava para outro contato em `contact-section.tsx`.
- **Correção de Tokens no Design System**: Substituição de classes de cores inexistentes (`text-terracotta-600`, `text-wood-700`, `from-cream-50`) em `social-proof-section.tsx` pelas variáveis oficiais do tema costeiro.
- **Flexibilidade em `SectionTitle`**: Componente de título agora estende `HTMLAttributes<HTMLHeadingElement>`, permitindo ancoragem por `id`, atributos ARIA e acessibilidade.
- **Cards de Depoimento Dinâmicos**: Ícones e cores dinâmicas adaptados para diferenciar avaliações do WhatsApp e Instagram.

### 🧹 Removido
- **Poda de Dependências Ociosas**: Remoção de dezenas de pacotes não utilizados herdados de templates (`@radix-ui/react-accordion`, `alert-dialog`, `slider`, `tabs`, `recharts`, `vaul`, `cmdk`, `date-fns`, `input-otp`, `embla-carousel-react`, `vite`, etc.).
- **Limpeza de Arquivos Mortos**:
  - `styles/globals.css` (duplicado do shadcn).
  - `components/theme-provider.tsx` e `loading-spinner.tsx` (sem uso no projeto).
  - `pnpm-lock.yaml` residual.
  - Imagens pesadas em formato PNG substituídas por WebP.

---

## [0.1.0] - 2026-08-18

### 🚀 Adicionado
- Versão inicial da landing page do Ricca Ville Chalé em Next.js e Tailwind CSS.
- Seções de apresentação, acomodações, regras, galeria com lightbox, mapa integrado e rodapé.
