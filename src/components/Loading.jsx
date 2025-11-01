import { useEffect, useState } from 'react'

const Loading = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === '') return '.'
        if (prev === '.') return '..'
        if (prev === '..') return '...'
        return ''
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo with Rotating Rings */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute h-32 w-32 animate-spin">
            <div className="h-full w-full rounded-full border-4 border-transparent border-t-sky-500 border-r-purple-500"></div>
          </div>
          
          {/* Middle rotating ring (reverse direction) */}
          <div className="absolute h-28 w-28 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
            <div className="h-full w-full rounded-full border-4 border-transparent border-b-indigo-500 border-l-pink-500"></div>
          </div>
          
          {/* Inner rotating ring */}
          <div className="absolute h-24 w-24 animate-spin" style={{ animationDuration: '2s' }}>
            <div className="h-full w-full rounded-full border-3 border-transparent border-t-cyan-400 border-r-blue-400"></div>
          </div>
          
          {/* Pulsing background circle */}
          <div className="absolute inset-0 animate-ping">
            <div className="h-20 w-20 rounded-full bg-sky-500/20"></div>
          </div>
          
          {/* Profile image at center */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-neutral-800 bg-gradient-to-br from-sky-400 to-indigo-400 p-1">
            <img
              src="/Images/propic.png"
              alt="Rupesh Verma"
              className="h-full w-full rounded-full object-cover"
              onError={(e => {
                e.target.onerror = null
                e.target.src = 'https://placehold.co/80x80/171717/E2E8F0?text=RV'
              })}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold md:text-3xl">
            <span className="gradient-text">Rupesh Verma</span>
          </h2>
          <p className="text-lg text-slate-400">
            Loading Portfolio{dots}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80">
          <div className="h-1 overflow-hidden rounded-full bg-neutral-800">
            <div className="h-full w-full animate-[loading_2s_ease-in-out_infinite] bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"></div>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex space-x-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-sky-500" style={{ animationDelay: '0s' }}></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-500" style={{ animationDelay: '0.2s' }}></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-purple-500" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loading

