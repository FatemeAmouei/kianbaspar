export interface Item {
  id: string;
  name: string;
  approvedCount: number;
  receivedCount: number;
  description: string;
}

export interface WarehouseItemType {
  id: string;
  requestNum: number;
  name: string;
  requestDate: string;
  items: Item[];
}

export interface RowProps {
  items: Item[];
  colspan: number;
}
