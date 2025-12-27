import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Skill } from '../../types';

// Lista de todas as skills/tecnologias
const skills: Skill[] = [
  // Front-end
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },

  // Back-end
  { name: 'Node.js', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  // Ferramentas & Automação
  { name: 'Git', category: 'tools' },
  { name: 'n8n', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'npm', category: 'tools' },
  { name: 'Prettier', category: 'tools' },
  { name: 'Claude AI', category: 'tools' },
  { name: 'ChatGPT', category: 'tools' },
];

// Labels para cada categoria em português
const categoryLabels = {
  frontend: 'Front-end',
  backend: 'Back-end',
  tools: 'Ferramentas & Automação',
};

// Exporta o total de skills para uso em outros componentes
export const totalSkills = skills.length;

// Cores de gradiente para cada categoria
const categoryColors = {
  frontend: 'from-primary-500 to-fuchsia-500',
  backend: 'from-violet-600 to-indigo-500',
  tools: 'from-slate-500 to-gray-600',
};

export const Skills = () => {
  const categories = ['frontend', 'backend', 'tools'] as const;
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.1 });

  // Número máximo de skills visíveis por categoria
  const MAX_VISIBLE_SKILLS = 5;

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Minhas </span>
            <span className="heading-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="max-w-6xl mx-auto scroll-reveal-scale">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const categorySkills = skills.filter((s) => s.category === category);
              const visibleSkills = categorySkills.slice(0, MAX_VISIBLE_SKILLS);
              const remainingCount = categorySkills.length - MAX_VISIBLE_SKILLS;

              return (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-800 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Category Header */}
                  <div className="mb-6">
                    <div
                      className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${categoryColors[category]} text-white text-sm font-semibold mb-2`}
                    >
                      {categoryLabels[category]}
                    </div>
                    <div
                      className={`h-1 w-12 bg-gradient-to-r ${categoryColors[category]} rounded-full`}
                    ></div>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {visibleSkills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-medium">{skill.name}</span>
                      </li>
                    ))}

                    {/* Indicador de mais skills */}
                    {remainingCount > 0 && (
                      <li className="flex items-center text-gray-500 dark:text-gray-500 italic pt-2">
                        <svg
                          className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <span className="text-sm">+{remainingCount} mais</span>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Sempre aprendendo e explorando novas tecnologias
          </p>
        </div>
      </div>
    </section>
  );
};

