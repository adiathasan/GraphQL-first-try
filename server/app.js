const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
// DB access

const mongoDB =
  "mongodb+srv://Ar271997:Ar271997@cluster0.blejq.mongodb.net/node-practice?retryWrites=true&w=majority";

// server connect
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("open", () => {
  console.log("connection done");
});

const app = express();

// middleware

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//    listining for the request

app.listen(4000, () => {
  console.log("listening for requests");
});
