import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import cors from "cors";
import { json } from "body-parser";

const app = express();
const httpServer = http.createServer(app);

export const startApolloServer = async (port?: number) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: "*",
    }),
    json(),
    expressMiddleware(server)
  );
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at ${port}/graphql`);

  // console.log(`🚀 Server ready at ${url}`);
};
