import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  onNavigate?: (page: string) => void;
}

const Projects = ({ }: ProjectsProps) => {
  // Track card mana yang deskripsinya di-expand
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'HiSocial Digital Solution',
      description: 'Performed manual testing on HiSocial web using test cases documented in spreadsheets. Executed functional, UI, and usability tests. Reported bugs and collaborated with developers for resolution.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Google Sheet', 'Chrome', 'Manual Testing', 'Test Cases'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed' as const,
    },
    {
      title: 'Gajihub - HRIS System',
      description: 'Conducted manual testing on the Gajihub website and mobile application based on structured test cases documented in spreadsheets. Performed functional, UI, and usability validations, and reported identified defects while working closely with developers to resolve issues.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Google Sheet', 'Chrome', 'Manual Testing', 'Test Cases'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed' as const,
    },
    {
      title: 'Dummy JSON API',
      description: 'Executed API testing on DummyJSON to verify data accuracy, response structure, and endpoint performance. Designed test cases for various resources such as products and users, validating request parameters, response payloads, and error scenarios.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Postman', 'API Testing', 'Test Cases', 'JSON'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'ongoing' as const,
    },
    {
      title: 'Restful-API Testing',
      description: 'Performed comprehensive API testing on multiple RESTful APIs using Postman and Newman. Validated endpoint responses, error handling, and data integrity across various HTTP methods.',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Postman', 'API Testing', 'RESTful API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'ongoing' as const,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen bg-linear-to-b from-black to-gray-900 py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-150 overflow-y-auto pr-4 custom-scrollbar">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const isCompleted = project.status === 'completed';

            return (
              <div
                key={index}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-green-500/20 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20"
              >
                {/* Image + Status Badge */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-60" />

                  {/* Status badge — pojok kanan atas */}
                  <div className={`
                    absolute top-3 right-3 flex items-center gap-1.5
                    px-2.5 py-1 rounded-full text-xs font-semibold
                    backdrop-blur-sm border
                    ${isCompleted
                      ? 'bg-green-500/20 border-green-400/60 text-green-300'
                      : 'bg-gray-500/30 border-gray-400/50 text-gray-300'
                    }
                  `}>
                    {/* Dot indikator */}
                    <span className={`
                      w-1.5 h-1.5 rounded-full
                      ${isCompleted ? 'bg-green-400 shadow-[0_0_6px_#4ade80]' : 'bg-gray-400'}
                    `} />
                    {isCompleted ? 'Completed' : 'On Going'}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description — expandable */}
                  <div className="mb-1">
                    <p className={`text-gray-400 text-sm ${isExpanded ? '' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>

                    {/* Tombol expand/collapse — hanya muncul jika teks panjang */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-1 flex items-center gap-0.5 text-xs text-green-400/70 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={13} />
                          <span>Show less</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={13} />
                          <span>Read more</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded border border-green-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;