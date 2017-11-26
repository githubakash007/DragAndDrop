import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CurriculumService } from './services/curriculum.service';

import {DndModule} from 'ng2-dnd';
import { DragulaDndComponent } from './dragula-dnd/dragula-dnd.component';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    DragulaDndComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DragulaModule
    //DndModule.forRoot()
  ],
  providers: [CurriculumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
