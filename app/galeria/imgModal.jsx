import Image from "next/image";
import { useEffect, useState } from "react";


export default function ImgModal({modalImgPath}){
    useEffect(() => {
        typeof document !== undefined
            ? require("bootstrap/dist/js/bootstrap")
            : null;
        },[]);

    
    return(
        <>
    
        <div class="modal fade" id="img-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                <div class="modal-body" style={{textAlign: "center"}}>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <Image src={"/images/full" + modalImgPath} width={2000} height={2000} className="modal-img"/>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}