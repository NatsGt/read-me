// const express = require("express")
// const dotenv = require("dotenv")
import express from "express"
import dotenv from "dotenv"
import {Sequelize} from "sequelize"
import connection from "../models/connection";

const app = express()

dotenv.config()

const port = process.env.port || 3000

connection.authenticate().then(()=>console.log("it worked :D")).catch(()=>console.log("it failed :("))

// Define an asynchronous function to start the server and sync the database
const start = async (): Promise<void> => {
  try {
    //await connection.sync(); // Synchronizes the database with the defined models
    app.listen(3000, () => { // Starts the server on port 3000
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error); // Logs any errors that occur
    process.exit(1); // Exits the process with an error status code
  }
};

void start();
