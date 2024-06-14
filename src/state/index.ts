
import { atomWithStorage } from 'jotai/utils';

interface LoginData{
  idClient: number,
  clientType: number,
  login: string
}
interface Profile{

}
const defaultUser = localStorage.getItem("voip-user-data");
const defaultProfile = localStorage.getItem("voip-user-profile");
export const userData = atomWithStorage<LoginData | undefined>("voip-user-data", JSON.parse(defaultUser!) ?? undefined);
export const userProfile = atomWithStorage<Profile>("voip-user-profile", JSON.parse(defaultProfile!) ?? undefined);


