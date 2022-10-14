import mongoose from "mongoose";

const mongooConection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConection.isConnected) {
    console.log("ya estamos conectados");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongooConection.isConnected = mongoose.connections[0].readyState;
    if (mongooConection.isConnected === 1) {
      console.log("usando coneccion anterior");
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect("");
  mongooConection.isConnected = 1;
  console.log("conectado a mongoDB: ", "....");
};

export const disconect = async () => {
  if (mongooConection.isConnected !== 0) return;
  await mongoose.disconnect();
  console.log("desconectado de mongoDB");
};
