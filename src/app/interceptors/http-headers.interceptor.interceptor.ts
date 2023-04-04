import { Injectable } from '@angular/core';
import {  HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpHeadersInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      // setHeaders: {
      //   'X-RapidAPI-Key': '090f06addemsh44375168169702bp1615ccjsn4f818535fa7f',
      //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      // },
      // setParams: {
      //   key: 'd429fdf9d6c74fd6a4b6d3fa3f907cac',
      // }
    })
    return next.handle(req);
  }
}
