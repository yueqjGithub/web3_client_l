declare interface Window {
  ethereum: any;
}

declare namespace Wallet {
  interface Chains {
    name: string
    id: number
  }
  interface DispatchAction{
    type: 'update_key' | 'update_all';
    payload: any;
    key?: keyof Store | undefined;
  }
  interface Store {
    address: string
    balance: bigint
    currentBlockNumber: number
    currentChain?: Chains
    Chains: Chains[]
  }
}