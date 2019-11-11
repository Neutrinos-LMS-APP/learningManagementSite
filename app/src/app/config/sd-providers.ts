import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-loginservice
import { loginservice } from '../sd-services/loginservice';
//CORE_REFERENCE_IMPORT-login
import { login } from '../sd-services/login';
//CORE_REFERENCE_IMPORT-courseservice
import { courseservice } from '../sd-services/courseservice';
//CORE_REFERENCE_IMPORT-registertraineeservice
import { registertraineeservice } from '../sd-services/registertraineeservice';
//CORE_REFERENCE_IMPORT-registerinstructorservice
import { registerinstructorservice } from '../sd-services/registerinstructorservice';

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-loginservice
  loginservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-login
  login,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-courseservice
  courseservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-registertraineeservice
  registertraineeservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-registerinstructorservice
  registerinstructorservice
];
