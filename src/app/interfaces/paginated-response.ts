export interface PaginatedResponse<T> {
  readonly page: number;
  readonly limit: number;
  readonly results: T[];
}
