export type LotteryContextState = {
  activeLottery: Lottery
  setActiveLottery: Lottery
}

type Lottery = {
  name: string
  id: number
}
