/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import {NSnackbarService} from 'neutrinos-seed-services';
import { Router } from '@angular/router';

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

    constructor(private bdms: NDataModelService,private registerServObj:registerinstructorservice,private snackbarService:NSnackbarService,private router:Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
        this.dm.instructordetails.status = 'null';
        this.dm.instructordetails.role = 'trainee';
        this.dm.instructordetails.status = 'null';
    }
    //stroing registration data into db,after registration redirecting to login page
    put(traineeInfo){
        this.registerServObj.registerinstructor(traineeInfo);
        this.snackbarService.openSnackBar('Registered successfully');
        this.router.navigate(['/login']);
    }

}
