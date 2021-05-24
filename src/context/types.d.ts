export type LotteryContextState = {
  activeLottery: Lottery
  setActiveLottery: any
}

type Lottery = {
  name: string
  id: number
}
