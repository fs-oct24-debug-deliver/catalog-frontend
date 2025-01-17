const BASE_URL = '/api';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function getData<T>(url: string): Promise<T> {
  return delay(800).then(() => {
    return fetch(BASE_URL + url).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
  });
}
