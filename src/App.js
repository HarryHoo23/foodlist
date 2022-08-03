import React, {useState, useEffect} from "react";

const App = () => {
    
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {

    }, []);

    const getFoodList = async () => {
        const response = await fetch('')
    }

    return <div className="app">App</div>;
};

export default App;
