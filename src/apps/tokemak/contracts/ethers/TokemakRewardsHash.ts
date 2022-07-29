/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface TokemakRewardsHashInterface extends utils.Interface {
  functions: {
    'cycleHashes(uint256)': FunctionFragment;
    'latestCycleIndex()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setCycleHashes(uint256,string,string)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'cycleHashes'
      | 'latestCycleIndex'
      | 'owner'
      | 'renounceOwnership'
      | 'setCycleHashes'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'cycleHashes', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'latestCycleIndex', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setCycleHashes',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'cycleHashes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'latestCycleIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setCycleHashes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'CycleHashAdded(uint256,string,string)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CycleHashAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface CycleHashAddedEventObject {
  cycleIndex: BigNumber;
  latestClaimableHash: string;
  cycleHash: string;
}
export type CycleHashAddedEvent = TypedEvent<[BigNumber, string, string], CycleHashAddedEventObject>;

export type CycleHashAddedEventFilter = TypedEventFilter<CycleHashAddedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface TokemakRewardsHash extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokemakRewardsHashInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cycleHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string, string] & { latestClaimable: string; cycle: string }>;

    latestCycleIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    setCycleHashes(
      index: PromiseOrValue<BigNumberish>,
      latestClaimableIpfsHash: PromiseOrValue<string>,
      cycleIpfsHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  cycleHashes(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<[string, string] & { latestClaimable: string; cycle: string }>;

  latestCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  setCycleHashes(
    index: PromiseOrValue<BigNumberish>,
    latestClaimableIpfsHash: PromiseOrValue<string>,
    cycleIpfsHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    cycleHashes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string, string] & { latestClaimable: string; cycle: string }>;

    latestCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setCycleHashes(
      index: PromiseOrValue<BigNumberish>,
      latestClaimableIpfsHash: PromiseOrValue<string>,
      cycleIpfsHash: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'CycleHashAdded(uint256,string,string)'(
      cycleIndex?: null,
      latestClaimableHash?: null,
      cycleHash?: null,
    ): CycleHashAddedEventFilter;
    CycleHashAdded(cycleIndex?: null, latestClaimableHash?: null, cycleHash?: null): CycleHashAddedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    cycleHashes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    latestCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setCycleHashes(
      index: PromiseOrValue<BigNumberish>,
      latestClaimableIpfsHash: PromiseOrValue<string>,
      cycleIpfsHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cycleHashes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestCycleIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    setCycleHashes(
      index: PromiseOrValue<BigNumberish>,
      latestClaimableIpfsHash: PromiseOrValue<string>,
      cycleIpfsHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
