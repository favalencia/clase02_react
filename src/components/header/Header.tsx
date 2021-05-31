import React from 'react'

export default function Header() {
    return (
        <div>
          {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                 
                    {/* Topbar Search */}
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" 
                                placeholder="Buscar..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Topbar Navbar */}
                    <ul className="navbar-nav ml-auto">
                        {/* Nav Item - Search Dropdown (Visible Only XS)*/} 
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            {/* Dropdown - Messages */}
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Buscar..." aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* Nav Item - Alerts */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                {/* Counter - Alerts */}
                                <span className="badge"></span>
                            </a>
                        </li>

                        {/* Nav Item - Messages */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                {/* Counter - Messages */}
                                <span className="badge badge-danger"></span>
                            </a>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        {/* Nav Item - User Information */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Felipe Valencia</span>
                                <img className="img-profile rounded-circle"
                                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"/>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* End of Topbar */}
        
        </div>
    )
}
