function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Pavani Budharaju</h2>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/pavani-181" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/pavani-budharaju" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com/Pavani185" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="open-to-badge">🟢 Open to Full-Time Roles & Internships</div>
            <p className="subtitle">WELCOME TO MY PORTFOLIO</p>
            
            <h1>Building the <br /><span>future</span> with code.</h1>
            
            <p className="description">
              Hi! I'm passionate about Robotics, AI, Machine Learning, and Edge AI,
              with a keen interest in building intelligent systems that solve real-world problems. I enjoy turning innovative 
              ideas into practical solutions through hands-on projects and experimentation. I’m open to internship opportunities, 
              entrepreneurial ventures, and collaborations where I can learn, innovate, and create meaningful impact.
            </p>
            
            <div className="contact-details">
              <a href="mailto:pavanibudharaju5@gmail.com" className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                pavanibudharaju5@gmail.com
              </a>
              <a href="tel:+918885474199" className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 8885474199
              </a>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="hero-button primary">Explore My Work ↗</a>
              <a href="/software_dev_resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-button secondary">Download Resume ↓</a>
            </div>
          </div>
          
          {/* Single, correctly placed profile image */}
          <div className="hero-image">
            <img src="/photo_pavani.jpeg" alt="Pavani Budharaju" className="profile-photo" />
          </div>
        </div>
      </section>

      {/* ABOUT & INTERESTS SECTION */}
      <section id="about" className="section">
        <p className="section-label">01 / ABOUT ME</p>
        <h2>Curious mind. Builder's mindset.</h2>
        <p className="section-text">
          I’m an Electronics and Computer Engineering student with a strong academic background and a passion for Robotics,
          Artificial Intelligence, and Edge AI. I enjoy building intelligent systems, experimenting with machine learning, and 
          developing robotics projects that bridge the gap between hardware and software. From autonomous robots to AI-powered applications,
          I’m always exploring new ideas and turning them into reality.
        </p>
        
        <div className="interests-grid">
          <h3>🛠️ Technical Skills</h3>
          <div className="skills">
            <span>Python</span><span>C++</span><span>React</span><span>TensorFlow</span><span>OpenCV</span><span>ROS</span>
          </div>
          
          <h3>🎯 Personal Interests</h3>
          <div className="skills">
            <span>Robotics Competitions</span><span>Open Source Contributing</span><span>Embedded Systems</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <p className="section-label">02 / EXPERIENCE</p>
        <h2>Where I've worked.</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="exp-header">
              <h3>Software Engineering Intern</h3>
              <span className="exp-date">Jun 2023 – Aug 2023</span>
            </div>
            <h4>Cognizant</h4>
            <ul className="exp-details">
              <li>Completed a summer internship at Cognizant in Kochi, gaining hands-on experience in software development and enterprise technologies.</li>
              <li>Strengthened programming skills and explored software engineering concepts, including Java and application development.</li>
              <li>Collaborated in a professional environment, improving problem-solving, teamwork, and practical software development skills.</li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="exp-header">
              <h3>Robotics Researcher</h3>
              <span className="exp-date">Dec 2023 – Present</span>
            </div>
            <h4>University Robotics Club</h4>
            <ul className="exp-details">
              <li>Designed and developed robotic systems integrating microcontrollers, sensors, actuators, and motor drivers.</li>
              <li>Worked on robot kinematics, locomotion, sensor integration, and autonomous navigation using embedded systems and control algorithms.</li>
              <li>Explored ROS, Webots and real-time embedded programming to develop intelligent robotic systems combining hardware and software.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <p className="section-label">03 / PROJECTS</p>
        <h2>Things I've built.</h2>
        <div className="project-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <p className="project-category">01 / ROBOTICS</p>
              <div className="project-links">
                <a href="https://drive.google.com/file/d/1npIJGzJDKJXey3A-me0TnNJyrLJFkz9A/view?usp=sharing" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                <a href="https://github.com/Viswajit-A/Maze_Solver_Bot" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
            <h3>Autonomous Frontier Exploration Robot</h3>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">C++</span>
              <span className="tech-badge">ROS</span>
            </div>
            <div className="project-details">
              <p><strong>The Problem:</strong> Traditional maze-solving robots struggle to navigate unknown, irregular environments filled with obstacles.</p>
              <p><strong>The Solution:</strong> Developed a distributed autonomous navigation system using LiDAR-based SLAM, BFS-based frontier exploration, and Nav2 for real-time mapping, path planning, and obstacle avoidance.</p>
              <p><strong>The Impact:</strong> Successfully achieved fully autonomous exploration and mapping of a real, obstacle-dense indoor environment with zero physical collisions.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <p className="project-category">02 / ROBOTICS</p>
              <div className="project-links">
                <a href="https://drive.google.com/file/d/1OWC4AiOwKKgDccBJU6Lysfz6IVqnT5A_/view?usp=sharing" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                <a href="https://github.com/pavani-181" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
            <h3>Autonomous Hexapod Robot</h3>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">ESP32</span>
              <span className="tech-badge">Raspberry Pi</span>
            </div>
            <div className="project-details">
              <p><strong>The Problem:</strong> Developing a stable, autonomous walking robot capable of navigating obstacles using a multi-legged locomotion system.</p>
              <p><strong>The Solution:</strong> Designed and developed a six-legged robot with 3-DOF per leg, implementing tripod gait locomotion and integrating ultrasonic sensors for obstacle detection using a Raspberry Pi and ESP32-based control architecture.</p>
              <p><strong>The Impact:</strong> Successfully demonstrated stable multi-legged locomotion and coordinated control, gaining hands-on experience in robotic gait planning, embedded systems, and sensor integration.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <p className="project-category">03 / MACHINE LEARNING</p>
              <div className="project-links">
                <a href="https://github.com/pavani-181" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                <a href="https://github.com/pavani-181" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
            <h3>Eco-Friendly Material Classification</h3>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">NLP, TF-IDF</span>
              <span className="tech-badge">Supervised ML</span>
            </div>
            <div className="project-details">
              <p><strong>The Problem:</strong> Identifying and classifying sustainable materials from structured and unstructured data can be challenging due to the complexity of material-related information.</p>
              <p><strong>The Solution:</strong> Developed a machine learning pipeline using Python, TF-IDF, and supervised learning algorithms, incorporating data preprocessing and feature engineering to classify sustainable materials.</p>
              <p><strong>The Impact:</strong> Explored how machine learning and NLP can support sustainable material identification and contribute to data-driven environmental decision-making.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-header">
              <p className="project-category">04 / FULL STACK</p>
              <div className="project-links">
                <a href="https://github.com/pavani-181/Wander" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                <a href="https://github.com/pavani-181/Wander" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
            <h3>AI Powered Travel Recommendation System</h3>
            <div className="tech-stack">
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">MERN</span>
              <span className="tech-badge">KNN</span>
            </div>
            <div className="project-details">
              <p><strong>The Problem:</strong> Travelers often struggle to find destinations that match their personal preferences and travel interests.</p>
              <p><strong>The Solution:</strong> Developed a full-stack travel recommendation system using the MERN stack and KNN to provide personalized travel recommendations, with REST APIs and MongoDB for efficient data management.</p>
              <p><strong>The Impact:</strong> Explored how machine learning can enhance travel planning by delivering personalized destination suggestions and improving the user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="section">
        <p className="section-label">04 / ACHIEVEMENTS</p>
        <h2>Milestones & Awards.</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <span className="achievement-icon">🏆</span>
            <h3>1st Prize Winner – ICRM 2025</h3>
            <p>Secured first place at the International Conference on Robotics and Mechatronics for designing and demonstrating an autonomous hexapod robot.</p>
          </div>
          <div className="achievement-card">
            <span className="achievement-icon">💰</span>
            <h3>₹1,00,000 Project Funding</h3>
            <p>Received cumulative funding from GUJCOST RoboFest 4.0 & 5.0 for the Autonomous Hexapod Robot and Autonomous Maze Solver projects.</p>
          </div>
          <div className="achievement-card">
            <span className="achievement-icon">🎓</span>
            <h3>Consistent Academic Excellence</h3>
            <p>Maintained a CGPA above 9.0/10.0 throughout academic semesters at Amrita Vishwa Vidyapeetham.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact">
        <p className="section-label">05 / CONTACT</p>
        <h2>Let's build something together.</h2>
        <p>Have an idea, a question, or an opportunity? I'm always open to discussing new projects and creative ideas.</p>
        
        <div className="contact-large">
          <a href="mailto:pavanibudharaju5@gmail.com" className="contact-large-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>pavanibudharaju5@gmail.com</span>
          </a>
          <a href="tel:+918885474199" className="contact-large-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 8885474199</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Pavani Budharaju · Built with React & Vanilla CSS</p>
        <div className="footer-socials">
          <a href="https://github.com/pavani-181" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/pavani-budharaju" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/Pavani185" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </footer>
    </div>
  );
}

export default App;