import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Users } from '../../classes/Users';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
  hobbies_selected=[];
  datasaved: false;
  userForm: FormGroup;
  token;
  hobby=[
    { "key": '1', "value": 'Swimming' },
    { "key": '2', "value": 'Browsing on internet' },
    { "key": '3', "value": 'Playing chess' },
   
  ];
  

  constructor(private userService: UserService, private formbuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      country_id: ['', [Validators.required]],
      state_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      hobbies:[Validators.required],
      address: ['', [Validators.required]],
      user_modified:this.userService.UserName
      
    })

  }
  
  onSubmit() {
    
    this.datasaved = false;
    let user = this.userForm.value;
    this.createuser(user);
    this.userForm.reset();
    console.log(this.userService.UserName);
  }
  createuser(user: Users) {
   
    user.hobbies =this.hobbies_selected.toString(); 
    this.userService.createUser(user).subscribe(
      user => {
        // this.datasaved = true;

      }
    );
  }
  

  onCheckboxChange(e) {
   let index= this.hobbies_selected.indexOf(e.target.value);
   if(index == -1){
     this.hobbies_selected.push(e.target.value);

   }else{
     this.hobbies_selected.splice(index,1);
   }
   
   
  }
  
}
