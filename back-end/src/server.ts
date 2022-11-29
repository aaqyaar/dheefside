import app from "./main";
import http from "http";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "./graphql/resolvers";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    // schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

server.listen(PORT, () => {
  console.log(`🌍 => Server is running on port ${PORT} <= 🌍`);
});
