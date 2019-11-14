/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{courseservice} from '../../sd-services/courseservice';
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
    selector: 'bh-instructordashboradcontent',
    templateUrl: './instructordashboradcontent.template.html'
})

export class instructordashboradcontentComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
  //  columarray=['a','b','c'];
   createdby = localStorage.getItem('username');
  courseCurrentStatus=[];
   defaultCourses=[];
   
    constructor(private bdms: NDataModelService,private courseServiceObj:courseservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
          this.getCourseByStatus('null');
    }
    async getCourseByStatus(status){
        console.log(this.createdby);
        this.defaultCourses = this.convertObjtoArr((await this.courseServiceObj.getCourseByStatus(status)).local.result);
        for(let i=0;i<this.defaultCourses.length;i++){
           if(this.defaultCourses[i].createdby == this.createdby){
               this.courseCurrentStatus.push(this.defaultCourses[i]);    
           }
        }
        
        console.log( this.courseCurrentStatus);
    }
     //converting object of objects into araay of objects
    convertObjtoArr(obj) {
       return Array.from(Object.keys(obj), k => obj[k]);
    }
    

}
