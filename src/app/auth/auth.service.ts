import {Injectable} from '@angular/core';
import {LoginForm} from './login/login-form';
import {MockHttpService} from '../core/services/mock-http.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {


    readonly storageKey = 'token';

    private token: string;

    constructor(private http: MockHttpService) {
    }

    private extractData(res: Response): any {
        return res.json() || {};
    }

    public login(form: LoginForm) {
        return this.http.post('login', form)
            .map(this.extractData)
            .map((response: any) => {
                this.token = response.token;
                if (form.remember) {
                    localStorage.setItem(this.storageKey, this.token);
                }
                console.log('redirect to dashboard')
            })
            .catch((res: Response) => Observable.throw(this.extractData(res)));
    }

    public isAuthenticated() {
        if (!this.token) {
            this.token = localStorage.getItem(this.storageKey);
        }
        return !!this.token;
    }
}
