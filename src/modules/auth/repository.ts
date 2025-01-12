import { account, ID } from "@/config/appwrite";
import { auth_routes } from ".";
import { env } from "@/lib/env.ts";

class AuthRepository {
  async login(email: string) {
    return await account.createMagicURLToken(
      ID.unique(),
      email,
      `${env.APP_URL}/${auth_routes.verify_email}`,
    );
  }

  async logout() {
    return await account.deleteSession("current");
  }

  async verifyEmail(userId: string, secret: string) {
    return await account.createSession(userId, secret);
  }

  async getActiveUser() {
    return await account.get();
  }

  async getActiveSession() {
    return await account.getSession("current");
  }
}

export const authRepository = Object.freeze(new AuthRepository());
