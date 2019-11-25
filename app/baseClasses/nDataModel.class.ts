import { logindetails } from '../src/app/models/logindetails.model';

import { instructordetails } from '../src/app/models/instructordetails.model';
import { traineedetails } from '../src/app/models/traineedetails.model';
import { addcourse } from '../src/app/models/addcourse.model';
import { contactdetails } from '../src/app/models/contactdetails.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
logindetails: logindetails;
instructordetails: instructordetails;
traineedetails: traineedetails;
addcourse: addcourse;
contactdetails: contactdetails;
//DECLARE NEW VARIABLE

constructor() {
this.logindetails = new logindetails();
this.instructordetails = new instructordetails();
this.traineedetails = new traineedetails();
this.addcourse = new addcourse();
this.contactdetails = new contactdetails();
//CREATE NEW DM INSTANCE
    }
}
