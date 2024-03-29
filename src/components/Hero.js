const Hero = ({ userData }) => {
  // Fetch data only if userData changes
  // console.log(userData);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>{userData?.user.about.name}</h1>
            <h3>{userData?.user.about.title}</h3>
            <p>{userData?.user.about.description}</p>
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
