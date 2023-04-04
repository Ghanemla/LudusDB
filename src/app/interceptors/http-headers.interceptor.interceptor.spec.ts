import { TestBed } from '@angular/core/testing';

import { HttpHeadersInterceptorInterceptor } from './http-headers.interceptor.interceptor';

describe('HttpHeadersInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHeadersInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHeadersInterceptorInterceptor = TestBed.inject(HttpHeadersInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
