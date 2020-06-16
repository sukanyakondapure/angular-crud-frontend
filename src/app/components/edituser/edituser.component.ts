import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Users } from '../../classes/Users';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userId;
  hobbies_selected: any = [];
  editForm: FormGroup;
  message = null;
  user_gender = null;
  hobby = [
    { "key": '1', "value": 'Swimming' },
    { "key": '2', "value": 'Browsing on internet' },
    { "key": '3', "value": 'Playing chess' },

  ];
  user_hobbies: any;
  constructor(private userService: UserService, private formbuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.userId;
    
    this.editForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      country_id: ['', [Validators.required]],
      state_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      hobbies: [Validators.required],
      address: ['', [Validators.required]],
      user_modified:this.userService.UserName
      
    })
    this.userService.getUser(this.userId).subscribe(user => {

      this.editForm.controls['name'].setValue(user.name);
      this.editForm.controls['email'].setValue(user.email);
      this.editForm.controls['mobile'].setValue(user.mobile);
      this.editForm.controls['country_id'].setValue(user.country_id);
      this.editForm.controls['state_id'].setValue(user.state_id);
      this.editForm.controls['city_id'].setValue(user.city_id);
      this.hobbies_selected = user.hobbies.split(",");
      this.user_gender = user.gender
      // this.editForm.controls['gender'].setValue(user.gender);
      console.log(this.user_gender);
      // this.editForm.controls['hobbies'].setValue(user.hobbies);
      this.editForm.controls['address'].setValue(user.address);

    });

  }

  updateuser(user: Users) {
    if (this.userId != null) {

      user.id = this.userId
      user.hobbies = this.hobbies_selected.toString()
      // console.log(user.hobbies)
      this.userService.updateUser(user)
        .subscribe(() => {

          this.router.navigate(['/userlist']);
        });

    }

  }


  onCheckboxChange(e) {
    let index = this.hobbies_selected.indexOf(e.target.value);
    if (index == -1) {
      this.hobbies_selected.push(e.target.value);

    } else {
      this.hobbies_selected.splice(index, 1);
    }


  }


}
