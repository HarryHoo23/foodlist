require('dotenv').config();
const axios = require('axios');


const url = `https://eolink.o.apispace.com/eat222/api/v1/forward/chishenme?size=1`;

exports.handler = async (event, context) => {
    try {       
        const resp = await axios.get(url, {
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