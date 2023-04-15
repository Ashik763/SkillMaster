import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDone } from 'react-icons/md';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../../assets/bmqq11.jpg" ;
import sideImg from "../../../assets/home-img2.jpg" ;
import "./Home.css";
import { MoodContext } from "../../Contexts/Mood";

const Home = () => {

  const {mood} = useContext(MoodContext);
 
  return (
    <div>
      <Container className="home-container d-flex justify-content-center mt-5">
        <Row className="home-content w-100 justify-content-center ">
          <Col className={ mood=='day'?"text" : 'night text'} xs="12" lg="6">
           <p className="fs-1"> Get more close with your courses</p>
           <p> 
            <h5> We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly </h5>
            <div> 
                <p><MdDone  className="text-primary border border-primary"></MdDone> Detail description of each course </p>
                <p><MdDone  className="text-primary border border-primary"></MdDone> Easy to understand language</p>
                <p><MdDone  className="text-primary border border-primary"></MdDone> Simple and easy to learn courses. </p>
           
            </div>
            <button className="btn btn-danger">  <Link to="/courses" className="text-decoration-none text-light" > Start Learning Now</Link> </button>
          
           </p>
          </Col>
         
          <Col className="home-img p-3" xs="12" lg="6">
                <img className="bg-img img-fluid"  src={img} alt="img" />
                <img className="side-img img-fluid"  src={sideImg} alt="img" />

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
