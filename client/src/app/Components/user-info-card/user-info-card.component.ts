import { Component, Input, OnInit } from '@angular/core';
import { User, DEFAULT_USER } from 'src/user.model';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  @Input() data: User = DEFAULT_USER;
  keys: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // like useEffect in React, @Input() data is a dependency
  ngOnChanges(): void {
    this.keys = Object.keys(this.data);
  }

  shouldShow(key: string): boolean {
    const exclude = ['avatar_url','bio'];
    return !exclude.includes(key) && !this.isValueEmpty(this.data[key]);
  }

  isValueEmpty(value: any) {
    return value === null || value === '' || (Array.isArray(value) && value.length === 0)
  }

  formatKey(key: string): string {
    return key.replace(/-/g, ' ');
  }

  isUserDefault(): boolean {
    return this.data === DEFAULT_USER;
  }
}
