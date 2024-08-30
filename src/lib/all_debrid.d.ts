// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

import { HttpService } from '../services/http_service';
import { ErrorResponse } from '../types/error_response';
import { PinResponse } from '../types/pin_response';
import { StatusResponse } from '../types/status_response';

// Declaration of the `constants` constant imported
declare const constants: {
  URL_BASE: {
    ALL_DEBRID: string;
  };
};

// Declaration of the `AllDebrid` class
export class AllDebrid {
  /**
   * Constructor of the `AllDebrid` class.
   */
  constructor(service?: HttpService);

  /**
   * Sends a GET request to the 'pin/get' endpoint of the AllDebrid API.
   *
   * @param appName Name of the application to be passed as the 'agent' parameter.
   * @returns Promise with the API response containing either a PinResponse or an ErrorResponse.
   */
  pin(appName: string): Promise<StatusResponse<PinResponse | ErrorResponse>>;
}
