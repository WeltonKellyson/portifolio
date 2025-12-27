# Portfolio - Welton Kellyson

Portfolio pessoal de Welton Kellyson, Desenvolvedor Front-end.

## Sobre

Portfolio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS, apresentando meus projetos, habilidades e experiência profissional.

## Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **React Hooks** - useState, useEffect, useRef customizados

## Funcionalidades

- Design responsivo (mobile, tablet, desktop)
- Dark mode com persistência no localStorage
- Animações suaves de scroll reveal
- Scroll suave entre seções
- Contador automático de anos de experiência
- Contador dinâmico de tecnologias e projetos
- Meta tags completas para SEO
- Structured Data (Schema.org) para melhor indexação

## Estrutura do Projeto

```
portifolio/
- public/
  - favicon.svg           # Favicon customizado
  - projects/             # Imagens dos projetos
- src/
  - assets/               # Imagens e recursos
  - components/           # Componentes React
    - Header/
    - Hero/
    - About/
    - Skills/
    - Projects/
    - Contact/
    - Footer/
  - contexts/             # Contextos React (ThemeContext)
  - hooks/                # Custom hooks (useScrollReveal)
  - types/                # Definições TypeScript
  - App.tsx               # Componente principal
  - main.tsx              # Entry point
  - index.css             # Estilos globais
- index.html
- tailwind.config.js
- tsconfig.json
- package.json
```

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/WeltonKellyson/portifolio.git
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o ESLint

## Build para Produção

Para gerar a build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Personalização

### Adicionar Novos Projetos

Edite o arquivo `src/components/Projects/Projects.tsx` e adicione objetos ao array `projects`:

```typescript
{
  id: 'unique-id',
  title: 'Nome do Projeto',
  description: 'Descrição do projeto...',
  image: '/projects/imagem.png',
  tags: ['React', 'TypeScript', 'etc'],
  github: 'https://github.com/...',
  live: 'https://...',
  featured: true
}
```

### Adicionar Novas Skills

Edite o arquivo `src/components/Skills/Skills.tsx` e adicione ao array `skills`:

```typescript
{ name: 'Nome da Tecnologia', category: 'frontend' | 'backend' | 'tools' }
```

### Alterar Cores

As cores principais podem ser alteradas em `tailwind.config.js` na seção `theme.extend.colors.primary`.

## Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

### Deploy na Vercel

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure o projeto:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

## Contato

- **Email**: weltonkellysonoficial@gmail.com
- **LinkedIn**: [linkedin.com/in/weltonkellyson](https://www.linkedin.com/in/weltonkellyson/)
- **GitHub**: [github.com/WeltonKellyson](https://github.com/WeltonKellyson)

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

Desenvolvido com carinho por [Welton Kellyson](https://github.com/WeltonKellyson)
