import { complement, either, isEmpty, isNil } from "ramda";

export const isMissing = either(isNil, isEmpty);
export const isPresent = complement(isMissing);
