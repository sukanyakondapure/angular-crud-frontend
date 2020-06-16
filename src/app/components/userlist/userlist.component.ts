import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Users } from '../../classes/Users';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  userId=null;
  message=null;
  user_name=this.userService.UserName;
  public users = [];
  public users_v = [];
  constructor(private userService: UserService,
    private router: Router,private route: ActivatedRoute) {
    //  console.log(this.users)
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(
        data => this.users = data
      );

       
    this.userService.getUsers_v()
    .subscribe(
      data => this.users_v = data
    );

  }
  
  deleteuser(userId:string){
    this.userService.deleteUser(userId)
  
    .subscribe(()=>{
      
      this.router.navigate([this.route.url])
    });
  }

  
}
