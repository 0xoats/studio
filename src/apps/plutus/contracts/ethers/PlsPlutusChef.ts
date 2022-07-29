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

export interface PlsPlutusChefInterface extends utils.Interface {
  functions: {
    'MONTH_IN_SECONDS()': FunctionFragment;
    'PLS()': FunctionFragment;
    'add(uint256,address,bool)': FunctionFragment;
    'deposit(uint256,uint256)': FunctionFragment;
    'emergencyWithdraw(uint256)': FunctionFragment;
    'getMultiplier(uint256,uint256)': FunctionFragment;
    'massUpdatePools()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingPls(uint256,address)': FunctionFragment;
    'plsPerSecond()': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'set(uint256,uint256,bool)': FunctionFragment;
    'totalAllocPoint()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateEmissionRate(uint256)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
    'withdraw(uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MONTH_IN_SECONDS'
      | 'PLS'
      | 'add'
      | 'deposit'
      | 'emergencyWithdraw'
      | 'getMultiplier'
      | 'massUpdatePools'
      | 'owner'
      | 'pendingPls'
      | 'plsPerSecond'
      | 'poolInfo'
      | 'poolLength'
      | 'renounceOwnership'
      | 'set'
      | 'totalAllocPoint'
      | 'transferOwnership'
      | 'updateEmissionRate'
      | 'updatePool'
      | 'userInfo'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MONTH_IN_SECONDS', values?: undefined): string;
  encodeFunctionData(functionFragment: 'PLS', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'add',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'getMultiplier',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'massUpdatePools', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pendingPls',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'plsPerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'set',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'updateEmissionRate', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'userInfo',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: 'MONTH_IN_SECONDS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'PLS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMultiplier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingPls', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'plsPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateEmissionRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Deposit(address,uint256,uint256)': EventFragment;
    'EmergencyWithdraw(address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'UpdateEmissionRate(address,uint256)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateEmissionRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface DepositEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface UpdateEmissionRateEventObject {
  caller: string;
  newAmount: BigNumber;
}
export type UpdateEmissionRateEvent = TypedEvent<[string, BigNumber], UpdateEmissionRateEventObject>;

export type UpdateEmissionRateEventFilter = TypedEventFilter<UpdateEmissionRateEvent>;

export interface WithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface PlsPlutusChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PlsPlutusChefInterface;

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
    MONTH_IN_SECONDS(overrides?: CallOverrides): Promise<[BigNumber]>;

    PLS(overrides?: CallOverrides): Promise<[string]>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingPls(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    plsPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardSecond: BigNumber;
        accPlsPerShare: BigNumber;
        lpSupply: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateEmissionRate(
      _plsPerSecond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  MONTH_IN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

  PLS(overrides?: CallOverrides): Promise<string>;

  add(
    _allocPoint: PromiseOrValue<BigNumberish>,
    _lpToken: PromiseOrValue<string>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getMultiplier(
    _from: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingPls(
    _pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  plsPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  poolInfo(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      lpToken: string;
      allocPoint: BigNumber;
      lastRewardSecond: BigNumber;
      accPlsPerShare: BigNumber;
      lpSupply: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  set(
    _pid: PromiseOrValue<BigNumberish>,
    _allocPoint: PromiseOrValue<BigNumberish>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateEmissionRate(
    _plsPerSecond: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

  withdraw(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    MONTH_IN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    PLS(overrides?: CallOverrides): Promise<string>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    emergencyWithdraw(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingPls(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    plsPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardSecond: BigNumber;
        accPlsPerShare: BigNumber;
        lpSupply: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateEmissionRate(_plsPerSecond: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'Deposit(address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): DepositEventFilter;

    'EmergencyWithdraw(address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'UpdateEmissionRate(address,uint256)'(
      caller?: PromiseOrValue<string> | null,
      newAmount?: null,
    ): UpdateEmissionRateEventFilter;
    UpdateEmissionRate(caller?: PromiseOrValue<string> | null, newAmount?: null): UpdateEmissionRateEventFilter;

    'Withdraw(address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): WithdrawEventFilter;
  };

  estimateGas: {
    MONTH_IN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    PLS(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingPls(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    plsPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateEmissionRate(
      _plsPerSecond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MONTH_IN_SECONDS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PLS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _lpToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingPls(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    plsPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateEmissionRate(
      _plsPerSecond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
