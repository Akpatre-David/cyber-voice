import request from "../utils/request";

export const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "http://helloWorld.com";
export interface LoginPayload {
  username: string;
  password?: string;
}
export interface PaymentDetails {
  TransactionStatus?: any;
  TransactionReference: string;
  Charge: number;
  RedirectURL: string;
  Message?: any;
}

export interface ProcessPaymentPayload {
  money: number;
  idClient: number;
  clientType: number;
  addToInvoice: boolean;
  description: string;
  returnUrl: string;
}
export const LoginCall = async (payload: LoginPayload) => {
  return (await request.post(`/GetUserAccount?username=${payload.username}&password=${payload.password}`))?.data;
};
export const ProcessPaymentCall = async (payload: ProcessPaymentPayload) => {
  return (await request.post(`/ProcessAddMoneyPayment`, payload))?.data;
};
export const QueryPaymentCall = async(reference: string) => {
  return (await request.post(`/status/${reference}`))?.data
}
