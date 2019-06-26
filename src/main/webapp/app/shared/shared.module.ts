import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppDemoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AppDemoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AppDemoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppDemoSharedModule {
  static forRoot() {
    return {
      ngModule: AppDemoSharedModule
    };
  }
}
