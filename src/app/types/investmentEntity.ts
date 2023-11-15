export interface InvestmentEntity {
  _id: string;
  name: string;
  type: string;
  sectors: string[];
  businessModels: string[];
  businessTargets: string[];
  country: string;
  countriesInvests: string[];
  maxTicket: number;
  minTicket: number;
  members: InvestmentEntityMember[];
  website: string;
  roundPhases: string[];
  createdAt: Date;
}

export interface InvestmentEntityMember {
  name: string;
  lastName: string;
  linkedIn: string;
  email: string;
  role: string;
}
