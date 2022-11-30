import AmazonCognitoIdentity from "amazon-cognito-identity-js";

import { awsConfig } from "./aws-config";

const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const userPool = new CognitoUserPool({
  UserPoolId: awsConfig.Auth.UserPoolId,
  ClientId: awsConfig.Auth.ClientId,
});

const { Auth, region } = awsConfig;

export const awsCognito = {
  Auth,
  region,
  userPool,
};
