import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { User, DEFAULT_USER } from 'src/user.model';


@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  userData: User = DEFAULT_USER;
  errorMessage: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username)
      .then(data => {
        this.userData = data
        this.errorMessage = null
      })
      .catch(err => {
        this.errorMessage = `${this.username} was ${err.error.message}: See ${err.error.documentation_url} for more information.`
        console.log(this.errorMessage);
      })
  }
}
