import { SortOrder } from "../../util/SortOrder";

export type MeditationSessionOrderByInput = {
  audioUrl?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
