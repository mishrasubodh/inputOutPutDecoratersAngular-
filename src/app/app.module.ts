import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParrentComponent } from './parrent/parrent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ParentDirective ,childdirective} from './directivs/parent.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParrentComponent,
    ChildComponent,
    GrandChildComponent,
    ParentDirective,
    childdirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
