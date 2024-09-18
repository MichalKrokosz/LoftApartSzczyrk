"use client"
import { useEffect, useState } from "react";
import Tile from "./tile";
import ImgModal from "./imgModal"
import "./gallery.css"


export default function Gallery(){

    const [modalImgPath, setModalImgPath] = useState("");

    return(
        <>
        <div className="container" style={{marginTop: "52px"}}>
            <h1 className='paragraph-title'>Galeria zdjęć</h1>
            <div className="row">
                <Tile imgPath={"/image33.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image34.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image32.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image18.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image19.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image20.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image01.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image02.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image03.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image04.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image05.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image06.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image07.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image15.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image11.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image12.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image13.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image14.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image08.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image16.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image17.jpg"} setModalImgPath={setModalImgPath} />
                
                <Tile imgPath={"/image22.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image28.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image27.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image23.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image24.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image25.jpg"} setModalImgPath={setModalImgPath} />

                <Tile imgPath={"/image29.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image30.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image31.jpg"} setModalImgPath={setModalImgPath} />

                

                <Tile imgPath={"/image35.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image36.jpg"} setModalImgPath={setModalImgPath} />
                <Tile imgPath={"/image37.jpg"} setModalImgPath={setModalImgPath} />
            </div>
        </div>
        <ImgModal modalImgPath={modalImgPath}/>
        </>
    );
}