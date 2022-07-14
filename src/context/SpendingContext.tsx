import React, { createContext, useContext } from 'react'
import { DailySpending, Spending } from 'types/SpendingTypes'
import data from '../data/data.json'

const dailySpendingForWeek:DailySpending[] = data
const balance = 921.48
const spendingForMonth =  478.33
const previousMonthDifference = +0.024

const SpendingContext = createContext<Spending>({
    dailySpendingForWeek: dailySpendingForWeek,
    balance: balance,
    spendingForMonth: spendingForMonth,
    previousMonthDifference: previousMonthDifference,
})

export const SpendingProvider: React.FunctionComponent = ({ children }) => {
    // const [dailySpendingForWeek, setDailySpendingForWeek] = React.useState<DailySpending[]>([])
    // const [balance, setBalance] = React.useState<Spending['balance']>(0)
    // const [spendingForMonth, setSpendingForMonth] = React.useState<Spending['spendingForMonth']>(0)
    // const [previousMonthDifference, setPreviousMonthDifference] = React.useState<Spending['previousMonthDifference']>(0)

    return (
        <SpendingContext.Provider value={{
            dailySpendingForWeek,
            balance,
            spendingForMonth,
            previousMonthDifference,
        }}>
            {{children}}
        </SpendingContext.Provider>
    )
}

export const useSpendingContext = () => useContext(SpendingContext)