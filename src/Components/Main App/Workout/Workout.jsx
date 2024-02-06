import React from 'react'
import "./Workout.css"
import { SiOpenaigym } from "react-icons/si";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter, Route, Routes, Link, NavLink, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Chest from "./Chest/Chest"

export default function Workout() {
  return (
  <>
    <div className="mt-3 mx-auto text-center">
      <Row className="justify-content-around">
      <Col xs="2">
        <Nav.Item className="">
          <NavLink to="/workout/chest">
              <Button variant="outline-warning">Chest</Button>
          </NavLink>
        </Nav.Item>
        </Col>
        <Col xs="2">
        <Nav.Item className="">
          <NavLink to="/workout/back">
              <Button variant="outline-warning">Back</Button>
          </NavLink>
        </Nav.Item>
        </Col>
        <Col xs="2">
        <Nav.Item className="">
          <NavLink to="/workout/legs">
              <Button variant="outline-warning">Legs</Button>
          </NavLink>
        </Nav.Item>
        </Col>
        <Col xs="2">
        <Nav.Item className="">
          <NavLink to="/workout/arms">
              <Button variant="outline-warning">Arms</Button>
          </NavLink>
        </Nav.Item>
        </Col>
        <Col xs="2">
        <Nav.Item className="">
          <NavLink to="/workout/shoulder">
              <Button variant="outline-warning">Shoulder</Button>
          </NavLink>
        </Nav.Item>
        </Col>
        <Col xs="2">
        <Nav.Item className="">
          <NavLink to="/workout/cardio">
              <Button variant="outline-warning">Cardio</Button>
          </NavLink>
        </Nav.Item>
        </Col>        
      </Row>
    </div>
     <hr className="mt-3" style={{color:"orange"}}/>
    <div>
      <Outlet />
    </div>
  </>  
  )
}
