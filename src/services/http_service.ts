// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import { IHttpService } from '../types/http_service';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export class HttpService implements IHttpService<AxiosResponse> {
  private _api: string;
  constructor(api: string) {
    this._api = api;
  }
  async get<T>(
    version: string,
    methods: string,
    queryParams: Record<string, any> = {},
    headers: Record<string, string> = {}
  ): Promise<T> {
    const options: AxiosRequestConfig = {
      params: queryParams,
      headers: headers
    };

    try {
      const response = await axios.get(
        `${this._api}/${version}/${methods}`,
        options
      );
      return response.data;
    } catch (error) {
      throw new Error('API unavailable: ' + error);
    }
  }
}
