/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import{FormGroup,FormControl} from '@angular/forms';
import {registerinstructorservice} from '../../sd-services/registerinstructorservice';
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
    selector: 'bh-forgotpassword',
    templateUrl: './forgotpassword.template.html'
})

export class forgotpasswordComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    updatepass:boolean=false;
    enteruseremail:boolean=true;
    conformpassmatch:boolean=true;

    constructor(private bdms: NDataModelService ,
    private serviceobj:registerinstructorservice,
    public snackbarService:NSnackbarService,
    private router:Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    forgotpassword=new FormGroup({
        email:new FormControl()
    });

    resetpassword=new FormGroup({
        password:new FormControl(),
        conformpassword:new FormControl()
    });

    result;
   async emailSubmit(){

      

        console.log(this.forgotpassword.value.email);
         this.result=(await this.serviceobj.getByUserName(this.forgotpassword.value.email)).local.result;
        if(this.result.status!='approved')
        {
             this.snackbarService.openSnackBar('You are not a Valid User');
        }
        else{
            this.updatepass=true;
            this.enteruseremail=false; 

            // this.registerServiceObj.updateByStatus({"_id":id,"status":status});
           
            
        }
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
    passwordtype1:string='password';
    passwordshow1:boolean=false;
    togglePassword1(){
       if(this.passwordshow1){
            this.passwordshow1=false;
            this.passwordtype1='password';   
        }
        else{
             this.passwordshow1=true;
            this.passwordtype1='text'; 
        } 
    }


    resetPassword(){

        console.log(this.result.email);
        console.log(this.resetpassword.value.password);

        if(this.resetpassword.value.password==this.resetpassword.value.conformpassword)
        {
            this.serviceobj.updatepassbyemail({"email":this.result.email,"password":this.resetpassword.value.password});
            this.snackbarService.openSnackBar('Password is been updated');
            this.router.navigate(['/login']);
        }
        else{
            this.conformpassmatch=false;
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
