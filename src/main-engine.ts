import {
  AdditionalTokenData as AdditionalTokenDataEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenUpdate as TokenUpdateEvent
} from "../generated/MainEngine/MainEngine"
import {
  AdditionalTokenData,
  OwnershipTransferred,
  TokenUpdate
} from "../generated/schema"

export function handleAdditionalTokenData(
  event: AdditionalTokenDataEvent
): void {
  let entity = new AdditionalTokenData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.description = event.params.description
  entity.imageUrl = event.params.imageUrl
  entity.twitter = event.params.twitter
  entity.telegram = event.params.telegram
  entity.website = event.params.website
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenUpdate(event: TokenUpdateEvent): void {
  let entity = new TokenUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.creator = event.params.creator
  entity.sqrtPriceX96 = event.params.sqrtPriceX96
  entity.tokenPrice = event.params.tokenPrice
  entity.liquidity = event.params.liquidity
  entity.ethReserve = event.params.ethReserve
  entity.tokenReserve = event.params.tokenReserve
  entity.totalSupply = event.params.totalSupply
  entity.lockedLiquidityPercentage = event.params.lockedLiquidityPercentage
  entity.withdrawableLiquidity = event.params.withdrawableLiquidity
  entity.liquidatedLiquidity = event.params.liquidatedLiquidity
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
