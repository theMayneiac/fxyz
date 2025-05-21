import ethLogo from "../assets/ethereum.png";
import wbtcLogo from "../assets/wbtc.png";
import usdcLogo from "../assets/usdc.png";
import usdtLogo from "../assets/usdt.png";

export type CoinSymbol = "wbtc" | "eth" | "usdc" | "usdt";

export interface ExchangeCoin {
  logo: string;
  coinBaseUrl: string;
  chainId: string;
  symbol: string;
}

export const exchangeCoins: Record<CoinSymbol, ExchangeCoin> = {
  wbtc: {
    logo: wbtcLogo,
    coinBaseUrl: "https://www.coinbase.com/price/bitcoin",
    chainId: "1",
    symbol: "WBTC",
  },
  eth: {
    logo: ethLogo,
    coinBaseUrl: "https://www.coinbase.com/price/ethereum",
    chainId: "8453",
    symbol: "ETH",
  },
  usdc: {
    logo: usdcLogo,
    coinBaseUrl: "https://www.coinbase.com/price/usd-coin",
    chainId: "1",
    symbol: "USDC",
  },
  usdt: {
    logo: usdtLogo,
    coinBaseUrl: "https://www.coinbase.com/price/tether",
    chainId: "137",
    symbol: "USDT",
  },
};
