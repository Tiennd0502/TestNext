const API_URL = process.env.NEXT_PUBLIC_API_END_POINTS;
// const API_URL = "http://localhost:3000";

import { revalidateTag } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

class API {
  async get<T>(path: string): Promise<T> {
    noStore();
		console.log('API_URL', API_URL);
    const response = await fetch(`${API_URL}${path}`, {
      method: "GET",
      next: { tags: ["list-customer"] },
    }).catch(error => {
      throw new Error(error);
    });

    return response.json();
  }

  async post<T>(path: string, payload: object = {}): Promise<T> {
    // noStore();
		console.log('API_URL', API_URL);

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

  async put<T>(path: string, payload: object = {}): Promise<T> {
    noStore();

    const response = await fetch(`${API_URL}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    }).catch(error => {
      throw new Error(error);
    });

    revalidateTag("list-customer");
    return response.json();
  }

  async delete<T>(path: string): Promise<T> {
    noStore();

    const response = await fetch(`${API_URL}${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(error => {
      throw new Error(error);
    });

    revalidateTag("list-customer");
    return response.json();
  }
}

export const APIs = new API();
