import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';
import { NgxCookieService } from '../ngx-cookie/ngx-cookie.service';
import { NgxLanguageService } from '../ngx-language/ngx-language.service';
import { NgxCookieManagerService } from '../ngx-cookie-manager/ngx-cookie-manager.service';
import * as i0 from "@angular/core";
export declare class NgxCookieConsentService {
    private cookieManagerService;
    private cookieService;
    private cookieConsentConfig;
    private languageService;
    activeLang: string;
    constructor(cookieManagerService: NgxCookieManagerService, cookieService: NgxCookieService, cookieConsentConfig: NgxCookieConsentConfigService, languageService: NgxLanguageService);
    getTranslation(key: string, translationLang?: string): string;
    getTranslationFromObject(obj: any, translationLang?: string): string;
    getConfig(key: string): any;
    getPrefixedCookieName(name: string): string;
    getCookieFields(): {
        functional: {
            key: string;
            selected: boolean;
        }[];
        marketing: {
            key: string;
            selected: boolean;
        }[];
    };
    setLanguage(lang: string): void;
    setConfig(key: string, value: string): void;
    setCookieConsentStatus(status: boolean): void;
    setCookieConsentStatusForCookie(name: string, status: boolean): void;
    shouldDisplayCookieConsent(): boolean;
    acceptAllCookies(): void;
    denyAllCookies(): void;
    saveSomeCookies(cookies: {
        functional: any;
        marketing: any;
    }): void;
    private getCookiesByCategory;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCookieConsentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxCookieConsentService>;
}
