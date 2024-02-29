import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';
import * as i0 from "@angular/core";
export declare class NgxLanguageService {
    private config;
    translationKey: string;
    translations: any;
    constructor(config: NgxCookieConsentConfigService);
    getTranslation(key: string, translationLang?: string): string;
    getTranslationFromObject(obj: any, translationLang?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxLanguageService>;
}
