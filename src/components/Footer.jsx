import { Youtube, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rupesh Verma. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@techtruth4u"
              className="text-slate-400 transition-colors footer-icon youtube-icon"
            >
              <Youtube size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RupeshVerma28"
              className="text-slate-400 transition-colors footer-icon github-icon"
            >
              <Github size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rupeshverma28/"
              className="text-slate-400 transition-colors footer-icon linkedin-icon"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

