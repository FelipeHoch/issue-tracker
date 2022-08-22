import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Just for practise.
        let test = "Interceptor works!"

        let requestModified = httpRequest.clone({setHeaders: { test }});

        console.log(requestModified);

        return next.handle(requestModified);
    }
}