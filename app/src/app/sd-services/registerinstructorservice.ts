/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SDBaseService } from '../n-services/SDBaseService';
import { environment } from '../../environments/environment';
import {
  NAlertComponent,
  NAlertService,
  NFileIOService,
  NFileUploadComponent
} from 'neutrinos-module';
import {
  NDataModelService,
  NAuthGuardService,
  NHTTPLoaderService,
  NLocalStorageService,
  NLoginService,
  NLogoutService,
  NNotificationService,
  NPubSubService,
  NSessionStorageService,
  NSnackbarService,
  NSystemService,
  NTokenService
} from 'neutrinos-seed-services';
//CORE_REFERENCE_IMPORTS

declare const window: any;
declare const cordova: any;

@Injectable()
export class registerinstructorservice {
  systemService = NSystemService.getInstance();
  appProperties;

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar,
    private sdService: SDBaseService,
    private sessionStorage: NSessionStorageService,
    private tokenService: NTokenService,
    private router: Router,
    private httpLoaderService: NHTTPLoaderService,
    private dataModelService: NDataModelService,
    private loginService: NLoginService,
    private authGuardService: NAuthGuardService,
    private localStorageService: NLocalStorageService,
    private logoutService: NLogoutService,
    private notificationService: NNotificationService,
    private pubsubService: NPubSubService,
    private snackbarService: NSnackbarService,
    private alertService: NAlertService,
    private fileIOService: NFileIOService
  ) {}

  //   service flows_registerinstructorservice

  public async getregisterinstructordata(...others) {
    try {
      let bh = { input: {}, local: { result: undefined, apiUrl: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_1xzg5aFC8PXUuzml(bh);
      //appendnew_next_getregisterinstructordata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async registerinstructor(registerobject = undefined, ...others) {
    try {
      let bh = {
        input: { registerobject: registerobject },
        local: { result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_TutKcQXWPi3KUjIN(bh);
      //appendnew_next_registerinstructor
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async deleteInstructor(instructorrowId = undefined, ...others) {
    try {
      let bh = {
        input: { instructorrowId: instructorrowId },
        local: { apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_RiD03wZBG7fr5xs7(bh);
      //appendnew_next_deleteInstructor
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getbystatus(status = undefined, ...others) {
    try {
      let bh = { input: { status: status }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_HGySkkvsxYqCReR9(bh);
      //appendnew_next_getbystatus
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getRoleAndStatus(
    status = undefined,
    role = undefined,
    ...others
  ) {
    try {
      let bh = {
        input: { status: status, role: role },
        local: { result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_rJj2lgukW7xbRBE7(bh);
      //appendnew_next_getRoleAndStatus
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getById(id = undefined, ...others) {
    try {
      let bh = { input: { id: id }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_3pfPzkKJnMU6zK5R(bh);
      //appendnew_next_getById
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async updateByStatus(updateObj = undefined, ...others) {
    try {
      let bh = {
        input: { updateObj: updateObj },
        local: { result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_avGOOzakr77RlIsI(bh);
      //appendnew_next_updateByStatus
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async updateCourses(coursesObj = undefined, ...others) {
    try {
      let bh = {
        input: { coursesObj: coursesObj },
        local: { result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_zdQrq3fr4Zg56WGv(bh);
      //appendnew_next_updateCourses
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getByUserName(useremail = undefined, ...others) {
    try {
      let bh = {
        input: { useremail: useremail },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_7Amme13eigxzNF3E(bh);
      //appendnew_next_getByUserName
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async updatepassbyemail(useremail = undefined, ...others) {
    try {
      let bh = {
        input: { useremail: useremail },
        local: { apiUrl: undefined, result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_M8ZN83h3bW6ayzHd(bh);
      //appendnew_next_updatepassbyemail
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async contactdetails(obj = undefined, ...others) {
    try {
      let bh = {
        input: { obj: obj },
        local: { result: undefined, modularapi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_c5gF3UHlpKM4CY6F(bh);
      //appendnew_next_contactdetails
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_registerinstructorservice_Start

  async sd_1xzg5aFC8PXUuzml(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/getregisterdata';

      bh = await this.sd_K8S2v4G9gstxUKHX(bh);
      //appendnew_next_sd_1xzg5aFC8PXUuzml
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_K8S2v4G9gstxUKHX(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_K8S2v4G9gstxUKHX
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_TutKcQXWPi3KUjIN(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/registerdata';
      console.log(bh.input.registerobject);

      bh = await this.sd_HsOD479NzRVnxbaN(bh);
      //appendnew_next_sd_TutKcQXWPi3KUjIN
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_HsOD479NzRVnxbaN(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.registerobject
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_A6X9pAWTbfgXgSYF(bh);
      //appendnew_next_sd_HsOD479NzRVnxbaN
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_A6X9pAWTbfgXgSYF(bh) {
    try {
      this.matSnackBar.open(bh.local.result.message, 'close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        direction: 'ltr',
        panelClass: ['custom']
      });
      //appendnew_next_sd_A6X9pAWTbfgXgSYF
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_RiD03wZBG7fr5xs7(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/deleteregisterdata?_id=${bh.input.instructorrowId}`;

      bh = await this.sd_0xTQbgS6fvdXxO06(bh);
      //appendnew_next_sd_RiD03wZBG7fr5xs7
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_0xTQbgS6fvdXxO06(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.instructorrowId
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_0xTQbgS6fvdXxO06
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_HGySkkvsxYqCReR9(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getbystatus?status=${bh.input.status}`;

      bh = await this.sd_7MG4TpTVsxhkVa3u(bh);
      //appendnew_next_sd_HGySkkvsxYqCReR9
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_7MG4TpTVsxhkVa3u(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_7MG4TpTVsxhkVa3u
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_rJj2lgukW7xbRBE7(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getroelandstatus?role=${bh.input.role}&&status=${bh.input.status}`;

      bh = await this.sd_mQCCOsYlvct8oCw7(bh);
      //appendnew_next_sd_rJj2lgukW7xbRBE7
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_mQCCOsYlvct8oCw7(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_mQCCOsYlvct8oCw7
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_3pfPzkKJnMU6zK5R(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getbyid?_id=${bh.input.id}`;

      bh = await this.sd_44INLrTYO7rhd62u(bh);
      //appendnew_next_sd_3pfPzkKJnMU6zK5R
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_44INLrTYO7rhd62u(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_44INLrTYO7rhd62u
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_avGOOzakr77RlIsI(bh) {
    try {
      bh.local.apiUrl = `http://localhost:4000/api/updatestatus`;

      bh = await this.sd_9l82xOaldIHKOhf8(bh);
      //appendnew_next_sd_avGOOzakr77RlIsI
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_9l82xOaldIHKOhf8(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.updateObj
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_2kosDHAtz8BrMB0b(bh);
      //appendnew_next_sd_9l82xOaldIHKOhf8
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_2kosDHAtz8BrMB0b(bh) {
    try {
      this.matSnackBar.open(bh.local.result.data, 'close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        direction: 'ltr',
        panelClass: ['custom']
      });
      //appendnew_next_sd_2kosDHAtz8BrMB0b
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_zdQrq3fr4Zg56WGv(bh) {
    try {
      bh.local.apiUrl = `http://localhost:4000/api/updatecourses`;

      bh = await this.sd_1mbByqJ8pkVDcTii(bh);
      //appendnew_next_sd_zdQrq3fr4Zg56WGv
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_1mbByqJ8pkVDcTii(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.coursesObj
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_3w1uCgwj6fVdvMGi(bh);
      //appendnew_next_sd_1mbByqJ8pkVDcTii
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_3w1uCgwj6fVdvMGi(bh) {
    try {
      this.matSnackBar.open(bh.local.result.data, 'close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        direction: 'ltr',
        panelClass: ['custom']
      });
      //appendnew_next_sd_3w1uCgwj6fVdvMGi
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_7Amme13eigxzNF3E(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getemail?email=${bh.input.useremail}`;

      bh = await this.sd_Wa0t8vtDeGCCtote(bh);
      //appendnew_next_sd_7Amme13eigxzNF3E
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Wa0t8vtDeGCCtote(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Wa0t8vtDeGCCtote
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_M8ZN83h3bW6ayzHd(bh) {
    try {
      bh.local.apiUrl = `http://localhost:4000/api/updatepassword`;

      bh = await this.sd_RR7IaKWHPpPVSUTi(bh);
      //appendnew_next_sd_M8ZN83h3bW6ayzHd
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_RR7IaKWHPpPVSUTi(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.useremail
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_yFq3jKucubrP6qh6(bh);
      //appendnew_next_sd_RR7IaKWHPpPVSUTi
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_yFq3jKucubrP6qh6(bh) {
    try {
      this.matSnackBar.open(bh.local.result.data, 'close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        direction: 'ltr',
        panelClass: ['custom']
      });
      //appendnew_next_sd_yFq3jKucubrP6qh6
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_c5gF3UHlpKM4CY6F(bh) {
    try {
      bh.local.modularapi = 'http://localhost:24483/api/email';

      bh = await this.sd_XHIwn9vVoJl4ST1X(bh);
      //appendnew_next_sd_c5gF3UHlpKM4CY6F
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_XHIwn9vVoJl4ST1X(bh) {
    try {
      let requestOptions = {
        url: bh.local.modularapi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.obj
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_XHIwn9vVoJl4ST1X
      return bh;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_node

  __constructDefault(bh) {
    const system: any = {};

    try {
      system.currentUser = this.sessionStorage.getValue('userObj');
      system.environment = environment;
      system.tokenService = this.tokenService;
      system.deviceService = this.systemService;
      system.router = this.router;
      system.httpLoaderService = this.httpLoaderService;
      system.dataModelService = this.dataModelService;
      system.loginService = this.loginService;
      system.authGuardService = this.authGuardService;
      system.localStorageService = this.localStorageService;
      system.logoutService = this.logoutService;
      system.notificationService = this.notificationService;
      system.pubsubService = this.pubsubService;
      system.snackbarService = this.snackbarService;
      system.alertService = this.alertService;
      system.fileIOService = this.fileIOService;

      Object.defineProperty(bh, 'system', {
        value: system,
        writable: false
      });

      return bh;
    } catch (e) {
      throw e;
    }
  }
}
