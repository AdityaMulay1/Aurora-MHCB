import { MeditationSubPageWhereInput } from "./MeditationSubPageWhereInput";
import { MeditationSubPageOrderByInput } from "./MeditationSubPageOrderByInput";

export type MeditationSubPageFindManyArgs = {
  where?: MeditationSubPageWhereInput;
  orderBy?: Array<MeditationSubPageOrderByInput>;
  skip?: number;
  take?: number;
};
