/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ValidatorRegistry,
  ValidatorRegistryInterface,
} from "../ValidatorRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "files",
    outputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "genre",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "getFile",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "genre",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061050d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630b87c1e01461004657806339c637df14610070578063a00fd3c814610092575b600080fd5b61005961005436600461037a565b6100a7565b6040516100679291906104a4565b60405180910390f35b61008361007e36600461037a565b610165565b60405161006793929190610473565b6100a56100a03660046103aa565b61021a565b005b6001600160a01b0381166000908152602081905260408120600181015460028201805460609392919081906100db906104c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610107906104c5565b80156101545780601f1061012957610100808354040283529160200191610154565b820191906000526020600020905b81548152906001019060200180831161013757829003601f168201915b505050505090509250925050915091565b6000602081905290815260409020805460018201546002830180546001600160a01b03909316939192610197906104c5565b80601f01602080910402602001604051908101604052809291908181526020018280546101c3906104c5565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b5050505050905083565b6040518060600160405280336001600160a01b0316815260200184815260200183838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250503381526020818152604091829020845181547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039091161781558482015160018201559184015180519293506102d992600285019291909101906102e1565b505050505050565b8280546102ed906104c5565b90600052602060002090601f01602090048101928261030f5760008555610355565b82601f1061032857805160ff1916838001178555610355565b82800160010185558215610355579182015b8281111561035557825182559160200191906001019061033a565b50610361929150610365565b5090565b5b808211156103615760008155600101610366565b60006020828403121561038c57600080fd5b81356001600160a01b03811681146103a357600080fd5b9392505050565b6000806000604084860312156103bf57600080fd5b83359250602084013567ffffffffffffffff808211156103de57600080fd5b818601915086601f8301126103f257600080fd5b81358181111561040157600080fd5b87602082850101111561041357600080fd5b6020830194508093505050509250925092565b6000815180845260005b8181101561044c57602081850181015186830182015201610430565b8181111561045e576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b038416815282602082015260606040820152600061049b6060830184610426565b95945050505050565b8281526040602082015260006104bd6040830184610426565b949350505050565b600181811c908216806104d957607f821691505b602082108114156104fa57634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c6343000807000a";

type ValidatorRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ValidatorRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ValidatorRegistry__factory extends ContractFactory {
  constructor(...args: ValidatorRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ValidatorRegistry";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ValidatorRegistry> {
    return super.deploy(overrides || {}) as Promise<ValidatorRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ValidatorRegistry {
    return super.attach(address) as ValidatorRegistry;
  }
  connect(signer: Signer): ValidatorRegistry__factory {
    return super.connect(signer) as ValidatorRegistry__factory;
  }
  static readonly contractName: "ValidatorRegistry";
  public readonly contractName: "ValidatorRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidatorRegistryInterface {
    return new utils.Interface(_abi) as ValidatorRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidatorRegistry {
    return new Contract(address, _abi, signerOrProvider) as ValidatorRegistry;
  }
}
