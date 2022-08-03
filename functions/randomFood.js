require('dotenv').config();
const axios = require('axios');

const url = `https://eolink.o.apispace.com/eat222/api/v1/forward/chishenme?size=`;

exports.handler = async (event, context) => {    

    const number = await event.body;
    console.log(number);

    const final_url = number ? `${url}${number}` : `${url}${1}`;
    
    try {       
        const resp = await axios.get(`${final_url}`, {
            headers: {
                "X-APISpace-Token": process.env.RANDOM_FOOD_TOKEN,
                "Authorization-Type": "apikey"
            }
        });
        return {
            statusCode: 200,
            body: JSON.stringify(resp.data),
        }
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify(error),
          }
    }
}