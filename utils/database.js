import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    if (isConnected) {
      console.log("Mongo DB already connected");
      return;
    }

    await mongoose.connect(process.env.MONGOOSE_URL, {
      dbName: "promptopia",
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });

    isConnected = true;
    console.log("MongoDb connected ");
  } catch (err) {
    console.log(err);
  }
};
