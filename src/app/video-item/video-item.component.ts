import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video:any[];
  @Output() selectedVideo = new EventEmitter<void>();
  onItemSelect(video) {
    this.selectedVideo.emit();
  }

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    //console.log('video-item: ', this.video);
  }

}
