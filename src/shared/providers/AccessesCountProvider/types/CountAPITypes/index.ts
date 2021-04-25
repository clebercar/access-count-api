export interface INamespaceInfo {
  namespace: string
  key: string
  ttl: number
  created: number
  update_lowerbound: number
  update_upperbound: number
  enable_reset: boolean
  value: number
}

export interface IIncrementNamspaceVisits {
  value: number
}
