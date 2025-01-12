import { create } from "zustand";
import { authRepository } from "@/modules/auth/repository";

export interface VerifyEmailState {
  isVerifying: boolean;
  verifyEmail: (_secret: string, _userId: string) => void;
}

export const useVerifyEmail = create<VerifyEmailState>(
  (set): VerifyEmailState => ({
    isVerifying: false,
    verifyEmail: (_secret, _userId) => {
      set({ isVerifying: true });
      authRepository.verifyEmail(_userId, _secret).finally(() => {
        set({ isVerifying: false });
      });
    },
  }),
);
