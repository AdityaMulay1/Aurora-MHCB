import { MeditationSessionWhereInput } from "./MeditationSessionWhereInput";
import { MeditationSessionOrderByInput } from "./MeditationSessionOrderByInput";

export type MeditationSessionFindManyArgs = {
  where?: MeditationSessionWhereInput;
  orderBy?: Array<MeditationSessionOrderByInput>;
  skip?: number;
  take?: number;
};
