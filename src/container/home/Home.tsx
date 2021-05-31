import React from 'react'
import {useState} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
import SectionPrincipal from '../../components/sectionPrincipal/SectionPrincipal'
import SectionSecondary from '../../components/sectionSecondary/SectionSecondary'
import ContactForm from '../../components/contactForm/ContactForm'



export default function Home() {
    return (
     
        <div id="wrapper">
        <Menu/>
        <div  id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Header/>
            <SectionPrincipal/>
            <SectionSecondary/>
            <ContactForm/>            
            </div>
            <Footer/>
         </div>
        </div>
    )
}
