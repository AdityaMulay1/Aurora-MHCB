import { TherapistProfileWhereInput } from "./TherapistProfileWhereInput";
import { TherapistProfileOrderByInput } from "./TherapistProfileOrderByInput";

export type TherapistProfileFindManyArgs = {
  where?: TherapistProfileWhereInput;
  orderBy?: Array<TherapistProfileOrderByInput>;
  skip?: number;
  take?: number;
};
