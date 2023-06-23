import { ReservationInterface } from 'interfaces/reservation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  location: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  company?: CompanyInterface;
  _count?: {
    reservation?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  company_id?: string;
}
