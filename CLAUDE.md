# CLAUDE.md — Portfólio Welton Kellyson

Este arquivo documenta o projeto para orientar o Claude Code em qualquer ajuste futuro.
Sempre consulte este arquivo antes de propor ou aplicar mudanças.

---

## Visão Geral

Portfólio pessoal de **Welton Kellyson** — Desenvolvedor Front-end.
Single-page application com navegação por âncoras e scroll suave.
Site fixado em **dark mode** por decisão de design.

**Stack:**
- React 19 + TypeScript
- Tailwind CSS 3 (com tema customizado)
- Vite 7 (bundler)
- Sem biblioteca de UI externa — tudo custom

**URL de produção:** `https://weltonkellyson.com.br`

---

## Estrutura de Pastas

```
portifolio/
├── public/
│   ├── favicon.ico
│   └── projects/           # Screenshots dos projetos (10 imagens .png)
├── src/
│   ├── assets/             # Imagens locais (avatar.jpeg, profile.jpeg)
│   ├── components/
│   │   ├── About/          # Seção "Sobre Mim" com stats dinâmicos
│   │   ├── Contact/        # Seção de contato com links sociais
│   │   ├── Footer/         # Rodapé com quick links e redes sociais
│   │   ├── Header/         # Navbar fixa com scroll detection e menu mobile
│   │   ├── Hero/           # Seção principal com animação de circuito SVG
│   │   ├── Projects/       # Carrossel de projetos com modal de imagem
│   │   └── Skills/         # Skills agrupadas por categoria (3 colunas)
│   ├── contexts/
│   │   └── ThemeContext.tsx # Contexto de tema (fixado em dark, ver notas)
│   ├── hooks/
│   │   ├── useScrollReveal.ts   # IntersectionObserver para animar ao scrollar
│   │   └── useTypingEffect.ts   # Efeito de digitação do nome no Hero
│   ├── types/
│   │   └── index.ts        # Interfaces: Project, Skill, SocialLink, NavItem
│   ├── App.tsx             # Composição das seções em ordem
│   ├── index.css           # Estilos globais, scroll-reveal, circuit animation
│   └── main.tsx            # Entry point — envolve App com ThemeProvider
├── index.html              # SEO completo: meta tags, OG, Twitter, Schema.org
├── tailwind.config.js      # Tema: cor primary (violet), fontes Inter/Fira Code, animações
└── package.json
```

---

## Seções da Página (em ordem)

| Componente   | Âncora       | Descrição                                             |
|--------------|--------------|-------------------------------------------------------|
| `Header`     | —            | Navbar fixa, transparente no topo, glassmorphism ao scrollar |
| `Hero`       | `#home`      | Nome com typing effect, circuit SVG animado no fundo  |
| `About`      | `#about`     | Foto + texto + stats (projetos, tecnologias, anos)    |
| `Skills`     | `#skills`    | 3 cards: Front-end / Back-end / Ferramentas           |
| `Projects`   | `#projects`  | Carrossel com 10 projetos, 3/página desktop, modal    |
| `Contact`    | `#contact`   | Card com GitHub, LinkedIn, Email                      |
| `Footer`     | —            | Rodapé com quick links e redes sociais                |

---

## Dados — Onde Ficam

Os dados do portfólio estão **embutidos nos próprios componentes** (não em arquivos separados):

| Dado                    | Arquivo                                  |
|-------------------------|------------------------------------------|
| Lista de projetos       | `src/components/Projects/Projects.tsx`   |
| Lista de skills         | `src/components/Skills/Skills.tsx`       |
| Links sociais           | `src/components/Contact/Contact.tsx`     |
| Itens do menu           | `src/components/Header/Header.tsx`       |
| Links redes no footer   | `src/components/Footer/Footer.tsx`       |

**Para adicionar/editar projetos:** editar o array `projects` em `Projects.tsx`.
**Para adicionar/editar skills:** editar o array `skills` em `Skills.tsx`.

---

## Tema e Cores

O site usa **apenas dark mode** — a classe `dark` é aplicada no `<html>` pelo `ThemeContext`.
O toggle de tema existe no contexto mas não faz nada (`toggleTheme` é função vazia).

**Paleta principal (`primary` = violet):**
```
primary-400: #a78bfa  ← destaques claros no dark
primary-500: #8b5cf6
primary-600: #7c3aed  ← cor principal de botões e acentos
primary-700: #6d28d9
```

**Gradiente de heading:** `from-primary-600 to-fuchsia-500` → classe `.heading-gradient`

**Fontes:**
- `Inter` — sans-serif padrão (textos, UI)
- `Fira Code` — monospace (nome no Hero)

---

## Animações

