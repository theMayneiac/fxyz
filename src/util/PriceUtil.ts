import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";
import { ExchangeCoin } from "../constants/exchangeCoins";

// I shouldn't store this in the code, but for the sake of this example, I will
const API_KEY = "Z9SZaOwpmE40KX61mUKWm5hrpGh7WHVkaTvQJpQk";

export const getCoinPrice = async (coin: ExchangeCoin): Promise<number> => {
  const tokenInfo = await getAssetErc20ByChainAndSymbol({
    chainId: coin.chainId,
    symbol: coin.symbol,
    apiKey: API_KEY,
  });
  const price = await getAssetPriceInfo({
    chainId: coin.chainId,
    assetTokenAddress: tokenInfo.address,
    apiKey: API_KEY,
  });
  return price.unitPrice;
};
