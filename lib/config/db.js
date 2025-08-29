import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const ConnectDB = async () => {
  // const connectUrl = process.env.MONGODB_URI;
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Database Connected Successfully"))
    .catch((e) => console.log(e));
};

export default ConnectDB;
