import { ModuleWithProviders } from '@angular/core';
import { NgxCookieConsentConfigService } from './config/ngx-cookie-consent-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-cookie-consent.component";
import * as i2 from "./directives/if-consent/if-consent.directive";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "@angular/forms";
export declare class NgxCookieConsentModule {
    static forRoot(config?: NgxCookieConsentConfigService): ModuleWithProviders<NgxCookieConsentModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCookieConsentModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxCookieConsentModule, [typeof i1.NgxCookieConsentComponent, typeof i2.IfConsentDirective], [typeof i3.CommonModule, typeof i4.RouterModule, typeof i5.FormsModule, typeof i5.ReactiveFormsModule], [typeof i1.NgxCookieConsentComponent, typeof i2.IfConsentDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxCookieConsentModule>;
}
