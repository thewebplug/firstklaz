import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Amanda from "../img/Amanda.png";
import Ilg from "../img/234efw32232.jpg";
import Genzfuji from "../img/genzfuji.jpg";
import Genzfaaji from "../img/genz-faaji.jpg";
import GenzArewa from "../img/genz-arewaa.jpg";
import FandFFlyer from "../img/F&F Flyer.jpg";
import HelicopterGif from "../img/SaveInsta.App - 3056123081071349367.gif";
import SoGif from "../img/SaveInsta.App - 3096553013569957506_3552322412.gif";
import IlgGif from "../img/SaveInsta.App - 3127362897261442423_3552322412.gif";
import SlidersGif from "../img/SaveInsta.App - 2831572746589319702.gif";
import Só from "../img/34wefcd.jpg";
import Inwgs from "../img/2e3frevdsadX.jpg";
import Sliders from "../img/frdsvaf.jpg";
import ShowThem from "../img/cdac3223.jpg";
import Olomi from "../img/olomi.jpg";
import Sacrifice from "../img/sacrifice art.jpg";
import Gbese from "../img/cdsazvx 32.jpg";
import Tonight from "../img/tonight.jpg";
import Ogini from "../img/Ogini.jpg";
import InwgsGif from "../img/SaveInsta.App - 2920846823080677928_3552322412 (1).gif";
import { Tooltip } from "react-tooltip";
import HelicopterBoyFreestyle from "../img/ednvje65453.jpg";
import LagosStreetShow from "../img/360098092_18293309251114413_2192173551435584222_n.jpg";
import FAndFPh from "../img/firstKlaz-and-friends-ph.jpg";
import FAndFAbj from "../img/firstKlaz-and-friends-abj.jpg";
import BlackBack from "../img/firsty black back.jpg";
import BlackFront from "../img/firsty black front.jpg";
import WhiteBack from "../img/firsty white back.jpg";
import WhiteFront from "../img/firsty white front.jpg";
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
import AbujaStreetShow from "../img/351750477_1003886440969838_7863322309839893458_n.jpg";
import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import ElasticEmailClient from 'elastic-email-client';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { subscribeCitizen } from "../api";
import ModelViewer from "./Model";
import LogoModelViewer from "./LogoModel";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  let showsRef = useRef();
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gotIt, setGotIt] = useState(false);
  const [amandaMessage, setAmandaMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enter, setEnter] = useState(false);
  const [page, setPage] = useState("");

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setGotIt(true);
    setAmandaMessage("got it");
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("subscribe-modal-cover")) {
      setModalOpen(false);
    }
  };
  const handleModalCloseCoverArt = (e) => {
    if (e.target.classList.contains("cover-art-modal-cover")) {
      setGotIt(false);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setAmandaMessage("guess");
      }, 1000);
    }
  }, [modalOpen]);
  useEffect(() => {
    if (page === "music" || page === "store" || page === "shows") {
      const musicNextBtn = document.querySelector(".music_next_btn");
      const musicPrevBtn = document.querySelector(".music_prev_btn");
      const musicSlider = document.querySelector(".music_inner");
      const musicSliderItem = document.querySelector(".slider_item");

      let musicSliderItemDimensions = musicSliderItem.getBoundingClientRect();
      let amountToSlideMusic = musicSliderItemDimensions.width + 40;

      musicNextBtn.addEventListener("click", () => {
        musicSlider.scrollLeft += amountToSlideMusic;
      });

      musicPrevBtn.addEventListener("click", () => {
        musicSlider.scrollLeft -= amountToSlideMusic;
      });
    }
  }, [page]);
  useEffect(() => {
    if (page === "videos") {
      const videoNextBtn = document.querySelector(".video_next_btn");

      const videoPrevBtn = document.querySelector(".video_prev_btn");

      const videoSlider = document.querySelector(".videos_inner");

      const videoSliderItem = document.querySelector(".youtube_video");

      let videoSliderItemDimensions = videoSliderItem.getBoundingClientRect();

      let amountToSlideVideo = videoSliderItemDimensions.width;

      videoNextBtn.addEventListener("click", () => {
        videoSlider.scrollLeft += amountToSlideVideo;
      });

      videoPrevBtn.addEventListener("click", () => {
        videoSlider.scrollLeft -= amountToSlideVideo;
      });
    }
  }, [page]);
  useEffect(() => {
    if (page === "gallery") {
      const curtainDownload = document.querySelectorAll(".curtain_download");

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

      curtainDownload.forEach((element) => {
        element.addEventListener("click", () => {
          const commonAncestor = element.closest(".press_image");
          const imageElement = commonAncestor.querySelector(".download_image");
          downloadImage(
            imageElement.src,
            `Firstklaz press image - ${Math.floor(Math.random() * 90)}`
          );
        });
      });
    }
  }, [page]);

  // useLayoutEffect(() =>{
  //   let smoother = ScrollSmoother.create({
  //     smooth: 1.8, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // looks for data-speed and data-lag attributes on elements
  //     smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //   });

  //   const storeNav = document.querySelector(".music_nav");
  //   storeNav.addEventListener("click", () => smoother?.scrollTo(".store", true, "top"))

  //   const musicNav = document.querySelector(".music_nav")
  //   musicNav.addEventListener("click", () => smoother?.scrollTo(".music", true, "top"))

  //   const videoNav = document.querySelector(".video_nav")
  //   videoNav.addEventListener("click", () => smoother?.scrollTo(".videos", true, "top"))

  //   const showsNav = document.querySelector(".shows_nav")
  //   showsNav.addEventListener("click", () => smoother?.scrollTo(".shows", true, "top"))
  // }, [])

  // const MAILCHIMP_URL = `https://us12.list-manage.com/subscribe/post?u=9201577588cdd192c20706dd9&id=5eb347ea22`; // Replace with your actual URL
  // // const MAILCHIMP_URL = "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"; // Replace with your actual URL

  // const mailchimpApiKey = "a22aaefea5a25f6ab5ced04913797545-us12";
  // const listId = "5eb347ea22";
  // const apiUrl = `https://us12.api.mailchimp.com/3.0/lists/5eb347ea22/members/`;

  // const subscribeUser = async (email, name) => {
  //   const data = {
  //     email_address: email,
  //     status: "pending", // Set the status to 'pending' to trigger the confirmation email
  //     merge_fields: {
  //       FNAME: name,
  //     },
  //   };

  //   try {
  //     const response = await axios.post(apiUrl, data, {
  //       auth: {
  //         username: "anystring",
  //         password: mailchimpApiKey,
  //       },
  //     });

  //     console.log("User subscribed successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error subscribing user:", error.response.data);
  //   }
  // };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      const tl = gsap.timeline({
        //  delay: 10
      });
      // tl.to(".helicopter", {
      //   y: 5,
      //   duration: 0.5,
      // });
      // tl.to(".helicopter", {
      //   y: -5,
      //   duration: 0.5,
      // });
      // tl.to(".helicopter", {
      //   y: 0,
      //   duration: 0.5,
      // });
      // tl.to(".firstklaz_img", {
      //   x: 0,
      //   "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
      //   duration: 0.7,
      // });

      // tl.to(".bio_hidden1", {
      //   width: "20rem",
      //   opacity: 0.38,
      //   duration: 0.7,
      //   // delay: 4
      // });
      // tl.to(
      //   ".bio_hidden2",
      //   {
      //     width: "20rem",
      //     opacity: 0.38,
      //     duration: 0.7,
      //     // delay: 4
      //   },
      //   "=-0.7"
      // );

      // tl.to(
      //   ".bio_link",
      //   {
      //     fontWeight: 700,
      //     duration: 1,
      //     stagger: 0.2,
      //     // delay: 6
      //   },
      //   "-=0.35"
      // );

      tl.to(".amanda_container", {
        // scrollTrigger: {
        //   trigger: ''
        // }
        right: "-70px",
        duration: 1,
        delay: 3,
        // onComplete: () => setModalOpen(true)
      });

      mm.add("(min-width: 1025px)", () => {
        const tl2 = gsap.timeline({
          defaults: {
            x: 0,
            opacity: 1,
            duration: 1,
            zIndex: 1,
          },

          scrollTrigger: {
            trigger: ".press",
            // markers: true,
            start: "4% 30%",
            end: "25% 15%",
            scrub: true,
            // once: true,
          },
        });

        tl2.to(".amanda_and_i", {});

        tl2.to(".searching", {}, "-=1");

        tl2.to(".standing_ovation", {});

        tl2.to(".pose", {}, "-=1");

        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".press",
            // markers: true,
            scrub: true,
            start: "30% 30%",
            end: "40% 15%",
            // once: true,
          },
        });

        tl3.to(".second_phase", {
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.5,
        });
        tl3.to(
          ".second_phase_down",
          {
            y: 0,
            duration: 1,
            opacity: 1,
            stagger: 0.5,
          },
          "-=2"
        );

        gsap.to(".trans, .trans_fly", {
          scrollTrigger: {
            trigger: ".press",
            scrub: true,
            // markers: true,
            start: "50% 30%",
            end: "60.8% 30%",
            // once: true,
          },
          transform: "rotate(0deg)",
          duration: 3,
          opacity: 1,
        });
      });

      mm.add("(max-width: 1024px)", () => {
        const tl2 = gsap.timeline({
          defaults: {
            x: 0,
            opacity: 1,
            duration: 1,
            zIndex: 1,
          },

          scrollTrigger: {
            trigger: ".press",
            // markers: true,
            start: "4% 60%",
            end: "10% 45%",
            scrub: true,
            once: true,
          },
        });

        tl2.to(".amanda_and_i", {});

        tl2.to(".searching", {}, "-=1");

        tl2.to(".standing_ovation", {});

        tl2.to(".pose", {}, "-=1");

        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".press",
            // markers: true,
            scrub: true,
            start: "30% 60%",
            end: "40% 45%",
            once: true,
          },
        });

        tl3.to(".second_phase", {
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.5,
        });
        tl3.to(
          ".second_phase_down",
          {
            y: 0,
            duration: 1,
            opacity: 1,
            stagger: 0.5,
          },
          "-=2"
        );

        gsap.to(".trans, .trans_fly", {
          scrollTrigger: {
            trigger: ".press",
            scrub: true,
            // markers: true,
            start: "50% 60%",
            end: "60.8% 60%",
            once: true,
          },
          transform: "rotate(0deg)",
          duration: 3,
          opacity: 1,
        });

        gsap.to(".hero__helicopter-svg", {
          scrollTrigger: {
            trigger: ".store",
            start: "70% top",
            end: "80% top",
            scrub: true,
            // markers: true,
          },
          strokeDasharray: 0,
          strokeDashoffset: 0,
        });
      });

      // gsap.to(".shows .performance", {
      //   scrollTrigger: {
      //     trigger: ".shows_inner",
      //     //   markers: true,
      //     start: "top 48%",
      //     end: "top",
      //     scrub: true,
      //     pin: ".shows",
      //     once: true,
      //   },

      //   scale: 1.7,
      //   duration: 10,
      //   right: "-200px !important",
      //   delay: 4,
      // });

      gsap.to(".hero__helicopter-svg", {
        scrollTrigger: {
          trigger: ".store",
          start: "50% top",
          end: "80% top",
          scrub: true,
          // markers: true,
        },
        strokeDasharray: 0,
        strokeDashoffset: 0,
      });

      //   tl4 =
    });

    return () => ctx.kill();
  }, []);

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const response = await subscribeCitizen(email);
  //   console.log("response", response);
  //   setAmandaMessage("subscribed");
  //   setEmail("");
  //   setLoading(false);
  //   setTimeout(() => {
  //     setAmandaMessage(null);
  //   }, 10000);
  // };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Updated dimensions to ensure full coverage of grid
  const imageAspects = [
    { cols: 3, rows: 1 }, // First row
    { cols: 2, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 3, rows: 1 }, // Second row
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 }, // Third row
    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 4, rows: 1 }, // Fourth row
    { cols: 2, rows: 1 },
  ];

  const gridImages = [
    {
      id: 1,
      src: Gallery1,
      cols: 3,
      rows: 2,
      category: "landscape",
    },
    {
      id: 2,
      src: Gallery2,
      alt: "Urban architecture",
      cols: 2,
      rows: 1,
      category: "architecture",
    },
    {
      id: 3,
      src: Gallery3,
      alt: "Portrait of a person",
      cols: 1,
      rows: 2,
      category: "portrait",
    },
    {
      id: 4,
      src: Gallery4,
      alt: "Aerial city view",
      cols: 3,
      rows: 1,
      category: "aerial",
    },
    {
      id: 5,
      src: Gallery5,
      alt: "Wildlife photo",
      cols: 1,
      rows: 3,
      category: "wildlife",
    },
    {
      id: 6,
      src: Gallery6,
      alt: "Abstract art",
      cols: 2,
      rows: 1,
      category: "abstract",
    },
    {
      id: 7,
      src: Gallery7,
      alt: "Food photography",
      cols: 2,
      rows: 2,
      category: "food",
    },
    {
      id: 8,
      src: Gallery8,
      alt: "Street photography",
      cols: 2,
      rows: 1,
      category: "street",
    },
    {
      id: 9,
      src: Gallery9,
      alt: "Nature close-up",
      cols: 1,
      rows: 2,
      category: "nature",
    },
    // {
    //   id: 10,
    //   src: "https://www.onaspaceship.com/sites/g/files/g2000017991/files/2024-06/higher.jpg",
    //   alt: "Fashion photo",
    //   cols: 3,
    //   rows: 1,
    //   category: "fashion"
    // },
    // {
    //   id: 11,
    //   src: "https://www.onaspaceship.com/sites/g/files/g2000017991/files/2024-06/higher.jpg",
    //   alt: "Travel photography",
    //   cols: 3,
    //   rows: 2,
    //   category: "travel"
    // }
  ];

  const handlePdfDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch("/firstklaz-epk.pdf");
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = "firstklaz-epk.pdf";
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Revoke the blob URL to free up memory
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  return (
    <div>
      <div
        // data-scroll-section
        className="home"
        id="smooth-wrapper"
      >
        <div id="smooth-content">
          <header>
            <div className="nav">
              <a
                href="#about"
                className="about_nav"
                onClick={() => setPage("about")}
              >
                about
              </a>
              <a
                href="#store"
                className="music_nav"
                onClick={() => setPage("store")}
              >
                store
              </a>
              <a
                href="#music"
                className="music_nav"
                onClick={() => setPage("music")}
              >
                music
              </a>
              {/* <a href="#videos" className="video_nav">
                videos
              </a>
              <a href="#shows" className="shows_nav">
                shows
              </a> */}
            </div>
            <div
              onClick={() => (active ? setActive(false) : setActive(true))}
              className={active ? "hamburger hamburger_active" : "hamburger"}
            >
              <div className="hamburger1"></div>
              <div className="hamburger2"></div>
              <div className="hamburger3"></div>
            </div>
            <div className="header_title">
              {/* <div className="helicopter">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="72" height="72" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_8_21034"
                        transform="scale(0.0138889)"
                      />
                    </pattern>
                    <image
                      id="image0_8_21034"
                      width="72"
                      height="72"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC91BMVEUAAABEPDpaUlFLRkXKtLN4cW96d3fWz9BiXl3xbGqek5Z4cXDGf34wKimkhoR2b23+hoE9NTN2jJP0gX29U1BqY2JjXl38dHFzamnDUVBcVlROSkp1cXDZh4WAfHuxYl+vPDvQPTtZVVTCWFZsl6TCPzw9NjXIOzk+ODa1a2nkaGakwMe6VlR9MTBOSUjMLixEOTeaLixhVlVTTk2yWFdSNDLLIyHBZ2epPTycLCuhPDt0aGfjh4WJQUKg3+9DPj2a0N+O0eTjoaBxZ2ymSklyxtzBfHtzaGeOi4rnZGKVkZHBjIuaRkY+g5lmX2ClOznHX1WoKCe5Ozm7XlyxWVfGeXjKNjWuipHIcXFxvtOqKinCKijSMS+l3u7MKCb+cm/IcnL6SEMrosNLRURmudAtmrjHbGt8dXN5ZGOePz6c2Ojtbm6Mzd5GkKSOy9x2s8UqGxr4ZGCak5L8enaP0OO5R0P/iIZZVVTyZWOalJOloJ9cuNHzZ2OWV1f8VlT/v7hPq8WcOTkjocQjn8DKIiCdNTTEIR+uJiX9enTB8f3/fnv/dHKjJCK68P65WFiiPTyNIB9pzOcnpcf7Qjsmqcz+bWqoRUSoMjCaMTCU4vcvrdAipMj8Yl3EWlKiQkG8NjPK8/6q6/2M3vT/k5H+jovva2b/ZmPLV0yRLSzR9f+D2fH/WFXqWFOqS0rdUT/RNTBYxeOSjpL3k4//iYe/XVuxT065Tkn9SkbVQDy8LSue5/p70upJvd1AuNn9nJjxXljSW1LVWEjlSkf0TTnkRTHwNSuyLSudKinkMibQJCC06fa4yNCCdXmBV1r9Uk7HNDI3s9XGY2PgYl/fUk7gWkfUUUHqUz3xRTy0IyJ7Hh2v4e+x1+G+sbhWjqKzU1J6Q0XLTUC8Ih+YIB4ukq/GnqJRb3+udXPqdHLwT0jMPzOSq7grlrU5jKbtkpFlfYtXYW76OC/dfX6WfX5dR0S1Q0KmuML/q6VfhZXUbWuWv8s9ob10kJxjFBNL9rkTAAAAgXRSTlMA8jv5D5tmB50WCcEr+Bab/v0Q/f5MPsnWgn5HPzwl+62TYUcw/PXk3zgvJCP43cjGvrmcYv3y7uPafmNZ/v39/Pr599i6lX1cTkci/v338O3r4NencGj8+Pfy5uPe2dPS0s6wq6enmpiUhn12XlRU++HY19DEwpdy8+7bubWqnp0dcuvMAAAHOUlEQVRYw+3WZ1RSARTA8WdRFJFhoCUFmCvLNGdWtvfee++99y4hy8ASM5VCJE2RUjGScFWoYblNzWxomS1t7/2h+x5QSjJOp771/xLniL/uvY9M5H//+9+/rjmxc+fOf8PpMGvWrK6InujDRhgDTemWk7O/A6IzvGOrxm6OOMMDdc3Jyek2HNGV6dINO6TbN7SwNWqgrs2R9suaLF3apF6toCZuY/KlUmn+O7dWmuq9pZk3XuV06bofgs2sTRrO3kydji+7q6EpqNPNBlawsGgPWTTSypxKXdjShUq11v4CvB99O1090Bxw0M30Zb3OHTGUJerofWbDV1q6rXPpabmtF03PX9d5jnoznfUi+5VU2dmVRrNJ5DYrdX5uO6DOAT2b4dqwE0lsDofNJiUmkjjrtzXXMdABcA50wJsSdA1EIvlxgkVhYbFQmEgUu6ehofAdDqB1szF3sdZxob0fP146FUVi+wWLYguTgpIKk+bTGhhoJgZ19XZw0AHRBlw6d+7cJehUIpsTVlNeHhQ0f3iDA0GDHFwaNYAQbNeu3CWxEwqFdlXpJU/IUVEkv+i4mnKQmtcNh7NRDeTvuZD+O9N67aKdU8MKazKTkxOKilJSrgjt0p+QgVLUlK/fOHfu3DaatmzZGA2VUDx7L8H9zgyeHvj0CUdVcHBwmKK0NuWKXQmZ7BcdDSfjcPx+xob8Phe8cxJuNtVybBdNT0v78CLqFBQFJcKjh3vHJacIgTpHgtOHQQqFIg6rtLTsXktP37EeWsdZs6l/ZL+KF6dOnYOwW4MHFCdYkVyUHB2tKIWFa4uEQtgYLTTU18nz3qhBHvj6zqr+ffrceUgmkRNfDBgw4AX5SRQ4KkgUW55wH+3mzYOaQsd2H/XOzEnMXV7fwYOTm/eG40ceUJF35/btvIfRJRw2hH0wY5OCsm8evAlhyIzuVpYeNkNNPG9BroR60Kp+t3MrnoiCyRV3DkGHD9/5nBknEsHBReDAh/J1NgiY4trTpgsBIVg7mHDRXOudes3s27kPFYqwN3mHTkKo9DAzubB46rS42NhCcIJeZ+X4h0KuHqpvpJq5mPfgcqure3Sp4zhuAieupvBN3snTp1EHpLzMhMynqX2kpUlJmJOVfd83YOxyzbdZuNORntXV/v7jbepAK24frsgsTyrJOw1hA8FupQkx/SIiIqWZQRAK5YQO8vh1ELhxlx7+0JQ6A80+nJeelZVZcRIcjImIiLiTkSDonxp5JvBx0GWoXKlUUrR/gvVEoZ51BsrNfZyVnTX1EDAqJTU1tV9GgiztTODZC5USFLpxQykZR9SCsJGsCHUG+pCcnR3TDz1NLiDH0b5k1D4G5tqJo4zLNyCJpGwcDdEeafz4Gb8e25o+qY+zs5XS4xG5ERGgRKKdeVpW+/bitRPHjvLzb1yHMjJifodMO0GEn5sd7y9QKsumRx6HgIDS0gKlVVX5wBw9yn+pYmIE4zoh+iIMjnxaplQ+DsQEIAIDz569cPFtVdUn/lEmk8n/lA7FCASCiV30Qq0Hp0klEokUACDAuHARVvrKkMdUMlHn2EtAKBS5XD6JYAAKfCspk3wDAjOunUA3qhTIZc8x50HvUMjHx2esDWIAOpsvKcuoxAxAQGEyWfmhB30eAHPs+T2er6+vDwQD6Y2w6EI+nLLyF8JiMUfzuP5Oz44de/CqNyBYg+DU+tt38WVMTPpLQFQK9OxeNddf/Gj0KxhHBYUzJiOGWn2iUiBIz2dCKobJeiXmVl+9KhZrtgqPZwzBG4RsFzxjCASM5xqGz3ok5nKvQuAABMxdxhAcYrDWi1kD34fICx5gT5vPf/ZKLObyeDyA1MwRL2Mc2I31fFRAQEjBaBafz3rw6B5PLPZF0zAyr8lGOTAS81F8eHjIqIKBYwp6+/iKeQHqwkPOU2TF83pp7mP4SqxH8SHhIVBAADpFfAha/Hm5/D2v9xIaAhktDTxyF6aCIeLPq4OdZBTudyei8Q5Ii0czimVH5O/lFOjuETRZcbHXPKdbPYyHsDutHjJvWjFFzKMUy2SgQBOXTCaOdOV2JxpLtFb/NCf2GtL91i3GNC8vr4kTJ1l6EOHfFs411FiI4O4Okipi96s9etFoNOJIU4Jat7oywVhooZm15rWH0F/7v3IrIUDGZW7i0AjBwm1OGd8J+WOIQLV3aYTNQeuYYoXXhoo6Eo1+YFvtHdyHDrW2nlR0ZZm5qnaarGo7eltAdIJ+xBSHSlRnk75QQBHPrKVWTslCT3t7exOH9voht2at0e3o5t5DqcvsUnY3025Qgh32J5WuH3I2oyKahhdNGIloZ5lg3I287R3a/fwFPMUS+WMIt9XMxQLBGtlxZqc/hSBTNzPnoSNs6SMdJwutHE2xcHVCIewF3pBEd+/beMyYtm3bDiwY2BarRd3aFhSoXrSiG/wYebs5Ozs3NpRzeyMO5Wg7YsQwqKmeRujd7QeyPs4sT3vtZgAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
              </div> */}
              
              <LogoModelViewer handleHome={() => setPage("")} />
            </div>
            {/* <div className="social_groups social_groups_desktop">
              <a href="https://instagram.com/firstklaz" target="_blank">
              <svg
                fill="#ffffff"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="5151e0c8492e5103c096af88a50059a5">
                    {" "}
                    <path
                      display="inline"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M66.084,0.5h379.819c36.079,0,65.597,29.505,65.597,65.584 v379.819c0,36.079-29.518,65.597-65.597,65.597H66.084C30.005,511.5,0.5,481.982,0.5,445.903V66.084 C0.5,30.005,30.005,0.5,66.084,0.5L66.084,0.5z M372.734,57.264c-12.65,0-23.005,10.355-23.005,23.005v55.067 c0,12.65,10.354,23.005,23.005,23.005h57.762c12.65,0,23.005-10.354,23.005-23.005V80.269c0-12.65-10.354-23.005-23.005-23.005 H372.734L372.734,57.264z M453.738,216.59h-44.975c4.254,13.897,6.55,28.606,6.55,43.852c0,84.996-71.111,153.898-158.839,153.898 c-87.716,0-158.827-68.902-158.827-153.898c0-15.245,2.295-29.954,6.55-43.852H57.276v215.853c0,11.178,9.132,20.322,20.311,20.322 h355.841c11.166,0,20.311-9.145,20.311-20.322V216.59L453.738,216.59z M256.475,155.447c-56.677,0-102.625,44.525-102.625,99.443 s45.948,99.443,102.625,99.443c56.688,0,102.636-44.525,102.636-99.443S313.163,155.447,256.475,155.447z"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
              </a>
              <a href="https://www.facebook.com/firstklaz/" target="_blank">

              <svg
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M715.637 960h171.897C920.348 960 960 932.759 960 898.909V125.091C960 91.243 920.348 64 887.534 64H113.716C77.004 64 64 96.892 64 125.091v773.818C64 927.109 77.004 960 113.716 960h439.012V634.182H410.181c-11.257 0-20.363-9.106-20.363-20.363V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.354 88.056-183.272 192.261-183.272h113.193c11.257 0 20.365 9.106 20.365 20.363V288c0 11.258-9.108 20.365-20.365 20.365h-72.465c-34.444 0-70.079 19.052-70.079 50.908v112h131.17a20.27 20.27 0 0 1 16.507 8.472c3.856 5.291 4.891 12.133 2.823 18.337l-40.728 122.181a20.403 20.403 0 0 1-19.33 13.919h-90.442V960z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M807.708 451.723h-92.071v19.549h112.288c-0.161-3.938-1.326-7.809-3.711-11.078a20.263 20.263 0 0 0-16.506-8.471zM513.629 940.451H75.445C83.3 951.952 95.599 960 113.716 960h439.012V634.183H513.63v306.268zM839.283 145.456c-0.451-10.855-9.231-19.549-20.198-19.549H705.89c-104.205 0-192.261 83.919-192.261 183.272v142.544H371.083c-11.257 0-20.363 9.108-20.363 20.365v122.181c0 11.258 9.107 20.364 20.363 20.364h18.899c-0.012-0.286-0.164-0.527-0.164-0.815V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.353 88.056-183.272 192.261-183.272h94.295z"
                    fill=""
                  ></path>
                  <path
                    d="M900.123 65.251c12.221 10.76 20.778 24.748 20.778 40.29V879.36c0 33.85-39.651 61.091-72.467 61.091H715.637V960h171.896C920.348 960 960 932.759 960 898.909V125.091c0-29.6-30.322-54.141-59.877-59.84z"
                    fill=""
                  ></path>
                </g>
              </svg>
</a>

<a href="https://x.com/firstklaz_" target="_blank">

              <svg
                fill="#ffffff"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="7935ec95c421cee6d86eb22ecd12fcba">
                    {" "}
                    <path
                      style={{ display: "inline" }}
                      d="M447.043,447.477c0,17.578-6.273,32.66-18.838,45.186c-12.549,12.563-27.619,18.838-45.197,18.838 H256.371c-52.745,0-97.831-18.726-135.27-56.164c-37.444-37.438-56.145-82.512-56.145-135.27V64.573 c0-18.089,6.231-33.284,18.701-45.61C96.126,6.675,111.353,0.5,129.335,0.5c17.447,0,32.448,6.288,44.899,18.85 c12.494,12.538,18.744,27.595,18.744,45.173v63.998h189.793c17.652,0,32.771,6.288,45.396,18.85 c12.602,12.525,18.875,27.596,18.875,45.173c0,17.553-6.273,32.623-18.838,45.186c-12.549,12.525-27.656,18.813-45.234,18.813 H192.979v63.462c0,17.641,6.137,32.61,18.463,44.974c12.319,12.326,27.278,18.489,44.874,18.489h126.655 c17.578,0,32.686,6.299,45.234,18.837C440.77,414.854,447.043,429.924,447.043,447.477"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
              </a>
              <a href="https://www.tiktok.com/@firstklaz" target="_blank">

              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>tiktok</title>{" "}
                  <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
                </g>
              </svg>
              </a>
              <a href="https://www.youtube.com/@firstklaz" target="_blank">
              <svg
                className="youtube"
                viewBox="0 -146.13 500.612 500.612"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M83.743 168.876c-4.007-1.375-6.746-3.24-10.09-6.863-7.024-7.611-7.41-9.883-7.41-43.682 0-32.567.5-35.634 7.044-43.281 9.175-10.718 30.39-10.401 39.45.589 6.017 7.3 6.506 10.55 6.506 43.192 0 25.834-.224 30.14-1.8 34.66-2.416 6.922-9.535 13.619-16.758 15.764-6.812 2.023-10.167 1.949-16.942-.38zm12.455-15.666c4.09-1.57 4.545-5.006 4.545-34.282 0-18.682-.376-28.828-1.13-30.482-2.53-5.554-11.21-5.554-13.74 0-.754 1.654-1.13 11.8-1.13 30.482 0 32.665.417 34.56 7.668 34.825 1.193.043 2.897-.202 3.787-.543zm44.427 15.118c-1.44-.782-3.466-3.128-4.5-5.21-1.745-3.512-1.903-7.104-2.179-49.537l-.297-45.75h19.094v41.877c0 35.843.214 42.057 1.487 43.112 2.216 1.839 5.816.493 9.887-3.697l3.626-3.733V67.832h19v101h-19v-10.17l-4.75 4.217c-2.612 2.319-6.198 4.832-7.968 5.585-4.126 1.753-11.043 1.687-14.4-.136zM24.73 141.08l-.015-27.75-12.357-39.5L.001 34.33l10.04-.287c5.877-.168 10.293.124 10.651.704.337.545 3.524 12.035 7.082 25.533 3.56 13.498 6.698 24.544 6.977 24.546.28.002 2.902-9.108 5.828-20.246 2.927-11.137 5.992-22.612 6.813-25.5l1.493-5.25h10.536c8.584 0 10.438.258 10.003 1.39-.293.764-5.967 18.745-12.607 39.957l-12.073 38.567v55.086h-20l-.014-27.75z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M284.873 207.783c-48.855-1.631-62.084-5.108-71.078-18.688-3.634-5.486-7.713-17.764-9.012-27.128-4.56-32.866-3.44-101.4 2.041-125.021 4.964-21.391 16.637-31.87 37.931-34.053C265.673.748 320.203-.42 373.243.14c57.262.604 84.221 1.829 93.975 4.27 19.08 4.773 28.336 18.828 31.563 47.92.61 5.5 1.36 24.702 1.666 42.67 1.234 72.535-4.223 95.61-25.02 105.799-7.853 3.848-12.99 4.732-35.185 6.057-24.106 1.438-122.48 2.025-155.369.927zm24.034-39.536c1.686-.873 5.038-3.404 7.45-5.63l4.386-4.04v10.254h19v-100h-19V145.095l-4.368 4.367c-4.688 4.689-6.584 5.274-9.06 2.798-1.378-1.378-1.572-6.626-1.572-42.5V68.83h-19v43.319c0 47.787.393 51.568 5.768 55.58 3.403 2.539 11.964 2.809 16.396.518zm91.45-.323c1.745-1.064 4.163-4.03 5.5-6.746 2.346-4.764 2.393-5.42 2.722-37.828.36-35.532-.212-41.948-4.386-49.15-2.319-4.002-7.849-7.37-12.104-7.37-4.098 0-9.97 2.757-14.447 6.782l-4.898 4.403V34.83h-18v134h18v-9.232l4.105 3.709c2.258 2.039 5.521 4.324 7.25 5.076 4.643 2.022 12.557 1.798 16.258-.46zm-23.864-16.312l-3.75-2.174v-61.33l4.438-2.354c3.601-1.91 4.968-2.167 7.25-1.366 4.931 1.732 5.462 5.552 5.12 36.78l-.308 27.838-2.806 2.412c-3.435 2.954-5.123 2.987-9.944.194zm84.25 16.135c9.664-4.381 14.016-11.79 14.777-25.158l.5-8.758h-19.278v5.936c0 7.27-1.127 10.446-4.487 12.648-3.787 2.48-8.494.904-10.76-3.605-1.369-2.721-1.75-6.037-1.75-15.23l-.003-11.75h36v-14.683c0-18.48-1.445-24.37-7.676-31.3-5.506-6.123-11.405-8.561-20.324-8.397-7.393.135-12.333 1.978-17.522 6.534-8.48 7.447-9.766 14.082-9.259 47.847.33 21.939.693 27.284 2.117 31.057 2.432 6.442 6.825 11.347 12.858 14.354 6.8 3.386 17.95 3.614 24.807.505zm-21-68.45c0-12.438 3.191-16.682 11.221-14.918 4.031.886 5.78 5.398 5.78 14.919v7.532h-17v-7.532zm-172 12.034v-57.5h22v-19h-63v19h21v115h20v-57.5z"
                    fill="#fffffffffff"
                  ></path>
                </g>
              </svg>
              </a>
            </div> */}

            <div className="nav">
              <a
                href="#about"
                className="about_nav"
                onClick={() => setPage("gallery")}
              >
                gallery
              </a>
              {/* <a href="#store" className="music_nav">
                store
              </a> */}
              {/* <a href="#music" className="music_nav">
                music
              </a> */}
              <a
                href="#videos"
                className="video_nav"
                onClick={() => setPage("videos")}
              >
                videos
              </a>
              <a
                href="#shows"
                className="shows_nav"
                onClick={() => setPage("shows")}
              >
                shows
              </a>
            </div>
          </header>
          <main>
            {/* <svg
              width="345"
              height="514"
              viewBox="0 0 345 514"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="amanda-svg"
            >
              <path
                clip-rule="evenodd"
                d="M296.191 369.374C296.41 369.703 296.191 370.579 295.753 371.345C295.315 372.002 295.096 374.411 295.206 376.492C295.315 378.572 295.096 379.667 294.877 379.01C294.549 378.244 293.892 377.806 293.235 378.134C293.162 378.207 293.089 378.244 293.016 378.244C293.454 378.353 294.111 384.266 294.549 391.603C295.096 399.268 296.41 412.189 297.614 420.292C298.818 428.395 300.132 440.769 300.46 447.667C300.898 454.566 300.898 462.122 300.46 464.421C300.023 466.94 299.256 468.473 298.161 468.473C297.067 468.473 296.702 469.203 297.067 470.663C297.395 471.867 297.176 472.853 296.519 472.853C295.972 472.853 295.643 472.415 295.972 471.758C296.3 471.101 294.877 471.758 293.016 473.181C290.717 474.714 286.228 476.138 280.973 477.014C275.828 477.78 271.668 477.89 270.573 477.342C269.478 476.795 267.617 476.795 266.413 477.342C265.208 477.78 262.034 478.218 259.297 478.218C256.56 478.328 252.509 477.78 250.319 477.233C246.378 476.247 246.159 475.809 245.612 470.991C245.283 468.035 245.174 460.589 245.94 442.74L236.963 441.973C232.146 441.426 222.183 441.097 214.958 441.097C207.732 441.097 196.128 441.535 189.23 442.083C182.333 442.521 175.984 443.287 175.327 443.725C174.341 444.163 175.217 445.477 177.845 447.996C181.02 450.733 181.676 452.047 181.129 454.018C180.691 455.661 179.158 456.866 176.422 457.632C174.122 458.289 172.48 458.946 172.809 459.165C173.137 459.384 179.158 460.26 186.384 461.027C196.018 462.122 199.521 462.888 199.959 464.093C200.288 465.078 199.302 466.83 197.66 468.254C196.018 469.568 192.624 471.21 190.106 471.867C187.479 472.524 179.706 473.072 172.809 473.072C165.583 473.072 156.715 472.415 152.008 471.429C147.519 470.444 141.607 468.911 138.87 468.035C134.053 466.392 133.944 466.502 127.923 472.305L132.083 473.619C134.272 474.386 137.009 475.043 138.104 475.043C139.089 475.043 139.965 474.386 140.075 473.729C140.075 472.962 140.513 473.291 140.951 474.495C141.498 475.809 144.344 477.671 148.286 479.204C151.789 480.518 156.715 483.255 159.014 485.226C161.423 487.088 163.941 490.373 164.817 492.344C165.583 494.205 166.24 497.6 166.24 499.68C166.24 502.418 165.255 504.608 162.737 507.455C160.438 509.864 157.482 511.726 154.745 512.383C152.336 513.04 147.629 513.149 144.344 512.821C141.06 512.383 133.397 510.412 127.375 508.441C121.354 506.47 112.048 502.747 106.574 500.337C101.21 497.819 95.6265 494.643 94.2033 493.329C92.8895 492.015 91.5758 489.716 91.2473 488.183C90.9189 486.65 91.7947 482.051 93.218 477.78C94.6412 473.51 95.6265 468.911 95.298 467.378C95.0791 465.845 96.0644 462.012 100.006 452.814L97.2687 451.062C95.8454 450.076 91.6853 447.12 88.0725 444.382C84.4597 441.645 79.6426 437.155 77.3436 434.308C74.3877 430.585 72.855 427.3 72.0886 423.03C71.5412 419.745 70.5559 416.788 69.8991 416.46C69.3517 416.131 66.7242 416.679 64.2062 417.555C60.9218 418.759 55.3384 419.197 45.8138 419.197C37.9314 419.197 28.8447 418.431 24.4656 417.555C20.3054 416.569 14.3936 414.489 11.3282 412.737C7.60589 410.546 4.97841 408.028 3.11728 404.633C0.818236 400.582 0.599279 399.158 1.47511 396.64C2.13198 394.997 5.5258 391.165 9.13859 388.318C13.0798 385.033 17.3495 380.324 19.8675 376.163C22.1665 372.44 25.3414 364.884 26.9836 359.519C29.2826 351.635 31.6911 347.036 39.0262 335.976C44.0622 328.311 48.3318 320.646 48.7697 318.456C49.0982 316.375 48.5508 308.929 47.456 302.031C46.3612 294.585 45.8138 287.358 46.2517 284.511C46.5802 281.773 49.4266 274.436 52.492 268.085C55.5574 261.734 58.9512 253.084 60.046 248.923C61.1408 244.762 62.564 234.14 63.3304 225.38C63.9872 216.62 65.301 206.327 66.2863 202.385C67.1621 198.443 68.0379 194.063 68.1474 192.53C68.3664 190.997 69.0232 188.697 69.6801 187.383C70.7749 185.412 70.6654 184.426 69.3517 183.003C68.4759 181.908 67.7095 180.156 67.7095 179.17C67.7095 177.856 67.0526 177.418 66.0673 177.747C65.1915 178.075 62.783 177.637 60.9218 176.871C58.9512 175.995 56.5427 174.133 55.5574 172.71C54.4626 171.286 53.4773 168.658 53.3678 166.797C52.9299 163.95 53.3678 163.512 56.2143 162.964C58.1849 162.636 59.9365 161.431 60.7029 159.679C61.3598 158.146 62.6735 155.19 63.4398 153.109C64.2062 151.029 64.9725 145.225 65.5199 131.209L60.3745 127.705C57.4185 125.843 54.7911 123.763 54.3531 123.106C53.9152 122.449 53.4773 121.135 53.4773 120.259C53.4773 119.383 56.1048 116.207 59.2797 113.141C62.6735 109.966 69.7896 105.257 76.0299 102.082C81.9417 98.906 90.0431 95.2925 93.8748 93.869C97.7066 92.4455 101.21 90.8029 101.648 90.1459C102.195 89.5984 103.837 85.1089 105.48 80.2908C107.012 75.4728 109.311 70.1072 110.406 68.2457C111.501 66.4937 117.632 58.0621 124.091 49.6305C130.441 41.1989 135.586 33.6433 135.586 32.9863C135.586 32.2198 134.71 31.2343 133.725 30.9058C132.63 30.5773 125.076 29.9203 116.975 29.4823C106.027 28.8252 100.225 27.9492 94.5317 26.0877C90.3715 24.6642 83.6933 22.3647 79.7521 21.0507C75.8109 19.6271 71.3223 17.5466 69.6801 16.2326C67.9285 15.0281 66.6147 13.0571 66.6147 11.8526C66.6147 10.429 68.0379 9.00553 70.7749 7.58201C72.9645 6.487 77.4531 4.95398 80.6279 4.29698C83.6933 3.63997 92.3421 3.09246 99.7867 3.09246C107.122 3.20196 118.289 3.63997 124.638 4.29698C130.988 4.84448 144.235 5.61099 154.197 5.82999C170.291 6.268 173.575 6.049 184.304 3.74947C190.982 2.32595 199.521 1.01194 203.463 1.01194C207.404 0.902439 212.549 1.55945 214.958 2.43546C218.133 3.53047 220.541 3.74947 223.716 2.98296C226.125 2.43546 229.409 1.99745 231.161 1.99745C232.803 1.99745 239.919 4.51598 247.035 7.69151C258.53 12.8381 260.72 14.2616 267.836 21.3792C272.325 25.9782 277.032 29.7013 278.784 30.0298C281.083 30.5773 283.053 29.8108 287.761 26.4162C291.045 24.0072 296.519 20.6127 299.804 18.9701C304.621 16.4516 307.139 15.7946 312.394 16.0136C316.444 16.1231 320.386 16.8896 322.794 18.2036C324.874 19.2986 328.049 22.5837 329.91 25.5402C333.085 30.5773 333.194 31.4533 333.194 42.9509C333.194 54.0105 332.866 56.3101 329.144 67.6982C326.188 76.5678 323.341 82.8094 319.291 89.0509C315.897 94.4165 308.233 103.177 299.913 111.499C288.637 122.668 285.79 126.172 282.397 136.136L282.178 128.471C282.068 124.31 281.959 120.04 281.849 119.164C281.74 118.069 280.097 117.302 277.361 116.864C273.419 116.317 273.31 116.207 276.266 115.879C279.331 115.66 279.222 115.55 274.295 113.908C271.449 112.813 269.15 111.718 269.15 111.28C269.15 110.732 269.697 110.623 270.244 110.951C270.901 111.28 271.339 110.732 271.339 109.856C271.339 108.98 271.12 107.447 270.792 106.571C270.463 105.586 269.697 105.257 268.931 105.695C268.055 106.133 268.164 105.476 269.259 103.834C270.244 102.301 272.653 100.22 274.733 99.125C276.813 98.1395 278.784 96.497 279.331 95.621C279.769 94.6355 279.55 93.9785 278.784 93.9785C278.017 94.088 276.156 94.745 274.624 95.621C273.091 96.497 271.449 97.2635 270.792 97.2635C270.244 97.373 270.354 96.6065 271.12 95.621C271.887 94.6355 271.996 93.869 271.339 93.7595C270.682 93.5405 270.025 92.0075 269.916 90.1459C269.697 87.4084 270.354 86.6419 273.529 84.9994C275.609 84.0139 278.346 82.9189 279.55 82.4808C281.411 82.0428 280.754 80.9478 274.624 75.1443C270.682 71.3117 266.741 66.6032 265.865 64.6321C264.989 62.6611 264.004 61.0186 263.676 61.1281C263.347 61.1281 260.72 64.9607 257.654 69.5597C254.699 74.1588 251.414 78.6483 250.538 79.5243C250.319 79.7433 250.137 79.9623 249.991 80.1813V80.1813C250.648 80.4003 253.713 76.7868 256.998 71.9687C260.282 67.2602 263.238 63.3181 263.566 63.3181C263.895 63.3181 265.318 65.1797 266.522 67.3697C267.836 69.6692 271.449 73.7207 280.097 81.3858L275.937 82.9189C273.748 83.6854 271.011 85.2184 269.916 86.2039C268.821 87.1894 267.945 88.6129 268.055 89.2699C268.055 90.0364 268.602 90.6934 269.15 90.6934C269.807 90.6934 270.025 91.2409 269.697 91.7885C269.369 92.336 269.697 93.1025 270.244 93.431C270.901 93.7595 270.573 94.8545 269.478 96.1685C268.383 97.373 267.836 98.5775 268.383 98.906C268.821 99.2345 270.792 98.468 272.762 97.2635C274.624 96.059 276.594 95.0735 277.142 95.0735C277.579 95.0735 277.908 95.621 277.908 96.1685C277.908 96.716 276.594 97.592 274.952 98.03C273.419 98.5775 270.354 100.877 268.383 103.286C265.756 106.462 264.989 108.214 265.537 109.747C266.084 110.951 267.945 112.484 269.697 113.251C271.558 114.017 272.325 114.674 271.668 114.784C270.901 114.784 270.244 115.331 270.244 115.879C270.244 116.426 272.543 117.302 280.645 118.616L281.521 127.924C282.287 135.26 282.178 138.545 280.754 143.254C279.55 147.415 277.689 150.591 274.624 153.657C271.887 156.394 270.244 157.38 270.244 156.394C270.244 155.518 271.339 153.657 272.653 152.233C274.076 150.919 275.499 150.043 276.047 150.372C276.485 150.7 276.594 150.7 276.266 150.372C275.937 150.043 276.485 148.072 277.361 145.992C278.236 143.911 279.003 141.94 279.003 141.612C279.003 141.283 278.565 141.064 277.908 141.064C277.251 141.064 276.813 142.159 276.813 143.473C276.813 144.897 275.828 147.196 274.624 148.729C272.653 151.248 272.434 151.248 272.434 149.277C272.434 148.072 271.887 146.32 271.339 145.444C270.573 144.24 270.354 145.006 270.573 148.072C270.792 151.905 270.463 152.562 267.836 153.547C265.537 154.533 264.442 154.423 263.457 153.219C262.253 152.014 262.471 151.905 264.552 152.452C264.844 152.525 265.099 152.598 265.318 152.671C264.734 152.525 263.931 152.16 262.909 151.576C262.034 151.248 261.267 150.81 260.72 150.372C262.362 152.124 263.676 153.766 263.676 154.204C263.676 154.861 262.69 155.299 261.486 155.299C260.282 155.299 259.297 154.861 259.297 154.204C259.297 153.547 259.953 153.438 260.72 153.766C261.377 154.204 260.282 152.562 258.092 150.262C256.012 147.963 253.713 144.787 253.056 143.254C251.962 140.626 252.071 140.516 255.903 140.297C256.852 140.224 257.581 140.188 258.092 140.188C256.998 139.75 257.107 139.531 258.202 138.983C258.968 138.436 261.815 138.217 264.442 138.217C266.851 138.326 268.931 138.764 269.15 139.312C269.442 139.166 269.624 139.02 269.697 138.874C270.025 138.217 269.369 137.779 268.383 137.669C266.741 137.669 266.741 137.45 268.602 136.684C270.062 136.027 270.244 135.698 269.15 135.698C268.274 135.589 264.442 136.574 260.72 137.779C256.888 138.983 253.056 139.75 252.181 139.421C251.195 139.093 250.538 139.531 250.538 140.516C250.538 141.393 250.976 141.94 251.633 141.612C252.29 141.283 252.509 141.721 252.181 142.488C251.852 143.145 253.166 145.773 255.136 148.182C257.107 150.481 258.749 153.219 258.749 153.985C258.749 154.861 259.844 156.066 261.267 156.504C262.69 157.161 263.895 157.051 264.223 156.394C264.552 155.737 265.537 155.299 266.413 155.299C267.398 155.299 267.945 156.175 267.836 157.38C267.617 158.584 267.07 159.132 266.413 158.803C265.865 158.365 265.646 158.803 265.975 159.679C266.303 160.555 265.646 162.307 264.661 163.512C263.566 164.716 262.909 166.03 263.128 166.578C263.457 167.016 261.596 167.125 259.078 166.906C256.45 166.687 253.932 165.702 253.275 164.716C252.618 163.84 251.852 163.074 251.414 162.964C250.867 162.964 250.757 163.95 251.086 165.154C251.451 166.614 251.086 167.344 249.991 167.344C249.115 167.344 248.239 167.782 248.13 168.33C248.057 168.476 247.911 168.622 247.692 168.768C249.444 168.658 253.275 168.33 256.56 168.001C260.172 167.673 263.128 167.344 263.238 167.125C263.238 166.906 264.114 165.483 265.099 163.84C266.194 162.088 267.398 160.774 267.945 160.774C268.493 160.774 268.712 161.212 268.493 161.869C268.274 162.526 269.04 163.731 270.244 164.607C271.339 165.373 272.106 166.578 272.106 167.344C272.106 167.271 272.106 167.198 272.106 167.125C272.434 165.483 273.091 165.702 277.361 168.22C279.879 169.753 281.63 171.396 282.287 172.819C282.287 171.943 285.462 174.352 289.513 178.294C293.454 182.236 299.147 188.916 302.103 193.077C305.168 197.238 309.109 204.684 310.861 209.502C312.722 214.32 315.459 222.752 316.882 228.117C318.305 233.483 320.714 246.404 322.247 256.588C323.67 266.771 326.078 278.598 327.502 282.868C328.925 287.139 331.552 293.271 333.194 296.556C334.837 299.841 337.136 303.564 338.23 304.768C339.325 305.973 341.186 309.696 342.391 312.981C343.923 317.142 344.361 319.989 343.704 322.288C343.157 324.479 341.515 326.34 338.559 327.983C336.26 329.406 331.443 331.049 327.94 331.815C321.809 333.239 321.699 333.239 321.699 337.071C321.699 339.152 321.152 343.641 320.604 346.926C319.948 350.211 318.196 354.591 316.773 356.562C315.24 358.424 312.722 360.395 311.08 360.723C308.89 361.161 307.467 360.723 306.044 359.3C304.949 358.205 304.073 356.891 304.073 356.234C304.073 355.577 303.416 353.606 300.898 348.569L301.555 352.949C302.103 356.562 301.555 358.533 298.599 364.118C296.519 367.841 294.439 370.688 293.782 370.25C293.235 369.922 293.235 370.25 294.001 371.126C294.147 371.345 294.293 371.637 294.439 372.002C294.585 371.491 294.768 371.053 294.987 370.688C295.424 369.593 296.081 369.046 296.191 369.374V369.374ZM292.25 378.025C292.25 379.12 292.25 380.251 292.25 381.419C292.25 382.149 292.25 382.916 292.25 383.719C292.359 380.762 292.578 378.463 292.906 378.244C292.578 378.353 292.359 378.244 292.25 378.025V378.025ZM294.33 416.46C296.081 430.476 296.41 433.432 295.315 434.637C295.753 434.637 296.191 434.965 296.629 435.622C297.505 436.827 297.614 436.279 297.067 433.432C296.629 431.352 296.3 428.833 296.3 427.957C296.191 427.081 295.315 419.197 294.22 410.437C293.454 404.195 292.687 397.078 292.359 391.822C292.687 400.034 293.344 408.466 294.33 416.46ZM281.74 442.959C280.097 442.74 276.047 441.973 267.179 440.221C267.544 440.367 268.018 440.477 268.602 440.55C270.463 440.988 272.872 441.535 274.076 441.645C275.28 441.864 277.579 442.302 279.331 442.63C280.973 442.959 283.601 443.616 285.352 443.944C285.571 443.944 285.79 443.981 286.009 444.054C284.367 443.506 282.834 443.068 281.74 442.959V442.959ZM265.099 435.294C264.989 432.775 264.552 429.928 264.114 429.052C264.552 429.928 264.989 432.775 265.099 435.294C265.099 435.367 265.099 435.44 265.099 435.513V435.294ZM287.323 331.377C288.199 329.625 289.513 328.311 290.279 328.311V328.311C289.513 328.311 288.199 329.625 287.323 331.377C286.557 333.02 284.805 338.057 283.491 342.546C284.805 338.057 286.557 333.02 287.323 331.377ZM292.25 377.149C292.469 376.711 292.797 376.492 293.235 376.492C293.308 376.492 293.381 376.492 293.454 376.492C293.016 376.163 292.578 374.192 292.359 371.564C292.359 373.316 292.323 375.178 292.25 377.149V377.149ZM138.104 320.427C138.396 320.646 138.688 320.792 138.98 320.865C138.761 319.989 138.761 317.58 139.199 314.952C139.199 314.879 139.199 314.769 139.199 314.623C138.98 316.156 138.688 317.908 138.323 319.879L137.666 318.018C137.776 318.565 137.666 319.003 137.447 319.222C137.301 319.441 137.119 319.514 136.9 319.441C137.265 319.733 137.666 320.062 138.104 320.427ZM142.812 307.834C143.104 308.564 143.396 309.258 143.687 309.915L143.031 307.506C142.264 305.097 141.498 303.345 141.388 303.454C141.279 303.454 141.169 304.111 140.841 305.425C141.279 303.892 141.607 304.44 142.812 307.834V307.834ZM145.22 311.995C145.658 311.995 148.942 312.214 152.555 312.433C156.168 312.652 159.671 312.981 160.438 313.2C161.095 313.419 162.299 314.514 163.065 315.718C163.503 316.375 163.722 316.813 163.722 317.142C163.941 316.923 164.123 316.74 164.269 316.594C165.364 315.499 165.255 315.171 163.722 315.171C162.408 315.171 161.861 314.295 161.861 311.886C161.861 308.71 161.97 308.71 163.941 310.572C163.941 310.572 163.977 310.608 164.05 310.681C164.05 310.535 164.05 310.389 164.05 310.243C164.05 309.367 163.613 308.601 162.956 308.601C162.408 308.601 162.08 308.163 162.408 307.506C162.737 306.958 162.408 306.411 161.642 306.411C160.985 306.411 160.766 306.082 161.095 305.644C161.532 305.097 161.204 304.111 160.547 303.235C159.781 302.359 159.014 301.155 158.905 300.498C158.795 299.841 158.467 298.308 158.358 297.103C158.139 296.008 157.81 294.913 157.482 294.475C157.81 295.132 158.248 296.337 158.358 297.651C158.467 299.622 158.358 300.388 157.591 300.498C158.139 300.936 158.686 301.593 159.124 302.359C160 303.673 161.095 306.739 161.423 309.148C161.97 312.214 161.861 313.2 160.985 312.433C160.328 311.886 158.795 308.71 157.591 305.644C156.715 303.235 156.168 301.264 156.168 300.279C155.73 300.206 155.329 300.06 154.964 299.841C155.511 301.812 156.496 304.768 157.591 307.177C160.109 312.652 160.109 312.871 158.029 312.214C156.825 311.886 153.431 311.667 145.001 311.886C145.074 311.959 145.147 311.995 145.22 311.995V311.995ZM165.583 313.309C165.364 313.747 166.24 315.39 167.554 317.142C167.919 317.58 168.284 318.018 168.649 318.456C168.43 317.689 168.101 316.813 167.663 316.047C166.897 314.623 166.021 313.419 165.474 312.652C165.547 312.944 165.583 313.163 165.583 313.309ZM171.167 320.865C171.313 321.011 171.422 321.12 171.495 321.193C171.714 320.974 171.495 320.865 171.057 320.865C171.13 320.865 171.167 320.865 171.167 320.865ZM173.903 331.596C173.903 332.253 174.451 332.691 174.998 332.691C175.071 332.691 175.108 332.691 175.108 332.691C174.962 332.326 174.779 331.998 174.56 331.706C174.414 331.414 174.268 331.195 174.122 331.049C173.976 331.195 173.903 331.377 173.903 331.596ZM173.356 338.495C172.699 338.714 172.371 339.152 172.261 339.59C172.48 339.444 172.772 339.225 173.137 338.933C173.904 338.385 174.67 337.4 175.108 336.414C174.67 337.4 174.013 338.166 173.356 338.495V338.495ZM172.809 341.451C173.137 341.999 173.247 342.437 173.356 342.875V342.875C173.685 341.232 173.356 340.356 172.59 340.356C172.517 340.356 172.444 340.356 172.371 340.356C172.444 340.648 172.59 341.013 172.809 341.451V341.451ZM173.137 343.751C172.699 343.86 171.604 343.86 170.4 343.751C171.167 343.97 171.714 344.517 171.714 345.065C171.714 345.722 171.933 346.16 172.261 345.831C172.48 345.612 172.809 344.736 173.137 343.751V343.751ZM166.787 344.736C166.86 344.809 166.897 344.882 166.897 344.955C167.116 344.408 167.444 343.97 167.992 343.86C167.116 343.97 166.568 344.298 166.787 344.736ZM164.598 346.707C163.175 345.503 162.846 345.612 162.956 346.926V346.926C162.956 345.503 163.175 345.503 164.598 346.926C165.583 347.802 166.021 349.445 165.693 350.54C165.364 351.525 164.269 352.401 163.284 352.401C162.189 352.401 160.438 351.525 159.343 350.43C157.81 349.007 157.153 348.897 156.606 349.992C156.168 350.759 154.307 351.525 152.446 351.635C152.227 351.635 152.044 351.635 151.898 351.635C153.212 352.073 154.197 353.496 156.277 357.657C158.905 362.694 159.452 365.103 159.233 369.922C159.014 373.097 158.029 377.806 154.745 384.923C154.818 385.215 154.891 385.507 154.964 385.799L156.934 381.419C158.029 379.01 159.233 374.302 159.452 371.017C159.89 366.089 159.452 363.899 157.153 358.971C154.416 353.387 154.416 352.839 156.168 351.744C157.591 350.759 158.577 350.868 160.547 352.292C162.846 353.825 163.284 353.825 164.707 352.401C165.583 351.525 166.349 349.226 166.568 347.255C166.131 347.583 165.364 347.364 164.598 346.707ZM149.38 351.087C149.599 350.54 149.49 349.116 149.161 347.802C148.505 345.503 148.395 345.393 147.191 347.255C146.205 348.788 145.439 348.897 143.031 348.021C141.279 347.474 139.418 345.831 138.651 344.517C137.995 343.094 137.338 341.232 137.228 340.356C137.119 339.48 136.681 336.524 136.243 333.786C135.696 331.049 135.258 326.34 135.148 323.274C135.148 320.646 135.258 318.675 135.477 318.346C134.929 317.361 134.491 315.609 134.491 314.404C134.491 312.981 134.053 311.886 133.397 311.886C132.849 311.886 132.302 311.119 132.302 310.243C132.302 309.367 132.849 308.601 133.397 308.601C134.053 308.601 134.82 309.696 135.148 311.119C135.477 312.324 136.133 314.295 136.9 315.609L134.382 308.491C132.083 302.25 129.784 294.475 129.127 291.409C128.47 288.234 127.923 283.197 127.923 280.131C127.923 274.874 127.923 274.655 133.834 275.093L131.316 274.984C128.142 274.655 127.923 274.874 127.923 278.817C127.923 281.007 127.156 283.854 126.28 285.058C125.843 285.606 125.514 285.934 125.295 285.934C125.368 286.08 125.441 286.08 125.514 285.934C125.843 285.496 126.171 286.482 126.39 288.453C126.39 287.577 126.499 286.81 126.609 286.153C127.156 283.197 127.375 283.416 128.47 288.891C129.236 292.176 129.565 295.242 129.346 295.789C129.273 296.008 129.127 296.191 128.908 296.337C129.455 296.446 130.331 298.308 131.316 301.264C132.411 304.659 133.068 308.163 132.63 308.929C132.192 309.696 131.097 307.725 130.003 304.221C128.908 300.936 128.251 297.432 128.579 296.556C128.579 296.556 128.579 296.519 128.579 296.446C128.433 296.519 128.324 296.556 128.251 296.556C127.704 296.556 127.047 295.023 126.718 293.052C126.645 292.906 126.609 292.796 126.609 292.723C126.718 294.913 126.937 296.994 127.156 297.651C127.375 298.527 128.142 300.826 128.908 302.578C129.674 304.44 130.331 306.849 130.441 308.053C130.55 309.258 131.207 310.572 131.754 311.01C132.411 311.448 132.959 312.324 133.178 312.981C133.287 313.528 133.506 314.404 133.506 314.952C133.615 315.39 133.506 317.908 133.506 320.646C133.397 323.384 133.834 326.121 134.382 326.669C134.929 327.326 135.586 330.282 135.915 333.239C136.243 336.305 136.79 339.48 137.009 340.356C137.228 341.232 137.995 343.313 138.761 345.065C139.418 346.707 140.951 348.569 142.155 349.116C143.359 349.773 145.111 349.992 145.987 349.664C146.862 349.335 147.629 348.459 147.629 347.802C147.738 347.036 148.176 347.255 148.723 348.35C149.599 349.664 149.38 350.649 147.957 351.854C146.862 352.73 143.578 354.701 140.513 356.234C139.783 356.599 139.089 356.964 138.433 357.329C139.965 356.562 141.169 356.015 141.936 355.577C143.906 354.372 145.22 354.044 144.782 354.92C144.454 355.577 145.001 355.248 145.987 354.044C146.972 352.839 148.833 351.744 150.366 351.635C149.599 351.525 149.271 351.306 149.38 351.087V351.087ZM134.71 275.203L134.272 269.509C134.053 264.8 134.272 263.705 135.696 263.705C136.243 263.705 137.119 263.377 137.776 263.048C137.228 263.267 136.352 263.377 135.586 263.158C133.506 262.61 133.397 263.048 134.71 275.203V275.203ZM139.856 252.646C139.637 244.214 139.637 244.214 143.14 242.024C145.111 240.82 147.519 240.053 148.505 240.382C150.037 240.71 150.256 241.805 149.928 245.419C149.709 247.937 150.147 251.66 151.023 253.631C151.168 253.923 151.278 254.179 151.351 254.398C151.351 254.252 151.387 254.069 151.46 253.85C151.789 253.303 151.679 252.755 151.241 252.755C150.694 252.755 150.366 250.894 150.256 248.704C150.147 246.404 150.694 243.886 151.351 243.119C152.227 242.024 152.117 241.367 150.913 240.601C150.037 240.053 148.067 239.725 146.534 239.834C145.001 240.053 142.812 241.148 141.607 242.243C139.746 244.105 139.418 245.747 139.527 252.646C139.527 257.135 139.199 261.515 138.761 262.282C139.527 261.406 139.965 257.902 139.856 252.646ZM152.008 257.683C151.789 257.902 150.913 257.902 149.818 257.573C149.964 257.646 150.147 257.792 150.366 258.011C151.679 259.106 152.117 258.997 152.774 257.464C153.212 256.259 152.993 255.383 152.227 255.274C151.862 255.128 151.606 254.945 151.46 254.726C152.008 256.259 152.227 257.464 152.008 257.683ZM148.505 257.135C146.096 256.259 145.111 256.369 144.125 257.792C143.25 258.887 143.031 259.873 143.578 261.515C143.505 261.296 143.505 261.041 143.578 260.749C143.687 259.654 144.344 258.23 144.892 257.573C145.768 256.588 146.315 256.588 147.41 257.573C148.176 258.23 148.833 258.34 148.723 257.683C148.723 257.464 148.796 257.354 148.942 257.354C148.796 257.281 148.65 257.208 148.505 257.135V257.135ZM143.797 262.391C144.235 263.377 145.001 264.472 145.987 265.348C145.987 265.275 145.987 265.202 145.987 265.129C145.658 263.705 145.001 262.61 144.344 262.61C144.125 262.61 143.943 262.501 143.797 262.282C143.797 262.355 143.797 262.391 143.797 262.391V262.391ZM147.957 266.771C150.475 267.866 150.913 268.852 151.023 272.794C151.132 275.312 151.132 277.722 151.023 278.269C151.023 278.488 151.241 279.145 151.57 279.802C151.935 279.656 152.373 279.583 152.884 279.583C152.957 279.583 153.03 279.583 153.103 279.583C152.884 279.437 152.701 279.255 152.555 279.036C152.227 278.488 152.555 277.941 153.103 277.941C153.395 277.941 153.614 277.868 153.759 277.722C153.686 277.722 153.468 277.685 153.103 277.612C152.008 277.393 151.351 275.641 151.241 272.684C151.023 268.961 151.241 268.195 152.555 268.633C153.431 268.961 154.197 268.742 154.197 268.085C154.197 267.538 154.416 266.99 154.526 266.99C154.745 266.99 154.854 268.633 154.854 270.713C154.745 273.122 154.307 274.217 153.431 273.998C152.774 273.779 152.227 274.108 152.117 274.765C152.227 274.108 152.884 273.889 153.65 274.108C154.854 274.546 155.292 273.889 155.183 272.246C155.073 270.823 155.073 268.633 155.183 267.319C155.183 265.895 155.84 265.019 156.387 265.348C157.044 265.676 158.248 264.472 159.124 262.61C159.781 261.296 160.219 260.201 160.219 259.654C160.073 260.165 159.89 260.42 159.671 260.42C159.124 260.42 158.795 260.749 158.905 261.296C159.124 261.734 158.139 263.158 156.715 264.581C154.854 266.333 154.197 266.552 154.197 265.348C154.197 264.472 153.759 263.705 153.103 263.705C152.555 263.705 151.789 264.691 151.46 265.895C151.023 267.428 150.585 267.757 149.599 266.99C148.942 266.552 148.176 266.333 147.629 266.552C147.702 266.625 147.811 266.698 147.957 266.771V266.771ZM160.438 258.011C161.204 257.135 161.532 254.507 161.204 251.66C160.876 248.923 160.876 246.076 161.313 245.419C161.751 244.324 162.518 244.324 164.598 245.638C166.131 246.514 168.539 247.28 170.072 247.28C171.604 247.28 173.904 246.733 175.327 246.076C176.64 245.419 179.377 243.338 181.348 241.367C182.771 240.053 184.194 238.082 185.18 236.33C185.107 236.33 184.997 236.33 184.851 236.33C184.304 236.33 183.866 236.659 183.976 237.206C184.194 237.644 182.662 239.506 180.801 241.258C178.83 243.119 176.969 244.324 176.64 243.995C176.312 243.667 176.093 244.105 176.093 244.871C176.093 245.528 175.655 245.966 174.998 245.638C174.451 245.309 173.903 245.419 173.903 245.966C173.903 246.404 172.261 246.733 170.4 246.733C167.882 246.733 166.021 245.857 162.189 241.258L160.876 243.776C160.219 245.2 159.89 249.032 160.219 253.303C160.328 255.274 160.438 256.916 160.328 258.121C160.401 258.048 160.438 258.011 160.438 258.011V258.011ZM185.946 234.469C186.275 233.264 186.494 232.279 186.494 231.293C186.421 231.658 186.238 232.06 185.946 232.498C185.399 233.374 185.07 234.688 185.399 235.235C185.472 235.381 185.508 235.491 185.508 235.564C185.727 235.126 185.873 234.761 185.946 234.469ZM186.056 228.993C185.289 227.57 185.508 226.475 186.822 224.942C187.917 223.737 188.683 221.328 188.574 218.919C188.464 217.496 187.807 214.539 186.931 211.692C186.931 211.911 186.968 212.094 187.041 212.24C187.15 212.568 187.369 215.306 187.369 218.262C187.588 222.533 187.15 224.175 185.399 225.599C184.194 226.694 183.757 227.57 184.632 227.57C185.289 227.57 185.727 228.117 185.399 228.665C185.07 229.322 185.399 229.979 185.946 230.307C186.238 230.453 186.421 230.673 186.494 230.965C186.494 230.161 186.348 229.504 186.056 228.993V228.993ZM185.508 207.86C183.975 203.918 182.662 200.085 182.662 199.428C182.662 198.662 183.319 198.005 184.085 198.005C184.742 198.005 186.931 197.238 188.683 196.253C191.858 194.61 192.077 194.72 194.485 197.348C194.923 198.005 195.471 198.552 195.799 199.1C195.799 198.99 196.237 199.209 196.894 199.538C197.77 199.976 197.222 199.1 195.58 197.567C193.829 196.034 192.843 194.72 193.391 194.72C193.829 194.829 193.391 194.063 192.515 193.077C190.982 191.544 190.763 191.544 189.23 193.953C188.355 195.377 186.931 196.362 186.275 196.253C185.508 196.034 184.851 196.362 184.851 196.91C184.851 197.567 184.304 197.895 183.647 197.786C182.99 197.567 182.224 198.552 182.005 199.976C181.786 201.29 182.114 202.604 182.662 202.932C183.319 203.261 183.538 204.027 183.209 204.575C182.881 205.232 183.209 205.67 183.757 205.67C184.413 205.67 184.632 206.217 184.304 206.765C183.976 207.422 184.304 207.86 184.851 207.86C185.508 207.86 185.727 208.407 185.399 208.955C185.07 209.612 185.399 210.05 185.946 210.05C186.092 210.05 186.238 210.086 186.384 210.159C186.092 209.356 185.8 208.59 185.508 207.86ZM196.894 201.29C196.894 201.947 196.237 202.385 195.58 202.385C194.814 202.494 192.843 201.509 191.201 200.195C190.763 199.976 190.435 199.757 190.216 199.538C190.435 199.757 190.69 200.085 190.982 200.523C192.624 202.275 194.376 203.261 195.58 203.042C196.566 202.713 197.66 202.494 197.989 202.494C198.317 202.494 197.77 201.618 196.894 200.633C196.675 200.268 196.456 200.012 196.237 199.866C196.675 200.523 196.894 200.961 196.894 201.29V201.29ZM188.136 200.195C188.136 201.399 189.887 203.918 191.967 205.67C194.522 207.86 197.003 208.955 199.412 208.955C201.273 208.955 204.557 207.969 206.528 206.765C207.513 206.108 208.389 205.451 209.046 204.794C208.389 205.232 207.513 205.67 206.528 206.108C204.557 206.984 201.383 207.86 199.412 208.079C197.441 208.298 195.799 208.079 195.799 207.641C195.799 207.093 194.376 205.998 192.515 205.122C190.106 203.918 189.449 203.042 189.997 201.618C190.544 200.414 190.435 199.976 189.778 200.414C189.23 200.742 188.683 200.304 188.574 199.319C188.574 198.954 188.61 198.698 188.683 198.552C188.136 198.443 188.136 198.99 188.136 200.195ZM210.031 203.48C210.031 202.932 210.141 201.947 210.36 201.399C210.469 200.852 211.017 199.976 211.455 199.428C211.783 199.1 212.111 197.786 212.221 196.143C212.002 197.238 211.564 198.005 211.126 198.005C210.579 198.005 210.141 198.881 210.36 199.976C210.579 200.961 209.922 202.494 208.937 203.261C208.061 204.137 207.951 204.465 208.718 204.137C209.265 203.808 209.703 203.808 209.922 203.808C209.995 203.662 210.031 203.553 210.031 203.48V203.48ZM212.221 194.172C212.221 190.559 212.659 189.573 214.958 188.478C216.491 187.712 218.242 185.96 218.899 184.645C219.884 182.565 220.541 182.236 223.059 183.112C223.205 183.112 223.424 183.149 223.716 183.222C223.132 183.003 222.585 182.638 222.074 182.127C221.198 181.141 220.103 180.375 219.665 180.484C219.118 180.484 219.009 181.251 219.337 182.127C219.665 183.003 219.009 184.755 218.023 185.959C216.928 187.164 215.724 187.712 215.177 187.274C214.739 186.836 214.41 187.164 214.41 187.931C214.41 188.588 214.082 189.026 213.644 188.807C213.097 188.478 212.111 189.245 211.455 190.449C210.579 191.654 210.469 192.53 211.126 192.53C211.674 192.53 212.221 193.625 212.221 195.048C212.221 194.756 212.221 194.464 212.221 194.172V194.172ZM228.971 182.784C230.613 182.127 231.927 181.141 231.927 180.484C231.927 179.937 230.942 179.389 229.737 179.389C228.533 179.389 226.234 178.294 224.701 176.98C222.95 175.557 222.074 173.914 222.512 173.148C222.84 172.381 224.154 171.724 225.358 171.724C226.563 171.724 228.424 170.739 229.409 169.534C230.504 168.33 232.036 167.563 233.022 167.892C233.898 168.33 238.058 169.206 242.218 169.863C242.583 169.936 242.984 170.009 243.422 170.082C243.495 170.009 243.605 169.936 243.751 169.863C241.014 169.425 237.948 168.768 236.854 168.33C235.54 167.673 236.525 167.673 239.591 168.111C241.452 168.439 243.641 168.658 245.393 168.768C246.269 168.001 245.283 167.782 241.233 167.235C237.839 166.797 235.43 167.016 234.992 167.782C234.445 168.549 234.117 168.22 234.117 167.125C234.117 165.483 233.788 165.373 231.708 166.359C230.613 166.906 230.066 167.125 229.847 167.125C229.701 168.147 229.336 168.95 228.752 169.534C227.767 170.52 225.906 171.177 224.592 170.958C223.059 170.739 221.855 171.286 221.527 172.272C221.198 173.148 221.855 174.79 222.95 175.885C224.045 176.871 226.234 178.513 227.876 179.389C229.518 180.265 230.504 181.36 230.066 181.798C229.628 182.236 227.986 182.893 226.453 183.222C226.088 183.295 225.723 183.368 225.358 183.441C226.563 183.441 227.876 183.222 228.971 182.784ZM230.613 166.14C231.38 165.264 231.927 164.278 231.927 163.84C231.927 163.293 231.489 163.183 230.832 163.512C230.175 163.84 229.956 162.964 230.285 161.322C230.613 159.789 230.394 158.584 229.737 158.584C229.664 158.584 229.628 158.584 229.628 158.584C229.737 160.117 229.847 161.979 229.956 163.512C230.102 164.826 230.102 165.957 229.956 166.906C230.029 166.76 230.248 166.505 230.613 166.14ZM229.847 155.08C230.504 153.109 231.051 150.591 230.942 149.605C230.942 148.51 231.38 147.853 231.927 148.182C232.584 148.51 233.022 147.415 233.022 145.773C232.912 144.021 233.679 142.05 234.664 141.393C235.54 140.626 236.087 139.531 235.759 138.874C235.43 138.326 235.759 137.779 236.306 137.779C236.963 137.779 237.401 136.136 237.291 134.275C237.182 132.304 236.963 129.785 236.744 128.8C236.525 127.595 235.759 127.157 234.992 127.595C234.846 127.668 234.737 127.705 234.664 127.705C234.81 127.924 235.065 128.106 235.43 128.252C236.087 128.362 236.635 130.223 236.525 132.632C236.416 134.822 235.759 137.779 235.102 139.202C234.336 140.516 233.46 141.831 233.131 142.159C232.803 142.488 231.708 145.225 230.942 148.182C230.066 151.138 229.409 154.752 229.518 156.285C229.591 155.92 229.701 155.518 229.847 155.08V155.08ZM234.992 126.5C235.649 125.515 236.087 124.201 235.759 123.544C235.43 122.996 235.43 121.463 235.759 120.259C236.197 118.507 237.182 118.069 240.685 118.069C243.094 118.069 246.816 117.302 248.896 116.426C251.086 115.441 253.056 113.798 253.385 112.375C253.823 110.842 253.275 108.761 252.071 106.79C251.706 106.279 251.378 105.878 251.086 105.586C250.538 105.476 249.881 105.148 249.334 104.6C249.042 104.673 248.714 104.856 248.349 105.148C247.838 105.586 247.509 105.878 247.363 106.024C247.29 106.462 247.181 106.936 247.035 107.447C246.597 109.09 246.488 110.404 247.035 110.404C248.787 107.338 248.896 107.228 249.991 109.309C250.538 110.513 250.867 111.718 250.538 112.046C250.21 112.265 248.896 112.813 247.582 113.141C246.488 113.36 245.831 113.47 245.721 113.36C245.612 113.798 246.05 114.017 247.035 114.455C248.239 114.893 249.334 114.346 250.21 113.032C251.305 111.389 251.195 110.404 249.991 107.995C249.115 106.243 248.896 104.929 249.444 104.929C250.1 104.929 251.305 106.462 252.181 108.214C253.494 110.842 253.604 111.827 252.509 113.141C251.743 114.127 248.896 115.55 246.159 116.317C243.422 117.083 240.028 117.631 238.496 117.521C236.087 117.193 235.759 117.631 235.54 121.463C235.321 123.763 234.992 126.281 234.664 126.829C234.664 126.829 234.664 126.865 234.664 126.938C234.737 126.792 234.846 126.646 234.992 126.5ZM248.13 104.71C248.349 104.272 248.531 103.943 248.677 103.724C248.349 103.067 248.349 102.629 248.677 102.739C248.677 102.739 248.714 102.702 248.787 102.629C248.641 102.556 248.422 102.447 248.13 102.301C247.145 102.082 247.145 101.644 248.13 100.658C247.838 100.658 247.546 100.987 247.254 101.644C247.108 101.936 246.999 102.155 246.926 102.301C247.254 103.286 247.473 104.491 247.363 105.695C247.509 105.476 247.765 105.148 248.13 104.71V104.71ZM248.458 100.33V100.33C249.225 99.563 249.553 99.4535 249.115 100.001C249.042 100.147 249.006 100.33 249.006 100.549C250.648 101.644 252.071 102.848 252.29 103.615C252.399 103.943 252.728 104.162 253.056 104.381C253.275 104.162 253.494 104.272 253.604 104.491C253.823 104.491 254.078 104.454 254.37 104.381C254.917 104.162 255.355 104.272 255.684 104.491C255.027 103.396 253.494 101.753 251.743 100.33C249.115 98.1395 247.692 96.1685 248.13 95.402C248.568 94.745 249.991 94.1975 251.414 94.307C252.728 94.4165 253.823 94.8545 253.823 95.402C253.823 95.84 254.699 96.1685 255.793 96.1685C256.779 96.278 258.64 95.2925 259.844 94.088C261.815 92.0075 261.924 91.679 260.391 89.9269C259.516 88.8319 257.764 87.1894 256.56 86.3134C255.355 85.4374 253.166 83.5759 251.633 82.1523C250.757 81.2763 250.1 80.6193 249.881 80.2908C249.334 81.2763 250.1 82.0428 252.728 84.2329C254.808 86.0944 256.888 87.5179 257.435 87.4084C257.873 87.4084 258.749 88.3939 259.297 89.5984C260.063 91.1314 259.953 92.336 259.078 93.5405C258.202 94.6355 256.669 95.0735 254.917 94.745C253.385 94.4165 251.414 93.869 250.538 93.5405C249.553 93.1025 248.239 93.9785 247.145 95.9495C246.378 97.154 245.94 98.03 245.831 98.906C246.378 99.125 247.144 99.563 248.458 100.33V100.33ZM281.521 176.652C280.535 176.98 280.426 177.637 281.192 178.623C281.849 179.28 282.506 182.893 282.615 186.507C282.944 192.42 282.615 193.406 279.988 196.143C278.346 197.786 275.937 199.1 274.733 199.1C274.441 199.1 274.186 199.136 273.967 199.209C274.186 199.282 274.405 199.392 274.624 199.538C274.843 199.611 274.988 199.684 275.061 199.757L276.594 199.209C279.222 198.333 280.645 196.8 282.397 192.858C284.367 188.369 284.586 186.945 283.491 183.003C282.834 180.375 282.287 178.075 282.287 177.747C282.287 177.418 282.834 177.199 283.382 177.199C284.039 177.199 287.651 180.375 291.593 184.317C295.534 188.259 298.709 191.763 298.709 192.311C298.818 192.749 300.132 194.829 301.665 196.91C303.307 198.99 306.263 204.465 308.343 208.955C310.314 213.444 313.16 221.657 314.583 227.022C315.678 231.403 316.882 236.549 317.43 239.615C317.211 237.973 316.882 236.44 316.663 235.235C315.678 230.745 313.598 222.861 311.956 217.715C310.314 212.568 307.248 205.232 305.059 201.29C302.869 197.348 298.052 190.778 294.33 186.507C290.607 182.346 287.104 178.842 286.447 178.842C285.9 178.842 284.696 177.856 283.82 176.652C283.272 175.885 282.834 175.009 282.506 174.133C282.506 175.338 282.068 176.323 281.521 176.652V176.652ZM319.51 255.493C320.057 260.968 320.823 266.881 321.042 268.633C321.371 270.494 322.028 274.108 322.685 276.846C323.232 279.583 324.546 283.854 325.531 286.482C326.407 289 327.064 291.081 326.954 291.081C326.735 291.19 324.436 288.015 321.699 284.292C320.933 283.197 320.167 282.102 319.4 280.897C319.473 281.189 319.51 281.481 319.51 281.773C319.51 282.649 319.948 283.525 320.386 283.744C320.933 283.854 322.904 286.153 324.874 288.891C326.735 291.628 328.377 293.599 328.377 293.271C328.377 292.942 327.611 291.3 326.735 289.438C325.859 287.686 324.327 283.197 323.341 279.583C322.466 275.97 321.371 270.604 321.152 267.538C320.823 264.581 320.057 257.902 319.4 252.755C319.072 249.58 318.415 245.2 317.758 241.367C318.086 243.886 318.853 250.127 319.51 255.493ZM314.912 274.108C313.817 272.356 311.737 268.523 310.204 265.676C308.671 262.72 307.248 260.53 306.92 260.749C306.92 260.749 306.92 260.785 306.92 260.858C307.066 261.15 307.358 261.552 307.796 262.063C308.562 263.267 310.532 266.443 311.956 269.18C313.269 271.589 314.474 273.779 315.021 274.436C315.021 274.29 314.985 274.181 314.912 274.108ZM309.219 268.633C309.985 270.713 310.861 272.794 311.518 274.436C311.189 273.451 310.314 271.151 309.438 269.18C309.292 268.815 309.146 268.414 309 267.976C309.073 268.195 309.146 268.414 309.219 268.633V268.633ZM313.817 280.021C313.744 280.094 313.78 280.277 313.926 280.569C314.729 280.934 314.948 280.605 314.583 279.583C314.364 278.817 313.817 278.269 313.488 278.379C313.707 278.926 313.926 279.583 313.817 280.021V280.021ZM321.918 292.395C326.626 298.527 330.458 304.33 330.458 305.097C330.458 305.754 329.801 306.411 329.144 306.411C329.801 306.411 330.458 305.754 330.458 305.097C330.458 304.33 328.377 300.936 325.75 297.541C323.232 294.037 320.386 290.205 319.51 288.891C318.743 287.686 317.649 286.263 316.992 285.387C318.305 287.467 320.057 289.876 321.918 292.395V292.395ZM297.614 267.866C297.614 266.771 295.205 256.588 292.14 244.433C292.469 246.185 292.578 247.28 292.469 247.28C291.921 247.28 289.951 240.71 287.87 232.826C287.104 229.65 286.338 226.694 285.681 224.066C286.776 228.446 288.308 234.25 289.841 240.491C292.359 250.237 294.439 259.763 295.206 264.253L295.096 263.705C294.768 260.42 294.111 256.697 293.563 255.493C293.016 254.179 293.125 253.522 293.782 253.96C294.439 254.398 295.534 258.011 296.3 262.172C297.176 266.224 297.505 268.195 297.176 269.399C297.505 268.852 297.614 268.304 297.614 267.866V267.866ZM228.862 334.334L231.38 331.596C232.693 330.063 234.226 327.764 234.554 326.45C234.883 325.026 235.759 323.931 236.306 323.931C236.854 323.931 237.401 323.165 237.401 322.179C237.291 323.165 236.854 323.931 236.306 323.931C235.759 323.931 234.883 325.026 234.554 326.45C234.117 327.764 232.693 329.954 231.27 331.377C229.847 332.691 228.424 333.567 228.095 333.239C227.767 332.91 227.219 333.348 226.782 334.005C226.198 334.954 226.38 335.137 227.329 334.553C227.986 334.224 229.3 335.21 233.241 340.137L228.862 334.334ZM238.605 319.003C239.043 318.675 239.262 317.47 239.372 315.828C239.262 317.58 238.934 318.784 238.605 319.003C237.948 319.222 237.51 320.427 237.51 321.632C237.62 320.646 238.058 319.551 238.605 319.003ZM237.51 299.293C237.437 299.074 237.328 298.855 237.182 298.636C237.182 298.709 237.109 298.746 236.963 298.746C236.306 298.636 236.635 299.403 237.51 300.388C237.729 300.607 237.912 300.826 238.058 301.045C237.839 300.315 237.656 299.731 237.51 299.293ZM235.649 293.271C235.43 291.738 235.868 289.876 236.635 289.11C237.291 288.562 238.386 288.124 239.591 288.234C237.51 287.796 236.635 288.343 235.54 290.752C234.336 293.271 234.336 293.928 235.54 294.585C235.759 294.731 235.905 294.84 235.978 294.913C235.832 294.256 235.722 293.709 235.649 293.271ZM246.269 285.277C248.02 283.306 249.553 281.335 249.553 280.897C249.553 280.459 248.787 278.598 247.911 276.846C246.926 274.874 245.064 273.232 243.203 272.794C242.984 272.721 242.729 272.648 242.437 272.575C242.948 272.867 243.568 273.305 244.298 273.889C246.707 275.531 248.02 277.393 248.239 279.583C248.458 281.992 247.692 283.635 245.502 285.825C243.641 287.577 242.109 288.343 240.466 288.343C242.327 288.672 243.86 287.905 246.269 285.277ZM238.605 272.356C237.729 272.575 236.306 273.451 235.649 274.436C234.445 276.189 234.226 276.079 232.365 274.327C231.708 273.743 231.343 273.268 231.27 272.903C231.124 272.903 231.015 272.94 230.942 273.013C229.737 273.341 228.752 273.998 228.752 274.655C228.752 275.203 229.737 275.531 230.942 275.203C232.146 274.874 233.131 275.093 233.131 275.75C233.131 276.298 234.007 277.174 234.992 277.503C236.416 277.941 236.744 277.722 236.306 276.627C235.868 275.751 236.635 274.436 238.167 273.232C238.715 272.794 239.262 272.465 239.7 272.246C239.262 272.246 238.897 272.283 238.605 272.356V272.356ZM234.226 269.18C234.226 268.523 234.992 267.319 235.868 266.443C236.854 265.348 238.605 265.019 240.466 265.457C242.327 265.786 244.408 265.348 245.94 264.362C246.378 263.997 246.78 263.632 247.145 263.267V263.267C246.378 263.924 244.298 264.8 242.656 265.129C240.904 265.567 239.7 265.457 239.7 264.8C239.7 264.143 238.715 264.253 237.182 265.019C235.868 265.786 234.336 266.224 233.898 266.114C233.46 266.005 233.35 266.881 233.679 268.085C234.007 269.29 233.679 270.275 233.131 270.275C233.679 270.275 234.226 269.728 234.226 269.18V269.18ZM246.269 253.85C245.064 252.646 243.094 251.66 241.89 251.66C240.685 251.66 238.934 252.865 238.058 254.398C237.182 255.931 235.759 257.135 234.992 257.026C234.664 257.026 234.117 257.245 233.569 257.573C233.715 257.5 233.825 257.5 233.898 257.573C234.336 257.792 235.759 257.354 236.963 256.478C238.167 255.602 238.715 254.945 238.277 254.945C237.839 254.945 238.058 254.288 238.824 253.412C239.591 252.646 241.014 252.098 241.999 252.098C242.984 252.098 244.845 253.193 246.159 254.398C247.035 255.274 247.911 256.588 248.239 257.792C247.911 256.369 247.144 254.726 246.269 253.85ZM232.036 258.778C231.161 259.763 229.847 260.53 229.3 260.42C228.643 260.42 227.329 259.106 226.344 257.354C225.358 255.712 224.811 253.193 225.139 251.66C225.468 250.127 225.139 247.828 224.482 246.404C223.497 244.543 223.607 244.105 224.592 244.543C225.249 244.762 226.125 245.857 226.672 247.061C226.782 246.623 226.672 245.857 226.672 245.309C226.563 244.543 226.015 244.214 225.468 244.543C224.811 244.871 224.264 244.433 224.264 243.667C224.154 242.572 224.045 242.572 223.716 243.667C223.497 244.433 222.621 244.762 221.855 244.433C221.089 244.105 221.527 244.762 222.84 245.857C224.482 247.28 225.03 248.923 224.92 252.208C224.811 254.617 225.249 256.916 225.906 257.354C226.563 257.792 227.11 258.668 227.11 259.435C227.11 260.201 227.986 260.858 228.971 261.077C230.066 261.296 231.38 260.53 232.036 259.325C232.365 258.668 232.693 258.23 233.022 257.902C232.657 258.121 232.328 258.413 232.036 258.778V258.778ZM230.942 251.879C233.241 252.536 234.445 251.77 238.605 247.39C241.342 244.543 244.845 241.915 246.488 241.477C248.13 241.039 250.319 239.944 251.195 239.068C252.29 237.973 252.655 236.148 252.29 233.593C251.962 231.074 250.538 228.774 248.458 227.022C246.269 225.27 243.751 224.285 241.342 224.285C239.262 224.285 237.182 224.832 236.744 225.599C236.306 226.365 235.868 228.336 235.649 229.979C235.43 231.403 234.883 233.483 233.46 236.659C233.679 236.44 233.934 236.33 234.226 236.33C234.773 236.33 235.102 235.783 234.773 235.235C234.445 234.578 234.555 234.14 234.992 234.14C235.43 234.14 235.978 232.498 236.087 230.526C236.306 228.555 236.963 226.365 237.729 225.489C238.605 224.613 240.466 224.285 242.984 224.723C245.064 225.051 247.801 226.475 249.115 227.789C250.429 229.212 251.633 232.06 251.852 234.25C252.181 237.206 251.743 238.63 250.319 239.506C249.334 240.163 247.254 240.71 245.721 240.71C244.079 240.71 242.656 241.477 242.218 242.572C241.78 243.667 239.7 246.185 237.51 248.156C234.773 250.675 232.912 251.551 230.942 251.222C229.409 251.003 228.314 250.237 228.424 249.58C228.643 248.923 228.205 248.375 227.657 248.375C227.511 248.375 227.365 248.339 227.219 248.266C227.876 249.908 229.518 251.441 230.942 251.879V251.879ZM229.518 235.345C228.643 234.25 227.986 233.483 227.548 232.717C227.621 232.79 227.657 232.899 227.657 233.045C227.657 233.593 228.862 235.345 230.394 236.878C231.27 237.754 231.927 238.301 232.365 238.52L229.518 235.345ZM227.219 227.898C227.767 224.504 227.548 223.299 225.577 221.328C224.154 219.795 221.964 218.81 219.994 218.81C219.775 218.81 219.556 218.81 219.337 218.81C220.541 218.919 222.183 219.357 223.278 219.905C224.482 220.562 225.906 222.095 226.344 223.518C226.891 224.832 226.891 227.241 226.344 228.993C225.796 230.855 225.796 231.95 226.563 231.95C226.891 231.95 227.219 232.169 227.438 232.498C226.891 231.184 226.891 229.979 227.219 227.898V227.898ZM214.192 220.014C212.878 220.781 211.564 221.328 211.455 221.438C211.236 221.547 210.907 223.299 210.469 225.38C210.141 227.789 210.579 230.526 211.674 232.826C212.111 233.593 212.549 234.469 212.987 235.016C212.914 234.87 212.878 234.688 212.878 234.469C212.878 233.812 212.44 232.826 212.002 232.279C211.564 231.841 211.126 229.76 211.126 227.898C211.236 225.599 212.111 223.299 213.863 221.547C214.958 220.452 216.6 219.467 217.804 219.029C216.381 219.248 215.067 219.576 214.192 220.014V220.014ZM214.52 236.33C215.067 236.33 216.491 237.644 219.665 242.353H216.71C215.615 242.353 214.192 242.791 212.987 243.448C213.352 243.375 213.681 243.375 213.973 243.448C214.848 243.776 215.834 243.557 216.162 242.9C216.491 242.243 217.257 242.353 218.352 243.229C219.665 244.324 219.994 244.324 219.994 243.229C219.994 242.462 220.541 242.134 221.308 242.462C222.074 242.9 220.979 241.477 218.899 239.396C216.71 237.316 214.52 235.673 213.973 235.673C213.754 235.673 213.571 235.637 213.425 235.564C213.863 236.002 214.192 236.33 214.52 236.33ZM208.937 250.346C208.937 252.208 209.703 254.507 210.579 255.274C211.345 255.931 213.097 257.464 214.41 258.559C215.615 259.544 216.71 260.968 216.71 261.515C216.71 262.172 215.177 263.158 213.425 263.705C212.987 263.851 212.549 264.07 212.111 264.362C212.184 264.362 212.221 264.435 212.221 264.581C212.221 265.019 212.878 264.8 213.644 264.034C214.739 262.939 215.286 262.939 216.381 264.034C217.476 265.129 217.695 264.91 217.257 263.158C217.038 261.953 216.819 260.858 216.71 260.749C216.71 260.53 216.6 259.982 216.381 259.325C216.272 258.778 215.834 258.34 215.615 258.449C215.286 258.559 213.754 257.464 212.221 256.04C209.922 253.741 209.593 252.755 210.36 249.799C210.798 247.828 210.798 246.185 210.36 246.295C210.214 246.295 210.141 246.149 210.141 245.857C209.374 247.171 208.937 248.704 208.937 250.346V250.346ZM209.156 267.319C208.608 268.633 208.389 270.932 208.718 272.465C208.827 273.122 209.156 273.998 209.484 274.765C209.484 274.692 209.52 274.655 209.593 274.655C209.922 273.998 210.907 274.217 212.002 275.203C213.097 276.079 214.301 276.846 214.739 276.846C215.177 276.846 215.286 275.641 215.067 274.108C214.739 272.356 215.067 270.932 216.162 270.275C217.038 269.728 218.461 269.399 219.446 269.728C220.322 270.056 221.089 269.837 221.089 269.18C221.089 268.633 220.103 267.647 218.899 266.99C217.695 266.443 215.834 266.005 214.739 266.224C213.754 266.333 212.221 266.881 211.455 267.319C210.688 267.757 209.922 267.757 209.703 267.319C209.484 266.99 209.703 266.443 210.031 266.005C209.593 266.443 209.301 266.881 209.156 267.319V267.319ZM211.236 277.174C212.44 278.16 214.082 279.036 215.067 279.036C215.943 279.036 216.71 279.364 216.71 279.912C216.71 280.35 215.505 284.401 213.973 288.891C212.987 291.519 212.221 294.585 211.674 296.994C211.819 296.702 212.038 296.556 212.33 296.556C212.878 296.556 213.097 295.57 212.878 294.366C212.549 293.161 212.768 292.176 213.425 292.176C213.973 292.176 214.192 291.409 213.973 290.533C213.644 289.657 213.863 288.891 214.52 288.891C215.067 288.891 215.286 288.124 215.067 287.248C214.739 286.372 214.958 285.606 215.615 285.606C216.162 285.606 216.381 284.839 216.162 283.963C215.834 283.087 215.943 282.321 216.381 282.321C216.819 282.321 217.257 281.335 217.257 280.131C217.257 278.488 216.71 278.05 215.286 278.488C214.301 278.817 213.425 278.598 213.425 277.941C213.425 277.393 212.44 276.627 211.236 276.298C210.871 276.225 210.542 276.115 210.25 275.969C210.542 276.408 210.871 276.809 211.236 277.174V277.174ZM211.126 300.936C211.126 302.14 210.907 303.564 210.798 304.659C210.798 304.513 210.834 304.367 210.907 304.221C211.674 301.812 212.002 299.074 211.783 298.198C211.637 297.906 211.564 297.651 211.564 297.432C211.345 298.855 211.126 300.169 211.126 300.936ZM203.572 303.783C203.353 303.637 203.134 303.454 202.915 303.235C203.207 303.6 203.499 303.929 203.791 304.221C206.09 306.63 208.28 308.601 208.718 308.601C208.937 308.601 209.156 308.382 209.374 307.944C208.608 308.053 207.075 306.849 203.572 303.783V303.783ZM194.266 295.899C192.405 294.475 190.654 293.161 190.435 293.271C190.106 293.271 188.902 292.285 187.698 291.081C186.493 289.876 182.114 286.263 178.064 283.087C174.013 280.021 170.4 277.722 170.072 278.269C169.853 278.707 170.948 279.912 172.59 280.897C174.232 281.992 175.984 283.306 176.312 283.963C176.75 284.511 180.582 288.124 192.515 298.417L189.449 295.461C187.26 293.38 184.523 290.862 183.319 289.986C182.114 289.11 180.363 287.358 179.487 286.263C177.845 284.182 177.845 284.182 181.348 286.263C183.319 287.358 184.961 288.562 184.851 288.891C184.851 289.219 187.588 291.409 190.873 293.818C194.157 296.227 196.894 298.527 196.894 299.074C197.003 299.512 197.551 299.841 198.317 299.841C198.536 299.841 198.901 299.987 199.412 300.279C197.332 298.527 195.361 296.884 194.266 295.899ZM193.172 311.886C193.062 318.018 193.172 322.179 193.61 325.026C193.391 322.069 193.281 316.375 193.391 306.63L193.172 311.886ZM198.208 332.363C198.427 332.436 198.573 332.472 198.646 332.472L197.66 332.034C197.295 331.815 196.894 331.523 196.456 331.158C197.113 331.815 197.66 332.144 198.208 332.363V332.363ZM194.704 334.991C191.42 336.086 189.121 336.962 189.778 337.071C190.325 337.071 190.106 337.619 189.23 338.166C187.807 339.042 187.807 339.261 189.449 339.261C190.544 339.261 191.42 338.823 191.42 338.166C191.42 337.619 192.296 337.181 193.281 337.29C194.376 337.29 196.018 337.181 196.894 336.852C197.66 336.524 198.865 336.086 199.85 335.757C199.631 335.83 199.375 335.903 199.084 335.976C196.894 336.706 195.617 336.706 195.252 335.976C194.923 335.429 196.018 334.553 200.726 333.458L199.193 332.801C199.85 333.239 198.646 333.786 194.704 334.991V334.991ZM202.368 335.976C202.368 336.633 203.025 337.071 203.682 337.071C204.448 337.071 207.513 337.728 210.579 338.604C213.535 339.48 217.804 341.67 219.994 343.313C222.183 344.955 226.125 349.335 228.862 352.949C231.599 356.562 234.117 360.504 234.445 361.709C234.883 362.913 235.43 365.103 235.759 366.636C235.978 367.513 236.197 369.046 236.525 370.469C236.197 368.936 235.978 367.403 235.759 366.418C235.43 364.665 234.773 362.256 234.226 360.942C233.679 359.519 231.051 355.467 228.314 351.854C225.577 348.24 221.636 344.189 219.665 342.875C217.695 341.451 214.082 339.699 211.674 338.714C209.265 337.838 206.2 337.181 204.776 337.071C203.463 337.071 202.368 336.633 202.368 335.976C202.368 335.83 202.331 335.721 202.258 335.648C202.331 335.721 202.368 335.83 202.368 335.976V335.976ZM238.386 386.128C238.496 386.237 238.605 386.675 238.715 387.223C238.824 387.661 239.262 389.96 239.7 392.369C240.247 394.778 240.904 399.706 241.233 403.319C241.452 405.619 241.89 409.123 242.437 412.627C242.327 411.203 242.218 409.78 242.218 408.794C241.999 407.042 241.671 403.757 241.342 401.677C241.014 399.596 240.466 396.092 240.138 394.012C239.809 391.931 239.372 389.194 239.153 387.989C238.824 386.785 238.605 385.799 238.496 385.799C238.386 385.799 238.167 383.828 237.948 381.419C238.167 383.828 238.277 385.909 238.386 386.128V386.128ZM244.408 435.403C243.97 434.965 243.203 433.98 242.327 432.775C242.984 433.761 243.422 434.527 243.751 434.856C244.517 435.622 245.393 436.06 245.94 436.06C245.502 436.06 244.955 435.732 244.408 435.403ZM228.424 401.786C224.373 390.946 223.607 389.741 223.059 392.479C222.84 393.355 222.731 393.902 222.512 394.121C222.731 394.012 222.95 393.574 223.059 392.917C223.607 390.727 224.592 392.479 228.533 402.772C229.956 406.714 232.037 411.532 233.898 415.912C232.474 412.408 230.394 406.933 228.424 401.786ZM218.133 386.347C216.053 381.748 214.192 378.572 213.644 378.572C214.192 378.572 216.053 381.748 218.133 386.347C219.556 389.303 220.432 391.274 221.089 392.588C220.432 391.274 219.556 389.303 218.133 386.347ZM183.757 370.469C182.881 370.469 181.129 371.236 179.596 372.221C181.239 371.236 182.99 370.579 183.757 370.469C184.632 370.36 187.26 370.031 189.449 369.593C187.26 370.031 184.632 370.36 183.757 370.469ZM176.093 373.535C175.984 372.988 175.217 374.411 174.341 376.492C173.356 378.682 172.371 385.142 172.042 391.822C171.495 402.443 171.714 403.648 174.013 407.918C175.436 410.327 178.502 414.379 180.691 416.898C182.99 419.416 185.289 421.387 185.946 421.387C186.019 421.387 186.129 421.387 186.275 421.387C183.976 419.745 181.676 417.664 180.144 416.022C177.954 413.613 175.108 409.67 174.013 407.48C172.699 404.852 172.042 401.239 172.152 397.844C172.261 393.574 172.59 392.479 173.903 392.807C175.327 393.136 175.327 392.917 173.903 391.274C173.028 390.179 172.371 387.77 172.59 385.909C172.699 384.047 173.356 380.762 173.903 378.682C174.56 376.273 175.874 374.411 178.064 373.097C176.859 373.645 176.093 373.864 176.093 373.535V373.535ZM192.515 425.439C195.252 426.753 199.193 428.176 201.273 428.614C203.353 429.052 205.543 429.709 206.2 430.257C206.747 430.695 209.703 431.68 212.768 432.447C215.724 433.213 220.213 434.637 227 437.703H214.41C207.513 437.812 197.113 438.031 191.42 438.36C185.727 438.688 178.939 439.455 176.312 440.221C173.685 440.988 171.604 441.973 171.604 442.521C171.714 442.74 171.714 443.287 171.714 443.944C171.823 442.74 173.356 441.754 176.312 440.988C178.939 440.221 182.771 439.564 184.851 439.345C186.931 439.126 192.405 438.688 196.894 438.469C201.383 438.25 210.469 437.922 229.19 437.593L224.264 435.951C221.527 434.965 219.228 433.761 219.009 433.323C218.899 432.775 217.804 432.556 216.6 432.885C215.396 433.213 214.41 432.994 214.41 432.337C214.41 431.79 213.863 431.461 213.316 431.79C212.659 432.118 211.455 431.68 210.469 431.023C209.593 430.257 208.827 429.928 208.827 430.476C208.937 430.914 208.061 430.804 206.966 430.257C205.981 429.709 203.353 428.943 201.273 428.505C199.193 428.176 196.784 427.191 196.018 426.534C195.252 425.767 194.595 425.548 194.595 426.096C194.704 426.534 192.405 425.439 189.449 423.687C188.793 423.249 188.063 422.774 187.26 422.263C187.479 422.701 189.778 424.125 192.515 425.439V425.439ZM171.714 444.93C171.714 445.806 173.028 447.667 174.56 449.091C176.203 450.405 177.188 452.157 176.75 452.923C176.421 453.58 174.232 454.566 171.933 455.004C169.743 455.332 167.116 456.428 166.24 457.194C165.948 457.486 165.693 457.669 165.474 457.742C165.912 457.632 166.459 457.413 167.006 456.975C168.43 456.099 170.838 455.113 172.48 454.894C174.232 454.675 175.765 454.347 176.093 454.237C176.422 454.128 176.969 454.018 177.407 454.128C177.954 454.237 178.283 453.471 178.283 452.595C178.283 451.719 176.75 449.857 174.998 448.543C173.247 447.229 171.933 445.477 171.714 444.382C171.714 444.528 171.714 444.711 171.714 444.93V444.93ZM153.869 449.31C153.431 449.638 151.132 447.448 148.723 444.382C151.132 447.448 153.431 449.638 153.869 449.31C154.307 449.091 156.496 450.733 159.014 453.142C156.496 450.624 154.307 448.981 153.869 449.31ZM144.454 397.297C145.038 398.392 145.366 398.501 145.439 397.625C145.439 396.749 145.987 396.53 146.753 397.078C147.702 397.589 147.884 397.406 147.3 396.53C146.862 395.764 147.957 392.041 149.818 388.318C151.023 385.799 152.117 383.281 152.665 381.529C151.898 383.5 150.366 386.675 148.833 389.96C146.862 394.231 145.001 397.187 144.344 397.187C144.417 397.187 144.454 397.224 144.454 397.297V397.297ZM252.399 173.914C253.823 175.447 255.574 178.404 256.231 180.484C256.779 182.565 258.53 186.836 260.063 189.792C262.69 195.158 262.69 195.596 262.034 214.977C261.705 224.723 261.267 236.549 260.939 242.791C261.377 236.221 262.034 225.818 262.362 216.62C263.238 197.676 263.128 194.939 261.486 192.53C260.501 190.997 258.53 186.617 257.217 182.674C255.793 178.732 253.494 174.462 252.071 173.148C250.538 171.724 247.801 170.52 244.845 170.082C244.554 170.155 244.298 170.191 244.079 170.191C248.349 171.067 250.648 172.162 252.399 173.914V173.914ZM259.735 255.274C259.516 255.712 259.516 257.026 259.844 258.23C260.209 259.69 261.304 260.42 263.128 260.42C263.201 260.42 263.311 260.42 263.457 260.42C262.253 260.311 261.048 259.544 260.501 258.559C260.172 257.792 260.063 255.164 260.172 251.879C260.063 253.741 259.844 255.055 259.735 255.274ZM263.238 257.792C263.311 257.719 263.384 257.646 263.457 257.573C263.128 258.011 262.8 258.23 262.581 258.23C262.362 258.23 262.216 258.157 262.143 258.011C262.143 258.23 262.143 258.413 262.143 258.559C262.253 258.778 262.581 258.778 262.909 258.668C262.982 258.449 263.092 258.157 263.238 257.792V257.792ZM262.143 256.369C262.471 255.274 263.238 250.675 263.785 246.185C264.004 244.433 264.223 241.805 264.333 238.849C264.223 239.834 264.004 238.192 264.004 234.688C264.004 230.526 264.223 228.555 264.442 230.307C264.552 231.074 264.661 232.06 264.661 233.264C264.771 230.417 264.88 227.46 264.88 224.832C264.88 217.605 264.88 211.254 264.661 210.597C264.442 210.05 264.771 206.874 265.208 203.808C265.646 200.633 266.522 198.005 267.07 198.005C267.617 198.005 268.274 198.662 268.602 199.428C268.931 200.085 269.369 209.174 269.478 219.357C269.697 232.169 269.259 239.287 268.383 242.134C267.617 244.324 266.851 247.061 266.632 248.156C266.522 249.142 266.084 250.565 265.756 251.113C265.318 251.77 264.771 253.522 264.333 255.274C264.223 255.931 264.004 256.588 263.676 257.135C264.223 256.259 265.099 255.383 265.865 254.945C265.208 254.945 265.975 251.222 267.507 246.733C270.025 239.068 270.244 237.316 269.916 218.7C269.697 200.304 269.588 198.771 267.507 197.348C265.427 195.815 265.318 196.034 264.661 203.699C264.223 208.079 263.785 218.591 263.785 227.022C263.676 235.454 263.238 245.857 262.69 250.018C262.362 252.427 262.253 254.726 262.143 256.369V256.369V256.369ZM267.836 252.536C267.726 251.77 268.383 249.689 269.15 247.828C269.369 247.171 269.697 245.528 270.025 242.353C269.953 242.937 269.843 243.484 269.697 243.995C268.712 247.28 267.836 250.784 267.507 251.66C267.289 252.536 267.07 253.631 267.07 254.179V254.179C267.617 253.631 267.945 252.974 267.836 252.536V252.536ZM272.981 200.414L274.514 199.866C274.368 199.866 274.222 199.866 274.076 199.866C273.419 199.757 272.872 199.757 272.543 200.304C272.47 200.669 272.434 201.107 272.434 201.618C272.434 202.713 272.325 203.48 271.996 203.589C271.777 206.327 271.668 210.926 271.558 218.7C271.558 221.036 271.522 223.19 271.449 225.161C271.887 218.7 272.434 210.597 272.981 200.414V200.414ZM154.635 281.554C154.416 282.54 154.526 283.416 154.964 283.416C155.511 283.416 155.84 285.715 155.84 288.453C155.84 291.3 156.277 293.709 156.934 293.928C157.007 294.001 157.08 294.074 157.153 294.147C156.825 293.271 156.277 290.643 155.949 287.796C155.621 284.511 155.402 281.116 155.292 280.459C155.292 279.693 154.745 279.255 154.197 279.583C154.051 279.656 153.942 279.693 153.869 279.693C154.635 279.912 154.854 280.569 154.635 281.554ZM143.469 319.551C146.205 317.908 149.052 317.361 154.964 317.361C159.89 317.361 162.08 317.58 163.065 318.346C163.138 318.127 163.284 317.835 163.503 317.47C162.956 317.689 161.532 317.47 159.014 317.142C156.059 316.704 151.46 316.923 148.723 317.47C145.987 318.127 142.921 319.332 141.826 320.208C141.461 320.5 141.06 320.756 140.622 320.975C141.388 320.865 142.264 320.317 143.469 319.551V319.551ZM162.627 320.975C161.97 321.194 159.781 320.975 158.029 320.427C157.007 320.135 155.913 320.025 154.745 320.098C155.511 320.208 156.387 320.646 157.701 321.193C158.212 321.412 158.722 321.631 159.233 321.851C159.343 321.522 160.219 321.303 161.423 321.522C162.846 321.632 164.05 321.194 164.16 320.427C164.16 320.135 164.196 319.843 164.269 319.551C164.196 319.551 164.123 319.551 164.05 319.551C163.904 319.551 163.758 319.514 163.613 319.441C163.613 320.208 163.284 320.865 162.627 320.975V320.975ZM164.05 322.836C165.583 322.836 167.225 323.274 167.882 323.822C168.539 324.479 168.977 324.15 168.977 322.836C168.977 322.288 168.867 321.631 168.649 321.193C168.503 321.193 168.393 321.23 168.32 321.303C168.612 321.887 168.43 321.96 167.773 321.522C167.481 321.668 167.335 321.851 167.335 322.07C167.335 322.508 165.693 322.836 163.722 322.836C163.795 322.836 163.904 322.836 164.05 322.836V322.836ZM166.24 319.003C166.24 318.127 165.693 317.361 165.145 317.361C165.693 317.361 166.021 318.456 165.693 319.879C165.145 322.07 165.255 322.179 166.787 320.646C166.459 320.208 166.24 319.551 166.24 319.003ZM150.037 321.193C149.052 321.522 148.176 321.851 147.41 322.07C147.957 322.398 149.599 321.96 151.132 321.193C151.789 320.828 152.336 320.573 152.774 320.427C151.898 320.573 150.986 320.828 150.037 321.193ZM145.439 322.288C145.439 321.96 143.906 323.055 142.155 324.807C139.418 327.216 138.87 328.64 138.87 332.472C138.87 334.662 139.418 337.947 140.184 340.356V340.356C140.732 340.356 140.732 339.699 140.294 339.042C139.856 338.276 139.308 336.195 139.199 334.334C138.98 332.582 138.98 330.063 139.308 328.859C139.527 327.654 141.279 325.902 143.25 325.026C145.111 324.15 146.534 322.946 146.534 322.288V322.288C145.877 322.398 145.439 322.398 145.439 322.288V322.288ZM140.513 341.451C141.388 343.86 142.593 345.831 143.25 345.831C143.797 345.831 145.439 345.284 146.753 344.627C148.942 343.532 149.49 343.751 151.241 345.941C152.227 347.364 153.541 348.131 153.978 347.693C154.051 347.547 154.124 347.291 154.197 346.926C153.65 347.583 152.993 347.255 151.679 345.831C150.694 344.627 150.147 343.313 150.585 342.984C151.132 342.546 150.366 342.765 148.942 343.532C147.629 344.189 146.315 344.736 145.987 344.736C145.658 344.736 145.439 343.86 145.439 342.875C145.33 341.78 145.768 340.575 146.205 340.137C146.643 339.699 147.738 339.918 148.505 340.685C149.599 341.78 149.709 341.561 149.271 339.59C148.942 338.057 148.286 337.4 147.519 337.947C146.862 338.385 145.877 337.947 145.33 337.071C144.673 335.976 144.344 337.254 144.344 340.904C144.235 345.612 144.125 346.05 143.031 344.189C142.374 342.984 141.279 341.67 140.622 341.232C140.476 341.159 140.367 341.086 140.294 341.013C140.367 341.159 140.44 341.305 140.513 341.451V341.451ZM154.526 340.028C154.307 335.21 154.526 333.896 155.292 335.429C155.84 336.524 157.153 339.809 158.467 342.765C158.358 341.78 157.263 339.152 154.526 333.239L153.759 336.852C153.431 338.714 153.541 341.451 154.088 342.875C154.234 343.24 154.38 343.678 154.526 344.189C154.526 342.875 154.526 341.451 154.526 340.028V340.028ZM162.08 349.116C162.518 349.116 162.956 348.35 162.956 347.255C162.846 348.131 162.299 347.912 160.766 346.379C160.328 345.941 159.89 345.393 159.452 344.955C160.657 347.364 161.751 349.226 162.08 349.116V349.116ZM155.511 298.417C156.387 298.855 156.168 298.308 155.292 297.322C154.927 296.884 154.635 296.519 154.416 296.227C154.562 296.957 154.672 297.614 154.745 298.198C154.964 298.198 155.219 298.271 155.511 298.417ZM155.292 295.461C156.496 295.461 156.168 294.913 154.416 293.271C153.869 292.833 153.431 292.285 152.993 291.847C153.066 292.066 153.176 292.285 153.322 292.504C153.65 293.161 153.978 294.366 154.307 295.461C154.453 295.388 154.781 295.388 155.292 295.461ZM153.322 287.139C153.468 286.847 153.614 286.591 153.759 286.372C153.614 286.226 153.431 285.971 153.212 285.606C152.446 284.182 152.227 284.292 151.57 285.934C151.132 287.029 151.57 288.015 152.555 288.343C152.628 288.343 152.701 288.38 152.774 288.453C152.993 288.015 153.176 287.577 153.322 287.139V287.139ZM153.103 283.416C152.446 282.978 151.898 282.321 151.46 281.773C151.132 281.773 150.913 281.992 150.913 282.321C150.913 282.978 151.679 283.635 152.555 283.963C153.212 284.182 153.869 284.839 154.088 285.387C154.307 284.401 154.088 283.963 153.103 283.416ZM132.849 359.519C131.645 359.738 130.55 359.957 130.331 359.957C130.222 360.066 129.565 360.285 129.017 360.614C128.361 360.942 127.704 361.161 127.375 361.161C127.047 361.161 126.499 361.271 125.952 361.49C125.514 361.709 123.434 362.585 121.354 363.461C119.274 364.446 115.77 366.856 113.69 368.936C112.048 370.469 109.968 373.316 108.326 376.163C109.859 373.645 111.829 371.017 113.362 369.374C116.756 365.979 120.04 364.227 128.032 361.38C129.893 360.723 131.754 359.957 133.615 359.3C133.324 359.373 133.068 359.446 132.849 359.519V359.519ZM123.434 458.399C123.361 458.399 123.252 458.362 123.106 458.289C123.397 458.435 123.616 458.472 123.762 458.399C124.091 458.18 122.011 454.894 119.055 450.952C122.011 454.894 123.981 458.18 123.434 458.399ZM113.362 454.347C110.297 452.814 106.684 451.062 103.618 449.419C103.764 449.565 103.837 449.711 103.837 449.857C103.837 450.514 104.275 450.952 104.932 450.952C105.48 450.952 109.859 452.704 114.457 454.894C115.479 455.332 116.464 455.734 117.413 456.099C116.208 455.551 114.785 455.004 113.362 454.347ZM98.9108 446.901C97.9255 446.353 97.0497 445.806 96.1739 445.368C96.5023 445.806 97.7066 446.572 99.3487 447.12C99.2028 447.047 99.0568 446.974 98.9108 446.901V446.901ZM92.8895 443.287V443.287V443.287C92.8895 443.944 93.6559 444.382 94.5317 444.382C94.5317 444.382 94.5682 444.382 94.6412 444.382C93.6559 443.835 92.999 443.397 92.8895 443.287ZM87.963 439.455C86.9777 438.688 85.8829 437.812 85.0071 437.046C86.2113 438.25 87.6346 439.564 88.5104 440.331C89.6052 441.207 90.9189 442.083 91.5758 442.192C90.7 441.426 89.3862 440.44 87.963 439.455ZM79.6426 428.505C78.9858 426.096 77.891 423.468 77.1246 422.592C76.7597 422.154 76.4678 421.898 76.2488 421.825C76.4678 421.898 76.7597 422.154 77.1246 422.592C77.891 423.468 78.9858 426.096 79.5332 428.505C79.7521 429.271 80.0806 430.038 80.409 430.804C80.0806 430.038 79.8616 429.271 79.6426 428.505ZM73.8403 421.935C73.4024 419.526 72.636 416.788 72.1981 415.912C71.9792 415.547 71.5777 415.219 70.9939 414.927V414.927C71.9792 415.803 73.0739 418.65 73.6213 421.387C73.9498 423.358 74.2782 424.453 74.4972 424.891C74.2782 424.344 74.0592 423.468 73.8403 421.935V421.935ZM58.4038 415.474C56.5427 415.803 55.4479 415.912 55.01 415.803C55.4479 415.912 56.3238 415.912 57.8565 415.584C58.6228 415.474 59.6081 415.255 60.7029 415.036C59.8271 415.182 59.0607 415.328 58.4038 415.474ZM54.7911 415.036C55.3385 414.27 53.6963 411.751 50.4119 408.466C53.5868 411.642 55.3385 414.27 54.7911 415.036C54.6451 415.255 54.6086 415.438 54.6816 415.584C54.6086 415.511 54.6451 415.328 54.7911 415.036ZM49.6456 285.606C49.974 283.416 51.8351 277.941 54.0247 272.356C51.8351 277.612 49.974 283.306 49.6456 285.606C49.5361 286.701 49.4266 288.343 49.5361 290.314C49.4266 288.343 49.5361 286.701 49.6456 285.606ZM62.564 246.733C62.8925 245.419 63.1114 243.557 63.4398 241.477C62.8925 244.652 62.3451 247.828 61.7977 250.237C62.1626 248.923 62.418 247.755 62.564 246.733ZM68.3664 203.48C69.2422 199.538 71.3223 193.953 72.855 190.887C74.3877 187.931 78.1099 182.893 81.0659 179.718L86.5398 174.024L92.1232 176.871C96.2833 178.951 98.8014 179.499 101.648 179.061C104.713 178.513 105.917 178.951 107.888 181.141C108.253 181.506 108.618 181.835 108.983 182.127C108.837 182.054 108.8 181.835 108.873 181.47C108.654 181.251 108.435 180.995 108.216 180.703C107.012 179.17 105.151 178.623 101.1 178.623C97.2687 178.623 94.2033 177.747 86.5398 173.367L75.4825 185.412L75.373 149.824L80.0806 150.481C82.5986 150.919 85.0071 151.576 85.3355 152.014C85.664 152.452 87.963 152.562 90.481 152.124C90.8459 152.124 91.1744 152.087 91.4663 152.014C91.1014 152.014 90.6635 152.014 90.1526 152.014C87.4156 152.014 85.226 151.686 85.226 151.248C85.226 150.7 84.1313 150.372 82.708 150.372C81.3943 150.262 79.2047 149.934 75.373 148.729V166.797C75.373 183.66 75.154 185.193 72.636 190.668C71.2128 193.734 69.2422 199.538 68.3664 203.48C67.4905 207.422 66.5052 214.32 66.0673 218.81C66.0673 218.81 66.0673 218.846 66.0673 218.919C66.8337 212.787 67.7095 206.546 68.3664 203.48V203.48ZM117.194 183.112C121.025 182.674 124.748 182.674 125.405 183.112C126.499 183.66 126.499 184.645 125.186 187.602C124.31 189.683 123.543 192.639 123.543 194.172C123.543 195.486 122.887 197.238 121.901 198.443C122.12 198.443 122.303 198.479 122.449 198.552C123.106 198.881 123.543 197.457 123.543 195.267C123.543 193.187 123.981 191.216 124.638 190.887C125.186 190.559 125.514 189.902 125.186 189.245C124.857 188.697 125.076 188.15 125.733 188.15C126.28 188.15 126.609 187.712 126.28 187.055C125.952 186.507 126.061 185.959 126.499 185.959C127.047 185.959 127.375 184.974 127.375 183.769C127.375 182.455 126.828 181.798 125.952 182.127C125.295 182.455 124.638 182.236 124.638 181.579C124.638 181.032 123.872 180.484 122.996 180.484C122.011 180.484 121.682 181.032 122.12 181.798C122.777 182.784 122.23 182.893 119.931 182.346C118.288 181.908 116.975 181.908 116.975 182.455C116.975 182.893 115.442 183.222 113.69 183.222C111.829 183.222 110.406 182.893 110.406 182.455C110.406 181.908 109.859 181.798 109.311 182.127C109.165 182.2 109.056 182.2 108.983 182.127C110.625 183.55 111.939 183.66 117.194 183.112V183.112ZM119.164 204.903C119.164 207.86 118.507 208.736 114.785 210.926C113.69 211.473 112.596 212.24 111.72 213.116C112.304 212.605 112.961 212.13 113.69 211.692C117.303 209.393 118.398 209.174 119.931 210.378C121.573 211.473 121.682 211.473 120.588 210.05C119.931 209.174 119.493 206.655 119.602 204.575C119.712 203.261 119.931 201.947 120.15 200.852C119.493 202.056 119.164 203.48 119.164 204.903V204.903ZM104.056 218.919C103.399 218.919 100.115 221.657 96.9402 225.161C93.8748 228.774 89.4957 234.469 87.4156 238.082C89.4957 234.469 93.9843 228.665 97.2687 225.161C100.553 221.657 103.728 218.919 104.385 219.138C104.823 219.357 105.808 219.248 106.684 218.919C105.917 219.029 104.823 219.029 104.056 218.919V218.919ZM75.373 329.735C75.373 338.495 75.4825 339.152 77.2341 338.276C75.4825 339.152 75.373 338.495 75.373 320.098V329.735ZM215.615 267.1C217.585 267.1 217.585 267.209 216.162 268.961C215.177 270.056 214.41 272.027 214.41 273.341C214.41 274.655 213.973 275.641 213.535 275.422C213.097 275.203 212.111 273.451 211.345 271.589C210.579 269.618 210.469 268.414 211.126 268.742C211.674 268.961 212.44 268.742 212.768 268.195C213.097 267.538 214.41 267.1 215.615 267.1ZM153.322 277.503C153.614 277.576 153.796 277.649 153.869 277.722C154.088 277.503 154.197 277.174 154.197 276.955C154.197 276.298 153.65 276.079 153.103 276.408C152.555 276.627 152.227 276.298 152.008 275.75C152.227 276.517 152.774 277.174 153.322 277.503ZM152.008 289.219C152.008 289.365 152.044 289.621 152.117 289.986C152.19 289.767 152.3 289.511 152.446 289.219C152.227 289 152.008 289 152.008 289.219ZM264.333 168.877C265.427 168.877 268.164 170.191 270.244 171.943C272.325 173.695 274.405 175.447 274.952 175.885C275.39 176.323 276.594 177.747 277.689 178.951C278.674 180.265 279.769 182.017 279.988 182.784C280.207 183.66 280.535 185.412 280.754 186.617C281.083 187.821 280.207 190.34 279.003 192.311C277.361 195.048 276.047 195.924 273.529 195.924C271.668 195.924 268.712 195.048 266.851 193.953C266.34 193.661 265.865 193.369 265.427 193.077C266.522 194.172 267.617 195.158 268.602 195.705C270.354 196.691 272.106 197.786 272.434 198.224V198.224C272.981 197.238 273.857 196.691 275.171 196.472C276.813 196.143 278.565 194.501 279.55 192.639C280.426 190.778 281.192 187.821 281.192 186.069C281.192 183.988 279.988 181.36 278.127 179.17C276.485 177.199 274.295 175.009 273.2 174.243C272.215 173.476 271.558 172.381 271.887 171.834C271.96 171.615 272.069 171.469 272.215 171.396C271.011 171.177 269.588 170.301 268.602 169.425C266.632 167.454 266.084 167.344 263.128 168.768C261.267 169.753 257.873 170.191 251.086 169.425L253.056 171.286C253.056 171.213 253.093 171.14 253.166 171.067C253.604 170.629 255.903 170.41 258.311 170.52C260.61 170.629 262.471 170.301 262.362 169.753C262.253 169.315 263.128 168.877 264.333 168.877V168.877ZM262.034 186.288C261.048 183.988 260.282 181.798 260.391 181.36C260.391 180.922 259.844 180.594 259.297 180.594C258.64 180.594 258.421 179.827 258.749 178.951C259.078 177.966 258.311 176.323 257.107 175.119C255.903 173.914 255.246 172.6 255.574 172.381C256.012 172.053 255.465 171.834 254.37 171.834C254.005 171.834 253.713 171.797 253.494 171.724L253.823 172.053C255.465 173.367 257.545 176.98 258.53 180.046C259.516 183.003 261.486 187.383 262.8 189.683C263.019 190.048 263.238 190.376 263.457 190.668C263.347 189.792 262.69 188.04 262.034 186.288V186.288ZM284.258 216.729C284.258 216.729 284.258 216.62 284.258 216.729C284.404 216.875 284.586 217.313 284.805 218.043C284.586 217.313 284.404 216.875 284.258 216.729ZM171.276 321.851C171.167 322.07 171.714 322.946 172.809 324.041C171.933 323.165 171.385 322.398 171.276 321.851ZM167.882 319.879C167.517 319.587 167.408 319.66 167.554 320.098C167.7 320.025 167.809 319.952 167.882 319.879ZM283.491 215.634C283.491 215.634 283.528 215.671 283.601 215.744C283.528 215.598 283.491 215.561 283.491 215.634ZM283.601 215.744C283.747 215.89 283.966 216.182 284.258 216.62C283.966 216.182 283.747 215.89 283.601 215.744ZM175.984 330.501C176.057 330.355 176.093 330.209 176.093 330.063C176.093 330.209 176.057 330.355 175.984 330.501ZM273.967 170.52C272.872 169.753 272.106 168.439 272.106 167.454C272.106 167.527 272.069 167.6 271.996 167.673C271.887 168.439 272.434 169.644 273.419 170.301C274.295 170.848 274.624 171.177 274.405 171.396C275.718 171.724 275.609 171.505 273.967 170.52V170.52ZM106.793 163.731C108.545 164.278 108.545 164.497 106.574 165.702C104.385 167.125 104.385 167.125 106.793 168.33C108.873 169.425 109.311 170.629 109.53 176.214C109.603 177.09 109.64 177.856 109.64 178.513C110.297 176.214 110.297 174.352 109.421 171.505C108.654 168.877 107.56 167.344 106.246 167.344C104.823 167.235 104.932 167.016 106.793 166.249C108.216 165.702 109.092 164.716 108.764 164.169C108.435 163.512 107.45 163.074 106.574 163.074C106.063 163.074 105.662 162.818 105.37 162.307C105.662 162.964 106.136 163.439 106.793 163.731V163.731ZM263.895 148.182C266.632 148.182 269.369 148.729 269.807 149.277C270.354 149.824 270.135 149.824 269.15 149.277C268.055 148.51 267.726 148.62 268.164 149.715C268.529 149.35 268.931 149.313 269.369 149.605C270.317 150.189 270.5 150.007 269.916 149.058C269.478 148.291 267.617 147.744 265.646 147.744C263.785 147.744 262.471 147.306 262.909 146.868C263.347 146.43 262.581 145.554 261.267 145.006C259.953 144.349 258.749 143.364 258.53 142.816C258.311 142.159 259.953 141.831 262.253 141.94C265.537 142.159 265.975 142.05 264.223 141.174C263.42 140.809 263.019 140.553 263.019 140.407C261.486 140.735 259.953 140.735 258.968 140.516C258.968 140.735 258.53 141.174 257.873 141.721C256.122 143.254 256.231 143.473 259.516 145.444C261.486 146.649 262.581 147.634 262.034 147.634C261.377 147.744 259.844 146.977 258.421 146.101C257.107 145.116 255.793 144.568 255.465 144.678C255.136 144.787 256.779 146.758 259.078 148.948C259.187 148.401 261.267 148.072 263.895 148.182V148.182ZM266.632 152.233C266.632 152.379 266.559 152.489 266.413 152.562C266.851 152.452 267.179 152.014 267.398 151.467C267.07 151.576 266.741 151.795 266.632 152.233V152.233ZM264.442 140.078C264.442 140.151 264.442 140.188 264.442 140.188C264.734 140.115 265.099 140.078 265.537 140.078C266.632 140.078 267.617 139.969 268.383 139.75C267.726 139.531 266.084 139.64 264.442 140.078ZM81.0659 313.747C84.2407 310.243 86.2113 307.506 85.3355 307.725C86.2113 307.506 84.2407 310.243 75.2635 320.208L81.0659 313.747ZM113.362 258.997C108.654 263.705 101.429 272.027 97.2687 277.393C101.429 272.027 108.654 263.705 121.901 250.565L113.362 258.997ZM154.197 381.857C154.088 379.886 153.759 378.901 153.541 379.667C153.65 379.996 153.869 380.872 154.197 382.405V381.857ZM245.064 420.073C246.488 419.307 246.488 419.088 244.845 419.088C244.262 419.088 243.824 418.905 243.532 418.54C243.678 419.562 243.86 420.584 244.079 421.606C244.189 420.84 244.517 420.511 245.064 420.073V420.073ZM233.022 237.863C233.022 237.717 233.058 237.535 233.131 237.316C232.912 237.754 232.73 238.155 232.584 238.52C232.876 238.593 233.022 238.374 233.022 237.863ZM235.759 295.242C235.211 295.242 235.43 296.008 236.306 296.994C236.525 297.14 236.671 297.322 236.744 297.541C236.525 296.775 236.306 296.008 236.087 295.242C236.014 295.242 235.905 295.242 235.759 295.242ZM237.948 301.921C237.291 301.812 237.401 302.359 238.167 303.235C238.386 303.454 238.605 304.002 238.715 304.878C238.569 303.783 238.386 302.797 238.167 301.921C238.167 301.921 238.094 301.921 237.948 301.921ZM295.753 269.618L295.424 266.552C295.424 268.414 295.315 269.399 294.33 270.166C294.841 270.02 295.315 269.837 295.753 269.618ZM316.663 277.503C316.992 278.926 317.868 280.021 318.415 280.021C318.634 280.021 318.816 280.094 318.962 280.24C317.868 278.598 316.882 277.065 316.116 275.86C316.335 276.408 316.444 276.955 316.663 277.503ZM293.782 447.339V447.229L291.921 446.353C292.505 446.645 293.125 446.974 293.782 447.339V447.339ZM232.146 272.246C232.584 272.137 232.693 271.699 232.474 271.261C232.693 271.589 232.584 271.918 232.146 272.246ZM109.311 215.963C108.983 216.948 108.326 217.824 107.779 218.372C108.654 217.824 109.311 216.729 109.311 215.963ZM95.517 155.518C96.0644 156.175 97.2687 156.285 100.006 156.285C97.3781 156.285 96.0644 156.175 95.517 155.518ZM264.661 453.033C263.457 455.771 262.581 457.961 262.581 457.961C262.581 457.961 264.552 458.618 266.96 459.275C270.244 460.37 271.777 461.574 272.762 463.983L274.076 467.378C280.864 462.888 284.696 459.822 286.995 457.523C289.294 455.332 291.155 452.704 291.045 451.609C291.045 450.624 289.951 449.2 288.637 448.543C287.214 447.777 282.615 446.572 278.236 445.806C273.857 444.93 269.807 444.273 269.15 444.273C268.493 444.273 267.726 445.149 267.398 446.134C266.96 447.229 265.756 450.295 264.661 453.033V453.033Z"
                fill-opacity="0.5"
              />
              <path d="M249.991 80.1813C250.137 79.9623 250.319 79.7433 250.538 79.5243C251.414 78.6483 254.699 74.1588 257.654 69.5597C260.72 64.9607 263.347 61.1281 263.676 61.1281C264.004 61.0186 264.989 62.6611 265.865 64.6321C266.741 66.6032 270.682 71.3117 274.624 75.1443C280.754 80.9478 281.411 82.0428 279.55 82.4808C278.346 82.9189 275.609 84.0139 273.529 84.9994C270.354 86.6419 269.697 87.4084 269.916 90.1459C270.025 92.0075 270.682 93.5405 271.339 93.7595C271.996 93.869 271.887 94.6355 271.12 95.621C270.354 96.6065 270.244 97.373 270.792 97.2635C271.449 97.2635 273.091 96.497 274.624 95.621C276.156 94.745 278.017 94.088 278.784 93.9785C279.55 93.9785 279.769 94.6355 279.331 95.621C278.784 96.497 276.813 98.1395 274.733 99.125C272.653 100.22 270.244 102.301 269.259 103.834C268.164 105.476 268.055 106.133 268.931 105.695C269.697 105.257 270.463 105.586 270.792 106.571C271.12 107.447 271.339 108.98 271.339 109.856C271.339 110.732 270.901 111.28 270.244 110.951C269.697 110.623 269.15 110.732 269.15 111.28C269.15 111.718 271.449 112.813 274.295 113.908C279.222 115.55 279.331 115.66 276.266 115.879C273.31 116.207 273.419 116.317 277.361 116.864C280.097 117.302 281.74 118.069 281.849 119.164C281.959 120.04 282.068 124.31 282.178 128.471L282.397 136.136C285.79 126.172 288.637 122.668 299.913 111.499C308.233 103.177 315.897 94.4165 319.291 89.0509C323.341 82.8094 326.188 76.5678 329.144 67.6982C332.866 56.3101 333.194 54.0105 333.194 42.9509C333.194 31.4533 333.085 30.5773 329.91 25.5402C328.049 22.5837 324.874 19.2986 322.794 18.2036C320.386 16.8896 316.444 16.1231 312.394 16.0136C307.139 15.7946 304.621 16.4516 299.804 18.9701C296.519 20.6127 291.045 24.0072 287.761 26.4162C283.053 29.8108 281.083 30.5773 278.784 30.0298C277.032 29.7013 272.325 25.9782 267.836 21.3792C260.72 14.2616 258.53 12.8381 247.035 7.69151C239.919 4.51598 232.803 1.99745 231.161 1.99745C229.409 1.99745 226.125 2.43546 223.716 2.98296C220.541 3.74947 218.133 3.53047 214.958 2.43546C212.549 1.55945 207.404 0.902439 203.463 1.01194C199.521 1.01194 190.982 2.32595 184.304 3.74947C173.575 6.049 170.291 6.268 154.197 5.82999C144.235 5.61099 130.988 4.84448 124.638 4.29698C118.289 3.63997 107.122 3.20196 99.7867 3.09246C92.3421 3.09246 83.6933 3.63997 80.6279 4.29698C77.4531 4.95398 72.9645 6.487 70.7749 7.58201C68.0379 9.00553 66.6147 10.429 66.6147 11.8526C66.6147 13.0571 67.9285 15.0281 69.6801 16.2326C71.3223 17.5466 75.8109 19.6271 79.7521 21.0507C83.6933 22.3647 90.3715 24.6642 94.5317 26.0877C100.225 27.9492 106.027 28.8252 116.975 29.4823C125.076 29.9203 132.63 30.5773 133.725 30.9058C134.71 31.2343 135.586 32.2198 135.586 32.9863C135.586 33.6433 130.441 41.1989 124.091 49.6305C117.632 58.0621 111.501 66.4937 110.406 68.2457C109.311 70.1072 107.012 75.4728 105.48 80.2908C103.837 85.1089 102.195 89.5984 101.648 90.1459C101.21 90.8029 97.7066 92.4455 93.8748 93.869C90.0431 95.2925 81.9417 98.906 76.0299 102.082C69.7896 105.257 62.6735 109.966 59.2797 113.141C56.1048 116.207 53.4773 119.383 53.4773 120.259C53.4773 121.135 53.9152 122.449 54.3531 123.106C54.7911 123.763 57.4185 125.843 60.3745 127.705L65.5199 131.209C64.9725 145.225 64.2062 151.029 63.4398 153.109C62.6735 155.19 61.3598 158.146 60.7029 159.679C59.9365 161.431 58.1849 162.636 56.2143 162.964C53.3678 163.512 52.9299 163.95 53.3678 166.797C53.4773 168.658 54.4626 171.286 55.5574 172.71C56.5427 174.133 58.9512 175.995 60.9218 176.871C62.783 177.637 65.1915 178.075 66.0673 177.747C67.0526 177.418 67.7095 177.856 67.7095 179.17C67.7095 180.156 68.4759 181.908 69.3517 183.003C70.6654 184.426 70.7749 185.412 69.6801 187.383C69.0232 188.697 68.3664 190.997 68.1474 192.53C68.0379 194.063 67.1621 198.443 66.2863 202.385C65.301 206.327 63.9872 216.62 63.3304 225.38C62.564 234.14 61.1408 244.762 60.046 248.923C58.9512 253.084 55.5574 261.734 52.492 268.085C49.4266 274.436 46.5802 281.773 46.2517 284.511C45.8138 287.358 46.3612 294.585 47.456 302.031C48.5508 308.929 49.0982 316.375 48.7697 318.456C48.3318 320.646 44.0622 328.311 39.0262 335.976C31.6911 347.036 29.2826 351.635 26.9836 359.519C25.3414 364.884 22.1665 372.44 19.8675 376.163C17.3495 380.324 13.0798 385.033 9.13859 388.318C5.5258 391.165 2.13198 394.997 1.47511 396.64C0.599279 399.158 0.818236 400.582 3.11728 404.633C4.97841 408.028 7.60589 410.546 11.3282 412.737C14.3936 414.489 20.3054 416.569 24.4656 417.555C28.8447 418.431 37.9314 419.197 45.8138 419.197C55.3384 419.197 60.9218 418.759 64.2062 417.555C66.7242 416.679 69.3517 416.131 69.8991 416.46C70.5559 416.788 71.5412 419.745 72.0886 423.03C72.855 427.3 74.3877 430.585 77.3436 434.308C79.6426 437.155 84.4597 441.645 88.0725 444.382C91.6853 447.12 95.8454 450.076 97.2687 451.062L100.006 452.814C96.0644 462.012 95.0791 465.845 95.298 467.378C95.6265 468.911 94.6412 473.51 93.218 477.78C91.7947 482.051 90.9189 486.65 91.2473 488.183C91.5758 489.716 92.8895 492.015 94.2033 493.329C95.6265 494.643 101.21 497.819 106.574 500.337C112.048 502.747 121.354 506.47 127.375 508.441C133.397 510.412 141.06 512.383 144.344 512.821C147.629 513.149 152.336 513.04 154.745 512.383C157.482 511.726 160.438 509.864 162.737 507.455C165.255 504.608 166.24 502.418 166.24 499.68C166.24 497.6 165.583 494.205 164.817 492.344C163.941 490.373 161.423 487.088 159.014 485.226C156.715 483.255 151.789 480.518 148.286 479.204C144.344 477.671 141.498 475.809 140.951 474.495C140.513 473.291 140.075 472.962 140.075 473.729C139.965 474.386 139.089 475.043 138.104 475.043C137.009 475.043 134.272 474.386 132.083 473.619L127.923 472.305C133.944 466.502 134.053 466.392 138.87 468.035C141.607 468.911 147.519 470.444 152.008 471.429C156.715 472.415 165.583 473.072 172.809 473.072C179.706 473.072 187.479 472.524 190.106 471.867C192.624 471.21 196.018 469.568 197.66 468.254C199.302 466.83 200.288 465.078 199.959 464.093C199.521 462.888 196.018 462.122 186.384 461.027C179.158 460.26 173.137 459.384 172.809 459.165C172.48 458.946 174.122 458.289 176.422 457.632C179.158 456.866 180.691 455.661 181.129 454.018C181.676 452.047 181.02 450.733 177.845 447.996C175.217 445.477 174.341 444.163 175.327 443.725C175.984 443.287 182.333 442.521 189.23 442.083C196.128 441.535 207.732 441.097 214.958 441.097C222.183 441.097 232.146 441.426 236.963 441.973L245.94 442.74C245.174 460.589 245.283 468.035 245.612 470.991C246.159 475.809 246.378 476.247 250.319 477.233C252.509 477.78 256.56 478.328 259.297 478.218C262.034 478.218 265.208 477.78 266.413 477.342C267.617 476.795 269.478 476.795 270.573 477.342C271.668 477.89 275.828 477.78 280.973 477.014C286.228 476.138 290.717 474.714 293.016 473.181C294.877 471.758 296.3 471.101 295.972 471.758C295.643 472.415 295.972 472.853 296.519 472.853C297.176 472.853 297.395 471.867 297.067 470.663C296.702 469.203 297.067 468.473 298.161 468.473C299.256 468.473 300.023 466.94 300.46 464.421C300.898 462.122 300.898 454.566 300.46 447.667C300.132 440.769 298.818 428.395 297.614 420.292C296.41 412.189 295.096 399.268 294.549 391.603C294.111 384.266 293.454 378.353 293.016 378.244C293.089 378.244 293.162 378.207 293.235 378.134C293.892 377.806 294.549 378.244 294.877 379.01C295.096 379.667 295.315 378.572 295.206 376.492C295.096 374.411 295.315 372.002 295.753 371.345C296.191 370.579 296.41 369.703 296.191 369.374V369.374C296.081 369.046 295.424 369.593 294.987 370.688C294.768 371.053 294.585 371.491 294.439 372.002C294.293 371.637 294.147 371.345 294.001 371.126C293.235 370.25 293.235 369.922 293.782 370.25C294.439 370.688 296.519 367.841 298.599 364.118C301.555 358.533 302.103 356.562 301.555 352.949L300.898 348.569C303.416 353.606 304.073 355.577 304.073 356.234C304.073 356.891 304.949 358.205 306.044 359.3C307.467 360.723 308.89 361.161 311.08 360.723C312.722 360.395 315.24 358.424 316.773 356.562C318.196 354.591 319.948 350.211 320.604 346.926C321.152 343.641 321.699 339.152 321.699 337.071C321.699 333.239 321.809 333.239 327.94 331.815C331.443 331.049 336.26 329.406 338.559 327.983C341.515 326.34 343.157 324.479 343.704 322.288C344.361 319.989 343.923 317.142 342.391 312.981C341.186 309.696 339.325 305.973 338.23 304.768C337.136 303.564 334.837 299.841 333.194 296.556C331.552 293.271 328.925 287.139 327.502 282.868C326.078 278.598 323.67 266.771 322.247 256.588C320.714 246.404 318.305 233.483 316.882 228.117C315.459 222.752 312.722 214.32 310.861 209.502C309.109 204.684 305.168 197.238 302.103 193.077C299.147 188.916 293.454 182.236 289.513 178.294C285.462 174.352 282.287 171.943 282.287 172.819C281.63 171.396 279.879 169.753 277.361 168.22C273.091 165.702 272.434 165.483 272.106 167.125C272.106 167.198 272.106 167.271 272.106 167.344C272.106 166.578 271.339 165.373 270.244 164.607C269.04 163.731 268.274 162.526 268.493 161.869C268.712 161.212 268.493 160.774 267.945 160.774C267.398 160.774 266.194 162.088 265.099 163.84C264.114 165.483 263.238 166.906 263.238 167.125C263.128 167.344 260.172 167.673 256.56 168.001C253.275 168.33 249.444 168.658 247.692 168.768C247.911 168.622 248.057 168.476 248.13 168.33C248.239 167.782 249.115 167.344 249.991 167.344C251.086 167.344 251.451 166.614 251.086 165.154C250.757 163.95 250.867 162.964 251.414 162.964C251.852 163.074 252.618 163.84 253.275 164.716C253.932 165.702 256.45 166.687 259.078 166.906C261.596 167.125 263.457 167.016 263.128 166.578C262.909 166.03 263.566 164.716 264.661 163.512C265.646 162.307 266.303 160.555 265.975 159.679C265.646 158.803 265.865 158.365 266.413 158.803C267.07 159.132 267.617 158.584 267.836 157.38C267.945 156.175 267.398 155.299 266.413 155.299C265.537 155.299 264.552 155.737 264.223 156.394C263.895 157.051 262.69 157.161 261.267 156.504C259.844 156.066 258.749 154.861 258.749 153.985C258.749 153.219 257.107 150.481 255.136 148.182C253.166 145.773 251.852 143.145 252.181 142.488C252.509 141.721 252.29 141.283 251.633 141.612C250.976 141.94 250.538 141.393 250.538 140.516C250.538 139.531 251.195 139.093 252.181 139.421C253.056 139.75 256.888 138.983 260.72 137.779C264.442 136.574 268.274 135.589 269.15 135.698C270.244 135.698 270.062 136.027 268.602 136.684C266.741 137.45 266.741 137.669 268.383 137.669C269.369 137.779 270.025 138.217 269.697 138.874C269.624 139.02 269.442 139.166 269.15 139.312C268.931 138.764 266.851 138.326 264.442 138.217C261.815 138.217 258.968 138.436 258.202 138.983C257.107 139.531 256.998 139.75 258.092 140.188C257.581 140.188 256.852 140.224 255.903 140.297C252.071 140.516 251.962 140.626 253.056 143.254C253.713 144.787 256.012 147.963 258.092 150.262C260.282 152.562 261.377 154.204 260.72 153.766C259.953 153.438 259.297 153.547 259.297 154.204C259.297 154.861 260.282 155.299 261.486 155.299C262.69 155.299 263.676 154.861 263.676 154.204C263.676 153.766 262.362 152.124 260.72 150.372C261.267 150.81 262.034 151.248 262.909 151.576C263.931 152.16 264.734 152.525 265.318 152.671C265.099 152.598 264.844 152.525 264.552 152.452C262.471 151.905 262.253 152.014 263.457 153.219C264.442 154.423 265.537 154.533 267.836 153.547C270.463 152.562 270.792 151.905 270.573 148.072C270.354 145.006 270.573 144.24 271.339 145.444C271.887 146.32 272.434 148.072 272.434 149.277C272.434 151.248 272.653 151.248 274.624 148.729C275.828 147.196 276.813 144.897 276.813 143.473C276.813 142.159 277.251 141.064 277.908 141.064C278.565 141.064 279.003 141.283 279.003 141.612C279.003 141.94 278.236 143.911 277.361 145.992C276.485 148.072 275.937 150.043 276.266 150.372C276.594 150.7 276.485 150.7 276.047 150.372C275.499 150.043 274.076 150.919 272.653 152.233C271.339 153.657 270.244 155.518 270.244 156.394C270.244 157.38 271.887 156.394 274.624 153.657C277.689 150.591 279.55 147.415 280.754 143.254C282.178 138.545 282.287 135.26 281.521 127.924L280.645 118.616C272.543 117.302 270.244 116.426 270.244 115.879C270.244 115.331 270.901 114.784 271.668 114.784C272.325 114.674 271.558 114.017 269.697 113.251C267.945 112.484 266.084 110.951 265.537 109.747C264.989 108.214 265.756 106.462 268.383 103.286C270.354 100.877 273.419 98.5775 274.952 98.03C276.594 97.592 277.908 96.716 277.908 96.1685C277.908 95.621 277.579 95.0735 277.142 95.0735C276.594 95.0735 274.624 96.059 272.762 97.2635C270.792 98.468 268.821 99.2345 268.383 98.906C267.836 98.5775 268.383 97.373 269.478 96.1685C270.573 94.8545 270.901 93.7595 270.244 93.431C269.697 93.1025 269.369 92.336 269.697 91.7885C270.025 91.2409 269.807 90.6934 269.15 90.6934C268.602 90.6934 268.055 90.0364 268.055 89.2699C267.945 88.6129 268.821 87.1894 269.916 86.2039C271.011 85.2184 273.748 83.6854 275.937 82.9189L280.097 81.3858C271.449 73.7207 267.836 69.6692 266.522 67.3697C265.318 65.1797 263.895 63.3181 263.566 63.3181C263.238 63.3181 260.282 67.2602 256.998 71.9687C253.713 76.7868 250.648 80.4003 249.991 80.1813ZM249.991 80.1813V80.1813ZM265.099 435.294C264.989 432.775 264.552 429.928 264.114 429.052M265.099 435.294C265.099 435.367 265.099 435.44 265.099 435.513V435.294ZM287.323 331.377C288.199 329.625 289.513 328.311 290.279 328.311M287.323 331.377C286.557 333.02 284.805 338.057 283.491 342.546C284.805 338.057 286.557 333.02 287.323 331.377ZM290.279 328.311V328.311ZM173.356 342.875C173.247 342.437 173.137 341.999 172.809 341.451V341.451C172.59 341.013 172.444 340.648 172.371 340.356C172.444 340.356 172.517 340.356 172.59 340.356C173.356 340.356 173.685 341.232 173.356 342.875ZM173.356 342.875V342.875ZM173.137 343.751C172.699 343.86 171.604 343.86 170.4 343.751C171.167 343.97 171.714 344.517 171.714 345.065C171.714 345.722 171.933 346.16 172.261 345.831C172.48 345.612 172.809 344.736 173.137 343.751ZM173.137 343.751V343.751ZM162.956 346.926C162.846 345.612 163.175 345.503 164.598 346.707C165.364 347.364 166.131 347.583 166.568 347.255C166.349 349.226 165.583 351.525 164.707 352.401C163.284 353.825 162.846 353.825 160.547 352.292C158.577 350.868 157.591 350.759 156.168 351.744C154.416 352.839 154.416 353.387 157.153 358.971C159.452 363.899 159.89 366.089 159.452 371.017C159.233 374.302 158.029 379.01 156.934 381.419L154.964 385.799C154.891 385.507 154.818 385.215 154.745 384.923C158.029 377.806 159.014 373.097 159.233 369.922C159.452 365.103 158.905 362.694 156.277 357.657C154.197 353.496 153.212 352.073 151.898 351.635C152.044 351.635 152.227 351.635 152.446 351.635C154.307 351.525 156.168 350.759 156.606 349.992C157.153 348.897 157.81 349.007 159.343 350.43C160.438 351.525 162.189 352.401 163.284 352.401C164.269 352.401 165.364 351.525 165.693 350.54C166.021 349.445 165.583 347.802 164.598 346.926C163.175 345.503 162.956 345.503 162.956 346.926ZM162.956 346.926V346.926ZM134.71 275.203L134.272 269.509C134.053 264.8 134.272 263.705 135.696 263.705C136.243 263.705 137.119 263.377 137.776 263.048C137.228 263.267 136.352 263.377 135.586 263.158C133.506 262.61 133.397 263.048 134.71 275.203ZM134.71 275.203V275.203ZM248.458 100.33V100.33ZM248.458 100.33C249.225 99.563 249.553 99.4535 249.115 100.001C249.042 100.147 249.006 100.33 249.006 100.549C250.648 101.644 252.071 102.848 252.29 103.615C252.399 103.943 252.728 104.162 253.056 104.381C253.275 104.162 253.494 104.272 253.604 104.491C253.823 104.491 254.078 104.454 254.37 104.381C254.917 104.162 255.355 104.272 255.684 104.491C255.027 103.396 253.494 101.753 251.743 100.33C249.115 98.1395 247.692 96.1685 248.13 95.402C248.568 94.745 249.991 94.1975 251.414 94.307C252.728 94.4165 253.823 94.8545 253.823 95.402C253.823 95.84 254.699 96.1685 255.793 96.1685C256.779 96.278 258.64 95.2925 259.844 94.088C261.815 92.0075 261.924 91.679 260.391 89.9269C259.516 88.8319 257.764 87.1894 256.56 86.3134C255.355 85.4374 253.166 83.5759 251.633 82.1523C250.757 81.2763 250.1 80.6193 249.881 80.2908C249.334 81.2763 250.1 82.0428 252.728 84.2329C254.808 86.0944 256.888 87.5179 257.435 87.4084C257.873 87.4084 258.749 88.3939 259.297 89.5984C260.063 91.1314 259.953 92.336 259.078 93.5405C258.202 94.6355 256.669 95.0735 254.917 94.745C253.385 94.4165 251.414 93.869 250.538 93.5405C249.553 93.1025 248.239 93.9785 247.145 95.9495C246.378 97.154 245.94 98.03 245.831 98.906C246.378 99.125 247.144 99.563 248.458 100.33V100.33ZM330.458 305.097C330.458 304.33 326.626 298.527 321.918 292.395V292.395C320.057 289.876 318.305 287.467 316.992 285.387C317.649 286.263 318.743 287.686 319.51 288.891C320.386 290.205 323.232 294.037 325.75 297.541C328.377 300.936 330.458 304.33 330.458 305.097ZM330.458 305.097C330.458 305.754 329.801 306.411 329.144 306.411C329.801 306.411 330.458 305.754 330.458 305.097ZM234.554 326.45C234.226 327.764 232.693 330.063 231.38 331.596L228.862 334.334L233.241 340.137C229.3 335.21 227.986 334.224 227.329 334.553C226.38 335.137 226.198 334.954 226.782 334.005C227.219 333.348 227.767 332.91 228.095 333.239C228.424 333.567 229.847 332.691 231.27 331.377C232.693 329.954 234.117 327.764 234.554 326.45ZM234.554 326.45C234.883 325.026 235.759 323.931 236.306 323.931M234.554 326.45C234.883 325.026 235.759 323.931 236.306 323.931M236.306 323.931C236.854 323.931 237.401 323.165 237.401 322.179C237.291 323.165 236.854 323.931 236.306 323.931ZM238.605 319.003C239.043 318.675 239.262 317.47 239.372 315.828C239.262 317.58 238.934 318.784 238.605 319.003ZM238.605 319.003C237.948 319.222 237.51 320.427 237.51 321.632C237.62 320.646 238.058 319.551 238.605 319.003ZM247.145 263.267C246.78 263.632 246.378 263.997 245.94 264.362C244.408 265.348 242.327 265.786 240.466 265.457C238.605 265.019 236.854 265.348 235.868 266.443C234.992 267.319 234.226 268.523 234.226 269.18V269.18C234.226 269.728 233.679 270.275 233.131 270.275C233.679 270.275 234.007 269.29 233.679 268.085C233.35 266.881 233.46 266.005 233.898 266.114C234.336 266.224 235.868 265.786 237.182 265.019C238.715 264.253 239.7 264.143 239.7 264.8C239.7 265.457 240.904 265.567 242.656 265.129C244.298 264.8 246.378 263.924 247.145 263.267ZM247.145 263.267V263.267ZM202.368 335.976C202.368 336.633 203.463 337.071 204.776 337.071C206.2 337.181 209.265 337.838 211.674 338.714C214.082 339.699 217.695 341.451 219.665 342.875C221.636 344.189 225.577 348.24 228.314 351.854C231.051 355.467 233.679 359.519 234.226 360.942C234.773 362.256 235.43 364.665 235.759 366.418C235.978 367.403 236.197 368.936 236.525 370.469C236.197 369.046 235.978 367.513 235.759 366.636C235.43 365.103 234.883 362.913 234.445 361.709C234.117 360.504 231.599 356.562 228.862 352.949C226.125 349.335 222.183 344.955 219.994 343.313C217.804 341.67 213.535 339.48 210.579 338.604C207.513 337.728 204.448 337.071 203.682 337.071C203.025 337.071 202.368 336.633 202.368 335.976V335.976ZM202.368 335.976C202.368 335.83 202.331 335.721 202.258 335.648M218.133 386.347C216.053 381.748 214.192 378.572 213.644 378.572C214.192 378.572 216.053 381.748 218.133 386.347ZM218.133 386.347C219.556 389.303 220.432 391.274 221.089 392.588C220.432 391.274 219.556 389.303 218.133 386.347ZM183.757 370.469C182.881 370.469 181.129 371.236 179.596 372.221C181.239 371.236 182.99 370.579 183.757 370.469ZM183.757 370.469C184.632 370.36 187.26 370.031 189.449 369.593C187.26 370.031 184.632 370.36 183.757 370.469ZM153.869 449.31C153.431 449.638 151.132 447.448 148.723 444.382C151.132 447.448 153.431 449.638 153.869 449.31ZM153.869 449.31C154.307 449.091 156.496 450.733 159.014 453.142C156.496 450.624 154.307 448.981 153.869 449.31ZM262.143 256.369C262.253 254.726 262.362 252.427 262.69 250.018C263.238 245.857 263.676 235.454 263.785 227.022C263.785 218.591 264.223 208.079 264.661 203.699C265.318 196.034 265.427 195.815 267.507 197.348C269.588 198.771 269.697 200.304 269.916 218.7C270.244 237.316 270.025 239.068 267.507 246.733C265.975 251.222 265.208 254.945 265.865 254.945C265.099 255.383 264.223 256.259 263.676 257.135C264.004 256.588 264.223 255.931 264.333 255.274C264.771 253.522 265.318 251.77 265.756 251.113C266.084 250.565 266.522 249.142 266.632 248.156C266.851 247.061 267.617 244.324 268.383 242.134C269.259 239.287 269.697 232.169 269.478 219.357C269.369 209.174 268.931 200.085 268.602 199.428C268.274 198.662 267.617 198.005 267.07 198.005C266.522 198.005 265.646 200.633 265.208 203.808C264.771 206.874 264.442 210.05 264.661 210.597C264.88 211.254 264.88 217.605 264.88 224.832C264.88 227.46 264.771 230.417 264.661 233.264C264.661 232.06 264.552 231.074 264.442 230.307C264.223 228.555 264.004 230.526 264.004 234.688C264.004 238.192 264.223 239.834 264.333 238.849C264.223 241.805 264.004 244.433 263.785 246.185C263.238 250.675 262.471 255.274 262.143 256.369V256.369ZM262.143 256.369V256.369ZM267.07 254.179C267.07 253.631 267.289 252.536 267.507 251.66C267.836 250.784 268.712 247.28 269.697 243.995C269.843 243.484 269.953 242.937 270.025 242.353C269.697 245.528 269.369 247.171 269.15 247.828C268.383 249.689 267.726 251.77 267.836 252.536V252.536C267.945 252.974 267.617 253.631 267.07 254.179ZM267.07 254.179V254.179ZM140.184 340.356C139.418 337.947 138.87 334.662 138.87 332.472C138.87 328.64 139.418 327.216 142.155 324.807C143.906 323.055 145.439 321.96 145.439 322.288V322.288C145.439 322.398 145.877 322.398 146.534 322.288M140.184 340.356V340.356ZM140.184 340.356C140.732 340.356 140.732 339.699 140.294 339.042C139.856 338.276 139.308 336.195 139.199 334.334C138.98 332.582 138.98 330.063 139.308 328.859C139.527 327.654 141.279 325.902 143.25 325.026C145.111 324.15 146.534 322.946 146.534 322.288M146.534 322.288V322.288ZM92.8895 443.287V443.287ZM92.8895 443.287C92.8895 443.944 93.6559 444.382 94.5317 444.382C94.5317 444.382 94.5682 444.382 94.6412 444.382C93.6559 443.835 92.999 443.397 92.8895 443.287ZM77.1246 422.592C77.891 423.468 78.9858 426.096 79.6426 428.505C79.8616 429.271 80.0806 430.038 80.409 430.804C80.0806 430.038 79.7521 429.271 79.5332 428.505C78.9858 426.096 77.891 423.468 77.1246 422.592ZM77.1246 422.592C76.7597 422.154 76.4678 421.898 76.2488 421.825C76.4678 421.898 76.7597 422.154 77.1246 422.592ZM70.9939 414.927C71.5777 415.219 71.9792 415.547 72.1981 415.912C72.636 416.788 73.4024 419.526 73.8403 421.935V421.935C74.0592 423.468 74.2782 424.344 74.4972 424.891C74.2782 424.453 73.9498 423.358 73.6213 421.387C73.0739 418.65 71.9792 415.803 70.9939 414.927ZM70.9939 414.927V414.927ZM54.7911 415.036C55.3385 414.27 53.6963 411.751 50.4119 408.466C53.5868 411.642 55.3385 414.27 54.7911 415.036ZM54.7911 415.036C54.6451 415.255 54.6086 415.438 54.6816 415.584C54.6086 415.511 54.6451 415.328 54.7911 415.036ZM49.6456 285.606C49.974 283.416 51.8351 277.941 54.0247 272.356C51.8351 277.612 49.974 283.306 49.6456 285.606ZM49.6456 285.606C49.5361 286.701 49.4266 288.343 49.5361 290.314M68.3664 203.48C69.2422 199.538 71.2128 193.734 72.636 190.668C75.154 185.193 75.373 183.66 75.373 166.797V148.729C79.2047 149.934 81.3943 150.262 82.708 150.372C84.1313 150.372 85.226 150.7 85.226 151.248C85.226 151.686 87.4156 152.014 90.1526 152.014C90.6635 152.014 91.1014 152.014 91.4663 152.014C91.1744 152.087 90.8459 152.124 90.481 152.124C87.963 152.562 85.664 152.452 85.3355 152.014C85.0071 151.576 82.5986 150.919 80.0806 150.481L75.373 149.824L75.4825 185.412L86.5398 173.367C94.2033 177.747 97.2687 178.623 101.1 178.623C105.151 178.623 107.012 179.17 108.216 180.703C108.435 180.995 108.654 181.251 108.873 181.47C108.8 181.835 108.837 182.054 108.983 182.127C108.618 181.835 108.253 181.506 107.888 181.141C105.917 178.951 104.713 178.513 101.648 179.061C98.8014 179.499 96.2833 178.951 92.1232 176.871L86.5398 174.024L81.0659 179.718C78.1099 182.893 74.3877 187.931 72.855 190.887C71.3223 193.953 69.2422 199.538 68.3664 203.48V203.48ZM68.3664 203.48C67.4905 207.422 66.5052 214.32 66.0673 218.81C66.0673 218.81 66.0673 218.846 66.0673 218.919C66.8337 212.787 67.7095 206.546 68.3664 203.48ZM272.434 198.224C272.106 197.786 270.354 196.691 268.602 195.705C267.617 195.158 266.522 194.172 265.427 193.077C265.865 193.369 266.34 193.661 266.851 193.953C268.712 195.048 271.668 195.924 273.529 195.924C276.047 195.924 277.361 195.048 279.003 192.311C280.207 190.34 281.083 187.821 280.754 186.617C280.535 185.412 280.207 183.66 279.988 182.784C279.769 182.017 278.674 180.265 277.689 178.951C276.594 177.747 275.39 176.323 274.952 175.885C274.405 175.447 272.325 173.695 270.244 171.943C268.164 170.191 265.427 168.877 264.333 168.877V168.877C263.128 168.877 262.253 169.315 262.362 169.753C262.471 170.301 260.61 170.629 258.311 170.52C255.903 170.41 253.604 170.629 253.166 171.067C253.093 171.14 253.056 171.213 253.056 171.286L251.086 169.425C257.873 170.191 261.267 169.753 263.128 168.768C266.084 167.344 266.632 167.454 268.602 169.425C269.588 170.301 271.011 171.177 272.215 171.396C272.069 171.469 271.96 171.615 271.887 171.834C271.558 172.381 272.215 173.476 273.2 174.243C274.295 175.009 276.485 177.199 278.127 179.17C279.988 181.36 281.192 183.988 281.192 186.069C281.192 187.821 280.426 190.778 279.55 192.639C278.565 194.501 276.813 196.143 275.171 196.472C273.857 196.691 272.981 197.238 272.434 198.224ZM272.434 198.224V198.224ZM284.258 216.729C284.258 216.62 284.258 216.729 284.258 216.729ZM284.258 216.729C284.404 216.875 284.586 217.313 284.805 218.043M283.601 215.744C283.528 215.671 283.491 215.634 283.491 215.634C283.491 215.561 283.528 215.598 283.601 215.744ZM283.601 215.744C283.747 215.89 283.966 216.182 284.258 216.62C283.966 216.182 283.747 215.89 283.601 215.744ZM175.984 330.501C176.057 330.355 176.093 330.209 176.093 330.063M292.25 378.025C292.25 379.12 292.25 380.251 292.25 381.419C292.25 382.149 292.25 382.916 292.25 383.719C292.359 380.762 292.578 378.463 292.906 378.244C292.578 378.353 292.359 378.244 292.25 378.025V378.025ZM294.33 416.46C296.081 430.476 296.41 433.432 295.315 434.637C295.753 434.637 296.191 434.965 296.629 435.622C297.505 436.827 297.614 436.279 297.067 433.432C296.629 431.352 296.3 428.833 296.3 427.957C296.191 427.081 295.315 419.197 294.22 410.437C293.454 404.195 292.687 397.078 292.359 391.822C292.687 400.034 293.344 408.466 294.33 416.46ZM281.74 442.959C280.097 442.74 276.047 441.973 267.179 440.221C267.544 440.367 268.018 440.477 268.602 440.55C270.463 440.988 272.872 441.535 274.076 441.645C275.28 441.864 277.579 442.302 279.331 442.63C280.973 442.959 283.601 443.616 285.352 443.944C285.571 443.944 285.79 443.981 286.009 444.054C284.367 443.506 282.834 443.068 281.74 442.959V442.959ZM292.25 377.149C292.469 376.711 292.797 376.492 293.235 376.492C293.308 376.492 293.381 376.492 293.454 376.492C293.016 376.163 292.578 374.192 292.359 371.564C292.359 373.316 292.323 375.178 292.25 377.149V377.149ZM138.104 320.427C138.396 320.646 138.688 320.792 138.98 320.865C138.761 319.989 138.761 317.58 139.199 314.952C139.199 314.879 139.199 314.769 139.199 314.623C138.98 316.156 138.688 317.908 138.323 319.879L137.666 318.018C137.776 318.565 137.666 319.003 137.447 319.222C137.301 319.441 137.119 319.514 136.9 319.441C137.265 319.733 137.666 320.062 138.104 320.427ZM142.812 307.834C143.104 308.564 143.396 309.258 143.687 309.915L143.031 307.506C142.264 305.097 141.498 303.345 141.388 303.454C141.279 303.454 141.169 304.111 140.841 305.425C141.279 303.892 141.607 304.44 142.812 307.834V307.834ZM145.22 311.995C145.658 311.995 148.942 312.214 152.555 312.433C156.168 312.652 159.671 312.981 160.438 313.2C161.095 313.419 162.299 314.514 163.065 315.718C163.503 316.375 163.722 316.813 163.722 317.142C163.941 316.923 164.123 316.74 164.269 316.594C165.364 315.499 165.255 315.171 163.722 315.171C162.408 315.171 161.861 314.295 161.861 311.886C161.861 308.71 161.97 308.71 163.941 310.572C163.941 310.572 163.977 310.608 164.05 310.681C164.05 310.535 164.05 310.389 164.05 310.243C164.05 309.367 163.613 308.601 162.956 308.601C162.408 308.601 162.08 308.163 162.408 307.506C162.737 306.958 162.408 306.411 161.642 306.411C160.985 306.411 160.766 306.082 161.095 305.644C161.532 305.097 161.204 304.111 160.547 303.235C159.781 302.359 159.014 301.155 158.905 300.498C158.795 299.841 158.467 298.308 158.358 297.103C158.139 296.008 157.81 294.913 157.482 294.475C157.81 295.132 158.248 296.337 158.358 297.651C158.467 299.622 158.358 300.388 157.591 300.498C158.139 300.936 158.686 301.593 159.124 302.359C160 303.673 161.095 306.739 161.423 309.148C161.97 312.214 161.861 313.2 160.985 312.433C160.328 311.886 158.795 308.71 157.591 305.644C156.715 303.235 156.168 301.264 156.168 300.279C155.73 300.206 155.329 300.06 154.964 299.841C155.511 301.812 156.496 304.768 157.591 307.177C160.109 312.652 160.109 312.871 158.029 312.214C156.825 311.886 153.431 311.667 145.001 311.886C145.074 311.959 145.147 311.995 145.22 311.995V311.995ZM165.583 313.309C165.364 313.747 166.24 315.39 167.554 317.142C167.919 317.58 168.284 318.018 168.649 318.456C168.43 317.689 168.101 316.813 167.663 316.047C166.897 314.623 166.021 313.419 165.474 312.652C165.547 312.944 165.583 313.163 165.583 313.309ZM171.167 320.865C171.313 321.011 171.422 321.12 171.495 321.193C171.714 320.974 171.495 320.865 171.057 320.865C171.13 320.865 171.167 320.865 171.167 320.865ZM173.903 331.596C173.903 332.253 174.451 332.691 174.998 332.691C175.071 332.691 175.108 332.691 175.108 332.691C174.962 332.326 174.779 331.998 174.56 331.706C174.414 331.414 174.268 331.195 174.122 331.049C173.976 331.195 173.903 331.377 173.903 331.596ZM173.356 338.495C172.699 338.714 172.371 339.152 172.261 339.59C172.48 339.444 172.772 339.225 173.137 338.933C173.904 338.385 174.67 337.4 175.108 336.414C174.67 337.4 174.013 338.166 173.356 338.495V338.495ZM166.787 344.736C166.86 344.809 166.897 344.882 166.897 344.955C167.116 344.408 167.444 343.97 167.992 343.86C167.116 343.97 166.568 344.298 166.787 344.736ZM149.38 351.087C149.599 350.54 149.49 349.116 149.161 347.802C148.505 345.503 148.395 345.393 147.191 347.255C146.205 348.788 145.439 348.897 143.031 348.021C141.279 347.474 139.418 345.831 138.651 344.517C137.995 343.094 137.338 341.232 137.228 340.356C137.119 339.48 136.681 336.524 136.243 333.786C135.696 331.049 135.258 326.34 135.148 323.274C135.148 320.646 135.258 318.675 135.477 318.346C134.929 317.361 134.491 315.609 134.491 314.404C134.491 312.981 134.053 311.886 133.397 311.886C132.849 311.886 132.302 311.119 132.302 310.243C132.302 309.367 132.849 308.601 133.397 308.601C134.053 308.601 134.82 309.696 135.148 311.119C135.477 312.324 136.133 314.295 136.9 315.609L134.382 308.491C132.083 302.25 129.784 294.475 129.127 291.409C128.47 288.234 127.923 283.197 127.923 280.131C127.923 274.874 127.923 274.655 133.834 275.093L131.316 274.984C128.142 274.655 127.923 274.874 127.923 278.817C127.923 281.007 127.156 283.854 126.28 285.058C125.843 285.606 125.514 285.934 125.295 285.934C125.368 286.08 125.441 286.08 125.514 285.934C125.843 285.496 126.171 286.482 126.39 288.453C126.39 287.577 126.499 286.81 126.609 286.153C127.156 283.197 127.375 283.416 128.47 288.891C129.236 292.176 129.565 295.242 129.346 295.789C129.273 296.008 129.127 296.191 128.908 296.337C129.455 296.446 130.331 298.308 131.316 301.264C132.411 304.659 133.068 308.163 132.63 308.929C132.192 309.696 131.097 307.725 130.003 304.221C128.908 300.936 128.251 297.432 128.579 296.556C128.579 296.556 128.579 296.519 128.579 296.446C128.433 296.519 128.324 296.556 128.251 296.556C127.704 296.556 127.047 295.023 126.718 293.052C126.645 292.906 126.609 292.796 126.609 292.723C126.718 294.913 126.937 296.994 127.156 297.651C127.375 298.527 128.142 300.826 128.908 302.578C129.674 304.44 130.331 306.849 130.441 308.053C130.55 309.258 131.207 310.572 131.754 311.01C132.411 311.448 132.959 312.324 133.178 312.981C133.287 313.528 133.506 314.404 133.506 314.952C133.615 315.39 133.506 317.908 133.506 320.646C133.397 323.384 133.834 326.121 134.382 326.669C134.929 327.326 135.586 330.282 135.915 333.239C136.243 336.305 136.79 339.48 137.009 340.356C137.228 341.232 137.995 343.313 138.761 345.065C139.418 346.707 140.951 348.569 142.155 349.116C143.359 349.773 145.111 349.992 145.987 349.664C146.862 349.335 147.629 348.459 147.629 347.802C147.738 347.036 148.176 347.255 148.723 348.35C149.599 349.664 149.38 350.649 147.957 351.854C146.862 352.73 143.578 354.701 140.513 356.234C139.783 356.599 139.089 356.964 138.433 357.329C139.965 356.562 141.169 356.015 141.936 355.577C143.906 354.372 145.22 354.044 144.782 354.92C144.454 355.577 145.001 355.248 145.987 354.044C146.972 352.839 148.833 351.744 150.366 351.635C149.599 351.525 149.271 351.306 149.38 351.087V351.087ZM139.856 252.646C139.637 244.214 139.637 244.214 143.14 242.024C145.111 240.82 147.519 240.053 148.505 240.382C150.037 240.71 150.256 241.805 149.928 245.419C149.709 247.937 150.147 251.66 151.023 253.631C151.168 253.923 151.278 254.179 151.351 254.398C151.351 254.252 151.387 254.069 151.46 253.85C151.789 253.303 151.679 252.755 151.241 252.755C150.694 252.755 150.366 250.894 150.256 248.704C150.147 246.404 150.694 243.886 151.351 243.119C152.227 242.024 152.117 241.367 150.913 240.601C150.037 240.053 148.067 239.725 146.534 239.834C145.001 240.053 142.812 241.148 141.607 242.243C139.746 244.105 139.418 245.747 139.527 252.646C139.527 257.135 139.199 261.515 138.761 262.282C139.527 261.406 139.965 257.902 139.856 252.646ZM152.008 257.683C151.789 257.902 150.913 257.902 149.818 257.573C149.964 257.646 150.147 257.792 150.366 258.011C151.679 259.106 152.117 258.997 152.774 257.464C153.212 256.259 152.993 255.383 152.227 255.274C151.862 255.128 151.606 254.945 151.46 254.726C152.008 256.259 152.227 257.464 152.008 257.683ZM148.505 257.135C146.096 256.259 145.111 256.369 144.125 257.792C143.25 258.887 143.031 259.873 143.578 261.515C143.505 261.296 143.505 261.041 143.578 260.749C143.687 259.654 144.344 258.23 144.892 257.573C145.768 256.588 146.315 256.588 147.41 257.573C148.176 258.23 148.833 258.34 148.723 257.683C148.723 257.464 148.796 257.354 148.942 257.354C148.796 257.281 148.65 257.208 148.505 257.135V257.135ZM143.797 262.391C144.235 263.377 145.001 264.472 145.987 265.348C145.987 265.275 145.987 265.202 145.987 265.129C145.658 263.705 145.001 262.61 144.344 262.61C144.125 262.61 143.943 262.501 143.797 262.282C143.797 262.355 143.797 262.391 143.797 262.391V262.391ZM147.957 266.771C150.475 267.866 150.913 268.852 151.023 272.794C151.132 275.312 151.132 277.722 151.023 278.269C151.023 278.488 151.241 279.145 151.57 279.802C151.935 279.656 152.373 279.583 152.884 279.583C152.957 279.583 153.03 279.583 153.103 279.583C152.884 279.437 152.701 279.255 152.555 279.036C152.227 278.488 152.555 277.941 153.103 277.941C153.395 277.941 153.614 277.868 153.759 277.722C153.686 277.722 153.468 277.685 153.103 277.612C152.008 277.393 151.351 275.641 151.241 272.684C151.023 268.961 151.241 268.195 152.555 268.633C153.431 268.961 154.197 268.742 154.197 268.085C154.197 267.538 154.416 266.99 154.526 266.99C154.745 266.99 154.854 268.633 154.854 270.713C154.745 273.122 154.307 274.217 153.431 273.998C152.774 273.779 152.227 274.108 152.117 274.765C152.227 274.108 152.884 273.889 153.65 274.108C154.854 274.546 155.292 273.889 155.183 272.246C155.073 270.823 155.073 268.633 155.183 267.319C155.183 265.895 155.84 265.019 156.387 265.348C157.044 265.676 158.248 264.472 159.124 262.61C159.781 261.296 160.219 260.201 160.219 259.654C160.073 260.165 159.89 260.42 159.671 260.42C159.124 260.42 158.795 260.749 158.905 261.296C159.124 261.734 158.139 263.158 156.715 264.581C154.854 266.333 154.197 266.552 154.197 265.348C154.197 264.472 153.759 263.705 153.103 263.705C152.555 263.705 151.789 264.691 151.46 265.895C151.023 267.428 150.585 267.757 149.599 266.99C148.942 266.552 148.176 266.333 147.629 266.552C147.702 266.625 147.811 266.698 147.957 266.771V266.771ZM160.438 258.011C161.204 257.135 161.532 254.507 161.204 251.66C160.876 248.923 160.876 246.076 161.313 245.419C161.751 244.324 162.518 244.324 164.598 245.638C166.131 246.514 168.539 247.28 170.072 247.28C171.604 247.28 173.904 246.733 175.327 246.076C176.64 245.419 179.377 243.338 181.348 241.367C182.771 240.053 184.194 238.082 185.18 236.33C185.107 236.33 184.997 236.33 184.851 236.33C184.304 236.33 183.866 236.659 183.976 237.206C184.194 237.644 182.662 239.506 180.801 241.258C178.83 243.119 176.969 244.324 176.64 243.995C176.312 243.667 176.093 244.105 176.093 244.871C176.093 245.528 175.655 245.966 174.998 245.638C174.451 245.309 173.903 245.419 173.903 245.966C173.903 246.404 172.261 246.733 170.4 246.733C167.882 246.733 166.021 245.857 162.189 241.258L160.876 243.776C160.219 245.2 159.89 249.032 160.219 253.303C160.328 255.274 160.438 256.916 160.328 258.121C160.401 258.048 160.438 258.011 160.438 258.011V258.011ZM185.946 234.469C186.275 233.264 186.494 232.279 186.494 231.293C186.421 231.658 186.238 232.06 185.946 232.498C185.399 233.374 185.07 234.688 185.399 235.235C185.472 235.381 185.508 235.491 185.508 235.564C185.727 235.126 185.873 234.761 185.946 234.469ZM186.056 228.993C185.289 227.57 185.508 226.475 186.822 224.942C187.917 223.737 188.683 221.328 188.574 218.919C188.464 217.496 187.807 214.539 186.931 211.692C186.931 211.911 186.968 212.094 187.041 212.24C187.15 212.568 187.369 215.306 187.369 218.262C187.588 222.533 187.15 224.175 185.399 225.599C184.194 226.694 183.757 227.57 184.632 227.57C185.289 227.57 185.727 228.117 185.399 228.665C185.07 229.322 185.399 229.979 185.946 230.307C186.238 230.453 186.421 230.673 186.494 230.965C186.494 230.161 186.348 229.504 186.056 228.993V228.993ZM185.508 207.86C183.975 203.918 182.662 200.085 182.662 199.428C182.662 198.662 183.319 198.005 184.085 198.005C184.742 198.005 186.931 197.238 188.683 196.253C191.858 194.61 192.077 194.72 194.485 197.348C194.923 198.005 195.471 198.552 195.799 199.1C195.799 198.99 196.237 199.209 196.894 199.538C197.77 199.976 197.222 199.1 195.58 197.567C193.829 196.034 192.843 194.72 193.391 194.72C193.829 194.829 193.391 194.063 192.515 193.077C190.982 191.544 190.763 191.544 189.23 193.953C188.355 195.377 186.931 196.362 186.275 196.253C185.508 196.034 184.851 196.362 184.851 196.91C184.851 197.567 184.304 197.895 183.647 197.786C182.99 197.567 182.224 198.552 182.005 199.976C181.786 201.29 182.114 202.604 182.662 202.932C183.319 203.261 183.538 204.027 183.209 204.575C182.881 205.232 183.209 205.67 183.757 205.67C184.413 205.67 184.632 206.217 184.304 206.765C183.976 207.422 184.304 207.86 184.851 207.86C185.508 207.86 185.727 208.407 185.399 208.955C185.07 209.612 185.399 210.05 185.946 210.05C186.092 210.05 186.238 210.086 186.384 210.159C186.092 209.356 185.8 208.59 185.508 207.86ZM196.894 201.29C196.894 201.947 196.237 202.385 195.58 202.385C194.814 202.494 192.843 201.509 191.201 200.195C190.763 199.976 190.435 199.757 190.216 199.538C190.435 199.757 190.69 200.085 190.982 200.523C192.624 202.275 194.376 203.261 195.58 203.042C196.566 202.713 197.66 202.494 197.989 202.494C198.317 202.494 197.77 201.618 196.894 200.633C196.675 200.268 196.456 200.012 196.237 199.866C196.675 200.523 196.894 200.961 196.894 201.29V201.29ZM188.136 200.195C188.136 201.399 189.887 203.918 191.967 205.67C194.522 207.86 197.003 208.955 199.412 208.955C201.273 208.955 204.557 207.969 206.528 206.765C207.513 206.108 208.389 205.451 209.046 204.794C208.389 205.232 207.513 205.67 206.528 206.108C204.557 206.984 201.383 207.86 199.412 208.079C197.441 208.298 195.799 208.079 195.799 207.641C195.799 207.093 194.376 205.998 192.515 205.122C190.106 203.918 189.449 203.042 189.997 201.618C190.544 200.414 190.435 199.976 189.778 200.414C189.23 200.742 188.683 200.304 188.574 199.319C188.574 198.954 188.61 198.698 188.683 198.552C188.136 198.443 188.136 198.99 188.136 200.195ZM210.031 203.48C210.031 202.932 210.141 201.947 210.36 201.399C210.469 200.852 211.017 199.976 211.455 199.428C211.783 199.1 212.111 197.786 212.221 196.143C212.002 197.238 211.564 198.005 211.126 198.005C210.579 198.005 210.141 198.881 210.36 199.976C210.579 200.961 209.922 202.494 208.937 203.261C208.061 204.137 207.951 204.465 208.718 204.137C209.265 203.808 209.703 203.808 209.922 203.808C209.995 203.662 210.031 203.553 210.031 203.48V203.48ZM212.221 194.172C212.221 190.559 212.659 189.573 214.958 188.478C216.491 187.712 218.242 185.96 218.899 184.645C219.884 182.565 220.541 182.236 223.059 183.112C223.205 183.112 223.424 183.149 223.716 183.222C223.132 183.003 222.585 182.638 222.074 182.127C221.198 181.141 220.103 180.375 219.665 180.484C219.118 180.484 219.009 181.251 219.337 182.127C219.665 183.003 219.009 184.755 218.023 185.959C216.928 187.164 215.724 187.712 215.177 187.274C214.739 186.836 214.41 187.164 214.41 187.931C214.41 188.588 214.082 189.026 213.644 188.807C213.097 188.478 212.111 189.245 211.455 190.449C210.579 191.654 210.469 192.53 211.126 192.53C211.674 192.53 212.221 193.625 212.221 195.048C212.221 194.756 212.221 194.464 212.221 194.172V194.172ZM228.971 182.784C230.613 182.127 231.927 181.141 231.927 180.484C231.927 179.937 230.942 179.389 229.737 179.389C228.533 179.389 226.234 178.294 224.701 176.98C222.95 175.557 222.074 173.914 222.512 173.148C222.84 172.381 224.154 171.724 225.358 171.724C226.563 171.724 228.424 170.739 229.409 169.534C230.504 168.33 232.036 167.563 233.022 167.892C233.898 168.33 238.058 169.206 242.218 169.863C242.583 169.936 242.984 170.009 243.422 170.082C243.495 170.009 243.605 169.936 243.751 169.863C241.014 169.425 237.948 168.768 236.854 168.33C235.54 167.673 236.525 167.673 239.591 168.111C241.452 168.439 243.641 168.658 245.393 168.768C246.269 168.001 245.283 167.782 241.233 167.235C237.839 166.797 235.43 167.016 234.992 167.782C234.445 168.549 234.117 168.22 234.117 167.125C234.117 165.483 233.788 165.373 231.708 166.359C230.613 166.906 230.066 167.125 229.847 167.125C229.701 168.147 229.336 168.95 228.752 169.534C227.767 170.52 225.906 171.177 224.592 170.958C223.059 170.739 221.855 171.286 221.527 172.272C221.198 173.148 221.855 174.79 222.95 175.885C224.045 176.871 226.234 178.513 227.876 179.389C229.518 180.265 230.504 181.36 230.066 181.798C229.628 182.236 227.986 182.893 226.453 183.222C226.088 183.295 225.723 183.368 225.358 183.441C226.563 183.441 227.876 183.222 228.971 182.784ZM230.613 166.14C231.38 165.264 231.927 164.278 231.927 163.84C231.927 163.293 231.489 163.183 230.832 163.512C230.175 163.84 229.956 162.964 230.285 161.322C230.613 159.789 230.394 158.584 229.737 158.584C229.664 158.584 229.628 158.584 229.628 158.584C229.737 160.117 229.847 161.979 229.956 163.512C230.102 164.826 230.102 165.957 229.956 166.906C230.029 166.76 230.248 166.505 230.613 166.14ZM229.847 155.08C230.504 153.109 231.051 150.591 230.942 149.605C230.942 148.51 231.38 147.853 231.927 148.182C232.584 148.51 233.022 147.415 233.022 145.773C232.912 144.021 233.679 142.05 234.664 141.393C235.54 140.626 236.087 139.531 235.759 138.874C235.43 138.326 235.759 137.779 236.306 137.779C236.963 137.779 237.401 136.136 237.291 134.275C237.182 132.304 236.963 129.785 236.744 128.8C236.525 127.595 235.759 127.157 234.992 127.595C234.846 127.668 234.737 127.705 234.664 127.705C234.81 127.924 235.065 128.106 235.43 128.252C236.087 128.362 236.635 130.223 236.525 132.632C236.416 134.822 235.759 137.779 235.102 139.202C234.336 140.516 233.46 141.831 233.131 142.159C232.803 142.488 231.708 145.225 230.942 148.182C230.066 151.138 229.409 154.752 229.518 156.285C229.591 155.92 229.701 155.518 229.847 155.08V155.08ZM234.992 126.5C235.649 125.515 236.087 124.201 235.759 123.544C235.43 122.996 235.43 121.463 235.759 120.259C236.197 118.507 237.182 118.069 240.685 118.069C243.094 118.069 246.816 117.302 248.896 116.426C251.086 115.441 253.056 113.798 253.385 112.375C253.823 110.842 253.275 108.761 252.071 106.79C251.706 106.279 251.378 105.878 251.086 105.586C250.538 105.476 249.881 105.148 249.334 104.6C249.042 104.673 248.714 104.856 248.349 105.148C247.838 105.586 247.509 105.878 247.363 106.024C247.29 106.462 247.181 106.936 247.035 107.447C246.597 109.09 246.488 110.404 247.035 110.404C248.787 107.338 248.896 107.228 249.991 109.309C250.538 110.513 250.867 111.718 250.538 112.046C250.21 112.265 248.896 112.813 247.582 113.141C246.488 113.36 245.831 113.47 245.721 113.36C245.612 113.798 246.05 114.017 247.035 114.455C248.239 114.893 249.334 114.346 250.21 113.032C251.305 111.389 251.195 110.404 249.991 107.995C249.115 106.243 248.896 104.929 249.444 104.929C250.1 104.929 251.305 106.462 252.181 108.214C253.494 110.842 253.604 111.827 252.509 113.141C251.743 114.127 248.896 115.55 246.159 116.317C243.422 117.083 240.028 117.631 238.496 117.521C236.087 117.193 235.759 117.631 235.54 121.463C235.321 123.763 234.992 126.281 234.664 126.829C234.664 126.829 234.664 126.865 234.664 126.938C234.737 126.792 234.846 126.646 234.992 126.5ZM248.13 104.71C248.349 104.272 248.531 103.943 248.677 103.724C248.349 103.067 248.349 102.629 248.677 102.739C248.677 102.739 248.714 102.702 248.787 102.629C248.641 102.556 248.422 102.447 248.13 102.301C247.145 102.082 247.145 101.644 248.13 100.658C247.838 100.658 247.546 100.987 247.254 101.644C247.108 101.936 246.999 102.155 246.926 102.301C247.254 103.286 247.473 104.491 247.363 105.695C247.509 105.476 247.765 105.148 248.13 104.71V104.71ZM281.521 176.652C280.535 176.98 280.426 177.637 281.192 178.623C281.849 179.28 282.506 182.893 282.615 186.507C282.944 192.42 282.615 193.406 279.988 196.143C278.346 197.786 275.937 199.1 274.733 199.1C274.441 199.1 274.186 199.136 273.967 199.209C274.186 199.282 274.405 199.392 274.624 199.538C274.843 199.611 274.988 199.684 275.061 199.757L276.594 199.209C279.222 198.333 280.645 196.8 282.397 192.858C284.367 188.369 284.586 186.945 283.491 183.003C282.834 180.375 282.287 178.075 282.287 177.747C282.287 177.418 282.834 177.199 283.382 177.199C284.039 177.199 287.651 180.375 291.593 184.317C295.534 188.259 298.709 191.763 298.709 192.311C298.818 192.749 300.132 194.829 301.665 196.91C303.307 198.99 306.263 204.465 308.343 208.955C310.314 213.444 313.16 221.657 314.583 227.022C315.678 231.403 316.882 236.549 317.43 239.615C317.211 237.973 316.882 236.44 316.663 235.235C315.678 230.745 313.598 222.861 311.956 217.715C310.314 212.568 307.248 205.232 305.059 201.29C302.869 197.348 298.052 190.778 294.33 186.507C290.607 182.346 287.104 178.842 286.447 178.842C285.9 178.842 284.696 177.856 283.82 176.652C283.272 175.885 282.834 175.009 282.506 174.133C282.506 175.338 282.068 176.323 281.521 176.652V176.652ZM319.51 255.493C320.057 260.968 320.823 266.881 321.042 268.633C321.371 270.494 322.028 274.108 322.685 276.846C323.232 279.583 324.546 283.854 325.531 286.482C326.407 289 327.064 291.081 326.954 291.081C326.735 291.19 324.436 288.015 321.699 284.292C320.933 283.197 320.167 282.102 319.4 280.897C319.473 281.189 319.51 281.481 319.51 281.773C319.51 282.649 319.948 283.525 320.386 283.744C320.933 283.854 322.904 286.153 324.874 288.891C326.735 291.628 328.377 293.599 328.377 293.271C328.377 292.942 327.611 291.3 326.735 289.438C325.859 287.686 324.327 283.197 323.341 279.583C322.466 275.97 321.371 270.604 321.152 267.538C320.823 264.581 320.057 257.902 319.4 252.755C319.072 249.58 318.415 245.2 317.758 241.367C318.086 243.886 318.853 250.127 319.51 255.493ZM314.912 274.108C313.817 272.356 311.737 268.523 310.204 265.676C308.671 262.72 307.248 260.53 306.92 260.749C306.92 260.749 306.92 260.785 306.92 260.858C307.066 261.15 307.358 261.552 307.796 262.063C308.562 263.267 310.532 266.443 311.956 269.18C313.269 271.589 314.474 273.779 315.021 274.436C315.021 274.29 314.985 274.181 314.912 274.108ZM309.219 268.633C309.985 270.713 310.861 272.794 311.518 274.436C311.189 273.451 310.314 271.151 309.438 269.18C309.292 268.815 309.146 268.414 309 267.976C309.073 268.195 309.146 268.414 309.219 268.633V268.633ZM313.817 280.021C313.744 280.094 313.78 280.277 313.926 280.569C314.729 280.934 314.948 280.605 314.583 279.583C314.364 278.817 313.817 278.269 313.488 278.379C313.707 278.926 313.926 279.583 313.817 280.021V280.021ZM297.614 267.866C297.614 266.771 295.205 256.588 292.14 244.433C292.469 246.185 292.578 247.28 292.469 247.28C291.921 247.28 289.951 240.71 287.87 232.826C287.104 229.65 286.338 226.694 285.681 224.066C286.776 228.446 288.308 234.25 289.841 240.491C292.359 250.237 294.439 259.763 295.206 264.253L295.096 263.705C294.768 260.42 294.111 256.697 293.563 255.493C293.016 254.179 293.125 253.522 293.782 253.96C294.439 254.398 295.534 258.011 296.3 262.172C297.176 266.224 297.505 268.195 297.176 269.399C297.505 268.852 297.614 268.304 297.614 267.866V267.866ZM237.51 299.293C237.437 299.074 237.328 298.855 237.182 298.636C237.182 298.709 237.109 298.746 236.963 298.746C236.306 298.636 236.635 299.403 237.51 300.388C237.729 300.607 237.912 300.826 238.058 301.045C237.839 300.315 237.656 299.731 237.51 299.293ZM235.649 293.271C235.43 291.738 235.868 289.876 236.635 289.11C237.291 288.562 238.386 288.124 239.591 288.234C237.51 287.796 236.635 288.343 235.54 290.752C234.336 293.271 234.336 293.928 235.54 294.585C235.759 294.731 235.905 294.84 235.978 294.913C235.832 294.256 235.722 293.709 235.649 293.271ZM246.269 285.277C248.02 283.306 249.553 281.335 249.553 280.897C249.553 280.459 248.787 278.598 247.911 276.846C246.926 274.874 245.064 273.232 243.203 272.794C242.984 272.721 242.729 272.648 242.437 272.575C242.948 272.867 243.568 273.305 244.298 273.889C246.707 275.531 248.02 277.393 248.239 279.583C248.458 281.992 247.692 283.635 245.502 285.825C243.641 287.577 242.109 288.343 240.466 288.343C242.327 288.672 243.86 287.905 246.269 285.277ZM238.605 272.356C237.729 272.575 236.306 273.451 235.649 274.436C234.445 276.189 234.226 276.079 232.365 274.327C231.708 273.743 231.343 273.268 231.27 272.903C231.124 272.903 231.015 272.94 230.942 273.013C229.737 273.341 228.752 273.998 228.752 274.655C228.752 275.203 229.737 275.531 230.942 275.203C232.146 274.874 233.131 275.093 233.131 275.75C233.131 276.298 234.007 277.174 234.992 277.503C236.416 277.941 236.744 277.722 236.306 276.627C235.868 275.751 236.635 274.436 238.167 273.232C238.715 272.794 239.262 272.465 239.7 272.246C239.262 272.246 238.897 272.283 238.605 272.356V272.356ZM246.269 253.85C245.064 252.646 243.094 251.66 241.89 251.66C240.685 251.66 238.934 252.865 238.058 254.398C237.182 255.931 235.759 257.135 234.992 257.026C234.664 257.026 234.117 257.245 233.569 257.573C233.715 257.5 233.825 257.5 233.898 257.573C234.336 257.792 235.759 257.354 236.963 256.478C238.167 255.602 238.715 254.945 238.277 254.945C237.839 254.945 238.058 254.288 238.824 253.412C239.591 252.646 241.014 252.098 241.999 252.098C242.984 252.098 244.845 253.193 246.159 254.398C247.035 255.274 247.911 256.588 248.239 257.792C247.911 256.369 247.144 254.726 246.269 253.85ZM232.036 258.778C231.161 259.763 229.847 260.53 229.3 260.42C228.643 260.42 227.329 259.106 226.344 257.354C225.358 255.712 224.811 253.193 225.139 251.66C225.468 250.127 225.139 247.828 224.482 246.404C223.497 244.543 223.607 244.105 224.592 244.543C225.249 244.762 226.125 245.857 226.672 247.061C226.782 246.623 226.672 245.857 226.672 245.309C226.563 244.543 226.015 244.214 225.468 244.543C224.811 244.871 224.264 244.433 224.264 243.667C224.154 242.572 224.045 242.572 223.716 243.667C223.497 244.433 222.621 244.762 221.855 244.433C221.089 244.105 221.527 244.762 222.84 245.857C224.482 247.28 225.03 248.923 224.92 252.208C224.811 254.617 225.249 256.916 225.906 257.354C226.563 257.792 227.11 258.668 227.11 259.435C227.11 260.201 227.986 260.858 228.971 261.077C230.066 261.296 231.38 260.53 232.036 259.325C232.365 258.668 232.693 258.23 233.022 257.902C232.657 258.121 232.328 258.413 232.036 258.778V258.778ZM230.942 251.879C233.241 252.536 234.445 251.77 238.605 247.39C241.342 244.543 244.845 241.915 246.488 241.477C248.13 241.039 250.319 239.944 251.195 239.068C252.29 237.973 252.655 236.148 252.29 233.593C251.962 231.074 250.538 228.774 248.458 227.022C246.269 225.27 243.751 224.285 241.342 224.285C239.262 224.285 237.182 224.832 236.744 225.599C236.306 226.365 235.868 228.336 235.649 229.979C235.43 231.403 234.883 233.483 233.46 236.659C233.679 236.44 233.934 236.33 234.226 236.33C234.773 236.33 235.102 235.783 234.773 235.235C234.445 234.578 234.555 234.14 234.992 234.14C235.43 234.14 235.978 232.498 236.087 230.526C236.306 228.555 236.963 226.365 237.729 225.489C238.605 224.613 240.466 224.285 242.984 224.723C245.064 225.051 247.801 226.475 249.115 227.789C250.429 229.212 251.633 232.06 251.852 234.25C252.181 237.206 251.743 238.63 250.319 239.506C249.334 240.163 247.254 240.71 245.721 240.71C244.079 240.71 242.656 241.477 242.218 242.572C241.78 243.667 239.7 246.185 237.51 248.156C234.773 250.675 232.912 251.551 230.942 251.222C229.409 251.003 228.314 250.237 228.424 249.58C228.643 248.923 228.205 248.375 227.657 248.375C227.511 248.375 227.365 248.339 227.219 248.266C227.876 249.908 229.518 251.441 230.942 251.879V251.879ZM229.518 235.345C228.643 234.25 227.986 233.483 227.548 232.717C227.621 232.79 227.657 232.899 227.657 233.045C227.657 233.593 228.862 235.345 230.394 236.878C231.27 237.754 231.927 238.301 232.365 238.52L229.518 235.345ZM227.219 227.898C227.767 224.504 227.548 223.299 225.577 221.328C224.154 219.795 221.964 218.81 219.994 218.81C219.775 218.81 219.556 218.81 219.337 218.81C220.541 218.919 222.183 219.357 223.278 219.905C224.482 220.562 225.906 222.095 226.344 223.518C226.891 224.832 226.891 227.241 226.344 228.993C225.796 230.855 225.796 231.95 226.563 231.95C226.891 231.95 227.219 232.169 227.438 232.498C226.891 231.184 226.891 229.979 227.219 227.898V227.898ZM214.192 220.014C212.878 220.781 211.564 221.328 211.455 221.438C211.236 221.547 210.907 223.299 210.469 225.38C210.141 227.789 210.579 230.526 211.674 232.826C212.111 233.593 212.549 234.469 212.987 235.016C212.914 234.87 212.878 234.688 212.878 234.469C212.878 233.812 212.44 232.826 212.002 232.279C211.564 231.841 211.126 229.76 211.126 227.898C211.236 225.599 212.111 223.299 213.863 221.547C214.958 220.452 216.6 219.467 217.804 219.029C216.381 219.248 215.067 219.576 214.192 220.014V220.014ZM214.52 236.33C215.067 236.33 216.491 237.644 219.665 242.353H216.71C215.615 242.353 214.192 242.791 212.987 243.448C213.352 243.375 213.681 243.375 213.973 243.448C214.848 243.776 215.834 243.557 216.162 242.9C216.491 242.243 217.257 242.353 218.352 243.229C219.665 244.324 219.994 244.324 219.994 243.229C219.994 242.462 220.541 242.134 221.308 242.462C222.074 242.9 220.979 241.477 218.899 239.396C216.71 237.316 214.52 235.673 213.973 235.673C213.754 235.673 213.571 235.637 213.425 235.564C213.863 236.002 214.192 236.33 214.52 236.33ZM208.937 250.346C208.937 252.208 209.703 254.507 210.579 255.274C211.345 255.931 213.097 257.464 214.41 258.559C215.615 259.544 216.71 260.968 216.71 261.515C216.71 262.172 215.177 263.158 213.425 263.705C212.987 263.851 212.549 264.07 212.111 264.362C212.184 264.362 212.221 264.435 212.221 264.581C212.221 265.019 212.878 264.8 213.644 264.034C214.739 262.939 215.286 262.939 216.381 264.034C217.476 265.129 217.695 264.91 217.257 263.158C217.038 261.953 216.819 260.858 216.71 260.749C216.71 260.53 216.6 259.982 216.381 259.325C216.272 258.778 215.834 258.34 215.615 258.449C215.286 258.559 213.754 257.464 212.221 256.04C209.922 253.741 209.593 252.755 210.36 249.799C210.798 247.828 210.798 246.185 210.36 246.295C210.214 246.295 210.141 246.149 210.141 245.857C209.374 247.171 208.937 248.704 208.937 250.346V250.346ZM209.156 267.319C208.608 268.633 208.389 270.932 208.718 272.465C208.827 273.122 209.156 273.998 209.484 274.765C209.484 274.692 209.52 274.655 209.593 274.655C209.922 273.998 210.907 274.217 212.002 275.203C213.097 276.079 214.301 276.846 214.739 276.846C215.177 276.846 215.286 275.641 215.067 274.108C214.739 272.356 215.067 270.932 216.162 270.275C217.038 269.728 218.461 269.399 219.446 269.728C220.322 270.056 221.089 269.837 221.089 269.18C221.089 268.633 220.103 267.647 218.899 266.99C217.695 266.443 215.834 266.005 214.739 266.224C213.754 266.333 212.221 266.881 211.455 267.319C210.688 267.757 209.922 267.757 209.703 267.319C209.484 266.99 209.703 266.443 210.031 266.005C209.593 266.443 209.301 266.881 209.156 267.319V267.319ZM211.236 277.174C212.44 278.16 214.082 279.036 215.067 279.036C215.943 279.036 216.71 279.364 216.71 279.912C216.71 280.35 215.505 284.401 213.973 288.891C212.987 291.519 212.221 294.585 211.674 296.994C211.819 296.702 212.038 296.556 212.33 296.556C212.878 296.556 213.097 295.57 212.878 294.366C212.549 293.161 212.768 292.176 213.425 292.176C213.973 292.176 214.192 291.409 213.973 290.533C213.644 289.657 213.863 288.891 214.52 288.891C215.067 288.891 215.286 288.124 215.067 287.248C214.739 286.372 214.958 285.606 215.615 285.606C216.162 285.606 216.381 284.839 216.162 283.963C215.834 283.087 215.943 282.321 216.381 282.321C216.819 282.321 217.257 281.335 217.257 280.131C217.257 278.488 216.71 278.05 215.286 278.488C214.301 278.817 213.425 278.598 213.425 277.941C213.425 277.393 212.44 276.627 211.236 276.298C210.871 276.225 210.542 276.115 210.25 275.969C210.542 276.408 210.871 276.809 211.236 277.174V277.174ZM211.126 300.936C211.126 302.14 210.907 303.564 210.798 304.659C210.798 304.513 210.834 304.367 210.907 304.221C211.674 301.812 212.002 299.074 211.783 298.198C211.637 297.906 211.564 297.651 211.564 297.432C211.345 298.855 211.126 300.169 211.126 300.936ZM203.572 303.783C203.353 303.637 203.134 303.454 202.915 303.235C203.207 303.6 203.499 303.929 203.791 304.221C206.09 306.63 208.28 308.601 208.718 308.601C208.937 308.601 209.156 308.382 209.374 307.944C208.608 308.053 207.075 306.849 203.572 303.783V303.783ZM194.266 295.899C192.405 294.475 190.654 293.161 190.435 293.271C190.106 293.271 188.902 292.285 187.698 291.081C186.493 289.876 182.114 286.263 178.064 283.087C174.013 280.021 170.4 277.722 170.072 278.269C169.853 278.707 170.948 279.912 172.59 280.897C174.232 281.992 175.984 283.306 176.312 283.963C176.75 284.511 180.582 288.124 192.515 298.417L189.449 295.461C187.26 293.38 184.523 290.862 183.319 289.986C182.114 289.11 180.363 287.358 179.487 286.263C177.845 284.182 177.845 284.182 181.348 286.263C183.319 287.358 184.961 288.562 184.851 288.891C184.851 289.219 187.588 291.409 190.873 293.818C194.157 296.227 196.894 298.527 196.894 299.074C197.003 299.512 197.551 299.841 198.317 299.841C198.536 299.841 198.901 299.987 199.412 300.279C197.332 298.527 195.361 296.884 194.266 295.899ZM193.172 311.886C193.062 318.018 193.172 322.179 193.61 325.026C193.391 322.069 193.281 316.375 193.391 306.63L193.172 311.886ZM198.208 332.363C198.427 332.436 198.573 332.472 198.646 332.472L197.66 332.034C197.295 331.815 196.894 331.523 196.456 331.158C197.113 331.815 197.66 332.144 198.208 332.363V332.363ZM194.704 334.991C191.42 336.086 189.121 336.962 189.778 337.071C190.325 337.071 190.106 337.619 189.23 338.166C187.807 339.042 187.807 339.261 189.449 339.261C190.544 339.261 191.42 338.823 191.42 338.166C191.42 337.619 192.296 337.181 193.281 337.29C194.376 337.29 196.018 337.181 196.894 336.852C197.66 336.524 198.865 336.086 199.85 335.757C199.631 335.83 199.375 335.903 199.084 335.976C196.894 336.706 195.617 336.706 195.252 335.976C194.923 335.429 196.018 334.553 200.726 333.458L199.193 332.801C199.85 333.239 198.646 333.786 194.704 334.991V334.991ZM238.386 386.128C238.496 386.237 238.605 386.675 238.715 387.223C238.824 387.661 239.262 389.96 239.7 392.369C240.247 394.778 240.904 399.706 241.233 403.319C241.452 405.619 241.89 409.123 242.437 412.627C242.327 411.203 242.218 409.78 242.218 408.794C241.999 407.042 241.671 403.757 241.342 401.677C241.014 399.596 240.466 396.092 240.138 394.012C239.809 391.931 239.372 389.194 239.153 387.989C238.824 386.785 238.605 385.799 238.496 385.799C238.386 385.799 238.167 383.828 237.948 381.419C238.167 383.828 238.277 385.909 238.386 386.128V386.128ZM244.408 435.403C243.97 434.965 243.203 433.98 242.327 432.775C242.984 433.761 243.422 434.527 243.751 434.856C244.517 435.622 245.393 436.06 245.94 436.06C245.502 436.06 244.955 435.732 244.408 435.403ZM228.424 401.786C224.373 390.946 223.607 389.741 223.059 392.479C222.84 393.355 222.731 393.902 222.512 394.121C222.731 394.012 222.95 393.574 223.059 392.917C223.607 390.727 224.592 392.479 228.533 402.772C229.956 406.714 232.037 411.532 233.898 415.912C232.474 412.408 230.394 406.933 228.424 401.786ZM176.093 373.535C175.984 372.988 175.217 374.411 174.341 376.492C173.356 378.682 172.371 385.142 172.042 391.822C171.495 402.443 171.714 403.648 174.013 407.918C175.436 410.327 178.502 414.379 180.691 416.898C182.99 419.416 185.289 421.387 185.946 421.387C186.019 421.387 186.129 421.387 186.275 421.387C183.976 419.745 181.676 417.664 180.144 416.022C177.954 413.613 175.108 409.67 174.013 407.48C172.699 404.852 172.042 401.239 172.152 397.844C172.261 393.574 172.59 392.479 173.903 392.807C175.327 393.136 175.327 392.917 173.903 391.274C173.028 390.179 172.371 387.77 172.59 385.909C172.699 384.047 173.356 380.762 173.903 378.682C174.56 376.273 175.874 374.411 178.064 373.097C176.859 373.645 176.093 373.864 176.093 373.535V373.535ZM192.515 425.439C195.252 426.753 199.193 428.176 201.273 428.614C203.353 429.052 205.543 429.709 206.2 430.257C206.747 430.695 209.703 431.68 212.768 432.447C215.724 433.213 220.213 434.637 227 437.703H214.41C207.513 437.812 197.113 438.031 191.42 438.36C185.727 438.688 178.939 439.455 176.312 440.221C173.685 440.988 171.604 441.973 171.604 442.521C171.714 442.74 171.714 443.287 171.714 443.944C171.823 442.74 173.356 441.754 176.312 440.988C178.939 440.221 182.771 439.564 184.851 439.345C186.931 439.126 192.405 438.688 196.894 438.469C201.383 438.25 210.469 437.922 229.19 437.593L224.264 435.951C221.527 434.965 219.228 433.761 219.009 433.323C218.899 432.775 217.804 432.556 216.6 432.885C215.396 433.213 214.41 432.994 214.41 432.337C214.41 431.79 213.863 431.461 213.316 431.79C212.659 432.118 211.455 431.68 210.469 431.023C209.593 430.257 208.827 429.928 208.827 430.476C208.937 430.914 208.061 430.804 206.966 430.257C205.981 429.709 203.353 428.943 201.273 428.505C199.193 428.176 196.784 427.191 196.018 426.534C195.252 425.767 194.595 425.548 194.595 426.096C194.704 426.534 192.405 425.439 189.449 423.687C188.793 423.249 188.063 422.774 187.26 422.263C187.479 422.701 189.778 424.125 192.515 425.439V425.439ZM171.714 444.93C171.714 445.806 173.028 447.667 174.56 449.091C176.203 450.405 177.188 452.157 176.75 452.923C176.421 453.58 174.232 454.566 171.933 455.004C169.743 455.332 167.116 456.428 166.24 457.194C165.948 457.486 165.693 457.669 165.474 457.742C165.912 457.632 166.459 457.413 167.006 456.975C168.43 456.099 170.838 455.113 172.48 454.894C174.232 454.675 175.765 454.347 176.093 454.237C176.422 454.128 176.969 454.018 177.407 454.128C177.954 454.237 178.283 453.471 178.283 452.595C178.283 451.719 176.75 449.857 174.998 448.543C173.247 447.229 171.933 445.477 171.714 444.382C171.714 444.528 171.714 444.711 171.714 444.93V444.93ZM144.454 397.297C145.038 398.392 145.366 398.501 145.439 397.625C145.439 396.749 145.987 396.53 146.753 397.078C147.702 397.589 147.884 397.406 147.3 396.53C146.862 395.764 147.957 392.041 149.818 388.318C151.023 385.799 152.117 383.281 152.665 381.529C151.898 383.5 150.366 386.675 148.833 389.96C146.862 394.231 145.001 397.187 144.344 397.187C144.417 397.187 144.454 397.224 144.454 397.297V397.297ZM252.399 173.914C253.823 175.447 255.574 178.404 256.231 180.484C256.779 182.565 258.53 186.836 260.063 189.792C262.69 195.158 262.69 195.596 262.034 214.977C261.705 224.723 261.267 236.549 260.939 242.791C261.377 236.221 262.034 225.818 262.362 216.62C263.238 197.676 263.128 194.939 261.486 192.53C260.501 190.997 258.53 186.617 257.217 182.674C255.793 178.732 253.494 174.462 252.071 173.148C250.538 171.724 247.801 170.52 244.845 170.082C244.554 170.155 244.298 170.191 244.079 170.191C248.349 171.067 250.648 172.162 252.399 173.914V173.914ZM259.735 255.274C259.516 255.712 259.516 257.026 259.844 258.23C260.209 259.69 261.304 260.42 263.128 260.42C263.201 260.42 263.311 260.42 263.457 260.42C262.253 260.311 261.048 259.544 260.501 258.559C260.172 257.792 260.063 255.164 260.172 251.879C260.063 253.741 259.844 255.055 259.735 255.274ZM263.238 257.792C263.311 257.719 263.384 257.646 263.457 257.573C263.128 258.011 262.8 258.23 262.581 258.23C262.362 258.23 262.216 258.157 262.143 258.011C262.143 258.23 262.143 258.413 262.143 258.559C262.253 258.778 262.581 258.778 262.909 258.668C262.982 258.449 263.092 258.157 263.238 257.792V257.792ZM272.981 200.414L274.514 199.866C274.368 199.866 274.222 199.866 274.076 199.866C273.419 199.757 272.872 199.757 272.543 200.304C272.47 200.669 272.434 201.107 272.434 201.618C272.434 202.713 272.325 203.48 271.996 203.589C271.777 206.327 271.668 210.926 271.558 218.7C271.558 221.036 271.522 223.19 271.449 225.161C271.887 218.7 272.434 210.597 272.981 200.414V200.414ZM154.635 281.554C154.416 282.54 154.526 283.416 154.964 283.416C155.511 283.416 155.84 285.715 155.84 288.453C155.84 291.3 156.277 293.709 156.934 293.928C157.007 294.001 157.08 294.074 157.153 294.147C156.825 293.271 156.277 290.643 155.949 287.796C155.621 284.511 155.402 281.116 155.292 280.459C155.292 279.693 154.745 279.255 154.197 279.583C154.051 279.656 153.942 279.693 153.869 279.693C154.635 279.912 154.854 280.569 154.635 281.554ZM143.469 319.551C146.205 317.908 149.052 317.361 154.964 317.361C159.89 317.361 162.08 317.58 163.065 318.346C163.138 318.127 163.284 317.835 163.503 317.47C162.956 317.689 161.532 317.47 159.014 317.142C156.059 316.704 151.46 316.923 148.723 317.47C145.987 318.127 142.921 319.332 141.826 320.208C141.461 320.5 141.06 320.756 140.622 320.975C141.388 320.865 142.264 320.317 143.469 319.551V319.551ZM162.627 320.975C161.97 321.194 159.781 320.975 158.029 320.427C157.007 320.135 155.913 320.025 154.745 320.098C155.511 320.208 156.387 320.646 157.701 321.193C158.212 321.412 158.722 321.631 159.233 321.851C159.343 321.522 160.219 321.303 161.423 321.522C162.846 321.632 164.05 321.194 164.16 320.427C164.16 320.135 164.196 319.843 164.269 319.551C164.196 319.551 164.123 319.551 164.05 319.551C163.904 319.551 163.758 319.514 163.613 319.441C163.613 320.208 163.284 320.865 162.627 320.975V320.975ZM164.05 322.836C165.583 322.836 167.225 323.274 167.882 323.822C168.539 324.479 168.977 324.15 168.977 322.836C168.977 322.288 168.867 321.631 168.649 321.193C168.503 321.193 168.393 321.23 168.32 321.303C168.612 321.887 168.43 321.96 167.773 321.522C167.481 321.668 167.335 321.851 167.335 322.07C167.335 322.508 165.693 322.836 163.722 322.836C163.795 322.836 163.904 322.836 164.05 322.836V322.836ZM166.24 319.003C166.24 318.127 165.693 317.361 165.145 317.361C165.693 317.361 166.021 318.456 165.693 319.879C165.145 322.07 165.255 322.179 166.787 320.646C166.459 320.208 166.24 319.551 166.24 319.003ZM150.037 321.193C149.052 321.522 148.176 321.851 147.41 322.07C147.957 322.398 149.599 321.96 151.132 321.193C151.789 320.828 152.336 320.573 152.774 320.427C151.898 320.573 150.986 320.828 150.037 321.193ZM140.513 341.451C141.388 343.86 142.593 345.831 143.25 345.831C143.797 345.831 145.439 345.284 146.753 344.627C148.942 343.532 149.49 343.751 151.241 345.941C152.227 347.364 153.541 348.131 153.978 347.693C154.051 347.547 154.124 347.291 154.197 346.926C153.65 347.583 152.993 347.255 151.679 345.831C150.694 344.627 150.147 343.313 150.585 342.984C151.132 342.546 150.366 342.765 148.942 343.532C147.629 344.189 146.315 344.736 145.987 344.736C145.658 344.736 145.439 343.86 145.439 342.875C145.33 341.78 145.768 340.575 146.205 340.137C146.643 339.699 147.738 339.918 148.505 340.685C149.599 341.78 149.709 341.561 149.271 339.59C148.942 338.057 148.286 337.4 147.519 337.947C146.862 338.385 145.877 337.947 145.33 337.071C144.673 335.976 144.344 337.254 144.344 340.904C144.235 345.612 144.125 346.05 143.031 344.189C142.374 342.984 141.279 341.67 140.622 341.232C140.476 341.159 140.367 341.086 140.294 341.013C140.367 341.159 140.44 341.305 140.513 341.451V341.451ZM154.526 340.028C154.307 335.21 154.526 333.896 155.292 335.429C155.84 336.524 157.153 339.809 158.467 342.765C158.358 341.78 157.263 339.152 154.526 333.239L153.759 336.852C153.431 338.714 153.541 341.451 154.088 342.875C154.234 343.24 154.38 343.678 154.526 344.189C154.526 342.875 154.526 341.451 154.526 340.028V340.028ZM162.08 349.116C162.518 349.116 162.956 348.35 162.956 347.255C162.846 348.131 162.299 347.912 160.766 346.379C160.328 345.941 159.89 345.393 159.452 344.955C160.657 347.364 161.751 349.226 162.08 349.116V349.116ZM155.511 298.417C156.387 298.855 156.168 298.308 155.292 297.322C154.927 296.884 154.635 296.519 154.416 296.227C154.562 296.957 154.672 297.614 154.745 298.198C154.964 298.198 155.219 298.271 155.511 298.417ZM155.292 295.461C156.496 295.461 156.168 294.913 154.416 293.271C153.869 292.833 153.431 292.285 152.993 291.847C153.066 292.066 153.176 292.285 153.322 292.504C153.65 293.161 153.978 294.366 154.307 295.461C154.453 295.388 154.781 295.388 155.292 295.461ZM153.322 287.139C153.468 286.847 153.614 286.591 153.759 286.372C153.614 286.226 153.431 285.971 153.212 285.606C152.446 284.182 152.227 284.292 151.57 285.934C151.132 287.029 151.57 288.015 152.555 288.343C152.628 288.343 152.701 288.38 152.774 288.453C152.993 288.015 153.176 287.577 153.322 287.139V287.139ZM153.103 283.416C152.446 282.978 151.898 282.321 151.46 281.773C151.132 281.773 150.913 281.992 150.913 282.321C150.913 282.978 151.679 283.635 152.555 283.963C153.212 284.182 153.869 284.839 154.088 285.387C154.307 284.401 154.088 283.963 153.103 283.416ZM132.849 359.519C131.645 359.738 130.55 359.957 130.331 359.957C130.222 360.066 129.565 360.285 129.017 360.614C128.361 360.942 127.704 361.161 127.375 361.161C127.047 361.161 126.499 361.271 125.952 361.49C125.514 361.709 123.434 362.585 121.354 363.461C119.274 364.446 115.77 366.856 113.69 368.936C112.048 370.469 109.968 373.316 108.326 376.163C109.859 373.645 111.829 371.017 113.362 369.374C116.756 365.979 120.04 364.227 128.032 361.38C129.893 360.723 131.754 359.957 133.615 359.3C133.324 359.373 133.068 359.446 132.849 359.519V359.519ZM123.434 458.399C123.361 458.399 123.252 458.362 123.106 458.289C123.397 458.435 123.616 458.472 123.762 458.399C124.091 458.18 122.011 454.894 119.055 450.952C122.011 454.894 123.981 458.18 123.434 458.399ZM113.362 454.347C110.297 452.814 106.684 451.062 103.618 449.419C103.764 449.565 103.837 449.711 103.837 449.857C103.837 450.514 104.275 450.952 104.932 450.952C105.48 450.952 109.859 452.704 114.457 454.894C115.479 455.332 116.464 455.734 117.413 456.099C116.208 455.551 114.785 455.004 113.362 454.347ZM98.9108 446.901C97.9255 446.353 97.0497 445.806 96.1739 445.368C96.5023 445.806 97.7066 446.572 99.3487 447.12C99.2028 447.047 99.0568 446.974 98.9108 446.901V446.901ZM87.963 439.455C86.9777 438.688 85.8829 437.812 85.0071 437.046C86.2113 438.25 87.6346 439.564 88.5104 440.331C89.6052 441.207 90.9189 442.083 91.5758 442.192C90.7 441.426 89.3862 440.44 87.963 439.455ZM58.4038 415.474C56.5427 415.803 55.4479 415.912 55.01 415.803C55.4479 415.912 56.3238 415.912 57.8565 415.584C58.6228 415.474 59.6081 415.255 60.7029 415.036C59.8271 415.182 59.0607 415.328 58.4038 415.474ZM62.564 246.733C62.8925 245.419 63.1114 243.557 63.4398 241.477C62.8925 244.652 62.3451 247.828 61.7977 250.237C62.1626 248.923 62.418 247.755 62.564 246.733ZM117.194 183.112C121.025 182.674 124.748 182.674 125.405 183.112C126.499 183.66 126.499 184.645 125.186 187.602C124.31 189.683 123.543 192.639 123.543 194.172C123.543 195.486 122.887 197.238 121.901 198.443C122.12 198.443 122.303 198.479 122.449 198.552C123.106 198.881 123.543 197.457 123.543 195.267C123.543 193.187 123.981 191.216 124.638 190.887C125.186 190.559 125.514 189.902 125.186 189.245C124.857 188.697 125.076 188.15 125.733 188.15C126.28 188.15 126.609 187.712 126.28 187.055C125.952 186.507 126.061 185.959 126.499 185.959C127.047 185.959 127.375 184.974 127.375 183.769C127.375 182.455 126.828 181.798 125.952 182.127C125.295 182.455 124.638 182.236 124.638 181.579C124.638 181.032 123.872 180.484 122.996 180.484C122.011 180.484 121.682 181.032 122.12 181.798C122.777 182.784 122.23 182.893 119.931 182.346C118.288 181.908 116.975 181.908 116.975 182.455C116.975 182.893 115.442 183.222 113.69 183.222C111.829 183.222 110.406 182.893 110.406 182.455C110.406 181.908 109.859 181.798 109.311 182.127C109.165 182.2 109.056 182.2 108.983 182.127C110.625 183.55 111.939 183.66 117.194 183.112V183.112ZM119.164 204.903C119.164 207.86 118.507 208.736 114.785 210.926C113.69 211.473 112.596 212.24 111.72 213.116C112.304 212.605 112.961 212.13 113.69 211.692C117.303 209.393 118.398 209.174 119.931 210.378C121.573 211.473 121.682 211.473 120.588 210.05C119.931 209.174 119.493 206.655 119.602 204.575C119.712 203.261 119.931 201.947 120.15 200.852C119.493 202.056 119.164 203.48 119.164 204.903V204.903ZM104.056 218.919C103.399 218.919 100.115 221.657 96.9402 225.161C93.8748 228.774 89.4957 234.469 87.4156 238.082C89.4957 234.469 93.9843 228.665 97.2687 225.161C100.553 221.657 103.728 218.919 104.385 219.138C104.823 219.357 105.808 219.248 106.684 218.919C105.917 219.029 104.823 219.029 104.056 218.919V218.919ZM75.373 329.735C75.373 338.495 75.4825 339.152 77.2341 338.276C75.4825 339.152 75.373 338.495 75.373 320.098V329.735ZM215.615 267.1C217.585 267.1 217.585 267.209 216.162 268.961C215.177 270.056 214.41 272.027 214.41 273.341C214.41 274.655 213.973 275.641 213.535 275.422C213.097 275.203 212.111 273.451 211.345 271.589C210.579 269.618 210.469 268.414 211.126 268.742C211.674 268.961 212.44 268.742 212.768 268.195C213.097 267.538 214.41 267.1 215.615 267.1ZM153.322 277.503C153.614 277.576 153.796 277.649 153.869 277.722C154.088 277.503 154.197 277.174 154.197 276.955C154.197 276.298 153.65 276.079 153.103 276.408C152.555 276.627 152.227 276.298 152.008 275.75C152.227 276.517 152.774 277.174 153.322 277.503ZM152.008 289.219C152.008 289.365 152.044 289.621 152.117 289.986C152.19 289.767 152.3 289.511 152.446 289.219C152.227 289 152.008 289 152.008 289.219ZM262.034 186.288C261.048 183.988 260.282 181.798 260.391 181.36C260.391 180.922 259.844 180.594 259.297 180.594C258.64 180.594 258.421 179.827 258.749 178.951C259.078 177.966 258.311 176.323 257.107 175.119C255.903 173.914 255.246 172.6 255.574 172.381C256.012 172.053 255.465 171.834 254.37 171.834C254.005 171.834 253.713 171.797 253.494 171.724L253.823 172.053C255.465 173.367 257.545 176.98 258.53 180.046C259.516 183.003 261.486 187.383 262.8 189.683C263.019 190.048 263.238 190.376 263.457 190.668C263.347 189.792 262.69 188.04 262.034 186.288V186.288ZM171.276 321.851C171.167 322.07 171.714 322.946 172.809 324.041C171.933 323.165 171.385 322.398 171.276 321.851ZM167.882 319.879C167.517 319.587 167.408 319.66 167.554 320.098C167.7 320.025 167.809 319.952 167.882 319.879ZM273.967 170.52C272.872 169.753 272.106 168.439 272.106 167.454C272.106 167.527 272.069 167.6 271.996 167.673C271.887 168.439 272.434 169.644 273.419 170.301C274.295 170.848 274.624 171.177 274.405 171.396C275.718 171.724 275.609 171.505 273.967 170.52V170.52ZM106.793 163.731C108.545 164.278 108.545 164.497 106.574 165.702C104.385 167.125 104.385 167.125 106.793 168.33C108.873 169.425 109.311 170.629 109.53 176.214C109.603 177.09 109.64 177.856 109.64 178.513C110.297 176.214 110.297 174.352 109.421 171.505C108.654 168.877 107.56 167.344 106.246 167.344C104.823 167.235 104.932 167.016 106.793 166.249C108.216 165.702 109.092 164.716 108.764 164.169C108.435 163.512 107.45 163.074 106.574 163.074C106.063 163.074 105.662 162.818 105.37 162.307C105.662 162.964 106.136 163.439 106.793 163.731V163.731ZM263.895 148.182C266.632 148.182 269.369 148.729 269.807 149.277C270.354 149.824 270.135 149.824 269.15 149.277C268.055 148.51 267.726 148.62 268.164 149.715C268.529 149.35 268.931 149.313 269.369 149.605C270.317 150.189 270.5 150.007 269.916 149.058C269.478 148.291 267.617 147.744 265.646 147.744C263.785 147.744 262.471 147.306 262.909 146.868C263.347 146.43 262.581 145.554 261.267 145.006C259.953 144.349 258.749 143.364 258.53 142.816C258.311 142.159 259.953 141.831 262.253 141.94C265.537 142.159 265.975 142.05 264.223 141.174C263.42 140.809 263.019 140.553 263.019 140.407C261.486 140.735 259.953 140.735 258.968 140.516C258.968 140.735 258.53 141.174 257.873 141.721C256.122 143.254 256.231 143.473 259.516 145.444C261.486 146.649 262.581 147.634 262.034 147.634C261.377 147.744 259.844 146.977 258.421 146.101C257.107 145.116 255.793 144.568 255.465 144.678C255.136 144.787 256.779 146.758 259.078 148.948C259.187 148.401 261.267 148.072 263.895 148.182V148.182ZM266.632 152.233C266.632 152.379 266.559 152.489 266.413 152.562C266.851 152.452 267.179 152.014 267.398 151.467C267.07 151.576 266.741 151.795 266.632 152.233V152.233ZM264.442 140.078C264.442 140.151 264.442 140.188 264.442 140.188C264.734 140.115 265.099 140.078 265.537 140.078C266.632 140.078 267.617 139.969 268.383 139.75C267.726 139.531 266.084 139.64 264.442 140.078ZM81.0659 313.747C84.2407 310.243 86.2113 307.506 85.3355 307.725C86.2113 307.506 84.2407 310.243 75.2635 320.208L81.0659 313.747ZM113.362 258.997C108.654 263.705 101.429 272.027 97.2687 277.393C101.429 272.027 108.654 263.705 121.901 250.565L113.362 258.997ZM154.197 381.857C154.088 379.886 153.759 378.901 153.541 379.667C153.65 379.996 153.869 380.872 154.197 382.405V381.857ZM245.064 420.073C246.488 419.307 246.488 419.088 244.845 419.088C244.262 419.088 243.824 418.905 243.532 418.54C243.678 419.562 243.86 420.584 244.079 421.606C244.189 420.84 244.517 420.511 245.064 420.073V420.073ZM233.022 237.863C233.022 237.717 233.058 237.535 233.131 237.316C232.912 237.754 232.73 238.155 232.584 238.52C232.876 238.593 233.022 238.374 233.022 237.863ZM235.759 295.242C235.211 295.242 235.43 296.008 236.306 296.994C236.525 297.14 236.671 297.322 236.744 297.541C236.525 296.775 236.306 296.008 236.087 295.242C236.014 295.242 235.905 295.242 235.759 295.242ZM237.948 301.921C237.291 301.812 237.401 302.359 238.167 303.235C238.386 303.454 238.605 304.002 238.715 304.878C238.569 303.783 238.386 302.797 238.167 301.921C238.167 301.921 238.094 301.921 237.948 301.921ZM295.753 269.618L295.424 266.552C295.424 268.414 295.315 269.399 294.33 270.166C294.841 270.02 295.315 269.837 295.753 269.618ZM316.663 277.503C316.992 278.926 317.868 280.021 318.415 280.021C318.634 280.021 318.816 280.094 318.962 280.24C317.868 278.598 316.882 277.065 316.116 275.86C316.335 276.408 316.444 276.955 316.663 277.503ZM293.782 447.339V447.229L291.921 446.353C292.505 446.645 293.125 446.974 293.782 447.339V447.339ZM232.146 272.246C232.584 272.137 232.693 271.699 232.474 271.261C232.693 271.589 232.584 271.918 232.146 272.246ZM109.311 215.963C108.983 216.948 108.326 217.824 107.779 218.372C108.654 217.824 109.311 216.729 109.311 215.963ZM95.517 155.518C96.0644 156.175 97.2687 156.285 100.006 156.285C97.3781 156.285 96.0644 156.175 95.517 155.518ZM264.661 453.033C263.457 455.771 262.581 457.961 262.581 457.961C262.581 457.961 264.552 458.618 266.96 459.275C270.244 460.37 271.777 461.574 272.762 463.983L274.076 467.378C280.864 462.888 284.696 459.822 286.995 457.523C289.294 455.332 291.155 452.704 291.045 451.609C291.045 450.624 289.951 449.2 288.637 448.543C287.214 447.777 282.615 446.572 278.236 445.806C273.857 444.93 269.807 444.273 269.15 444.273C268.493 444.273 267.726 445.149 267.398 446.134C266.96 447.229 265.756 450.295 264.661 453.033V453.033Z" />
            </svg> */}
            {page === "" && (
              <div className="hero-main">
                <ModelViewer />
              </div>
            )}
            <>
              {page === "about" && (
                <div className="hero">
                  

                  <div className="bio">
                    Fast-rising Afrobeats/Afro-fusion prodigy Firstklaz aka
                    young don aka helicopter boy is a singer/songwriter based in
                    Abuja, Nigeria. His stage name arose due to the high
                    academic position he maintained in high school. The
                    23-year-old has been singing since he was 10 years old,
                    learning the basics of music from his church choir, and has
                    released 11 singles that have been accepted by his fans
                    across the world. He combines creative world play and an
                    array of genres such as Afrobeats, R&B, and hip-hop to give
                    birth to his unique sound. His distinctive style of fashion
                    and music, influenced by listening to artists such as Bob
                    Marley, Fela, and other greats while growing up, has earned
                    him cosigns from Afrobeat stars such as{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://www.instagram.com/reel/Cse0U1yg0FR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                        target="blank"
                      >
                        Joeboy
                      </a>
                    </span>{" "}
                    as well as articles from top magazines such as{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://thenativemag.com/native-selects-omah-lay-libianca/#:~:text=Nigerian%20musicians%20Firstklaz,an%20eye%20on."
                        target="blank"
                      >
                        TheNativeMag
                      </a>
                      ,
                    </span>{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://www.wordplaymagazine.com/blog-1/2023/6/21/firstklaz-x-hitsound-i-like-girls-single"
                        target="blank"
                      >
                        WordPlay
                      </a>
                      ,
                    </span>{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://imullar.com/2023/06/19/on-rotation-songs-you-need-in-your-life-this-week-89/"
                        target="blank"
                      >
                        IMullar
                      </a>
                    </span>{" "}
                    and{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://ameyawdebrah.com/hitmakers-firstklaz-and-hitsound-team-up-for-summer-anthem-i-like-girls/"
                        target="blank"
                      >
                        AmeyawDebrah
                      </a>
                    </span>
                    . He continues to spread the gospel that is his music as he
                    continues to push for global stardom.
                  </div>
                  <button
                  onClick={handlePdfDownload}
                  >Download EPK</button>
                </div>
              )}

              {page === "tour" && (
                <>
                  <div className="album">
                    <div className="album_title">
                      FIRSTKLAZ AND FRIENDS
                      <br />
                      <span>THE NIGERIAN TOUR</span>
                    </div>
                    <a
                      className="album_button"
                      href="https://tix.africa/discover/fnftour"
                      target="_blank"
                    >
                      GET YOUR TICKETS HERE
                    </a>
                  </div>

                  <div className="map">
                    <svg
                      baseProfile="tiny"
                      fill="none"
                      stroke="#FFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      version="1.2"
                      viewBox="0 0 1000 812"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      
                      <g id="features">
                        <path
                          d="M155.3 89.1l0.6-0.2 5.8-0.1 4.9 0.8 2.6-1.3 2.8-0.6 2.3 1.9 2.3 2.2 4.7 2.8 5.1 1.9 2.8 0.7 2.6 1 2.5 1.7 2.8 1.3 2.8 0.3 2.4-1.4 1.1-2.1 1.5-1.8 1.9-0.7 1.3 1.7-0.2 2.4-1.1 2.3-0.3 1.4 0 1.5-0.3 1.2-0.4 1.1-0.9 2.9-0.4 3.1 2.5 4.4 1.7 4.9-0.6 5.6-0.8 2.9-0.3 2.9 2.3 12.5-0.3 5.8-3.4 1.8-5.2-1.7-5.4 1.4-2.7 4.8 0.5 29.8-2.6 12.1-3.3 7.2-0.7 7.4 2.5 2.8 3.4 1.1 3.3-2.1 2.6-3.3 14.4-6.5 1.6-0.4 1.6 0.4 1.2 0.7 0.9-0.3 0.9-0.3 1.1 0.7 0.8 1.2 1.7-0.1 1.5-1 3.1-0.6 3.1 1.2 1.2 1.1 1.6 0.3 4-1 1.7-0.1 1.4-0.8 0.6-1.8 1.3-1.3 1.7-0.1 1.6 0.7 1.8 0.1 4.3-0.6 1.8 1.5 1.1 2.2 6.6 2.9 4.5 1 11.5-0.8 1.2-0.7 1.3-0.3 5.6 0.9 2.8 1 3.6 3.5-0.4 5.3-1.9 5.8 1.5 2.4 2.9 1.1 5.8 9.3 0.7 11.8-2.3-1.5-2.7 0.1-1.1 0.9-1.9 2.2-0.8 1.2-1.9 1.6-2.7 0.2-2.6 0.7-13.1 5.6-5 0.9-7.6 0-2-0.7-1-2.7-0.1-3 0.5-6-1.3-2.6-2.4-1.5-2.7-4.9-1-5.8-4.5-2.7-5.5-0.2-22.4 4.6-10.4 4.7-1.2 4.9 4.8 3.6 5.4 2.3 5.8 0.9 1.3 0 1 0.6 0.6 1.4 1 0.6 2.1 0.6 0.9 2.2 0.7 3.2 0.2 3.1-3.6 4.6 3.1 3.9 1.7 5.1-2.1 1.6-5.3 1.5-5.1 2.5-5.3-0.7-2.4 0.8-1.3 5.1 0.4 5.8-0.3 2.7 0.4 2.6 3.6 4.7 2.3 5.2-1.9 5-2.2 1.7-2.6 0.8-8.7 1.9-2.7 0.9-0.8 2.7 0 3-1 2.1-5.2-0.3-1.8-1.6 1.2-5.7 0.4-5.6-1.6-1.8-1.9-1.5-1.2-2.6-0.3-3 0.5-5.7 2.8-4.9 8.8-5 0.2-1.4 1.9-1.9 0.5-1.1 0.2-1.3 0-2.9 2.5-13.8-0.1-1.9-4.9-1.5-9.2-6-7.7-2.1-7.8 1.2-20.8 0.5-4-0.4-8.4-4-6.8-4.2-6.9-0.8-0.6 0.6-0.1 0-0.7 0.1-0.6-0.1-1.8-1.7-13.6-19.3-1.1-2.1-0.2-1.8 1.6-4.1 0.4-1.2 0.9-3.5 5.3-9 1.7-1.8 3.9-2.3 0.9-0.9 0.5-1.7-0.4-1.5-0.9-1.5-1.8-1.9-0.3-0.2-0.3-0.2-0.4-0.8-0.2-0.8-0.5-4.4 0.4-1.3 0.8-1.1 1.3-1.3 1.3-2.6-0.4-2.6-1.8-5.7 0-3.4 2-10.2-0.7-19.3 0.3-0.8 16.6-12.5 4.9-4.7 12.1-19.1 2.4-16.7z"
                          id="NGKE"
                          name="Kebbi"
                        ></path>
                        <path
                          d="M123.8 251.1l0.6-0.6 6.9 0.8 6.8 4.2 8.4 4 4 0.4 20.8-0.5 7.8-1.2 7.7 2.1 9.2 6 4.9 1.5 0.1 1.9-2.5 13.8 0 2.9-0.2 1.3-0.5 1.1-1.9 1.9-0.2 1.4-8.8 5-2.8 4.9-0.5 5.7 0.3 3 1.2 2.6 1.9 1.5 1.6 1.8-0.4 5.6-1.2 5.7 1.8 1.6 5.2 0.3 1-2.1 0-3 0.8-2.7 2.7-0.9 8.7-1.9 2.6-0.8 2.2-1.7 1.9-5-2.3-5.2-3.6-4.7-0.4-2.6 0.3-2.7-0.4-5.8 1.3-5.1 2.4-0.8 5.3 0.7 5.1-2.5 5.3-1.5 2.1-1.6-1.7-5.1-3.1-3.9 3.6-4.6-0.2-3.1-0.7-3.2-0.9-2.2-2.1-0.6-1-0.6-0.6-1.4-1-0.6-1.3 0-5.8-0.9-5.4-2.3-4.8-3.6 1.2-4.9 10.4-4.7 22.4-4.6 5.5 0.2 4.5 2.7 1 5.8 2.7 4.9 2.4 1.5 1.3 2.6-0.5 6 0.1 3 1 2.7 2 0.7 7.6 0 5-0.9 13.1-5.6 2.6-0.7 2.7-0.2 1.9-1.6 0.8-1.2 1.9-2.2 1.1-0.9 2.7-0.1 2.3 1.5 3.3 4.3 5.8 9.8 1.1 5.1-1.5 0.7-1.5 1.7-0.6 2-0.5 6.4 0.1 2 1.3 3.8 0.1 0.9-0.1 1-0.3 1.7-1.1 2.6-0.2 0.9 0 2.1-0.1 1-0.5 1-0.3 1.5 0.5 2.6 2.5 1.8 1.8 2.4 1.3 2.6 2.6-0.4 2-2.2 1.6-2.6 4-4.3 9-6.9 5.4-1.2 2 1.4 0.9 2.4 2.4 0.4 5.5-2.6 2.9-0.5 2.9 0.5 1.7-1.3-0.3-3 2.5-1.1 2.7 0.2 2.3 1 0.7 1.5 0.5 6.2 1.2 0.3 2.6-0.7 4.2 3.5 0.1 6.2-1 2.7 1.7 1.7 5.4 2 2.2 1.6-0.1 2.6-1.9 2.4-2.5 1.7-2.4 1.9-2.1 2.5-2.4 1.6-1.8 2.2 3.3 4.4 5.5 2.3 5.6 0.7 11.2-0.2 3.7 2.6 1.4 12.3-0.1 2.8-2 1.6-2.3 0.2-1.7 1.3 1.5 2 2.8 0.8 1.6 1.4-0.6 2.1 1.1 2 2.3 1.1 0.4 2.4-1.7 2-1.1 1-0.8 1.2-0.2 1.6-0.4 1.5-4.2 3-0.6 2.8 1.5 2.4 1 0.6 1.3 1.7-0.2 1.1-0.8 2.3 0.5 1.2 1.9-0.6 1.8 0.5-10.7 15.2-0.4 0.1-3.6-2-7.1-6.9-4.6-1.5-14 0.6-1.8 0.9-0.3 2.1 0.7 54.7 0.4 1.4 1.9 3.2 3.4 0.4-1 3.1-2.2 2.1-1.6 0.6-1.2 1.2 0.2 1.7-0.4 1.2-1-0.6-1 0.8-0.8 1.9-0.5 2-1.3 1.3-0.3-0.5-1.1-0.9 0-0.5-1-0.4-2.8-3.1-3-4.8-0.9-1-7.5-5.7-0.6-0.3-1.7-3.5-1-3.7-0.2-2.2-0.1-0.7-0.3-0.7-0.4-0.1-0.2-0.6-1.2-2.4-0.1-0.6-0.1-1.4-1.9-3.2-0.9-1-1.2-0.6-1.6-0.3-2.8-1.9-0.5-0.4-1.3-0.2-3.4 0.7-4.2 0.8-0.5-0.2-2.3-2.2-1.2-0.4-1.1-0.2-8.3 0.1-1.9 0.3-2.4 1.2-0.9 0.2-1.1-0.1-3.4-0.5-4 0.1-0.9-0.3-0.5-0.5-0.8-1.4-1.1-1.5-1-1.6-0.6-0.1-1.7-0.7-0.6-0.1-4.3-0.1-1.2-0.4-1-0.8-0.3-0.4-0.7-1.3-0.6-0.8-0.7-0.8-1.6-1.4-1-1.3-0.4-0.3-1-0.6-1.1-0.4-1-0.2-2.4-0.1-1-0.2-0.9-0.5-0.9-0.7-1.4-1.4-0.8-0.6-0.9-0.5-1.1-0.2-5.1 0.3-7.2-1.2-1.1-0.4-0.9-0.6-0.6-1-0.1-0.9 0.1-0.8-0.1-0.8-0.3-0.8-1.3-1.4-1.3-1.7-1.1-0.8-4-1.9-2.5-1.8-1.4-0.6-0.1-0.4-1.8-0.9-1-0.2-1.1 0-4.9 1.5-3.4 2-3 0.9-2.4 0.1-2.1-0.6-1.3-1.5-0.2-2.3 0.4-2.3-0.1-2.1-0.9-1.5-2.1-0.8-3.8-0.7-1.2-0.4-1.2-0.9-0.6-1-0.3-1.3 0-1.5 0 0.1-0.1 0.1-0.1 0-0.1 0 0.1-1.5-0.2-2.9-0.1-0.5-6.6-1-5.6 0.7-2.5-4.3 0.1-5.7 0.8-6.2-1.3-5.1-2.6-0.1-1.2-0.7-1.1-0.9-25.5-30.2-2.1-1.8-5.2-0.7-12.1 0.3-6.7 1.3-0.4 0.1 0.2-1.4-0.2-1.2-0.7-1-5.1-5.3-1.1-1.8-0.1-1.4 1.6-3.5 1.9-3 0.3-0.9 0.1-1.5 0.2-0.5 0.5-0.7 1.5-1.5 1.5-0.5 1.6 0.3 4.8 2.6 1.2-0.2 1.2-1.5 0.5-1.4 0-4 0.7-2 2-3.9 0.5-2 0-2.4 0-1.9-0.4-2.2-0.7-1.5-0.9-0.6-1.1-0.2-1-0.3-0.7-0.8-0.7-2.5-0.4-0.9-0.6-0.6-0.6-0.6-0.6-0.6-0.4-1 0.1-1.3 1.6-4.1 0.1-2.2-1.5-6.9-0.8-1.3-0.6-1.5-0.3-1.5 0-1.7 0.8-3-0.7-0.6-0.6 0z"
                          id="NGNI"
                          name="Niger"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Minna"
                        ></path>

                        <text
                          x="280"
                          y="340"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="20px"
                          stroke-width="0.5"
                        >
                          MINNA
                        </text>
                        <path
                          d="M120.7 327.6l0.4-0.1 6.7-1.3 12.1-0.3 5.2 0.7 2.1 1.8 25.5 30.2 1.1 0.9 1.2 0.7 2.6 0.1 1.3 5.1-0.8 6.2-0.1 5.7 2.5 4.3 5.6-0.7 6.6 1 0.1 0.5 0.2 2.9-0.1 1.5 0.1 0 0.1 0 0.1-0.1 0-0.1 0 1.5 0.3 1.3 0.6 1 1.2 0.9 1.2 0.4 3.8 0.7 2.1 0.8 0.9 1.5 0.1 2.1-0.4 2.3 0.2 2.3 1.3 1.5 2.1 0.6 2.4-0.1 3-0.9 3.4-2 4.9-1.5 1.1 0 1 0.2 1.8 0.9 0.1 0.4 1.4 0.6 2.5 1.8 4 1.9 1.1 0.8 1.3 1.7 1.3 1.4 0.3 0.8 0.1 0.8-0.1 0.8 0.1 0.9 0.6 1 0.9 0.6 1.1 0.4 7.2 1.2 5.1-0.3 1.1 0.2 0.9 0.5 0.8 0.6 1.4 1.4 0.9 0.7 0.9 0.5 1 0.2 2.4 0.1 1 0.2 1.1 0.4 1 0.6 0.4 0.3 1 1.3 1.6 1.4 0.7 0.8 0.6 0.8 0.7 1.3 0.3 0.4 1 0.8 1.2 0.4 4.3 0.1 0.6 0.1 1.7 0.7 0.6 0.1 1 1.6 1.1 1.5 0.8 1.4 0.5 0.5 0.9 0.3 4-0.1 3.4 0.5 1.1 0.1 0.9-0.2 2.4-1.2 1.9-0.3 8.3-0.1 1.1 0.2 1.2 0.4 2.3 2.2 0.5 0.2 4.2-0.8-3.2 4.1-3.1 10.7-1.2 7.9-0.7 2.2-1.6 1.9-2.5 0.5-8.3-1.9-10.5-0.5-7.5-1.8-7.6-2.9-3.8-3.7-3-1.2-3.4 3.1-8.7 10.8-0.5 2.5 2.2 4.4 1.1 1.3 1.4 1.2 0.7 1.4 3.1 2.8 5.1 3.2 0.5 4.6-8.1 0.2-2.7 0.9-1.6 1.9-0.5 2.5-0.9 1.8-0.7 0.2-0.6-0.2-3.2 0.5-1.9-0.4-3-0.2-5-3.2-4.7 1.4-1.6-0.6-0.4-1.3-0.8-0.6-1.2-0.2-4.3 0.6-2.3-1.5-1.6-2.7-3.1 0-3 1.2-4.3 0.4-0.5 0.6-0.1-0.6-2.1 0.5-2 0.8-4.2 0.9-5-0.5-4.9 0.3-1.2-0.8-1.3-0.3-0.9-1.5-2.2-7.3-2.8-4.4-2-1.3-1.7-1.6-2.7-4-2.6-10.3-2.7-4-6.7-15-1-4.7 0.9-4.6 1.7-1.6 1.2-2 1.9-1.9 2.5-1.5 2.6-3.7-1.3-3-3.7 2.3-2.1 0.1-5.5-1.3-9-3.2-3.4-1.8-2.9-2.5-1.7-3.4-2.2-2.8-3.4-1.5-3.7 0.3-3.4 2.5-1.9 3.7-0.7 5-1.5 1.6-1.7 1.3-15.6 7.9-3.3 2.5-3 1.5-3.4 2.6-9 4-0.9 0.2-0.8-0.9-0.9-0.5-0.7-0.8-1.2-0.3-1.2 0.2-1.7 0.5-1.7 1-3.1 2.7-1.5 0.9-1.2 1-0.5 0.8-1.8 0.6-4.1 3.4-1.4 1.7-1.8 1.3-6 1.4-1.5-0.2-1.5 0-3.9 3.5-0.5 0.4-1.5-18.7 0-0.1 0-0.8 0.4-0.6 1.3-0.5 0.4-0.4 0.1-0.7-0.4-1.2-0.1-0.7 0.3-1.2 1-2.2 0-1.1-0.3-0.6-0.4-0.1-0.3-0.2-0.1-0.6 0.2-0.1 0.8-1.3 0.2-0.5 0.5-2.1 0.1-4.9-0.2-2 5.8 0.5 1-0.2 0.8-0.5 0.6-0.7 0.8-0.5 0.8-0.2 2.4 0 0.8 0.1 0.8 0.4 0.8 0.5 0.7 0.3 0.9 0 5.2-1.3 1.8-1.3 1.2-2.4 2.5-7.9 1.6-3 0.4-1.6 0.1-5-0.3-1.2-1-2.5-0.5-2.1 0.3-2.1 1.5-2.4 0.5-0.4 1.2-0.4 0.6-0.5 4.6-6.1 0.1-0.4-0.4-1-0.1-0.5 0.6-1.9 1.2-0.4 1.5 0.3 1.3 0.1 2.5-1.4 0.5-2-0.6-2.3-0.9-2.4-0.3-1.5 0.2-1.8 0.7-1.5 1.2-0.9 5.4-2.3 3-0.7 4.5 0.5 1.4-1.3 2-3.7 2.4-2.9 0.8-1.5 0.5-6.6 0.5-1.3 1.1-1.1 1.1-0.5 1-0.7 0.7-1.7 0-0.4z"
                          id="NGKW"
                          name="Kwara"
                        ></path>
                        <path
                          d="M45.5 499l0.5-0.3 6.6-4.6 7.3 0.2 1.9 3.6 0.4 8.6 1.3 4.1 2.1 0.4 0.8-4 1.1-3.3 2.8-0.1 0.5 6.8-2.8 7.7 0.1 1.6 1.5 4 3.1 2.6 2.5 3.2 3.4 6.2 5.4 4.9 4.1 1.4 4.3-0.2 3-2.6 3.1-7.6 3.1-2.1 2.8 2.1 1.3 3.7 2.2 1.3 2.2-1.2 2.3-1 7.5 0.2 2.6 3.7 0 4.2 0.2 1.4 2.2 1.6 2.2 1.2 0.5 1.3 0 1.5 0.2 1.2 0.5 1.1 0.9 4.5-2.8 3.9-2.1 3.5 4.6 0.2 9.3-1.2 4.7-1.2 2.1-1.4 2.4-0.8 2.3-0.2 2.3-0.4 5.3-2.6 1.6 3.3 0.6 3.4 3.1-0.4 2.9-1.8 3.5-0.1 2.5 2.1 0.9 1.9 0.7 1.9 0.2 1.3 0.4 1.1 2.2 0.1 2.6-1.5 1.6 0.5 1.7 0.1 1.2-0.6 1.4-0.4 3.1-0.3 1.2 1.5-1.8 10-1.4 1.9-6.8 5-3.8 4-1.8 5.1-0.1 2.3 1.1 2 1.1 0.7 2.4 0.8 1.2 0.2 3.9 0.1 3.3-2 1.2-1.8 1.9-0.9 1.4 2 0 5.4 0.7 3.6-0.2 1-0.8 1-1.2 0.4-3.9 2.8-2.5 0.3-1.2 0.5 1.3 1.5 2.3 0 4.2 1.8 0.1 2.1-1.2 1.4-4.5-0.4-0.1 0.1-6.6-2.9-4.9-0.9 0.1-0.2 0.3-2.1-0.1-2-2.1-0.7-4.3-0.2-1.8 0.4-1.3-0.8-1-0.9-2.2-0.6-1.7-1.1-0.1-1.9 4.3-2.4 0.7-1.6-0.8-1.6-2.1-0.8-2.5 0.6-2.3 1.5-2.3 1.2-2.2-1.8 0-0.9-0.8-1.9 0.6-1.9 1.9-1.4 0.8-2-4.5-1.2-44.3 0.2-0.6 0.7-0.3 1.1-0.9 1.3-1.5 0.2-2.7-0.1-1.7-2.2-3.5-1.8-1.8-0.6-2.3 1-0.5 1.1-1.1 3.9-1.2 1.2-1.1 1.6-0.8 3.7-1.1 1.3-4.5 0.6-16.5-0.7-0.8 0.4 0 1.1-1.4 1.6-2.1 1.4-1.9 0.1-1.9-0.7-2.6 0.3-2.5-0.2-0.5-0.1 0.3-1.5 0.3-0.8 1.4-4.1 0.1-1.6-0.6-3.2 0-1.6 0.9-1.6 1.3-1.2 1-0.6 0.4-0.9-0.3-3.5-0.1-0.8-0.4-0.3-1-0.1-0.8-0.3-0.6-0.4-0.6-0.8-0.4-1.5 0.2-1.7 0.8-3.2-0.3-3.2-1.1-2.9-0.2-2.8 2-2.7 0.8-0.4 1-0.3 0.8-0.4 0.3-0.9-0.5-0.7-1.9-1.6-0.7-0.8-0.3-1 0.1-0.6 0.3-0.5 0.7-1.4 0.6-0.8 0.3-0.7 0.1-1.1-1.6-18.8 0.2-0.8 0.5-0.3 0.8 0 1.7 0.3 0.2-0.2 0.1-0.4 0.1-0.7 0.2-3.2-1.6-2.8-2.3-2.7-1.5-2.8-0.4-3 0.2-2.5 0.7-10.3-0.2-1.1-0.7-1.1-1.8-2-0.8-2.2-0.7-1 0-0.3z"
                          id="NGOG"
                          name="Ogun"
                        ></path>
                        <path
                          d="M50.9 450.5l0.5-0.4 3.9-3.5 1.5 0 1.5 0.2 6-1.4 1.8-1.3 1.4-1.7 4.1-3.4 1.8-0.6 0.5-0.8 1.2-1 1.5-0.9 3.1-2.7 1.7-1 1.7-0.5 1.2-0.2 1.2 0.3 0.7 0.8 0.9 0.5 0.8 0.9 0.9-0.2 9-4 3.4-2.6 3-1.5 3.3-2.5 15.6-7.9 1.7-1.3 1.5-1.6 0.7-5 1.9-3.7 3.4-2.5 3.7-0.3 3.4 1.5 2.2 2.8 1.7 3.4 2.9 2.5 3.4 1.8 9 3.2 5.5 1.3 2.1-0.1 3.7-2.3 1.3 3-2.6 3.7-2.5 1.5-1.9 1.9-1.2 2-1.7 1.6-0.9 4.6 1 4.7 6.7 15 2.7 4 2.6 10.3 2.7 4 1.7 1.6 2 1.3 2.8 4.4 2.2 7.3 0.9 1.5 1.3 0.3 1.2 0.8 0.6 2.6-0.2 2.6-0.6 1-0.4 0.4-1.7 0.3-1.3 0.5-1.4 0.9-1.3 1.1-0.2-0.3-0.6 0.6-0.5 0.7-0.4 0.4-2.2 1.6-1.6 1.6-3.1-0.6-2.7-4.5-2.1-1.9-2.4-0.9-1.6 1.7-1.4 2-0.8 0.6-0.7 0.7 0.1 1.7-3.9 2.8-5.1-1.4-1.3 3.5-0.2 5-0.4 2.2-0.7 2.2-1.3 1.9-0.1 2.3 1.6 1.7 2.1 1.3 1.6 2.1 1.3 2.4 1.4 1.9 0.5 2.1-5.2 27.6-2.3 0.4-2.3 0.2-2.4 0.8-2.1 1.4-4.7 1.2-9.3 1.2-4.6-0.2 2.1-3.5 2.8-3.9-0.9-4.5-0.5-1.1-0.2-1.2 0-1.5-0.5-1.3-2.2-1.2-2.2-1.6-0.2-1.4 0-4.2-2.6-3.7-7.5-0.2-2.3 1-2.2 1.2-2.2-1.3-1.3-3.7-2.8-2.1-3.1 2.1-3.1 7.6-3 2.6-4.3 0.2-4.1-1.4-5.4-4.9-3.4-6.2-2.5-3.2-3.1-2.6-1.5-4-0.1-1.6 2.8-7.7-0.5-6.8-2.8 0.1-1.1 3.3-0.8 4-2.1-0.4-1.3-4.1-0.4-8.6-1.9-3.6-7.3-0.2-6.6 4.6-0.5 0.3 0-0.3 0.1-0.6 0.8-1.4 0.3-0.7 0.3-4.9 0.9-4.8 0.2-4.6 0.2-1.4 0.6-1.3 0.8-1.2 0.6-1.5 0-1.6-0.5-1.7-1.5-3.1-0.6-1.7-0.3-1.9 0.1-1.4 0.6-3.2 0-0.7-0.2-1.4 0-0.7 0.4-1 1.5-1.7 0.6-0.9 0.6-2.6-0.1-2.2z"
                          id="NGOY"
                          name="Oyo"
                        ></path>
                        <path
                          d="M48.5 607.4l0.5 0.1 2.5 0.2 2.6-0.3 1.9 0.7 1.9-0.1 2.1-1.4 1.4-1.6 0-1.1 0.8-0.4 16.5 0.7 4.5-0.6 1.1-1.3 0.8-3.7 1.1-1.6 1.2-1.2 1.1-3.9 0.5-1.1 2.3-1 1.8 0.6 3.5 1.8 1.7 2.2 2.7 0.1 1.5-0.2 0.9-1.3 0.3-1.1 0.6-0.7 44.3-0.2 4.5 1.2-0.8 2-1.9 1.4-0.6 1.9 0.8 1.9 0 0.9 2.2 1.8 2.3-1.2 2.3-1.5 2.5-0.6 2.1 0.8 0.8 1.6-0.7 1.6-4.3 2.4 0.1 1.9 1.7 1.1 2.2 0.6 1 0.9 1.3 0.8 1.8-0.4 4.3 0.2 2.1 0.7 0.1 2-0.3 2.1-0.1 0.2-16.3-3-19.4-1.6-32.3 1.6-1.7-0.3-0.9-0.7-0.8-0.8-1.1-0.8 0.7-0.4 0.6-0.1 0.4 0.1 0.5 0.4 1.1-1.1 0.5 0.4 0.1 1.2 0.3 1.1 2.7-2.5 0.4 0.1 0.3 0.6 0.6 0 1-0.3 1.4-0.1 1.3-0.2 1.2-0.6 1-1.2 0.1-0.9-0.1-0.8 0-0.7 0.8-0.2 3.1 0 1.6-0.4 3.3-1 1 0.3 1.7-0.7 1.5-0.9 1.1-1.2 0.4-1.6 1-0.4 6.3-0.9-0.6-0.5-0.5-0.2-0.4 0-0.6 0.1-4.3-1-4.3 1.6-4 2.4-3.7 1.2-1.4 0-0.8 0.1-2.6 1.4-0.9 0.4-0.9 0.1-1 0.1-0.2-0.2-0.9-0.3-0.9 0-0.5-0.4-0.3-0.2-0.3-1-0.1-0.9 0.6-1.7 0-1-1.3 0.7-0.9 0.8-1.7 1.8-0.6 0.3-0.8 0-0.6 0.2-0.3 0.6 0.1 0.5 0.4 1.2 0 0.7-0.3 0.8-1 1.6-0.3 0.9-0.3 0.6-0.5 0.4-0.3 0.5 0.4 0.6 0.4 0.4 0.2 0.4 0.1 0.5 0.4 0.4-0.4 1.7-4.4 0.4-8.5-0.4-10 1.2-11.7-0.6-17 1.6 0.1-4.7 0.5-3.4z"
                          id="NGLA"
                          name="Lagos"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Lagos"
                        ></path>

                        <path
                          d="M884.8 264.8l-4.4 0.3-11 2.5-2.5-0.4-2.4-0.9-0.9-0.7-1-0.2-2.6 0.4-0.7 4.4 0.1 5.2-1 5.4-4.2 10.4-2.7 10.2-3.8 2.2-5.2-1.2-4.4-2.9-4.2-3.7-5.2-2.2-6.5-0.9-6.2 1.4-4.1 4.8-4.5 4.1-2.8 0.1-1.9 1.4-1.4 2.8-2.1 2.3-5.4 2.5-6.1 0.6-5.5 1.3-4.4 3.7-7.8 10.2-9.6 6.8-12.3-0.7-5.4-3.4-5.1-8.2-2.7-1.9-3.3-1.3-2.9-2-2.4-2.9-1.5-3.4 0.1-3.4 5.6-9.1-0.9-6.7 2.9-0.8 2.4-1.9 1.7-2.3 0.9-2.7-0.5-6.4 1-6.2 4.3-4.8 17.9-6.3 4.7-3.5 2.3-5.3-0.4-6.5 0.4-6.6 1.6-2.5 2.1-2.2 3.1-5.6 7.7-9.6-0.4-2.8-1.3-2.7-2.3-2.6-3-1-2.6 0.4-2-0.6 0.4-3.1 4.6-9.1 0.4-3.4-1.8-7.7 3.5-26.1-1.6-11.6 8.4-7.9 3.3-4.7 1.9-4.7-0.7-4.8-4-3-3.4-3.8-1.3-4.9 1.7-14.9 0.1-0.1 2 0 1.8 0.3 1.4 0.5 1.3 0.3 1-0.5 0.4-0.9 0.6-4.2 0.4-0.3 1.7-0.3 0.6-0.2 0.6-0.7 0.4-0.8 0.5-1.7-1.3-0.5 0.6-1.1 0.9-1.4 0.3-1.3 2.7-2.6 0.4-0.3 0.3 0.4 0.5-0.1 0.5-0.4 0.5-0.5 0.2-0.5 0.1-1.3 0.8 0.7 0.6 0.6 0.8 0.6 1.2 0.2 0.6-0.4 0.5-1.8 0.9-0.4 1.7-0.4 1.3-1 1.9-2.4 0.5-1.3 0.1 0 0.3-0.3 0.4 0.3 0.4 0.6 0.2 0.2 1.1 0-0.1-0.3-0.4-0.6-0.3-0.9 0.2-0.3 1-0.4 0.3-0.2 0.2 0 0.7 0.1 0.2-0.1 0-0.2-0.1-0.6 0.1-0.2 2.1-2.4 1-0.8-0.5-0.6-0.5-0.5-0.5-0.3-0.6-0.2 0-0.6 1.1 0.3 1 0.5 0.7-0.1 0.3-1.2 2.1 0.4 2.1-0.4 6.8-3.4 2-0.7 2.1-0.2 0 0.5-0.4 0.8 0.8 0.3 1.4-0.1 1.3-0.4 0 0.3 0 0.8 0.5-0.6 0.6-1.3 0.4-0.3 0.8 0.2 0.1 0.6-0.1 0.8-0.3 0.6 2-0.9 2.1-0.4 1.8-0.7 1.4-1.8-1.1-0.1-0.1-0.4 0.7-1.1 0.3-0.1 0.5 0 0.5-0.1 0.2-0.6-0.1-0.4-0.4-0.6 0.1-0.3 0.4-0.8 0.5-0.7 3-2.9 1.2-0.8-0.1-1.3 0.7-0.6 2.2-0.3 0.1-0.1 18.7 0.9 17.4 24.3 17.3 24.4 4.3 20.7 4.2 20.7 0.1 6 0.1 0.3 0.4 1.3 0 1.5-0.4 2.4 0 0.9 0.7 1.2 1 0.6 1.2 0.2 15.5 0.5 4.9 1.2 2.1 1.1 0.2 0.8-0.4 1.1 0.2 0.8 0.5 0.5 2.2 1.7 0.9 0.4 0 0.5-0.3 0.2-0.8 0.4 1.5 1 1.6 0.9 1.2 1 0.5 1.6 0.4 0.3 1-0.3 1-0.6 0.7-0.2 0.9 0.4 0.3 0.8 0.1 0.8-1.4 1.5-0.2 0.5-0.4 0.5-0.4 0.9-1.3 5.5 0.1 0.8-1.3 0.9 0.1 1.5 1.5 3.4 0.1 0.8 0 0.6-0.3 2.5-0.8 2.5-1.7 7.9-0.5 1.3-2.8 3.7-0.4 0.6 0.2 0.7 0.6 1 0.3 0.1 1.3 0 0.6 0.3 0.3 0.5 0.3 0.6 0.4 0.5 1.2 1.2 0.9 1.3 0.4 1.6 0 2-0.2 1.6-0.6 1.9-0.8 1.8-0.9 1.5-1.3 0.7-3.9 1.4-1.6 1-2.8 2.5-1.6 0.9-4.5 1.4-1.4 0.8-6.8 6.3-0.6 0.2-2 0.3-0.9 0.4-2.1 2.2-1.4 1-1.6 0.8-1.7 0.4-1.5-0.2-5.3-2.3-3-0.8-2.4 0-2.9 2.3-2.8 2.9-2.5 3.2-1.8 3.3-1.3 3.1-0.9 1.2-2.9 1.6-1.2 1.1-0.9 1.3-0.3 1.6 0.5 2.9-0.6 1.2z"
                          id="NGBO"
                          name="Borno"
                        ></path>
                        <path
                          d="M748.1 334l12.3 0.7 9.6-6.8 7.8-10.2 4.4-3.7 5.5-1.3 6.1-0.6 5.4-2.5 2.1-2.3 1.4-2.8 1.9-1.4 2.8-0.1 4.5-4.1 4.1-4.8 6.2-1.4 6.5 0.9 5.2 2.2 4.2 3.7 4.4 2.9 5.2 1.2 3.8-2.2 2.7-10.2 4.2-10.4 1-5.4-0.1-5.2 0.7-4.4 2.6-0.4 1 0.2 0.9 0.7 2.4 0.9 2.5 0.4 11-2.5 4.4-0.3-0.4 1-13.5 19.4-2.1 4.4-2.8 9.6-2.6 14.6-1.7 4.8 0 1 0.5 1.5 0.1 0.9-0.1 1.1-1.2 2.6-0.9 1.1-1.6 1.2-0.7 0.5-1.1 0.6-1.4 0.6-6 0.7-2.5 0.9-1.3 2.7 0 1.5 0.9 2.5 0.3 1.5-0.3 1.8-1.8 2.8-0.6 1.6 0.1 1.7 0.8 1.3 2.2 2.3 0.8 1.7-0.1 1.2-0.8 1.3-0.7 1.8-1 5.2-0.3 5-2.2 5.5-4.9 1.9-6 0.9-5.2 2.3-1 0.9-2.2 2.8-0.9 0.8-0.6 0.5-4.4 2.1-0.5 0.4-0.6 1.4 0.4 0.2 2.2 0.3 0.7 1.6 0.6 2.3-0.1 3-0.3 1.5-0.4 1.3-3.5 6.3-1.6 3.7 0 3 0.5 2.8-1.7 14.5-0.8 3.3-1.7 2.3-1 0.4-0.9 0-1-0.2-1.1 0-0.8 0.4-0.6 0.9-0.6 2.1-1.2 2.5-1.3 1.5-7.8 4.1-1.1 0.3-1.2-0.2-2.4-1.2-1-0.2-1.4 0.1-0.9 0.5-0.9 0.6-1.2 0.6-1 0.1-1.1-0.2-2.1-0.7 0.6 1.1 1.8 4.4 0.2 1 0.1 2.2-0.7 0.7-2.3 1.6-0.6 0.7-0.4 1-0.6 0.9-0.9 0.6-1.6 0.2-2.9-0.5-1.7 0.7-1.7 2.5-0.6 3.3 0.2 3.5 1.2 6.2-0.1 1.5-0.2 0.7-0.4 1-3.1 4.4-0.4 1.8 0 3 0.4 2.9 0.5 1.9 0.2 1.3-0.4 1.1-2.9 3-7.5 10.5-2.7 5-0.5 1.6-0.3 1.6 0.2 1.7 1.1 4.4-0.3 1.6-1 0.9-1.2 0.8-2 3-4.7 4.7-0.1-0.1-0.9-3.9-1.9-4-1-5.1 0-5.1-3.6-8.8-7.4-7-1.9-2.3-2.6-1.2-2.5 1.1-1.4 2.3-1.7 2.1-2 1.7-2.5-0.2-2-2.2-3.1-5.4-3.3-8.2 0.7-2.4 4.2-4.9 4.9-4.4 19.6-23.6 5.1-4.2 0.7-2.5-0.4-2.8 0.6-5.3 7.6-15.8-0.5-5.3-3.1-3.9-4.8-2.4-2.6-4.4-0.1-2.7 0.4-2.7-0.8-2.4-1.4-2.2-2.6-5.6-4.4-3.9-2.4-0.8-2.6-0.4-1.9-1.8-7-13.2 7-1.1 6.4-2.9 14.1-8.4 2.8-2.3 1.1-3.2-0.4-10.2 0.8-6.7z"
                          id="NGAD"
                          name="Adamawa"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Yola"
                        ></path>
                        <text
                          x="790"
                          y="360"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="20px"
                          stroke-width="0.5"
                        >
                          YOLA
                        </text>
                        <path
                          d="M716.3 368.8l7 13.2 1.9 1.8 2.6 0.4 2.4 0.8 4.4 3.9 2.6 5.6 1.4 2.2 0.8 2.4-0.4 2.7 0.1 2.7 2.6 4.4 4.8 2.4 3.1 3.9 0.5 5.3-7.6 15.8-0.6 5.3 0.4 2.8-0.7 2.5-5.1 4.2-19.6 23.6-4.9 4.4-4.2 4.9-0.7 2.4 3.3 8.2 3.1 5.4 2 2.2 2.5 0.2 2-1.7 1.7-2.1 1.4-2.3 2.5-1.1 2.6 1.2 1.9 2.3 7.4 7 3.6 8.8 0 5.1 1 5.1 1.9 4 0.9 3.9 0.1 0.1-4.5 4.3-4.7 7.1-1.5 1.4-1.4 1-0.6 0.7 0.4 0.4 1.8 0.4 1.1 0.9 3.8 5.5 2.9 3.2 1 1.9-0.7 1.7-0.8 0.3-0.6-0.1-0.7-0.4-0.8 0-1.1 0.3-0.8 0.5-3.2 2.9-1.2 0.8-0.2 0.7-0.1 0.7-0.5 0.6-0.5 0.2-1.2 0-0.8 0.2-0.8-0.1-0.3 0.1-0.3 0.4-0.3 1-0.3 0.4-4.4 2.8-4.6 4.3-1.4 1.9-0.4 2 0.5 1.2 1.6 1.9 0.4 1.3-0.2 2.1-0.5 2-2.2 5.2-1.8 2.5-2 1.1-3 0.3-2 1.7-1.2 2.5-0.4 3.2-0.5 1.7-1.5 1.4-1.9 1-1.9 0.4-0.8 0-1.7-0.4-0.8-0.1-0.3 0.2-0.8 0.7-0.4 0.2-0.6-0.1-0.8-0.5-0.4-0.2-2.3 0.3-4.7 0.5-2-0.3-1.3-1.2-1.4-3.6-1.3-5.9-0.3-3 0.2-3-0.3-3.6-1.4-3.1-2.6-2-7.1-1.3-2.4-2.5-1.5-3.3-0.7-3.5-1.2-3-2.5-1.7-6.3-2.4-5.3-2.8-2-0.6-1.3-1.1-0.4-3.8-1.4-1.8-1.1 2.2-1 2.7-0.6 2.9-0.5 5.9-0.3 0.2-0.4 0.1-0.5 0.4-0.9 1.2-0.6 1.1-0.3 1.2-0.1 1.7-19.5 0.3-2.1-0.7-1.6-1.2-0.8-1.5-1.1-5.6-0.6-1.3-1-0.2-1.8 1-18.6 15.8-1.7 0.8-1.5-0.5-1.5-0.7-1.8-0.1-1.4 1.6-5.8 18.2 0 0.3-1 0.7-2.7 0 0-0.1 1.8-7.3 0.9-12.8-0.3-4.8 2.5-13.3 2.3-4.5 3.1-3.8 3.8-2.8 3.3-3.1 0.5-8.9 3-9.2-3.3-8.9-7.8-6.9-6.8-8.5-8.6-6-11.5-1.3-11.7 0.3-3 0.6-5.1 2.3-2.4 0.6-0.9-1.7 4.2-6.3 2.6-2.2 11-7.4 1.6-1.3-0.3-2.1-0.6-1.4 0.2-1.3-0.3-3.9-4-5.1 0.3-2.4 0.8-2 1.3-1.7 1.8-0.8 3.8 1.3 1.7 0.9 2.2 0.4 2.3 0.7 2.1 0.3 2.1-0.1 3.1-2 2.1-3.3 4.1 0.3 5.7-0.4 5.5-1.6 4.9-3.7 4.4-4.5 5-3.6 5.4-3 2.1-1.9 4-4.8 1.7-2.7 3.7-4.4 17.5-4.3 12-5.9 2.6-5-0.1-2.9-1-4.8 0.6-2.3 0-2.3-2.2-7.3-1.3-2.1-0.6-2.2-0.8-5.8 0.5-4.9-0.5-4-1.6-3.7 4.1-2.7 9.6-0.3 9.3-4.3 5-0.9 5.2 1.3 5.3 0 8 0.6 26.6-1.1z"
                          id="NGTA"
                          name="Taraba"
                        ></path>
                        <path
                          d="M537.8 497.4l-4.2 6.3 0.9 1.7 2.4-0.6 5.1-2.3 3-0.6 11.7-0.3 11.5 1.3 8.6 6 6.8 8.5 7.8 6.9 3.3 8.9-3 9.2-0.5 8.9-3.3 3.1-3.8 2.8-3.1 3.8-2.3 4.5-2.5 13.3 0.3 4.8-0.9 12.8-1.8 7.3 0 0.1-0.9 0-2.2 0.5-1.2 0.9-1.7 3.4-1.2 1.2-1.6 0.8-3 1.1-1.5-2.5-2.2-3.9-9-10.7-6.7-3.4-12 2.3-4.3 0-2-0.4-1.5-1.3 0.7-4.6-1.8-3.9-9.1-5.3-5.5-2-5.2-0.4-4.9 1.8-0.9 2.5 0.7 2.9-1.3 2.1-2.6 1.4-3.2 0.8-3.3 0.1-3.1-0.5-2.9 0-2.3 1.7-2 2.2-2.3 1.2-2.5 0.3-1.7-2-1-2.5-0.6-3-0.8-1.2-1.5-0.2-0.3 0.8-0.9 1.3-1.7-0.1-1.7 0.4-2.9 3.8-2.9 0.7-3 0-3.2 0.4-1.2 2.5-0.7 6.4-3.4 4.6-5.2-3.2-2.5-5.3 2.6-7.1 0.1-3.7-0.9-3.7-1.9-3-3.1-1.5-2.8 0.7-2.2 1.7-3.1 0.3-2.8-1.4-2.9-2-2.5-2.4-2.1-2.6-2.9-6.1-0.8-3.1 2.9 1.4 3.3 2.7 2.4 1.1 2.1-0.6 0.2-3.5 1.2-3 10-5.5 3.2-5.2 1.3-6.1 0.2-2.5 0.9-2.2 1.5-2.7-1.9-1.3-2.8 0.4-2.5-1.4-0.9-2.9-1.2-9.2 0.2-8.8-0.3-2.8-1.5-2.7-2.2-2.3-2.3-3.3-0.9-3.8-0.2-4.1 0.4-4.4 3.8 1 4.9 0.5 3.6 1.3 2.6 0.6 5.4 0.6 2.6 0.7 3.8 2.3 1.3 0.5 6.4 1.1 2 0.7 4.1 2.1 2.4 0.7 2.4 0.3 2.2 0.6 1.7 1.9 3.6 2 1.8 1.4 0.9 0.5 0.9 0.3 0.6 0.1 1-1.3-0.5-2.6-3.6-7.9-1.8-5.5 1.3-5.4 4.2-3.6 10-1.1 15.3 5.1 5.5 1.2 8.3 0.3 2.8-0.2 0-0.5 14.4 10.8z"
                          id="NGBE"
                          name="Benue"
                        ></path>
                        <path
                          d="M562 611.7l-0.5 0.2-2.2 1.4-2.3 4.4-2.1 1.3-1.2 0.1-1-0.1-0.9 0.1-1 0.5-1 1.2-2.2 4.6-1.9 2.7-10.4 8.4-7 7.3-1.6 2.4-1 1-1.2 0.6-0.4 0.5-0.2 2.2-0.2 1-1.4 0.2-1.6-0.6-1.7-0.3-1.3 1.3-1 1.3-2.7 1.8-0.8 1.2 0.2 1.6 0.8 1.2 0.7 1.3-0.4 1.9-1.3 1.7-1.3 1-0.6 1 1 2 1.5 1.5 1.7 1.3 1.4 1.5 0.8 2-0.4 1.8-1.1 1.5-1.4 1.4-1.2 1.5-0.4 1.6 0.1 1.5 0.2 1.5 0.1 1.6-0.5 1.7-1.6 3.2-0.5 1.8 0.1 1 0.6 1.9 0.1 0.8-2.1 10.3-0.5 1-0.8 0.4-0.9 0.1-0.8 0.4-0.8 0.8-1.5 2.3-0.4 1-1.2 3.3-0.7 1.5-1.1 1.6-3 4.7-0.4 1.4-2.1 1.5-0.7 1.2 0.3 1.6 0.2 1.1 0.3 1.1-1.3 1.2-0.1 0-0.1-0.4-0.5-0.3-0.7-0.2-0.6 0.3-0.8 0.7-0.7 0.8-0.3 0.6-0.1 0.6-0.7 1.5-0.2 0.8 0 0.7 0.5 1.1 0 0.7-0.7 1.2-0.8 0.4-1-0.2-1.2-0.3-0.3 0-0.7 0.1-0.6-0.2 0.4-0.7 0.3-0.5 0.3-0.8 0.2-0.8-0.3-0.3-0.7 0.2-1.5 0.7-1 0.2-2.2-0.9-0.1-2.1 0.7-2.7 0.4-2.6-0.5 0-0.5 2.6-1.7 1.3-2.1-0.1-2-1.8 0.2-0.3 0.3-0.7-0.5-0.2-1.6-0.8 0.4-1.1-0.6-0.8-2.1-1.5-1.8-1.1-0.1 0-0.4-1.3-0.9-1.6-0.5-0.7-1-0.3-0.8-0.3-0.9-0.9-0.8-0.8-0.3-0.6-0.5 0 0 0.5 4.1 3.9 1.1 1.3 1.9 3.7 0.3 1.7-1.2 0.9 0.5 1 0.8 1.2 0.8 1 0.7 0.4 0.4 0.3-0.9-0.1-2.9-2.2-8.9-9.3-2.7-3.8-2.1-3.8-1-4.3 0.5-9.3-1.2-1.4-3.4-2.1-2-0.5-4.4 0.7-1.5-1.1-0.9-1.5-1.2-3.2 2.1-2.4 3.6 0.7 0.9-2.7-3.6-7-1.8-8 0.7-4.3-1.3-3.5 0.3-1.9 0.7-1.7 1.2-1.5 1-1.5-0.2-1.7 0.1-1.8 1-1.1 2.7-4.1 0.9-3.4-1.2-2.4 0.9-1.9 3-1 2.9 0.9 1.5 3.4 1.9-0.1 1.4-1.3 3.5-1.7 1.2-1.5 1-1.6 2 0 2.2 1 1.2-2 1.4-5.7 1.5-2.3 1.7-2.3 4.3-4.3 0.6-5.2-1.4-2.2 0.5-2.6 4.8-2.6-0.3-2.4-1.6-2.1-0.8-2-0.3-2.4-1.3-1.5-0.3-0.8-0.5-0.8-1.1-0.6-1-0.8-2.9-3.3-1.1-4.2 2.5-0.3 2.3-1.2 2-2.2 2.3-1.7 2.9 0 3.1 0.5 3.3-0.1 3.2-0.8 2.6-1.4 1.3-2.1-0.7-2.9 0.9-2.5 4.9-1.8 5.2 0.4 5.5 2 9.1 5.3 1.8 3.9-0.7 4.6 1.5 1.3 2 0.4 4.3 0 12-2.3 6.7 3.4 9 10.7 2.2 3.9 1.5 2.5z"
                          id="NGCR"
                          name="Cross River"
                        ></path>
                        <path
                          d="M223.7 207.8l-1.5 1-1.7 0.1-0.8-1.2-1.1-0.7-0.9 0.3-0.9 0.3-1.2-0.7-1.6-0.4-1.6 0.4-14.4 6.5-2.6 3.3-3.3 2.1-3.4-1.1-2.5-2.8 0.7-7.4 3.3-7.2 2.6-12.1-0.5-29.8 2.7-4.8 5.4-1.4 5.2 1.7 3.4-1.8 0.3-5.8-2.3-12.5 0.3-2.9 0.8-2.9 0.6-5.6-1.7-4.9-2.5-4.4 0.4-3.1 0.9-2.9 0.4-1.1 0.3-1.2 0-1.5 0.3-1.4 1.1-2.3 0.2-2.4-1.3-1.7-1.9 0.7-1.5 1.8-1.1 2.1-2.4 1.4-2.8-0.3-2.8-1.3-2.5-1.7-2.6-1-2.8-0.7-5.1-1.9-4.7-2.8-2.3-2.2-2.3-1.9-2.8 0.6-2.6 1.3-4.9-0.8-5.8 0.1-0.6 0.2 0.2-1.8 0.2-18.6 4.9-0.2 2.2-0.4 2.2-1.1 11.9-11.4 3.5-2.6 4.1-1.6 9.1-2.2 15-3.7 2.5-0.3 1.7 0.8 1.7 1.6 1.7 0.8 4.4 0.3 7.7-1.4 10.9 0.4 2.6-0.5 0.8-0.3 2.4-1.7 1-1.2 1.3-2.9 0.8-1.2 2.1-1 11.2-2 2.5 0.5 21.4 8.6 21.5 8.6 0.7 0.3 0.5 0.5 0.5 0.2 0.7-0.2 4.4-2.5 1.5-0.3 4.1 0.9 1.4 0.3 5 2.9 10.7 10.2 12.3 13.6 6.2 11.4-3.8 3-5.9 3.4-7.4 0-7.4-1.8-1.2-1.2-1.2-1.4-1.4-0.5-1.4-0.4-1.6-0.2-3.6 0-1.1 1-0.3 1.9-0.1 2.1-0.9 3.2-1.9 0.5-2.9-1.2-5.5 0.7-4.8 2.7-0.9 2.2 1.3 13.3-2.2 4.2-2.7 1.3-2.8 0.7-17.1 1.7-3.8 3-2.9 4.6-3.9 5-3.6 2.5-0.5 5.1 1.5 5.7 0.3 6.1-3.7 4-23.2 1-11.1-1.9-2.8 9.3-0.6 36.3z"
                          id="NGSO"
                          name="Sokoto"
                        ></path>
                        <path
                          d="M299.7 251.8l-0.7-11.8-5.8-9.3-2.9-1.1-1.5-2.4 1.9-5.8 0.4-5.3-3.6-3.5-2.8-1-5.6-0.9-1.3 0.3-1.2 0.7-11.5 0.8-4.5-1-6.6-2.9-1.1-2.2-1.8-1.5-4.3 0.6-1.8-0.1-1.6-0.7-1.7 0.1-1.3 1.3-0.6 1.8-1.4 0.8-1.7 0.1-4 1-1.6-0.3-1.2-1.1-3.1-1.2-3.1 0.6 0.6-36.3 2.8-9.3 11.1 1.9 23.2-1 3.7-4-0.3-6.1-1.5-5.7 0.5-5.1 3.6-2.5 3.9-5 2.9-4.6 3.8-3 17.1-1.7 2.8-0.7 2.7-1.3 2.2-4.2-1.3-13.3 0.9-2.2 4.8-2.7 5.5-0.7 2.9 1.2 1.9-0.5 0.9-3.2 0.1-2.1 0.3-1.9 1.1-1 3.6 0 1.6 0.2 1.4 0.4 1.4 0.5 1.2 1.4 1.2 1.2 7.4 1.8 7.4 0 5.9-3.4 3.8-3 1.9 3.4 4.5 5.2 2.7 2.6 2.5 1.8 2.3 0.9 2.5 0.3 5.6 0 1.4-0.2-1.3 8.1 2.4 32 1.7 3.9-0.4 4.7 2.1 4.1 1.1 3.9 0.4 4 0.7 2.2 0.5 2.4-0.5 2-1.7 4.5-1.2 2.4 1.5 1.9 2.6 1.2 4.2 3.4 0.8 4.6-2.3 0.9-2.4-0.7-1.3 1.4-0.4 2.5-1.8 1.7-3.2 2.6-1.2 0.6-0.5-0.2-0.6-0.7-0.5-0.2-5.6 0-4.4 2.1-2.9 13.8 2.6 4.8-0.5 2.6 0.3 2.7-0.7 3.6-1.2 3.4-1.2 2.3-1.6 1.5-5.3 3.4-1.6 2-0.8 2.3-1.4 6.9-0.8 1.7-1 1.3-1.1 1-1.4 0.8-6.3 2.5-0.7 0.3-0.7 0.2-1.2-0.2-0.8 0.1-5 1.5-1.7 0-1.7-0.4-5-1.8-1.6-0.2-1.5 0.6-0.9 1.1-1.4 2.9-0.9 1.2-0.8 0.5-1.8 0.7-0.8 0.5-0.6 1-0.1 1 0 1-0.3 1-1.1 1-3.5 1.2-1.1-5.1-5.8-9.8-3.3-4.3z"
                          id="NGZA"
                          name="Zamfara"
                        ></path>
                        <path
                          d="M781.6 99.4l-0.1 0.1-1.7 14.9 1.3 4.9 3.4 3.8 4 3 0.7 4.8-1.9 4.7-3.3 4.7-8.4 7.9 1.6 11.6-3.5 26.1 1.8 7.7-0.4 3.4-4.6 9.1-0.4 3.1 2 0.6 2.6-0.4 3 1 2.3 2.6 1.3 2.7 0.4 2.8-7.7 9.6-3.1 5.6-2.1 2.2-1.6 2.5-0.4 6.6 0.4 6.5-2.3 5.3-4.7 3.5-17.9 6.3-4.3 4.8-1 6.2 0.5 6.4-0.9 2.7-1.7 2.3-2.4 1.9-2.9 0.8-2.8 0.3-5.4-0.5-0.6-2.3-0.6-5.6 1-17.7-0.5-2.6-1.6-2-7.9-8.1-3.7-5-4.2-4.5-4.8-3.7-10.4-5.1-10.5 2.7-3.7-0.5-2-2.7 2.6-11.9-0.4-6.5-9.1-22.6-2.3-12.4-0.1-5.4-0.5-3.3-1.4-3-1.6-2.5-0.4-2.7-0.1-3.1-1.2-6.2-1-2.9-4.3-4.2-5.2-3.6-1.6-5-1.4-11-2.3-5-2.1-1.6-2.6 0.1-2.8-0.6-2.7-1.3-2.5-0.2-5 1.4-3.3-0.5-0.7-1.9-2-7.8-1.9-3-3.2-1-3.4 0.9-7.1 2.9-3.7 1-5.3 2.2-1.3 1-0.9 2.1-1.2 1.9-6.6 2.9-7.2-2.4-2.1-0.5 13-15.5 2.6-2.4 1.4-1 0.8-0.2 0.4 0 0.3 0 0.6-0.7 0.4-0.8 0.3-1.9 0.3-0.8 1.3-1.3 14.4-8.1 3.2-1.3 36.8-8 2.1-0.4 7.3-0.6 13.7 1.6 36.9-0.2 22.9 5.9 8.4 3.4 10.5 6.5 3.5 2.8 1.5 0.7 4.5 1.1 2.5-0.2 1.1-0.2 1.6-1.1 1.2-0.3 3.8 1.4 0.9 0.5 0.3 0.5 0 0.4 0.2 0.3 0.6 0.1 0.2-0.2 0.4-0.4 0.4-0.4 0.8-0.1 0.7 0.5 0.6 0.7 0.5 0.3 0.8-0.4 1.2 0.4 2.7 0.1z"
                          id="NGYO"
                          name="Yobe"
                        ></path>
                        <path
                          d="M378.2 105.9l0.4-0.1 1.7-0.8 3.5-3.2 4.7-5.5 1.6-0.3 7.9 1.5 2.8 0 2.3-0.8 27.6-16.7 2.6-1.1 2.6-0.3 19.2 2.8 2.1 0.8 0.8 0.6 1.8 1.7 2.1 1.3 2.6 2.1 1.1 0.5 2.2 0.6 0.1 0 1 0.5 1 0.9 1.9 2.3 7.5 6.9 0.6 0.4 0.8 0.3 0.2 0 0.4-0.2 0.8-0.5 0.9-0.2 1.9-0.3 0.9 0 2 0.5 1.8 0.9 3.3 2.5 1.5 1.6 2.2 3.6 1.3 1.6 2.8 1.6 19.9 6 2.7 0.3-0.1 0.7-0.4 1.2-1.3 0.5-0.9 0.9-0.7 1.1-0.6 1.5-0.8 1.3-3.4 2.7-3.6 1.9-4.1 1-3-0.3-1.1-1-1-1.2-2.3 1.4-1.8 0.1-1.9-0.8-1.7-1.1-2.1-3.5-1.3-4-1.4-1.4-11.7 0.5-5-0.6-5.4 0.1-8.1 1.3-1.1 2-0.6 5.2 0.2 5 4 2.5 6 0.1 1.6 1.8 0.9 2.3-3.7 0.1-3.5 1-1.8 3.3-2.5 7.5-2.8 2.6-13.3 5-5.8 4.1-0.9 3.5 0.7 7.5-0.4 16.2 1.6 5 0.3 2.5-0.1 1.5-0.4 1.4 0.3 1.2 0.7 1 1.9 4.8 0.2 3-3.3 0.8-4.3 2.2-3.5 0.9-2.4 2.8-1.2 3.7-0.5 3.8 1.1 3.9 5.2 4.5-2.6 4-6.1 2.5-2.2-0.9-1.5-2.1-2.6-1.9-2.9-1.3-5.5-1.1-4.8 2.8-1.2 2.5-0.4 2.8-2.1 1.1-2.7-1-5.8 0-1.3 4.1 1.3 2 0.1 2.2-1.9 2-2.4 1.3-2.6-0.3-3.9-4.1-2.6-1.6-5.6-1.5-0.1-2.1 2.1-2.3 1.2-0.9 0.2-1.5-0.9-1.8-1.6-1.2-4-0.1-1.9-0.5-3.4-1.7 1.2-3.4 0.7-3.6-0.3-2.7 0.5-2.6-2.6-4.8 2.9-13.8 4.4-2.1 5.6 0 0.5 0.2 0.6 0.7 0.5 0.2 1.2-0.6 3.2-2.6 1.8-1.7 0.4-2.5 1.3-1.4 2.4 0.7 2.3-0.9-0.8-4.6-4.2-3.4-2.6-1.2-1.5-1.9 1.2-2.4 1.7-4.5 0.5-2-0.5-2.4-0.7-2.2-0.4-4-1.1-3.9-2.1-4.1 0.4-4.7-1.7-3.9-2.4-32 1.3-8.1z"
                          id="NGKT"
                          name="Katsina"
                        ></path>
                        <path
                          d="M574 118.7l2.1 0.5 7.2 2.4 6.6-2.9 1.2-1.9 0.9-2.1 1.3-1 5.3-2.2 3.7-1 7.1-2.9 3.4-0.9 3.2 1 1.9 3 2 7.8 0.7 1.9 3.3 0.5 5-1.4 2.5 0.2 2.7 1.3 2.8 0.6 2.6-0.1 2.1 1.6 2.3 5 1.4 11 1.6 5-10 6.7-4-1-2.3-1.5-5.7 1-2.4 0.9-1.7 1.7-1.1 3.3-0.7 3.4-5.5 15.5-0.5 2.5 0.7 3.2-1.2 2.6-23.1 8.9-2.5 1.6-2.5 1.2-6.4 0.5-4.1 3.7-1.6 5.7 3.2 2.2 4.7-1.3 2.7-0.3 2.6 0.6 1.2 2.6 1.1 5.5 0.1 2.6-2.5 4.8-0.3 2.5 1.5 2.1 2.5 0 1.3-0.4 3.1 5.5 7.3 9.7 5.5 2.2 12.1 2.3 6.4 0.3 5.5 1.8-0.4 2.5-1.8 2.1-2.6 1.6-8.4 3.3-1.5 5.2 0.8 2.8-2.1 1.3-2.9-1.1-2.6-1.3-12 0.9-4.3-1.8-1.8-4.3 0.7-5 0-5-1.7-4.6-3.3-3.1-4.4 1.1-9.8 0.7-3.8-1.3-3-3.8-4.7 0.7-4.8-0.3-4.8-2-4.5-1.2-4.6-0.1 0.2-1-0.1-2.1 0.1-1.1 0.7-2.3 1.2-2.1 6.7-6.1 0.7-1.8-1.7-1-1-0.3-1.7-1.1-2.1-2.2-1.1-1.7-1.7-4.4-0.9-0.6-2-0.3-3.3 0.3-1.2-1.1 1-4.7 2.8-4.1 0.6-1.8 0.4-1.8 0.9-2.5 0.2-2.6-1.2-4.6-0.8-2.3-3.5-0.4-2.7 1.9-4.7 0-0.1-2-0.5-1.9-0.6-0.3-3.1 0.5-1.8 0.7-0.8-0.3-0.7-0.6-1.1-1.7 0.7-1.2 0.8-1 0.3-1.4 0-7.1-3.2-4-4.8-0.5-4.2-1.5-0.6-2.3 0.1-2.7-1-2.1-1.9-1.3-2-1.1-1.8-1.4-0.7-2.7 0.1-3-0.3-2-1.8-0.8-4.9-1.3-4.5-0.7-4.5 0.9-3.8 2-2.3 3.4-1.3 3.8-0.9 1.5-1.3-0.8-0.3-1 0-1.2-0.6-1.3-3.8-6.9-0.9-2.3-1.6-1.8-6-0.1-4-2.5-0.2-5 0.6-5.2 1.1-2 8.1-1.3 5.4-0.1 5 0.6 11.7-0.5 1.4 1.4 1.3 4 2.1 3.5 1.7 1.1 1.9 0.8 1.8-0.1 2.3-1.4 1 1.2 1.1 1 3 0.3 4.1-1 3.6-1.9 3.4-2.7 0.8-1.3 0.6-1.5 0.7-1.1 0.9-0.9 1.3-0.5 0.4-1.2 0.1-0.7 22.1 2.6 2.8 0 4-1.2 1.4-0.1 16.1 1.9 1.6-0.1 0.5-0.2 0.8-0.6 0.9-0.7 0.5-0.6z"
                          id="NGJI"
                          name="Jigawa"
                        ></path>
                        <path
                          d="M183.5 619.1l0.1-0.1 4.5 0.4 1.2-1.4-0.1-2.1-4.2-1.8-2.3 0-1.3-1.5 1.2-0.5 2.5-0.3 3.9-2.8 1.2-0.4 0.8-1 0.2-1-0.7-3.6 0-5.4-1.4-2-1.9 0.9-1.2 1.8-3.3 2-3.9-0.1-1.2-0.2-2.4-0.8-1.1-0.7-1.1-2 0.1-2.3 1.8-5.1 3.8-4 6.8-5 1.4-1.9 1.8-10 2.9-1.5 1.2-1.7 0.5-1.9 2.1-3.6 3.2-2.5 3-0.9 2.8 1.2 3.9 2.5 0.9 0.4 2 0.2 0.8-0.6 0.2-1.6-0.2-1.8 0.3-2-0.1-5.8 0.7-3.6 1.3-3.6 3.3-1.7 3.7-1 0.1-3.1 5.3-1.7 2.8-0.1 8.3 0.6 5.4-0.3 3.8 1.1 1.9 3.8 1.6 5.2 4.3 1.7 7.9-6.7 4.2-9.8 1.4-7.2 1-2.2 3.2-3.6 2-1.1 1-1.3 0.7-1.4 2-1.1 2.1 0.9 1.8-0.7 1.4-2.2 6.1-1.1 2.3 1.1-0.5 3 3.8 5.9 4.7 5.1-1.4 2.4-1.7 2-0.9 0.4-2.1 0.5-1 0.9-0.7 2.7 2.2 1.5 0.4 1.3-0.8 1.6 0.3 2.4 0.5 1.1 0.2 1.7-0.7 2.5-1 1.1-1.3 0.8-1.8 1.6-1.7 1.9-0.1 1 0.3 0.8-3.5 8-0.5 1.8-1 1.3-2 2.1-1 2.8-0.2 2.7 1.1 2.3 0.3 0.9-0.3 0.7-0.4 0.2-0.3 0.5 0 1.2-1.7 0.4-0.7 1.9-0.9 4.9-0.4 1-1 1.8-0.9 0.6-1.2 0.4-2.4-0.5-1-0.9-2.2-0.2-3.7 3-1.7 0.3-2-5 0.8-2.2 1.2-1.9-3.4-2.7-21.3-0.1-1.2 0.6-0.9 1 0 2-1.3 1.6-0.9 2.1-2.7 2.6-2.4 2.9-0.8 1.6-0.3 2.5-0.3 1.1 0 2.3 0.4 0.7 0.6 0.3 1.3 2.1 1.4 4-1.8 4-1.3 1.9-0.5 2.3-1.1 1.8-1.9 1.1-1.7 0.5-1 1.6-0.4 2.3-0.4 0.9-0.5 0.5-0.2 0.6 0.4 0.7 1.6 0.9 1.8 1.6 1.6 1.9 0.2 1 0.7 0.3 0.9 0 0.9 0.4 0.9 0.6 1.4 2.2-0.1 2.4-8.4 20.6-0.1 0.1-8.8-11.5-1.6-1.5-3-1.3-1.3-1.5-2-3.1-2.6-2.7-2.3-1.9-5.7-3.6-2.5-1.6-4.7-4.4-2.9-1.8-1.2-0.6z"
                          id="NGON"
                          name="Ondo"
                        ></path>
                        <path
                          d="M222.1 654.6l0.1-0.1 8.4-20.6 5.3 2.6 3.6 4.1-0.7 5 0.6 4 1.5 1.1 1.4-0.5 4.3-3.8-0.4-2.5 0.8-1.8 4.9 0.2 2.3-0.4 2.8 0.2 2.9 2.1 1.4 0.6 0.8 0.1 0.7-0.6 0.5-1 4.2-2.6 4.7-0.2 8.8 4.8 4.1 4.5 2.6 1.4 2.1 1.6-0.3 2.8-1.7 2.7 0.4 0.9 0.8 0.7 0.4 0.9-0.3 0.9 0.1 1.2 1.3 0.4 1.4 0 7.4-1.6 3.9-2.8 3.1-3.7 4.2-3.2 3.1-3.6 0.9-2.9 0-3-1-0.9-1.4-0.3-4.5-4.2-2.4-3.8-0.9-3-0.2-2.6-2.4-4.2 0.2-2.8 1.1-2.1 1.8-1.7 2.5 0.3 2 2 1.5 2.4 2.1 0.1 3.2-4 2-1.2 7.1-3 9.2-5.6 4.6-1.9 2.8-0.1 2.6 0.5 2.2-0.7 2.3-2.9 0 2.4 0.4 2.2 2.1 7.5 0.4 4.2 1.4 3.7 0.3 3 0.3 1 1 1.9 0.4 1.1 0.1 1-0.2 3.4-0.3 1-0.5 0.6-0.8 0.4-1 0.4-1.5 1.2-0.3 1.7 0.3 4-1.1 3.9 0 0.7 0.1 1.3-0.1 0.7-0.3 0.6-3 4.1-1.5 2.6-0.8 1.9-0.5 2.1-0.2 3.2-2 8.8-1.5 3.5-0.3 1.6-0.3 2.1-0.4 1-0.6 0.8-1.4 1.6-0.5 0.3-1.3 0.5-0.5 0.4-0.7 0.8-0.5 0.3 0.1 0.2 1.3 3.3 0.2 1.6-1.2 0.7-9.8 1.5-1.3 0.4-1.4 1.1-0.7 0.6-0.5 0.7-0.4 0.8-0.2 0.9 0 1.1-0.2 0.4-1.3 0.4-3.2 0-1.5 0.5-0.6 1.8 0.2 0.8 0.7 1.2 0.2 0.6-0.4 0.8-0.9 0.5-1.8 0.5-0.6 0.5-0.4 0.5-0.6 0.4-1 0.2-0.9-0.1-1-0.3-0.8-0.1-0.7 0.3-2.2 3-1.2 0.6-2.1-0.2-1.5-0.7-1.6-1-2.6-2.3-1 0.5-2.5 3.6-2.1 1.1-2.3 0.4-1.4-0.3-1.4 0.5-1.4 0.6-1.4 0.5-2.6 1.8-2.8 1.4-1.1 0-1.3 0.2-1.9-0.3-1.4-1.1-3.9-2.1-3.5-1.2-2.9-1.9-2-1.7-0.5-1.2 1.6 0.2 1.6 0.4-0.6-1-2.1-2.2-0.7-0.5-0.3 0.3 0 1.4-0.2 0.3-0.7 0.1-0.6 0.1-1.1 0.4-1-0.5-1.8 0.3-0.8-0.4-0.1-0.6 0.1-2.7-0.3-3.5-1.6-6.9 0.4-1 1.8-0.4 5-0.1 1.4-0.4 0.2 0.7 0.2 0.5 0.7 0.9 0.6-0.4 0.5-1.2 0.5-0.5 0.4-0.3 2.6-1 1.3-0.3 1.1 0.1 0.8 0.5 0.5 0-0.6-0.9-1.8-1.6-0.7-1.2-0.3-1-0.1-1.3 0.2-1.2 0.4-0.9 1-0.6 1.2-0.3 2.5 0.1 0.9-0.4 0.9-1 1.1-1.7-1.2 0.5-1 0.9-1.1 0.6-1.4-0.5-0.2 0.4-0.5 0.3-0.4 0.4-1.7-0.4-1.8 0.9-1.1 1.7 0.5 2-0.9 1.8-1 1.2-1.2 0.3-1.6-0.7-0.4-0.5-0.2-0.5-0.3-0.4-0.9-0.1-0.4 0.4 0.2 1 0.5 1 0.5 0.7-4.4-0.3-8.6-2.8-0.3-0.4-0.4-0.9-0.2-0.4-2.4-2.2-1.6-1.1-0.6-1.6-0.1-1.6 0.2-0.8 0.5-0.2 1.2-1.4 0.7-0.4 0.5-0.1 7.5 0.3 2.8 0.4 1.5 0.9 0.6 0 0.7-1.1 1.3-2.7 0.6-0.9 0.9-0.4 1.2 0 1.2 0.4 0.8 0.6 0.2 0.5 0.4 1.7 0.2 0.4 0.8-0.1 0.4-0.2 0.1-0.5 0-0.8-0.6-1.2-1.2-1.3-1.6-1.1-1.3-0.6-1.4 0.1-0.8 0.7-0.9 2.4-0.8 0.7-1.2 0.6-1.4 0.3-1.3-0.1-1.4-0.8-0.6-1.1 0-1.3 1.4-4.1 0.2-1.1-0.1-1.5-0.5 0-2.1 5.7-0.8 1.5-1 1-1.3 0.5-1.8 0.2-0.8 0.2-1.8 1-1.9 0.7-0.4-0.2-1.1-0.7-1.1-1-1.2-1.5-1-1.6-0.7-2.1-0.7-1.1-0.7-1.4-0.3-1.7 0.2-1.6 0.5-1.7 0.7-1.4 0.9-0.6 0.9 0.3 1.5 1.2 0.6 0.2 0.4-0.5-0.2-0.7-0.3-0.8 0.1-0.7 2.4-2.1 6.2-2.3 1.7-2.9-1.6 0.3-2.6 2.3-3 0.9-5.7 3.1-1.1 0.8-3.8 3.5-0.8 0-2.8-6.3-0.4-0.4z"
                          id="NGDE"
                          name="Delta"
                        ></path>
                        <path
                          d="M256.8 709.5l2 1.7 2.9 1.9 3.5 1.2 3.9 2.1 1.4 1.1 1.9 0.3 1.3-0.2 1.1 0 2.8-1.4 2.6-1.8 1.4-0.5 1.4-0.6 1.4-0.5 1.4 0.3 2.3-0.4 2.1-1.1 2.5-3.6 1-0.5 2.6 2.3 1.6 1 1.5 0.7 2.1 0.2 1.2-0.6 2.2-3 0.7-0.3 0.8 0.1 1 0.3 0.9 0.1 1-0.2 0.6-0.4 0.4-0.5 0.6-0.5 1.8-0.5 0.9-0.5 0.4-0.8-0.2-0.6-0.7-1.2-0.2-0.8 0.6-1.8 1.5-0.5 3.2 0 1.3-0.4 0.2-0.4 0-1.1 0.2-0.9 0.4-0.8 0.5-0.7 0.7-0.6 1.4-1.1 1.3-0.4 9.8-1.5 1.2-0.7-0.2-1.6 7 0.6 2.2 2.6 0.3 0.4 0.2 0.3-0.1 0.6-0.2 0.4-0.7 0.6-0.1 0.3-0.4 0.2-1.4 0.3-0.3 0.5-0.2 0.8-0.5 0.8-2.5 3.2-1.9 1.3-1.6 1.6-1.1 2.4-0.4 3.5-0.6 1.6-1.3 0.7-0.5 0.7-0.5 1.6-0.3 1.9 0 1.5 0.2 0.9 0.3 0.8 0.4 0.8 0.6 0.7-1.3 1.4-0.8 1.7-0.2 1.1-1.5 2.3-0.9 2.6 0 3.1 1.7 2.3 1.1 0.5 1.1 0.1 0.6 0.9-0.3 1.4 0.8 2.3 2.3-0.2 6.3-2.3 4.7 2.9 0.6 2.8 1.2 2.5 2.1 1.6 2.5 1.1 0.8 1.2-0.4 0.6-1.2 3.2-0.5 3.4 0.5 2.5-0.3 0.7 0 1.5-0.2 0.9-0.7-1.7-0.2-1-0.2-4.7-0.4-0.9-0.3 0.5-0.4 0.5-0.4 0.3-0.5 0.3 0.4 1.1 0.1 3.5 0.3 1.3 0.9 1.6 0.6 1.5 0.8 2.6 0 0.9-0.5 0.8-0.8 0.3-2.3-0.1-2.2 0.3-0.4-0.5-0.8-2.5-0.3-2.3 0.1-3.5-0.3-2.7-1.1-2-2.3 0.2 2.1 1.7 0.7 2.7-0.2 3.1-1 2.9-0.2 2.5-3.7 0.9-4.4-0.4-2.1-1.4-1 0.2-1 0.3 0.5 1.4-1.2 0.5-1.9 0.1-1.4 0.4-1.5 0.6-3.4 0.1-1.5 0.5-1.8-2.1 1.5-3.2 5-5.6-1-0.1-0.6-0.1-0.5 0-0.6 0.2-2.6 3.1-0.3-4.1-1.3-3.7-0.4 0-0.1 1.5 0.1 2 0.4 1.9 0.6 1.3-0.8-0.7-0.6-0.8-0.9-0.7-1.4-0.3 0.9 1.8 0.8 1.1 0.5 1.3-0.1 2-0.5 1.5-0.5 1.1-0.5 0.4-0.6 0.2-0.5 0.4 0 1.1 0.6-0.3 0.5 0 1 0.3-0.4 0.7-2.1 0.7-2.8 0.2-1.9-0.5-0.3 0.3-0.5 0.4-0.3 0.3-1.2-0.5-0.7-0.7-0.2-1.1 0-1.4 0.3-1.2 1-1.8 0.2-1.1-0.3 0.2-0.8 0.2-0.4 0.1 0-1.2 0.3-2.1-0.8 0-0.8-0.2-0.9-0.4-0.9 0.3-0.3 0.7 0.2 1.2 0.3 1 0.3 0.7-0.3 1 0.4 0.8 0.6 0.9 0.4 1.2-0.3 1.6-0.5 0-0.9-0.8-1.2-0.5-1.7-0.1-0.6-0.4-0.1-2.7 0.5-0.1 0.1-0.2-1-1.5-0.1-0.2-0.1-1.3 0.1-1.3-0.4 0-0.6 2.6-0.4-0.4-1.2-0.7 1.2 2.6 0.2 1.3-0.9 0.8-1.1-0.1-1.2-0.7-0.9-0.9-0.6-0.4-1.6-0.5-1.7-1.4-0.9-1.9 0.8-1.9-0.8-0.1-0.6 0.3-0.2 0.5 0.1 0.9-0.5 0-1.3-1.3-3-1.8-0.9-1.1 0.5 0.3 1 0.4 0.5 0.4-0.6-1-0.9-0.5-1-0.2-1.1-0.4-1.6-1.8-0.6-0.8-2-2.1-0.5-0.3-7-6.6-2.1-2.9-0.8-3.3 0.3 0.1 0.3 0.1 0.5 0.4 0-1.5-3.3-2-0.9-1.5-0.3-1.2-1.9-3.3-0.9-0.9 2.6 1.5-0.6-1.8-2.5-2.7-2.1-5.9-0.6-3.6-0.4-1.1-1-2-0.4-1.2-0.2-1.2-0.2-0.6-0.6-0.6-0.5-0.8-0.3-1.2 0.4-0.9 0.9-0.4 1.2 0.1 1.2 0.4 0.8 0.7 1.4 1.9 0.9 0.6-1.1-3z"
                          id="NGBY"
                          name="Bayelsa"
                        ></path>
                        <path
                          d="M335 689.8l-1.3-3.3-0.1-0.2 0.5-0.3 0.7-0.8 0.5-0.4 1.3-0.5 0.5-0.3 1.4-1.6 0.6-0.8 0.4-1 0.3-2.1 0.3-1.6 1.5-3.5 2-8.8 2.2 2.1 2.5 0.1-0.8 2.7-2.4 12 0.5 1.7 2.7 0.2 2.8-0.7 3.1 3.3-0.6 5.4-1.1 2.4 0.1 2.7 0.7 0.8 1.8 1.3 0.5 1 8 5.2 10.7 0.8 9.5-1 4 1.2 2.4-0.3 2.3-0.6 1.5 2.8-0.4 3.7-7.8 12 1 5.9 3.1 0.9 6.2-1.2 3-0.1 2.9 1.2 4 0.1 5 3.4 1 1.9 1.3 2.1 0.7 2.9-0.1 1.8-0.5 0.3-0.5 0.7-0.3 0.7 0.2 1.1 0.2 0.9 0 0.7-0.6 0.9 0 0.5 1 1.3 0.3 0.6-0.3 0.2-1.2 1.4-0.7 0.6-0.9 0.5-0.9 0-0.7-0.6-0.5 0-0.7 1.5-1.6-0.1-2.6-1.4-1.9-0.1-2-0.4-1.7-0.8-0.9-1.3-0.5 0.3-0.5 0.1-1.4 0.1-0.2 0.2-0.1 0.6-0.3 0.5-0.7 0.3 0 0.5 0.5 0.3 0.5 0.2-0.4 0.5 1 0.4 1.2 1 2.1 0.4 0.4 0.6-0.1 0.6-0.5 0.7-3.4 0.5-0.3-0.4-1.7-2.5-4.8-5.2-0.7-1.6 0-2-0.2-0.7-0.5 0-1.1 0.5-1.6 0-0.3-0.1-0.6-0.7-1.4-1.1-0.6-0.8-1.2-3.5-0.8-1.1-0.1 0.7-0.4 0.7-0.4 0.6-0.2 0 0.2 0.8 0.4 0.1 0.5 0.1 0.5 0.6 0.7 2.6 0.8 1.1 1.3 0.5 2.4 1.1 1.7 2.6 0.3 2.5-2 1 1 0.7 1.1 1.1 0.7 1.3-0.5 1.4-2.1 2.3-1.2 0.6-1.6-0.6-0.1 1.1 0.1 0.4-1.4-0.6-1.1-0.9-0.4-1.1 0.3-1.5-1 0.9-0.2 1.3 0.4 1.3 0.8 1.2-2.1 0.5-0.5 0-0.9-1.8-0.5-1.9-0.2-3.8-1.2-2.1-0.4-1.3 0.9-0.6 0.3-0.6 0.4-1.4 0.2-1.6-0.2-1 0.4 0.2 0.7 0.1 0.5 0.1-0.5-0.8-1.6-1.7-0.3-0.8-0.4-1.7-0.3-0.7-1.4 2-0.5 0-0.3-1.3-0.9-1.7-0.4 1.2 0.2 1.8-0.3 0.6 0.8 1.3 1.7 4.5-0.8 0-0.5-0.1-0.4-0.3-0.3-0.7-0.3 0.3-0.7 0.3-0.7-1.5-0.8-1.3-2.2-2.5 0.2 1.3 0.3 1 1.1 1.9 0.6 0.8 0.3 0.4 0.1 0.6-0.3 0.7-0.5 0.4-0.2 0.4 0.5 0.9 0.8-1.2 1.4-0.4 1.3 0.4 0.7 0.9-0.8 5.3 0.2 1.8 2.7 5.3 0.9 1.2-0.1 0.8-0.4 0.7-0.8 0.3-1-0.1-0.8-0.4-1.4-0.6 0.1 0.3 0.1 0.4 0.2 0.4-1.6-0.5-1.7-0.8-1.7-0.3-1.8 0.6-0.8-0.9-0.6-1.2-0.1-1.4 0.5-1.3-1.3-0.6-1.2-2-0.8-2.4-0.3-2 0.1-1.3 0.4-0.8 0.5-0.5 0.6-0.8 0.3-0.7 0.3-1.2-0.2-1.2-1.2-0.5-2-1.1-1.3-2.5-1.2-4.7-0.2-1.9 0.3-1 0.7-1 0.6-1-0.2-0.6-0.7-0.1-1 0.9-0.7-0.9-0.2-0.5-0.1-0.7-0.7 0.3-0.6 0.1-0.7-0.1-0.6-0.3 0.3 1.3 0.2 1.3 0.3 1.1 1 0.5 0.7 0.5 0.5 1.4 0.6 2.7 0.3 2.9 0.4 1.3 0.6 0.6 1 0.5 1 1.2 1.4 2.4-1.7 1.5-0.4 0.6-0.1 1.1 1.5 7.4 0.8 2.3 1 1.2-0.2 1.7 1.6 1.4 0.9 1.1-1.8 1-2.4 0.4-3 0.2-2.8-0.2-1.7-1-0.2-1.1 0.2-4.4 0.4-0.6 0.1-0.4-0.2-0.4-0.7-0.5-0.1-0.3 0-2.7 0.2-1.2 1.7-4.6 0.2-0.8-0.1-2.2-1 1.2-0.8-1.2-2.5-1.1-2.1-1.6-1.2-2.5-0.6-2.8-4.7-2.9-6.3 2.3-2.3 0.2-0.8-2.3 0.3-1.4-0.6-0.9-1.1-0.1-1.1-0.5-1.7-2.3 0-3.1 0.9-2.6 1.5-2.3 0.2-1.1 0.8-1.7 1.3-1.4-0.6-0.7-0.4-0.8-0.3-0.8-0.2-0.9 0-1.5 0.3-1.9 0.5-1.6 0.5-0.7 1.3-0.7 0.6-1.6 0.4-3.5 1.1-2.4 1.6-1.6 1.9-1.3 2.5-3.2 0.5-0.8 0.2-0.8 0.3-0.5 1.4-0.3 0.4-0.2 0.1-0.3 0.7-0.6 0.2-0.4 0.1-0.6-0.2-0.3-0.3-0.4-2.2-2.6-7-0.6z m79.4 69.1l2.5-0.3 0.8 0.3-0.4 1-0.7 0.9-1.3 0.3-2.9-0.1-1.2 0.1-3.7 1.4-1.3 0.1-5.6-0.3-1.2-0.6-0.4-1 0.7-1.4 0.7-0.3 3.7-1.2 0.9 0.4 2.7 1.3 1.3 0.4 1.4-0.2 2.7-0.7 1.3-0.1z m-20.2-0.6l3.5-0.3 0.9 0.3-0.9 0.8-0.5 0.9-0.1 1.1 0 1.1-0.3 1.2-0.8 0.8-1 0.6-1.1 0.5-6.7 1.4-2.6-0.3-0.7-0.9 0.7-1.4 2.4-2.6 1.8-2.6 1.4-1.7 0.3-0.7 0.3-1.3 1.1 0.6 1.1 2.1 1.2 0.4z"
                          id="NGRI"
                          name="Rivers"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Port Harcourt"
                        ></path>

                        <path
                          d="M441.4 691.9l-2.1 2.4 1.2 3.2 0.9 1.5 1.5 1.1 4.4-0.7 2 0.5 3.4 2.1 1.2 1.4-0.5 9.3 1 4.3 2.1 3.8 2.7 3.8 8.9 9.3 2.9 2.2 0.9 0.1 0.4 0.4 1.1 3.3 1 1.2-0.3 0.5-0.6 1.7-0.1 0.7 0.3 1.1 0.7 0.4 0.9 0.3 0.7 0.6 0.2 1.7-1.2 1.1-1.4 0.9-0.8 1.2-1 2.3-0.7 0.4-0.8 0.1-3.3 0-4.3-0.5-6.5 0-3.1-0.4-1.5 0-2.5 1.3-1.5 0.2-3.3 0-12.9 1.5-0.8-0.4-0.9-0.1-0.9 0.3-0.6 0.8 0.8 0 0.7 0 0.6 0.2 0.5 0.3-1.6 0.4-2.5 0.2-2.2-0.4-1-1-1-0.3-6.8-0.4 0.3-0.4 0.1-0.2 0.2-0.2 0.5-0.3-1-0.3-0.9 0.2-0.6-0.1-0.2-0.9 0.3-0.4 0.5-0.3 0.5-0.5 0.3-0.8-0.2-0.4-1.4-1.7 0.3-0.3 0.3-0.8-1.1-1.3 0.2-1.9 1.4-3.5-0.5 0-0.8 0.6 0.1-1.8-0.7-2.9-1.3-2.1-1-1.9-0.5-3.2-1.7-3 0.3-1.3 0.4-1.3-1-3.7 1.7-2.8 2.5-2.5 0.4-3.4-0.4-3.5 0.3-3.3 1-4.7-0.1-1.5-0.8-1.4 0.1-1.5 3.4-1 3.9 0.6 2.2-1.5 0.5-1.4-0.8-1.4-1.9-0.6 0.1-1 1.8-4.2-0.4-5.2 2-1.4 2.9 0.4 3.7 2.7 2.6 3.9 4.3 2.4 3.9 3.1z"
                          id="NGAK"
                          name="Akwa Ibom"
                        ></path>
                        <path
                          d="M439.9 667.1l1.3 3.5-0.7 4.3 1.8 8 3.6 7-0.9 2.7-3.6-0.7-3.9-3.1-4.3-2.4-2.6-3.9-3.7-2.7-2.9-0.4-2 1.4 0.4 5.2-1.8 4.2-0.1 1 1.9 0.6 0.8 1.4-0.5 1.4-2.2 1.5-3.9-0.6-3.4 1-0.1 1.5 0.8 1.4 0.1 1.5-1 4.7-0.3 3.3 0.4 3.5-0.4 3.4-2.5 2.5-1.7 2.8 1 3.7-0.4 1.3-0.3 1.3 1.7 3 0.5 3.2-5-3.4-4-0.1-2.9-1.2-3 0.1-6.2 1.2-3.1-0.9-1-5.9 7.8-12 0.4-3.7-1.5-2.8 5.5-16.1 2.9-3.2 0.9-1.9 0.7-2 1-1.6 0.6-1.8 0-2-0.3-2.1 0-2.1-0.6-2-0.8-1.4 0.7-1.1 0.7-3.5-1-8.5-2.9-2.6-2.1-0.5-3.8-1.9-1.6-1.4 3.5-4.5 5.1-2.7 0.5 0.3 0.2 0.3 3.6-0.6 3.6-0.1 5 3.7 0.1 4.5-0.7 4.9 4.5 2.2 11 0.2 4.1 1.9 0.5 2.6 1.3 2.3 2.4 1.9 2.8 1z"
                          id="NGAB"
                          name="Abia"
                        ></path>
                        <path
                          d="M436.1 595.5l2.5 5.3 5.2 3.2 3.4-4.6 0.7-6.4 1.2-2.5 3.2-0.4 3 0 2.9-0.7 2.9-3.8 1.7-0.4 1.7 0.1 0.9-1.3 0.3-0.8 1.5 0.2 0.8 1.2 0.6 3 1 2.5 1.7 2 1.1 4.2 2.9 3.3 1 0.8 1.1 0.6 0.5 0.8 0.3 0.8 1.3 1.5 0.3 2.4 0.8 2 1.6 2.1 0.3 2.4-4.8 2.6-0.5 2.6 1.4 2.2-0.6 5.2-4.3 4.3-1.7 2.3-1.5 2.3-1.4 5.7-1.2 2-2.2-1-2 0-1 1.6-1.2 1.5-3.5 1.7-1.4 1.3-1.9 0.1-1.5-3.4-2.9-0.9-3 1-0.9 1.9 1.2 2.4-0.9 3.4-2.7 4.1-1 1.1-0.1 1.8 0.2 1.7-1 1.5-1.2 1.5-0.7 1.7-0.3 1.9-2.8-1-2.4-1.9-1.3-2.3-0.5-2.6-4.1-1.9-11-0.2-4.5-2.2 0.7-4.9-0.1-4.5 3.7-1.2 2 1 1.6 1.1 2.7 2.5 2.1-1-0.9-4 0.5-3.8 1.8-2.1 1.5-2.2-0.1-2.3-0.6-2.4-0.1-2.3-0.9-3.2-0.1-1.1-1.3-2 3.3-10.1 0-5.4-3-9.8 2.5-1.5 2.5 0.2 5-0.5z"
                          id="NGEB"
                          name="Ebonyi"
                        ></path>
                        <path
                          d="M343.6 664.6l0.2-3.2 0.5-2.1 0.8-1.9 1.5-2.6 3-4.1 0.3-0.6 0.1-0.7-0.1-1.3 0-0.7 1.1-3.9-0.3-4 0.3-1.7 1.5-1.2 1-0.4 0.8-0.4 0.5-0.6 0.3-1 0.2-3.4-0.1-1-0.4-1.1-1-1.9-0.3-1-0.3-3-1.4-3.7-0.4-4.2-2.1-7.5-0.4-2.2 0-2.4 0.7-0.2 1.7 0.1 2 0.4 1.9-0.3 2.5-2.4 1.7-7.5 1.8-3.6 5.1-4.9 0.7 2.1-0.1 2.5 1 0.4 4-0.1 4.4 1.8 2.4 0.6 2.3 1-0.3 5.1-4.2 4.6-2.1 5.7 0.7 1.9 1.1 0.5 2.6 0.5 1.1 0.6 1.6 2.2 2.4 5.5 0.4 0.7 0.2 0.8-0.5 0.6-0.5 0.2 0 1.5-0.1 1.3-0.3 1 0.6 0.9 1.2-0.2 1.1-0.9 1.2 0.8 0.3 1.8 1.8 1.4-0.4 2.6 0.9 2.2 1.3 2.1 0.8 2.4 1.6 1.9 2.2 0.3 2-0.6 0.8 0.1 1.3 0.8 0.4 0.8 0.8 0.2-5.1 2.7-3.5 4.5-3.2 0.6-3.1 1.1-6.8-1.5-3.5 0.4-3.4 0.8-2.9 1.8-1 3.2-3 6.1-3 0.8-3.2-1.3-5.9 1.6-5.1 4-2.5-0.1-2.2-2.1z"
                          id="NGAN"
                          name="Anambra"
                        ></path>
                        <path
                          d="M230.6 633.9l0.1-2.4-1.4-2.2-0.9-0.6-0.9-0.4-0.9 0-0.7-0.3-0.2-1-1.6-1.9-1.8-1.6-1.6-0.9-0.4-0.7 0.2-0.6 0.5-0.5 0.4-0.9 0.4-2.3 1-1.6 1.7-0.5 1.9-1.1 1.1-1.8 0.5-2.3 1.3-1.9 1.8-4-1.4-4-1.3-2.1-0.6-0.3-0.4-0.7 0-2.3 0.3-1.1 0.3-2.5 0.8-1.6 2.4-2.9 2.7-2.6 0.9-2.1 1.3-1.6 0-2 0.9-1 1.2-0.6 21.3 0.1 3.4 2.7-1.2 1.9-0.8 2.2 2 5 1.7-0.3 3.7-3 2.2 0.2 1 0.9 2.4 0.5 1.2-0.4 0.9-0.6 1-1.8 0.4-1 0.9-4.9 0.7-1.9 1.7-0.4 0-1.2 0.3-0.5 0.4-0.2 0.3-0.7-0.3-0.9-1.1-2.3 0.2-2.7 1-2.8 2-2.1 1-1.3 0.5-1.8 3.5-8-0.3-0.8 0.1-1 1.7-1.9 1.8-1.6 1.3-0.8 1-1.1 0.7-2.5-0.2-1.7-0.5-1.1-0.3-2.4 0.8-1.6-0.4-1.3-2.2-1.5 0.7-2.7 1-0.9 2.1-0.5 0.9-0.4 1.7-2 1.4-2.4 1.3 0.7 1.5-0.3 1.3 0.8-0.3 1.5 2.5 0.8 0.6 1.8-0.9 3.3 1.9 2.6 3.5-0.1 3.5-1.4 1.5-1 1.5-0.3 0.8 1.3 1.1 1 2.5 1.7 2.2 2.5 1.7 0.1 2.9-0.7 1.6 0.2 1.9 1.7 1.7 4.2 1 1.4 0.3 1.4 1 1.5 3.8-0.7 3.1-1.3 2-0.2 1.1 0.9 0.9 1.1 0.2 1.3 1 0.6 2 0.6 0.2 0.6 1.2 2.7 0.2 0.7 0.1 1.4-0.3 1.4-1 2.8-0.3 4-0.7 1.8 0 0.8 0 3.3-0.2 0.7-1.9 4.3-0.9 2.9 0 1.3 0.4 4-0.3 9.8 0.3 3.2 1.5 4.4 0.1 1.1 0 1.1-2.3 2.9-2.2 0.7-2.6-0.5-2.8 0.1-4.6 1.9-9.2 5.6-7.1 3-2 1.2-3.2 4-2.1-0.1-1.5-2.4-2-2-2.5-0.3-1.8 1.7-1.1 2.1-0.2 2.8 2.4 4.2 0.2 2.6 0.9 3 2.4 3.8 4.5 4.2 1.4 0.3 1 0.9 0 3-0.9 2.9-3.1 3.6-4.2 3.2-3.1 3.7-3.9 2.8-7.4 1.6-1.4 0-1.3-0.4-0.1-1.2 0.3-0.9-0.4-0.9-0.8-0.7-0.4-0.9 1.7-2.7 0.3-2.8-2.1-1.6-2.6-1.4-4.1-4.5-8.8-4.8-4.7 0.2-4.2 2.6-0.5 1-0.7 0.6-0.8-0.1-1.4-0.6-2.9-2.1-2.8-0.2-2.3 0.4-4.9-0.2-0.8 1.8 0.4 2.5-4.3 3.8-1.4 0.5-1.5-1.1-0.6-4 0.7-5-3.6-4.1-5.3-2.6z"
                          id="NGED"
                          name="Edo"
                          fill="#6f9c76"
                          //  fill="blue"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Benin"
                        ></path>

                        <text
                          x="290"
                          y="600"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="16px"
                          font-weight="700"
                          stroke-width="0.5"
                        >
                          Benin
                        </text>
                        <path
                          d="M681.7 369.3l-5.3 0-5.2-1.3-5 0.9-9.3 4.3-9.6 0.3-4.1 2.7-2.4-1-12.6-7.9-37.1-17.3-2.4 0.5-1.1 0.7-1 1.8 2.9 4.2 1 2.7-0.7 2.5-4.9 1.9-2 1.7-2.2 4.7-2.7 1.2-3 0.6-12 0.6-10.7-2-4.7-1.5-2.6-4.6-3.4-4-2.7-0.9-1.8-1.8 0.3-2.4 1-2.2 1.4-2.1 0.5-2.3-0.3-6.3-1.6-5.2-4.9-1.8-8.7 1.6-2.8-1.9 0.1-12.3-0.4-3.8-1.5-4.2-2.7-3.4-4.5-1.1-4.3 0.7-1.6-1.9-1.8-1.6-2.3-1.3-1-2 2.5-4.6 0.9-5 3.4-3.8 2.2-5.1-0.6-5.3-3.4-4.1-2.2-5.9-0.2-6.5 0.5-5.8 2.3-4.8 4.5-0.3 2.7-1.3 2-2.2 3-4.4 7.8-8.2 5-2.3 1.2 0.8 1.3 0.6 1.4-0.3 5.7-2.3 4.6 0.1 4.5 1.2 4.8 2 4.8 0.3 4.7-0.7 3 3.8 3.8 1.3 9.8-0.7 4.4-1.1 3.3 3.1 1.7 4.6 0 5-0.7 5 1.8 4.3 4.3 1.8 12-0.9 2.6 1.3 2.9 1.1 2.1-1.3-0.8-2.8 1.5-5.2 8.4-3.3 2.6-1.6 1.8-2.1 0.4-2.5-5.5-1.8-6.4-0.3-12.1-2.3-5.5-2.2-7.3-9.7-3.1-5.5-1.3 0.4-2.5 0-1.5-2.1 0.3-2.5 2.5-4.8-0.1-2.6-1.1-5.5-1.2-2.6-2.6-0.6-2.7 0.3-4.7 1.3-3.2-2.2 1.6-5.7 4.1-3.7 6.4-0.5 2.5-1.2 2.5-1.6 23.1-8.9 1.2-2.6-0.7-3.2 0.5-2.5 5.5-15.5 0.7-3.4 1.1-3.3 1.7-1.7 2.4-0.9 5.7-1 2.3 1.5 4 1 10-6.7 5.2 3.6 4.3 4.2 1 2.9 1.2 6.2 0.1 3.1 0.4 2.7 1.6 2.5 1.4 3 0.5 3.3 0.1 5.4 2.3 12.4 9.1 22.6 0.4 6.5-2.6 11.9 2 2.7 3.7 0.5-1.6 1.2-1.2 1.7-1.8 2-7.1 4.1-3.7 5-2.4 1.9-5.8 1.8-2.2 1.9-2.3 5.7-2.6 9.1-1.2 2.9-3.9 5.6-0.3 2.1 8.1 3.5 2.4 5.4 0.8 6 5.4 2.6 4.9 3.1 1.6 4.6-0.2 10.7 0.3 2.3-0.2 2.2-8.6 4.4-0.4 2.6 3.1 4.4 15.6 11.7 2.3 5 0.5 5 1.2 4.8 2.2 4.4 1.7 2.1-0.5 1.9z"
                          id="NGBA"
                          name="Bauchi"
                        ></path>
                        <path
                          d="M643.2 376.2l1.6 3.7 0.5 4-0.5 4.9 0.8 5.8 0.6 2.2 1.3 2.1 2.2 7.3 0 2.3-0.6 2.3 1 4.8 0.1 2.9-2.6 5-12 5.9-17.5 4.3-3.7 4.4-1.7 2.7-4 4.8-2.1 1.9-5.4 3-5 3.6-4.4 4.5-4.9 3.7-5.5 1.6-5.7 0.4-4.1-0.3-2.8-4-4.1-2.6-8.8-3.8-4.8-0.1-4.8 1.4-6.9 1.3-7.2-0.1-4.6-1.3-6.3-3.3-1.7-3.2 0.5-3.7-0.6-3.1-1.8-2.6-1.5-3.7 1.3-3.2 1.9-2.4 1.8-2.7 2.8-0.9 1.8-1.7 3.2-4.4 1.1-2.6 0.4-2.2-1.4-1.8-2-1.3-2.4 0.6-1.2 0.5-1.3 0.2-5.1 0.1-5-1-3.6-3.7-1.2-5.2-3.7-2.8-4.4-2.1 1.6-4.4 0.3-4.7-2.9-4.1-3.6-3.8-3-4.5 0-10.9 2.1-1.6 0.2-1.4 0-1.3 3.1-4.3-0.6-2.6 0.4-3 0-5.9 3-10.1-2-5.8 1.4-5.8 3.8-4.3 2.7-1.3 1.9-2.4 0.4-2.6 0.7-2.2 4.3-0.7 4.5 1.1 2.7 3.4 1.5 4.2 0.4 3.8-0.1 12.3 2.8 1.9 8.7-1.6 4.9 1.8 1.6 5.2 0.3 6.3-0.5 2.3-1.4 2.1-1 2.2-0.3 2.4 1.8 1.8 2.7 0.9 3.4 4 2.6 4.6 4.7 1.5 10.7 2 12-0.6 3-0.6 2.7-1.2 2.2-4.7 2-1.7 4.9-1.9 0.7-2.5-1-2.7-2.9-4.2 1-1.8 1.1-0.7 2.4-0.5 37.1 17.3 12.6 7.9 2.4 1z"
                          id="NGPL"
                          name="Plateau"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Jos"
                        ></path>
                        <text
                          x="570"
                          y="410"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="40px"
                          stroke-width="0.5"
                        >
                          Jos
                        </text>
                        <path
                          d="M571.6 464l-2.1 3.3-3.1 2-2.1 0.1-2.1-0.3-2.3-0.7-2.2-0.4-1.7-0.9-3.8-1.3-1.8 0.8-1.3 1.7-0.8 2-0.3 2.4 4 5.1 0.3 3.9-0.2 1.3 0.6 1.4 0.3 2.1-1.6 1.3-11 7.4-2.6 2.2-14.4-10.8 0 0.5-2.8 0.2-8.3-0.3-5.5-1.2-15.3-5.1-10 1.1-4.2 3.6-1.3 5.4 1.8 5.5 3.6 7.9 0.5 2.6-1 1.3-0.6-0.1-0.9-0.3-0.9-0.5-1.8-1.4-3.6-2-1.7-1.9-2.2-0.6-2.4-0.3-2.4-0.7-4.1-2.1-2-0.7-6.4-1.1-1.3-0.5-3.8-2.3-2.6-0.7-5.4-0.6-2.6-0.6-3.6-1.3-4.9-0.5-3.8-1-1-0.2-1.2-0.1-10.7 1-13.4-1.1-2.5 0.2-15.3 5.2-3.9 2.4-0.1 0.4-0.5 0.3-1.5 1.3-2.6 1.6-1.8 0.8-0.6-0.2 0.1-3.2 0.9-3.1 1.3-2.1 1-2.4 1.1-11.3-0.3-5-3.6-6.5 1.8-4.9 0.7-2.6 10.9-1.7 10.7-2.9 9.7-4.9 3.4-3.7 2.6-4.3 3.3-9.1 3.5-15.5-0.2-7.5 0.2-4.8 1.7-8.2 1.4-2.5 0.9-0.3 0.9-0.6 0.2-1.4-0.2-1.6 2.2-1 1.1 2 1.8 1 2.4-0.2 1.9 1.5 1.3 0.2 1.2 0 2.6 1.1 2.6-1.1 2.9-5.4 4.7-0.8 2.4 2.3 0.7 1.8 0 1.9 2.4 2 3 1.8 0.8 9 2 7.4 6-3.3 4.3-6.2 2.1-1.9 2.4 1 6.8 1.9 3.1 3.9 1.5 1.5 1 1.7 1.8 1.8 3-0.3 3.2-3.3 2.4-4.3 2-4.6 2.8-3.2 4.4 2.1 3.7 2.8 1.2 5.2 3.6 3.7 5 1 5.1-0.1 1.3-0.2 1.2-0.5 2.4-0.6 2 1.3 1.4 1.8-0.4 2.2-1.1 2.6-3.2 4.4-1.8 1.7-2.8 0.9-1.8 2.7-1.9 2.4-1.3 3.2 1.5 3.7 1.8 2.6 0.6 3.1-0.5 3.7 1.7 3.2 6.3 3.3 4.6 1.3 7.2 0.1 6.9-1.3 4.8-1.4 4.8 0.1 8.8 3.8 4.1 2.6 2.8 4z"
                          id="NGNA"
                          name="Nassarawa"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Nassarawa"
                        ></path>

                        <text
                          x="460"
                          y="450"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="15px"
                          stroke-width="0.5"
                        >
                          Nassarawa
                        </text>
                        <path
                          d="M729.6 291.7l0.9 6.7-5.6 9.1-0.1 3.4 1.5 3.4 2.4 2.9 2.9 2 3.3 1.3 2.7 1.9 5.1 8.2 5.4 3.4-0.8 6.7 0.4 10.2-1.1 3.2-2.8 2.3-14.1 8.4-6.4 2.9-7 1.1-26.6 1.1-8-0.6 0.5-1.9-1.7-2.1-2.2-4.4-1.2-4.8-0.5-5-2.3-5-15.6-11.7-3.1-4.4 0.4-2.6 8.6-4.4 0.2-2.2-0.3-2.3 0.2-10.7-1.6-4.6-4.9-3.1-5.4-2.6-0.8-6-2.4-5.4-8.1-3.5 0.3-2.1 3.9-5.6 1.2-2.9 2.6-9.1 2.3-5.7 2.2-1.9 5.8-1.8 2.4-1.9 3.7-5 7.1-4.1 1.8-2 1.2-1.7 1.6-1.2 10.5-2.7 10.4 5.1 4.8 3.7 4.2 4.5 3.7 5 7.9 8.1 1.6 2 0.5 2.6-1 17.7 0.6 5.6 0.6 2.3 5.4 0.5 2.8-0.3z"
                          id="NGGO"
                          name="Gombe"
                        ></path>
                        <path
                          d="M410.8 561.6l0.8 3.1 2.9 6.1 2.1 2.6 2.5 2.4 2.9 2 2.8 1.4 3.1-0.3 2.2-1.7 2.8-0.7 3.1 1.5 1.9 3 0.9 3.7-0.1 3.7-2.6 7.1-5 0.5-2.5-0.2-2.5 1.5 3 9.8 0 5.4-3.3 10.1 1.3 2 0.1 1.1 0.9 3.2 0.1 2.3 0.6 2.4 0.1 2.3-1.5 2.2-1.8 2.1-0.5 3.8 0.9 4-2.1 1-2.7-2.5-1.6-1.1-2-1-3.7 1.2-5-3.7-3.6 0.1-3.6 0.6-0.2-0.3-0.5-0.3-0.8-0.2-0.4-0.8-1.3-0.8-0.8-0.1-2 0.6-2.2-0.3-1.6-1.9-0.8-2.4-1.3-2.1-0.9-2.2 0.4-2.6-1.8-1.4-0.3-1.8-1.2-0.8-1.1 0.9-1.2 0.2-0.6-0.9 0.3-1 0.1-1.3 0-1.5 0.5-0.2 0.5-0.6-0.2-0.8-0.4-0.7-2.4-5.5-1.6-2.2-1.1-0.6-2.6-0.5-1.1-0.5-0.7-1.9 2.1-5.7 4.2-4.6 0.3-5.1-2.3-1-2.4-0.6-4.4-1.8-4 0.1-1-0.4 0.1-2.5-0.7-2.1 2-4 2.6-1.7 0.1 0.7 0.1 0.6 0.3 1.1 0.5 0.5 1.2 1.8 1.9 0.8 3.4-2.6 2.8-3.5 6.4-4.4 3.7-3.5 4.4-5.7 1.4-1.2 2.3-0.9 2.5-1.9 2.7-1.4 3.7 0.2 2.5 2.3z"
                          id="NGEN"
                          name="Enugu"
                        ></path>
                        <path
                          d="M314 435l3.4-0.7 1.3 0.2 0.5 0.4 2.8 1.9 1.6 0.3 1.2 0.6 0.9 1 1.9 3.2 0.1 1.4 0.1 0.6 1.2 2.4 0.2 0.6 0.4 0.1 0.3 0.7 0.1 0.7 0.2 2.2 1 3.7 1.7 3.5 0.6 0.3 7.5 5.7 0.9 1 3 4.8 2.8 3.1 1 0.4 0 0.5 1.1 0.9 0.3 0.5 1.3-1.3 0.5-2 0.8-1.9 1-0.8 1 0.6 0.4-1.2-0.2-1.7 1.2-1.2 1.6-0.6 2.2-2.1 1-3.1 4.7-0.1 2.8 0.3 2.7-0.5 0.7 0-0.7 2.6-1.8 4.9 3.6 6.5 0.3 5-1.1 11.3-1 2.4-1.3 2.1-0.9 3.1-0.1 3.2 0.6 0.2 1.8-0.8 2.6-1.6 1.5-1.3 0.5-0.3 0.1-0.4 3.9-2.4 15.3-5.2 2.5-0.2 13.4 1.1 10.7-1 1.2 0.1 1 0.2-0.4 4.4 0.2 4.1 0.9 3.8 2.3 3.3 2.2 2.3 1.5 2.7 0.3 2.8-0.2 8.8 1.2 9.2 0.9 2.9 2.5 1.4 2.8-0.4 1.9 1.3-1.5 2.7-0.9 2.2-0.2 2.5-1.3 6.1-3.2 5.2-10 5.5-1.2 3-0.2 3.5-2.1 0.6-2.4-1.1-3.3-2.7-2.9-1.4-2.5-2.3-3.7-0.2-2.7 1.4-2.5 1.9-2.3 0.9-1.4 1.2-4.4 5.7-3.7 3.5-6.4 4.4-2.8 3.5-3.4 2.6-1.9-0.8-1.2-1.8-0.5-0.5-0.3-1.1-0.1-0.6-0.1-0.7-2.6 1.7-2 4-5.1 4.9-1.8 3.6-1.7 7.5-2.5 2.4-1.9 0.3-2-0.4-1.7-0.1-0.7 0.2 0-1.1-0.1-1.1-1.5-4.4-0.3-3.2 0.3-9.8-0.4-4 0-1.3 0.9-2.9 1.9-4.3 0.2-0.7 0-3.3 0-0.8 0.7-1.8 0.3-4 1-2.8 0.3-1.4-0.1-1.4-0.2-0.7-1.2-2.7-0.2-0.6-2-0.6-1-0.6-0.2-1.3-0.9-1.1-1.1-0.9-2 0.2-3.1 1.3-3.8 0.7-1-1.5-0.3-1.4-1-1.4-1.7-4.2-1.9-1.7-1.6-0.2-2.9 0.7-1.7-0.1-2.2-2.5-2.5-1.7-1.1-1-0.8-1.3-1.5 0.3-1.5 1-3.5 1.4-3.5 0.1-1.9-2.6 0.9-3.3-0.6-1.8-2.5-0.8 0.3-1.5-1.3-0.8-1.5 0.3-1.3-0.7-4.7-5.1-3.8-5.9 0.5-3-2.3-1.1-6.1 1.1-3.4-1-6-2.9-1.2-1.1-1.1 0.1-2.5-2.3-1.1-3.3 0.6-3.2 2.2-2.8 1.7-1 0.1-1.7-1.1-0.8-1.4-0.2-2.9 0.3-2.7 0.6-2 1.3-1.5-0.6-0.1-3.2 1.5-2.1-0.5-4.6-5.1-3.2-3.1-2.8-0.7-1.4-1.4-1.2-1.1-1.3-2.2-4.4 0.5-2.5 8.7-10.8 3.4-3.1 3 1.2 3.8 3.7 7.6 2.9 7.5 1.8 10.5 0.5 8.3 1.9 2.5-0.5 1.6-1.9 0.7-2.2 1.2-7.9 3.1-10.7 3.2-4.1z"
                          id="NGKO"
                          name="Kogi"
                        ></path>
                        <path
                          d="M188.2 488.3l4.9-0.3 5 0.5 4.2-0.9 2-0.8 2.1-0.5 0.1 0.6 0.5-0.6 4.3-0.4 3-1.2 3.1 0 1.6 2.7 2.3 1.5 4.3-0.6 1.2 0.2-1.8 6.3-2.3 2.1-2.9 1.3-3.5 4.7-0.6 9.2-0.8 3.3 0.4 4 6 16.2-0.1 3.1-3.7 1-3.3 1.7-1.3 3.6-0.7 3.6 0.1 5.8-0.3 2 0.2 1.8-0.2 1.6-0.8 0.6-2-0.2-0.9-0.4-3.9-2.5-2.8-1.2-3 0.9-3.2 2.5-2.1 3.6-0.5 1.9-1.2 1.7-2.9 1.5-1.2-1.5-3.1 0.3-1.4 0.4-1.2 0.6-1.7-0.1-1.6-0.5-2.6 1.5-2.2-0.1-0.4-1.1-0.2-1.3-0.7-1.9-0.9-1.9-2.5-2.1-3.5 0.1-2.9 1.8-3.1 0.4-0.6-3.4-1.6-3.3-5.3 2.6 5.2-27.6-0.5-2.1-1.4-1.9-1.3-2.4-1.6-2.1-2.1-1.3-1.6-1.7 0.1-2.3 1.3-1.9 0.7-2.2 0.4-2.2 0.2-5 1.3-3.5 5.1 1.4 3.9-2.8-0.1-1.7 0.7-0.7 0.8-0.6 1.4-2 1.6-1.7 2.4 0.9 2.1 1.9 2.7 4.5 3.1 0.6 1.6-1.6 2.2-1.6 0.4-0.4 0.5-0.7 0.6-0.6 0.2 0.3 1.3-1.1 1.4-0.9 1.3-0.5 1.7-0.3 0.4-0.4 0.6-1 0.2-2.6-0.6-2.6z"
                          id="NGOS"
                          name="Osun"
                        ></path>
                        <path
                          d="M392.5 704.9l-2.3 0.6-2.4 0.3-4-1.2-9.5 1-10.7-0.8-8-5.2-0.5-1-1.8-1.3-0.7-0.8-0.1-2.7 1.1-2.4 0.6-5.4-3.1-3.3-2.8 0.7-2.7-0.2-0.5-1.7 2.4-12 0.8-2.7 5.1-4 5.9-1.6 3.2 1.3 3-0.8 3-6.1 1-3.2 2.9-1.8 3.4-0.8 3.5-0.4 6.8 1.5 3.1-1.1 3.2-0.6 1.6 1.4 3.8 1.9 2.1 0.5 2.9 2.6 1 8.5-0.7 3.5-0.7 1.1 0.8 1.4 0.6 2 0 2.1 0.3 2.1 0 2-0.6 1.8-1 1.6-0.7 2-0.9 1.9-2.9 3.2-5.5 16.1z"
                          id="NGIM"
                          name="Imo"
                        ></path>
                        <path
                          d="M226.8 488.5l0.8 0.6 0.4 1.3 1.6 0.6 4.7-1.4 5 3.2 3 0.2 1.9 0.4 3.2-0.5 0.6 0.2 0.7-0.2 0.9-1.8 0.5-2.5 1.6-1.9 2.7-0.9 8.1-0.2-1.5 2.1 0.1 3.2 1.5 0.6 2-1.3 2.7-0.6 2.9-0.3 1.4 0.2 1.1 0.8-0.1 1.7-1.7 1-2.2 2.8-0.6 3.2 1.1 3.3 2.5 2.3 1.1-0.1 1.2 1.1 6 2.9 3.4 1-1.4 2.2-1.8 0.7-2.1-0.9-2 1.1-0.7 1.4-1 1.3-2 1.1-3.2 3.6-1 2.2-1.4 7.2-4.2 9.8-7.9 6.7-4.3-1.7-1.6-5.2-1.9-3.8-3.8-1.1-5.4 0.3-8.3-0.6-2.8 0.1-5.3 1.7-6-16.2-0.4-4 0.8-3.3 0.6-9.2 3.5-4.7 2.9-1.3 2.3-2.1 1.8-6.3z"
                          id="NGEK"
                          name="Ekiti"
                        ></path>

                        <path
                          d="M397 391.5l-1.8-0.5-1.9 0.6-0.5-1.2 0.8-2.3 0.2-1.1-1.3-1.7-1-0.6-1.5-2.4 0.6-2.8 4.2-3 0.4-1.5 0.2-1.6 0.8-1.2 1.1-1 1.7-2-0.4-2.4-2.3-1.1-1.1-2 0.6-2.1-1.6-1.4-2.8-0.8-1.5-2 1.7-1.3 2.3-0.2 2-1.6 0.1-2.8-1.4-12.3-3.7-2.6-11.2 0.2-5.6-0.7-5.5-2.3-3.3-4.4 1.8-2.2 2.4-1.6 2.1-2.5 2.4-1.9 2.5-1.7 1.9-2.4 0.1-2.6-2.2-1.6-5.4-2-1.7-1.7 1-2.7-0.1-6.2-4.2-3.5-2.6 0.7-1.2-0.3-0.5-6.2-0.7-1.5-2.3-1-2.7-0.2-2.5 1.1 0.3 3-1.7 1.3-2.9-0.5-2.9 0.5-5.5 2.6-2.4-0.4-0.9-2.4-2-1.4-5.4 1.2-9 6.9-4 4.3-1.6 2.6-2 2.2-2.6 0.4-1.3-2.6-1.8-2.4-2.5-1.8-0.5-2.6 0.3-1.5 0.5-1 0.1-1 0-2.1 0.2-0.9 1.1-2.6 0.3-1.7 0.1-1-0.1-0.9-1.3-3.8-0.1-2 0.5-6.4 0.6-2 1.5-1.7 1.5-0.7 3.5-1.2 1.1-1 0.3-1 0-1 0.1-1 0.6-1 0.8-0.5 1.8-0.7 0.8-0.5 0.9-1.2 1.4-2.9 0.9-1.1 1.5-0.6 1.6 0.2 5 1.8 1.7 0.4 1.7 0 5-1.5 0.8-0.1 1.2 0.2 0.7-0.2 0.7-0.3 6.3-2.5 1.4-0.8 1.1-1 1-1.3 0.8-1.7 1.4-6.9 0.8-2.3 1.6-2 5.3-3.4 1.6-1.5 1.2-2.3 3.4 1.7 1.9 0.5 4 0.1 1.6 1.2 0.9 1.8-0.2 1.5-1.2 0.9-2.1 2.3 0.1 2.1 5.6 1.5 2.6 1.6 3.9 4.1 2.6 0.3 2.4-1.3 1.9-2-0.1-2.2-1.3-2 1.3-4.1 5.8 0 2.7 1 2.1-1.1 0.4-2.8 1.2-2.5 4.8-2.8 5.5 1.1 2.9 1.3 2.6 1.9 1.5 2.1 2.2 0.9 6.1-2.5 2.6-4 5.3-0.5 8.9-6.6 10.6-3.5 2.7 1.3-0.1 2.9-1.4 2.6-0.4 2.7 1.6 2.5 2.4 1.7 5.4 1.9 2.4 1.9 1.9 2.6 5.3 2 5.7 1.6 7.8 8.3 1.5 10.7-1.5 5.9 1.2 9.2-1.1 2.9-3.2 0.8-1.6 2.2 4.2 3.4 6 0.8 3.4 4 1.4 0.8 3.2 0.7 1.6-0.3-0.9 5-2.5 4.6 1 2 2.3 1.3 1.8 1.6 1.6 1.9-0.7 2.2-0.4 2.6-1.9 2.4-2.7 1.3-3.8 4.3-1.4 5.8 2 5.8-3 10.1 0 5.9-0.4 3 0.6 2.6-3.1 4.3 0 1.3-0.2 1.4-2.1 1.6 0 10.9 3 4.5 3.6 3.8 2.9 4.1-0.3 4.7-1.6 4.4-2.8 3.2-2 4.6-2.4 4.3-3.2 3.3-3 0.3-1.8-1.8-1-1.7-1.5-1.5-3.1-3.9-6.8-1.9-2.4-1-2.1 1.9-4.3 6.2-6 3.3-2-7.4-0.8-9-3-1.8-2.4-2 0-1.9-0.7-1.8-2.4-2.3-4.7 0.8-2.9 5.4-2.6 1.1-2.6-1.1-1.2 0-1.3-0.2-1.9-1.5-2.4 0.2-1.8-1-1.1-2-2.2 1-2.3 0.5-1.4-2.6-2.8-1-2.4 3.3-1.6 1.3-1.9-0.8-2.1-0.4-2.1 0-7.2 0.8z"
                          id="NGKD"
                          name="Kaduna"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Kaduna"
                        ></path>

                        <text
                          x="430"
                          y="300"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="20px"
                          stroke-width="0.5"
                        >
                          Kaduna
                        </text>
                        <path
                          d="M432.2 232.7l-5.2-4.5-1.1-3.9 0.5-3.8 1.2-3.7 2.4-2.8 3.5-0.9 4.3-2.2 3.3-0.8-0.2-3-1.9-4.8-0.7-1-0.3-1.2 0.4-1.4 0.1-1.5-0.3-2.5-1.6-5 0.4-16.2-0.7-7.5 0.9-3.5 5.8-4.1 13.3-5 2.8-2.6 2.5-7.5 1.8-3.3 3.5-1 3.7-0.1 3.8 6.9 0.6 1.3 0 1.2 0.3 1 1.3 0.8 0.9-1.5 1.3-3.8 2.3-3.4 3.8-2 4.5-0.9 4.5 0.7 4.9 1.3 1.8 0.8 0.3 2-0.1 3 0.7 2.7 1.8 1.4 2 1.1 1.9 1.3 1 2.1-0.1 2.7 0.6 2.3 4.2 1.5 4.8 0.5 3.2 4 0 7.1-0.3 1.4-0.8 1-0.7 1.2 1.1 1.7 0.7 0.6 0.8 0.3 1.8-0.7 3.1-0.5 0.6 0.3 0.5 1.9 0.1 2 4.7 0 2.7-1.9 3.5 0.4 0.8 2.3 1.2 4.6-0.2 2.6-0.9 2.5-0.4 1.8-0.6 1.8-2.8 4.1-1 4.7 1.2 1.1 3.3-0.3 2 0.3 0.9 0.6 1.7 4.4 1.1 1.7 2.1 2.2 1.7 1.1 1 0.3 1.7 1-0.7 1.8-6.7 6.1-1.2 2.1-0.7 2.3-0.1 1.1 0.1 2.1-0.2 1-5.7 2.3-1.4 0.3-1.3-0.6-1.2-0.8-5 2.3-7.8 8.2-3 4.4-2 2.2-2.7 1.3-4.5 0.3-2.3 4.8-0.5 5.8 0.2 6.5 2.2 5.9 3.4 4.1 0.6 5.3-2.2 5.1-3.4 3.8-1.6 0.3-3.2-0.7-1.4-0.8-3.4-4-6-0.8-4.2-3.4 1.6-2.2 3.2-0.8 1.1-2.9-1.2-9.2 1.5-5.9-1.5-10.7-7.8-8.3-5.7-1.6-5.3-2-1.9-2.6-2.4-1.9-5.4-1.9-2.4-1.7-1.6-2.5 0.4-2.7 1.4-2.6 0.1-2.9-2.7-1.3-10.6 3.5-8.9 6.6-5.3 0.5z"
                          id="NGKN"
                          name="Kano"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Kano"
                        ></path>

                        <text
                          x="490"
                          y="200"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="20px"
                          stroke-width="0.5"
                        >
                          Kano
                        </text>

                        <path
                          d="M360.9 459.7l-3.4-0.4-1.9-3.2-0.4-1.4-0.7-54.7 0.3-2.1 1.8-0.9 14-0.6 4.6 1.5 7.1 6.9 3.6 2 0.4-0.1 10.7-15.2 7.2-0.8 2.1 0 2.1 0.4 1.9 0.8 1.6-1.3 2.4-3.3 2.8 1 1.4 2.6 2.3-0.5 0.2 1.6-0.2 1.4-0.9 0.6-0.9 0.3-1.4 2.5-1.7 8.2-0.2 4.8 0.2 7.5-3.5 15.5-3.3 9.1-2.6 4.3-3.4 3.7-9.7 4.9-10.7 2.9-10.9 1.7-0.7 0-2.7 0.5-2.8-0.3-4.7 0.1z"
                          id="NGFC"
                          name="Federal Capital Territory"
                          fill="#6f9c76"
                          className="map__active"
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content="Abuja"
                        ></path>

                        <text
                          x="387"
                          y="425"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fill="#FFF"
                          fontFamily="RocGroteskWide"
                          font-size="12px"
                          stroke-width="0.5"
                        >
                          Abuja
                        </text>
                      </g>
                      <g id="points">
                        <circle
                          class="4.752568550854937|3.271024698580586"
                          cx="90.9"
                          cy="738.5"
                          id="0"
                        ></circle>
                        <circle
                          class="8.595819986532453|9.270451782319844"
                          cx="545.5"
                          cy="445.3"
                          id="1"
                        ></circle>
                        <circle
                          class="13.399884281129347|14.069993449311253"
                          cx="909.1"
                          cy="74.4"
                          id="2"
                        ></circle>
                      </g>
                      <g id="label_points">
                        <circle
                          class="Kebbi"
                          cx="151.4"
                          cy="220.1"
                          id="NGKE"
                        ></circle>
                        <circle
                          class="Niger"
                          cx="265.2"
                          cy="349.4"
                          id="NGNI"
                        ></circle>
                        <circle
                          class="Kwara"
                          cx="209.5"
                          cy="444.7"
                          id="NGKW"
                        ></circle>
                        <circle
                          class="Ogun"
                          cx="94.4"
                          cy="565.6"
                          id="NGOG"
                        ></circle>
                        <circle
                          class="Oyo"
                          cx="111"
                          cy="478.1"
                          id="NGOY"
                        ></circle>
                        <circle
                          class="Lagos"
                          cx="92.4"
                          cy="601.9"
                          id="NGLA"
                        ></circle>
                        <circle
                          class="Borno"
                          cx="848.9"
                          cy="184.8"
                          id="NGBO"
                        ></circle>
                        <circle
                          class="Adamawa"
                          cx="777.8"
                          cy="379.7"
                          id="NGAD"
                        ></circle>
                        <circle
                          class="Taraba"
                          cx="647"
                          cy="493.6"
                          id="NGTA"
                        ></circle>
                        <circle
                          class="Benue"
                          cx="508.1"
                          cy="536.6"
                          id="NGBE"
                        ></circle>
                        <circle
                          class="Cross River"
                          cx="478.9"
                          cy="675"
                          id="NGCR"
                        ></circle>
                        <circle
                          class="Sokoto"
                          cx="252.5"
                          cy="91.8"
                          id="NGSO"
                        ></circle>
                        <circle
                          class="Zamfara"
                          cx="322.9"
                          cy="171.6"
                          id="NGZA"
                        ></circle>
                        <circle
                          class="Yobe"
                          cx="716.6"
                          cy="148.9"
                          id="NGYO"
                        ></circle>
                        <circle
                          class="Katsina"
                          cx="415.7"
                          cy="131.8"
                          id="NGKT"
                        ></circle>
                        <circle
                          class="Jigawa"
                          cx="574.6"
                          cy="158.3"
                          id="NGJI"
                        ></circle>
                        <circle
                          class="Ondo"
                          cx="208.5"
                          cy="582.6"
                          id="NGON"
                        ></circle>
                        <circle
                          class="Delta"
                          cx="293.6"
                          cy="685.3"
                          id="NGDE"
                        ></circle>
                        <circle
                          class="Bayelsa"
                          cx="300.6"
                          cy="737.3"
                          id="NGBY"
                        ></circle>
                        <circle
                          class="Rivers"
                          cx="369"
                          cy="722.5"
                          id="NGRI"
                        ></circle>
                        <circle
                          class="Akwa Ibom"
                          cx="434.8"
                          cy="729.3"
                          id="NGAK"
                        ></circle>
                        <circle
                          class="Abia"
                          cx="411.6"
                          cy="685.9"
                          id="NGAB"
                        ></circle>
                        <circle
                          class="Ebonyi"
                          cx="449.3"
                          cy="623.3"
                          id="NGEB"
                        ></circle>
                        <circle
                          class="Anambra"
                          cx="370.6"
                          cy="635"
                          id="NGAN"
                        ></circle>
                        <circle
                          class="Edo"
                          cx="311.9"
                          cy="584.1"
                          id="NGED"
                        ></circle>
                        <circle
                          class="Bauchi"
                          cx="578.7"
                          cy="306.7"
                          id="NGBA"
                        ></circle>
                        <circle
                          class="Plateau"
                          cx="571.8"
                          cy="414.7"
                          id="NGPL"
                        ></circle>
                        <circle
                          class="Nassarawa"
                          cx="455.2"
                          cy="452.4"
                          id="NGNA"
                        ></circle>
                        <circle
                          class="Gombe"
                          cx="694"
                          cy="306.9"
                          id="NGGO"
                        ></circle>
                        <circle
                          class="Enugu"
                          cx="402.9"
                          cy="604.5"
                          id="NGEN"
                        ></circle>
                        <circle
                          class="Kogi"
                          cx="327.8"
                          cy="499.9"
                          id="NGKO"
                        ></circle>
                        <circle
                          class="Osun"
                          cx="187.5"
                          cy="528.6"
                          id="NGOS"
                        ></circle>
                        <circle
                          class="Imo"
                          cx="377"
                          cy="680.9"
                          id="NGIM"
                        ></circle>
                        <circle
                          class="Ekiti"
                          cx="245.6"
                          cy="514"
                          id="NGEK"
                        ></circle>
                        <circle
                          class="Kaduna"
                          cx="433.4"
                          cy="299.4"
                          id="NGKD"
                        ></circle>
                        <circle
                          class="Kano"
                          cx="489"
                          cy="201.6"
                          id="NGKN"
                        ></circle>
                        <circle
                          class="Federal Capital Territory"
                          cx="383.6"
                          cy="431.5"
                          id="NGFC"
                        ></circle>
                      </g>
                    </svg>

                    <Tooltip
                      id="map-tooltip"
                      place="top"
                      style={{ fontSize: "60px" }}
                    />
                  </div>
                </>
              )}

              {page === "store" && (
                <div className="music" id="store">
                  {/* <div className="music_title pointer-title">MUSIC</div> */}
                  {/* <div className="stream_group">
             <svg
               viewBox="0 0 48 48"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               fill="#000000"
             >
               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
               <g
                 id="SVGRepo_tracerCarrier"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               ></g>
               <g id="SVGRepo_iconCarrier">
                 {" "}
                 <title>Spotify-color</title>{" "}
                 <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                 <g
                   id="Icons"
                   stroke="none"
                   strokeWidth="1"
                   fill="none"
                   fill-rule="evenodd"
                 >
                   {" "}
                   <g
                     id="Color-"
                     transform="translate(-200.000000, -460.000000)"
                     fill="#ffffff"
                   >
                     {" "}
                     <path
                       d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460"
                       id="Spotify"
                     >
                       {" "}
                     </path>{" "}
                   </g>{" "}
                 </g>{" "}
               </g>
             </svg>
             <svg
               fill="#ffffff"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
               stroke="#ffffff"
             >
               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
               <g
                 id="SVGRepo_tracerCarrier"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               ></g>
               <g id="SVGRepo_iconCarrier">
                 <path d="m24 6.124c0-.029.001-.063.001-.097 0-.743-.088-1.465-.253-2.156l.013.063c-.312-1.291-1.1-2.359-2.163-3.031l-.02-.012c-.536-.35-1.168-.604-1.847-.723l-.03-.004c-.463-.084-1.003-.138-1.553-.15h-.011c-.04 0-.083-.01-.124-.013h-12.025c-.152.01-.3.017-.455.026-.791.016-1.542.161-2.242.415l.049-.015c-1.306.501-2.327 1.495-2.853 2.748l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424.02.861.202 1.673.516 2.416l-.016-.043c.609 1.364 1.774 2.387 3.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007c.864-.096 1.645-.385 2.321-.823l-.021.013c.825-.539 1.47-1.29 1.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031c.084-.539.132-1.161.132-1.794 0-.086-.001-.171-.003-.256v.013q0-5.7 0-11.394zm-6.424 3.99v5.712c.001.025.001.054.001.083 0 .407-.09.794-.252 1.14l.007-.017c-.273.562-.771.979-1.373 1.137l-.015.003c-.316.094-.682.156-1.06.173h-.01c-.029.002-.062.002-.096.002-1.033 0-1.871-.838-1.871-1.871 0-.741.431-1.382 1.056-1.685l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24.264-.045.468-.252.51-.513v-.003c.013-.057.02-.122.02-.189 0-.002 0-.003 0-.005q0-2.723 0-5.443c-.001-.066-.01-.13-.027-.19l.001.005c-.026-.134-.143-.235-.283-.235-.006 0-.012 0-.018.001h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013-.222.03-.392.219-.392.447 0 .015.001.03.002.045v-.002.13q0 3.9 0 7.801c.001.028.001.062.001.095 0 .408-.079.797-.224 1.152l.007-.021c-.264.614-.792 1.072-1.436 1.235l-.015.003c-.319.096-.687.158-1.067.172h-.008c-.031.002-.067.003-.104.003-.913 0-1.67-.665-1.815-1.536l-.001-.011c-.02-.102-.031-.218-.031-.338 0-.785.485-1.458 1.172-1.733l.013-.004c.315-.127.687-.234 1.072-.305l.036-.005c.287-.06.575-.116.86-.177.341-.05.6-.341.6-.693 0-.007 0-.015 0-.022v.001-.15q0-4.44 0-8.883c0-.002 0-.004 0-.007 0-.129.015-.254.044-.374l-.002.011c.066-.264.277-.466.542-.517l.004-.001c.255-.066.515-.112.774-.165.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4.181-.042.407-.079.637-.104l.027-.002c.018-.002.04-.004.061-.004.27 0 .489.217.493.485.008.067.012.144.012.222v.001q0 2.865 0 5.732z"></path>
               </g>
             </svg>
             <svg
               fill="#ffffff"
               viewBox="0 0 24 24"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               stroke="#ffffff"
             >
               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
               <g
                 id="SVGRepo_tracerCarrier"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               ></g>
               <g id="SVGRepo_iconCarrier">
                 <title>Audiomack icon</title>
                 <path d="M.33 11.39s.54-.09.77.14c.22.23.07.71-.22.72-.3.01-.57.06-.77-.14a.443.443 0 01.22-.72zm5.88 3.26c-.05.01-.11-.02-.16-.06-.39-.53-.53-2.37-.71-2.48-.18-.11-.85 1.02-2.19.9-.55-.05-1.12-.41-1.45-.66.03-.41.03-1.39.86-1.07.51.19 1.37.72 2.13-.23.84-1.05 1.3-.74 1.57-.51.28.22.1 1.41.51 1.08.41-.33 2.08-2.39 2.08-2.39s1.29-1.29 1.49.06c.2 1.36 1.04 2.87 1.27 2.82.22-.04 2.82-5.27 3.19-5.61.37-.34 1.63-.29 1.57.57-.06.87-.19 6.25-.19 6.25s-.15 1.52.09.71c.1-.34.21-.64.34-1 .64-2.03 1.73-5.51 2.28-7.3.12-.42.23-.79.32-1.07v-.01c.03-.13.06-.23.09-.32.05-.15.08-.26.09-.28.02-.07.09-.12.19-.16.09-.06.2-.06.31-.06.31-.03.69.01 1.04.11.11 0 .22.03.32.11 0 0 .01 0 .02.01.03.02.06.05.1.1h.01c.01.02.03.05.05.07.19.29.31.81.19 1.74-.3 2.31-.53 7.07-.53 7.07s-.05.23.44-.77c.01-.04.03-.07.05-.1.03-.02.06-.04.1-.08.29-.36 1.09-.56 1.65-.56.23.03.43.09.54.16.22.33.09 1.55.09 1.55-.46.04-1.34.29-1.65.33-.31.05-.78 2.05-1.44 1.85-.66-.21-2.13-1.12-2.13-1.24 0-.11.12-1.44.15-1.79v-.07-.01c.03-.27.01-.39-.12-.12-.11.23-.58 1.72-1.11 3.34-.05.14-1.05 3.13-1.18 3.49-.15.42-.29.75-.38.91-.13.19-.32.3-.58.23-.65-.2-1.46-1.08-1.47-1.3-.02-1.24.06-7.9-.24-7.35-.32.57-2.73 4.52-2.73 4.52-.04.01-.07.01-.11.01-.17-.02-.44-.07-.51-.23 0-.01-.01-.02-.01-.03-.01-.01-.01-.02-.02-.04-.03-.11-.04-.23-.07-.33-.11-.36-.28-.88-.47-1.4-.27-.9-.56-1.82-.61-1.92-.09-.2-.22-.12-.35 0-.54.45-1.68 2.45-2.72 2.56z"></path>
               </g>
             </svg>
             <svg
               fill="#ffffff"
               viewBox="0 0 32 32"
               xmlns="http://www.w3.org/2000/svg"
               stroke="#ffffff"
             >
               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
               <g
                 id="SVGRepo_tracerCarrier"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               ></g>
               <g id="SVGRepo_iconCarrier">
                 {" "}
                 <path d="M16.016 5.323l-5.339 5.339-5.339-5.339-5.339 5.339 5.339 5.339 5.339-5.339 5.339 5.339-5.339 5.339 5.339 5.339 5.339-5.339-5.339-5.339 5.339-5.339zM21.391 10.661l5.302-5.307 5.307 5.307-5.307 5.307z"></path>{" "}
               </g>
             </svg>
           </div> */}
                  {/* <img className="performance" src={AmandanadI} alt="" />{" "} */}
                  <div className="music_slider">
                    <svg
                      className="pointer music_prev_btn prev_btn"
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div className="music_inner">
                      <a
                        //  href="https://paystack.com/pay/nvdyhwcpxf"
                        //  target="_blank"
                        className="slider_item"
                      >
                        <img
                          className="music_artwork"
                          src={BlackFront}
                          alt=""
                        />
                        <div className="music_gif store_gif">
                          <img src={BlackBack} alt="" />
                        </div>
                        <div className="music_name">Tour Black Tee</div>
                        <a
                          href="https://paystack.com/pay/nvdyhwcpxf"
                          target="_blank"
                        >
                          <button className="music_button">Buy now</button>
                        </a>
                      </a>
                      <a
                        // href="https://paystack.com/pay/nvdyhwcpxf"
                        // target="_blank"
                        className="slider_item"
                      >
                        <img
                          className="music_artwork"
                          src={WhiteFront}
                          alt=""
                        />
                        <div className="music_gif store_gif">
                          <img src={WhiteBack} alt="" />
                        </div>
                        <div className="music_name">Tour White Tee</div>
                        <a
                          href="https://paystack.com/pay/nvdyhwcpxf"
                          target="_blank"
                        >
                          <button className="music_button">Buy now</button>
                        </a>
                      </a>
                      <a
                        // href="https://paystack.com/pay/nvdyhwcpxf"
                        // target="_blank"
                        className="slider_item"
                      >
                        <img
                          className="music_artwork"
                          src={BlackFront}
                          alt=""
                        />
                        <div className="music_gif store_gif">
                          <img src={BlackBack} alt="" />
                        </div>
                        <div className="music_name">Tour Black Tee</div>
                        <a
                          href="https://paystack.com/pay/nvdyhwcpxf"
                          target="_blank"
                        >
                          <button className="music_button">Buy now</button>
                        </a>
                      </a>
                      <a
                        // href="https://paystack.com/pay/nvdyhwcpxf"
                        // target="_blank"
                        className="slider_item"
                      >
                        <img
                          className="music_artwork"
                          src={WhiteFront}
                          alt=""
                        />
                        <div className="music_gif store_gif">
                          <img src={WhiteBack} alt="" />
                        </div>
                        <div className="music_name">Tour White Tee</div>
                        <a
                          href="https://paystack.com/pay/nvdyhwcpxf"
                          target="_blank"
                        >
                          <button className="music_button">Buy now</button>
                        </a>
                      </a>
                    </div>

                    <svg
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                      className="pointer music_next_btn next_btn"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              {page === "music" && (
                <div className="music" id="music">
                  {/* <div className="music_title pointer-title">MUSIC</div> */}
                  {/* <div className="stream_group">
                <svg
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Spotify-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-200.000000, -460.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <path
                          d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460"
                          id="Spotify"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <svg
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="m24 6.124c0-.029.001-.063.001-.097 0-.743-.088-1.465-.253-2.156l.013.063c-.312-1.291-1.1-2.359-2.163-3.031l-.02-.012c-.536-.35-1.168-.604-1.847-.723l-.03-.004c-.463-.084-1.003-.138-1.553-.15h-.011c-.04 0-.083-.01-.124-.013h-12.025c-.152.01-.3.017-.455.026-.791.016-1.542.161-2.242.415l.049-.015c-1.306.501-2.327 1.495-2.853 2.748l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424.02.861.202 1.673.516 2.416l-.016-.043c.609 1.364 1.774 2.387 3.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007c.864-.096 1.645-.385 2.321-.823l-.021.013c.825-.539 1.47-1.29 1.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031c.084-.539.132-1.161.132-1.794 0-.086-.001-.171-.003-.256v.013q0-5.7 0-11.394zm-6.424 3.99v5.712c.001.025.001.054.001.083 0 .407-.09.794-.252 1.14l.007-.017c-.273.562-.771.979-1.373 1.137l-.015.003c-.316.094-.682.156-1.06.173h-.01c-.029.002-.062.002-.096.002-1.033 0-1.871-.838-1.871-1.871 0-.741.431-1.382 1.056-1.685l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24.264-.045.468-.252.51-.513v-.003c.013-.057.02-.122.02-.189 0-.002 0-.003 0-.005q0-2.723 0-5.443c-.001-.066-.01-.13-.027-.19l.001.005c-.026-.134-.143-.235-.283-.235-.006 0-.012 0-.018.001h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013-.222.03-.392.219-.392.447 0 .015.001.03.002.045v-.002.13q0 3.9 0 7.801c.001.028.001.062.001.095 0 .408-.079.797-.224 1.152l.007-.021c-.264.614-.792 1.072-1.436 1.235l-.015.003c-.319.096-.687.158-1.067.172h-.008c-.031.002-.067.003-.104.003-.913 0-1.67-.665-1.815-1.536l-.001-.011c-.02-.102-.031-.218-.031-.338 0-.785.485-1.458 1.172-1.733l.013-.004c.315-.127.687-.234 1.072-.305l.036-.005c.287-.06.575-.116.86-.177.341-.05.6-.341.6-.693 0-.007 0-.015 0-.022v.001-.15q0-4.44 0-8.883c0-.002 0-.004 0-.007 0-.129.015-.254.044-.374l-.002.011c.066-.264.277-.466.542-.517l.004-.001c.255-.066.515-.112.774-.165.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4.181-.042.407-.079.637-.104l.027-.002c.018-.002.04-.004.061-.004.27 0 .489.217.493.485.008.067.012.144.012.222v.001q0 2.865 0 5.732z"></path>
                  </g>
                </svg>
                <svg
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>Audiomack icon</title>
                    <path d="M.33 11.39s.54-.09.77.14c.22.23.07.71-.22.72-.3.01-.57.06-.77-.14a.443.443 0 01.22-.72zm5.88 3.26c-.05.01-.11-.02-.16-.06-.39-.53-.53-2.37-.71-2.48-.18-.11-.85 1.02-2.19.9-.55-.05-1.12-.41-1.45-.66.03-.41.03-1.39.86-1.07.51.19 1.37.72 2.13-.23.84-1.05 1.3-.74 1.57-.51.28.22.1 1.41.51 1.08.41-.33 2.08-2.39 2.08-2.39s1.29-1.29 1.49.06c.2 1.36 1.04 2.87 1.27 2.82.22-.04 2.82-5.27 3.19-5.61.37-.34 1.63-.29 1.57.57-.06.87-.19 6.25-.19 6.25s-.15 1.52.09.71c.1-.34.21-.64.34-1 .64-2.03 1.73-5.51 2.28-7.3.12-.42.23-.79.32-1.07v-.01c.03-.13.06-.23.09-.32.05-.15.08-.26.09-.28.02-.07.09-.12.19-.16.09-.06.2-.06.31-.06.31-.03.69.01 1.04.11.11 0 .22.03.32.11 0 0 .01 0 .02.01.03.02.06.05.1.1h.01c.01.02.03.05.05.07.19.29.31.81.19 1.74-.3 2.31-.53 7.07-.53 7.07s-.05.23.44-.77c.01-.04.03-.07.05-.1.03-.02.06-.04.1-.08.29-.36 1.09-.56 1.65-.56.23.03.43.09.54.16.22.33.09 1.55.09 1.55-.46.04-1.34.29-1.65.33-.31.05-.78 2.05-1.44 1.85-.66-.21-2.13-1.12-2.13-1.24 0-.11.12-1.44.15-1.79v-.07-.01c.03-.27.01-.39-.12-.12-.11.23-.58 1.72-1.11 3.34-.05.14-1.05 3.13-1.18 3.49-.15.42-.29.75-.38.91-.13.19-.32.3-.58.23-.65-.2-1.46-1.08-1.47-1.3-.02-1.24.06-7.9-.24-7.35-.32.57-2.73 4.52-2.73 4.52-.04.01-.07.01-.11.01-.17-.02-.44-.07-.51-.23 0-.01-.01-.02-.01-.03-.01-.01-.01-.02-.02-.04-.03-.11-.04-.23-.07-.33-.11-.36-.28-.88-.47-1.4-.27-.9-.56-1.82-.61-1.92-.09-.2-.22-.12-.35 0-.54.45-1.68 2.45-2.72 2.56z"></path>
                  </g>
                </svg>
                <svg
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M16.016 5.323l-5.339 5.339-5.339-5.339-5.339 5.339 5.339 5.339 5.339-5.339 5.339 5.339-5.339 5.339 5.339 5.339 5.339-5.339-5.339-5.339 5.339-5.339zM21.391 10.661l5.302-5.307 5.307 5.307-5.307 5.307z"></path>{" "}
                  </g>
                </svg>
              </div> */}
                  {/* <img className="performance" src={AmandanadI} alt="" />{" "} */}
                  <div className="music_slider">
                    <svg
                      className="pointer music_prev_btn prev_btn"
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div className="music_inner">
                      <a
                        href="https://open.spotify.com/track/1IWBeLzkyQ8ijoAD8BjIiU?si=44dba142aa004fe7"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork" src={GenzArewa} alt="" />
                        {/* <div className="music_gif">
                      <img src={Genzfuji} alt="" />
                    </div> */}
                        <div className="music_name">Gen-Z Arewa</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://open.spotify.com/track/6ML4o3KWB24d8R7RU6fVkl?si=cfd04121cc7148da"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork" src={Genzfaaji} alt="" />
                        {/* <div className="music_gif">
                      <img src={Genzfuji} alt="" />
                    </div> */}
                        <div className="music_name">Gen-Z Faaji</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://waverlymusik.lnk.to/GenZFujiII"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork" src={Genzfuji} alt="" />
                        {/* <div className="music_gif">
                      <img src={Genzfuji} alt="" />
                    </div> */}
                        <div className="music_name">Gen-Z Fuji II</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://onerpm.link/gen-zfuji"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork" src={Genzfuji} alt="" />
                        {/* <div className="music_gif">
                      <img src={Genzfuji} alt="" />
                    </div> */}
                        <div className="music_name">Gen-Z Fuji</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://onerpm.link/firstklaz-ogini"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork" src={Ogini} alt="" />
                        {/* <div className="music_gif">
                      <img src={Ogini} alt="" />
                    </div> */}
                        <div className="music_name">Ogini</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://orcd.co/ilikegirls_firstklazhitsound"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork" src={Ilg} alt="" />
                        <div className="music_gif">
                          <img src={IlgGif} alt="" />
                        </div>
                        <div className="music_name">I like girls</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://onerpm.link/FirstKlaz-So"
                        target="_blank"
                      >
                        <img src={Só} alt="" />
                        <div className="music_gif">
                          <img src={SoGif} alt="" />
                        </div>
                        <div className="music_name">só</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://fanlink.to/helicopter-boy"
                        target="_blank"
                      >
                        <img src={HelicopterBoyFreestyle} alt="" />
                        <div className="music_gif">
                          <img src={HelicopterGif} alt="" />
                        </div>
                        <div className="music_name">
                          Helicopter boy(freestyle)
                        </div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://mad.ffm.to/firstklaz-inwgs"
                        target="_blank"
                      >
                        <img src={Inwgs} alt="" />
                        <div className="music_gif">
                          <img src={InwgsGif} alt="" />
                        </div>
                        <div className="music_name">I no wan go school</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://fanlink.to/Firstklaz-Sliders"
                        target="_blank"
                      >
                        <img src={Sliders} alt="" />
                        <div className="music_gif">
                          <img src={SlidersGif} alt="" />
                        </div>
                        <div className="music_name">sLIDERS</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://fanlink.to/Firstklaz-Sacrifice"
                        target="_blank"
                      >
                        <img src={Sacrifice} alt="" />
                        <div className="music_gif">
                          {/* <img src={ShowThemGif} alt="" /> */}
                        </div>
                        <div className="music_name">sAcrifice</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a href="https://fanlink.to/ShowThem" target="_blank">
                        <img src={Olomi} alt="" />
                        <div className="music_gif">
                          {/* <img src={ShowThemGif} alt="" /> */}
                        </div>
                        <div className="music_name">Olomi</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a href="https://fanlink.to/ShowThem" target="_blank">
                        <img src={ShowThem} alt="" />
                        <div className="music_gif">
                          {/* <img src={ShowThemGif} alt="" /> */}
                        </div>
                        <div className="music_name">show Them</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a>
                        <img src={Gbese} alt="" />
                        <div className="music_gif">
                          {/* <img src={HelicopterGif} alt="" /> */}
                        </div>
                        <div className="music_name">Gbese</div>
                        <button className="music_button">Listen now</button>
                      </a>
                      <a
                        href="https://open.spotify.com/track/4LHgluF02FqumshmgPop4a?si=a33fdc13aa274211"
                        target="_blank"
                      >
                        <img src={Tonight} alt="" />
                        <div className="music_gif">
                          {/* <img src={HelicopterGif} alt="" /> */}
                        </div>
                        <div className="music_name">Tonight</div>
                        <button className="music_button">Listen now</button>
                      </a>
                    </div>

                    <svg
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                      className="pointer music_next_btn next_btn"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              {page === "videos" && (
                <div className="videos" id="videos">
                  {/* <div className="videos_title pointer-title">VIDEOS</div> */}
                  {/* <div className="youtube_sec">
                <svg
                  viewBox="0 -146.13 500.612 500.612"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M83.743 168.876c-4.007-1.375-6.746-3.24-10.09-6.863-7.024-7.611-7.41-9.883-7.41-43.682 0-32.567.5-35.634 7.044-43.281 9.175-10.718 30.39-10.401 39.45.589 6.017 7.3 6.506 10.55 6.506 43.192 0 25.834-.224 30.14-1.8 34.66-2.416 6.922-9.535 13.619-16.758 15.764-6.812 2.023-10.167 1.949-16.942-.38zm12.455-15.666c4.09-1.57 4.545-5.006 4.545-34.282 0-18.682-.376-28.828-1.13-30.482-2.53-5.554-11.21-5.554-13.74 0-.754 1.654-1.13 11.8-1.13 30.482 0 32.665.417 34.56 7.668 34.825 1.193.043 2.897-.202 3.787-.543zm44.427 15.118c-1.44-.782-3.466-3.128-4.5-5.21-1.745-3.512-1.903-7.104-2.179-49.537l-.297-45.75h19.094v41.877c0 35.843.214 42.057 1.487 43.112 2.216 1.839 5.816.493 9.887-3.697l3.626-3.733V67.832h19v101h-19v-10.17l-4.75 4.217c-2.612 2.319-6.198 4.832-7.968 5.585-4.126 1.753-11.043 1.687-14.4-.136zM24.73 141.08l-.015-27.75-12.357-39.5L.001 34.33l10.04-.287c5.877-.168 10.293.124 10.651.704.337.545 3.524 12.035 7.082 25.533 3.56 13.498 6.698 24.544 6.977 24.546.28.002 2.902-9.108 5.828-20.246 2.927-11.137 5.992-22.612 6.813-25.5l1.493-5.25h10.536c8.584 0 10.438.258 10.003 1.39-.293.764-5.967 18.745-12.607 39.957l-12.073 38.567v55.086h-20l-.014-27.75z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M284.873 207.783c-48.855-1.631-62.084-5.108-71.078-18.688-3.634-5.486-7.713-17.764-9.012-27.128-4.56-32.866-3.44-101.4 2.041-125.021 4.964-21.391 16.637-31.87 37.931-34.053C265.673.748 320.203-.42 373.243.14c57.262.604 84.221 1.829 93.975 4.27 19.08 4.773 28.336 18.828 31.563 47.92.61 5.5 1.36 24.702 1.666 42.67 1.234 72.535-4.223 95.61-25.02 105.799-7.853 3.848-12.99 4.732-35.185 6.057-24.106 1.438-122.48 2.025-155.369.927zm24.034-39.536c1.686-.873 5.038-3.404 7.45-5.63l4.386-4.04v10.254h19v-100h-19V145.095l-4.368 4.367c-4.688 4.689-6.584 5.274-9.06 2.798-1.378-1.378-1.572-6.626-1.572-42.5V68.83h-19v43.319c0 47.787.393 51.568 5.768 55.58 3.403 2.539 11.964 2.809 16.396.518zm91.45-.323c1.745-1.064 4.163-4.03 5.5-6.746 2.346-4.764 2.393-5.42 2.722-37.828.36-35.532-.212-41.948-4.386-49.15-2.319-4.002-7.849-7.37-12.104-7.37-4.098 0-9.97 2.757-14.447 6.782l-4.898 4.403V34.83h-18v134h18v-9.232l4.105 3.709c2.258 2.039 5.521 4.324 7.25 5.076 4.643 2.022 12.557 1.798 16.258-.46zm-23.864-16.312l-3.75-2.174v-61.33l4.438-2.354c3.601-1.91 4.968-2.167 7.25-1.366 4.931 1.732 5.462 5.552 5.12 36.78l-.308 27.838-2.806 2.412c-3.435 2.954-5.123 2.987-9.944.194zm84.25 16.135c9.664-4.381 14.016-11.79 14.777-25.158l.5-8.758h-19.278v5.936c0 7.27-1.127 10.446-4.487 12.648-3.787 2.48-8.494.904-10.76-3.605-1.369-2.721-1.75-6.037-1.75-15.23l-.003-11.75h36v-14.683c0-18.48-1.445-24.37-7.676-31.3-5.506-6.123-11.405-8.561-20.324-8.397-7.393.135-12.333 1.978-17.522 6.534-8.48 7.447-9.766 14.082-9.259 47.847.33 21.939.693 27.284 2.117 31.057 2.432 6.442 6.825 11.347 12.858 14.354 6.8 3.386 17.95 3.614 24.807.505zm-21-68.45c0-12.438 3.191-16.682 11.221-14.918 4.031.886 5.78 5.398 5.78 14.919v7.532h-17v-7.532zm-172 12.034v-57.5h22v-19h-63v19h21v115h20v-57.5z"
                      fill="#fffffffffff"
                    ></path>
                  </g>
                </svg>
              </div> */}
                  {/* <img className="performance" src={Dazed} alt="" />{" "} */}
                  <div className="video_slider">
                    <svg
                      className="pointer svg_phase1 video_prev_btn prev_btn"
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <svg
                      className="svg_phase2"
                      viewBox="0 -3.64 136.42 136.42"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs> </defs>{" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M3.67,103.46c2.1-2,3.35-3.59,5-4.56,3.68-2.17,7.53-4.08,11.37-6,6.15-3,12.4-5.86,18.51-9,13.75-7,27.43-14.15,41.14-21.25,1.19-.61,2.33-1.33,3.46-2-.44-.92-.54-1.63-.88-1.78C68.6,53.06,55,47.12,41.23,41.45c-9.51-3.92-19-8-29.39-9.25a17.26,17.26,0,0,1-5.69-1.84c-4.76-2.51-8-7.08-5-13.59C3.62,11.63,5.72,6.33,7.88,1.32a17.07,17.07,0,0,1,13.78.28c6,2.63,12.11,5.19,18,8.11C52,15.79,64.32,21.82,76.39,28.37q15.49,8.4,31.69,15.26c5.26,2.23,10.32,4.94,15.48,7.42,2.56,1.24,5.18,2.4,7.68,3.75,1.67.91,3.18,2.1,5.18,3.45-2,3.38-3.7,6.23-6.47,8.35-13.84,10.6-27.7,21.23-42.85,29.91C77.43,102.05,67.4,107,57.51,112.1q-12.54,6.54-25.14,13a73.73,73.73,0,0,1-7,3.29c-4,1.57-6.75.84-8.85-2.66C12.29,118.61,8.25,111.4,3.67,103.46ZM9,23.33c2.9.79,4.78,1.44,6.7,1.79,11.91,2.18,23.13,6.45,34.21,11.13q20.14,8.51,40.26,17.12c3.9,1.68,7.7,3.57,10.42,7.64-1.29,1.42-2.2,2.92-3.52,3.76a83.13,83.13,0,0,1-7.62,4C77.18,74.8,64.79,80.69,52.62,87c-10.15,5.26-20,11.06-30.77,15.1-2.35.88-4.84,1.84-6.14,5,1.91,4.39,3.95,9,8.33,12.28,2.73-1.38,5.3-2.61,7.81-4,13.6-7.3,27.15-14.69,40.79-21.92a257.62,257.62,0,0,0,46.89-31.53,22.25,22.25,0,0,0,2.23-2.61c-.85-.76-1.38-1.52-2.09-1.81A589.81,589.81,0,0,1,62.48,30c-13-7.11-26.68-13.13-40.13-19.48-2.19-1-4.49-2.8-7.78-1.08-.86,1.9-2,4.19-2.93,6.54C10.79,18.09,10.11,20.23,9,23.33Z"></path>{" "}
                            <path
                              fill="#ffffff"
                              class="cls-1"
                              d="M9,23.33c1.1-3.1,1.78-5.24,2.63-7.31,1-2.35,2.07-4.64,2.93-6.54,3.29-1.72,5.59,0,7.78,1.08C35.8,16.91,49.44,22.93,62.48,30a589.81,589.81,0,0,0,57.19,27.48c.71.29,1.24,1,2.09,1.81a22.25,22.25,0,0,1-2.23,2.61A257.62,257.62,0,0,1,72.64,93.47C59,100.7,45.45,108.09,31.85,115.39c-2.51,1.34-5.08,2.57-7.81,4-4.38-3.3-6.42-7.89-8.33-12.28,1.3-3.13,3.79-4.09,6.14-5,10.75-4,20.62-9.84,30.77-15.1,12.17-6.3,24.56-12.19,36.84-18.27a83.13,83.13,0,0,0,7.62-4c1.32-.84,2.23-2.34,3.52-3.76-2.72-4.07-6.52-6-10.42-7.64Q70.07,44.76,49.92,36.25c-11.08-4.68-22.3-8.95-34.21-11.13C13.79,24.77,11.91,24.12,9,23.33Z"
                            ></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div className="videos_inner">
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/7BUKkUk-Tdg?si=OYwn60x_GxbHJPNc"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/-WHUPDGxw_I?si=v4qAd2eVguigtdri"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/RKFgn116iDs?si=ZQH7pGpgI1cqECsg"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/9r1u5eH31n0?si=6ewbh-qmYsFP-mV4"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/AsYJ3y0DT5I?si=82mQins_x1I3SNus"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/vSF_B0S2iss?si=Y3XF09GrlffLuc7a"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/YdARqW-HHLE?si=ai6INzaXm-4B0Iwl"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="youtube_video_container">
                        <iframe
                          className="youtube_video"
                          src="https://www.youtube-nocookie.com/embed/GyndgOsaKtk?si=cEcofGRetsfVznKB"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <svg
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                      className="pointer video_next_btn next_btn"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              {page === "shows" && (
                <div className="music" id="music">
                  {/* <div className="music_title pointer-title">MUSIC</div> */}
                  {/* <div className="stream_group">
              <svg
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>Spotify-color</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-200.000000, -460.000000)"
                      fill="#ffffff"
                    >
                      {" "}
                      <path
                        d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460"
                        id="Spotify"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m24 6.124c0-.029.001-.063.001-.097 0-.743-.088-1.465-.253-2.156l.013.063c-.312-1.291-1.1-2.359-2.163-3.031l-.02-.012c-.536-.35-1.168-.604-1.847-.723l-.03-.004c-.463-.084-1.003-.138-1.553-.15h-.011c-.04 0-.083-.01-.124-.013h-12.025c-.152.01-.3.017-.455.026-.791.016-1.542.161-2.242.415l.049-.015c-1.306.501-2.327 1.495-2.853 2.748l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424.02.861.202 1.673.516 2.416l-.016-.043c.609 1.364 1.774 2.387 3.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007c.864-.096 1.645-.385 2.321-.823l-.021.013c.825-.539 1.47-1.29 1.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031c.084-.539.132-1.161.132-1.794 0-.086-.001-.171-.003-.256v.013q0-5.7 0-11.394zm-6.424 3.99v5.712c.001.025.001.054.001.083 0 .407-.09.794-.252 1.14l.007-.017c-.273.562-.771.979-1.373 1.137l-.015.003c-.316.094-.682.156-1.06.173h-.01c-.029.002-.062.002-.096.002-1.033 0-1.871-.838-1.871-1.871 0-.741.431-1.382 1.056-1.685l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24.264-.045.468-.252.51-.513v-.003c.013-.057.02-.122.02-.189 0-.002 0-.003 0-.005q0-2.723 0-5.443c-.001-.066-.01-.13-.027-.19l.001.005c-.026-.134-.143-.235-.283-.235-.006 0-.012 0-.018.001h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013-.222.03-.392.219-.392.447 0 .015.001.03.002.045v-.002.13q0 3.9 0 7.801c.001.028.001.062.001.095 0 .408-.079.797-.224 1.152l.007-.021c-.264.614-.792 1.072-1.436 1.235l-.015.003c-.319.096-.687.158-1.067.172h-.008c-.031.002-.067.003-.104.003-.913 0-1.67-.665-1.815-1.536l-.001-.011c-.02-.102-.031-.218-.031-.338 0-.785.485-1.458 1.172-1.733l.013-.004c.315-.127.687-.234 1.072-.305l.036-.005c.287-.06.575-.116.86-.177.341-.05.6-.341.6-.693 0-.007 0-.015 0-.022v.001-.15q0-4.44 0-8.883c0-.002 0-.004 0-.007 0-.129.015-.254.044-.374l-.002.011c.066-.264.277-.466.542-.517l.004-.001c.255-.066.515-.112.774-.165.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4.181-.042.407-.079.637-.104l.027-.002c.018-.002.04-.004.061-.004.27 0 .489.217.493.485.008.067.012.144.012.222v.001q0 2.865 0 5.732z"></path>
                </g>
              </svg>
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Audiomack icon</title>
                  <path d="M.33 11.39s.54-.09.77.14c.22.23.07.71-.22.72-.3.01-.57.06-.77-.14a.443.443 0 01.22-.72zm5.88 3.26c-.05.01-.11-.02-.16-.06-.39-.53-.53-2.37-.71-2.48-.18-.11-.85 1.02-2.19.9-.55-.05-1.12-.41-1.45-.66.03-.41.03-1.39.86-1.07.51.19 1.37.72 2.13-.23.84-1.05 1.3-.74 1.57-.51.28.22.1 1.41.51 1.08.41-.33 2.08-2.39 2.08-2.39s1.29-1.29 1.49.06c.2 1.36 1.04 2.87 1.27 2.82.22-.04 2.82-5.27 3.19-5.61.37-.34 1.63-.29 1.57.57-.06.87-.19 6.25-.19 6.25s-.15 1.52.09.71c.1-.34.21-.64.34-1 .64-2.03 1.73-5.51 2.28-7.3.12-.42.23-.79.32-1.07v-.01c.03-.13.06-.23.09-.32.05-.15.08-.26.09-.28.02-.07.09-.12.19-.16.09-.06.2-.06.31-.06.31-.03.69.01 1.04.11.11 0 .22.03.32.11 0 0 .01 0 .02.01.03.02.06.05.1.1h.01c.01.02.03.05.05.07.19.29.31.81.19 1.74-.3 2.31-.53 7.07-.53 7.07s-.05.23.44-.77c.01-.04.03-.07.05-.1.03-.02.06-.04.1-.08.29-.36 1.09-.56 1.65-.56.23.03.43.09.54.16.22.33.09 1.55.09 1.55-.46.04-1.34.29-1.65.33-.31.05-.78 2.05-1.44 1.85-.66-.21-2.13-1.12-2.13-1.24 0-.11.12-1.44.15-1.79v-.07-.01c.03-.27.01-.39-.12-.12-.11.23-.58 1.72-1.11 3.34-.05.14-1.05 3.13-1.18 3.49-.15.42-.29.75-.38.91-.13.19-.32.3-.58.23-.65-.2-1.46-1.08-1.47-1.3-.02-1.24.06-7.9-.24-7.35-.32.57-2.73 4.52-2.73 4.52-.04.01-.07.01-.11.01-.17-.02-.44-.07-.51-.23 0-.01-.01-.02-.01-.03-.01-.01-.01-.02-.02-.04-.03-.11-.04-.23-.07-.33-.11-.36-.28-.88-.47-1.4-.27-.9-.56-1.82-.61-1.92-.09-.2-.22-.12-.35 0-.54.45-1.68 2.45-2.72 2.56z"></path>
                </g>
              </svg>
              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M16.016 5.323l-5.339 5.339-5.339-5.339-5.339 5.339 5.339 5.339 5.339-5.339 5.339 5.339-5.339 5.339 5.339 5.339 5.339-5.339-5.339-5.339 5.339-5.339zM21.391 10.661l5.302-5.307 5.307 5.307-5.307 5.307z"></path>{" "}
                </g>
              </svg>
            </div> */}
                  {/* <img className="performance" src={AmandanadI} alt="" />{" "} */}
                  <div className="music_slider">
                    <svg
                      className="pointer music_prev_btn prev_btn"
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div className="music_inner">
                      <a
                        href="https://open.spotify.com/track/1IWBeLzkyQ8ijoAD8BjIiU?si=44dba142aa004fe7"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork shows_image" src={FAndFPh} alt="" />
                        {/* <div className="music_gif">
                    <img src={Genzfuji} alt="" />
                  </div> */}
                        <div className="music_name">
                          Firstklaz & Friends PortHarcourt
                        </div>
                        <button className="music_button">Sold out</button>
                      </a>
                      <a
                        href="https://open.spotify.com/track/6ML4o3KWB24d8R7RU6fVkl?si=cfd04121cc7148da"
                        target="_blank"
                        className="slider_item"
                      >
                        <img className="music_artwork shows_image" src={FAndFAbj} alt="" />
                        {/* <div className="music_gif">
                    <img src={Genzfuji} alt="" />
                  </div> */}
                        <div className="music_name">
                          Firstklaz & Friends Abuja
                        </div>
                        <button className="music_button">Sold out</button>
                      </a>
                      <a
                        href="https://waverlymusik.lnk.to/GenZFujiII"
                        target="_blank"
                        className="slider_item"
                      >
                        <img
                          className="music_artwork shows_image"
                          src={LagosStreetShow}
                          alt=""
                        />
                        {/* <div className="music_gif">
                    <img src={Genzfuji} alt="" />
                  </div> */}
                        <div className="music_name">
                          Firstklaz Club Tour Lagos
                        </div>
                        <button className="music_button">Sold out</button>
                      </a>
                      <a
                        href="https://onerpm.link/gen-zfuji"
                        target="_blank"
                        className="slider_item shows_image"
                      >
                        <img
                          className="music_artwork shows_image"
                          src={AbujaStreetShow}
                          alt=""
                        />
                        {/* <div className="music_gif">
                    <img src={Genzfuji} alt="" />
                  </div> */}
                        <div className="music_name">
                          Firstklaz Street Show Abuja
                        </div>
                        <button className="music_button">Sold out</button>
                      </a>
                    </div>

                    <svg
                      fill="#ffffff"
                      viewBox="-28.75 0 156.07 156.07"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                      className="pointer music_next_btn next_btn"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Layer_2" data-name="Layer 2">
                          {" "}
                          <g id="Layer_1-2" data-name="Layer 1">
                            {" "}
                            <path d="M10.52,144.16c1.6-6,6.59-9.36,9.77-14,3.39-5,7.08-9.7,10.69-14.5,3.43-4.58,7-9.05,10.38-13.68q5.3-7.27,10.31-14.77c3.14-4.71,7.27-8.82,9.24-14.65a43.89,43.89,0,0,0-4.21-4.2c-11.17-8.55-21-18.6-31.07-28.29A244.78,244.78,0,0,0,.49,19c-1.36-3.78.28-7.13,2.85-9.94a67.92,67.92,0,0,1,8.23-7.49c3.09-2.41,6.61-1.78,9.74-.1,5.05,2.7,9.91,5.72,14.85,8.62.49.29.92.69,1.42,1C55.06,20.81,69.32,34.42,83,48.78c3.94,4.15,8.07,8.11,12,12.29,4.29,4.59,4.69,6.89,1.68,12.21C93,79.74,89,86,85.09,92.35c-2.53,4.15-5.14,8.25-7.61,12.44-7.88,13.38-18.22,24.89-27.89,36.92A71.4,71.4,0,0,1,37.4,153.66c-4,3.07-7.49,3.2-11.8.42C20.81,151,16.09,147.83,10.52,144.16Zm77.72-76.8c-16.66-22.57-52.8-52-71.87-58.5-2.31,1.85-4.8,3.67-5.83,7.31,2.43,2,4.84,4,7.17,6.06,6.65,5.85,13.58,11.45,19.84,17.7A342.33,342.33,0,0,0,66.84,66.35c1.75,1.39,3.29,3,5.27,4.88-1.68,3.57-2.85,7.17-4.89,10.17q-9.39,13.83-19.37,27.25c-7.52,10.09-15.36,19.93-23,29.91a23.3,23.3,0,0,0-1.64,2.92c1.79,3.2,4.59,4.31,7.38,5.13,6.78-4.46,19-17.77,28.65-31C73.15,96.5,86.16,74.86,88.24,67.36Z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              {/* <div className="shows2">
              <div className="shows2__card1">
               
                <div className="shows2__card1__card">
                  Why would I want<span><img className="amanda-slant" src={Amanda} alt="" /></span> <span><img className="amanda-straight" src={Amanda} alt="" /></span>furniture from<span><img className="amanda-slant" src={Amanda} alt="" /></span>a century
                </div>
                
              </div>
              <div className="shows2__card2"></div>
            </div> */}
              {page === "latest release" && (
                <div className="album">
                  <div className="album_title">
                    LATEST RELEASE:
                    <br />
                    GEN-Z AREWA
                  </div>
                  <div className="album_subtitle">LISTEN HERE</div>
                  <div className="view">
                    <iframe
                      style={{ borderRadius: "26px" }}
                      src="https://open.spotify.com/embed/album/3qz5yYzCzLyPMPiiS3PR2D?utm_source=generator&theme=0"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowfullscreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}
              {page === "gallery" && (
                <div className="grid-container">
                  <div className="image-grid">
                    {gridImages.map((aspect, index) => (
                      <div
                        key={index}
                        className={`grid-item ${
                          hoveredIndex === index ? "hovered" : ""
                        }`}
                        style={{
                          gridColumn: `span ${
                            hoveredIndex === index
                              ? Math.min(aspect.cols + 1, 3)
                              : aspect.cols
                          }`,
                          gridRow: `span ${
                            hoveredIndex === index
                              ? Math.min(aspect.rows + 1, 2)
                              : aspect.rows
                          }`,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <img
                          src={aspect?.src}
                          alt={`Grid image ${index + 1}`}
                        />
                        <div className="overlay" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          </main>
          {/* <footer>
            <div className="title">BECOME A FIRSTKLAZ CITZEN!</div>

            <form className="form" onSubmit={handleSubscribe}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">
                {loading ? "Loading..." : "Register"}
              </button>
            </form>
          </footer> */}

          <div className="socials">
            {/* Instagram */}
            <svg
              fill="#000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xmlSpace="preserve"
              onClick={() => window.open("https://instagram.com/firstklaz")}
            >
              <defs>
                <linearGradient
                  id="metallicGradient1"
                  gradientTransform="rotate(45)"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="20%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#b0b0b0", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="80%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                </linearGradient>
                <filter id="metallicFilter1">
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="2"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="1.5"
                    specularExponent="20"
                    lighting-color="#ffffff"
                    result="specular"
                  >
                    <fePointLight x="-50" y="-50" z="200" />
                  </feSpecularLighting>
                  <feComposite
                    in="specular"
                    in2="SourceAlpha"
                    operator="in"
                    result="specular"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>
              </defs>
              <g filter="url(#metallicFilter1)">
                <path
                  fill="url(#metallicGradient1)"
                  d="M66.084,0.5h379.819c36.079,0,65.597,29.505,65.597,65.584 v379.819c0,36.079-29.518,65.597-65.597,65.597H66.084C30.005,511.5,0.5,481.982,0.5,445.903V66.084 C0.5,30.005,30.005,0.5,66.084,0.5L66.084,0.5z M372.734,57.264c-12.65,0-23.005,10.355-23.005,23.005v55.067 c0,12.65,10.354,23.005,23.005,23.005h57.762c12.65,0,23.005-10.354,23.005-23.005V80.269c0-12.65-10.354-23.005-23.005-23.005 H372.734L372.734,57.264z M453.738,216.59h-44.975c4.254,13.897,6.55,28.606,6.55,43.852c0,84.996-71.111,153.898-158.839,153.898 c-87.716,0-158.827-68.902-158.827-153.898c0-15.245,2.295-29.954,6.55-43.852H57.276v215.853c0,11.178,9.132,20.322,20.311,20.322 h355.841c11.166,0,20.311-9.145,20.311-20.322V216.59L453.738,216.59z M256.475,155.447c-56.677,0-102.625,44.525-102.625,99.443 s45.948,99.443,102.625,99.443c56.688,0,102.636-44.525,102.636-99.443S313.163,155.447,256.475,155.447z"
                />
              </g>
            </svg>

            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => window.open("https://www.facebook.com/firstklaz/")}
            >
              <defs>
                <linearGradient
                  id="metallicGradient2"
                  gradientTransform="rotate(45)"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="20%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#b0b0b0", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="80%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                </linearGradient>
                <filter id="metallicFilter2">
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="2"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="1.5"
                    specularExponent="20"
                    lighting-color="#ffffff"
                    result="specular"
                  >
                    <fePointLight x="-50" y="-50" z="200" />
                  </feSpecularLighting>
                  <feComposite
                    in="specular"
                    in2="SourceAlpha"
                    operator="in"
                    result="specular"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>
              </defs>
              <g filter="url(#metallicFilter2)">
                <path
                  fill="url(#metallicGradient2)"
                  d="M715.637 960h171.897C920.348 960 960 932.759 960 898.909V125.091C960 91.243 920.348 64 887.534 64H113.716C77.004 64 64 96.892 64 125.091v773.818C64 927.109 77.004 960 113.716 960h439.012V634.182H410.181c-11.257 0-20.363-9.106-20.363-20.363V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.354 88.056-183.272 192.261-183.272h113.193c11.257 0 20.365 9.106 20.365 20.363V288c0 11.258-9.108 20.365-20.365 20.365h-72.465c-34.444 0-70.079 19.052-70.079 50.908v112h131.17a20.27 20.27 0 0 1 16.507 8.472c3.856 5.291 4.891 12.133 2.823 18.337l-40.728 122.181a20.403 20.403 0 0 1-19.33 13.919h-90.442V960z"
                />
              </g>
            </svg>

            <svg
              fill="#000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              onClick={() => window.open("https://x.com/firstklaz_")}
            >
              <defs>
                <linearGradient
                  id="metallicGradient3"
                  gradientTransform="rotate(45)"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="20%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#b0b0b0", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="80%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                </linearGradient>
                <filter id="metallicFilter3">
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="2"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="1.5"
                    specularExponent="20"
                    lighting-color="#ffffff"
                    result="specular"
                  >
                    <fePointLight x="-50" y="-50" z="200" />
                  </feSpecularLighting>
                  <feComposite
                    in="specular"
                    in2="SourceAlpha"
                    operator="in"
                    result="specular"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>
              </defs>
              <g filter="url(#metallicFilter3)">
                <path
                  fill="url(#metallicGradient3)"
                  style={{ display: "inline" }}
                  d="M447.043,447.477c0,17.578-6.273,32.66-18.838,45.186c-12.549,12.563-27.619,18.838-45.197,18.838 H256.371c-52.745,0-97.831-18.726-135.27-56.164c-37.444-37.438-56.145-82.512-56.145-135.27V64.573 c0-18.089,6.231-33.284,18.701-45.61C96.126,6.675,111.353,0.5,129.335,0.5c17.447,0,32.448,6.288,44.899,18.85 c12.494,12.538,18.744,27.595,18.744,45.173v63.998h189.793c17.652,0,32.771,6.288,45.396,18.85 c12.602,12.525,18.875,27.596,18.875,45.173c0,17.553-6.273,32.623-18.838,45.186c-12.549,12.525-27.656,18.813-45.234,18.813 H192.979v63.462c0,17.641,6.137,32.61,18.463,44.974c12.319,12.326,27.278,18.489,44.874,18.489h126.655 c17.578,0,32.686,6.299,45.234,18.837C440.77,414.854,447.043,429.924,447.043,447.477"
                />
              </g>
            </svg>
            <svg
              fill="#000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => window.open("https://www.tiktok.com/@firstklaz")}

            >
              <defs>
                <linearGradient
                  id="metallicGradient1"
                  gradientTransform="rotate(45)"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="20%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#b0b0b0", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="80%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                </linearGradient>
                <filter id="metallicFilter1">
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="2"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="1.5"
                    specularExponent="20"
                    lighting-color="#ffffff"
                    result="specular"
                  >
                    <fePointLight x="-50" y="-50" z="200" />
                  </feSpecularLighting>
                  <feComposite
                    in="specular"
                    in2="SourceAlpha"
                    operator="in"
                    result="specular"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>
              </defs>

              <g filter="url(#metallicFilter1)">
                {" "}
                <title>tiktok</title>{" "}
                <path
                  fill="url(#metallicGradient1)"
                  d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"
                ></path>{" "}
              </g>
            </svg>
            <svg
              className="youtube"
              viewBox="0 -146.13 500.612 500.612"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              onClick={() => window.open("https://www.youtube.com/@firstklaz")}
            >
              <defs>
                <linearGradient
                  id="metallicGradient1"
                  gradientTransform="rotate(45)"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="20%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#b0b0b0", stopOpacity: "0.9" }}
                  />
                  <stop
                    offset="80%"
                    style={{ stopColor: "#e0e0e0", stopOpacity: "0.8" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: "0.9" }}
                  />
                </linearGradient>
                <filter id="metallicFilter1">
                  <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="2"
                    result="blur"
                  />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="1.5"
                    specularExponent="20"
                    lighting-color="#ffffff"
                    result="specular"
                  >
                    <fePointLight x="-50" y="-50" z="200" />
                  </feSpecularLighting>
                  <feComposite
                    in="specular"
                    in2="SourceAlpha"
                    operator="in"
                    result="specular"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                  />
                </filter>
              </defs>

              <g filter="url(#metallicFilter1)">
                <path
                  fill="url(#metallicGradient1)"
                  d="M83.743 168.876c-4.007-1.375-6.746-3.24-10.09-6.863-7.024-7.611-7.41-9.883-7.41-43.682 0-32.567.5-35.634 7.044-43.281 9.175-10.718 30.39-10.401 39.45.589 6.017 7.3 6.506 10.55 6.506 43.192 0 25.834-.224 30.14-1.8 34.66-2.416 6.922-9.535 13.619-16.758 15.764-6.812 2.023-10.167 1.949-16.942-.38zm12.455-15.666c4.09-1.57 4.545-5.006 4.545-34.282 0-18.682-.376-28.828-1.13-30.482-2.53-5.554-11.21-5.554-13.74 0-.754 1.654-1.13 11.8-1.13 30.482 0 32.665.417 34.56 7.668 34.825 1.193.043 2.897-.202 3.787-.543zm44.427 15.118c-1.44-.782-3.466-3.128-4.5-5.21-1.745-3.512-1.903-7.104-2.179-49.537l-.297-45.75h19.094v41.877c0 35.843.214 42.057 1.487 43.112 2.216 1.839 5.816.493 9.887-3.697l3.626-3.733V67.832h19v101h-19v-10.17l-4.75 4.217c-2.612 2.319-6.198 4.832-7.968 5.585-4.126 1.753-11.043 1.687-14.4-.136zM24.73 141.08l-.015-27.75-12.357-39.5L.001 34.33l10.04-.287c5.877-.168 10.293.124 10.651.704.337.545 3.524 12.035 7.082 25.533 3.56 13.498 6.698 24.544 6.977 24.546.28.002 2.902-9.108 5.828-20.246 2.927-11.137 5.992-22.612 6.813-25.5l1.493-5.25h10.536c8.584 0 10.438.258 10.003 1.39-.293.764-5.967 18.745-12.607 39.957l-12.073 38.567v55.086h-20l-.014-27.75z"
                ></path>
                <path
                  fill="url(#metallicGradient1)"
                  d="M284.873 207.783c-48.855-1.631-62.084-5.108-71.078-18.688-3.634-5.486-7.713-17.764-9.012-27.128-4.56-32.866-3.44-101.4 2.041-125.021 4.964-21.391 16.637-31.87 37.931-34.053C265.673.748 320.203-.42 373.243.14c57.262.604 84.221 1.829 93.975 4.27 19.08 4.773 28.336 18.828 31.563 47.92.61 5.5 1.36 24.702 1.666 42.67 1.234 72.535-4.223 95.61-25.02 105.799-7.853 3.848-12.99 4.732-35.185 6.057-24.106 1.438-122.48 2.025-155.369.927zm24.034-39.536c1.686-.873 5.038-3.404 7.45-5.63l4.386-4.04v10.254h19v-100h-19V145.095l-4.368 4.367c-4.688 4.689-6.584 5.274-9.06 2.798-1.378-1.378-1.572-6.626-1.572-42.5V68.83h-19v43.319c0 47.787.393 51.568 5.768 55.58 3.403 2.539 11.964 2.809 16.396.518zm91.45-.323c1.745-1.064 4.163-4.03 5.5-6.746 2.346-4.764 2.393-5.42 2.722-37.828.36-35.532-.212-41.948-4.386-49.15-2.319-4.002-7.849-7.37-12.104-7.37-4.098 0-9.97 2.757-14.447 6.782l-4.898 4.403V34.83h-18v134h18v-9.232l4.105 3.709c2.258 2.039 5.521 4.324 7.25 5.076 4.643 2.022 12.557 1.798 16.258-.46zm-23.864-16.312l-3.75-2.174v-61.33l4.438-2.354c3.601-1.91 4.968-2.167 7.25-1.366 4.931 1.732 5.462 5.552 5.12 36.78l-.308 27.838-2.806 2.412c-3.435 2.954-5.123 2.987-9.944.194zm84.25 16.135c9.664-4.381 14.016-11.79 14.777-25.158l.5-8.758h-19.278v5.936c0 7.27-1.127 10.446-4.487 12.648-3.787 2.48-8.494.904-10.76-3.605-1.369-2.721-1.75-6.037-1.75-15.23l-.003-11.75h36v-14.683c0-18.48-1.445-24.37-7.676-31.3-5.506-6.123-11.405-8.561-20.324-8.397-7.393.135-12.333 1.978-17.522 6.534-8.48 7.447-9.766 14.082-9.259 47.847.33 21.939.693 27.284 2.117 31.057 2.432 6.442 6.825 11.347 12.858 14.354 6.8 3.386 17.95 3.614 24.807.505zm-21-68.45c0-12.438 3.191-16.682 11.221-14.918 4.031.886 5.78 5.398 5.78 14.919v7.532h-17v-7.532zm-172 12.034v-57.5h22v-19h-63v19h21v115h20v-57.5z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={active ? "sidebar" : "sidebar none"}>
        <div
          onClick={() => (active ? setActive(false) : setActive(true))}
          className={active ? "hamburger hamburger_active" : "hamburger"}
        >
          <div className="hamburger1"></div>
          <div className="hamburger2"></div>
          <div className="hamburger3"></div>
        </div>
        <div className="sidebar_inner">
          <div
            onClick={() => {
              setActive(false);
              setPage("tour");
            }}
          >
            tour
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("about");
            }}
          >
            about
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("store");
            }}
          >
            store
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("music");
            }}
          >
            music
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("videos");
            }}
          >
            videos
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("shows");
            }}
          >
            shows
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("gallery");
            }}
          >
            gallery
          </div>
        </div>
      </div>
      <div className="amanda_container">
        <img className="amanda" src={Amanda} alt="" />
        <div
          className={
            amandaMessage?.length > 0
              ? "amanda_message amanda_message_active"
              : "amanda_message"
          }
        >
          {/* <div className={"amanda_thank_you_text"}>Thank you for registering for Firstklaz & Friends! Can't wait to see you there!</div> */}
          {amandaMessage === "guess" && (
            <div className={"amanda_thank_you_text"}>
              Hey there, It's Amanda. Guess the release date of "Y2K DISCO" and
              stand and get access to the official cover art before anyone does!
            </div>
          )}
          {amandaMessage === "got it" && (
            <div className={"amanda_thank_you_text"}>
              Congratulations! Now you have access to the offical cover art for
              "Y2K DISCO" don't share it with anyone!
            </div>
          )}
          {amandaMessage === "subscribed" && (
            <div className={"amanda_thank_you_text"}>
              Congratulations! You're officially a Firstklaz Citizen
            </div>
          )}
          {/* <div className={"amanda_thank_you_text"}>Opps! you didn't get it right. Thank you for trying!</div> */}
          <div className="tip"></div>
        </div>
      </div>
      {modalOpen && (
        <form className="subscribe-modal" onSubmit={handleSubmitGuess}>
          <div className="subscribe-modal__title">GUESS</div>
          <input
            className="subscribe-modal__input"
            type="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="subscribe-modal__input"
            type="date"
            placeholder="hello@example.com"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button className="subscribe-modal__button">SUBMIT</button>
        </form>
      )}
      {modalOpen && (
        <div className="subscribe-modal-cover" onClick={handleModalClose}></div>
      )}
      {gotIt && (
        <div
          className="cover-art-modal-cover"
          onClick={handleModalCloseCoverArt}
        ></div>
      )}
      {gotIt && (
        <div className="cover-art-modal">
          <img src={Genzfuji} alt="" />
          <div className="cover-art-modal__title">Y2k DISCO</div>
        </div>
      )}
    </div>
  );
};

export default Home;
