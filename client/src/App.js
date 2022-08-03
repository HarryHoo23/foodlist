import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const App = () => {
    
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        
    }, []);    

    return <div className="app">
        <Container className="p-4">
            <h1 className="text-center">小智今天吃什么</h1>
            <p className="mt-3">不知道今天吃什么？没关系，一键帮你解决！</p>
            <Row>

            </Row>
        </Container>
    </div>;
};

export default App;
