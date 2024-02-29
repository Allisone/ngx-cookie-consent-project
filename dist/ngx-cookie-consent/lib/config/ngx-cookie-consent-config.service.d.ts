import { CookieItem } from './cookie-item.interface';
import { TranslatableString } from './translatable-string.interface';
import * as i0 from "@angular/core";
export declare class NgxCookieConsentConfigService {
    privacyPolicyUrl?: string | TranslatableString;
    imprintUrl?: string | TranslatableString;
    defaultLanguage?: string;
    availableLanguages?: string[];
    showLanguageSwitcher?: boolean;
    showBadgeOpener?: boolean;
    openerPosition?: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';
    customClass?: string;
    cookiePrefix?: string;
    cookieExpiryDays?: number;
    showCookieDetails?: boolean;
    showFunctionalCookies?: boolean;
    functionalCookies?: CookieItem[];
    showMarketingCookies?: boolean;
    marketingCookies?: CookieItem[];
    showEssentialCookies?: boolean;
    essentialCookies?: CookieItem[];
    showOtherTools?: boolean;
    otherTools?: CookieItem[];
    excludeRoutes?: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCookieConsentConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxCookieConsentConfigService>;
}
