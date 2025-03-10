// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Metadata } from '@polkadot/metadata';
import type { Bytes, HashMap, Json, Null, Option, Result, StorageKey, Text, U256, U64, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, Codec, IExtrinsic, ITuple, Observable } from '@polkadot/types/types';
import type { ExtrinsicOrHash, ExtrinsicStatus } from '@polkadot/types/interfaces/author';
import type { EpochAuthorship } from '@polkadot/types/interfaces/babe';
import type { BeefySignedCommitment } from '@polkadot/types/interfaces/beefy';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import type { EthereumAddress } from '@polkadot/types/interfaces/claims';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { ContractCallRequest, ContractExecResult, ContractInstantiateResult, InstantiateRequest } from '@polkadot/types/interfaces/contracts';
import type { CreatedBlock } from '@polkadot/types/interfaces/engine';
import type { EthAccount, EthCallRequest, EthFilter, EthFilterChanges, EthLog, EthReceipt, EthRichBlock, EthSubKind, EthSubParams, EthSyncStatus, EthTransaction, EthTransactionRequest, EthWork } from '@polkadot/types/interfaces/eth';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { EncodedFinalityProofs, JustificationNotification, ReportedRoundStates } from '@polkadot/types/interfaces/grandpa';
import type { MmrLeafProof } from '@polkadot/types/interfaces/mmr';
import type { StorageKind } from '@polkadot/types/interfaces/offchain';
import type { FeeDetails, RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type { RpcMethods } from '@polkadot/types/interfaces/rpc';
import type { AccountId, AssetId, BlockNumber, H160, H256, H64, Hash, Header, Index, Justification, KeyValue, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import type { ReadProof, RuntimeVersion, TraceBlockResponse } from '@polkadot/types/interfaces/state';
import type { ApplyExtrinsicResult, ChainProperties, ChainType, DispatchError, Health, NetworkState, NodeRole, PeerInfo, SyncState } from '@polkadot/types/interfaces/system';
import type { AssetInfo, BalanceInfo } from 'sora/api-interfaces/assets';
import type { AssetKind, BridgeNetworkId, OffchainRequest, OutgoingRequestEncoded, RequestStatus, SignatureParams } from 'sora/api-interfaces/ethBridge';
import type { LPSwapOutcomeInfo } from 'sora/api-interfaces/liquidityProxy';
import type { BalancePrecision, DEXId, FilterMode, Fixed, LiquiditySourceType, SwapOutcomeInfo, SwapVariant } from 'sora/api-interfaces/sora';

declare module '@polkadot/rpc-core/types.jsonrpc' {
  export interface RpcInterface {
    assets: {
      /**
       * Get free balance of particular asset for account.
       **/
      freeBalance: AugmentedRpc<(accountId: AccountId | string | Uint8Array, assetId: AssetId | AnyNumber | Uint8Array) => Observable<Option<BalanceInfo>>>;
      /**
       * Get Info for particular asset on chain.
       **/
      getAssetInfo: AugmentedRpc<(assetId: AssetId | AnyNumber | Uint8Array) => Observable<Option<AssetInfo>>>;
      /**
       * List Ids of all assets registered on chain.
       **/
      listAssetIds: AugmentedRpc<() => Observable<Vec<AssetId>>>;
      /**
       * List Infos of all assets registered on chain.
       **/
      listAssetInfos: AugmentedRpc<() => Observable<Vec<AssetInfo>>>;
      /**
       * Get total balance (free + reserved) of particular asset for account.
       **/
      totalBalance: AugmentedRpc<(accountId: AccountId | string | Uint8Array, assetId: AssetId | AnyNumber | Uint8Array) => Observable<Option<BalanceInfo>>>;
      /**
       * Get total supply of particular asset on chain.
       **/
      totalSupply: AugmentedRpc<(assetId: AssetId | AnyNumber | Uint8Array) => Observable<Option<BalanceInfo>>>;
      /**
       * Get usable (free and non-frozen, except for network fees) balance of particular asset for account.
       **/
      usableBalance: AugmentedRpc<(accountId: AccountId | string | Uint8Array, assetId: AssetId | AnyNumber | Uint8Array) => Observable<Option<BalanceInfo>>>;
    };
    author: {
      /**
       * Returns true if the keystore has private keys for the given public key and key type.
       **/
      hasKey: AugmentedRpc<(publicKey: Bytes | string | Uint8Array, keyType: Text | string) => Observable<bool>>;
      /**
       * Returns true if the keystore has private keys for the given session public keys.
       **/
      hasSessionKeys: AugmentedRpc<(sessionKeys: Bytes | string | Uint8Array) => Observable<bool>>;
      /**
       * Insert a key into the keystore.
       **/
      insertKey: AugmentedRpc<(keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array) => Observable<Bytes>>;
      /**
       * Returns all pending extrinsics, potentially grouped by sender
       **/
      pendingExtrinsics: AugmentedRpc<() => Observable<Vec<Extrinsic>>>;
      /**
       * Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
       **/
      removeExtrinsic: AugmentedRpc<(bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash | { Hash: any } | { Extrinsic: any } | string | Uint8Array)[]) => Observable<Vec<Hash>>>;
      /**
       * Generate new session keys and returns the corresponding public keys
       **/
      rotateKeys: AugmentedRpc<() => Observable<Bytes>>;
      /**
       * Submit and subscribe to watch an extrinsic until unsubscribed
       **/
      submitAndWatchExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<ExtrinsicStatus>>;
      /**
       * Submit a fully formatted extrinsic for block inclusion
       **/
      submitExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<Hash>>;
    };
    babe: {
      /**
       * Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore
       **/
      epochAuthorship: AugmentedRpc<() => Observable<HashMap<AuthorityId, EpochAuthorship>>>;
    };
    beefy: {
      /**
       * Returns the block most recently finalized by BEEFY, alongside side its justification.
       **/
      subscribeJustifications: AugmentedRpc<() => Observable<BeefySignedCommitment>>;
    };
    chain: {
      /**
       * Get header and body of a relay chain block
       **/
      getBlock: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<SignedBlock>>;
      /**
       * Get the block hash for a specific block
       **/
      getBlockHash: AugmentedRpc<(blockNumber?: BlockNumber | AnyNumber | Uint8Array) => Observable<BlockHash>>;
      /**
       * Get hash of the last finalized block in the canon chain
       **/
      getFinalizedHead: AugmentedRpc<() => Observable<BlockHash>>;
      /**
       * Retrieves the header for a specific block
       **/
      getHeader: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<Header>>;
      /**
       * Retrieves the newest header via subscription
       **/
      subscribeAllHeads: AugmentedRpc<() => Observable<Header>>;
      /**
       * Retrieves the best finalized header via subscription
       **/
      subscribeFinalizedHeads: AugmentedRpc<() => Observable<Header>>;
      /**
       * Retrieves the best header via subscription
       **/
      subscribeNewHeads: AugmentedRpc<() => Observable<Header>>;
    };
    childstate: {
      /**
       * Returns the keys with prefix from a child storage, leave empty to get all the keys
       **/
      getKeys: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Returns a child storage entry at a specific block state
       **/
      getStorage: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<StorageData>>>;
      /**
       * Returns the hash of a child storage entry at a block state
       **/
      getStorageHash: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<Hash>>>;
      /**
       * Returns the size of a child storage entry at a block state
       **/
      getStorageSize: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<u64>>>;
    };
    contracts: {
      /**
       * Executes a call to a contract
       **/
      call: AugmentedRpc<(callRequest: ContractCallRequest | { origin?: any; dest?: any; value?: any; gasLimit?: any; inputData?: any } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractExecResult>>;
      /**
       * Returns the value under a specified storage key in a contract
       **/
      getStorage: AugmentedRpc<(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Instantiate a new contract
       **/
      instantiate: AugmentedRpc<(request: InstantiateRequest | { origin?: any; endowment?: any; gasLimit?: any; code?: any; data?: any; salt?: any } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractInstantiateResult>>;
      /**
       * Returns the projected time a given contract will be able to sustain paying its rent
       **/
      rentProjection: AugmentedRpc<(address: AccountId | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<BlockNumber>>>;
    };
    dexApi: {
      /**
       * Query capability to exchange particular tokens on DEX.
       **/
      canExchange: AugmentedRpc<(dexId: DEXId | AnyNumber | Uint8Array, liquiditySourceType: LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | number | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array) => Observable<bool>>;
      /**
       * List liquidity source types enabled on chain.
       **/
      listSupportedSources: AugmentedRpc<() => Observable<Vec<LiquiditySourceType>>>;
      /**
       * Get price for a given input or output token amount.
       **/
      quote: AugmentedRpc<(dexId: DEXId | AnyNumber | Uint8Array, liquiditySourceType: LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | number | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array, amount: Text | string, swapVariant: SwapVariant | 'WithDesiredInput' | 'WithDesiredOutput' | number | Uint8Array) => Observable<Option<SwapOutcomeInfo>>>;
    };
    dexManager: {
      /**
       * Enumerate available ids of DEXes
       **/
      listDEXIds: AugmentedRpc<() => Observable<Vec<DEXId>>>;
      /**
       * Test type of Balance
       **/
      testBalance: AugmentedRpc<() => Observable<Fixed>>;
    };
    engine: {
      /**
       * Instructs the manual-seal authorship task to create a new block
       **/
      createBlock: AugmentedRpc<(createEmpty: bool | boolean | Uint8Array, finalize: bool | boolean | Uint8Array, parentHash?: BlockHash | string | Uint8Array) => Observable<CreatedBlock>>;
      /**
       * Instructs the manual-seal authorship task to finalize a block
       **/
      finalizeBlock: AugmentedRpc<(hash: BlockHash | string | Uint8Array, justification?: Justification) => Observable<bool>>;
    };
    eth: {
      /**
       * Returns accounts list.
       **/
      accounts: AugmentedRpc<() => Observable<Vec<H160>>>;
      /**
       * Returns balance of the given account.
       **/
      blockNumber: AugmentedRpc<() => Observable<U256>>;
      /**
       * Call contract, returning the output data.
       **/
      call: AugmentedRpc<(request: EthCallRequest | { from?: any; to?: any; gasPrice?: any; gas?: any; value?: any; data?: any; nonce?: any } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
      /**
       * Returns the chain ID used for transaction signing at the current best block. None is returned if not available.
       **/
      chainId: AugmentedRpc<() => Observable<U64>>;
      /**
       * Returns block author.
       **/
      coinbase: AugmentedRpc<() => Observable<H160>>;
      /**
       * Estimate gas needed for execution of given contract.
       **/
      estimateGas: AugmentedRpc<(request: EthCallRequest | { from?: any; to?: any; gasPrice?: any; gas?: any; value?: any; data?: any; nonce?: any } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
      /**
       * Returns current gas price.
       **/
      gasPrice: AugmentedRpc<() => Observable<U256>>;
      /**
       * Returns balance of the given account.
       **/
      getBalance: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
      /**
       * Returns block with given hash.
       **/
      getBlockByHash: AugmentedRpc<(hash: H256 | string | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
      /**
       * Returns block with given number.
       **/
      getBlockByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
      /**
       * Returns the number of transactions in a block with given hash.
       **/
      getBlockTransactionCountByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
      /**
       * Returns the number of transactions in a block with given block number.
       **/
      getBlockTransactionCountByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
      /**
       * Returns the code at given address at given time (block number).
       **/
      getCode: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
      /**
       * Returns filter changes since last poll.
       **/
      getFilterChanges: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<EthFilterChanges>>;
      /**
       * Returns all logs matching given filter (in a range 'from' - 'to').
       **/
      getFilterLogs: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<Vec<EthLog>>>;
      /**
       * Returns logs matching given filter object.
       **/
      getLogs: AugmentedRpc<(filter: EthFilter | { fromBlock?: any; toBlock?: any; blockHash?: any; address?: any; topics?: any } | string | Uint8Array) => Observable<Vec<EthLog>>>;
      /**
       * Returns proof for account and storage.
       **/
      getProof: AugmentedRpc<(address: H160 | string | Uint8Array, storageKeys: Vec<H256> | (H256 | string | Uint8Array)[], number: BlockNumber | AnyNumber | Uint8Array) => Observable<EthAccount>>;
      /**
       * Returns content of the storage at given address.
       **/
      getStorageAt: AugmentedRpc<(address: H160 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<H256>>;
      /**
       * Returns transaction at given block hash and index.
       **/
      getTransactionByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
      /**
       * Returns transaction by given block number and index.
       **/
      getTransactionByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
      /**
       * Get transaction by its hash.
       **/
      getTransactionByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthTransaction>>;
      /**
       * Returns the number of transactions sent from given address at given time (block number).
       **/
      getTransactionCount: AugmentedRpc<(hash: H256 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
      /**
       * Returns transaction receipt by transaction hash.
       **/
      getTransactionReceipt: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthReceipt>>;
      /**
       * Returns an uncles at given block and index.
       **/
      getUncleByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
      /**
       * Returns an uncles at given block and index.
       **/
      getUncleByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
      /**
       * Returns the number of uncles in a block with given hash.
       **/
      getUncleCountByBlockHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
      /**
       * Returns the number of uncles in a block with given block number.
       **/
      getUncleCountByBlockNumber: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
      /**
       * Returns the hash of the current block, the seedHash, and the boundary condition to be met.
       **/
      getWork: AugmentedRpc<() => Observable<EthWork>>;
      /**
       * Returns the number of hashes per second that the node is mining with.
       **/
      hashrate: AugmentedRpc<() => Observable<U256>>;
      /**
       * Returns true if client is actively mining new blocks.
       **/
      mining: AugmentedRpc<() => Observable<bool>>;
      /**
       * Returns id of new block filter.
       **/
      newBlockFilter: AugmentedRpc<() => Observable<U256>>;
      /**
       * Returns id of new filter.
       **/
      newFilter: AugmentedRpc<(filter: EthFilter | { fromBlock?: any; toBlock?: any; blockHash?: any; address?: any; topics?: any } | string | Uint8Array) => Observable<U256>>;
      /**
       * Returns id of new block filter.
       **/
      newPendingTransactionFilter: AugmentedRpc<() => Observable<U256>>;
      /**
       * Returns protocol version encoded as a string (quotes are necessary).
       **/
      protocolVersion: AugmentedRpc<() => Observable<u64>>;
      /**
       * Sends signed transaction, returning its hash.
       **/
      sendRawTransaction: AugmentedRpc<(bytes: Bytes | string | Uint8Array) => Observable<H256>>;
      /**
       * Sends transaction; will block waiting for signer to return the transaction hash
       **/
      sendTransaction: AugmentedRpc<(tx: EthTransactionRequest | { from?: any; to?: any; gasPrice?: any; gas?: any; value?: any; data?: any; nonce?: any } | string | Uint8Array) => Observable<H256>>;
      /**
       * Used for submitting mining hashrate.
       **/
      submitHashrate: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array, hash: H256 | string | Uint8Array) => Observable<bool>>;
      /**
       * Used for submitting a proof-of-work solution.
       **/
      submitWork: AugmentedRpc<(nonce: H64 | string | Uint8Array, headerHash: H256 | string | Uint8Array, mixDigest: H256 | string | Uint8Array) => Observable<bool>>;
      /**
       * Subscribe to Eth subscription.
       **/
      subscribe: AugmentedRpc<(kind: EthSubKind | 'newHeads' | 'logs' | 'newPendingTransactions' | 'syncing' | number | Uint8Array, params?: EthSubParams | { None: any } | { Logs: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Returns an object with data about the sync status or false.
       **/
      syncing: AugmentedRpc<() => Observable<EthSyncStatus>>;
      /**
       * Uninstalls filter.
       **/
      uninstallFilter: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<bool>>;
    };
    ethBridge: {
      /**
       * Get account requests hashes.
       **/
      getAccountRequests: AugmentedRpc<(accountId: AccountId | string | Uint8Array, statusFilter: Option<RequestStatus> | null | object | string | Uint8Array) => Observable<Result<Vec<ITuple<[BridgeNetworkId, H256]>>, DispatchError>>>;
      /**
       * Get approvals of the given requests.
       **/
      getApprovals: AugmentedRpc<(requestHashes: Vec<H256> | (H256 | string | Uint8Array)[], networkId: Option<BridgeNetworkId> | null | object | string | Uint8Array) => Observable<Result<Vec<Vec<SignatureParams>>, DispatchError>>>;
      /**
       * Get approved encoded requests and their approvals.
       **/
      getApprovedRequests: AugmentedRpc<(requestHashes: Vec<H256> | (H256 | string | Uint8Array)[], networkId: Option<BridgeNetworkId> | null | object | string | Uint8Array) => Observable<Result<Vec<ITuple<[OutgoingRequestEncoded, Vec<SignatureParams>]>>, DispatchError>>>;
      /**
       * Get registered assets and tokens.
       **/
      getRegisteredAssets: AugmentedRpc<(networkId: Option<BridgeNetworkId> | null | object | string | Uint8Array) => Observable<Result<Vec<ITuple<[AssetKind, ITuple<[AssetId, BalancePrecision]>, Option<ITuple<[H160, BalancePrecision]>>]>>, DispatchError>>>;
      /**
       * Get registered requests and their statuses.
       **/
      getRequests: AugmentedRpc<(requestHashes: Vec<H256> | (H256 | string | Uint8Array)[], networkId: Option<BridgeNetworkId> | null | object | string | Uint8Array, redirectFinishedLoadRequests: Option<bool> | null | object | string | Uint8Array) => Observable<Result<Vec<ITuple<[OffchainRequest, RequestStatus]>>, DispatchError>>>;
    };
    grandpa: {
      /**
       * Prove finality for the range (begin; end] hash.
       **/
      proveFinality: AugmentedRpc<(begin: BlockHash | string | Uint8Array, end: BlockHash | string | Uint8Array, authoritiesSetId?: u64 | AnyNumber | Uint8Array) => Observable<Option<EncodedFinalityProofs>>>;
      /**
       * Returns the state of the current best round state as well as the ongoing background rounds
       **/
      roundState: AugmentedRpc<() => Observable<ReportedRoundStates>>;
      /**
       * Subscribes to grandpa justifications
       **/
      subscribeJustifications: AugmentedRpc<() => Observable<JustificationNotification>>;
    };
    liquidityProxy: {
      /**
       * Check if given two arbitrary tokens can be exchanged via any liquidity sources
       **/
      isPathAvailable: AugmentedRpc<(dexId: DEXId | AnyNumber | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array) => Observable<bool>>;
      /**
       * Given two arbitrary tokens, list liquidity sources that can be used along the path.
       **/
      listEnabledSourcesForPath: AugmentedRpc<(dexId: DEXId | AnyNumber | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array) => Observable<Vec<LiquiditySourceType>>>;
      /**
       * Get price with indicated Asset amount and direction, filtered by selected_types
       **/
      quote: AugmentedRpc<(dexId: DEXId | AnyNumber | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array, amount: Text | string, swapVariant: SwapVariant | 'WithDesiredInput' | 'WithDesiredOutput' | number | Uint8Array, selectedSourceTypes: Vec<LiquiditySourceType> | (LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | number | Uint8Array)[], filterMode: FilterMode | 'Disabled' | 'ForbidSelected' | 'AllowSelected' | number | Uint8Array) => Observable<Option<LPSwapOutcomeInfo>>>;
    };
    mmr: {
      /**
       * Generate MMR proof for given leaf index.
       **/
      generateProof: AugmentedRpc<(leafIndex: u64 | AnyNumber | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<MmrLeafProof>>;
    };
    net: {
      /**
       * Returns true if client is actively listening for network connections. Otherwise false.
       **/
      listening: AugmentedRpc<() => Observable<bool>>;
      /**
       * Returns number of peers connected to node.
       **/
      peerCount: AugmentedRpc<() => Observable<Text>>;
      /**
       * Returns protocol version.
       **/
      version: AugmentedRpc<() => Observable<Text>>;
    };
    offchain: {
      /**
       * Get offchain local storage under given key and prefix
       **/
      localStorageGet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Set offchain local storage under given key and prefix
       **/
      localStorageSet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => Observable<Null>>;
    };
    payment: {
      /**
       * Query the detailed fee of a given encoded extrinsic
       **/
      queryFeeDetails: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<FeeDetails>>;
      /**
       * Retrieves the fee information for an encoded extrinsic
       **/
      queryInfo: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfo>>;
    };
    pswapDistribution: {
      /**
       * Get amount of PSWAP claimable by user (liquidity provision reward).
       **/
      claimableAmount: AugmentedRpc<(accountId: AccountId | string | Uint8Array) => Observable<BalanceInfo>>;
    };
    rewards: {
      /**
       * Get claimable rewards
       **/
      claimables: AugmentedRpc<(eth_address: EthereumAddress | string | Uint8Array) => Observable<Vec<BalanceInfo>>>;
    };
    rpc: {
      /**
       * Retrieves the list of RPC methods that are exposed by the node
       **/
      methods: AugmentedRpc<() => Observable<RpcMethods>>;
    };
    state: {
      /**
       * Perform a call to a builtin on the chain
       **/
      call: AugmentedRpc<(method: Text | string, data: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Bytes>>;
      /**
       * Retrieves the keys with prefix of a specific child storage
       **/
      getChildKeys: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Retrieves the child storage for a key
       **/
      getChildStorage: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<StorageData>>;
      /**
       * Retrieves the child storage hash
       **/
      getChildStorageHash: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
      /**
       * Retrieves the child storage size
       **/
      getChildStorageSize: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
      /**
       * Retrieves the keys with a certain prefix
       **/
      getKeys: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Returns the keys with prefix with pagination support.
       **/
      getKeysPaged: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
      /**
       * Returns the runtime metadata
       **/
      getMetadata: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<Metadata>>;
      /**
       * Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)
       **/
      getPairs: AugmentedRpc<(prefix: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<KeyValue>>>;
      /**
       * Returns proof of storage entries at a specific block state
       **/
      getReadProof: AugmentedRpc<(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: BlockHash | string | Uint8Array) => Observable<ReadProof>>;
      /**
       * Get the runtime version
       **/
      getRuntimeVersion: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<RuntimeVersion>>;
      /**
       * Retrieves the storage for a key
       **/
      getStorage: AugmentedRpc<<T = Codec>(key: StorageKey | string | Uint8Array | any, block?: Hash | Uint8Array | string) => Observable<T>>;
      /**
       * Retrieves the storage hash
       **/
      getStorageHash: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
      /**
       * Retrieves the storage size
       **/
      getStorageSize: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
      /**
       * Query historical storage entries (by key) starting from a start block
       **/
      queryStorage: AugmentedRpc<<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], fromBlock?: Hash | Uint8Array | string, toBlock?: Hash | Uint8Array | string) => Observable<[Hash, T][]>>;
      /**
       * Query storage entries (by key) starting at block hash given as the second parameter
       **/
      queryStorageAt: AugmentedRpc<<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: Hash | Uint8Array | string) => Observable<T>>;
      /**
       * Retrieves the runtime version via subscription
       **/
      subscribeRuntimeVersion: AugmentedRpc<() => Observable<RuntimeVersion>>;
      /**
       * Subscribes to storage changes for the provided keys
       **/
      subscribeStorage: AugmentedRpc<<T = Codec[]>(keys?: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[]) => Observable<T>>;
      /**
       * Provides a way to trace the re-execution of a single block
       **/
      traceBlock: AugmentedRpc<(block: Hash | string | Uint8Array, targets: Option<Text> | null | object | string | Uint8Array, storageKeys: Option<Text> | null | object | string | Uint8Array) => Observable<TraceBlockResponse>>;
    };
    syncstate: {
      /**
       * Returns the json-serialized chainspec running the node, with a sync state.
       **/
      genSyncSpec: AugmentedRpc<(raw: bool | boolean | Uint8Array) => Observable<Json>>;
    };
    system: {
      /**
       * Retrieves the next accountIndex as available on the node
       **/
      accountNextIndex: AugmentedRpc<(accountId: AccountId | string | Uint8Array) => Observable<Index>>;
      /**
       * Adds the supplied directives to the current log filter
       **/
      addLogFilter: AugmentedRpc<(directives: Text | string) => Observable<Null>>;
      /**
       * Adds a reserved peer
       **/
      addReservedPeer: AugmentedRpc<(peer: Text | string) => Observable<Text>>;
      /**
       * Retrieves the chain
       **/
      chain: AugmentedRpc<() => Observable<Text>>;
      /**
       * Retrieves the chain type
       **/
      chainType: AugmentedRpc<() => Observable<ChainType>>;
      /**
       * Dry run an extrinsic at a given block
       **/
      dryRun: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
      /**
       * Return health status of the node
       **/
      health: AugmentedRpc<() => Observable<Health>>;
      /**
       * The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example
       **/
      localListenAddresses: AugmentedRpc<() => Observable<Vec<Text>>>;
      /**
       * Returns the base58-encoded PeerId of the node
       **/
      localPeerId: AugmentedRpc<() => Observable<Text>>;
      /**
       * Retrieves the node name
       **/
      name: AugmentedRpc<() => Observable<Text>>;
      /**
       * Returns current state of the network
       **/
      networkState: AugmentedRpc<() => Observable<NetworkState>>;
      /**
       * Returns the roles the node is running as
       **/
      nodeRoles: AugmentedRpc<() => Observable<Vec<NodeRole>>>;
      /**
       * Returns the currently connected peers
       **/
      peers: AugmentedRpc<() => Observable<Vec<PeerInfo>>>;
      /**
       * Get a custom set of properties as a JSON object, defined in the chain spec
       **/
      properties: AugmentedRpc<() => Observable<ChainProperties>>;
      /**
       * Remove a reserved peer
       **/
      removeReservedPeer: AugmentedRpc<(peerId: Text | string) => Observable<Text>>;
      /**
       * Returns the list of reserved peers
       **/
      reservedPeers: AugmentedRpc<() => Observable<Vec<Text>>>;
      /**
       * Resets the log filter to Substrate defaults
       **/
      resetLogFilter: AugmentedRpc<() => Observable<Null>>;
      /**
       * Returns the state of the syncing of the node
       **/
      syncState: AugmentedRpc<() => Observable<SyncState>>;
      /**
       * Retrieves the version of the node
       **/
      version: AugmentedRpc<() => Observable<Text>>;
    };
    web3: {
      /**
       * Returns current client version.
       **/
      clientVersion: AugmentedRpc<() => Observable<Text>>;
      /**
       * Returns sha3 of the given data
       **/
      sha3: AugmentedRpc<(data: Bytes | string | Uint8Array) => Observable<H256>>;
    };
  }
}
