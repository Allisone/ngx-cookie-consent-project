import { Subject } from 'rxjs';
import { NgxCookieService } from '../ngx-cookie/ngx-cookie.service';
import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';
import * as i0 from "@angular/core";
export declare class NgxCookieManagerService {
    private cookieService;
    private cookieConsentConfig;
    cookieUpdated$: Subject<{
        name: string;
        state: boolean;
    }>;
    constructor(cookieService: NgxCookieService, cookieConsentConfig: NgxCookieConsentConfigService);
    private getConfig;
    private getPrefixedCookieName;
    getCookie(cookieName: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCookieManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxCookieManagerService>;
}
