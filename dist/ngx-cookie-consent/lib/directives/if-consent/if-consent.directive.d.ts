import { OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxCookieManagerService } from '../../services/ngx-cookie-manager/ngx-cookie-manager.service';
import * as i0 from "@angular/core";
export declare class IfConsentDirective implements OnInit, OnDestroy {
    private cookieManager;
    private templateRef;
    private vcr;
    private cookieName;
    private subscription;
    private show;
    set ngxIfConsent(name: string);
    constructor(cookieManager: NgxCookieManagerService, templateRef: TemplateRef<unknown>, vcr: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private displayTemplate;
    private initSubscription;
    private removeSubscription;
    private loadSavedValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<IfConsentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IfConsentDirective, "[ngxIfConsent]", never, { "ngxIfConsent": { "alias": "ngxIfConsent"; "required": false; }; }, {}, never, never, false, never>;
}
