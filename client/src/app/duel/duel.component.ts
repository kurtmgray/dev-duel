import { Component, OnInit } from '@angular/core';
import { User, SelectableUserProperties, DEFAULT_USER } from 'src/user.model';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""

  userOneData: User = DEFAULT_USER
  userTwoData: User = DEFAULT_USER

  selectedProperty: SelectableUserProperties = "username";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.duelUsers(this.usernameOne, this.usernameTwo)
      .then(data => {
        this.userOneData = data[0];
        this.userTwoData = data[1];
      })
      .catch(err => console.log(err));
  }

  isAUserDefault() {
    return this.userOneData === DEFAULT_USER || this.userTwoData === DEFAULT_USER; 
  }

  receivePropertySelected(valueEmitted: SelectableUserProperties) {
    this.selectedProperty = valueEmitted;
  }

}
