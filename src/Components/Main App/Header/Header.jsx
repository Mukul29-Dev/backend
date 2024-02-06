import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import {useState, useEffect} from 'react'

export default function Header() {
    const now = 30;

    const storedDarkMode = localStorage.getItem('darkMode');
    const [isDarkMode, setDarkMode] = useState(storedDarkMode? JSON.parse(storedDarkMode) :false );

        const backgroundColor = isDarkMode ? '#393939' : 'white';
        const textColor = isDarkMode ? 'white' : '#393939';
        const transitionDelay = 150;

        useEffect(() => {
            localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
            setTimeout(() => {
                document.body.style.transition = `background-color ${transitionDelay}ms, color ${transitionDelay}ms`;
                document.body.style.backgroundColor = backgroundColor;
                document.body.style.color = textColor;
            }, transitionDelay);
     }, [backgroundColor, textColor, isDarkMode]);


     const toggleBackground = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <div className='mt-2'>
                <Row className="mx-auto">
                    <Col>
                        <h1>Welcome...</h1>
                    </Col>
                    <Col className="text-end">
                    <span className="h4 py-3" style={{color:"orange"}} onClick={toggleBackground}>{isDarkMode ? <FaToggleOn /> : <FaToggleOff />}</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm="2 h5">
                        Your Progress this month:
                    </Col>
                    <Col sm="10 mt-1">
                        <ProgressBar variant="success" now={now} label={`${now}%`} />
                    </Col>
                </Row>
                
                <hr  style={{color:"orange"}}/>
            </div>
        </>
    )
}
