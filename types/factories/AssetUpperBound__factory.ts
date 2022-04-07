/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AssetUpperBound,
  AssetUpperBoundInterface,
} from "../AssetUpperBound";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
    ],
    name: "UppserBoundSet",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_upperBound",
        type: "uint256",
      },
    ],
    name: "setUpperBound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "upperBounds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103c78061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b146100a9578063b5daa610146100c4578063f2fde38b146100d757600080fd5b80632c8b8da41461006c578063715018a61461009f575b600080fd5b61008c61007a36600461036e565b60016020526000908152604090205481565b6040519081526020015b60405180910390f35b6100a76100ea565b005b6000546040516001600160a01b039091168152602001610096565b6100a76100d2366004610390565b610155565b6100a76100e536600461036e565b610208565b6000546001600160a01b031633146101495760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61015360006102ea565b565b6000546001600160a01b031633146101af5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610140565b6001600160a01b03821660008181526001602052604090819020839055517fe6dc586bfae5dc11d5949bb8433f373a420017b1c9e2e04035170dcb633e41ac906101fc9084815260200190565b60405180910390a25050565b6000546001600160a01b031633146102625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610140565b6001600160a01b0381166102de5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610140565b6102e7816102ea565b50565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461036957600080fd5b919050565b60006020828403121561038057600080fd5b61038982610352565b9392505050565b600080604083850312156103a357600080fd5b6103ac83610352565b94602093909301359350505056fea164736f6c6343000807000a";

type AssetUpperBoundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetUpperBoundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetUpperBound__factory extends ContractFactory {
  constructor(...args: AssetUpperBoundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetUpperBound";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetUpperBound> {
    return super.deploy(overrides || {}) as Promise<AssetUpperBound>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AssetUpperBound {
    return super.attach(address) as AssetUpperBound;
  }
  connect(signer: Signer): AssetUpperBound__factory {
    return super.connect(signer) as AssetUpperBound__factory;
  }
  static readonly contractName: "AssetUpperBound";
  public readonly contractName: "AssetUpperBound";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetUpperBoundInterface {
    return new utils.Interface(_abi) as AssetUpperBoundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetUpperBound {
    return new Contract(address, _abi, signerOrProvider) as AssetUpperBound;
  }
}
