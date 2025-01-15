import { Models } from "appwrite";

export type Network = Models.Document & {
  name: string;
  slug: string;
  description: string;
  address: string;
};
