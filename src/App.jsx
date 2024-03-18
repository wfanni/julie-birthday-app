import { useState, useRef } from "react";

import confetti from "./assets/confetti.gif";
import sakura from './assets/sakura.png';
import song from "./assets/julie-bd-song.mp3";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";

export default function App() {
  const [title, setTitle] = useState(true);
  const [start, setStart] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [videos, setVideos] = useState(false);

  const songRef = useRef();

  function handleStart() {
    songRef.current.play();
    setTimeout(() => setTitle(false), 1800);
    setTimeout(() => setStart(true), 9000);
  }
    
  function handleVideos() {
    console.log("song stop");
    songRef.current.pause();
    setGallery(false);
    setVideos(true);
  }

  return (
    <div
      className={`${
        start &&
        'after:content-[""] after:z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-screen sm:after:bg-[#475569b5] xs:after:bg-[#f8fafce3]'
      } relative bg-[url('./assets/sakura.png')] bg-repeat min-h-screen w-full flex flex-col items-center`}
    >
      <audio className="" ref={songRef} src={song}/>
      {title && !gallery && !videos ? (
        <div className="min-h-screen -mt-4 flex flex-col gap-4 items-center justify-center">
          <h1 className="w-fit mt-20 flex flex-col items-center gap-4 font-reenie font-medium sm:text-[10rem] xs:text-[5rem] text-[#C9184A]">
            <i className="fa-regular fa-face-smile-beam"></i>
            <span className="animate-tada origin-center">Szia Bari</span>
          </h1>
          <button
            id="audio"
            className="px-4 py-2 bg-[#FB6F92] text-slate-50 rounded-full transition-all duration-200 hover:scale-125 hover:bg-[#FF8FAB]"
            onClick={handleStart}
          >
            Click to Start
          </button>
        </div>
      ) : null}
      {!title && !gallery && !videos ? (
        <div>
          <img
            src={confetti}
            className="absolute w-screen sm:bottom-0 left-[50%] sm:translate-x-[-50%] xs:top-[50%] xs:translate-x-[-50%] xs:translate-y-[-50%] xs:scale-125"
          />
          <div className="h-screen flex flex-col gap-4 items-center justify-center">
            <h2 className="font-caveat lowercase sm:text-[6rem] xs:text-[3.5rem] text-[#C9184A] w-fit animate-bounceInLeft">
              Happy Birthday!
            </h2>
            <h1 className="font-bebas sm:text-[9rem] xs:text-[4rem] text-[#590D22] w-fit animate-jello">
              Happy Birthday!
            </h1>
            <h4 className="font-reenie lowercase sm:text-[4rem] xs:text-[2rem] text-[#FF758F] w-fit animate-zoomIn">
              Happy Birthday!
            </h4>
            <h3 className="font-bad sm:text-[5rem] xs:text-[2.8rem] text-[#800F2F] w-fit animate-backInRight">
              Happy Birthday!
            </h3>
          </div>
        </div>
      ) : null}
      {start && <Welcome setGallery={setGallery} setStart={setStart}/>}
      {gallery && <Gallery />}
      {gallery && !videos ? (
        <div className="z-10 self-end sm:p-6 xs:p-4 flex gap-4 justify-center items-center">
          <span className="font-josefin sm:text-xl xs:text-[0.9rem] text-[#800F2F] leading-[normal] pt-1">
            Wanna see some cringe videos?
            <i className="fa-solid fa-angles-right sm:pl-2 xs:pl-[0.2rem]"></i>
          </span>
          <button className="px-4 py-2 bg-[#FB6F92] text-slate-50 rounded-full transition-all duration-200 hover:scale-125 hover:bg-[#FF8FAB]" onClick={handleVideos}>Let's Go</button>
        </div>
      ) : null}
      {videos && <Videos />}
    </div>
  );
}
