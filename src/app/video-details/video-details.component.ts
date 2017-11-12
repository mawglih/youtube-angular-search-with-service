import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  @Input() selectedVideo;
  @Input() videos: any[];
  url = "https:/www.youtube.com/embed/";
  selectedUrl: SafeResourceUrl;
  iframeSelected;

  ngOnChanges() {
    if(this.selectedVideo) {
      this.selectedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url + this.selectedVideo.id);
    }
    
  }
  

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
 
  }

}
