import { BEST_SELLER } from "./types";

export const BestSellerAction = (onSuccess, onError) => {
    return {
      type: BEST_SELLER,
      onSuccess,
      onError,
    };
  };