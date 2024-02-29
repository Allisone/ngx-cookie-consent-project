import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCookieConsentConfigService } from './config/ngx-cookie-consent-config.service';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';
import { NgxCookieService } from './services/ngx-cookie/ngx-cookie.service';
import { NgxLanguageService } from './services/ngx-language/ngx-language.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxCookieManagerService } from './services/ngx-cookie-manager/ngx-cookie-manager.service';
import { IfConsentDirective } from './directives/if-consent/if-consent.directive';
import * as i0 from "@angular/core";
export class NgxCookieConsentModule {
    static forRoot(config = {}) {
        return {
            ngModule: NgxCookieConsentModule,
            providers: [
                {
                    provide: NgxCookieConsentConfigService,
                    useFactory: () => {
                        const defaultConfig = new NgxCookieConsentConfigService();
                        return Object.assign(defaultConfig, config);
                    }
                },
                NgxCookieConsentService,
                NgxCookieService,
                NgxLanguageService,
                NgxCookieManagerService,
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentModule, declarations: [NgxCookieConsentComponent,
            IfConsentDirective], imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule], exports: [NgxCookieConsentComponent,
            IfConsentDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentModule, imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxCookieConsentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxCookieConsentComponent,
                        IfConsentDirective,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    exports: [
                        NgxCookieConsentComponent,
                        IfConsentDirective,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbmd4LWNvb2tpZS1jb25zZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFrQmxGLE1BQU0sT0FBTyxzQkFBc0I7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUF3QyxFQUFFO1FBQ3JELE9BQU87WUFDSCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxVQUFVLEVBQUUsR0FBRyxFQUFFO3dCQUNiLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQzt3QkFDMUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDaEQsQ0FBQztpQkFDSjtnQkFDRCx1QkFBdUI7Z0JBQ3ZCLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQix1QkFBdUI7YUFDMUI7U0FDSixDQUFDO0lBQ04sQ0FBQzt1R0FsQlEsc0JBQXNCO3dHQUF0QixzQkFBc0IsaUJBZDNCLHlCQUF5QjtZQUN6QixrQkFBa0IsYUFHbEIsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CLGFBR25CLHlCQUF5QjtZQUN6QixrQkFBa0I7d0dBR2Isc0JBQXNCLFlBVjNCLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjs7MkZBT2Qsc0JBQXNCO2tCQWhCbEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YseUJBQXlCO3dCQUN6QixrQkFBa0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDTCx5QkFBeUI7d0JBQ3pCLGtCQUFrQjtxQkFDckI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neENvb2tpZUNvbnNlbnRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvbmd4LWNvb2tpZS1jb25zZW50LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE5neENvb2tpZUNvbnNlbnRDb21wb25lbnQgfSBmcm9tICcuL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4Q29va2llQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25neC1jb29raWUtY29uc2VudC9uZ3gtY29va2llLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9uZ3gtY29va2llL25neC1jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25neC1sYW5ndWFnZS9uZ3gtbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ3hDb29raWVNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbmd4LWNvb2tpZS1tYW5hZ2VyL25neC1jb29raWUtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IElmQ29uc2VudERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9pZi1jb25zZW50L2lmLWNvbnNlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmd4Q29va2llQ29uc2VudENvbXBvbmVudCxcbiAgICAgICAgSWZDb25zZW50RGlyZWN0aXZlLFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5neENvb2tpZUNvbnNlbnRDb21wb25lbnQsXG4gICAgICAgIElmQ29uc2VudERpcmVjdGl2ZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neENvb2tpZUNvbnNlbnRNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTmd4Q29va2llQ29uc2VudENvbmZpZ1NlcnZpY2UgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4Q29va2llQ29uc2VudE1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neENvb2tpZUNvbnNlbnRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE5neENvb2tpZUNvbnNlbnRDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gbmV3IE5neENvb2tpZUNvbnNlbnRDb25maWdTZXJ2aWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBOZ3hDb29raWVDb25zZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBOZ3hDb29raWVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIE5neExhbmd1YWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBOZ3hDb29raWVNYW5hZ2VyU2VydmljZSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=