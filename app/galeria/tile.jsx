
import Image from "next/image";


export default function Tile({imgPath, imgTitle, setModalImgPath}){

    return(
        <div className="col-lg-4" style={{marginBottom: "28px"}}>
            <div className="img-tile">
                <a data-bs-toggle="modal" data-bs-target="#img-modal" onClick={() => setModalImgPath(imgPath)}><Image className="gallery-img" src={"/images/min" + imgPath} width={1000} height={1000}/></a>
                <p className="img-title">{(imgTitle ? imgTitle : "")}</p>
            </div>
        </div>
    );
}