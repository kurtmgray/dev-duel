import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { User } from 'src/user.model';


@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  userData: User = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username)
      .then(data => this.userData = data)
      .catch(err => console.log(err));
  }



}
