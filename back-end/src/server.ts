import { connectDB } from "./config/connectDB";
import { startApolloServer } from "./graphql/apollo";
import "dotenv/config";
//
const PORT = Number(process.env.PORT) || 3000;
// Connect to MongoDB
connectDB();

// Start Apollo Server
startApolloServer(PORT);
