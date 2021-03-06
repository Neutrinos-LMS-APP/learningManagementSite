/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Inject } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {dashboardcontentComponent} from '../dashboardcontentComponent/dashboardcontent.component';
import { Router } from '@angular/router';
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
    selector: 'bh-selectedcoursedetaildemo',
    templateUrl: './selectedcoursedetaildemo.template.html'
})

export class selectedcoursedetaildemoComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    coursesandrole=[];
    dataInfo;
    showapproved:boolean=false;
    constructor(private bdms: NDataModelService,public router:Router,private courseServiceObj:courseservice,private dialogRef: MatDialogRef<dashboardcontentComponent>,@Inject(MAT_DIALOG_DATA) data,public snackbarService:NSnackbarService) {
        super();
        this.mm = new ModelMethods(bdms);
         this.dataInfo = data.selecteddInfo;
         console.log(this.dataInfo);
    }

    ngOnInit() {
        if(this.dataInfo.status=="null"){
            this.showapproved=true;
        }
       
    }
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
   }
    async getCourseByStatus(status){
        
        this.coursesandrole = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);
        console.log(this.coursesandrole);
        }

    updateStatus(id,status)
    {
        this.courseServiceObj.updateCourseStatus({"_id":id,"status":status});
        this.dialogRef.close();    
    }
   

   


}
