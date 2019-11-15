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
export class courseservice {
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

  //   service flows_courseservice

  public async getcoursedata(...others) {
    try {
      let bh = { input: {}, local: { result: undefined, apiUrl: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_7owje9LqzwiKvJcY(bh);
      //appendnew_next_getcoursedata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async addcourse(courseObject = undefined, ...others) {
    try {
      let bh = {
        input: { courseObject: courseObject },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_HEQ9sahbXyx2ugPK(bh);
      //appendnew_next_addcourse
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async deletecourse(courserowId = undefined, ...others) {
    try {
      let bh = {
        input: { courserowId: courserowId },
        local: { apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_y8ht8CmV0a6gFEeU(bh);
      //appendnew_next_deletecourse
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getLoginApproved(
    username = undefined,
    status = undefined,
    ...others
  ) {
    try {
      let bh = {
        input: { username: username, status: status },
        local: { result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_Bg3rAPfqFoiUAmPD(bh);
      //appendnew_next_getLoginApproved
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getCourseByStatus(status = undefined, ...others) {
    try {
      let bh = { input: { status: status }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_6nvrTVgE3mHO4O0w(bh);
      //appendnew_next_getCourseByStatus
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async updateCourseStatus(courseObj = undefined, ...others) {
    try {
      let bh = {
        input: { courseObj: courseObj },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_d2wFTeRRghireUef(bh);
      //appendnew_next_updateCourseStatus
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getCourseById(id = undefined, ...others) {
    try {
      let bh = { input: { id: id }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_Red3GNhshrqMMHVq(bh);
      //appendnew_next_getCourseById
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_courseservice_Start

  async sd_7owje9LqzwiKvJcY(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/getcourses';

      bh = await this.sd_oFgAXrZMbAptUAlM(bh);
      //appendnew_next_sd_7owje9LqzwiKvJcY
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_oFgAXrZMbAptUAlM(bh) {
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
      //appendnew_next_sd_oFgAXrZMbAptUAlM
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_HEQ9sahbXyx2ugPK(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/addcourse';

      bh = await this.sd_XytGjeU0Lkw6JttC(bh);
      //appendnew_next_sd_HEQ9sahbXyx2ugPK
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_XytGjeU0Lkw6JttC(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.courseObject
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_XytGjeU0Lkw6JttC
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_y8ht8CmV0a6gFEeU(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/deletecourse?_id=${bh.input.courserowId}`;

      bh = await this.sd_NCOs2Tf4QbUDh6zF(bh);
      //appendnew_next_sd_y8ht8CmV0a6gFEeU
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_NCOs2Tf4QbUDh6zF(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.courserowId
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_NCOs2Tf4QbUDh6zF
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Bg3rAPfqFoiUAmPD(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getloginapproved?email=${bh.input.username}&&status=${bh.input.status}`;

      bh = await this.sd_10JScst1osFqA05X(bh);
      //appendnew_next_sd_Bg3rAPfqFoiUAmPD
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_10JScst1osFqA05X(bh) {
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
      //appendnew_next_sd_10JScst1osFqA05X
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_6nvrTVgE3mHO4O0w(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getcoursebystatus?status=${bh.input.status}`;

      bh = await this.sd_SArVrHqHIIdQiCyn(bh);
      //appendnew_next_sd_6nvrTVgE3mHO4O0w
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_SArVrHqHIIdQiCyn(bh) {
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
      //appendnew_next_sd_SArVrHqHIIdQiCyn
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_d2wFTeRRghireUef(bh) {
    try {
      bh.local.apiUrl = `http://localhost:4000/api/updatecoursestatus`;

      bh = await this.sd_Zwc4aMcHjNU9mRzA(bh);
      //appendnew_next_sd_d2wFTeRRghireUef
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Zwc4aMcHjNU9mRzA(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.courseObj
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Zwc4aMcHjNU9mRzA
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Red3GNhshrqMMHVq(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/getparticularcourse?_id=${bh.input.id}`;

      bh = await this.sd_et0fl5W8vJSdJ52E(bh);
      //appendnew_next_sd_Red3GNhshrqMMHVq
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_et0fl5W8vJSdJ52E(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_et0fl5W8vJSdJ52E
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
