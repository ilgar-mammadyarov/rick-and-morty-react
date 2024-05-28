import { CharacterStatus } from "./character-status.model";

export interface SearchFormValue {
  search: string;
  status: CharacterStatus["value"];
}
