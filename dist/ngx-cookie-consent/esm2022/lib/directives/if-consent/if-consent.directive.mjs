import { Directive, Input } from '@angular/core';
import { filter } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/ngx-cookie-manager/ngx-cookie-manager.service";
export class IfConsentDirective {
    cookieManager;
    templateRef;
    vcr;
    cookieName;
    subscription;
    show = false;
    set ngxIfConsent(name) {
        this.cookieName = name;
        this.initSubscription();
    }
    constructor(cookieManager, templateRef, vcr) {
        this.cookieManager = cookieManager;
        this.templateRef = templateRef;
        this.vcr = vcr;
    }
    ngOnInit() {
        this.loadSavedValue();
    }
    ngOnDestroy() {
        this.removeSubscription();
    }
    displayTemplate() {
        this.vcr.clear();
        if (this.show) {
            this.vcr.createEmbeddedView(this.templateRef);
        }
    }
    initSubscription() {
        this.subscription = this.cookieManager.cookieUpdated$.pipe(filter((cookie) => cookie.name === this.cookieName)).subscribe((cookie) => {
            this.show = cookie.state;
            this.displayTemplate();
        });
    }
    removeSubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    loadSavedValue() {
        this.show = this.cookieManager.getCookie(this.cookieName);
        this.displayTemplate();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: IfConsentDirective, deps: [{ token: i1.NgxCookieManagerService }, { token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.3", type: IfConsentDirective, selector: "[ngxIfConsent]", inputs: { ngxIfConsent: "ngxIfConsent" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: IfConsentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxIfConsent]'
                }]
        }], ctorParameters: () => [{ type: i1.NgxCookieManagerService }, { type: i0.TemplateRef }, { type: i0.ViewContainerRef }], propDecorators: { ngxIfConsent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtY29uc2VudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvaWYtY29uc2VudC9pZi1jb25zZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0QsTUFBTSxlQUFlLENBQUM7QUFFbkcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSzlCLE1BQU0sT0FBTyxrQkFBa0I7SUFXZjtJQUNBO0lBQ0E7SUFaSixVQUFVLENBQVU7SUFDcEIsWUFBWSxDQUFNO0lBRWxCLElBQUksR0FBRyxLQUFLLENBQUM7SUFDckIsSUFBYSxZQUFZLENBQUMsSUFBWTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFDWSxhQUFzQyxFQUN0QyxXQUFpQyxFQUNqQyxHQUFxQjtRQUZyQixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQWtCO0lBQzlCLENBQUM7SUFFSixRQUFRO1FBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGVBQWU7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0RCxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUN0RCxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR08sa0JBQWtCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFTyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO3VHQWxEUSxrQkFBa0I7MkZBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjtxSkFNZ0IsWUFBWTtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Q29va2llTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uZ3gtY29va2llLW1hbmFnZXIvbmd4LWNvb2tpZS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hJZkNvbnNlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZkNvbnNlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjb29raWVOYW1lITogc3RyaW5nO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBwcml2YXRlIHNob3cgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZXQgbmd4SWZDb25zZW50KG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvb2tpZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluaXRTdWJzY3JpcHRpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb29raWVNYW5hZ2VyOiBOZ3hDb29raWVNYW5hZ2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dW5rbm93bj4sXG4gICAgICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZFNhdmVkVmFsdWUoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVTdWJzY3JpcHRpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BsYXlUZW1wbGF0ZSgpIHtcbiAgICAgICAgdGhpcy52Y3IuY2xlYXIoKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgICAgICAgdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U3Vic2NyaXB0aW9uKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY29va2llTWFuYWdlci5jb29raWVVcGRhdGVkJC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChjb29raWUpID0+IGNvb2tpZS5uYW1lID09PSB0aGlzLmNvb2tpZU5hbWUpXG4gICAgICAgICkuc3Vic2NyaWJlKChjb29raWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IGNvb2tpZS5zdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRlbXBsYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSByZW1vdmVTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNhdmVkVmFsdWUoKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9IHRoaXMuY29va2llTWFuYWdlci5nZXRDb29raWUodGhpcy5jb29raWVOYW1lKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VGVtcGxhdGUoKTtcbiAgICB9XG59XG4iXX0=