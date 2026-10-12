// lib/mongoose.ts
import mongoose, { Mongoose } from "mongoose";

type MongooseCache = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local",
  );
}

// Check the global object to see if a cached connection exists
const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

const cached: MongooseCache =
  globalWithMongoose.mongoose ??
  (globalWithMongoose.mongoose = { conn: null, promise: null });

async function dbConnect() {
  // Return the existing connection if it is already open
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  // Create a new connection promise if it doesn't exist
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URL!, opts)
      .then((mongooseInstance) => {
        console.log("Created new MongoDB connection");
        return mongooseInstance;
      });
  }

  //if the connection promise exists, wait for it to resolve and return the connection
  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connection established via cached promise");
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
