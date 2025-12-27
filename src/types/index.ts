/**
 * Definições de tipos para os componentes do portfólio
 */

// Representa um projeto do portfólio
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string; // URL do repositório no GitHub
  live?: string; // URL da demo/aplicação
  featured?: boolean; // Se é um projeto em destaque
}

// Representa uma skill/tecnologia
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string; // Nome do ícone (se usar biblioteca de ícones)
}

// Representa um link de rede social
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Nome do ícone para renderização
}

// Representa um item do menu de navegação
export interface NavItem {
  label: string;
  href: string; // Âncora da seção (#home, #about, etc)
}
