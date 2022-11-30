export const awsConfig = {
  Auth: {
    UserPoolId: process.env.POOL_ID!,
    ClientId: process.env.CLIENT_ID!,
  },
  region: process.env.AWS_REGION,
};
