
import { CODE } from "./types";

export const BestCodeAction = (onSuccess, onError) => {
    return {
      type: CODE,
      onSuccess,
      onError,
    };
  };

