/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import {NSnackbarService} from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import{FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';


@Component({
    selector: 'bh-instructorregistration',
    templateUrl: './instructorregistration.template.html'
})

export class instructorregistrationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    statusEmptyResult;
    
    myGroup =this.fb.group({
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
    });

    constructor(private bdms: NDataModelService,
                public registerServiceObj:registerinstructorservice,
                public snackbarService:NSnackbarService,
                public router:Router,
                private fb:FormBuilder) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
       this.myGroup.patchValue({
           role:'instructor',
           status:'null'
       })
    }
    put(data){
    this.dm.instructordetails=data;
    console.log(this.dm.instructordetails);
     this.registerServiceObj.registerinstructor(this.dm.instructordetails);
    this.router.navigate(['/home']);
    }

}
