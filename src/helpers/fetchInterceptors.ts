// fetchInterceptors.ts

let requestInterceptors: Array<RequestInterceptor> = [];
let responseInterceptors: Array<ResponseInterceptor> = [];

export type RequestInterceptor = (url: string, options: RequestInit) => [string, RequestInit];
export type ResponseInterceptor = (response: Response) => Response;

export function addRequestInterceptor(interceptor: RequestInterceptor) {
  requestInterceptors.push(interceptor);
}

export function addResponseInterceptor(interceptor: ResponseInterceptor) {
  responseInterceptors.push(interceptor);
}

export function fetchWithInterceptors(url: string, options: RequestInit = {}): Promise<Response> {
  let modifiedUrl = url;
  let modifiedOptions = options;

  for (const interceptor of requestInterceptors) {
    [modifiedUrl, modifiedOptions] = interceptor(modifiedUrl, modifiedOptions);
  }

  return fetch(modifiedUrl, modifiedOptions).then((response) => {
    let modifiedResponse = response;

    for (const interceptor of responseInterceptors) {
      modifiedResponse = interceptor(modifiedResponse);
    }

    return modifiedResponse;
  });
}
