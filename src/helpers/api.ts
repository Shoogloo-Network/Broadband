
// api.ts

export async function fetchAPI(url: string, options: RequestInit = {}): Promise<Response> {
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  