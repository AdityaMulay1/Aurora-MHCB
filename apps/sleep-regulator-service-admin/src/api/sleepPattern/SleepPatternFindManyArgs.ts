import { SleepPatternWhereInput } from "./SleepPatternWhereInput";
import { SleepPatternOrderByInput } from "./SleepPatternOrderByInput";

export type SleepPatternFindManyArgs = {
  where?: SleepPatternWhereInput;
  orderBy?: Array<SleepPatternOrderByInput>;
  skip?: number;
  take?: number;
};
