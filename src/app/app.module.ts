import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './Components/item-form/item-form.component';
import { ItemsComponent } from './Components/items/items.component';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './Components/jobs/jobs.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemsComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
