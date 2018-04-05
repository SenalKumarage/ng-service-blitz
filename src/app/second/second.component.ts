import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  fooSrc: Subject<number>;
  public fooValueSecond: number = 0;

  constructor(private shared: SharedService) {
    this.fooSrc = this.shared.fooSource;

    this.fooSrc.subscribe(value => {
      this.fooValueSecond = value;
    });
  }

  ngOnInit() {
    
  }

}
