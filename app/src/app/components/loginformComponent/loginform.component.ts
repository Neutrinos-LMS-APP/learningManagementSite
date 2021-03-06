/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{loginservice} from '../../sd-services/loginservice';
import { Router } from '@angular/router';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
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
    selector: 'bh-loginform',
    templateUrl: './loginform.template.html'
})

export class loginformComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    result;
    constructor(private bdms: NDataModelService, public loginserviceobj :loginservice,
        public snackbarService:NSnackbarService,
        public router:Router,
        private registerServiceObj:registerinstructorservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    passwordtype:string='password';
    passwordshow:boolean=false;
    togglePassword()
    {
        if(this.passwordshow){
            this.passwordshow=false;
            this.passwordtype='password';   
        }
        else{
             this.passwordshow=true;
            this.passwordtype='text'; 
        }
       
    }
    async onloginSubmit(value){
        console.log(value);
       this.result=(await this.loginserviceobj.getLoginUser(value.userName)).local.result; // for login implementation
       localStorage.setItem('Token',this.result);
    sessionStorage.username = value.userName;// storing for all courses list
    sessionStorage.userid=this.result._id; // storing for course detail implementation

    localStorage.userDetails = JSON.stringify(this.result);
   
    //sessionStorage.userId 
      // console.log("getting from serve"+this.result);
       localStorage.username=value.userName;
      // console.log(value.password);
      // console.log("comes from localstorage"+sessionStorage.username);
      // console.log(value.userName);
      // console.log(value.password);


      
       if(value.userName=='admin@gmail.com'&& value.password=='admin123')
       {
           this.router.navigate(['/adminDashboard/dashboardcontent']);
       }
       else{
           if(this.result.role=='instructor'&& this.result.password==value.password && this.result.status=='approved'){
                this.router.navigate(['/instructordashboard/instructorDashboardContent']);
           }
           else{
               if(this.result.role=='trainee'&& this.result.password==value.password && this.result.status=='approved')
               {
                    this.router.navigate(['/traineedashboard/traineedashboardcontent']);
               }
               else{
                    this.snackbarService.openSnackBar('Invalid credentials');
                   this.router.navigate(['/home']);
               }
           }
       }

    }
    ngOnInit() {

    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
