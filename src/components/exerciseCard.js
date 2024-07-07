import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Carousel,
  CarouselItem,
  CardGroup,
} from "react-bootstrap";
import "../css/exerciseCard.css";
import Footer from "./footer.js";
import { Data } from "./data";
import Giphy from "../assets/giphy.gif";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardContainer from "./cardcontainer";
import CardComponent from "./cardcomponent";
import { useNavigate } from 'react-router-dom';
import { margin } from "@mui/system";



const ExerciseCard = (props) => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    get_exercises();
    console.log("data is", props.data);
  }, [props]);

  let get_exercises = () => {
    axios
      .post("http://localhost:3001/backend/getEachExerciseList", {
        bodypart: props.data == undefined ? "back": props.data,
      })
      .then((res) => setExercises(res.data.details))
      .catch((err) => console.log(err));
  };
  function gifClick(event){
    console.log(event,"eventttt")
    navigate(`/${event}`)
  }
  return (
    <>

        <p style={{ marginTop: '3%' , marginLeft:'1%', color:'#0D6EFD'}}><h2>{props.data === undefined ? "BACK" : props.data.toUpperCase()}</h2></p>
       <div style={{display: "grid" ,gridTemplateColumns: "repeat(4,1fr)" ,gridGap:"20px"}}>
       
        {exercises.map((d, k) => (
            
           <div onClick={()=>{
            gifClick(d._id)
           }}>
            <CardContainer key={k} image={d.gifUrl} title={d.name}  id={d._id}/>
            </div>
            ))}
          
      
      </div>
      
    
  {/* </section> */}
    </>
  );
};

export default ExerciseCard;
