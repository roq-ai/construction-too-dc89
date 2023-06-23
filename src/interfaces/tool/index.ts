import { ReservationInterface } from 'interfaces/reservation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  company?: CompanyInterface;
  _count?: {
    reservation?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
}
