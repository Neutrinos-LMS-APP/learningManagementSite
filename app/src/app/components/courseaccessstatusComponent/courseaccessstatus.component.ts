/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Inject } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{courseservice} from '../../sd-services/courseservice';
import {NSnackbarService} from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {dashboardcontentComponent} from '../dashboardcontentComponent/dashboardcontent.component';


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
    selector: 'bh-courseaccessstatus',
    templateUrl: './courseaccessstatus.template.html'
})

export class courseaccessstatusComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    dataInfo;
    buttontext;
    accessvalue;

    constructor(private bdms: NDataModelService,
                public router:Router,
                 private courseServiceObj:courseservice,
                 private dialogRef: MatDialogRef<dashboardcontentComponent>,
                 @Inject(MAT_DIALOG_DATA) data,
                 public snackbarService:NSnackbarService) 
    {
        super();
        this.dataInfo = data.selectedcourse;
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
         
         if(this.dataInfo.access=='public')
         {
             this.buttontext='private';
             this.accessvalue='private';
         }
         else if(this.dataInfo.access=='private')
         {
             this.buttontext='public';
             this.accessvalue='public';
         }
    }

     updateStatus(id,status)
     {
        this.courseServiceObj.updateCourseStatus({"_id":id,"status":status});
        this.cancle();  
    }
    cancle() {
   this.dialogRef.close();
   this.cancle();
 }

    updateAccess(id){
        console.log(id);
        console.log(this.accessvalue);
        this.courseServiceObj.updateCourseAccess({"_id":id,"access":this.accessvalue});
         this.dialogRef.close();
    }

    

    

}
