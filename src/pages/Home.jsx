import { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Send } from 'lucide-react'

console.log('Home component is loading...')

const Home = () => {
  const [typingText, setTypingText] = useState('')
  const words = ['Full Stack Developer', 'UI/UX Designer']
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
  })

  useEffect(() => {
    console.log('Home component mounted')
    let timeoutId
    
    const type = () => {
      const state = stateRef.current
      const currentWord = words[state.wordIndex]
      let displayedText

      if (state.isDeleting) {
        displayedText = currentWord.substring(0, state.charIndex - 1)
        state.charIndex--
      } else {
        displayedText = currentWord.substring(0, state.charIndex + 1)
        state.charIndex++
      }

      setTypingText(displayedText)

      let typeSpeed = state.isDeleting ? 75 : 150

      if (!state.isDeleting && displayedText === currentWord) {
        typeSpeed = 2000
        state.isDeleting = true
      } else if (state.isDeleting && displayedText === '') {
        state.isDeleting = false
        state.wordIndex = (state.wordIndex + 1) % words.length
        state.charIndex = 0
        typeSpeed = 500
      }

      timeoutId = setTimeout(type, typeSpeed)
    }

    timeoutId = setTimeout(type, 150)
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(
      '.card, section h1, section h2, section p, section div.grid > div'
    )
    elements.forEach((el) => {
      el.style.opacity = '0'
      el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out'
      el.style.transform = 'translateY(20px)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        const successMessage = document.getElementById('form-success-message')
        if (successMessage) {
          successMessage.classList.remove('hidden')
          form.reset()
          setTimeout(() => {
            successMessage.classList.add('hidden')
          }, 5000)
        }
      } else {
        alert('Oops! There was a problem submitting your form')
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form')
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section
          id="home"
          className="container mx-auto px-4 py-16 md:py-24 text-center"
        >
          <div className="flex flex-col items-center">
            <img
              src="/Images/propic.png"
              onError={(e) => {
                e.target.onerror = null
                e.target.src =
                  'https://placehold.co/160x160/171717/E2E8F0?text=RV'
              }}
              alt="Profile Picture of Rupesh Verma"
              className="w-40 h-40 rounded-full border-4 border-neutral-800 shadow-lg mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-slate-100">Hi It's Me Rupesh Verma</span>
              <br />
              <span className="text-slate-100">a </span>
              <span className="gradient-text">{typingText}</span>
              <span className="typing-cursor"></span>
              <br />
              <span className="tagline-gradient">"Code, Create, Innovate"</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
              Building the future with every line of code. Passionate about
              creating elegant, efficient, and user-friendly web experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#work"
                className="bg-neutral-800 text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-neutral-700 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">
                Education
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <span className="font-semibold text-slate-300">BCA</span> -
                  LNCT University, Bhopal (2022 - 2025)
                </li>
                <li>
                  <span className="font-semibold text-slate-300">
                    Higher Secondary
                  </span>
                  - AVM School Makhan Nagar
                </li>
              </ul>
            </div>
            <div className="card p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">
                Work Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-semibold text-slate-200">
                      Full Stack Developer & UI/UX Designer
                    </h4>
                    <p className="text-sm text-slate-500 sm:text-right">
                      July 2025 - Present
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Developing full-stack applications and designing intuitive
                    user interfaces for a global clientele on the
                    <span className="text-green-500 font-semibold"> Fiverr</span>
                    freelance platform.
                  </p>
                </div>
                <div className="border-t border-neutral-800"></div>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="font-semibold text-slate-200">
                      Front-End Developer Intern
                    </h4>
                    <p className="text-sm text-slate-500 sm:text-right">
                      June 2025 (1-Month)
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Cognifyz Technology (Project-Based)
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-6 rounded-xl flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">
                Certifications
              </h3>
              <ul className="space-y-3 text-slate-400 flex-1">
                <li>Ethical Hacker - Cisco</li>
                <li>Python Programming - Udemy</li>
                <li>Cyber Security Basics - Cisco</li>
                <li className="hidden">Advanced JavaScript - Great Learning</li>
                <li className="hidden">React - The Complete Guide - Udemy</li>
              </ul>
              <Link
                to="/certificates"
                className="text-sky-400 hover:text-sky-300 font-semibold mt-4 self-start"
              >
                See More
              </Link>
            </div>
            <div className="card p-6 rounded-xl flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">
                Achievements
              </h3>
              <ul className="space-y-3 text-slate-400 flex-1">
                <li>50+ Major and Minor Projects Created</li>
                <li>300+ Leetcode Problems Solved</li>
                <li>5+ years of experience in computer science</li>
                <li className="hidden">Top 10% in National Coding Olympiad</li>
                <li className="hidden">Winner of University Hackathon 2024</li>
              </ul>
              <Link
                to="/achievements"
                className="text-sky-400 hover:text-sky-300 font-semibold mt-4 self-start"
              >
                See More
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-neutral-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="gradient-text">My Professional Skillset</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-100 mb-6 text-center">
                  Frontend Development
                </h3>
                <div className="space-y-5">
                  <SkillItem
                    icon="devicon-html5-plain colored text-2xl"
                    name="HTML5"
                    percentage={95}
                    color="sky"
                  />
                  <SkillItem
                    icon="devicon-css3-plain colored text-2xl"
                    name="CSS3"
                    percentage={90}
                    color="sky"
                  />
                  <SkillItem
                    icon="devicon-javascript-plain colored text-2xl"
                    name="JavaScript"
                    percentage={85}
                    color="indigo"
                  />
                  <SkillItem
                    icon="devicon-react-original colored text-2xl"
                    name="React.js"
                    percentage={80}
                    color="indigo"
                  />
                  <SkillItem
                    icon="devicon-redux-original colored text-2xl"
                    name="Redux"
                    percentage={75}
                    color="indigo"
                  />
                  <SkillItem
                    icon="devicon-tailwindcss-plain colored text-2xl"
                    name="Tailwind CSS"
                    percentage={90}
                    color="sky"
                  />
                </div>
              </div>

              {/* Backend Skills */}
              <div className="card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-100 mb-6 text-center">
                  Backend & Databases
                </h3>
                <div className="space-y-5">
                  <SkillItem
                    icon="devicon-nodejs-plain colored text-2xl"
                    name="Node.js"
                    percentage={80}
                    color="green"
                  />
                  <SkillItem
                    icon="devicon-express-original text-2xl text-slate-200"
                    name="Express.js"
                    percentage={85}
                    color="green"
                  />
                  <SkillItem
                    icon="devicon-python-plain colored text-2xl"
                    name="Python"
                    percentage={70}
                    color="yellow"
                  />
                  <SkillItem
                    icon="devicon-mysql-plain colored text-2xl"
                    name="MySQL"
                    percentage={75}
                    color="blue"
                  />
                  <SkillItem
                    icon="devicon-mongodb-plain colored text-2xl"
                    name="MongoDB"
                    percentage={70}
                    color="green"
                  />
                  <SkillItem
                    icon="devicon-postgresql-plain colored text-2xl"
                    name="PostgreSQL"
                    percentage={65}
                    color="blue"
                  />
                </div>
              </div>

              {/* Tools & Others */}
              <div className="card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-100 mb-6 text-center">
                  Tools & Software
                </h3>
                <div className="space-y-5">
                  <SkillItem
                    icon="devicon-git-plain colored text-2xl"
                    name="Git & GitHub"
                    percentage={90}
                    color="red"
                  />
                  <SkillItem
                    icon="devicon-docker-plain colored text-2xl"
                    name="Docker"
                    percentage={60}
                    color="blue"
                  />
                  <SkillItem
                    icon="devicon-figma-plain colored text-2xl"
                    name="Figma"
                    percentage={85}
                    color="purple"
                  />
                  <SkillItem
                    icon={
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                        alt="Postman"
                        className="w-6 h-6"
                      />
                    }
                    name="Postman"
                    percentage={80}
                    color="orange"
                  />
                  <SkillItem
                    icon={
                      <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg"
                        alt="Vercel"
                        className="w-6 h-6 filter invert"
                      />
                    }
                    name="Vercel"
                    percentage={75}
                    color="slate"
                  />
                  <SkillItem
                    icon={<span className="text-2xl">☁️</span>}
                    name="Netlify"
                    percentage={70}
                    color="teal"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              image="/Images/neurofocus.png"
              title="NeuroFocus"
              description="A productivity dashboard created using HTML, Tailwind CSS, JS, and Bootstrap."
              tags={['HTML', 'Tailwind CSS', 'JavaScript', 'Bootstrap']}
              liveUrl="https://ekagrah.netlify.app/"
              githubUrl="https://github.com/RupeshVerma28/NeuroFocus"
              color="purple"
            />
            <ProjectCard
              image="/Images/multitool.png"
              title="ToolNexus"
              description="A collection of multiple productivity tools. Tech used:REACT, Tailwind CSS, Bootstrap."
              tags={['REACT', 'Tailwind CSS', 'Bootstrap']}
              liveUrl="https://toolnexus.netlify.app/"
              githubUrl="https://github.com/RupeshVerma28/ToolNexus"
              color="teal"
            />
            <ProjectCard
              image="/Images/pro3.png"
              title="ScanReady-CV"
              description="An ATS-friendly CV builder with pre-filled data and downloadable PDF functionality."
              tags={['React', 'Tailwind CSS']}
              liveUrl="https://scanready-cv.netlify.app/"
              githubUrl="https://github.com/RupeshVerma28/ScanReady-CV---Major-Project"
              color="sky"
            />
            <ProjectCard
              image="/Images/IET.png"
              title="IncomeExpense-Watch"
              description="Track your income and expenses with graphical representation and printable receipts."
              tags={['JavaScript', 'Chart.js', 'HTML/CSS']}
              liveUrl="https://incomexpense-watch.netlify.app/"
              githubUrl="#"
              color="indigo"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-neutral-800 text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-neutral-700 transition-all duration-300"
            >
              See All Projects
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="gradient-text">Let's Build Something Amazing</span>
            </h2>
            <p className="text-slate-400 mb-8 text-center">
              Have a project in mind or just want to say hello? My inbox is always
              open.
            </p>
            <div className="card p-8 rounded-xl">
              <form
                onSubmit={handleFormSubmit}
                action="https://formsubmit.co/errupesh28@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="form-input"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </form>
              <div
                id="form-success-message"
                className="hidden mt-6 text-center text-green-400 border border-green-400/50 bg-green-900/20 p-4 rounded-lg"
              >
                form is submitted Successfully
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const SkillItem = ({ icon, name, percentage, color }) => {
  const colorClasses = {
    sky: 'bg-sky-500',
    indigo: 'bg-indigo-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    slate: 'bg-slate-400',
    teal: 'bg-teal-400',
  }

  return (
    <div className="skill-item">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          {typeof icon === 'string' ? (
            <i className={icon}></i>
          ) : (
            icon
          )}
          <span className="font-medium text-slate-300">{name}</span>
        </div>
        <span className="text-sm text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-neutral-700 rounded-full h-2.5">
        <div
          className={`${colorClasses[color]} h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  color,
}) => {
  const colorClasses = {
    purple: {
      bg: 'bg-purple-900/50',
      text: 'text-purple-300',
      link: 'text-purple-400 hover:text-purple-300',
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
  }

  const classes = colorClasses[color] || colorClasses.purple

  return (
    <div className="card rounded-xl overflow-hidden project-card">
      <img
        src={image}
        onError={(e) => {
          e.target.onerror = null
          e.target.src =
            'https://placehold.co/600x400/171717/a855f7?text=Project+Image'
        }}
        alt={title}
        className="w-full object-cover"
      />
      <div className="p-6 content">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 description">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`${classes.bg} ${classes.text} text-xs font-semibold px-2.5 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-auto">
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${classes.link} font-semibold flex items-center gap-2`}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
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
}

export default Home
