import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxCookieService {
    document;
    platformId;
    documentIsAccessible;
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    /**
       * @param name Cookie name
       */
    check(name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        const regExp = this.getCookieRegExp(name);
        return regExp.test(this.document.cookie);
    }
    /**
     * @param name Cookie name
     */
    get(name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            const regExp = this.getCookieRegExp(name);
            const result = regExp.exec(this.document.cookie);
            if (result === null) {
                return false;
            }
            const returnValue = decodeURIComponent(result[1]);
            if (returnValue.toLowerCase() === 'true') {
                return true;
            }
            if (returnValue.toLowerCase() === 'false') {
                return false;
            }
            return decodeURIComponent(result[1]);
        }
        return undefined;
    }
    set(name, value, expiringDays = 1, path = '/') {
        if (!this.documentIsAccessible) {
            return;
        }
        let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        const dateExpires = new Date(new Date().getTime() + expiringDays * 86400000);
        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
        cookieString += 'path=' + path + ';';
        cookieString += 'SameSite=None; Secure;';
        this.document.cookie = cookieString;
    }
    delete(name, path = '/') {
        if (!this.documentIsAccessible) {
            return;
        }
        let cookieString = encodeURIComponent(name) + '=;';
        cookieString += 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        cookieString += 'path=' + path + ';';
        cookieString += 'SameSite=None; Secure;';
        this.document.cookie = cookieString;
    }
    /**
     * @param name Cookie name
     */
    getCookieRegExp(name) {
        return new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieService, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.InjectionToken, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9uZ3gtY29va2llL25neC1jb29raWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWtCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLaEYsTUFBTSxPQUFPLGdCQUFnQjtJQUtDO0lBQ0c7SUFKZCxvQkFBb0IsQ0FBVTtJQUUvQyxZQUM0QixRQUFhLEVBQ1YsVUFBa0M7UUFEckMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBRS9ELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOztTQUVLO0lBQ0osS0FBSyxDQUFDLElBQVk7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDN0IsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUcsQ0FBQyxJQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVoQyxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELE1BQU0sTUFBTSxHQUF5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkUsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRCxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVELElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUN4QyxPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBRUQsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBcUIsRUFBRSxlQUF1QixDQUFDLEVBQUUsT0FBZSxHQUFHO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM3QixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksWUFBWSxHQUFXLGtCQUFrQixDQUFFLElBQUksQ0FBRSxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBRSxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFaEcsTUFBTSxXQUFXLEdBQVMsSUFBSSxJQUFJLENBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDcEYsWUFBWSxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzdELFlBQVksSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNyQyxZQUFZLElBQUksd0JBQXdCLENBQUM7UUFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLE9BQWUsR0FBRztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDN0IsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLFlBQVksR0FBVyxrQkFBa0IsQ0FBRSxJQUFJLENBQUUsR0FBRyxJQUFJLENBQUM7UUFFN0QsWUFBWSxJQUFJLHdDQUF3QyxDQUFDO1FBQ3pELFlBQVksSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNyQyxZQUFZLElBQUksd0JBQXdCLENBQUM7UUFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNLLGVBQWUsQ0FBQyxJQUFZO1FBQ2hDLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9FLENBQUM7dUdBekZVLGdCQUFnQixrQkFLakIsUUFBUSxhQUNSLFdBQVc7MkdBTlYsZ0JBQWdCLGNBRmYsTUFBTTs7MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBTUksTUFBTTsyQkFBQyxRQUFROzswQkFDZixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q29va2llU2VydmljZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudElzQWNjZXNzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBJbmplY3Rpb25Ub2tlbjxPYmplY3Q+LFxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIENvb2tpZSBuYW1lXG4gICAgICovXG4gICBjaGVjayhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKG5hbWUpO1xuXG4gICAgICByZXR1cm4gcmVnRXhwLnRlc3QodGhpcy5kb2N1bWVudC5jb29raWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuYW1lIENvb2tpZSBuYW1lXG4gICAqL1xuICBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nfGJvb2xlYW58dW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICYmIHRoaXMuY2hlY2sobmFtZSkpIHtcbiAgICAgICAgICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuXG4gICAgICAgICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSB0aGlzLmdldENvb2tpZVJlZ0V4cChuYW1lKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IFJlZ0V4cEV4ZWNBcnJheXxudWxsID0gcmVnRXhwLmV4ZWModGhpcy5kb2N1bWVudC5jb29raWUpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0WzFdKTtcblxuICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJldHVyblZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0WzFdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8Ym9vbGVhbiwgZXhwaXJpbmdEYXlzOiBudW1iZXIgPSAxLCBwYXRoOiBzdHJpbmcgPSAnLycpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvb2tpZVN0cmluZzogc3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KCBuYW1lICkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlICkgKyAnOyc7XG5cbiAgICAgIGNvbnN0IGRhdGVFeHBpcmVzOiBEYXRlID0gbmV3IERhdGUoIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZXhwaXJpbmdEYXlzICogODY0MDAwMDApO1xuICAgICAgY29va2llU3RyaW5nICs9ICdleHBpcmVzPScgKyBkYXRlRXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xuICAgICAgY29va2llU3RyaW5nICs9ICdwYXRoPScgKyBwYXRoICsgJzsnO1xuICAgICAgY29va2llU3RyaW5nICs9ICdTYW1lU2l0ZT1Ob25lOyBTZWN1cmU7JztcblxuICAgICAgdGhpcy5kb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XG4gIH1cblxuICBkZWxldGUobmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcgPSAnLycpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvb2tpZVN0cmluZzogc3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KCBuYW1lICkgKyAnPTsnO1xuXG4gICAgICBjb29raWVTdHJpbmcgKz0gJ2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcbiAgICAgIGNvb2tpZVN0cmluZyArPSAncGF0aD0nICsgcGF0aCArICc7JztcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnU2FtZVNpdGU9Tm9uZTsgU2VjdXJlOyc7XG5cbiAgICAgIHRoaXMuZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuYW1lIENvb2tpZSBuYW1lXG4gICAqL1xuICBwcml2YXRlIGdldENvb2tpZVJlZ0V4cChuYW1lOiBzdHJpbmcpOiBSZWdFeHAge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol4nICsgbmFtZSArICd8O1xcXFxzKicgKyBuYW1lICsgJyk9KC4qPykoPzo7fCQpJywgJ2cnKTtcbiAgfVxufVxuIl19