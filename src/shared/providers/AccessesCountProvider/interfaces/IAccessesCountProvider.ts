interface IAccessesCountProvider {
  totalNumberOfAccesses(): Promise<number>
  incrementAccesses(): Promise<void>
}

const AccessesCountProviderSym = Symbol('AccessesCountProvider')

export { IAccessesCountProvider, AccessesCountProviderSym }
