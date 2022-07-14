
export interface Spending {
    dailySpendingForWeek: DailySpending[];
    balance: number;
    spendingForMonth: number;
    previousMonthDifference: number;
}

export interface DailySpending {
    day: string,
    amount: number
}