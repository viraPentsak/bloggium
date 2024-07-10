import {DB_URL, ERRORS} from "@/constants";
import mongoose from "mongoose";

const dbConnect = async () => {
    if (!DB_URL) {
        throw new Error(ERRORS.DB_GENERAL);
    }

    try {
        const {connection} = await mongoose.connect(DB_URL);
        if (connection.readyState === 1) {
            return Promise.resolve(true);
        }

    } catch (e) {
        console.log(e);
        return Promise.reject(e)
    }
}

export default dbConnect;