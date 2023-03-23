function App() {
  return (
    <div className="App">

      {/* <!-- Preloader --> */}
      <section id="preloader">
        <div className="loader" id="loader">
          <div className="loader-img"></div>
        </div>
      </section>
      {/* <!-- End Preloader --> */}

      {/* <!-- Site Wraper --> */}
      <div className="wrapper">

        {/* <!-- Header ("header--dark", "header-transparent", "header--sticky")--> */}
        <header id="header" className="header header-transparent header--sticky">
          {/* <!-- Nav Bar --> */}
          <nav id="navigation" className="header-nav">
            <div className="container">
              <div className="row d-flex flex-md-row align-items-center">
                <div className="logo mr-auto">
                  {/* <!--logo--> */}
                  <a href="javascript:void(0)">
                    <img className="logo-dark" src="img/tsf_logo_initial.png" alt="TSF" />
                    <img className="logo-light" src="img/tsf_logo_initial.png" alt="TSF" />
                  </a>
                  {/* <!--End logo--> */}
                </div>

                <div className="nav-menu ml-auto">
                  <ul className="">
                    <li className="nav-menu-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="nav-menu-item">
                      <a href="education.html">Education</a>
                      <div className="nav-dropdown">
                        <ul>
                          <li><a href="javascript:void(0)">Emotional Health</a></li>
                          <li><a href="javascript:void(0)">Mental Health</a></li>
                          <li><a href="javascript:void(0)">Sexual Assault and Rape</a></li>
                          <li><a href="javascript:void(0)">Spiritual health</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-menu-item">
                      <a href="about.html">ABOUT US</a>
                    </li>
                    <li className="nav-menu-item">
                      <a href="javascript:void(0)">HOW CAN I HELP?</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </nav>
          {/* <!-- End Nav Bar --> */}
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- CONTENT ---------------------------------------------------------------------------------> */}

        {/* <!-- Intro Section --> */}
        <section id="intro">
          {/* <!-- Hero Slider Section --> */}
          <div className="flexslider fullscreen-carousel hero-slider-1 ">
            <ul className="slides">

              {/* <!--Slide--> */}
              <li data-slide="light-slide">
                <div className="slide-bg-image overlay-light parallax parallax-section1" data-background-img="img/full/11.jpg">
                  <div className="js-Slide-fullscreen-height container">
                    <div className="intro-content">
                      <div className="intro-content-inner">
                        <h2 className="h2">The Survivors Foundation</h2>
                        <p className="lead">A place for you to find peace.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="clearfix"></div>
        {/* <!-- End Intro Section --> */}

        {/* <!--About Section--> */}
        <section id="about" className="wow fadeIn ptb ptb-sm-80">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 offset-md-2">
                <h3 className="h4">Vision</h3>
                <div className="spacer-15"></div>
                <p className="lead">Our vision is to educate & provide advocacy to everyone.</p>
                <p className="lead">To help anyone that is in need. </p>
              </div>
            </div>
            <div className="row mt-80">
            </div>
          </div>
        </section>
        {/* <!-- End About Section--> */}
        <hr />
        {/* <!-- Service Section --> */}
        <section id="service" className="ptb ptb-sm-80">
          <div className="wow fadeInLeft container text-center">
            <h3>HOW WE CAN HELP</h3>
            <div className="spacer-60"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6 mb-45">
                <div className="page-icon-top"><i className="ion ion-ios-heart"></i></div>
                <h5>Emotional Health</h5>
                <p>This is where we will provide an outline on emotional health. It can include what TSF does to help,
                  links to resources, or anything you'd like. Find more information <a href="javascript:void(0)">here.</a></p>
              </div>
              <div className="col-md-6 col-sm-6 mb-45">
                <div className="page-icon-top"><i className="ion ion-earth"></i></div>
                <h5>Mental Health</h5>
                <p>This is where we will provide an outline on mental health. It can include what TSF does to help,
                  links to resources, or anything you'd like. Find more information <a href="javascript:void(0)">here.</a></p>
              </div>
              <div className="col-md-6 col-sm-6 mb-45">
                <div className="page-icon-top"><i className="ion ion-ios-circle-outline"></i></div>
                <h5>Sexual Assault and Rape</h5>
                <p>This is where we will provide an outline on sexual assault and rape. It can include what TSF does to
                  help,
                  links to resources, or anything you'd like. Find more information <a href="javascript:void(0)">here.</a></p>
              </div>
              <div className="col-md-6 col-sm-6 mb-45">
                <div className="page-icon-top"><i className="ion ion-plus-round"></i></div>
                <h5>Spiritual Health</h5>
                <p>This is where we will provide an outline on spiritual health. It can include what TSF does to help,
                  links to resources, or anything you'd like. Find more information <a href="javascript:void(0)">here.</a></p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Service Section --> */}
        <hr />

        {/* <!-- Work Gallary --> */}
        <div className="container">
          <div className="row container-grid nf-col-3">
            <div className="nf-item branding design coffee spacing">
              <div className="item-box">
                <img className="item-container" src="img/portfolio/1.jpg" alt="1" />
                <div className="item-mask">
                  <div className="item-caption">
                    <h5 className="white">Photo Title</h5>
                    <p className="white">Photo Subtitle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nf-item branding design coffee spacing">
              <div className="item-box">
                <img className="item-container" src="img/portfolio/1.jpg" alt="1" />
                <div className="item-mask">
                  <div className="item-caption">
                    <h5 className="white">Photo Title</h5>
                    <p className="white">Photo Subtitle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nf-item branding design coffee spacing">
              <div className="item-box">
                <img className="item-container" src="img/portfolio/1.jpg" alt="1" />
                <div className="item-mask">
                  <div className="item-caption">
                    <h5 className="white">Photo Title</h5>
                    <p className="white">Photo Subtitle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Work Gallary --> */}
        <div className="spacer-30"></div>
      </div>
      {/* <!-- End Work Section --> */}

      {/* <!-- END CONTENT ----------------------------------------------------------------------------> */}

      {/* <!-- FOOTER --> */}
      <footer className="footer">
        <div className="ptb-60">
          <div className="container">
            {/* <!--Footer Info --> */}
            <div className="row footer-info">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="footer-block">
                  <a className="footer-logo mb-25" href="home.html">
                    <img src="img/tsf_logo_initial.png" />
                  </a>
                  <p>We hope you were able to find comfort in this website or that you find this resource helpful.</p>
                  <ul className="social">
                    <li><a target="_blank" href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-block">
                  <h6 className="link-title">Education</h6>
                  <ul className="link">
                    <li><a href="javascript:void(0)">Emotional Health</a></li>
                    <li><a href="javascript:void(0)">Mental Health</a></li>
                    <li><a href="javascript:void(0)">Sexual Assault and Rape</a></li>
                    <li><a href="javascript:void(0)">Spiritual Health</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-block">
                  <h6 className="link-title">About Us</h6>
                  <ul className="link">
                    <li><a href="javascript:void(0)">Our Story</a></li>
                    <li><a href="javascript:void(0)">Our Mission</a></li>
                    <li><a href="javascript:void(0)">Our Staff</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-block">
                  <h6 className="link-title">How Can I help?</h6>
                  <ul className="link">
                    <li><a href="javascript:void(0)">Advocacy</a></li>
                    <li><a href="javascript:void(0)">Donate</a></li>
                    <li><a href="javascript:void(0)">Fundraise</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-block">
                  <h6 className="link-title">Contact</h6>
                  <p>123 Street Name <br /> Cleveland, Ohio <br /> 55555 <br /> USA</p>
                  <ul className="link">
                    <li><a href="mailto:yourname@domain.com"><i
                      className="fa fa-envelope-o left"></i>email@thesurvivorsfoundation.com</a>
                    </li>
                    <li><a><i className="fa fa-phone left"></i>+1 (123) 456 7890</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- End Footer Info --> */}
          </div>
        </div>
        <hr />

      </footer>
      {/* <!-- END FOOTER --> */}

      {/* <!-- Scroll Top --> */}
      <a className="scroll-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      {/* <!-- End Scroll Top --> */}

    </div>
    /* <!-- Site Wraper End --> */
    // </div >
  );
}

export default App;
