
import LagosStreetShow from "../img/360098092_18293309251114413_2192173551435584222_n.jpg";
import FAndFPh from "../img/firstKlaz-and-friends-ph.jpg";
import FAndFAbj from "../img/firstKlaz-and-friends-abj.jpg";
import AbujaStreetShow from "../img/351750477_1003886440969838_7863322309839893458_n.jpg";
import FandFKd from "../img/f&f-kaduna.jpg";

export default function Shows() {

    return(
        <div className="music" id="music">
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
              href="https://tix.africa/discover/fnftour"
              target="_blank"
              className="slider_item"
            >
              <img className="music_artwork shows_image" src={FandFKd} alt="" />
              {/* <div className="music_gif">
          <img src={Genzfuji} alt="" />
        </div> */}
              <div className="music_name">
                Firstklaz & Friends Kaduna
              </div>
              <button className="music_button">Sold out</button>
            </a>
            <a
              href="https://tix.africa/discover/fnftour"
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
        )
    }
    