import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  term: string = '';
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.term)
    return this.term;
  }
  onUpdateTerm(event: Event) {
    this.term = (<HTMLInputElement>event.target).value;
  }
}
