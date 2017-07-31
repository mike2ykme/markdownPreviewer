import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownParserService {

  private md: MarkedStatic;

  constructor() {
    this.md = marked;

    this.md.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,

    });
  }

  convert(markdown: string){
    return this.md.parse(markdown);
  }

}
