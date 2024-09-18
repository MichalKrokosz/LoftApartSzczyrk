"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar(){
    const pathname = usePathname();
    const router = useRouter()

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(pathname !== "/"){
                setScrolled(true);
                return;
            }
            else{
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                if (scrollPosition >= windowHeight-30 && pathname == "/") {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };
        
        if(pathname !== "/"){
            setScrolled(true);
        }else{
            setScrolled(false);
        }


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };;
    }, [pathname]);




    return(
        <nav className={`${"sticky-navbar"} ${scrolled ? "scrolled" : ""}`} >
          <Link href={"/"}>Główna</Link>
          <Link href={"/rezerwacja"}>Rezerwacja</Link>
          <Image src={"/images/logo.png"} width={300} height={300} />
          <Link href={"/galeria"}>Galeria</Link>
          <Link href={"/kontakt"}>Kontakt</Link>
        </nav>
    );
}