import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { async, Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number | any;
  counter$: Observable<number>;
  counterSubscription: Subscription | any;
  constructor( private store: Store<AppState>) {   }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

}
