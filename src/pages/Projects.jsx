import Header from '../components/Header'
import Footer from '../components/Footer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      image: '/Images/neurofocus.png',
      title: 'NeuroFocus',
      description:
        'A productivity dashboard created using HTML, Tailwind CSS, JS, and Bootstrap.',
      tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://neurofocuss.netlify.app/',
      githubUrl: 'https://github.com/RupeshVerma28/NeuroFocus.git',
      color: 'purple',
    },
    {
      image: '/Images/pinshelf.png',
      title: 'PinShelf',
      description:
        'A smart link manager that manages your important links.',
      tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://pinshelf.netlify.app/',
      githubUrl: '',
      color: 'pink',
    },
    {
      image: '/Images/multitool.png',
      title: 'Multitool',
      description:
        'A collection of multiple productivity tools. Tech used: REACT, Tailwind CSS, Bootstrap.',
      tags: ['REACT', 'Tailwind CSS', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'teal',
    },
    {
      image: '/Images/pro3.png',
      title: 'ScanReady-CV',
      description:
        'An ATS-friendly CV builder with pre-filled data and downloadable PDF functionality.',
      tags: ['React', 'Tailwind CSS', 'html 2 pdf'],
      liveUrl: 'https://scanready-cv.netlify.app/',
      githubUrl: '#',
      color: 'sky',
    },
    {
      image: '/Images/IET.png',
      title: 'IncomeExpense-Watch',
      description:
        'Track your income and expenses with graphical representation and printable receipts.',
      tags: ['React', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://incomexpense-watch.netlify.app/',
      githubUrl: '#',
      color: 'indigo',
    },
    {
      image: '/Images/snapinvoice.png',
      title: 'snapinvoice',
      description:
        'A Quick Professional Invoice Generator With GST calculator .',
      tags: ['React', 'Tailwind CSS', 'html 2 pdf'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/skillaudify.png',
      title: 'SkillAudify',
      description:
        'Audio-based learning platform designed using HTML, CSS, and JavaScript.',
      tags: ['React', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'amber',
    },
    {
      image: '/Images/V-card.png',
      title: 'V-Card',
      description: 'An Digital Version Of the Business Card .',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://vcard-rupeshverma.netlify.app/',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/phone info.png',
      title: 'PhoneINFO Gather',
      description: 'Phone number Information Gathering Tool;.',
      tags: ['Python', 'Tkinter'],
      liveUrl: '',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/Filescanner.png',
      title: 'File Scanner',
      description: 'A File Scanner that check the file for the virus',
      tags: ['Python', 'customtkinter', 'eportlab.pdfgen', 'mimetypes'],
      liveUrl: '',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/SSl Certi check.png',
      title: 'SSL Certificate Checker',
      description: 'An simple and Usefull website SSL Certificate Checker.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/GithubProfileViewer.png',
      title: 'Github Github Profile Viewer',
      description:
        'An simple Github profile Viewer that provide information about user .',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/obj shape detector .png',
      title: 'Object Shape detector',
      description:
        'An simple GUI Based Program That detect the object shape.',
      tags: ['Python', 'customtkinter', 'Numpy', 'OpenCV'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/dis measure .png',
      title: 'Object Distance measure',
      description:
        'A GUI Base Powerfull Program that Measure the Distance Between Two Object .',
      tags: ['Python', 'customtkinter', 'Numpy', 'OpenCV'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'emerald',
    },
    {
      image: '/Images/whatsaap massage sender .png',
      title: 'Automatic massage Sender',
      description:
        'Send the Business Massages Automatically On the Sheduled Time .',
      tags: ['Python', 'customtkinter', 'pywhatkit'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'emerald',
    },
  ]

  const colorClasses = {
    purple: {
      bg: 'bg-purple-900/50',
      text: 'text-purple-300',
      link: 'text-purple-400 hover:text-purple-300',
    },
    pink: {
      bg: 'bg-pink-900/50',
      text: 'text-pink-300',
      link: 'text-pink-400 hover:text-pink-300',
    },
    teal: {
      bg: 'bg-teal-900/50',
      text: 'text-teal-300',
      link: 'text-teal-400 hover:text-teal-300',
    },
    sky: {
      bg: 'bg-sky-900/50',
      text: 'text-sky-300',
      link: 'text-sky-400 hover:text-sky-300',
    },
    indigo: {
      bg: 'bg-indigo-900/50',
      text: 'text-indigo-300',
      link: 'text-indigo-400 hover:text-indigo-300',
    },
    emerald: {
      bg: 'bg-emerald-900/50',
      text: 'text-emerald-300',
      link: 'text-emerald-400 hover:text-emerald-300',
    },
    amber: {
      bg: 'bg-amber-900/50',
      text: 'text-amber-300',
      link: 'text-amber-400 hover:text-amber-300',
    },
  }

  return (
    <>
      <Header />
      <main>
        <section id="work" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">All Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12">
              A collection of my work, showcasing my skills in development,
              design, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const classes = colorClasses[project.color] || colorClasses.emerald
              return (
                <div key={idx} className="card rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src =
                        'https://placehold.co/600x400/171717/a855f7?text=Project+Image'
                    }}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`${classes.bg} ${classes.text} text-xs font-semibold px-2.5 py-1 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${classes.link} font-semibold flex items-center gap-2`}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-300 font-semibold flex items-center gap-2"
                        >
                          <Github size={16} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Projects

