import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxCookieService {
    private document;
    private platformId;
    private readonly documentIsAccessible;
    constructor(document: any, platformId: InjectionToken<Object>);
    /**
       * @param name Cookie name
       */
    check(name: string): boolean;
    /**
     * @param name Cookie name
     */
    get(name: string): string | boolean | undefined;
    set(name: string, value: string | boolean, expiringDays?: number, path?: string): void;
    delete(name: string, path?: string): void;
    /**
     * @param name Cookie name
     */
    private getCookieRegExp;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCookieService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxCookieService>;
}
