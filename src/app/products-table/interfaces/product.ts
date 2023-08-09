export interface Product {
  readonly id: number;
  readonly uuid: string;
  name: string;
  description: string;
  statusId: number;
  isDeleted: boolean;
}
