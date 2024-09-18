"use client"
import { BsPhone, BsGeoAltFill } from "react-icons/bs";
import "./contact.css"

export default function Contact(){
    return(
        <>
        <div className="container" style={{marginTop: "52px"}}>
            <h1 className='paragraph-title'>Kontakt do nas</h1>
            <div className="row">
                <div className="col-4">
                    <p className="contact-category"><BsPhone/> Telefon</p>
                    <p className="contact-credentials">+48 000 000 000</p>

                    <p className="contact-category"><BsGeoAltFill/> Lokalizacja</p>
                    <p className="contact-credentials">Szczyrk</p>
                    <p className="contact-credentials">ul. Szczytowa 45G</p>
                    <p className="contact-credentials">Apartament nr 14</p>
                </div>
                <div className="col-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161.20036606114948!2d19.04159874312742!3d49.72575081809851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47142184386d51b1%3A0xfbfb0af0535af39f!2sLoft%20Apart%20View%20%26%20Wellness!5e0!3m2!1spl!2spl!4v1726654281204!5m2!1spl!2spl" width="100%" height="550" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
        </div>
            
        </>
    );
}