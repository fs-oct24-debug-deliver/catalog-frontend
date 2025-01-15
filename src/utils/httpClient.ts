const BASE_URL = '/api';

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  });
}
