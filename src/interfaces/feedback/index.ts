import { UserInterface } from 'interfaces/user';
import { ReservationInterface } from 'interfaces/reservation';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  user_id?: string;
  reservation_id?: string;
  comment: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  reservation?: ReservationInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  reservation_id?: string;
  comment?: string;
}
