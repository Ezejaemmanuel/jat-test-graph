import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdditionalTokenData,
  OwnershipTransferred,
  TokenUpdate
} from "../generated/MainEngine/MainEngine"

export function createAdditionalTokenDataEvent(
  tokenAddress: Address,
  name: string,
  symbol: string,
  description: string,
  imageUrl: string,
  twitter: string,
  telegram: string,
  website: string,
  timestamp: BigInt
): AdditionalTokenData {
  let additionalTokenDataEvent = changetype<AdditionalTokenData>(newMockEvent())

  additionalTokenDataEvent.parameters = new Array()

  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam("imageUrl", ethereum.Value.fromString(imageUrl))
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam("twitter", ethereum.Value.fromString(twitter))
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam("telegram", ethereum.Value.fromString(telegram))
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam("website", ethereum.Value.fromString(website))
  )
  additionalTokenDataEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return additionalTokenDataEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenUpdateEvent(
  tokenAddress: Address,
  creator: Address,
  sqrtPriceX96: BigInt,
  tokenPrice: BigInt,
  liquidity: BigInt,
  ethReserve: BigInt,
  tokenReserve: BigInt,
  totalSupply: BigInt,
  lockedLiquidityPercentage: BigInt,
  withdrawableLiquidity: BigInt,
  liquidatedLiquidity: BigInt,
  timestamp: BigInt
): TokenUpdate {
  let tokenUpdateEvent = changetype<TokenUpdate>(newMockEvent())

  tokenUpdateEvent.parameters = new Array()

  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "sqrtPriceX96",
      ethereum.Value.fromUnsignedBigInt(sqrtPriceX96)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenPrice",
      ethereum.Value.fromUnsignedBigInt(tokenPrice)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "ethReserve",
      ethereum.Value.fromUnsignedBigInt(ethReserve)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenReserve",
      ethereum.Value.fromUnsignedBigInt(tokenReserve)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "totalSupply",
      ethereum.Value.fromUnsignedBigInt(totalSupply)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "lockedLiquidityPercentage",
      ethereum.Value.fromUnsignedBigInt(lockedLiquidityPercentage)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawableLiquidity",
      ethereum.Value.fromUnsignedBigInt(withdrawableLiquidity)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "liquidatedLiquidity",
      ethereum.Value.fromUnsignedBigInt(liquidatedLiquidity)
    )
  )
  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return tokenUpdateEvent
}
