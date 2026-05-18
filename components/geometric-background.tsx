"use client"

export function GeometricBackground() {
  return (
    <>
      {/* SVG Geometric Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <svg 
          className="w-full h-full opacity-40"
          viewBox="0 0 1200 800" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Horizontal curved lines */}
          <path 
            d="M-100 350 Q250 50 500 350 T1100 350" 
            stroke="#c8c7c2" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M-100 400 Q250 100 500 400 T1100 400" 
            stroke="#c8c7c2" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M-100 450 Q250 150 500 450 T1100 450" 
            stroke="#d4d3ce" 
            strokeWidth="0.75" 
            fill="none"
          />
          
          {/* Vertical curved lines */}
          <path 
            d="M350 -100 Q50 250 350 500 T350 900" 
            stroke="#c8c7c2" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M400 -100 Q100 250 400 500 T400 900" 
            stroke="#c8c7c2" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M450 -100 Q150 250 450 500 T450 900" 
            stroke="#d4d3ce" 
            strokeWidth="0.75" 
            fill="none"
          />
          
          {/* Central ellipse */}
          <ellipse 
            cx="400" 
            cy="400" 
            rx="180" 
            ry="120" 
            stroke="#d4d3ce" 
            strokeWidth="0.75" 
            fill="none"
          />
          
          {/* Intersection dots */}
          <circle cx="300" cy="350" r="3" fill="#c4c3be" />
          <circle cx="400" cy="280" r="2" fill="#c4c3be" />
          <circle cx="500" cy="320" r="3" fill="#c4c3be" />
          <circle cx="350" cy="450" r="2" fill="#c4c3be" />
          <circle cx="450" cy="480" r="3" fill="#c4c3be" />
          <circle cx="280" cy="420" r="2" fill="#c4c3be" />
          <circle cx="520" cy="400" r="2" fill="#c4c3be" />
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 199, 194, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 199, 194, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Corner brackets */}
      <div className="fixed top-8 left-8 w-6 h-6 border-l-[1.5px] border-t-[1.5px] border-[#b8b7b2] z-50 pointer-events-none" />
      <div className="fixed top-8 right-8 w-6 h-6 border-r-[1.5px] border-t-[1.5px] border-[#b8b7b2] z-50 pointer-events-none" />
      <div className="fixed bottom-8 left-8 w-6 h-6 border-l-[1.5px] border-b-[1.5px] border-[#b8b7b2] z-50 pointer-events-none" />
      <div className="fixed bottom-8 right-8 w-6 h-6 border-r-[1.5px] border-b-[1.5px] border-[#b8b7b2] z-50 pointer-events-none" />
    </>
  )
}
