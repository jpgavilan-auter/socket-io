import { connect } from "mongoose";
require('dotenv').config();
export const connectMongo = async () => {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('Conected succesfully');
    } catch (er) {
        console.log(err);
    }
}
