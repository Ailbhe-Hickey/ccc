import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="/ccclogo.png"
            alt="Club Logo"
          />
          <span>Ballincollig Camogie</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero section */}
      <section className="hero" id="home">
        <h1>Welcome to Ballincollig Camogie Club</h1>
        <p>Passionate about sport, proud of our community.</p>
      </section>

      {/* About section */}
      <section className="about" id="about">
        <h2>About Our Club</h2>
        <p>
          Founded in 1974, our club supports players of every skill level to
          enjoy camogie in a friendly, inclusive environment.
        </p>
        <p>
          Weekly training sessions and community events keep our members active
          and connected.
        </p>
        <img src="/ailbhe.jpeg" alt="Our Team" style={{ maxWidth: "100%", borderRadius: "10px" }} />

      </section>

      <section className="news" id="news">
      <h2>Latest News</h2>
      <div className="news-grid">
        <div className="news-card">
          <h3>Summer Training Schedule</h3>
          <p>Our summer training program starts July 1st. All ages welcome!</p>
        </div>
        <div className="news-card">
          <h3>Match Results</h3>
          <p>Congratulations to our U14 team for a great performance last weekend!</p>
        </div>
        <div className="news-card">
          <h3>Volunteer Call</h3>
          <p>We are seeking volunteers to help with club events. Get in touch to help!</p>
        </div>
          <div className="news-card">
          <h3>Fundraising Raffle</h3>
          <p>Don’t forget to buy your tickets for our annual club raffle this August.</p>
        </div>
        <div className="news-card">
          <h3>Youth Registration</h3>
          <p>Registration is open for all youth age groups. Join the team today!</p>
        </div>
        <div className="news-card">
          <h3>Pitch Maintenance</h3>
          <p>The main pitch will be closed for resurfacing between July 10–15.</p>
        </div>
        <div className="news-card">
          <h3>Youth Registration</h3>
          <p>Registration is open for all youth age groups. Join the team today!</p>
        </div>
        <div className="news-card">
          <h3>Pitch Maintenance</h3>
          <p>The main pitch will be closed for resurfacing between July 10–15.</p>
        </div>

      </div>
      
    </section>


    <section className="calendar-section">
      <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>
      <div className="calendar-wrapper">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=i7dl3jk3s1s7rmtvpqrhirq9j4%40group.calendar.google.com&ctz=Europe%2FDublin" 
          style={{ border: 0 }}
          width="80%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Club Events Calendar"
        ></iframe>
      </div>
    </section>



      {/* Contact section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@ballincolligcamogie.ie</p>
        <p>Follow us on Facebook and Instagram for news and training updates.</p>
      </section>
    </div>
  );
}

export default App;
