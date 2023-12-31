import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header data-bs-theme="dark">
      <div className="collapse text-bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4>About</h4>
              <p className="text-body-secondary">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>

              <div className="d-flex justify-content-between">
                <a href="/" className="main-nav-social">
                    <i className="bi bi-facebook"></i>
                </a>

                <a href="/" className="main-nav-social">
                    <i className="bi bi-twitter"></i>
                </a>

                <a href="/" className="main-nav-social">
                    <i className="bi bi-instagram"></i>
                </a>

                <a href="/" className="main-nav-social">
                    <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-1 offset-sm-1 py-4">
              <h4>Explore</h4>
              <ul className="list-unstyled mx-2">
                <li>
                  <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-1 offset-sm-1 py-4">
                <h4>Auth</h4>
                <ul className="list-unstyled mx-2">
                    <li>
                        <NavLink to="/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>
                            Sign In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <i className="bi bi-person-circle"></i>
            <strong className="main-nav-title">Welcome</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
