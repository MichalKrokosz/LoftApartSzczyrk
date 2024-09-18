"use client"
import Image from "next/image";
import { BsPhone, BsGeoAltFill } from "react-icons/bs";
import "./reservation.css"

export default function Contact(){
    return(
        <>
        <div className="container" style={{marginTop: "52px"}}>
            <h1 className='paragraph-title'>Zarezerwuj swój pobyt</h1>
            <div className="row text-center mt-5">
                <div className="col-6" style={{borderRight: "1px solid white"}}>
                    <h3 className="mb-3">Poprzez Booking.com</h3>
                    <a href="https://www.booking.com/hotel/pl/loft-apart-view-amp-wellness.en-gb.html" target="_blank"><Image src={"/images/booking.jpg"} width={1000} height={1000} style={{width: "100%", height: "auto"}}/></a>
                    <div className="booking-button"><a href="https://www.booking.com/hotel/pl/loft-apart-view-amp-wellness.en-gb.html" target="_blank">
                    <img src="/images/booking.svg"/> Zarezerwuj już teraz</a></div>
                </div>
                <div className="col-6">
                    <h3 className="mb-3">Telefonicznie</h3>
                    <p>Zachęcamy również do telefonicznego rezerwowania pobytu</p>
                    <p className="contact-category"><BsPhone/> telefon</p>
                    <p className="contact-credentials">+48 000 000 000</p>
                </div>
            </div>
            
        </div>
        </>
    );
}