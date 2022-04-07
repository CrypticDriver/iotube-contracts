/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AssetRegistry, AssetRegistryInterface } from "../AssetRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tubID",
        type: "uint256",
      },
    ],
    name: "AssetActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tubeID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "AssetAddedOnTube",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tubeID",
        type: "uint256",
      },
    ],
    name: "AssetDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tubeID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "AssetRemovedOnTube",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tubeID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "NewOriginalAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorRevoked",
    type: "event",
  },
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
        internalType: "uint256",
        name: "tubID",
        type: "uint256",
      },
    ],
    name: "TubeActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tubeID",
        type: "uint256",
      },
    ],
    name: "TubeDeactivated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
    ],
    name: "activateAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
    ],
    name: "activateTube",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "addAssetOnTube",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "addOriginalAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "assetID",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_srcTubeID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_srcAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dstTubeID",
        type: "uint256",
      },
    ],
    name: "assetOnTube",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tubeID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct AssetRegistry.Asset",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
    ],
    name: "assetOnTubeByID",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tubeID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct AssetRegistry.Asset",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bannedTubeIDs",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
    ],
    name: "deactivateAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
    ],
    name: "deactivateTube",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "grant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numOfAssets",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "operators",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetID",
        type: "uint256",
      },
    ],
    name: "originalAssetByID",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tubeID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct AssetRegistry.Asset",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_assetID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tubeID",
        type: "uint256",
      },
    ],
    name: "removeAssetOnTube",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "revoke",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6113e68061007e6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80639ce139e9116100cd578063f2cf057f11610081578063f7596d9211610066578063f7596d92146102ea578063fd97ae64146102fd578063fe86c1fb1461031057600080fd5b8063f2cf057f146102cf578063f2fde38b146102d757600080fd5b8063cfadf305116100b2578063cfadf30514610259578063e254575d1461027c578063e74339b2146102bc57600080fd5b80639ce139e914610233578063cbc532a01461024657600080fd5b80634b7c88e311610124578063715018a611610109578063715018a6146101fd57806374a8f103146102055780638da5cb5b1461021857600080fd5b80634b7c88e3146101c957806370284d19146101ea57600080fd5b806313e7c9d81461015657806318eca2fa1461018e578063210ba76b146101a357806341fb810a146101b6575b600080fd5b6101796101643660046112ab565b60066020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101a161019c366004611369565b610323565b005b6101a16101b1366004611347565b610567565b6101a16101c4366004611347565b610733565b6101dc6101d73660046112e6565b610882565b604051908152602001610185565b6101a16101f83660046112ab565b6108d8565b6101a161099f565b6101a16102133660046112ab565b610a05565b6000546040516001600160a01b039091168152602001610185565b6101a1610241366004611347565b610ac9565b6101a16102543660046112cd565b610c8f565b6101796102673660046112cd565b60056020526000908152604090205460ff1681565b61028f61028a366004611312565b610d35565b60408051825181526020808401516001600160a01b03169082015291810151151590820152606001610185565b61028f6102ca366004611347565b610d6d565b6001546101dc565b6101a16102e53660046112ab565b610dfa565b6101a16102f83660046112cd565b610ed9565b6101dc61030b3660046112e6565b610f81565b61028f61031e3660046112cd565b61114c565b3360009081526006602052604090205460ff166103775760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b60448201526064015b60405180910390fd5b60008211801561038f57506001600160a01b03811615155b801561039b5750600083115b80156103a957506001548311155b6103f55760405162461bcd60e51b815260206004820152601160248201527f696e76616c696420706172616d65746572000000000000000000000000000000604482015260640161036e565b6103ff8282610882565b1561043c5760405162461bcd60e51b815260206004820152600d60248201526c1a5b9d985b1a5908185cdcd95d609a1b604482015260640161036e565b60008381526003602090815260408083208584529091529020600101546001600160a01b03161561049f5760405162461bcd60e51b815260206004820152600d60248201526c1a5b9d985b1a5908185cdcd95d609a1b604482015260640161036e565b604080516060810182528381526001600160a01b038381166020808401828152600185870181815260008b8152600385528881208b8252855288812097518855925196909101805491511515600160a01b0274ffffffffffffffffffffffffffffffffffffffffff19909216969095169590951794909417909255600482528383208184528252918390208690559151908152839185917fa28586bd222b5d207c7b651bdf0fc8361c71aeca16001913c3b7bcc97742cd3691015b60405180910390a3505050565b3360009081526006602052604090205460ff166105b65760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b604482015260640161036e565b6000821180156105c857506001548211155b6106075760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a5908185cdcd95d081a5960821b604482015260640161036e565b60006001610615818561139e565b81548110610625576106256113c3565b9060005260206000209060020201905081600014806106445750805482145b156106a4576001810154600160a01b900460ff1661069f5760018101805460ff60a01b1916600160a01b179055805460405184907f0790c8d81a0cc3bfed1b6e0f29e489b9c93cffb85cf2164ecc769a794643705690600090a35b505050565b6000838152600360209081526040808320858452909152902060018101546001600160a01b0316158015906106e557506001810154600160a01b900460ff16155b1561072d5760018101805460ff60a01b1916600160a01b179055604051839085907f0790c8d81a0cc3bfed1b6e0f29e489b9c93cffb85cf2164ecc769a794643705690600090a35b50505050565b3360009081526006602052604090205460ff166107825760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b604482015260640161036e565b60008281526003602090815260408083208484529091529020600101546001600160a01b0316806107f55760405162461bcd60e51b815260206004820152600960248201527f6e6f742065786973740000000000000000000000000000000000000000000000604482015260640161036e565b60008281526004602090815260408083206001600160a01b0385168085529083528184208490558684526003835281842086855283528184209384556001909301805474ffffffffffffffffffffffffffffffffffffffffff1916905551918252839185917f39a9692b88c509cbe139bbcb3a7b1255588ea31cccafdc2243300374356dd65c910161055a565b60008281526002602090815260408083206001600160a01b0385168452909152812054806108cf575060008381526004602090815260408083206001600160a01b03861684529091529020545b90505b92915050565b6000546001600160a01b031633146109325760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b6001600160a01b03811660009081526006602052604090205460ff1661099c576001600160a01b038116600081815260066020526040808220805460ff19166001179055517f5b6a420b639feabfb011a07742a6ae14ef72f35d1a330ed65f42216c95bc6c2e9190a25b50565b6000546001600160a01b031633146109f95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b610a036000611227565b565b6000546001600160a01b03163314610a5f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b6001600160a01b03811660009081526006602052604090205460ff161561099c576001600160a01b038116600081815260066020526040808220805460ff19169055517fa5f3b7626fd86ff989f1d22cf3d41d74591ea6eb99241079400b0c332a9a8f119190a250565b3360009081526006602052604090205460ff16610b185760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b604482015260640161036e565b600082118015610b2a57506001548211155b610b695760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a5908185cdcd95d081a5960821b604482015260640161036e565b60006001610b77818561139e565b81548110610b8757610b876113c3565b906000526020600020906002020190508160001480610ba65750805482145b15610c0457600181810154600160a01b900460ff161515141561069f5760018101805460ff60a01b19169055805460405184907f053ae336189eaf79eca893f4996d2ad841aff9db39984159f7c2db2801a248da90600090a3505050565b6000838152600360209081526040808320858452909152902060018101546001600160a01b031615801590610c485750600181810154600160a01b900460ff161515145b1561072d5760018101805460ff60a01b19169055604051839085907f053ae336189eaf79eca893f4996d2ad841aff9db39984159f7c2db2801a248da90600090a350505050565b3360009081526006602052604090205460ff16610cde5760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b604482015260640161036e565b60008181526005602052604090205460ff161561099c57600081815260056020526040808220805460ff191690555182917f8cd1ea4aeba4967f28b1f8ab83f16d14f78da3d2de8ac61fbc8e680ee01cb0db91a250565b6040805160608101825260008082526020820181905291810191909152610d65610d5f8585610882565b83610d6d565b949350505050565b6040805160608101825260008082526020820181905291810182905290610d938461114c565b8051909150831415610da65790506108d2565b50506000918252600360209081526040808420928452918152918190208151606081018352815481526001909101546001600160a01b03811693820193909352600160a01b90920460ff1615159082015290565b6000546001600160a01b03163314610e545760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b6001600160a01b038116610ed05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161036e565b61099c81611227565b3360009081526006602052604090205460ff16610f285760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b604482015260640161036e565b60008181526005602052604090205460ff1661099c57600081815260056020526040808220805460ff191660011790555182917f7568aede893c13f81344bda19f47ebdc185794a3e607e9e7551633f3a2b6018f91a250565b3360009081526006602052604081205460ff16610fd05760405162461bcd60e51b815260206004820152600d60248201526c3737903832b936b4b9b9b4b7b760991b604482015260640161036e565b600083118015610fe857506001600160a01b03821615155b6110345760405162461bcd60e51b815260206004820152601160248201527f696e76616c696420706172616d65746572000000000000000000000000000000604482015260640161036e565b60006110408484610882565b9050806108cf5750604080516060810182528481526001600160a01b0380851660208084018281526001858701818152815480830183556000838152975160029182027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf681019190915593517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7909401805492511515600160a01b0274ffffffffffffffffffffffffffffffffffffffffff1990931694909716939093171790945592548885529281528484208285529052838320829055925190928392909187917f3d0b7a5bb176773db371268acfb0a1beb10c20d0c224e6e9ecfd8d056f3ab77191a49392505050565b604080516060810182526000808252602082018190529181019190915260008211801561117b57506001548211155b6111ba5760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a5908185cdcd95d081a5960821b604482015260640161036e565b60016111c6818461139e565b815481106111d6576111d66113c3565b60009182526020918290206040805160608101825260029390930290910180548352600101546001600160a01b03811693830193909352600160a01b90920460ff1615159181019190915292915050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146112a657600080fd5b919050565b6000602082840312156112bd57600080fd5b6112c68261128f565b9392505050565b6000602082840312156112df57600080fd5b5035919050565b600080604083850312156112f957600080fd5b823591506113096020840161128f565b90509250929050565b60008060006060848603121561132757600080fd5b833592506113376020850161128f565b9150604084013590509250925092565b6000806040838503121561135a57600080fd5b50508035926020909101359150565b60008060006060848603121561137e57600080fd5b83359250602084013591506113956040850161128f565b90509250925092565b6000828210156113be57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fdfea164736f6c6343000807000a";

type AssetRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetRegistry__factory extends ContractFactory {
  constructor(...args: AssetRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetRegistry";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetRegistry> {
    return super.deploy(overrides || {}) as Promise<AssetRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AssetRegistry {
    return super.attach(address) as AssetRegistry;
  }
  connect(signer: Signer): AssetRegistry__factory {
    return super.connect(signer) as AssetRegistry__factory;
  }
  static readonly contractName: "AssetRegistry";
  public readonly contractName: "AssetRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetRegistryInterface {
    return new utils.Interface(_abi) as AssetRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetRegistry {
    return new Contract(address, _abi, signerOrProvider) as AssetRegistry;
  }
}
