import { Client, Account } from "appwrite";
import { env } from "@/lib/env.ts";

export const client = new Client();
client.setEndpoint(env.ENDPOINT).setProject(env.PROJECT_ID);

export const account = new Account(client);
export { ID } from "appwrite";
