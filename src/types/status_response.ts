export type StatusResponse<T> = {
  status: string;
  data?: T;
  error?: T;
};
