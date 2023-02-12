export const NavSection = () => {
  return (
    <div className="cd-slider-nav">
                <div className="container">
                    <nav className="navbar">
                        <div className="tm-navbar-bg">                            
                            <a className="navbar-brand text-uppercase" href="#/">CAT</a>
                            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                                &#9776;
                            </button>
                            <div className="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item active selected">
                                        <a className="nav-link" href="#0" data-no="1">Welcome <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#0" data-no="2">Cat Facts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#0" data-no="3">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#0" data-no="4">Join Us</a>
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                    </nav>
                </div>                
            </div> 
  )
}