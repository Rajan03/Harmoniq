export * from "./endpoints";

export type ApiResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
};
