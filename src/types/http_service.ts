// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Allan Pereira <https://github.com/codebyallan>

export type IHttpService<T> = {
  get: (
    version: string,
    methods: string,
    headers?: Record<string, string>,
    queryParams?: Record<string, any>
  ) => Promise<T | null>;
};
