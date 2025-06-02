import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('#accordion').accordion({
      collapsible: true,
      heightStyle: "auto",
      activeHeader: "ui-icon-triangle-1-s",
      icons: {
        header: 'ui-icon',
        activeHeader: 'ui-icon ui-state-active'
      }
    });
  }
}
