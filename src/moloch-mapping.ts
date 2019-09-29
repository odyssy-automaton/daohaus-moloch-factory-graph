import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  Moloch as Contract,
  SummonComplete,
  SubmitProposal,
  SubmitVote,
  ProcessProposal,
  Ragequit,
  Abort,
  UpdateDelegateKey
} from "./types/Moloch/Moloch";
import { Proposal, Member, Vote, Applicant } from "./types/schema";
import { Factory } from "../generated/schema";

export function handleSummonComplete(event: SummonComplete): void {
  let factory = Factory.load(event.address.toHex());
  log.info("++++++++ summon complete. moloch: {}, factory.newContract: {}", [
    event.address.toHex(),
    factory.newContract
  ]);
  if (factory.newContract == "0") {
    return;
  }

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.summoner.toHex());

  // let member = new Member(event.params.summoner.toHex());
  let member = new Member(memberId);
  member.molochAddress = event.address;
  member.delegateKey = event.params.summoner;
  member.shares = event.params.shares;
  member.isActive = true;
  member.tokenTribute = BigInt.fromI32(0);
  member.didRagequit = false;
  member.votes = new Array<string>();
  member.submissions = new Array<string>();
  member.save();
}

export function handleSubmitProposal(event: SubmitProposal): void {
  let factory = Factory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (factory.newContract == "0") {
    return;
  }

  // get information directly from contract
  // struct Proposal {
  //     address proposer; // the member who submitted the proposal
  //     address applicant; // the applicant who wishes to become a member - this key will be used for withdrawals
  //     uint256 sharesRequested; // the # of shares the applicant is requesting
  //     uint256 startingPeriod; // the period in which voting can start for this proposal
  //     uint256 yesVotes; // the total number of YES votes for this proposal
  //     uint256 noVotes; // the total number of NO votes for this proposal
  //     bool processed; // true only if the proposal has been processed
  //     bool didPass; // true only if the proposal passed
  //     bool aborted; // true only if applicant calls "abort" fn before end of voting period
  //     uint256 tokenTribute; // amount of tokens offered as tribute
  //     string details; // proposal details - could be IPFS hash, plaintext, or JSON
  //     uint256 maxTotalSharesAtYesVote; // the maximum # of total shares encountered at a yes vote on this proposal
  //     mapping (address => Vote) votesByMember; // the votes on this proposal by each member
  // }
  let contract = Contract.bind(event.address);
  let proposalFromContract = contract.proposalQueue(event.params.proposalIndex);
  let startingPeriod = proposalFromContract.value3;
  let details = proposalFromContract.value10;

  // let proposal = new Proposal(event.params.proposalIndex.toString());
  let proposalId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.proposalIndex.toString());

  let proposal = new Proposal(proposalId);
  proposal.molochAddress = event.address;
  proposal.timestamp = event.block.timestamp.toString();
  proposal.proposalIndex = event.params.proposalIndex;
  proposal.startingPeriod = startingPeriod;
  proposal.delegateKey = event.params.delegateKey;
  proposal.member = event.params.memberAddress.toHex();
  proposal.memberAddress = event.params.memberAddress;
  proposal.applicant = event.params.applicant.toHex();
  proposal.applicantAddress = event.params.applicant;
  proposal.tokenTribute = event.params.tokenTribute;
  proposal.sharesRequested = event.params.sharesRequested;
  proposal.yesVotes = BigInt.fromI32(0);
  proposal.noVotes = BigInt.fromI32(0);
  proposal.processed = false;
  proposal.didPass = false;
  proposal.aborted = false;
  proposal.votes = new Array<string>();
  proposal.details = details;
  proposal.save();

  // let applicant = new Applicant(event.params.applicant.toHex());
  let applicantId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.applicant.toHex());

  let applicant = new Applicant(applicantId);
  applicant.molochAddress = event.address;
  applicant.timestamp = event.block.timestamp.toString();
  applicant.proposalIndex = event.params.proposalIndex;
  applicant.delegateKey = event.params.delegateKey;
  applicant.member = event.params.memberAddress.toHex();
  applicant.memberAddress = event.params.memberAddress;
  applicant.applicantAddress = event.params.applicant;
  applicant.tokenTribute = event.params.tokenTribute;
  applicant.sharesRequested = event.params.sharesRequested;
  applicant.didPass = false;
  applicant.aborted = false;
  applicant.votes = new Array<string>();
  applicant.proposal = event.params.proposalIndex.toString();
  applicant.save();

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.memberAddress.toHex());

  let member = Member.load(memberId);
  let submission = event.params.proposalIndex.toString();
  let memberSubmissions = member.submissions;
  memberSubmissions.push(submission);
  member.submissions = memberSubmissions;
  member.save();
}

