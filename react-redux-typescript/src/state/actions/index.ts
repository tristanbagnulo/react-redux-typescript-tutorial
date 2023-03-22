import { ActionType } from "../action-types"

interface DepositAction {
    type: ActionType.DEPOSIT
    //payload is a property of the type "deposit"
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    //payload is a property of the type "withdraw"
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
    //payload is NOT a property of the type "bankrupt"
}

// The type "Action" will be either the interface of the Deposit,
// Withdraw or Bankrupt actions.
export type Action = DepositAction | WithdrawAction | BankruptAction
