import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AdditionalTokenData } from "../generated/schema"
import { AdditionalTokenData as AdditionalTokenDataEvent } from "../generated/MainEngine/MainEngine"
import { handleAdditionalTokenData } from "../src/main-engine"
import { createAdditionalTokenDataEvent } from "./main-engine-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let symbol = "Example string value"
    let description = "Example string value"
    let imageUrl = "Example string value"
    let twitter = "Example string value"
    let telegram = "Example string value"
    let website = "Example string value"
    let timestamp = BigInt.fromI32(234)
    let newAdditionalTokenDataEvent = createAdditionalTokenDataEvent(
      tokenAddress,
      name,
      symbol,
      description,
      imageUrl,
      twitter,
      telegram,
      website,
      timestamp
    )
    handleAdditionalTokenData(newAdditionalTokenDataEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdditionalTokenData created and stored", () => {
    assert.entityCount("AdditionalTokenData", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "symbol",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "imageUrl",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "twitter",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "telegram",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "website",
      "Example string value"
    )
    assert.fieldEquals(
      "AdditionalTokenData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
