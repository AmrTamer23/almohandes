import { atomWithStorage } from "jotai/utils";

export const langAtom = atomWithStorage<"ar" | "en">("lang", "ar");
