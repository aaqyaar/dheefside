import AmazonCognitoIdentity from "amazon-cognito-identity-js";

import { awsConfig } from "./aws-config";

const { Auth, region } = awsConfig;

export const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: Auth.UserPoolId,
  ClientId: Auth.ClientId,
});

export const awsCognito = {
  Auth,
  region,
  userPool,
};
