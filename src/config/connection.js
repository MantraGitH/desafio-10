import { connect } from "mongoose";
import "dotenv/config";

const connectionString = process.env.MONGO_URL;

export const initMongoDB = async () => {
  try {
    await connect(connectionString);
    console.log("Conectado a Mongo");
  } catch (error) {
    console.log(error);
  }
};
