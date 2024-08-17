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
import { ClipLoader } from 'react-spinners'; // Import the spinner component



const ExerciseCard = (props) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    setLoading(true); // Set loading to true when starting to fetch data
    get_exercises();
    console.log("data is", props.data);
  }, [props]);

  let get_exercises = () => {
    axios
      .post(`${API_URL}/backend/getEachExerciseList`, {
        bodypart: props.data == undefined ? "back": props.data,
      })
      .then((res) => {
        setExercises(res.data.details);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError(err); // Handle errors
        setLoading(false); // Set loading to false even if there's an error
      });
  };
  function gifClick(event){
    console.log(event,"eventttt")
    navigate(`/${event}`)
  }
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ClipLoader size={50} color={"#123abc"} loading={true} />
      </div>
    ); // Display the spinner while loading
  }
  if (error) {
    return <div>Error loading data: {error.message}</div>; // Display error message if there's an error
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
