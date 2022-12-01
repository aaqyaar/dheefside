import { awsCognito } from "../utils/aws-cognito";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import request from "request";
import jwkToPem from "jwk-to-pem";
import jwt from "jsonwebtoken";
global.fetch = require("node-fetch");

export class Auth {
  static async register(email: string, password: string) {
    try {
      return new Promise((resolve, reject) => {
        awsCognito.userPool.signUp(email, password, [], [], (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(result?.user);
        });
      });
    } catch (error) {
      return error;
    }
  }

  static async confirmSignUp(email: string, code: string) {
    const userData = {
      Username: email,
      Pool: awsCognito.userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    await cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        return err;
      }
      return result.user;
    });
  }

  static async login(email: string, password: string) {
    try {
      return new Promise((resolve, reject) => {
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
        const data = {
          Username: email,
          Pool: awsCognito.userPool,
        };
        const cognitoUser = new CognitoUser(data);
        cognitoUser.authenticateUser(authDetails, {
          onSuccess: (result) => {
            return resolve(result);
          },
          onFailure: (err) => {
            return reject(err);
          },
        });
      });
    } catch (error) {
      return error;
    }
  }

  static async logout() {
    try {
      const cognitoUser = awsCognito.userPool.getCurrentUser();
      if (cognitoUser) {
        cognitoUser.signOut();
      }
    } catch (error) {
      return error;
    }
  }

  static async getAccessToken() {
    const cognitoUser = awsCognito.userPool.getCurrentUser();
    if (cognitoUser) {
      return new Promise((resolve, reject) => {
        cognitoUser.getSession((err: any, session: any) => {
          if (err) {
            reject(err);
          }
          resolve(session.getAccessToken().getJwtToken());
        });
      });
    }
  }

  static async validateToken(token: string) {
    try {
      return new Promise((resolve, reject) => {
        const url = `https://cognito-idp.${awsCognito.region}.amazonaws.com/${awsCognito.Auth.UserPoolId}/.well-known/jwks.json`;
        request({ url, json: true }, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            const pems: any = {};
            const keys = body.keys;
            for (let i = 0; i < keys.length; i++) {
              const key_id = keys[i].kid;
              const modulus = keys[i].n;
              const exponent = keys[i].e;
              const key_type = keys[i].kty;
              const jwk = { kty: key_type, n: modulus, e: exponent };
              const pem = jwkToPem(jwk);
              pems[key_id] = pem;
            }
            const decodedJwt: any = jwt.decode(token, { complete: true });
            if (!decodedJwt) {
              reject("Not a valid JWT token");
            }
            const kid = decodedJwt.header.kid;
            const pem = pems[kid];
            if (!pem) {
              reject("Invalid token");
            }
            jwt.verify(token, pem, (err: any, payload: any) => {
              if (err) {
                return reject(err);
              } else {
                return resolve(payload);
              }
            });
          } else {
            reject(error);
          }
        });
      });
    } catch (error) {
      return error;
    }
  }
}
