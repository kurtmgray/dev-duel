import { Component, OnInit } from '@angular/core';
import { User } from 'src/user.model';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""

  userOneData: User = {}
  userTwoData: User = {}

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

  isAUserEmpty() {
    return Object.keys(this.userOneData).length === 0 
      || Object.keys(this.userTwoData).length === 0;
  }
}
