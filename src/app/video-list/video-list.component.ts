import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { VideoItemComponent } from '../video-item/video-item.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() selectedVideo;
  @Input() videos: any[];
  @Output() selectedItem = new EventEmitter<{video}>();
  @Output() videoWasSelected = new EventEmitter<{video}>();


    handleSelected(selectedVideo){
      let videoSelect = selectedVideo;
      this.selectedItem.emit( {video: videoSelect});

    }
  
    


  constructor() { }

  ngOnInit() {
  
  }
  onVideoSelect(video) {
    this.videoWasSelected.emit(video);
  }

  // ngDoCheck() {
  //   console.log('video-list: ', this.videos);
  // }
}
