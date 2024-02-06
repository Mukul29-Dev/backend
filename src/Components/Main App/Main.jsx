import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from '../Sidebar/Sidebar'
import "./Main.css"
import Overview from './Overview/Overview'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom';
import Workout from './Workout/Workout'
import Diet from './Diet Plan/Diet'
import Chest from './Workout/Chest/Chest'
import Back  from "./Workout/Back/Back";
import Legs  from "./Workout//Legs/Legs";
import Arms  from "./Workout/Arms/Arms";
import Shoulder  from "./Workout/Shoulder/Shoulder";
import Cardio  from "./Workout/Cardio/Cardio";
import First from './Workout/Chest/Pages/First'

export default function Main() {
  return (
    <Container fluid className="App">
          <Row className="d-flex mt-3">
              <Col sm={2}>
                <h1><Sidebar /></h1>
              </Col>
              <Col sm={10}>
                <Header />
                <div>
                  <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path ="/workout" element ={<Workout />}>
                          <Route path="chest" element={<Chest />} />
                          <Route path="back" element={<Back />} />
                          <Route path="legs" element={<Legs />} />
                          <Route path="Arms" element={<Arms />} />
                          <Route path="shoulder" element={<Shoulder />} />
                          <Route path="cardio" element={<Cardio />} />
                    </Route>
                    <Route path="/diet" element ={<Diet />}/>
                  </Routes>
                </div>
              </Col>
          </Row>
      </Container>
  )
}
