import { Injectable } from '@angular/core';
import * as languages from './../../languages';
import * as i0 from "@angular/core";
import * as i1 from "../../config/ngx-cookie-consent-config.service";
export class NgxLanguageService {
    config;
    translationKey = 'lang_en';
    translations;
    constructor(config) {
        this.config = config;
        this.translationKey = 'lang_' + this.config.defaultLanguage;
        this.translations = languages;
    }
    getTranslation(key, translationLang) {
        const sanitizedKey = key.replace('-', '_');
        if (translationLang) {
            return this.translations[`lang_${translationLang}`][sanitizedKey] || '';
        }
        return this.translations[this.translationKey][sanitizedKey] || '';
    }
    getTranslationFromObject(obj, translationLang) {
        if (typeof obj === 'string') {
            return obj;
        }
        if (translationLang && obj.hasOwnProperty(translationLang)) {
            return obj[translationLang];
        }
        const fallback = this.translationKey.replace('lang_', '');
        if (obj.hasOwnProperty(fallback)) {
            return obj[fallback];
        }
        return '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxLanguageService, deps: [{ token: i1.NgxCookieConsentConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxLanguageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxLanguageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.NgxCookieConsentConfigService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxhbmd1YWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL25neC1sYW5ndWFnZS9uZ3gtbGFuZ3VhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxTQUFTLE1BQU0sbUJBQW1CLENBQUM7OztBQU0vQyxNQUFNLE9BQU8sa0JBQWtCO0lBSVA7SUFIcEIsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUMzQixZQUFZLENBQU07SUFFbEIsWUFBb0IsTUFBcUM7UUFBckMsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7UUFDckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUdELGNBQWMsQ0FBQyxHQUFXLEVBQUUsZUFBd0I7UUFDaEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFM0MsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxlQUFlLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RSxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUVELHdCQUF3QixDQUFDLEdBQVEsRUFBRSxlQUF3QjtRQUN2RCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVELElBQUksZUFBZSxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztZQUN6RCxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7dUdBbkNRLGtCQUFrQjsyR0FBbEIsa0JBQWtCLGNBRmYsTUFBTTs7MkZBRVQsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxhbmd1YWdlcyBmcm9tICcuLy4uLy4uL2xhbmd1YWdlcyc7XG5pbXBvcnQgeyBOZ3hDb29raWVDb25zZW50Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9uZ3gtY29va2llLWNvbnNlbnQtY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neExhbmd1YWdlU2VydmljZSB7XG4gICAgdHJhbnNsYXRpb25LZXkgPSAnbGFuZ19lbic7XG4gICAgdHJhbnNsYXRpb25zOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmd4Q29va2llQ29uc2VudENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbktleSA9ICdsYW5nXycgKyB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0gbGFuZ3VhZ2VzO1xuICAgIH1cblxuXG4gICAgZ2V0VHJhbnNsYXRpb24oa2V5OiBzdHJpbmcsIHRyYW5zbGF0aW9uTGFuZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNhbml0aXplZEtleSA9IGtleS5yZXBsYWNlKCctJywgJ18nKTtcblxuICAgICAgICBpZiAodHJhbnNsYXRpb25MYW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnNbYGxhbmdfJHt0cmFuc2xhdGlvbkxhbmd9YF1bc2FuaXRpemVkS2V5XSB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLnRyYW5zbGF0aW9uS2V5XVtzYW5pdGl6ZWRLZXldIHx8ICcnO1xuICAgIH1cblxuICAgIGdldFRyYW5zbGF0aW9uRnJvbU9iamVjdChvYmo6IGFueSwgdHJhbnNsYXRpb25MYW5nPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uTGFuZyAmJiBvYmouaGFzT3duUHJvcGVydHkodHJhbnNsYXRpb25MYW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialt0cmFuc2xhdGlvbkxhbmddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFsbGJhY2sgPSB0aGlzLnRyYW5zbGF0aW9uS2V5LnJlcGxhY2UoJ2xhbmdfJywgJycpO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGZhbGxiYWNrKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtmYWxsYmFja107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuIl19