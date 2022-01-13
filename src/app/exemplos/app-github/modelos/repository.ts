import { Owner } from './owner';
export interface Repository {
  id:number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  descripiton: string;
  default_branch: string;
  owner: Owner;
}
