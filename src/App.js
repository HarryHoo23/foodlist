import React, { useState, useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import axios from "axios";

const App = () => {
    
    const [foodList, setFoodList] = useState([]);  
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('api/randomFood');
            setIsLoading(false);
            setFoodList(data.data);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const handleClickButton = () => {
        getData();
        setIsClicked(true);
    }

    const foodResult = () => {
        if (isLoading) {
            return <Spinner animation="border" variant="light" />
        } else {
            if (foodList.length > 0) {
                return <div className="result">不如今天吃：<br /> <h2>{foodList[0]}!!!</h2></div>
            }
        }
    };

    return <div className="app">
        <Container className="p-4 text-center">
            <h1 className="text-center">小智今天吃什么</h1>
            <p className="mt-3">不知道今天吃什么？没关系，一键帮你解决！</p>
            <Row className="mt-5">
                <Button className="my-5 w-75 m-auto" onClick={handleClickButton}>{!isClicked ? '点这里！' : '不喜欢？那换一个？'}</Button>
                <div>
                    {foodResult()}
                </div>
            </Row>
        </Container>
    </div>;
};

export default App;