export function handleSubmitVote(event: SubmitVote): void {
  let factory = Factory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (factory.newContract == "0") {
    return;
  }

  let voteID = event.params.memberAddress
    .toHex()
    .concat("-")
    .concat(event.params.proposalIndex.toString());

  let vote = new Vote(voteID);
  vote.molochAddress = event.address;
  vote.timestamp = event.block.timestamp.toString();
  vote.proposalIndex = event.params.proposalIndex;
  vote.delegateKey = event.params.delegateKey;
  vote.memberAddress = event.params.memberAddress;
  vote.uintVote = event.params.uintVote;
  vote.proposal = event.params.proposalIndex.toString();
  vote.member = event.params.memberAddress.toHex();
  vote.save();

  let proposalId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.proposalIndex.toString());

  // let proposal = Proposal.load(event.params.proposalIndex.toString());
  let proposal = Proposal.load(proposalId);
  if (event.params.uintVote == 1) {
    proposal.yesVotes = proposal.yesVotes.plus(BigInt.fromI32(1));
  }
  if (event.params.uintVote == 2) {
    proposal.noVotes = proposal.noVotes.plus(BigInt.fromI32(1));
  }

  let proposalVotes = proposal.votes;
  proposalVotes.push(voteID);
  proposal.votes = proposalVotes;
  proposal.save();

  // let applicant = Applicant.load(proposal.applicant);
  let applicantId = event.address
    .toHex()
    .concat("-")
    .concat(proposal.applicant);

  let applicant = Applicant.load(applicantId);
  let applicantVotes = applicant.votes;
  applicantVotes.push(voteID);
  applicant.votes = applicantVotes;
  applicant.save();

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.memberAddress.toHex());

  // let member = Member.load(event.params.memberAddress.toHex());
  let member = Member.load(memberId);
  let memberVotes = member.votes;
  memberVotes.push(voteID);
  member.votes = memberVotes;
  member.save();
}

export function handleProcessProposal(event: ProcessProposal): void {
  let factory = Factory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (factory.newContract == "0") {
    return;
  }

  let proposalId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.proposalIndex.toString());

  // let proposal = Proposal.load(event.params.proposalIndex.toString());
  let proposal = Proposal.load(proposalId);
  proposal.applicant = event.params.applicant.toHex();
  proposal.memberAddress = event.params.memberAddress;
  proposal.tokenTribute = event.params.tokenTribute;
  proposal.sharesRequested = event.params.sharesRequested;
  proposal.didPass = event.params.didPass;
  proposal.processed = true;
  proposal.save();

  if (event.params.didPass) {
    let applicantId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.applicant.toHex());

    // let applicant = Applicant.load(event.params.applicant.toHex());
    let applicant = Applicant.load(applicantId);
    applicant.didPass = true;
    applicant.save();

    let memberId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.applicant.toHex());

    let member = Member.load(memberId);
    // let member = Member.load(event.params.applicant.toHex());
    if (member == null) {
      let newMember = new Member(memberId);
      newMember.molochAddress = event.address;
      newMember.delegateKey = event.params.applicant;
      newMember.shares = event.params.sharesRequested;
      newMember.isActive = true;
      newMember.tokenTribute = event.params.tokenTribute;
      newMember.didRagequit = false;
      newMember.votes = new Array<string>();
      newMember.submissions = new Array<string>();
      newMember.save();
    } else {
      member.shares = member.shares.plus(event.params.sharesRequested);
      member.tokenTribute = member.tokenTribute.plus(event.params.tokenTribute);
      member.save();
    }
  }
}

export function handleRagequit(event: Ragequit): void {
  let factory = Factory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (factory.newContract == "0") {
    return;
  }

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.memberAddress.toHex());

  // let member = Member.load(event.params.memberAddress.toHex());
  let member = Member.load(memberId);
  member.shares = member.shares.minus(event.params.sharesToBurn);
  if (member.shares.equals(new BigInt(0))) {
    member.isActive = false;
  }
  member.save();
}

export function handleAbort(event: Abort): void {
  let factory = Factory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (factory.newContract == "0") {
    return;
  }

  let proposalId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.proposalIndex.toString());

  let proposal = Proposal.load(proposalId);
  // let proposal = Proposal.load(event.params.proposalIndex.toString());
  proposal.aborted = true;
  proposal.save();

  let applicantId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.applicantAddress.toHex());

  let applicant = Applicant.load(applicantId);
  // let applicant = Applicant.load(event.params.applicantAddress.toHex());
  applicant.aborted = true;
  applicant.save();
}

export function handleUpdateDelegateKey(event: UpdateDelegateKey): void {
  let factory = Factory.load(event.address.toHexString());
  log.info(
    "++++++++ update delegate. moloch: {}, factory.newContract: {}, factory.moloch: {}",
    [event.address.toHex(), factory.newContract, factory.moloch.toHexString()]
  );
  if (factory.newContract == "0") {
    return;
  }

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.memberAddress.toHex());

  let member = Member.load(memberId);
  // let member = Member.load(event.params.memberAddress.toHex());
  member.delegateKey = event.params.newDelegateKey;
  member.save();
}
