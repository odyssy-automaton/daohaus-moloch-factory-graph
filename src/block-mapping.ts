import { EthereumBlock } from "@graphprotocol/graph-ts";

export function handleBlock(block: EthereumBlock): void {
  //need to figure out how to connect to the data source token maybe::
  // let tokenContract = ERC721.bind(event.address);
  // let tokenSymbol = tokenContract.symbol();
  // https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md

  //then call sharevalue at this block and save
  //  molochAddress: Bytes!
  //  shareValue: BigInt!

  let id = block.hash.toHex();
  let entity = new BankHistory(id);
  entity.save();
}
