export type LotteryContextState = {
  activeLottery: Lottery
  setActiveLottery: (lottery: Lottery) => void
}

type Lottery = {
  name: string
  id: string
  lotteryTheme: string
}
