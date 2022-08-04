import React, { useState, useEffect } from "react";
import { Container, Row, Button, Spinner, Form } from "react-bootstrap";
import axios from "axios";

const options = [1, 2, 3, 4, 5, 6, 7, 8];

const App = () => {
    
    const [foodList, setFoodList] = useState([]);  
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [number, setNumber] = useState(0);

    const getData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('api/randomFood');
            setIsLoading(false);
            setFoodList(data.data);
            setIsClicked(true);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const handleClickButton = () => {
        setNumber(0);
        getData();        
    }

    const handleChange = (e) => {        
        setNumber(e.target.value);       
    }

    const handleSubmit = () => {
        if (number !== 0) {
            setIsLoading(true);
            axios.post('/api/randomFood', number).then((response) => {
                setIsLoading(false);
                setFoodList(response.data.data);
            }).catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
        }
    }

    useEffect(() => {
        handleSubmit();        
    }, [number])

    const foodResult = () => {
        if (isLoading) {
            return <Spinner animation="border" variant="light" />
        } else {
            if (number < 6) {
                if (foodList.length > 0) {
                    return <div className="result">不如今天吃：<br />
                        <ul className="m-0">
                            {foodList.map((item, index) => {
                                if (foodList.length > 1) {
                                    return (
                                        <li key={index}><h2>{item}~</h2></li>
                                    )
                                }
                                return (
                                    <li key={index}><h2>{item}!</h2></li>
                                )
                            })}
                        </ul>
                    </div>
                }
            } else {
                return (
                    <h2 className="mt-5">吃这么多，咋不撑死你呢？</h2>
                )
            }
        }
    };

    return <div className="app">
        <Container className="p-4 text-center">
            <h1 className="text-center">小智今天吃什么</h1>
            <p className="mt-3">不知道今天吃什么？没关系，一键帮你解决！</p>
            <Row className="mt-5 text-center">
                <p className="text-center mt-5 font-large">随便吃一个？</p>
                <Button variant="outline-light" className="mb-3 w-75 m-auto" onClick={handleClickButton}>{!isClicked ? '点这里！' : '不喜欢？那换一个？'}</Button>                
                <div className="mt-3">
                    {isClicked && <>
                        <p className="text-center font-large">一个不够吃？多选几个咯！</p>
                        <Form>
                            <Form.Select id="foods" value={number} className="w-50 mb-4" onChange={handleChange}>
                                {options.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item} 道菜？
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </Form>
                    </>}
                    {foodResult()}                    
                </div>
            </Row>
        </Container>
    </div>;
};

export default App;
