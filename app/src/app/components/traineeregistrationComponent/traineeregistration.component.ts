/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import {NSnackbarService} from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

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
    selector: 'bh-traineeregistration',
    templateUrl: './traineeregistration.template.html'
})

export class traineeregistrationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    statusEmptyResult;

    mytraineeGroup = this.fb.group({
        registercourses: new FormControl(''),
        role:new FormControl(''),
        status:new FormControl(''),
        firstName:new FormControl('',Validators.minLength(3)),
        lastName:new FormControl('',Validators.minLength(3)),
        date:new FormControl(''),
        email:new FormControl('',Validators.minLength(8)),
        password:new FormControl(''),
        mobile:new FormControl('',Validators.minLength(10)),
        country:new FormControl('',Validators.minLength(4)),
        gender:new FormControl('')
    })


    constructor(private bdms: NDataModelService,private registerServiceObj:registerinstructorservice,private snackbarService:NSnackbarService,private router:Router,private fb:FormBuilder) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
         this.mytraineeGroup.patchValue({
           role:'trainee',
           status:'null',
           registercourses:'null'
       })
    }
    //stroing registration data into db,after registration redirecting to login page
    put(traineeInfo){
       this.dm.instructordetails=traineeInfo;
        console.log(this.dm.instructordetails);
        this.registerServiceObj.registerinstructor(this.dm.instructordetails);
        this.router.navigate(['/home']);
    }

}
