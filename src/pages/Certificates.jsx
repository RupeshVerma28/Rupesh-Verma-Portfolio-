import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Certificates = () => {
  const certificates = [
    {
      image: '/Images/oci.png',
      title: 'Certified AI Foundations Associate',
      provider: 'Oracle Cloud Infrastructure',
      issued: 'Sep, 2025',
    },
    {
      image: '/Images/Cisco cc.png',
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco',
      issued: 'Jan, 2025',
    },
    {
      image: '/Images/IBM.png',
      title: 'Cybersecurity Fundamentals',
      provider: 'IBM',
      issued: 'July, 2025',
    },
    {
      image: '/Images/AI FOR ALL.png',
      title: 'AI For All',
      provider: 'Intel (SIDH)',
      issued: 'April, 2025',
    },
    {
      image: '/Images/Advance Excel.jpg',
      title: 'Microsoft Advance Excel',
      provider: 'Itronix Solutions',
      issued: 'March, 2023',
    },
    {
      image: '/Images/Android Bug Hunting .png',
      title: 'Android Bug Bounty Hunting',
      provider: 'Ec council',
      issued: 'May, 2025',
    },
    {
      image: '/Images/c++.jpg',
      title: 'Object Oriented Programming with C++',
      provider: 'Itronix Solutions',
      issued: 'March, 2025',
    },
    {
      image: '/Images/ComputerHardware.png',
      title: 'Field Technician Computing & Peripherals',
      provider: 'SIDH',
      issued: 'Jun, 2025',
    },
    {
      image: '/Images/html5.png',
      title: 'HTML5',
      provider: 'Infosys',
      issued: 'May, 2025',
    },
    {
      image: '/Images/css3.png',
      title: 'CSS3',
      provider: 'Infosys',
      issued: 'Jun, 2025',
    },
    {
      image: '/Images/js.png',
      title: 'Javascript',
      provider: 'Infosys',
      issued: 'Jun, 2025',
    },
    {
      image: '/Images/Emailwriting.png',
      title: 'Email Writing',
      provider: 'Infosys',
      issued: 'N/A',
    },
    {
      image: '/Images/EMAN.png',
      title: 'Ethical Hacking - Mobile Platforms and Network Architecture',
      provider: 'Great Learning',
      issued: 'Jul, 2024',
    },
    {
      image: '/Images/ethicalhackngprofessional.png',
      title: 'Ethical Hacking Professional',
      provider: 'Itronix Solutions',
      issued: 'May, 2025',
    },
    {
      image: '/Images/GenAI.png',
      title: 'Generative AI',
      provider: 'LinkedIn',
      issued: 'May, 2024',
    },
    {
      image: '/Images/information security.png',
      title: 'Information Security',
      provider: 'Infosys',
      issued: 'August, 2024',
    },
    {
      image: '/Images/iso.png',
      title: 'Cyber Hygiene Practices',
      provider: 'Meity',
      issued: 'February, 2023',
    },
    {
      image: '/Images/P3UT.png',
      title: 'Python 3 With Turtle Graphics',
      provider: 'EC-Council',
      issued: 'Jun, 2024',
    },
    {
      image: '/Images/PPT.png',
      title: 'High Impact Presentations',
      provider: 'Infosys',
      issued: 'June, 2025',
    },
    {
      image: '/Images/TDA.png',
      title: 'Computer Hardware & Networking',
      provider: 'The Digital Adda (TDA)',
      issued: 'March, 2023',
    },
    {
      image: '/Images/TimeManagement.png',
      title: 'Time Management',
      provider: 'Infosys',
      issued: 'May, 2025',
    },
    {
      image: '/Images/pydeve.png',
      title: 'Python Development Essentials',
      provider: 'Udemy',
      issued: 'March, 2024',
    },
    {
      image: '/Images/TMCYBERSEC.png',
      title: 'Cybersecurity',
      provider: 'Tech Mahindra',
      issued: 'Jul, 2025',
    },
    {
      image: '/Images/ux.png',
      title: 'User Experience',
      provider: 'Infosys',
      issued: 'June, 2025',
    },
    {
      image: '/Images/WebsiteCreation.png',
      title: 'Website Creation',
      provider: 'Infosys',
      issued: 'June, 2025',
    },
    {
      image: '/Images/DEO.png',
      title: 'Data Entry Operator (DEO)',
      provider: 'Itronix Solutions',
      issued: 'July, 2023',
    },
    {
      image: '/Images/TyprScript.png',
      title: 'TypeScript',
      provider: 'Infosys',
      issued: 'June, 2025',
    },
  ]

  return (
    <>
      <Header />
      <main>
        <div className="flex-grow container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
            Certificates & Badges
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <CertificateCard key={idx} certificate={cert} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const CertificateCard = ({ certificate }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="card-container" style={{ perspective: '1000px', width: '100%', maxWidth: '340px', height: '420px', cursor: 'pointer', margin: 'auto' }}>
      <div
        className="card-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '1rem',
            backgroundColor: '#181818',
            border: '1px solid #2d3748',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
            transition: 'border-color 0.3s ease',
            borderColor: isFlipped ? '#3b82f6' : '#2d3748',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="card-image"
            style={{
              height: '240px',
              width: '100%',
              objectFit: 'contain',
              padding: '1.5rem',
              backgroundColor: '#2a2a2a',
            }}
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://placehold.co/400x240/2a2a2a/ffffff?text=Image+Not+Found'
            }}
          />
          <div
            className="card-caption"
            style={{
              background: '#181818',
              padding: '1.25rem 1.5rem',
              textAlign: 'left',
            }}
          >
            <h3 className="text-lg font-semibold text-white">
              {certificate.title}
            </h3>
            <p className="text-sm text-gray-400">{certificate.provider}</p>
            <button
              className="flip-button"
              style={{
                backgroundColor: '#3b82f6',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '8px',
                marginTop: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: 'none',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation()
                setIsFlipped(!isFlipped)
              }}
            >
              View Details
            </button>
          </div>
        </div>
        <div
          className="card-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '1rem',
            backgroundColor: '#181818',
            border: '1px solid #2d3748',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1.5rem',
            transform: 'rotateY(180deg)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
          }}
        >
          <h3 className="text-xl font-bold mb-2 text-white">
            {certificate.title}
          </h3>
          <p className="text-gray-400">Provider: {certificate.provider}</p>
          <p className="text-gray-400">Issued: {certificate.issued}</p>
          <button
            className="flip-button mt-4"
            style={{
              backgroundColor: '#3b82f6',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              border: 'none',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation()
              setIsFlipped(!isFlipped)
            }}
          >
            Flip Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default Certificates

