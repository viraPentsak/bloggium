import ERRORS from "./errors";
import MESSAGES from "./messages";
import PATHS from "./paths"

const DB_URL = process.env.MONGO_DATABASE_URL;

export {
    DB_URL,
    ERRORS,
    MESSAGES,
    PATHS
}