import React ,{ useState }from "react";
import ExerciseCard from "./exerciseCard";
import axios from "axios";
import CardContainer from "./cardcontainer";
import '../css/details.css'

function CardComponent({image,title}) {

  return (
    <div className="CardComponent">
        <div className="cardStyle"  style={{width:"150px",height:"10rem"}}>
            <div className="card">
                <img src={image} className="card-img-top clickable" alt={title} />
                <div className="card-body">
                <button className="card-text clickable">{title} </button>
                </div>

            </div>
        </div>
        {/* <ExerciseCard data={value} /> */}

    </div>
    
  );
}

export default CardComponent;
