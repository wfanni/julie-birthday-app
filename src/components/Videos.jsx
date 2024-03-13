import americano from "../assets/JulieBD/americano.mp4";
import bts from "../../src/assets/JulieBD/bts.mp4";
import french from "../../src/assets/JulieBD/french.mp4";
import school from "../../src/assets/JulieBD/school.mp4";
import smink from "../../src/assets/JulieBD/smink.mp4";
import valencia from "../../src/assets/JulieBD/valencia.mp4";
import vermezo from "../../src/assets/JulieBD/vermezo.mp4";

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
