import { IPhotoSingleData } from '@/types/photo-single-data';
import { IPhoto } from '@/types/photo';
import { ITopic } from '@/types/topic';
import axios, { AxiosResponse } from 'axios';
import { PostsWithPaginationInfo } from '@/types/response';
import { OrderByType } from '@/types/common';

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

  async getPhotos(
    page: number = 1,
    order_by: OrderByType = 'latest'
  ): Promise<AxiosResponse<IPhoto[]>> {
    const response = await axios.get(
      `${this.baseUrl}/photos?client_id=${this.clientId}&page=${page}&order_by=${order_by}`
    );
    return response;
  }

  async getPhotosByTopic(
    topic: string,
    page: number = 1,
    order_by: OrderByType = 'latest'
  ): Promise<AxiosResponse<IPhoto[]>> {
    const response = await axios.get(
      `${this.baseUrl}/topics/${topic}/photos?client_id=${this.clientId}&page=${page}&order_by=${order_by}`
    );
    return response;
  }

  async searchPhoto(
    search: string,
    page: number = 1
  ): Promise<AxiosResponse<PostsWithPaginationInfo<IPhoto>>> {
    const response = await axios.get(
      `${this.baseUrl}/search/photos?client_id=${this.clientId}&page=${page}&query=${search}`
    );
    return response;
  }

  async getPhotoById(id: string): Promise<AxiosResponse<IPhotoSingleData>> {
    const response = await axios.get(
      `${this.baseUrl}/photos/${id}?client_id=${this.clientId}`
    );
    return response;
  }

  async getRandomPhoto(): Promise<AxiosResponse<IPhoto>> {
    const response = await axios.get(
      `${this.baseUrl}/photos/random?client_id=${this.clientId}`
    );
    return response;
  }
}

export default UnsplashService;
