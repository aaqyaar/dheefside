import app from "./main";
import http from "http";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "./graphql/resolvers";
import { schema } from "./graphql/schema";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: process.env.NODE_ENV === "development",
  })
);

server.listen(PORT, () => {
  console.log(`🌍 => Server is running on port ${PORT} <= 🌍`);
});
