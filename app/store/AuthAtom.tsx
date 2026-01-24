import { atom, Atom } from "jotai";

export const authAtom = atom({
    isAuthenticated: false,
    token: null as string | null,
})