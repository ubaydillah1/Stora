/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client } from "node-appwrite";
import { appwriteConfig } from "./config";

export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setEndpoint(appwriteConfig.projectId);
};

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setEndpoint(appwriteConfig.projectId);
};
