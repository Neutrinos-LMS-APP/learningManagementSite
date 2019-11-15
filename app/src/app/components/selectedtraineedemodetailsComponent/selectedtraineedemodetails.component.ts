/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Inject} from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {dashboardcontentComponent} from '../dashboardcontentComponent/dashboardcontent.component';
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
    selector: 'bh-selectedtraineedemodetails',
    templateUrl: './selectedtraineedemodetails.template.html'
})

export class selectedtraineedemodetailsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    traineeandrole=[];
    dataInfo;
    constructor(private bdms: NDataModelService,public router:Router,private registerServiceObj:registerinstructorservice,private dialogRef: MatDialogRef<dashboardcontentComponent>,@Inject(MAT_DIALOG_DATA) data) {
        super();
        this.mm = new ModelMethods(bdms);
         this.dataInfo = data.selecteddInfo;
    }

    ngOnInit() {
        this.getRoleAndStatus();
    }
    async getRoleAndStatus(){
     this.traineeandrole = this.convertObjtoArr((await this.registerServiceObj.getRoleAndStatus('null','trainee')).local.result);
   }
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
   }
    //updating the status of instructor and trainned
   updateStatus(id,status){
        this.registerServiceObj.updateByStatus({"_id":id,"status":status});
         //this.getRoleAndStatus();
         this.cancle();
          //this.router.navigate(['/adminDashboard/dashboardcontent']);
   }
   cancle() {
   this.dialogRef.close();
 }

   

}
