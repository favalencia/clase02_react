import React from 'react'

export default function Menu() {
    const handleClick = () => {
        alert('Lo siento. No hago nada aún...')
    }

    return (
        <>
               <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Ejemplo de Bootstrap</div>
                </a>

                {/* Divider */}
                <hr className="sidebar-divider my-0"/>

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Soy el menú</span></a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider"/>

                {/* Heading */}
                <div className="sidebar-heading">
                Interface
                </div>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                <a className="nav-link" href="#">     
                    <i className="fas fa-fw fa-cog"></i>
                    <span onClick={handleClick}>Item</span>
                </a>
                </li>

                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-wrench"></i>
                    <span onClick={handleClick}>Item</span>
                </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider"/>

                {/* Heading */}
                <div className="sidebar-heading">
                Addons
                </div>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                <a className="nav-link" href="#">
                     <i className="fas fa-fw fa-folder"></i>
                    <span onClick={handleClick}>Item</span>      
                    </a>         
                </li>

                {/* Nav Item - Charts */}
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span onClick={handleClick}>Item</span></a>
                </li>

                {/* Nav Item - Tables */}
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-table"></i>
                    <span onClick={handleClick}>Item</span></a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block"/>
                </ul>
        </>
    )
}
