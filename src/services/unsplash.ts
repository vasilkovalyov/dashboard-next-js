import { IPhoto } from '@/types/photo';
import { ITopic } from '@/types/topic';
import axios, { AxiosResponse } from 'axios';

class UnsplashService {
  private baseUrl: string;
  private clientId: string;

  constructor() {
    this.baseUrl = 'https://api.unsplash.com';
    this.clientId = process.env.unsplashApiKey || '';
  }

  async getListTopics(): Promise<AxiosResponse<ITopic[]>> {
    const response = await axios.get(
      `${this.baseUrl}/topics?client_id=${this.clientId}`
    );
    return response;
  }

  async getPhotos(page: number = 1): Promise<AxiosResponse<IPhoto[]>> {
    const response = await axios.get(
      `${this.baseUrl}/photos?client_id=${this.clientId}&page=${page}`
    );
    return response;
  }
}

export default UnsplashService;
