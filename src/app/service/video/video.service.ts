import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoResponse } from 'src/app/model/video-model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8080/proxy-backend/api/video';


  constructor(private client: HttpClient) {
  }


  getSource(name: string, type: string): Observable<VideoResponse> {


    const params = new HttpParams()
      .set('name', name)
      .set('type', type);


    console.log(params);

    return this.client.get<VideoResponse>(this.apiUrl, {
      params
    });
  }


}
