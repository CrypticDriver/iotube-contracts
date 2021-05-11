// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;

interface IAllowlist {
    function getPoolAccountLimit(address poolAddress) external view returns (uint256);

    function getPoolCap(address poolAddress) external view returns (uint256);

    function verifyAddress(address account, bytes32[] calldata merkleProof) external returns (bool);
}
