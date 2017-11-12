import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input() newTerm = '';
  @Output() receivedData = new EventEmitter<{term:string}>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(searchTerm: HTMLInputElement) {
    // console.log('searchTerm ', searchTerm.value);
    // console.log('searchbar: ',this.newTerm)
    this.receivedData.emit({term:searchTerm.value});
  }
  onUpdateTerm(event: Event) {
    this.newTerm = (<HTMLInputElement>event.target).value;
  }
}
