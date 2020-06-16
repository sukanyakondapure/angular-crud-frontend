import { Component, OnInit } from '@angular/core';
import { TokenParams } from '../../classes/TokenParams';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tokenparam:TokenParams;
  username:string;
  password:string;
  loginForm: FormGroup;
  constructor(private userService: UserService,private formbuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit():void{
   let credential = this.loginForm.value;
   this.userService.login(credential)
   .subscribe(
     data=>
     {
       this.tokenparam=data;
       this.userService.AccessToken=this.tokenparam.access_token;   
       this.userService.UserName= this.tokenparam.user_name;   
       this.router.navigate(['/adduser']);
     }
   );
  }
}
