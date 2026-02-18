import { Code, Briefcase, GraduationCap, Award, BadgeCheck, CalendarDays, Building2 } from "lucide-react";

interface ResumeProps {
  onNavigate?: (page: string) => void;
}

const Resume = ({}: ResumeProps) => {
  const skills = [
    "React", "TypeScript", "Laravel", "PHP", "PostgreSQL", "Tailwind CSS", "Git", "Pytest", "Selenium", "Postman", "API Testing", "Manual Testing", "Test Cases"
  ];

  const experiences = [
    {
      title: "Software Quality Assurance",
      company: "PT Talenta Sinergi Group",
      period: "2023 - 2024",
      description: "Ensured software quality through structured testing, workflow automation (Pytest & Selenium), and effective defect tracking using Git.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Ahmad Dahlan University",
      period: "2020 - 2024",
      description: "Focus on Web Development, Software Testing, and Networking. Graduated with honors.",
    },
  ];

  const certificates = [
    {
      name: "MySKill Certified Software Quality Assurance",
      issuer: "MySKill",
      period: "2026 - Present",
      description: "Professional level certification for software quality assurance practices.",
      link: "https://drive.google.com/your-link-here",
    },
  ];

  return (
    <section id="resume" className="min-h-screen bg-black py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-green-400">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Experience & Education — 2 kolom */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Briefcase className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-green-400 pl-6 pb-6 relative hover:border-green-300 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full" />
                  <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                  <p className="text-green-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <GraduationCap className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-green-400 pl-6 pb-6 relative hover:border-green-300 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full" />
                  <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-green-400 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates — horizontal full-width cards */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <Award className="text-green-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Certificates</h3>
          </div>

          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-green-500/5 border border-green-400/20 hover:border-green-400/60 hover:bg-green-500/10 rounded-xl px-6 py-5 transition-all duration-300"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-green-400 rounded-l-xl opacity-60 group-hover:opacity-100 transition-opacity" />

                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-center gap-4">
                  {/* Icon badge — clickable link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Lihat Sertifikat"
                    className="shrink-0 w-11 h-11 bg-green-500/15 border border-green-400/30 rounded-xl flex items-center justify-center hover:bg-green-500/35 hover:border-green-400/70 transition-colors cursor-pointer mt-0.5"
                  >
                    <BadgeCheck className="text-green-400" size={22} />
                  </a>

                  {/* Content + meta */}
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    {/* Judul & deskripsi */}
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold text-white mb-1 leading-snug">{cert.name}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                    </div>

                    {/* Meta: mobile = row wrap, desktop = column kanan */}
                    <div className="shrink-0 flex flex-row flex-wrap sm:flex-col sm:text-right gap-x-4 gap-y-1">
                      <div className="flex items-center sm:justify-end gap-1.5 text-green-400 text-sm font-medium">
                        <Building2 size={13} />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5 text-gray-400 text-xs">
                        <CalendarDays size={12} />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <Code className="text-green-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Download CV */}
        {/* <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50"
          >
            <Award size={20} />
            Download CV
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;