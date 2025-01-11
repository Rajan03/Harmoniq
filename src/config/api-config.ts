import { env } from "@/lib/env";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiConfig {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: env.API_URL,
    });
  }

  public GET<Response>(endpoint: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<
      Response,
      AxiosResponse<Response>,
      AxiosRequestConfig
    >(endpoint, config);
  }

  public POST<Response, Request>(
    endpoint: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ) {
    return this.axiosInstance.post<Response, AxiosResponse<Response>, Request>(
      endpoint,
      data,
      config,
    );
  }

  public PUT<Response, Request>(
    endpoint: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ) {
    return this.axiosInstance.put<Response, AxiosResponse<Response>, Request>(
      endpoint,
      data,
      config,
    );
  }

  public DELETE<Response>(endpoint: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.delete<Response, AxiosResponse<Response>>(
      endpoint,
      config,
    );
  }

  public PATCH<Response, Request>(
    endpoint: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ) {
    return this.axiosInstance.patch<Response, AxiosResponse<Response>, Request>(
      endpoint,
      data,
      config,
    );
  }

  public POST_FORM<Response>(
    endpoint: string,
    data: FormData,
    config?: AxiosRequestConfig,
  ) {
    return this.axiosInstance.post<Response, AxiosResponse<Response>>(
      endpoint,
      data,
      config,
    );
  }
}

const apiConfig = new ApiConfig();
export default Object.freeze(apiConfig);
