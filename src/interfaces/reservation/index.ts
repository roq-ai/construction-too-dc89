import { FeedbackInterface } from 'interfaces/feedback';
import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  tool_id?: string;
  user_id?: string;
  outlet_id?: string;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  tool?: ToolInterface;
  user?: UserInterface;
  outlet?: OutletInterface;
  _count?: {
    feedback?: number;
  };
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  user_id?: string;
  outlet_id?: string;
}
