import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  fooSrc: Subject<number>;
  x: number = 1;

  constructor(private shared: SharedService) { 
    this.fooSrc = this.shared.fooSource;
  }


  changeFoo() {
    this.shared.changeFoo(this.x++);
  }

}
