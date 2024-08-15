import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective {

  constructor(private elementRef : ElementRef){
  }

  @HostListener('scroll', ['$event']) scrolled(event: any) {
    console.log('Scrolling');
    // setTimeout(()=> {
    //   scrollIntoView(this.elementRef.nativeElement, {
    //     scrollMode: 'if-needed',
    //     block: 'nearest',
    //     inline: 'nearest',
    //   })
    // },250);
  }

}
