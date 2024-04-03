import { unstable_noStore as noStore } from "next/cache";
const API_URL = process.env["API_END_POINTS"];

class API {
  async get<T>(path: string): Promise<T> {
    noStore();
    const response = await fetch(`${API_URL}${path}`, {
      method: "GET",
    }).catch(error => {
      throw new Error(error);
    });

    return response.json();
  }
}

export const APIs = new API();
