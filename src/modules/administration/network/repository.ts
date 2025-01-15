import { databases, ID } from "@/config/appwrite";
import { env } from "@/lib/env";
import { Network } from "./schema/types";

export class NetworkRepository {
  async getNetworks() {
    const networks = await databases.listDocuments<Network>(
      env.DATABASE_ID,
      env.NETWORK_COLLECTION_ID,
    );
    return networks.documents;
  }

  async createNetwork(network: Network) {
    const newNetwork = await databases.createDocument<Network>(
      env.DATABASE_ID,
      env.NETWORK_COLLECTION_ID,
      ID.unique(),
      network,
    );

    return newNetwork;
  }

  async updateNetwork(network: Network) {
    const updatedNetwork = await databases.updateDocument<Network>(
      env.DATABASE_ID,
      env.NETWORK_COLLECTION_ID,
      network.id,
      network,
    );
    return updatedNetwork;
  }

  async deleteNetwork(networkId: string) {
    await databases.deleteDocument(
      env.DATABASE_ID,
      env.NETWORK_COLLECTION_ID,
      networkId,
    );
  }

  async getNetwork(networkId: string) {
    const network = await databases.getDocument<Network>(
      env.DATABASE_ID,
      env.NETWORK_COLLECTION_ID,
      networkId,
    );
    return network;
  }
}

export const networkRepository = new NetworkRepository();
