import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../ngx-cookie-manager/ngx-cookie-manager.service";
import * as i2 from "../ngx-cookie/ngx-cookie.service";
import * as i3 from "../../config/ngx-cookie-consent-config.service";
import * as i4 from "../ngx-language/ngx-language.service";
export class NgxCookieConsentService {
    cookieManagerService;
    cookieService;
    cookieConsentConfig;
    languageService;
    activeLang = 'en';
    constructor(cookieManagerService, cookieService, cookieConsentConfig, languageService) {
        this.cookieManagerService = cookieManagerService;
        this.cookieService = cookieService;
        this.cookieConsentConfig = cookieConsentConfig;
        this.languageService = languageService;
        this.activeLang = this.getConfig('defaultLanguage');
    }
    getTranslation(key, translationLang) {
        const lang = translationLang || this.activeLang;
        return this.languageService.getTranslation(key, lang);
    }
    getTranslationFromObject(obj, translationLang) {
        const lang = translationLang || this.activeLang;
        return this.languageService.getTranslationFromObject(obj, lang);
    }
    getConfig(key) {
        return this.cookieConsentConfig[key];
    }
    getPrefixedCookieName(name) {
        return this.getConfig('cookiePrefix') + name;
    }
    getCookieFields() {
        const functionalCookies = this.getCookiesByCategory('functionalCookies');
        const marketingCookies = this.getCookiesByCategory('marketingCookies');
        return { functional: functionalCookies, marketing: marketingCookies };
    }
    setLanguage(lang) {
        this.activeLang = lang;
        this.setConfig('defaultLanguage', lang);
    }
    setConfig(key, value) {
        this.cookieConsentConfig[key] = value;
    }
    setCookieConsentStatus(status) {
        this.cookieService.set(this.getPrefixedCookieName('status'), status, this.getConfig('cookieExpiryDays'));
        this.cookieManagerService.cookieUpdated$.next({
            name: 'status',
            state: status
        });
    }
    setCookieConsentStatusForCookie(name, status) {
        this.cookieManagerService.cookieUpdated$.next({
            name,
            state: status
        });
        if (!status) {
            return this.cookieService.delete(this.getPrefixedCookieName(name));
        }
        this.cookieService.set(this.getPrefixedCookieName(name), status, this.getConfig('cookieExpiryDays'));
    }
    shouldDisplayCookieConsent() {
        return !this.cookieService.get(this.getPrefixedCookieName('status'));
    }
    acceptAllCookies() {
        const cookies = [
            ...this.getConfig('functionalCookies').map((cookie) => cookie.key),
            ...this.getConfig('marketingCookies').map((cookie) => cookie.key),
        ];
        cookies.forEach((cookie) => {
            this.setCookieConsentStatusForCookie(cookie, true);
        });
        this.setCookieConsentStatus(true);
    }
    denyAllCookies() {
        const cookies = [
            ...this.getConfig('functionalCookies').map((cookie) => cookie.key),
            ...this.getConfig('marketingCookies').map((cookie) => cookie.key),
        ];
        cookies.forEach((cookie) => {
            this.setCookieConsentStatusForCookie(cookie, false);
        });
        this.setCookieConsentStatus(true);
    }
    saveSomeCookies(cookies) {
        Object.keys(cookies.functional).forEach((cookie) => {
            this.setCookieConsentStatusForCookie(cookie, cookies.functional[cookie]);
        });
        Object.keys(cookies.marketing).forEach((cookie) => {
            this.setCookieConsentStatusForCookie(cookie, cookies.marketing[cookie]);
        });
        this.setCookieConsentStatus(true);
    }
    getCookiesByCategory(category) {
        return this.getConfig(category).map((cookie) => {
            const cookieKey = cookie.key;
            const cookieState = this.cookieService.get(this.getPrefixedCookieName(cookie.key)) === true;
            return {
                key: cookieKey,
                selected: cookieState
            };
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentService, deps: [{ token: i1.NgxCookieManagerService }, { token: i2.NgxCookieService }, { token: i3.NgxCookieConsentConfigService }, { token: i4.NgxLanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.NgxCookieManagerService }, { type: i2.NgxCookieService }, { type: i3.NgxCookieConsentConfigService }, { type: i4.NgxLanguageService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL25neC1jb29raWUtY29uc2VudC9uZ3gtY29va2llLWNvbnNlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFTM0MsTUFBTSxPQUFPLHVCQUF1QjtJQUlwQjtJQUNBO0lBQ0E7SUFDQTtJQU5aLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFFbEIsWUFDWSxvQkFBNkMsRUFDN0MsYUFBK0IsRUFDL0IsbUJBQWtELEVBQ2xELGVBQW1DO1FBSG5DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBK0I7UUFDbEQsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBRTNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxjQUFjLENBQUMsR0FBVyxFQUFFLGVBQXdCO1FBQ2hELE1BQU0sSUFBSSxHQUFHLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxHQUFRLEVBQUUsZUFBd0I7UUFDdkQsTUFBTSxJQUFJLEdBQUcsZUFBZSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDakIs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QUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzdCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7WUFFNUYsT0FBTztnQkFDSCxHQUFHLEVBQUUsU0FBUztnQkFDZCxRQUFRLEVBQUUsV0FBVzthQUN4QixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO3VHQXZIUSx1QkFBdUI7MkdBQXZCLHVCQUF1QixjQUZwQixNQUFNOzsyRkFFVCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Q29va2llQ29uc2VudENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvbmd4LWNvb2tpZS1jb25zZW50LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE5neENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtY29va2llL25neC1jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtbGFuZ3VhZ2Uvbmd4LWxhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4Q29va2llTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtY29va2llLW1hbmFnZXIvbmd4LWNvb2tpZS1tYW5hZ2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENvb2tpZUNvbnNlbnRTZXJ2aWNlIHtcbiAgICBhY3RpdmVMYW5nID0gJ2VuJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvb2tpZU1hbmFnZXJTZXJ2aWNlOiBOZ3hDb29raWVNYW5hZ2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBOZ3hDb29raWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvb2tpZUNvbnNlbnRDb25maWc6IE5neENvb2tpZUNvbnNlbnRDb25maWdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTmd4TGFuZ3VhZ2VTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGFuZyA9IHRoaXMuZ2V0Q29uZmlnKCdkZWZhdWx0TGFuZ3VhZ2UnKTtcbiAgICB9XG5cbiAgICBnZXRUcmFuc2xhdGlvbihrZXk6IHN0cmluZywgdHJhbnNsYXRpb25MYW5nPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRyYW5zbGF0aW9uTGFuZyB8fCB0aGlzLmFjdGl2ZUxhbmc7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRUcmFuc2xhdGlvbihrZXksIGxhbmcpO1xuICAgIH1cblxuICAgIGdldFRyYW5zbGF0aW9uRnJvbU9iamVjdChvYmo6IGFueSwgdHJhbnNsYXRpb25MYW5nPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRyYW5zbGF0aW9uTGFuZyB8fCB0aGlzLmFjdGl2ZUxhbmc7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRUcmFuc2xhdGlvbkZyb21PYmplY3Qob2JqLCBsYW5nKTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29va2llQ29uc2VudENvbmZpZyBhcyBhbnkpW2tleV07XG4gICAgfVxuXG4gICAgZ2V0UHJlZml4ZWRDb29raWVOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbmZpZygnY29va2llUHJlZml4JykgKyBuYW1lO1xuICAgIH1cblxuICAgIGdldENvb2tpZUZpZWxkcygpOiB7ZnVuY3Rpb25hbDoge2tleTogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbn1bXSwgbWFya2V0aW5nOiB7a2V5OiBzdHJpbmcsIHNlbGVjdGVkOiBib29sZWFufVtdfSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uYWxDb29raWVzID0gdGhpcy5nZXRDb29raWVzQnlDYXRlZ29yeSgnZnVuY3Rpb25hbENvb2tpZXMnKTtcbiAgICAgICAgY29uc3QgbWFya2V0aW5nQ29va2llcyA9IHRoaXMuZ2V0Q29va2llc0J5Q2F0ZWdvcnkoJ21hcmtldGluZ0Nvb2tpZXMnKTtcblxuICAgICAgICByZXR1cm4ge2Z1bmN0aW9uYWw6IGZ1bmN0aW9uYWxDb29raWVzLCBtYXJrZXRpbmc6IG1hcmtldGluZ0Nvb2tpZXN9O1xuICAgIH1cblxuICAgIHNldExhbmd1YWdlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZUxhbmcgPSBsYW5nO1xuICAgICAgICB0aGlzLnNldENvbmZpZygnZGVmYXVsdExhbmd1YWdlJywgbGFuZyk7XG4gICAgfVxuXG4gICAgc2V0Q29uZmlnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICh0aGlzLmNvb2tpZUNvbnNlbnRDb25maWcgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Q29va2llQ29uc2VudFN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCh0aGlzLmdldFByZWZpeGVkQ29va2llTmFtZSgnc3RhdHVzJyksIHN0YXR1cywgdGhpcy5nZXRDb25maWcoJ2Nvb2tpZUV4cGlyeURheXMnKSk7XG4gICAgICAgIHRoaXMuY29va2llTWFuYWdlclNlcnZpY2UuY29va2llVXBkYXRlZCQubmV4dCh7XG4gICAgICAgICAgICBuYW1lOiAnc3RhdHVzJyxcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0Q29va2llQ29uc2VudFN0YXR1c0ZvckNvb2tpZShuYW1lOiBzdHJpbmcsIHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmNvb2tpZU1hbmFnZXJTZXJ2aWNlLmNvb2tpZVVwZGF0ZWQkLm5leHQoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0dXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZGVsZXRlKHRoaXMuZ2V0UHJlZml4ZWRDb29raWVOYW1lKG5hbWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5zZXQodGhpcy5nZXRQcmVmaXhlZENvb2tpZU5hbWUobmFtZSksIHN0YXR1cywgdGhpcy5nZXRDb25maWcoJ2Nvb2tpZUV4cGlyeURheXMnKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheUNvb2tpZUNvbnNlbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5jb29raWVTZXJ2aWNlLmdldCh0aGlzLmdldFByZWZpeGVkQ29va2llTmFtZSgnc3RhdHVzJykpO1xuICAgIH1cblxuICAgIGFjY2VwdEFsbENvb2tpZXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmdldENvbmZpZygnZnVuY3Rpb25hbENvb2tpZXMnKS5tYXAoKGNvb2tpZTogYW55KSA9PiBjb29raWUua2V5KSxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q29uZmlnKCdtYXJrZXRpbmdDb29raWVzJykubWFwKChjb29raWU6IGFueSkgPT4gY29va2llLmtleSksXG4gICAgICAgIF07XG5cbiAgICAgICAgY29va2llcy5mb3JFYWNoKChjb29raWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDb29raWVDb25zZW50U3RhdHVzRm9yQ29va2llKGNvb2tpZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0Q29va2llQ29uc2VudFN0YXR1cyh0cnVlKTtcbiAgICB9XG5cbiAgICBkZW55QWxsQ29va2llcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29va2llcyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q29uZmlnKCdmdW5jdGlvbmFsQ29va2llcycpLm1hcCgoY29va2llOiBhbnkpID0+IGNvb2tpZS5rZXkpLFxuICAgICAgICAgICAgLi4udGhpcy5nZXRDb25maWcoJ21hcmtldGluZ0Nvb2tpZXMnKS5tYXAoKGNvb2tpZTogYW55KSA9PiBjb29raWUua2V5KSxcbiAgICAgICAgXTtcblxuICAgICAgICBjb29raWVzLmZvckVhY2goKGNvb2tpZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENvb2tpZUNvbnNlbnRTdGF0dXNGb3JDb29raWUoY29va2llLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0Q29va2llQ29uc2VudFN0YXR1cyh0cnVlKTtcbiAgICB9XG5cbiAgICBzYXZlU29tZUNvb2tpZXMoY29va2llczogeyBmdW5jdGlvbmFsOiBhbnksIG1hcmtldGluZzogYW55IH0gKTogdm9pZCB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvb2tpZXMuZnVuY3Rpb25hbCkuZm9yRWFjaCgoY29va2llOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29va2llQ29uc2VudFN0YXR1c0ZvckNvb2tpZShjb29raWUsIGNvb2tpZXMuZnVuY3Rpb25hbFtjb29raWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoY29va2llcy5tYXJrZXRpbmcpLmZvckVhY2goKGNvb2tpZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENvb2tpZUNvbnNlbnRTdGF0dXNGb3JDb29raWUoY29va2llLCBjb29raWVzLm1hcmtldGluZ1tjb29raWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRDb29raWVDb25zZW50U3RhdHVzKHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29va2llc0J5Q2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZyk6IHtrZXk6IHN0cmluZywgc2VsZWN0ZWQ6IGJvb2xlYW59W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoY2F0ZWdvcnkpLm1hcCgoY29va2llOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZUtleSA9IGNvb2tpZS5rZXk7XG4gICAgICAgICAgICBjb25zdCBjb29raWVTdGF0ZSA9IHRoaXMuY29va2llU2VydmljZS5nZXQodGhpcy5nZXRQcmVmaXhlZENvb2tpZU5hbWUoY29va2llLmtleSkpID09PSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleTogY29va2llS2V5LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBjb29raWVTdGF0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19