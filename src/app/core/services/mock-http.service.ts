import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Response, ResponseOptions, Headers} from '@angular/http';

@Injectable()
export class MockHttpService {

    private mockEmail = 'admin@admin.admin';
    private mockPassword = '1';
    private mockToken = 'qweretwrwerwertrewr';

    constructor() {
    }

    public post(url: string, data: any): Observable<Response> {
        switch (url) {
            case 'login':
                return Observable.create((observer: any) => {
                    let responseOptions = new ResponseOptions();
                    if (data.email === this.mockEmail && data.password === this.mockPassword) {
                        responseOptions.body = `{"token": "${this.mockToken}"}`;
                        responseOptions.status = 200;
                        observer.next(new Response(responseOptions));
                    } else {
                        responseOptions.body = '{"email": "Invalid credentials"}';
                        responseOptions.status = 401;
                        observer.error(new Response(responseOptions));
                    }
                    observer.complete();
                });
        }
    }
}
