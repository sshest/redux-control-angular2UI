import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {StoreModule} from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {metaReducer} from "./common/index";
import { TemplateModalComponent } from './template-modal/template-modal.component';
import { SidebarDynamicDirective } from './sidebar-dynamic.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateModalComponent,
    SidebarDynamicDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({
      /*
      provide application reducer to the store
       */
      reducer: metaReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
