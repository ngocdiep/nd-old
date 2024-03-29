import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input()
  _width: number;
  @ViewChild('searchInput') inputEl: ElementRef;
  @ViewChild('clear') clearEl: ElementRef;

  constructor() { }

  ngOnInit() {
    this.clearEl.nativeElement.style.display = 'none';
  }

  onFocusSearchInput() {
    this.clearEl.nativeElement.style.display = 'flex';
  }

  onBlurSearchInput() {
    if (!this.inputEl.nativeElement.value) {
      this.clearEl.nativeElement.style.display = 'none';
    }
  }

  search() {
    if (this.inputEl.nativeElement.value) {
      alert(this.inputEl.nativeElement.value);
    }
  }

  clearSearchInput() {
    this.inputEl.nativeElement.value = '';
    this.inputEl.nativeElement.focus();
  }
}
