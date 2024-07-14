

export interface ResponseTask  {
  "id": number
  "text": string
  "description": string
  "date": string,
  "time": string,
  "boardId": number,
  "columnId": number,
  "responsibleUser": string
}
export interface ResponseBoard {
  id: string;
  title: string;
  columns: Column[];
}

export interface Column {
  id: number;
  title: string;
  color: string;
}