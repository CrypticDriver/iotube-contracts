/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace AssetRegistry {
  export type AssetStruct = {
    tubeID: BigNumberish;
    asset: string;
    active: boolean;
  };

  export type AssetStructOutput = [BigNumber, string, boolean] & {
    tubeID: BigNumber;
    asset: string;
    active: boolean;
  };
}

export interface AssetRegistryInterface extends utils.Interface {
  contractName: "AssetRegistry";
  functions: {
    "activateAsset(uint256,uint256)": FunctionFragment;
    "activateTube(uint256)": FunctionFragment;
    "addAssetOnTube(uint256,uint256,address)": FunctionFragment;
    "addOriginalAsset(uint256,address)": FunctionFragment;
    "assetID(uint256,address)": FunctionFragment;
    "assetOnTube(uint256,address,uint256)": FunctionFragment;
    "assetOnTubeByID(uint256,uint256)": FunctionFragment;
    "bannedTubeIDs(uint256)": FunctionFragment;
    "deactivateAsset(uint256,uint256)": FunctionFragment;
    "deactivateTube(uint256)": FunctionFragment;
    "grant(address)": FunctionFragment;
    "numOfAssets()": FunctionFragment;
    "operators(address)": FunctionFragment;
    "originalAssetByID(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAssetOnTube(uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revoke(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activateAsset",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "activateTube",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addAssetOnTube",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addOriginalAsset",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "assetID",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "assetOnTube",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetOnTubeByID",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bannedTubeIDs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateAsset",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateTube",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "grant", values: [string]): string;
  encodeFunctionData(
    functionFragment: "numOfAssets",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operators", values: [string]): string;
  encodeFunctionData(
    functionFragment: "originalAssetByID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAssetOnTube",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "revoke", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activateTube",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAssetOnTube",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addOriginalAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetOnTube",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetOnTubeByID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bannedTubeIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateTube",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grant", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numOfAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operators", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "originalAssetByID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAssetOnTube",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AssetActivated(uint256,uint256)": EventFragment;
    "AssetAddedOnTube(uint256,uint256,address)": EventFragment;
    "AssetDeactivated(uint256,uint256)": EventFragment;
    "AssetRemovedOnTube(uint256,uint256,address)": EventFragment;
    "NewOriginalAsset(uint256,address,uint256)": EventFragment;
    "OperatorGranted(address)": EventFragment;
    "OperatorRevoked(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TubeActivated(uint256)": EventFragment;
    "TubeDeactivated(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetAddedOnTube"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetRemovedOnTube"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOriginalAsset"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TubeActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TubeDeactivated"): EventFragment;
}

export type AssetActivatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { id: BigNumber; tubID: BigNumber }
>;

export type AssetActivatedEventFilter = TypedEventFilter<AssetActivatedEvent>;

export type AssetAddedOnTubeEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { id: BigNumber; tubeID: BigNumber; asset: string }
>;

export type AssetAddedOnTubeEventFilter =
  TypedEventFilter<AssetAddedOnTubeEvent>;

export type AssetDeactivatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { id: BigNumber; tubeID: BigNumber }
>;

export type AssetDeactivatedEventFilter =
  TypedEventFilter<AssetDeactivatedEvent>;

export type AssetRemovedOnTubeEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { id: BigNumber; tubeID: BigNumber; asset: string }
>;

export type AssetRemovedOnTubeEventFilter =
  TypedEventFilter<AssetRemovedOnTubeEvent>;

export type NewOriginalAssetEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { tubeID: BigNumber; asset: string; id: BigNumber }
>;

export type NewOriginalAssetEventFilter =
  TypedEventFilter<NewOriginalAssetEvent>;

export type OperatorGrantedEvent = TypedEvent<[string], { operator: string }>;

export type OperatorGrantedEventFilter = TypedEventFilter<OperatorGrantedEvent>;

export type OperatorRevokedEvent = TypedEvent<[string], { operator: string }>;

export type OperatorRevokedEventFilter = TypedEventFilter<OperatorRevokedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TubeActivatedEvent = TypedEvent<[BigNumber], { tubID: BigNumber }>;

export type TubeActivatedEventFilter = TypedEventFilter<TubeActivatedEvent>;

export type TubeDeactivatedEvent = TypedEvent<
  [BigNumber],
  { tubeID: BigNumber }
>;

export type TubeDeactivatedEventFilter = TypedEventFilter<TubeDeactivatedEvent>;

export interface AssetRegistry extends BaseContract {
  contractName: "AssetRegistry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    activateTube(
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOriginalAsset(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assetID(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    assetOnTube(
      _srcTubeID: BigNumberish,
      _srcAsset: string,
      _dstTubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[AssetRegistry.AssetStructOutput]>;

    assetOnTubeByID(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[AssetRegistry.AssetStructOutput]>;

    bannedTubeIDs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deactivateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deactivateTube(
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    grant(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numOfAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    operators(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    originalAssetByID(
      _assetID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[AssetRegistry.AssetStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  activateAsset(
    _assetID: BigNumberish,
    _tubeID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  activateTube(
    _tubeID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addAssetOnTube(
    _assetID: BigNumberish,
    _tubeID: BigNumberish,
    _asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOriginalAsset(
    _tubeID: BigNumberish,
    _asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assetID(
    _tubeID: BigNumberish,
    _asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  assetOnTube(
    _srcTubeID: BigNumberish,
    _srcAsset: string,
    _dstTubeID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<AssetRegistry.AssetStructOutput>;

  assetOnTubeByID(
    _assetID: BigNumberish,
    _tubeID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<AssetRegistry.AssetStructOutput>;

  bannedTubeIDs(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deactivateAsset(
    _assetID: BigNumberish,
    _tubeID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deactivateTube(
    _tubeID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  grant(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numOfAssets(overrides?: CallOverrides): Promise<BigNumber>;

  operators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  originalAssetByID(
    _assetID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<AssetRegistry.AssetStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAssetOnTube(
    _assetID: BigNumberish,
    _tubeID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    activateTube(
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addOriginalAsset(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetID(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetOnTube(
      _srcTubeID: BigNumberish,
      _srcAsset: string,
      _dstTubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<AssetRegistry.AssetStructOutput>;

    assetOnTubeByID(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<AssetRegistry.AssetStructOutput>;

    bannedTubeIDs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deactivateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateTube(
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    grant(_account: string, overrides?: CallOverrides): Promise<void>;

    numOfAssets(overrides?: CallOverrides): Promise<BigNumber>;

    operators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    originalAssetByID(
      _assetID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<AssetRegistry.AssetStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revoke(_account: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetActivated(uint256,uint256)"(
      id?: BigNumberish | null,
      tubID?: BigNumberish | null
    ): AssetActivatedEventFilter;
    AssetActivated(
      id?: BigNumberish | null,
      tubID?: BigNumberish | null
    ): AssetActivatedEventFilter;

    "AssetAddedOnTube(uint256,uint256,address)"(
      id?: BigNumberish | null,
      tubeID?: BigNumberish | null,
      asset?: null
    ): AssetAddedOnTubeEventFilter;
    AssetAddedOnTube(
      id?: BigNumberish | null,
      tubeID?: BigNumberish | null,
      asset?: null
    ): AssetAddedOnTubeEventFilter;

    "AssetDeactivated(uint256,uint256)"(
      id?: BigNumberish | null,
      tubeID?: BigNumberish | null
    ): AssetDeactivatedEventFilter;
    AssetDeactivated(
      id?: BigNumberish | null,
      tubeID?: BigNumberish | null
    ): AssetDeactivatedEventFilter;

    "AssetRemovedOnTube(uint256,uint256,address)"(
      id?: BigNumberish | null,
      tubeID?: BigNumberish | null,
      asset?: null
    ): AssetRemovedOnTubeEventFilter;
    AssetRemovedOnTube(
      id?: BigNumberish | null,
      tubeID?: BigNumberish | null,
      asset?: null
    ): AssetRemovedOnTubeEventFilter;

    "NewOriginalAsset(uint256,address,uint256)"(
      tubeID?: BigNumberish | null,
      asset?: string | null,
      id?: BigNumberish | null
    ): NewOriginalAssetEventFilter;
    NewOriginalAsset(
      tubeID?: BigNumberish | null,
      asset?: string | null,
      id?: BigNumberish | null
    ): NewOriginalAssetEventFilter;

    "OperatorGranted(address)"(
      operator?: string | null
    ): OperatorGrantedEventFilter;
    OperatorGranted(operator?: string | null): OperatorGrantedEventFilter;

    "OperatorRevoked(address)"(
      operator?: string | null
    ): OperatorRevokedEventFilter;
    OperatorRevoked(operator?: string | null): OperatorRevokedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TubeActivated(uint256)"(
      tubID?: BigNumberish | null
    ): TubeActivatedEventFilter;
    TubeActivated(tubID?: BigNumberish | null): TubeActivatedEventFilter;

    "TubeDeactivated(uint256)"(
      tubeID?: BigNumberish | null
    ): TubeDeactivatedEventFilter;
    TubeDeactivated(tubeID?: BigNumberish | null): TubeDeactivatedEventFilter;
  };

  estimateGas: {
    activateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    activateTube(
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOriginalAsset(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assetID(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetOnTube(
      _srcTubeID: BigNumberish,
      _srcAsset: string,
      _dstTubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetOnTubeByID(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bannedTubeIDs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deactivateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deactivateTube(
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    grant(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numOfAssets(overrides?: CallOverrides): Promise<BigNumber>;

    operators(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    originalAssetByID(
      _assetID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    activateTube(
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOriginalAsset(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assetID(
      _tubeID: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetOnTube(
      _srcTubeID: BigNumberish,
      _srcAsset: string,
      _dstTubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetOnTubeByID(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bannedTubeIDs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deactivateAsset(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deactivateTube(
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    grant(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numOfAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    originalAssetByID(
      _assetID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAssetOnTube(
      _assetID: BigNumberish,
      _tubeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
