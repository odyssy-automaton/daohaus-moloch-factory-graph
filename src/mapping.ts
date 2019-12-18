import { BigInt, log, EthereumBlock, Address } from "@graphprotocol/graph-ts";
import { Moloch as MolochContract } from "./types/Moloch/Moloch";
import { Register } from "../generated/Contract/Contract";
import { Factory, Meta, MolochList } from "../generated/schema";
import { Moloch } from "../generated/templates";

export function handleBlock(block: EthereumBlock): void {
  let molochList = MolochList.load("1");
  // let ten = BigInt.fromI32(10);
  let blockNumber = block.number.isI32() ? block.number.toI32() : 10;
  let multipleOfTen = blockNumber % 10 == 0;

  if (molochList !== null && multipleOfTen) {
    molochList.molochAddresses.forEach(address => {
      let contract = MolochContract.bind(
        Address.fromString(address.toHexString())
      );
      let currentPeriod = contract.getCurrentPeriod();
      let totalShares = contract.totalShares();

      let meta = Meta.load(address.toHexString());
      if (!meta) {
        meta = new Meta(address.toHexString());
      }
      meta.currentPeriod = currentPeriod;
      meta.totalShares = totalShares;
      meta.save();
    });
  }
}

export function handleRegister(event: Register): void {
  let entity = Factory.load(event.params.moloch.toHexString());

  log.info("**************** event fired. contract address: {}", [
    event.params.moloch.toHexString()
  ]);

  if (entity == null) {
    entity = new Factory(event.params.moloch.toHexString());

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0);
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1);

  entity.moloch = event.params.moloch;
  entity.summoner = event.params.summoner;
  entity.title = event.params.title;
  entity.index = event.params.daoIdx.toString();
  entity.newContract = event.params.newContract.toString();

  Moloch.create(event.params.moloch);
  entity.save();

  let molochList = MolochList.load("1");

  if (molochList === null) {
    molochList = new MolochList("1");
    molochList.count = 0;
    molochList.molochAddresses = [event.params.moloch];
  } else {
    molochList.count = molochList.count + 1;
    let addresses = molochList.molochAddresses;
    addresses.push(event.params.moloch);
    molochList.molochAddresses = addresses;
  }

  molochList.save();
}
