// const API_URL = "http://localhost:3000";
const API_URL = process.env["API_END_POINTS"];

import { revalidateTag } from "next/cache";

class API {
  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${API_URL}${path}`, {
      method: "GET",
      next: { tags: ["list-customer"] },
    }).catch(error => {
      throw new Error(error);
    });

    return response.json();
  }

  async post<T>(path: string, payload: object = {}): Promise<T> {
    console.log("path", API_URL);

    const response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
      }),
    }).catch(error => {
      throw new Error(error);
    });
    revalidateTag("list-customer");
    return response.json();
  }
}

export const APIs = new API();
