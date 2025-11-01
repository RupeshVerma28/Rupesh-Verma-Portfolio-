import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Achievements = () => {
  const [buttonText, setButtonText] = useState('Celebrate With Me')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const createConfetti = () => {
    const confetti = document.createElement('div')
    confetti.classList.add('confetti')

    const colors = ['#a855f7', '#ec4899', '#22c55e', '#3b82f6', '#f97316']
    confetti.style.left = Math.random() * 100 + 'vw'
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's'
    confetti.style.opacity = Math.random()
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`

    document.body.appendChild(confetti)

    setTimeout(() => {
      confetti.remove()
    }, 5000)
  }

  const handleCelebrate = () => {
    setButtonDisabled(true)

    for (let i = 0; i < 100; i++) {
      createConfetti()
    }

    setTimeout(() => {
      setButtonText('Thank You! 🎉')
      setButtonDisabled(false)
    }, 1000)
  }

  const achievements = [
    {
      image: '/Images/gitstats.png',
      title: '50+ Major and Minor Project Creator',
      description:
        'I will Create 50+ Major and Minor Projects on GitHub in 2024 to showcase my skills and contribute to the developer community.',
    },
    {
      image: '/Images/30+certi.png',
      title: '30+ Industry-Recognized Certifications',
      description:
        'Achieved 30+ industry-recognized certifications across technologies and platforms, validating my expertise and commitment to continuous learning.',
    },
    {
      image: '/Images/LC100.png',
      title: '100 Days of DSA Challenge',
      description:
        'Completed Leetcode\'s 100 Days of DSA Challenge, enhancing my problem-solving skills.',
    },
    {
      image: 'https://placehold.co/600x400/171717/38bdf8?text=Graduate',
      title: 'Recently Graduated with First Division',
      description:
        'Successfully completed my Bachelor of Computer Applications (BCA), establishing a strong academic foundation in computer science.',
    },
    {
      image: '/Images/linkedin.png',
      title: '1K+ LinkedIn Connections & Followers',
      description:
        'Grown a professional network of over 1,000 connections on LinkedIn, connecting with peers and industry leaders.',
    },
    {
      image: '/Images/50day.png',
      title: '50-Day Duolingo Streak',
      description:
        'Successfully completed a 50-day English practice challenge on Duolingo, demonstrating commitment to continuous learning.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section id="achievements" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">My Achievements</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-12">
              A collection of my accomplishments and milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="card rounded-xl overflow-hidden flex flex-col">
                <img
                  src={achievement.image}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src =
                      'https://placehold.co/600x400/171717/9333ea?text=Achievement'
                  }}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={handleCelebrate}
              disabled={buttonDisabled}
              className={`${
                buttonDisabled || buttonText === 'Thank You! 🎉'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-sky-500 hover:bg-sky-600'
              } text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
            >
              {buttonText}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Achievements

