import { Client, Account, Databases } from "appwrite";
import { env } from "@/lib/env.ts";

export const client = new Client();
client.setEndpoint(env.ENDPOINT).setProject(env.PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from "appwrite";
export { Query } from "appwrite";
