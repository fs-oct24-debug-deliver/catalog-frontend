const BASE_URL = 'https://fs-oct24-debug-deliver.netlify.app/api';

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url, { mode: 'no-cors' }).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  });
}
