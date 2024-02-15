export const abi = [
  {
    type: 'constructor',
    name: '',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'approved',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ApprovalForAll',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'operator',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'bool',
        name: 'approved',
        indexed: false,
        internalType: 'bool',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ContractURIUpdated',
    inputs: [
      {
        type: 'string',
        name: 'prevURI',
        indexed: false,
        internalType: 'string',
      },
      {
        type: 'string',
        name: 'newURI',
        indexed: false,
        internalType: 'string',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NewOffer',
    inputs: [
      {
        type: 'address',
        name: 'from',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        type: 'address',
        name: 'from',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'function',
    name: 'acceptOffer',
    inputs: [
      {
        type: 'uint256',
        name: '_offerId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'approve',
    inputs: [
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'buyRecruitRights',
    inputs: [
      {
        type: 'uint256',
        name: '_offerId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'contractURI',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'deployer',
    inputs: [],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllOffers',
    inputs: [],
    outputs: [
      {
        type: 'tuple[]',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'offerId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'tokenId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'amount',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'offeror',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'issuer',
            internalType: 'address',
          },
          {
            type: 'string',
            name: 'companyId',
            internalType: 'string',
          },
          {
            type: 'bool',
            name: 'isAccepted',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'isRejected',
            internalType: 'bool',
          },
        ],
        internalType: 'struct ReverseCruit.Offer[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllTokens',
    inputs: [],
    outputs: [
      {
        type: 'tuple[]',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'tokenId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'price',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'issuer',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'string',
            name: 'studentId',
            internalType: 'string',
          },
          {
            type: 'bool',
            name: 'isValid',
            internalType: 'bool',
          },
        ],
        internalType: 'struct ReverseCruit.RecruitRight[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllTokensCount',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getApproved',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getOffersByTokenId',
    inputs: [
      {
        type: 'uint256',
        name: '_tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple[]',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'offerId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'tokenId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'amount',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'offeror',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'issuer',
            internalType: 'address',
          },
          {
            type: 'string',
            name: 'companyId',
            internalType: 'string',
          },
          {
            type: 'bool',
            name: 'isAccepted',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'isRejected',
            internalType: 'bool',
          },
        ],
        internalType: 'struct ReverseCruit.Offer[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTokenById',
    inputs: [
      {
        type: 'uint256',
        name: '_tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'tokenId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'price',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'issuer',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'string',
            name: 'studentId',
            internalType: 'string',
          },
          {
            type: 'bool',
            name: 'isValid',
            internalType: 'bool',
          },
        ],
        internalType: 'struct ReverseCruit.RecruitRight',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTokenIdByOwnerAddress',
    inputs: [],
    outputs: [
      {
        type: 'uint256[]',
        name: '',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getValidStudentIds',
    inputs: [],
    outputs: [
      {
        type: 'uint256[]',
        name: '',
        internalType: 'uint256[]',
      },
      {
        type: 'string[]',
        name: '',
        internalType: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getValidTokens',
    inputs: [],
    outputs: [
      {
        type: 'tuple[]',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'tokenId',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'price',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'issuer',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'string',
            name: 'studentId',
            internalType: 'string',
          },
          {
            type: 'bool',
            name: 'isValid',
            internalType: 'bool',
          },
        ],
        internalType: 'struct ReverseCruit.RecruitRight[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getValidTokensCount',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isApprovedForAll',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'issueRecruitRight',
    inputs: [
      {
        type: 'uint256',
        name: '_price',
        internalType: 'uint256',
      },
      {
        type: 'string',
        name: '_studentId',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'makeOffer',
    inputs: [
      {
        type: 'uint256',
        name: '_tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: '_amount',
        internalType: 'uint256',
      },
      {
        type: 'string',
        name: '_companyId',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'ownerOf',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rejectOffer',
    inputs: [
      {
        type: 'uint256',
        name: '_offerId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setApprovalForAll',
    inputs: [
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
      },
      {
        type: 'bool',
        name: 'approved',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setContractURI',
    inputs: [
      {
        type: 'string',
        name: '_uri',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'stopRecruitRights',
    inputs: [
      {
        type: 'uint256',
        name: '_tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        type: 'bytes4',
        name: 'interfaceId',
        internalType: 'bytes4',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'symbol',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tokenByIndex',
    inputs: [
      {
        type: 'uint256',
        name: 'index',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tokenOfOwnerByIndex',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'index',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tokenURI',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'transferFrom',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
]
