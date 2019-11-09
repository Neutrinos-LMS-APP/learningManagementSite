import { logindetails } from '../src/app/models/logindetails.model';

import { instructordetails } from '../src/app/models/instructordetails.model';
import { traineedetails } from '../src/app/models/traineedetails.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
logindetails: logindetails;
instructordetails: instructordetails;
traineedetails: traineedetails;
//DECLARE NEW VARIABLE

constructor() {
this.logindetails = new logindetails();
this.instructordetails = new instructordetails();
this.traineedetails = new traineedetails();
//CREATE NEW DM INSTANCE
    }
}
