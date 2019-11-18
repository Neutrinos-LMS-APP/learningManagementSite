/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{courseservice} from '../../sd-services/courseservice';
import {NSnackbarService} from 'neutrinos-seed-services';
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
    selector: 'bh-addcourse',
    templateUrl: './addcourse.template.html'
})

export class addcourseComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    constructor(private bdms: NDataModelService,private courseService: courseservice,public snackbarService:NSnackbarService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    duration = [
   {value: '1 week', viewValue: '1 week'},
   {value: '2 weeks', viewValue: '2 weeks'},
   {value: '3 weeks', viewValue: '3 weeks'},
   {value: '4 weeks', viewValue: '4 weeks'},
   {value: '5 weeks', viewValue: '5 weeks'},
   {value: '6 weeks', viewValue: '6 weeks'},
 ];
    ngOnInit() {
        this.dm.addcourse.createdby = localStorage.username;// localstorage (Username)
        this.dm.addcourse.status = 'null';
    }
    addCourse(courseInfo){
       
        this.courseService.addcourse(courseInfo);
        this.snackbarService.openSnackBar('Course Added Successfully');


    }
    
}
