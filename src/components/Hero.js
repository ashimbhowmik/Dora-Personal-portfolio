const Hero = ({ userData }) => {
  // Fetch data only if userData changes
  console.log(userData);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>Amit Hardy</h1>
            <h3>Digital marketing expert</h3>
            <p>
              Shot what able cold new the see hold. Friendly as an betrayed
              formerly he. Morning because as to society behaved moments
            </p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src={userData?.user.about.avatar.url} alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
