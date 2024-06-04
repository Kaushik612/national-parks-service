import axios from "axios";
import { AlertsResponse, ParkResponse } from "../types/Park";
const baseUrl = "https://developer.nps.gov/api/v1";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-Api-Key": import.meta.env.VITE_NPS_X_API_KEY,
  },
});

export async function getParksByStateCodeAndQuery(
  stateCode: string,
  query: string
) {
  if (query === "") {
    const { data } = await axiosInstance.get<ParkResponse>(
      `/parks?limit=51&stateCode=${stateCode}`
    );
    return data;
  } else {
    const { data } = await axiosInstance.get<ParkResponse>(
      `/parks?limit=51&stateCode=${stateCode}&q=${query}`
    );
    return data;
  }
}

export async function getAlertsByParkCode(parkCode: string) {
  const { data } = await axiosInstance.get<AlertsResponse>(
    `/alerts?parkCode=${parkCode}`
  );
  return data;
}

export async function getParkByParkCode(parkCode: string) {
  const { data } = await axiosInstance.get<ParkResponse>(
    `/parks?parkCode=${parkCode}`
  );
  return data;
}
