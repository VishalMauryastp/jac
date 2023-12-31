import React from "react";
import Article from "../../components/aboutbrand/Article";
import { bl01, bl02, bl03, bl04, bl05, bl06, bl07 } from "./imports";
import "./brands.css";

const Brands = () => {
  const aj_star = {
    img:bl01,
    b_name :"Aj Star",
    p_lead_acid :"12V28AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"103 Kg",
    w_lithium :"80 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Disc Brake",
    b_rear :"Drum Brake",
    f1 :"Dual LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  const ericka = {
    img:bl02,
    b_name :"Ericka",
    p_lead_acid :"12V30AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"103 Kg",
    w_lithium :"80 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Drum Brake",
    b_rear :"Drum Brake",
    f1 :"Triplet LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  const phantom = {
    img:bl03,
    b_name :"Phantom",
    p_lead_acid :"12V28AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"103 Kg",
    w_lithium :"80 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Drum/Disc Brake",
    b_rear :"Drum Brake",
    f1 :"Triplet LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  
  const neu = {
    img:bl04,
    b_name :"Neu",
    p_lead_acid :"12V30AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"103 Kg",
    w_lithium :"80 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Disc Brake",
    b_rear :"Drum Brake",
    f1 :"Triplet LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  const poppy = {
    img:bl05,
    b_name :"Poppy",
    p_lead_acid :"12V28AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"95/102kg",
    w_lithium :"74 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Drum Brake",
    b_rear :"Drum Brake",
    f1 :"Triplet LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  const delta = {
    img:bl06,
    b_name :"Delta",
    p_lead_acid :"12V30AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"103 kg",
    w_lithium :"80 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Drum/Disc Brake",
    b_rear :"Drum Brake",
    f1 :"Triplet LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  
  const rubie = {
    img:bl07,
    b_name :"Rubie",
    p_lead_acid :"12V28AH 5 Battaries",
    p_lithium_phosphate :"60V24AH 1 Pack",
    p_lithium :"60V30AH 1 Pack",
    w_with_lead :"95/102 Kg",
    w_lithium :"80 Kg",
    b_with_lead :"500 Cycles",
    b_lithium :"2000 Cycles",
    c_with_lead :"1 Units",
    c_lithium :"",
    t_with_lead :"6-8 Hrs",
    t_lithium :"3-5 Hrs",
    type_motor :"BLDC",
    chassis_type :"High Rigid Tubular Indian Made Frame",
    s_front :"Telescopic",
    s_rear :"Hydraulic",
    b_front :"Drum Brake",
    b_rear :"Drum Brake",
    f1 :"Triplet LED Head Lights",
    f2 :"Branded Tubeless Tyre",
    f3 :"3 Speed Control",
    f4 :"Regenerating Breaking System",
    f5 :"Warranty 1 Year*",
    f6 :"Reverse Gear",
    f7 :"Mobile Charging",
    f8 :"USB 2.0",
    f9 :"Anti Theft Alarm",
    f10 :"Emergency Switch",
    f11 :"Side Stand Sensor",
    f12 :"Right Thumb on/of",
    f13 :"Electronic ABS",
    f14 :"Keyless Entry Cruise Control",
  };
  
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Legendary of Yakuza, <br /> and more...
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={bl01}
            data={aj_star}
            text="YAKUZA AJ-STAR -FEEL FIRE ON ROAD "
          />
          <Article imgUrl={bl02}  data={ericka} text="Yakuza - ERICKA feel pride on drive" />
          <Article imgUrl={bl03} data={neu} text="Yakuza - Neu the power of flash" />
          <Article
            imgUrl={bl04}
            data={phantom}
            text="Yakuza - CK PHANTOM catches eyes on you"
          />
          <Article imgUrl={bl05}
          data={poppy}
          text="Yakuza - POPPY lets run on passion" />
          <Article imgUrl={bl06} 
          data={delta}
          text="Yakuza - DELTA king of offroad" />
          <Article imgUrl={bl07} data={rubie} text="Yakuza - RUBIE drive as smooth" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
