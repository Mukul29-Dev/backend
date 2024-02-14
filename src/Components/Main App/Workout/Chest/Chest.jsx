import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import "./chest.css"
import first from "./Pages/First"
import { NavLink, Outlet } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Pagination from 'react-js-pagination';

export default function Chest() {

  const [ workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Workout");
        setWorkoutData(response.data[0].Workout)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching workout data:', error);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <>
    <div>
      <Row className="text-center mt-5">
      {
        workoutData.map((workoutItem) => (
          <Col md={3} className="mt-3" key = {workoutItem.id}>
            <Image src={workoutItem.img} roundedCircle style={{height:"250px"}}/>
            <div className="mx-auto">
              <span className="h6">{workoutItem.title}</span>
              <div>
                <i>Equipment: <span style={{color:"grey"}}>{workoutItem.description}</span></i>
                </div>
            </div>
        </Col>
         )
        )
      }
      </Row>
      <Row className="text-center mx-auto">
      <Col xs="auto" className="text-center mx-auto mt-3">
      </Col>
      </Row>
  </div>
    </>
  )
}
