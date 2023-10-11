import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectableUserProperties } from 'src/user.model';

interface SelectMenuOption {
  name: string;
  value: SelectableUserProperties;
}

@Component({
  selector: 'app-select-winner-menu',
  templateUrl: './select-winner-menu.component.html',
  styleUrls: ['./select-winner-menu.component.css']
})
export class SelectWinnerMenuComponent implements OnInit {

  properties: SelectMenuOption[] = 
    [
      {name: "Length of Username", value: "username"},
      {name: "# of Titles", value: "titles"},
      {name: "# of Followers", value: "followers"},
      {name: "# of Following", value: "following"},
      {name: "# of Public Repos", value: "public-repos"},
      {name: "# of Perfect Repos", value: "perfect-repos"},
      {name: "# of Total Stars", value: "total-stars"},
    ]

  selectedProperty: SelectableUserProperties = this.properties[0].value;

  @Output() propertySelected: EventEmitter<SelectableUserProperties> = new EventEmitter<SelectableUserProperties>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onPropertyChange(value: string) {
    this.selectedProperty = value as SelectableUserProperties;
    this.propertySelected.emit(this.selectedProperty);
  }
}
