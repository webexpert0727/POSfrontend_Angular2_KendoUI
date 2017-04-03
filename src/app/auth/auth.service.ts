import {Injectable} from '@angular/core';
import {LoginForm} from './login/login-form';
import {MockHttpService} from '../core/services/mock-http.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {


    readonly storageKey = 'token';

    private token: string;
    public redirectUrl = '/';

    constructor(private http: MockHttpService, private router: Router) {
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
                this.router.navigate([this.redirectUrl]);
            })
            .catch((res: Response) => Observable.throw(this.extractData(res)));
    }

    public isAuthenticated() {
        if (!this.token) {
            this.token = localStorage.getItem(this.storageKey);
        }
        return !!this.token;
    }

    public logout() {
        localStorage.removeItem(this.storageKey);
        this.token = null;
        this.router.navigate(['auth/login']);
    }
}
