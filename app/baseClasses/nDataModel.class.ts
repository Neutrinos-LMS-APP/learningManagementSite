<<<<<<< HEAD
import { logindetails } from '../src/app/models/logindetails.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
logindetails: logindetails;
//DECLARE NEW VARIABLE

constructor() {
this.logindetails = new logindetails();
=======
import { instructordetails } from '../src/app/models/instructordetails.model';
import { traineedetails } from '../src/app/models/traineedetails.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
instructordetails: instructordetails;
traineedetails: traineedetails;
//DECLARE NEW VARIABLE

constructor() {
this.instructordetails = new instructordetails();
this.traineedetails = new traineedetails();
>>>>>>> 0fbdd422c24c484dd10dd203ae4d8411e65f8236
//CREATE NEW DM INSTANCE
    }
}