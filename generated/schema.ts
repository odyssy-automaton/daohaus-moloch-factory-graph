// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Factory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Factory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Factory", id.toString(), this);
  }

  static load(id: string): Factory | null {
    return store.get("Factory", id) as Factory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): string | null {
    let value = this.get("index");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set index(value: string | null) {
    if (value === null) {
      this.unset("index");
    } else {
      this.set("index", Value.fromString(value as string));
    }
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get moloch(): Bytes {
    let value = this.get("moloch");
    return value.toBytes();
  }

  set moloch(value: Bytes) {
    this.set("moloch", Value.fromBytes(value));
  }

  get summoner(): Bytes {
    let value = this.get("summoner");
    return value.toBytes();
  }

  set summoner(value: Bytes) {
    this.set("summoner", Value.fromBytes(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (value === null) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(value as string));
    }
  }

  get newContract(): string | null {
    let value = this.get("newContract");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set newContract(value: string | null) {
    if (value === null) {
      this.unset("newContract");
    } else {
      this.set("newContract", Value.fromString(value as string));
    }
  }
}

export class MolochList extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MolochList entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MolochList entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MolochList", id.toString(), this);
  }

  static load(id: string): MolochList | null {
    return store.get("MolochList", id) as MolochList | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get molochAddresses(): Array<Bytes> {
    let value = this.get("molochAddresses");
    return value.toBytesArray();
  }

  set molochAddresses(value: Array<Bytes>) {
    this.set("molochAddresses", Value.fromBytesArray(value));
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get uintVote(): i32 {
    let value = this.get("uintVote");
    return value.toI32();
  }

  set uintVote(value: i32) {
    this.set("uintVote", Value.fromI32(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get startingPeriod(): BigInt {
    let value = this.get("startingPeriod");
    return value.toBigInt();
  }

  set startingPeriod(value: BigInt) {
    this.set("startingPeriod", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get applicant(): string {
    let value = this.get("applicant");
    return value.toString();
  }

  set applicant(value: string) {
    this.set("applicant", Value.fromString(value));
  }

  get applicantAddress(): Bytes {
    let value = this.get("applicantAddress");
    return value.toBytes();
  }

  set applicantAddress(value: Bytes) {
    this.set("applicantAddress", Value.fromBytes(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get sharesRequested(): BigInt {
    let value = this.get("sharesRequested");
    return value.toBigInt();
  }

  set sharesRequested(value: BigInt) {
    this.set("sharesRequested", Value.fromBigInt(value));
  }

  get yesVotes(): BigInt {
    let value = this.get("yesVotes");
    return value.toBigInt();
  }

  set yesVotes(value: BigInt) {
    this.set("yesVotes", Value.fromBigInt(value));
  }

  get noVotes(): BigInt {
    let value = this.get("noVotes");
    return value.toBigInt();
  }

  set noVotes(value: BigInt) {
    this.set("noVotes", Value.fromBigInt(value));
  }

  get processed(): boolean {
    let value = this.get("processed");
    return value.toBoolean();
  }

  set processed(value: boolean) {
    this.set("processed", Value.fromBoolean(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get details(): string {
    let value = this.get("details");
    return value.toString();
  }

  set details(value: string) {
    this.set("details", Value.fromString(value));
  }

  get maxTotalSharesAtYesVote(): BigInt | null {
    let value = this.get("maxTotalSharesAtYesVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set maxTotalSharesAtYesVote(value: BigInt | null) {
    if (value === null) {
      this.unset("maxTotalSharesAtYesVote");
    } else {
      this.set("maxTotalSharesAtYesVote", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Applicant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Applicant entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Applicant entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Applicant", id.toString(), this);
  }

  static load(id: string): Applicant | null {
    return store.get("Applicant", id) as Applicant | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get applicantAddress(): Bytes {
    let value = this.get("applicantAddress");
    return value.toBytes();
  }

  set applicantAddress(value: Bytes) {
    this.set("applicantAddress", Value.fromBytes(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get sharesRequested(): BigInt {
    let value = this.get("sharesRequested");
    return value.toBigInt();
  }

  set sharesRequested(value: BigInt) {
    this.set("sharesRequested", Value.fromBigInt(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Member entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Member entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Member", id.toString(), this);
  }

  static load(id: string): Member | null {
    return store.get("Member", id) as Member | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get molochAddress(): Bytes {
    let value = this.get("molochAddress");
    return value.toBytes();
  }

  set molochAddress(value: Bytes) {
    this.set("molochAddress", Value.fromBytes(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get highestIndexYesVote(): BigInt | null {
    let value = this.get("highestIndexYesVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set highestIndexYesVote(value: BigInt | null) {
    if (value === null) {
      this.unset("highestIndexYesVote");
    } else {
      this.set("highestIndexYesVote", Value.fromBigInt(value as BigInt));
    }
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get didRagequit(): boolean {
    let value = this.get("didRagequit");
    return value.toBoolean();
  }

  set didRagequit(value: boolean) {
    this.set("didRagequit", Value.fromBoolean(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get submissions(): Array<string> {
    let value = this.get("submissions");
    return value.toStringArray();
  }

  set submissions(value: Array<string>) {
    this.set("submissions", Value.fromStringArray(value));
  }
}

export class Meta extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Meta entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Meta entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Meta", id.toString(), this);
  }

  static load(id: string): Meta | null {
    return store.get("Meta", id) as Meta | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentPeriod(): BigInt {
    let value = this.get("currentPeriod");
    return value.toBigInt();
  }

  set currentPeriod(value: BigInt) {
    this.set("currentPeriod", Value.fromBigInt(value));
  }

  get totalShares(): BigInt {
    let value = this.get("totalShares");
    return value.toBigInt();
  }

  set totalShares(value: BigInt) {
    this.set("totalShares", Value.fromBigInt(value));
  }
}
