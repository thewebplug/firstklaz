import { useEffect, useState } from "react";
import Gallery1 from "../img/IMG_0797.jpg";
import Gallery2 from "../img/IMG_0802.jpg";
import Gallery3 from "../img/IMG_0841.jpg";
import Gallery4 from "../img/IMG_0845.jpg";
import Gallery5 from "../img/IMG_0847.jpg";
import Gallery6 from "../img/IMG_0880.jpg";
import Gallery7 from "../img/IMG_0936.jpg";
import Gallery8 from "../img/IMG_0956.jpg";
import Gallery9 from "../img/IMG_0993.jpg";
import Gallery10 from "../img/IMG_1164.jpg";

export default function Gallery() {
const [image, setImage] = useState("")
const [open, setOpen] = useState(false)
    // const gridImages = [
    //     {
    //       id: 1,
    //       src: Gallery1,
    //       cols: 3,
    //       rows: 2,
    //       category: "landscape",
    //     },
    //     {
    //       id: 2,
    //       src: Gallery2,
    //       alt: "Urban architecture",
    //       cols: 2,
    //       rows: 1,
    //       category: "architecture",
    //     },
    //     {
    //       id: 3,
    //       src: Gallery3,
    //       alt: "Portrait of a person",
    //       cols: 1,
    //       rows: 2,
    //       category: "portrait",
    //     },
    //     {
    //       id: 4,
    //       src: Gallery4,
    //       alt: "Aerial city view",
    //       cols: 3,
    //       rows: 1,
    //       category: "aerial",
    //     },
    //     {
    //       id: 5,
    //       src: Gallery5,
    //       alt: "Wildlife photo",
    //       cols: 1,
    //       rows: 3,
    //       category: "wildlife",
    //     },
    //     {
    //       id: 6,
    //       src: Gallery6,
    //       alt: "Abstract art",
    //       cols: 2,
    //       rows: 1,
    //       category: "abstract",
    //     },
    //     {
    //       id: 7,
    //       src: Gallery7,
    //       alt: "Food photography",
    //       cols: 2,
    //       rows: 2,
    //       category: "food",
    //     },
    //     {
    //       id: 8,
    //       src: Gallery8,
    //       alt: "Street photography",
    //       cols: 2,
    //       rows: 1,
    //       category: "street",
    //     },
    //     {
    //       id: 9,
    //       src: Gallery9,
    //       alt: "Nature close-up",
    //       cols: 1,
    //       rows: 2,
    //       category: "nature",
    //     },
    //     // {
    //     //   id: 10,
    //     //   src: "https://www.onaspaceship.com/sites/g/files/g2000017991/files/2024-06/higher.jpg",
    //     //   alt: "Fashion photo",
    //     //   cols: 3,
    //     //   rows: 1,
    //     //   category: "fashion"
    //     // },
    //     // {
    //     //   id: 11,
    //     //   src: "https://www.onaspaceship.com/sites/g/files/g2000017991/files/2024-06/higher.jpg",
    //     //   alt: "Travel photography",
    //     //   cols: 3,
    //     //   rows: 2,
    //     //   category: "travel"
    //     // }
    //   ];

    const handleClose = (e) => {
      if (e.target.classList.contains("gallery__modal")) {
        setOpen(false);
      }
    };

    useEffect(() => {
      if(!!image) {
        setOpen(true);
      }
    }, [image])

    useEffect(() => {
       if(open) {
        const curtainDownload = document.querySelector(".gallery__modal__button");
  
        async function downloadImage(imageSrc, nameOfDownload = "my-image.png") {
          const response = await fetch(imageSrc);
  
          const blobImage = await response.blob();
  
          const href = URL.createObjectURL(blobImage);
  
          const anchorElement = document.createElement("a");
          anchorElement.href = href;
          anchorElement.download = nameOfDownload;
  
          document.body.appendChild(anchorElement);
          anchorElement.click();
  
          document.body.removeChild(anchorElement);
          window.URL.revokeObjectURL(href);
        }
  
        curtainDownload.addEventListener("click", () => {
            // const commonAncestor = this.closest(".press_image");
            // const imageElement = commonAncestor.querySelector(".download_image");
            downloadImage(
              image,
              `Firstklaz press image - ${Math.floor(Math.random() * 90)}`
            );
          });
       }
    }, [open]);
      
    return (
        <div className="gallery">
            <div className="gallery__title">
                press photos
            </div>
            <div className="gallery__grid-1">
            <img
                          src={Gallery1}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery1)}
                        />
            <img
                          src={Gallery2}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery2)}
                        />
            <img
                          src={Gallery3}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery3)}
                        />
            <img
                          src={Gallery4}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery4)}
                        />
            </div>
            <div className="gallery__grid-2">
            <img
                          src={Gallery5}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery5)}
                        />
            <img
                          src={Gallery6}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery6)}
                        />
            <img
                          src={Gallery7}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery7)}
                        />
            <img
                          src={Gallery8}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery8)}
                        />
            </div>
            <div className="gallery__grid-3">
            <img
                          src={Gallery9}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery9)}
                        />
            <img
                          src={Gallery10}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery10)}
                        />
            <img
                          src={Gallery1}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery1)}
                        />
            <img
                          src={Gallery5}
                        //   alt={`Grid image ${index + 1}`}
                        onClick={() => setImage(Gallery5)}
                        />
            </div>

            {open && <div className="gallery__modal"
            onClick={handleClose}
            >
                {/* <div className="gallery__modal__image"> */}

            <img
                          src={image}
                        //   alt={`Grid image ${index + 1}`}
                        />

                        <button className="gallery__modal__button">DOWNLOAD IMAGE</button>
                {/* </div> */}
            </div>}
        </div>
    )
}