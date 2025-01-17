export default function Campo () {
    return  (
        <svg width="560" height="360" viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Campo de fútbol --> */}
            <rect width="560" height="360" fill="blue" />
            
            {/* <!-- Líneas de banda --> */}
            <rect x="30" y="30" width="500" height="300" fill="none" stroke="white" stroke-width="2"/>
            
            {/* <!-- Líneas centrales --> */}
            <line x1="280" y1="30" x2="280" y2="330" stroke="white" stroke-width="2"/>
            
            {/* <!-- Círculo central --> */}
            <circle cx="280" cy="180" r="40" fill="none" stroke="white" stroke-width="2"/>
            
            {/* <!-- Punto central --> */}
            <circle cx="280" cy="180" r="3" fill="white"/>
            
            {/* <!-- Áreas de penalti --> */}
            <rect x="30" y="90" width="90" height="180" fill="none" stroke="white" stroke-width="2"/>
            <rect x="440" y="90" width="90" height="180" fill="none" stroke="white" stroke-width="2"/>
            
            {/* <!-- Áreas pequeñas --> */}
            <rect x="30" y="140" width="40" height="80" fill="none" stroke="white" stroke-width="2"/>
            <rect x="490" y="140" width="40" height="80" fill="none" stroke="white" stroke-width="2"/>
            
            {/* <!-- Puntos de penalti --> */}
            <circle cx="90" cy="180" r="2" fill="white"/>
            <circle cx="470" cy="180" r="2" fill="white"/>
            
            {/* <!-- Círculos de área de penalti --> */}
            <path d="M120,140 A20,40 0 0,1 120,220" fill="none" stroke="white" stroke-width="2"/>
            <path d="M440,140 A20,40 0 0,0 440,220" fill="none" stroke="white" stroke-width="2"/>
            
            {/* <!-- Porterías --> */}

            <rect x="20" y="150" width="10" height="60" fill="none" stroke="white" stroke-width="2"/>
            <rect x="530" y="150" width="10" height="60" fill="none" stroke="white" stroke-width="2"/>
        </svg>

    )
}