export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  annualInvestment: number;
  expectedReturn: number;
}

export interface resultdatatype {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
