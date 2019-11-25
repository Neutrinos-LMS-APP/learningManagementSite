/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import{FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';


/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-instructorprofile',
    templateUrl: './instructorprofile.template.html'
})

export class instructorprofileComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    selectedUserDetails;
    profileshow:boolean=true;
    myGroup =this.fb.group({
        role:new FormControl(''),
        firstName:new FormControl('',Validators.minLength(3)),
        lastName:new FormControl('',Validators.minLength(3)),
        date:new FormControl(''),
        email:new FormControl('',Validators.minLength(8)),
        password:new FormControl(''),
        mobile:new FormControl('',Validators.minLength(10)),
        country:new FormControl('',Validators.minLength(4)),
        gender:new FormControl(''),
        skills:new FormControl('')
    });

    constructor(private bdms: NDataModelService,
                public router:Router,
                private fb:FormBuilder,
                public registerServiceobj:registerinstructorservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
          this.selectedUserDetails=JSON.parse(localStorage.userDetails);
        //   console.log("getting all details "+this.selectedUserDetails.role);
            this.myGroup.patchValue({
                skills:this.skills
            })
    }

    updateProfileform(){
        this.profileshow=false;

        this.myGroup.patchValue({
                firstName:this.selectedUserDetails.firstName,
                lastName:this.selectedUserDetails.lastName,
                date:this.selectedUserDetails.date,
                email:this.selectedUserDetails.email,
                password:this.selectedUserDetails.password,
                mobile:this.selectedUserDetails.mobile,
                country:this.selectedUserDetails.country,
                gender:this.selectedUserDetails.gender,
                skills:this.skills,
                role:this.selectedUserDetails.role
            })

    }
   
   
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills=[];

updateProfile(value)
{
    console.log(value);
   
    this.registerServiceobj.updateProfile({"_id":this.selectedUserDetails._id,
                                            "firstName":this.myGroup.value.firstName,
                                            "lastName":this.myGroup.value.lastName,
                                            "date":this.myGroup.value.date,
                                            "email":this.myGroup.value.email,
                                            "password":this.myGroup.value.password,
                                            "mobile":this.myGroup.value.mobile,
                                            "country":this.myGroup.value.country,
                                            "gender":this.myGroup.value.gender,
                                            "skills":this.skills}
                                           
    );
}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our skill
    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

}
