import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Project } from '../../types';

/**
 * Lista completa de projetos do portfólio
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'DataCoreHS',
    description:
      'Atuei no front-end construindo dashboards e telas de análise financeira, com componentes reutilizáveis e integração com APIs.',
    image: '/projects/datacore.png',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    featured: true,
  },
  {
    id: '2',
    title: 'ChamadosHS',
    description:
      'Desenvolvimento do front-end da plataforma de chamados, com foco em UX, priorização visual e acompanhamento em tempo real.',
    image: '/projects/chamados.png',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    id: '3',
    title: 'ControlHS',
    description:
      'Criação de interfaces para controle patrimonial, filtros avançados, histórico de movimentações e relatórios visuais.',
    image: '/projects/control.png',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Python'],
  },
  {
    id: '4',
    title: 'HealthScore',
    description:
      'Atuação no front-end da plataforma de treinamento com IA, entregando uma UI responsiva e integração com dados de desempenho.',
    image: '/projects/healthscore.png',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    featured: true,
  },
  {
    id: '5',
    title: 'Automações n8n & Python',
    description:
      'Participação no front-end de fluxos e painéis de automação, conectando sistemas e trazendo clareza aos processos.',
    image: '/projects/automacoes.png',
    tags: ['Python', 'n8n', 'API Integration', 'Automation'],
  },
  {
    id: '6',
    title: 'Comprai',
    description:
      'Front-end para gestão de promoções e monitoramento de preços, com integrações e visualizações para tomada de decisão.',
    image: '/projects/comprai.png',
    tags: ['Python', 'Selenium', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: '7',
    title: 'EBSoftware',
    description:
      'Desenvolvimento da interface desktop para testes automatizados, priorizando usabilidade e fluxo de operação.',
    image: '/projects/ebsoftware.png',
    tags: ['Python', 'PyQt', 'Serial Communication', 'SQLite'],
  },
  {
    id: '8',
    title: 'HealthApp',
    description:
      'Participação no design e implementação de telas mobile, com foco em usabilidade e integração Bluetooth.',
    image: '/projects/healthapp.png',
    tags: ['React Native', 'TypeScript', 'Bluetooth', 'SQLite'],
  },
  {
    id: '9',
    title: 'Suporte WhatsApp IA',
    description:
      'Criação de telas e painéis para atendimento automatizado, histórico de conversas e monitoramento de métricas.',
    image: '/projects/suporte-whatsapp.png',
    tags: ['Python', 'FastAPI', 'OpenAI', 'WhatsApp API'],
  },
  {
    id: '10',
    title: 'GranaIA',
    description:
      'Front-end do assistente financeiro via WhatsApp, com foco em experiência do usuário e insights visuais.',
    image: '/projects/granaia.png',
    tags: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
    featured: true,
  },
];

export const Projects = () => {
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.1 });

  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const isMobile = window.innerWidth < 768;
      const nextPerPage = isMobile ? 1 : 3;
      setProjectsPerPage(nextPerPage);
      setCurrentPage(0);
    };

    updateProjectsPerPage();
    window.addEventListener('resize', updateProjectsPerPage);

    return () => window.removeEventListener('resize', updateProjectsPerPage);
  }, []);

  // Estado para controlar o modal de imagem
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Projetos da página atual
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  // Preenche com cards "Em breve" se necessário
  const emptySlots = projectsPerPage - currentProjects.length;

  // Auto carousel - advances every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        // If at last page, wrap to first
        if (prev === totalPages - 1) {
          return 0;
        }
        // Otherwise move forward
        return prev + 1;
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [totalPages, isAutoPlay]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handlePageSelect = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setIsAutoPlay(false);

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 10000);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Meus </span>
            <span className="heading-gradient">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projetos reais */}
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-gray-800"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div
                  className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                      Destaque
                    </div>
                  )}
                  {/* Ícone de zoom ao passar o mouse */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>Código</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Cards "Em breve" para preencher slots vazios */}
            {Array.from({ length: emptySlots }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-700"
                style={{ transitionDelay: `${(currentProjects.length + index) * 100}ms` }}
              >
                {/* Área da imagem - mesmo tamanho dos projetos reais */}
                <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-gray-800/50 border-b-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-6xl">+</div>
                </div>

                {/* Área de informações - mesmo padding dos projetos reais */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-600 mb-3">
                    Em breve
                  </h3>
                  <p className="text-gray-400 dark:text-gray-600 mb-4">
                    Novos projetos em desenvolvimento
                  </p>

                  {/* Espaço para manter a mesma altura */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0">
                    <span className="px-3 py-1 text-sm">.</span>
                  </div>
                  <div className="flex gap-4 opacity-0">
                    <span>.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paginação com bolinhas */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageSelect(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? 'w-3 h-3 bg-primary-600'
                    : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Modal de Imagem */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full">
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Imagem */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Título */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};










