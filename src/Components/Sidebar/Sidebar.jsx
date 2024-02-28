import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { LuGalleryHorizontal } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import './Sidebar.css'
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import { FaUserAstronaut } from "react-icons/fa";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Sidebar() {
  return (
    <>
    <Row className="sidebar">
    <Col>
    <Nav variant="pills" defaultActiveKey="/">
        <div className="mx-5" style={{color:"orange", padding:"52px 0px"}}>
                <span className="h1">Fitness</span>
                <span className="mx-2"><FaDumbbell style={{width:"50px"}} /></span>
                <hr />
        </div>
    <div className="mx-3">
            <Nav.Item>
                <NavLink className="nav-link" to="/">
                    <div>
                        <LuGalleryHorizontal /> 
                        <span className="h5"> Overview </span>
                    </div>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="mt-5">
                <NavLink className="nav-link" to="/workout" eventKey="link-1">
                    <div>
                        <FaDumbbell />
                        <span className="h5"> Workout </span>
                    </div>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="mt-5">
                <NavLink className="nav-link" to='/diet' eventKey="link-2">
                <div>
                    <span>
                        <FaRegCalendarAlt />    
                    </span>
                    <span className="mx-3 h5">
                        Diet Plan
                    </span>
                </div>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="mt-5">
                <NavLink className="nav-link" to='/goals' eventKey="link-3">
                <div>
                    <span>
                        <GoGoal />
                    </span>
                    <span className="mx-3 h5">
                        Goals
                    </span>
                </div>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/schedule" eventKey="link-4" className="nav-link mt-5">
                <div>
                    <span>
                        <FaCalendarDays />
                    </span>
                    <span className="mx-3 h5">
                        My Schedule 
                    </span>
                </div>
                </NavLink>
            </Nav.Item>
            <Nav.Item className="mt-5">
                <NavLink className="nav-link" to="/progress" eventKey="link-5">
                <div>
                    <span>
                        <BsGraphUp />
                    </span>
                    <span className="mx-3 h5">
                        Progress 
                    </span>
                </div>
                </NavLink>
            </Nav.Item>
        </div>
    </Nav>
    </Col>
    </Row>
    <Row className="mb-0 justify-content-start position-relative">
        <Col xs="3">
            <div className="mx-4 mb-0 h3 user_login">
                <span className="user_login_btn"><FaUserAstronaut /></span>
            </div>
        </Col>
        <Col xs="4">
            <div className="User mb-0 h6">User_name</div>
        </Col>
    </Row>
    < />
  )
}
