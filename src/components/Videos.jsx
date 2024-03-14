import americano from "../assets/images/americano.mp4";
import bts from "../../src/assets/images/bts.mp4";
import french from "../../src/assets/images/french.mp4";
import school from "../../src/assets/images/school.mp4";
import smink from "../../src/assets/images/smink.mp4";
import valencia from "../../src/assets/images/valencia.mp4";
import vermezo from "../../src/assets/images/vermezo.mp4";

import cover1 from "../../src/assets/cover1.PNG";
import cover2 from "../../src/assets/cover2.PNG";

import celebrate from "../../src/assets/celebrate.gif";

export default function Videos() {
  return (
    <div className="videos m-8 flex gap-20 flex-wrap justify-center items-center">
      <video controls poster={cover1}>
        <source src={americano} type="video/mp4" />
      </video>
      <video controls poster={cover1}>
        <source src={school} type="video/mp4" />
      </video>
      <video controls poster={cover2}>
        <source src={french} type="video/mp4" />
      </video>
      <video controls poster={cover2}>
        <source src={bts} type="video/mp4" />
      </video>
      <video controls poster={cover2}>
        <source src={smink} type="video/mp4" />
      </video>
      <video controls poster={cover1}>
        <source src={valencia} type="video/mp4" />
      </video>
      <video controls poster={cover2}>
        <source src={vermezo} type="video/mp4" />
      </video>
      <img className="w-1/2 rounded-[2rem] mb-12" src={celebrate}/>
    </div>
  );
}
