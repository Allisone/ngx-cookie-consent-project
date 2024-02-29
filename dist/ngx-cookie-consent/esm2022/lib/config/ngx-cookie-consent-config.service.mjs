import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxCookieConsentConfigService {
    privacyPolicyUrl = '#';
    imprintUrl = '#';
    defaultLanguage = 'en';
    availableLanguages = ['en', 'de', 'it', 'pt'];
    showLanguageSwitcher = true;
    showBadgeOpener = true;
    openerPosition = 'left-bottom';
    customClass = '';
    cookiePrefix = 'cookieconsent_';
    cookieExpiryDays = 365;
    showCookieDetails = false;
    showFunctionalCookies = true;
    functionalCookies = [];
    showMarketingCookies = true;
    marketingCookies = [];
    showEssentialCookies = true;
    essentialCookies = [];
    showOtherTools = true;
    otherTools = [];
    excludeRoutes = [];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb25maWcvbmd4LWNvb2tpZS1jb25zZW50LWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDLE1BQU0sT0FBTyw2QkFBNkI7SUFDdEMsZ0JBQWdCLEdBQWlDLEdBQUcsQ0FBQztJQUNyRCxVQUFVLEdBQWlDLEdBQUcsQ0FBQztJQUMvQyxlQUFlLEdBQVksSUFBSSxDQUFDO0lBQ2hDLGtCQUFrQixHQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsb0JBQW9CLEdBQWEsSUFBSSxDQUFDO0lBQ3RDLGVBQWUsR0FBYSxJQUFJLENBQUM7SUFDakMsY0FBYyxHQUErRCxhQUFhLENBQUM7SUFDM0YsV0FBVyxHQUFZLEVBQUUsQ0FBQztJQUMxQixZQUFZLEdBQVksZ0JBQWdCLENBQUM7SUFDekMsZ0JBQWdCLEdBQVksR0FBRyxDQUFDO0lBQ2hDLGlCQUFpQixHQUFhLEtBQUssQ0FBQztJQUNwQyxxQkFBcUIsR0FBYSxJQUFJLENBQUM7SUFDdkMsaUJBQWlCLEdBQWtCLEVBQUUsQ0FBQztJQUN0QyxvQkFBb0IsR0FBYSxJQUFJLENBQUM7SUFDdEMsZ0JBQWdCLEdBQWtCLEVBQUUsQ0FBQztJQUNyQyxvQkFBb0IsR0FBYSxJQUFJLENBQUM7SUFDdEMsZ0JBQWdCLEdBQWtCLEVBQUUsQ0FBQztJQUNyQyxjQUFjLEdBQWEsSUFBSSxDQUFDO0lBQ2hDLFVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBQy9CLGFBQWEsR0FBYyxFQUFFLENBQUM7dUdBcEJyQiw2QkFBNkI7MkdBQTdCLDZCQUE2QixjQUYxQixNQUFNOzsyRkFFVCw2QkFBNkI7a0JBSHpDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llSXRlbSB9IGZyb20gJy4vY29va2llLWl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZVN0cmluZyB9IGZyb20gJy4vdHJhbnNsYXRhYmxlLXN0cmluZy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENvb2tpZUNvbnNlbnRDb25maWdTZXJ2aWNlIHtcbiAgICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nIHwgVHJhbnNsYXRhYmxlU3RyaW5nID0gJyMnO1xuICAgIGltcHJpbnRVcmw/OiBzdHJpbmcgfCBUcmFuc2xhdGFibGVTdHJpbmcgPSAnIyc7XG4gICAgZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nID0gJ2VuJztcbiAgICBhdmFpbGFibGVMYW5ndWFnZXM/OiBzdHJpbmdbXSA9IFsnZW4nLCAnZGUnLCAnaXQnLCAncHQnXTtcbiAgICBzaG93TGFuZ3VhZ2VTd2l0Y2hlcj86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHNob3dCYWRnZU9wZW5lcj86IGJvb2xlYW4gPSB0cnVlO1xuICAgIG9wZW5lclBvc2l0aW9uPzogJ2xlZnQtdG9wJyB8ICdyaWdodC10b3AnIHwgJ2xlZnQtYm90dG9tJyB8ICdyaWdodC1ib3R0b20nID0gJ2xlZnQtYm90dG9tJztcbiAgICBjdXN0b21DbGFzcz86IHN0cmluZyA9ICcnO1xuICAgIGNvb2tpZVByZWZpeD86IHN0cmluZyA9ICdjb29raWVjb25zZW50Xyc7XG4gICAgY29va2llRXhwaXJ5RGF5cz86IG51bWJlciA9IDM2NTtcbiAgICBzaG93Q29va2llRGV0YWlscz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93RnVuY3Rpb25hbENvb2tpZXM/OiBib29sZWFuID0gdHJ1ZTtcbiAgICBmdW5jdGlvbmFsQ29va2llcz86IENvb2tpZUl0ZW1bXSA9IFtdO1xuICAgIHNob3dNYXJrZXRpbmdDb29raWVzPzogYm9vbGVhbiA9IHRydWU7XG4gICAgbWFya2V0aW5nQ29va2llcz86IENvb2tpZUl0ZW1bXSA9IFtdO1xuICAgIHNob3dFc3NlbnRpYWxDb29raWVzPzogYm9vbGVhbiA9IHRydWU7XG4gICAgZXNzZW50aWFsQ29va2llcz86IENvb2tpZUl0ZW1bXSA9IFtdO1xuICAgIHNob3dPdGhlclRvb2xzPzogYm9vbGVhbiA9IHRydWU7XG4gICAgb3RoZXJUb29scz86IENvb2tpZUl0ZW1bXSA9IFtdO1xuICAgIGV4Y2x1ZGVSb3V0ZXM/OiBzdHJpbmdbXSA9IFtdO1xufVxuIl19