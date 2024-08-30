// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import { IHttpService } from '../types/http_service';
import { AxiosResponse } from 'axios';

export class HttpService implements IHttpService<AxiosResponse> {
  private _api: string;
  /** Constructor */
  constructor(api: string);
  /**
   * Generic GET method that supports query parameters and custom headers.
   *
   * @param version API version.
   * @param methods Specific method or endpoint.
   * @param queryParams Additional query parameters like `agent` if needed.
   * @param headers Custom HTTP headers.
   * @returns Promise with Axios response.
   */
  get<T>(
    version: string,
    methods: string,
    queryParams?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<T>;
}