### CSS (index.css)
- `.scroll-reveal` — fade + translateY (bottom → top)
- `.scroll-reveal-left` — fade + translateX (esquerda)
- `.scroll-reveal-right` — fade + translateX (direita)
- `.scroll-reveal-scale` — fade + scale(0.9 → 1)
- Todas ativadas com a classe `.is-visible` (adicionada pelo hook)

### Tailwind (tailwind.config.js)
- `animate-fade-in`, `animate-fade-in-up`, `animate-fade-in-down`
- `animate-slide-in-left`, `animate-slide-in-right`
- `animate-scale-in`, `animate-blob`, `animate-float`, `animate-pulse-slow`
- Delays: `.animation-delay-200/400/600/2000/4000`

### Circuit SVG (Hero)
- Caminhos SVG animados com `stroke-dashoffset` (efeito de "sinal elétrico")
- Nós pulsantes com scale animation
- Definidos em `.hero-circuit`, `.circuit-path`, `.circuit-node` no CSS

### Hooks
- `useScrollReveal` — usa `IntersectionObserver`, adiciona `.is-visible` ao elemento
- `useTypingEffect` — digita o nome letra a letra no Hero (loop = false, sem apagar)

---

## Classes Utilitárias Customizadas

| Classe             | Uso                                             |
|--------------------|-------------------------------------------------|
| `.container-custom`| `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`       |
| `.section-padding` | `py-16 md:py-24`                                |
| `.heading-gradient`| Texto com gradiente violet → fuchsia            |
| `.hero-title-glow` | Brilho radial atrás do título no Hero           |

---

## Problemas Conhecidos / Pontos de Melhoria

### Alta prioridade
1. **`og-image.png` não existe** — O `index.html` referencia `/og-image.png` nas meta tags OG e Twitter, mas o arquivo não está em `/public`. Criar ou adicionar a imagem para redes sociais funcionarem corretamente.

2. **Acoplamento entre componentes** — `About.tsx` importa `totalSkills` de `Skills.tsx` e `projects` de `Projects.tsx`. Se quiser desacoplar, mover os dados para `src/data/projects.ts` e `src/data/skills.ts`.

3. **Footer quick links com âncoras erradas** — O Footer mapeia `['Home', 'Sobre', 'Skills', 'Projetos', 'Contato']` com `.toLowerCase()` gerando `#sobre`, `#projetos`, `#contato` — mas os IDs reais nas seções são `#about`, `#projects`, `#contact`. Os links do footer não funcionam para essas seções.

### Média prioridade
4. **SVG de ícones duplicados** — GitHub, LinkedIn e Email SVG estão copiados em `Contact.tsx` e `Footer.tsx`. Extrair para um componente `<Icon name="github" />` eliminaria duplicação.

5. **`ThemeContext` é dead code funcional** — O contexto está estruturado para suportar toggle, mas o site é fixo em dark. Ou simplificar removendo o contexto e aplicar a classe `dark` diretamente no `index.html`, ou implementar o toggle de verdade.

6. **`Skill.icon` nunca renderizado** — O tipo `Skill` tem campo `icon?: string`, mas nenhum componente o usa. Considerar adicionar ícones reais (ex: Devicons) ou remover o campo do tipo.

### Baixa prioridade
7. **`prefers-reduced-motion` não implementado** — Muitas animações mas sem respeitar a preferência do sistema. Adicionar `@media (prefers-reduced-motion: reduce)` no CSS para desativar animações.

8. **Linhas em branco em `Projects.tsx`** — O fim do arquivo tem ~10 linhas vazias desnecessárias (linhas 393–402).

9. **ThemeProvider sem uso real** — Existe no contexto mas poderia ser simplificado dado que o tema não muda.

---

## Como Adicionar um Projeto

Editar o array `projects` em [src/components/Projects/Projects.tsx](src/components/Projects/Projects.tsx):

```ts
{
  id: '11',                          // próximo ID sequencial
  title: 'Nome do Projeto',
  description: 'Descrição do que foi feito no front-end.',
  image: '/projects/nome-arquivo.png', // adicionar imagem em /public/projects/
  tags: ['React', 'TypeScript'],
  github: 'https://github.com/...',  // opcional
  live: 'https://...',               // opcional
  featured: true,                    // opcional — badge "Destaque"
}
```

---

## Como Rodar Localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de produção
npm run preview   # preview do build
npm run lint      # ESLint
```

---

## Informações de Contato (do portfólio)

- **Email:** weltonkellysonoficial@gmail.com
- **GitHub:** https://github.com/WeltonKellyson
- **LinkedIn:** https://www.linkedin.com/in/weltonkellyson/
- **Site:** https://weltonkellyson.com.br
