import { Component, HostListener, Inject, OnInit, OnDestroy } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }
}
