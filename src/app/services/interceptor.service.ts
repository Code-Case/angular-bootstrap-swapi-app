// src/app/services/interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
* Using the HttpInterceptor here to catch all errors
*/

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
  constructor() { }

  /**
  * method to handle the HttpErrorResponse in webconsole
  */

  handleError(error: HttpErrorResponse) {
    console.log("Error in Star Wars API Service Connection");
    return throwError(error);
  }

/**
* intercept service method to handle the HttpRequests and catch errors
*/
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      )
  };
}
