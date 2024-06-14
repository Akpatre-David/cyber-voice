import request from "../utils/request"

export interface LoginPayload {
username:string
password?:string
}
export const LoginCall = async(payload: LoginPayload) => {
    return (await request.post(`/GetUserAccount?username=${payload.username}`))
}