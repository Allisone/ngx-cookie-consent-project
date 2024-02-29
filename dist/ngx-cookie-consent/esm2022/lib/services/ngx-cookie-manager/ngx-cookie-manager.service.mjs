import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../ngx-cookie/ngx-cookie.service";
import * as i2 from "../../config/ngx-cookie-consent-config.service";
export class NgxCookieManagerService {
    cookieService;
    cookieConsentConfig;
    cookieUpdated$ = new Subject();
    constructor(cookieService, cookieConsentConfig) {
        this.cookieService = cookieService;
        this.cookieConsentConfig = cookieConsentConfig;
    }
    getConfig(key) {
        return this.cookieConsentConfig[key];
    }
    getPrefixedCookieName(name) {
        return this.getConfig('cookiePrefix') + name;
    }
    getCookie(cookieName) {
        return this.cookieService.get(this.getPrefixedCookieName(cookieName)) === true;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieManagerService, deps: [{ token: i1.NgxCookieService }, { token: i2.NgxCookieConsentConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieManagerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieManagerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.NgxCookieService }, { type: i2.NgxCookieConsentConfigService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL25neC1jb29raWUtbWFuYWdlci9uZ3gtY29va2llLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFPL0IsTUFBTSxPQUFPLHVCQUF1QjtJQUlwQjtJQUNBO0lBSlosY0FBYyxHQUFHLElBQUksT0FBTyxFQUFrQyxDQUFDO0lBRS9ELFlBQ1ksYUFBK0IsRUFDL0IsbUJBQWtEO1FBRGxELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQStCO0lBQzFELENBQUM7SUFFRyxTQUFTLENBQUMsR0FBVztRQUN6QixPQUFRLElBQUksQ0FBQyxtQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8scUJBQXFCLENBQUMsSUFBWTtRQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsVUFBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDbkYsQ0FBQzt1R0FsQlEsdUJBQXVCOzJHQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTs7MkZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtY29va2llL25neC1jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hDb29raWVDb25zZW50Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9uZ3gtY29va2llLWNvbnNlbnQtY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb29raWVNYW5hZ2VyU2VydmljZSB7XG4gICAgY29va2llVXBkYXRlZCQgPSBuZXcgU3ViamVjdDx7bmFtZTogc3RyaW5nLCBzdGF0ZTogYm9vbGVhbn0+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBOZ3hDb29raWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvb2tpZUNvbnNlbnRDb25maWc6IE5neENvb2tpZUNvbnNlbnRDb25maWdTZXJ2aWNlLFxuICAgICkgeyB9XG5cbiAgICBwcml2YXRlIGdldENvbmZpZyhrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb29raWVDb25zZW50Q29uZmlnIGFzIGFueSlba2V5XTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByZWZpeGVkQ29va2llTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoJ2Nvb2tpZVByZWZpeCcpICsgbmFtZTtcbiAgICB9XG5cbiAgICBnZXRDb29raWUoY29va2llTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KHRoaXMuZ2V0UHJlZml4ZWRDb29raWVOYW1lKGNvb2tpZU5hbWUpKSA9PT0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=