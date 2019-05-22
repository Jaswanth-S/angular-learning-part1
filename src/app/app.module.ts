import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ReferenceVariableComponent } from './reference-variable/reference-variable.component';

import { from } from 'rxjs';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';

import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventBindingComponent,
    ReferenceVariableComponent,
    DirectivesComponent,
    ComponentInteractionComponent,
    PipesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
