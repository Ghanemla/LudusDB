import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
import { APIResponse, Game } from "../model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGamesList(ordering: string, search?: string, page: number = 1): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);
  
    if (search) {
      params = params.set('search', search);
    }
  
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games?key=${env.api_key}&ordering=${ordering}${search ? `&search=${search}` : ''}&page=${page}`, {
      params: params,
    });
  }
  

  getGameDetails(id: string): Observable<Game> {
    const gameInfoReq = this.http.get(`${env.BASE_URL}/games/${id}?key=${env.api_key}`);
    
    const gameTrailerReq = this.http.get(`${env.BASE_URL}/games/${id}/movies?key=${env.api_key}`);

    const gameScreenshotReq = this.http.get(`${env.BASE_URL}/games/${id}/screenshots?key=${env.api_key}`);


    return forkJoin({ gameInfoReq,gameScreenshotReq,gameTrailerReq  }).pipe(
      map((res: any) => {
        return {
          ...res['gameInfoReq'],
          screenshots: res['gameScreenshotReq']?.results,
          trailers: res['gameTrailerReq']?.results,
        };
      })
      
    );
  }

}
