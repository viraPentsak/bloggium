import ERRORS from "./errors";
import MESSAGES from "./messages";
import PATHS from "./paths"

const DB_URL = process.env.MONGODB_URI;

export {
    DB_URL,
    ERRORS,
    MESSAGES,
    PATHS
}