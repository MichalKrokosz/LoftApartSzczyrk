"use client"
import { useEffect } from 'react'
import Image from "next/image";
import 'animate.css';

export default function Home() {



  return (
    <div>
      
      <div className='carousel-holder'>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <div id="main-carousel" className="carousel slide carousel-fade"  data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="4000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/images/full/image06.jpg" width="1000" height="1000" className="d-block" alt="Widok na góry"/>
              <h1 className='image-text'>widoku</h1>
            </div>
            <div className="carousel-item">
              <Image src="/images/full/image33.jpg" width="1000" height="1000" className="d-block" alt="..."/>
              <h1 className='image-text'>relaksie</h1>
            </div>
            <div className="carousel-item">
              <Image src="/images/full/image18.jpg" width="1000" height="1000" className="d-block" alt="..."/>
              <h1 className='image-text'>klimacie</h1>
            </div>
          </div>
        </div>
        <h1 className='main-text text-end'>zakochaj&nbsp;się<br/>w tym...</h1>
        <a className="arrow" href='#first'></a>
      </div>
      <div id='first'>
        <div className='container'>
          <h1 className='paragraph-title'>Apartament LoftApart</h1>
          <div className='row'>
            <div className='col-6'>
            <p>Ten w pełni wyposażony apartament z sypialnią jest odpowiedni dla 4 osób. Składa się z części dziennej z rozkładaną podwójną sofą, sypialni z łóżkiem podwójnym oraz aneksu kuchennego wyposażonego w najpotrzebniejsze sprzęty do przygotowania samodzielnie posiłku takie jak mikrofalówka czy ekspres do kawy. Do dyspozycji gości jest również łazienka z prysznicem. Widok z balkonu pozwoli poczuć prawdziwy górski klimat - możemy podziwiać przepiękny widok na panoramę gór i malowniczo położone Jezioro Żywieckie. Balkon wyposażony jest w wygodny stół, krzesła, a także leżaki.</p>
            <p>Apartament mieści się w malowniczej okolicy, na terenie kompleksu Wellness Złoty Widok. Całość inwestycji mieści się na zboczu góry Bieniatka w Szczyrku, co pozwoli Państwu w pełni wypocząć oraz poczuć magiczny, górski klimat. Otoczenie lasów, szlaków górskich i rowerowych sprawia, że jest to atrakcyjna okolica zarówno dla poszukujących kontaktu z naturą, dla fanów spokoju i wyciszenia, jak i dla osób lubiących spędzać swój urlop aktywnie. W odległości 1,5 km można znaleźć skocznię narciarską i kryty basen, a stacja narciarska oddalona jest tylko o 3 km. Bliska odległość do punktów handlowo-gastronomicznych to kolejna z zalet tej lokalizacji. W 15 minut można dotrzeć do centrum miasta, supermarket Biedronka oddalony jest o niecały kilometr, a do małego sklepiku 600 m.</p>
            </div>
            <div className='col-6'>
              <div className='home-images '>
                <Image src={"/images/full/image04.jpg"} width={1000} height={1000}/>
              </div>
              <div className='home-images'>
                <Image src={"/images/full/image11.jpg"} width={1000} height={1000}/>
              </div>
            </div>



            <h2 className='paragraph-title'>Strefa wellness</h2>
            <div className='col-6'>
              <p>Goście mają również możliwość korzystania z dostępnej na terenie budynku strefy wellness.</p>
            </div>
            <div className='col-6'>
              <div className='home-images'>
                <Image className='map-image' src={"/images/full/image25.jpg"} width={1000} height={1000}/>
              </div>
            </div>



            <h2 className='paragraph-title'>Parking</h2>
            <div className='col-6'>
              <p>Dla gości zmotoryzowanych dostępny jest bezpłatny parking na posesji.</p>
            </div>
            <div className='col-6'>
              <div className='home-images'>
                <Image className='map-image' src={"/images/full/image01.jpg"} width={1000} height={1000}/>
              </div>
            </div>




            <h2 className='paragraph-title'>Atrakcje w Szczyrku</h2>
            <div className='col-6'>
              <a href="/images/mapa_zima.jpg"> <Image className='map-image' src={"/images/mapa_zima.jpg"} width={1000} height={1000}/></a>
            </div>
            <div className='col-6'>
              <Image className='map-image' src={"/images/mapa_lato.jpg"} width={1000} height={1000}/>
            </div>
          </div>
        </div>
      </div>
      


    </div>
  );
}
