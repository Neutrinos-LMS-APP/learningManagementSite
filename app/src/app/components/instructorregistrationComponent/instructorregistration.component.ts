/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import {NSnackbarService} from 'neutrinos-seed-services';
import { Router } from '@angular/router';


@Component({
    selector: 'bh-instructorregistration',
    templateUrl: './instructorregistration.template.html'
})

export class instructorregistrationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    role='instructor';
    statusEmptyResult;
   // firstname;

    constructor(private bdms: NDataModelService,public registerServiceObj:registerinstructorservice,public snackbarService:NSnackbarService,public router:Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
        this.dm.instructordetails.role = 'instructor';
        this.dm.instructordetails.status = 'null';
        //this.getByStatus('null');
    }
    //saving registration data into db,after registration redirecting to login page
    async put(instructorInfo){
        this.registerServiceObj.registerinstructor(instructorInfo);
        this.snackbarService.openSnackBar('Registered successfully');
        this.router.navigate(['/login']);
    }
    // getting data by status need to pass status value
    // async getByStatus(status){
    //    this.statusEmptyResult = (await this.registerServiceObj.getbystatus(status)).local.result;
    //    console.log(this.statusEmptyResult);
    // }
}
