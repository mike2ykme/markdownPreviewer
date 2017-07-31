import { Component, OnInit } from '@angular/core';
import {MarkdownParserService} from "../../service/markdown-parser.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  convertedText: string;
  sample:string;
  constructor(private md: MarkdownParserService) { }

  ngOnInit() {
    this.sample ="Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.";
    this.updateOutput(this.sample);
  }

  updateOutput(text: string){
    this.convertedText = this.md.convert(text);
  }
}

// Credit for the sample comes from below because the
// text source is: https://codepen.io/freeCodeCamp/pen/JXrLLE
// It was listed as a sample for the freeCodeCamp challenge
