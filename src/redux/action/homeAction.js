import { BEST_SELLER } from "./types";
import { FEATURE_BRAND } from "./types";

export const BestSellerAction = (onSuccess, onError) => {
    return {
      type: BEST_SELLER,
      onSuccess,
      onError,
    };
  };
export const FeatureBrandAction = (onSuccess, onError) => {
    return {
      type: FEATURE_BRAND,
      onSuccess,
      onError,
    };
  };

