import { Pipe, PipeTransform } from '@angular/core';
import { User, SelectableUserProperties } from 'src/user.model';

@Pipe({
  name: 'winner'
})
export class WinnerPipe implements PipeTransform {

  transform(user1: User, user2: User, property: SelectableUserProperties): string {
    const usernameOne = user1.username;
    const usernameTwo = user2.username;
    console.log(user1['perfect-repos'], user2['perfect-repos'])
    
    if (property === "username") {
      return user1.username.length > user2.username.length 
        ? usernameOne 
        : usernameTwo;
    } 
    if (property === "titles") {
      return user1.titles.length > user2.titles.length 
        ? usernameOne 
        : usernameTwo;
    } 
    if (user1[property] > user2[property]) {
      return usernameOne;
    } else if (user1[property] < user2[property]) {
      return usernameTwo;
    } else {
      return "it's a tie";
    }
  }  
    
  //   switch(property) {
  //     case "username":
  //       return user1.username.length > user2.username.length 
  //         ? usernameOne 
  //         : usernameTwo
  //     case "titles": 
  //       return user1.titles.length > user2.titles.length 
  //       ? usernameOne 
  //       : usernameTwo
  //     case "followers":
  //       return user1.followers > user2.followers 
  //       ? usernameOne 
  //       : usernameTwo
  //     case "following":
  //       return user1.following > user2.following 
  //       ? usernameOne 
  //       : usernameTwo
  //     case "public-repos":
  //       return user1['public-repos'] > user2['public-repos'] 
  //       ? usernameOne 
  //       : usernameTwo
  //     case "perfect-repos":
  //       return user1['perfect-repos'] > user2['perfect-repos'] 
  //       ? usernameOne 
  //       : usernameTwo
  //     case "total-stars":
  //       return user1['total-stars'] > user2['total-stars'] 
  //       ? usernameOne 
  //       : usernameTwo
  //     default:
  //       return "it's a tie"
  //   }
  // }
}
