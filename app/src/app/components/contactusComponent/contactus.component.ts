/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
//import { contactdetails } from '../../models/contactdetails.models'; 
import {FormGroup, FormControl} from '@angular/forms';
import{registerinstructorservice} from '../../sd-services/registerinstructorservice';
// import { contactdetails} from '../../models/contactdetails.model';
import { ReactiveFormsModule } from '@angular/forms';
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
    selector: 'bh-contactus',
    templateUrl: './contactus.template.html'
})

export class contactusComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    contactdetails = new FormGroup({
        fullName : new FormControl(''),
        emailid : new FormControl(''),
        msg :new FormControl('')

    });

    constructor(private bdms: NDataModelService, private contact: registerinstructorservice,public router:Router,public snackbarService:NSnackbarService)
     {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    result;
//    async enquirySubmit(data){
//        console.log("entered into"+data);
//         this.dm.contactdetails = data;
//         this.result=(await this.contact.contactdetails(this.dm.contactdetails)).local.result;
        
//         this.contactdetails.reset();
//         this.router.navigate(['/home']);
        

//     }

   



}
