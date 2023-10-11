import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, SelectableUserProperties, DEFAULT_USER } from 'src/user.model';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  
  errorMessage: string | null = null;
  
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
        this.errorMessage = null
      })
      .catch(err => {
        this.errorMessage =`${this.usernameOne} or ${this.usernameTwo} was ${err.error.message}: See ${err.error.documentation_url} for more information.`;
        console.log(err)});
  }

  isAUserDefault() {
    return this.userOneData === DEFAULT_USER || this.userTwoData === DEFAULT_USER; 
  }

  receivePropertySelected(valueEmitted: SelectableUserProperties) {
    this.selectedProperty = valueEmitted;
  }

}
