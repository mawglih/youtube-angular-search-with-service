import { Component, Output } from '@angular/core';
import Youtube from './utils/Youtube';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  videos = {};
  @Output() arrayOfVideos: any[];
  @Output() selectedVideo: any[];

  handleSearch(receivedData) {
    let term : string;
    term = Object.values(receivedData).toString();
    //console.log('app: ', term, typeof(term));
    Youtube.search(term)
    .then(videos => {
      //console.log('videos: ', videos, typeof(videos));
      this.videos = videos;
      this.arrayOfVideos = Object.values(videos);
      this.selectedVideo = this.arrayOfVideos[0];
      //console.log("array: ", this.arrayOfVideos);
      //console.log("selected", this.selectedVideo);
    });
  }

  handleSelected(selectedItem) {
    let video = selectedItem;
    this.selectedVideo = video;
  }
}

