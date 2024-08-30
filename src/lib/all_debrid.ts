// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import { HttpService } from '../services/http_service';
import { ErrorResponse } from '../types/error_response';
import { PinResponse } from '../types/pin_response';
import { StatusResponse } from '../types/status_response';
import constants from '../utils/constants';

export class AllDebrid {
  private service: HttpService;

  constructor(
    service: HttpService = new HttpService(constants.URL_BASE.ALL_DEBRID)
  ) {
    this.service = service;
  }

  pin(appName: string): Promise<StatusResponse<PinResponse | ErrorResponse>> {
    return this.service.get('v4', 'pin/get', { agent: appName });
  }
}
