import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MarkdownParserService} from './service/markdown-parser.service';
import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MarkdownParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
