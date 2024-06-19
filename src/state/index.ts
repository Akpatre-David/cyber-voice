import { atomWithStorage } from "jotai/utils";

interface LoginData {
  idClient: number;
  clientType: number;
  login: string;
}
interface Profile {
  idClient: number;
  clientType: number;
  tariffId: number;
  tariffName: string;
  currencyId: number;
  resellerId: number;
  currencyName: string;
  famofo: any;
  lastName: string;
  login: string;
  eMail: string;
  isPBXSubAccount: boolean;
  isPBXMainAccount: boolean;
  isCallsShopCabin: boolean;
  accountState: number;
  creditAllowed: number;
  creditBalance: number;
}
interface UserBalance {
  accountState: number;
  creditAllowed: number;
  creditBalance: number;
}
const defaultUser = localStorage.getItem("voip-user-data");
export const userData = atomWithStorage<Profile>("voip-user-data", JSON.parse(defaultUser!) ?? undefined);
const defaultUserBalance = localStorage.getItem("voip-user-balance");
export const userBalance = atomWithStorage<UserBalance>("voip-user-balance", JSON.parse(defaultUserBalance!) ?? undefined);
