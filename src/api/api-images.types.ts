export interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ImageResponse {
  total: number;
  total_pages: number;
  results: ImageData[];
}
