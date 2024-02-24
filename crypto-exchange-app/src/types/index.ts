export interface Trade {
  id: string,
  price: number,
  amount: number,
  time?: string,
  isBuyerMaker?: boolean
}

export interface Price {
  id: string,
  exchange: string,
  price: number
}

export interface User {
  id: string,
  name: string,
  email?: string,
}

export interface ExchangeState {
  selectedExchange: string,
  cryptocurrencyPair: string
}

export interface ApplicationState {
  user: User,
  exchange: ExchangeState,
}
