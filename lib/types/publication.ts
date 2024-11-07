export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  url: string;
  type: string;
  citations?: number;
  doi?: string;
  key?: string;
  manual?: boolean;
  add_tag?: string;
}