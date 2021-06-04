import React, { useEffect, useState } from 'react'
import styles from '../../components/contactForm/ContactForm.module.css';

export default function ContactForm() {
   const [contarEnviar, setEnviar] = useState(0);


   useEffect(() => {
      if (contarEnviar > 0) {
         alert(`Has presionado el botón de enviar ${contarEnviar} veces`);
      }
   });

   return (
      <div>
         <div className="container-fluid">
            {/* Contact Us Section */}
            <div className="card shadow mb-4">
               <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold">Contacto con css en un modulo</h6>
               </div>
               <div className={styles.fondo}>
                  <div className="card-body" >
                     <div className="container">
                        <div className="row">
                           {/* Section Titile */}
                           <div className="col-md-12 wow animated fadeInLeft" >
                              <h1 className="section-title">Lorem Ipsum</h1>
                           </div>
                        </div>
                        <div className="row">
                           {/* Section Titile */}
                           <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                              <div className="find-widget">
                                 Compañia:  <a href="https://es.wikipedia.org/wiki/Link_(personaje)">Link</a>
                              </div>
                              <div className="find-widget">
                                 Direccion: <a href="https://es.wikipedia.org/wiki/Link_(personaje)">Link</a>
                              </div>
                              <div className="find-widget">
                                 Sitio Web:  <a href="https://es.wikipedia.org/wiki/Link_(personaje)">Link</a>
                              </div>
                           </div>
                           {/* contact form */}
                           <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                              <form className="shake"  method="post" id="contactForm" name="contact-form" data-toggle="validator">
                                 {/* Name */}
                                 <div className="form-group label-floating">
                                    <label className="control-label" htmlFor="name">Nombre</label>
                                    <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                                    <div className="help-block with-errors"></div>
                                 </div>
                                 {/* email */}
                                 <div className="form-group label-floating">
                                    <label className="control-label" htmlFor="email">Email</label>
                                    <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                                    <div className="help-block with-errors"></div>
                                 </div>
                                 {/* Subject */}
                                 <div className="form-group label-floating">
                                    <label className="control-label">Asunto</label>
                                    <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                                    <div className="help-block with-errors"></div>
                                 </div>
                                 {/* Message */}
                                 <div className="form-group label-floating">
                                    <label htmlFor="message" className="control-label">Mensaje</label>
                                    <textarea className="form-control" id="message" name="message" required data-error="Write your message"></textarea>
                                    <div className="help-block with-errors"></div>
                                 </div>
                                 {/* Form Submit */}
                                 <div className="form-submit mt-5">
                                    <button onClick={() => setEnviar(contarEnviar + 1)} className="btn btn-success btn-icon-split" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i> Enviar</button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
