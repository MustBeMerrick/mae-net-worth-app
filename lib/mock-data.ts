export type AccountType =
  | "brokerage"
  | "retirement"
  | "cash"
  | "hsa"
  | "real_estate"
  | "alternative";

export type Account = {
  id: string;
  name: string;
  institution: string;
  subaccountName?: string;
  type: AccountType;
  subtype: string;
  isLiquid: boolean;
  isActive: boolean;
  displayOrder: number;
  color: string;
  plaidAccountId?: string;
};

export type BalanceFetch = {
  id: string;
  accountId: string;
  balance: number;
  availableBalance?: number;
  currency: "USD";
  source: "plaid" | "mock_plaid" | "manual" | "import";
  fetchedAt: string;
};

export type ContributionKind = "contribution" | "withdrawal" | "import_adjustment";

export type Contribution = {
  id: string;
  accountId: string;
  contributionDate: string;
  amount: number;
  createdAt?: string;
  kind?: ContributionKind;
  isFromGrowth?: boolean;
  note?: string;
  source?: string;
};

export type SnapshotKind = "manual" | "plaid_sync" | "year_end" | "import";

export type Snapshot = {
  id: string;
  snapshotDate: string;
  label: string;
  kind: SnapshotKind;
  yearEndForYear?: number;
  investedTotal: number;
  netWorthTotal: number;
  growthTotal: number;
  growthAdjustment?: number;
  notes?: string;
};

export type SnapshotBalance = {
  id: string;
  snapshotId: string;
  accountId: string;
  balance: number;
  invested?: number;
  growth?: number;
  growthPercentBasisPts?: number;
};


export const accounts: Account[] = [
  {
    id: "wealthfront-individual",
    name: "Individual Investment",
    institution: "Wealthfront",
    subaccountName: "Individual Investment",
    type: "brokerage",
    subtype: "taxable",
    isLiquid: true,
    isActive: true,
    displayOrder: 1,
    color: "#7030A0"
  },
  {
    id: "wealthfront-cash",
    name: "High-Yield Cash",
    institution: "Wealthfront",
    subaccountName: "High-Yield Cash",
    type: "cash",
    subtype: "cash management",
    isLiquid: true,
    isActive: true,
    displayOrder: 2,
    color: "#7030A0"
  },
  {
    id: "robinhood-individual",
    name: "Individual",
    institution: "Robinhood",
    subaccountName: "Stocks/ETFs",
    type: "brokerage",
    subtype: "taxable",
    isLiquid: true,
    isActive: true,
    displayOrder: 3,
    color: "#92D050"
  },
  {
    id: "robinhood-crypto",
    name: "Crypto",
    institution: "Robinhood",
    subaccountName: "Crypto",
    type: "alternative",
    subtype: "crypto",
    isLiquid: true,
    isActive: true,
    displayOrder: 4,
    color: "#92D050"
  },
  {
    id: "coinbase-crypto",
    name: "Crypto",
    institution: "Coinbase",
    type: "alternative",
    subtype: "crypto",
    isLiquid: true,
    isActive: true,
    displayOrder: 5,
    color: "#0052FF"
  },
  {
    id: "empower-401k",
    name: "401k",
    institution: "Empower",
    type: "retirement",
    subtype: "401k",
    isLiquid: false,
    isActive: true,
    displayOrder: 6,
    color: "#FFC000"
  },
  {
    id: "paychex-401k",
    name: "Traditional 401k",
    institution: "Paychex Flex",
    subaccountName: "Traditional 401k",
    type: "retirement",
    subtype: "401k",
    isLiquid: false,
    isActive: true,
    displayOrder: 7,
    color: "#4472C4"
  },
  {
    id: "paychex-roth-401k",
    name: "Roth 401k",
    institution: "Paychex Flex",
    subaccountName: "Roth 401k",
    type: "retirement",
    subtype: "roth 401k",
    isLiquid: false,
    isActive: true,
    displayOrder: 8,
    color: "#4472C4"
  },
  {
    id: "ascensus-401k",
    name: "401k",
    institution: "Ascensus",
    type: "retirement",
    subtype: "401k",
    isLiquid: false,
    isActive: true,
    displayOrder: 9,
    color: "#ED7D31"
  }
];

export const balanceFetches: BalanceFetch[] = [];

export const contributions: Contribution[] = [];

export const snapshots: Snapshot[] = [];

export const snapshotBalances: SnapshotBalance[] = [];
