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

  const [currentPage, setCurrentPage] = useState(1);

  const limit = 6; 

  const [totalWorkout, setTotalWorkout] = useState(0);


  useEffect(() => {
    const fetchWorkout = async () => {
  try {
    const url = `http://localhost:5000/workout?page=${currentPage}&limit=${limit}`;
    console.log('URL:', url);   // Log the URL to check if query parameters are included.

    const response = await axios.get(url);

    setWorkoutData(response.data.data);
    setTotalWorkout(response.data.total);

  } catch (error) {
    console.error('Error fetching workout data:', error);
  }
};

  fetchWorkout();
}, [currentPage]); // Add currentPage to the dependency array 


  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div>
      <Row className="text-center mt-3">
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
      <Col xs="auto" className="text-center mx-auto mt-5">
        <Pagination 
              activePage={currentPage}
              itemsCountPerPage={limit}
              totalItemsCount={totalWorkout}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              />
      </Col>
      </Row>
  </div>
    </>
  )
}
