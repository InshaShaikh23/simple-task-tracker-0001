import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-decor dot-1"></div>
      <div className="hero-decor dot-2"></div>

      <div className="hero-content">
        <h1>
          <span className="line-dark">Organize Your Tasks</span>
          <span className="line-accent">Stay Productive Every Day</span>
        </h1>

        <div className="description">
          Add your tasks, track their progress, and get things done
          efficiently.
        </div>

        <div className="home-actions">
          <Link to="/add" className="action-card primary">
            <span className="action-badge purple">+</span>
            <span className="action-text">
              <span className="title">Add New Task</span>
              <span className="subtitle">Create a new task and get started</span>
            </span>
            <span className="action-chevron">›</span>
          </Link>

          <Link to="/tasks" className="action-card secondary">
            <span className="action-badge blue">☰</span>
            <span className="action-text">
              <span className="title">View Tasks</span>
              <span className="subtitle">See all your tasks and their status</span>
            </span>
            <span className="action-chevron">›</span>
          </Link>
        </div>
      </div>

      <div className="hero-illustration">
        <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* plant pot */}
          <path d="M55 230 L65 270 L105 270 L115 230 Z" fill="#ffffff" stroke="#d8d4f5" strokeWidth="2"/>
          <path d="M85 230 C85 200 70 190 60 175 C75 185 88 195 90 215" fill="#34a853"/>
          <path d="M85 230 C85 195 100 180 115 165 C100 178 88 192 88 218" fill="#4caf50"/>
          <path d="M85 230 C85 205 80 190 65 180" stroke="#2e7d32" strokeWidth="3" fill="none"/>

          {/* clock */}
          <circle cx="225" cy="225" r="32" fill="#ffffff" stroke="#6c5ce7" strokeWidth="5"/>
          <circle cx="225" cy="225" r="3" fill="#6c5ce7"/>
          <line x1="225" y1="225" x2="225" y2="206" stroke="#6c5ce7" strokeWidth="3" strokeLinecap="round"/>
          <line x1="225" y1="225" x2="239" y2="225" stroke="#6c5ce7" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="200" cy="196" r="4" fill="#6c5ce7"/>
          <circle cx="250" cy="196" r="4" fill="#6c5ce7"/>
          <circle cx="225" cy="191" r="4" fill="#6c5ce7"/>

          {/* pen */}
          <rect x="185" y="120" width="14" height="120" rx="6" transform="rotate(18 192 180)" fill="#6c5ce7"/>
          <polygon points="178,235 198,228 188,250" fill="#3730a3" transform="rotate(18 188 240)"/>

          {/* clipboard */}
          <rect x="95" y="55" width="120" height="170" rx="14" fill="#ffffff" stroke="#6c5ce7" strokeWidth="6"/>
          <rect x="135" y="42" width="40" height="22" rx="8" fill="#6c5ce7"/>
          <circle cx="155" cy="48" r="5" fill="#4338ca"/>

          {/* checklist rows */}
          <rect x="115" y="90" width="22" height="22" rx="6" fill="#22c55e"/>
          <path d="M121 101 L126 106 L133 96" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="146" y="96" width="55" height="6" rx="3" fill="#e0def7"/>

          <rect x="115" y="124" width="22" height="22" rx="6" fill="#22c55e"/>
          <path d="M121 135 L126 140 L133 130" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="146" y="130" width="55" height="6" rx="3" fill="#e0def7"/>

          <rect x="115" y="158" width="22" height="22" rx="6" fill="#22c55e"/>
          <path d="M121 169 L126 174 L133 164" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="146" y="164" width="40" height="6" rx="3" fill="#e0def7"/>
        </svg>
      </div>
    </div>
  );
}

export default Home;