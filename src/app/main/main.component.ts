import { Component, HostListener, Inject, OnInit, OnDestroy } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  public scroll: number = 500;
  public currentScroll: number = 0;
  public currentSlide: String;

  private tick: any;
  private subscription: Subscription;
  private images: String[];

  constructor( @Inject(DOCUMENT) private document: Document) {

    this.images = [
      "assets/images/landscaping-2.jpg",
      "assets/images/1.Learning.jpg",
      "assets/images/Business.jpg",
      "assets/images/cleaning-2.jpg",
      "assets/images/design-1.jpg",
      "assets/images/events.jpg",
      "assets/images/home-improvement.jpg",
      "assets/images/home-improve-2.jpg",
      "assets/images/legal.jpg",
      "assets/images/music-and-dance-lessons-2.jpg",
      "assets/images/pets2.jpg",
      "assets/images/photography.jpg",
      "assets/images/sports-and-fitness-lessons.jpg",
      "assets/images/florist.jpg",
      "assets/images/furniture-maker.jpg",
      "assets/images/gardener.jpg"
    ];
  }

  ngOnInit() {

    let timer = TimerObservable.create(0, 3000);
    this.subscription = timer.subscribe(tick => {
      this.changeSlide(tick);
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.currentScroll = this.document.body.scrollTop;
  }

  backTop() {
    this.document.body.scrollTop = 0;
  }

  showBackTop() {
    if (this.currentScroll > this.scroll) {
      return "visible"
    }
    else {
      return "";
    }
  }

  changeSlide(tick) {
    let slideNumber = (tick % this.images.length);
    this.currentSlide = this.images[slideNumber];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
