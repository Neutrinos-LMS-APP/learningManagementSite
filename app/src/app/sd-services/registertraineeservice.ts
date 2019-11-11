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
export class registertraineeservice {
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

  //   service flows_registertraineeservice

  public async getregistertraineedata(...others) {
    try {
      let bh = { input: {}, local: { result: undefined, apiUrl: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_Fcoabhb3JhH8f1dv(bh);
      //appendnew_next_getregistertraineedata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async registertraineeadd(registerobject = undefined, ...others) {
    try {
      let bh = {
        input: { registerobject: registerobject },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_Lxx9w7Fyob2KxPgv(bh);
      //appendnew_next_registertraineeadd
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async registertraineedelete(traineerowId = undefined, ...others) {
    try {
      let bh = {
        input: { traineerowId: traineerowId },
        local: { apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_jSF8IcRYxzCN3Qix(bh);
      //appendnew_next_registertraineedelete
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_registertraineeservice_Start

  async sd_Fcoabhb3JhH8f1dv(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/getregisterdata';

      bh = await this.sd_7thYOpAw1d9g1Nzy(bh);
      //appendnew_next_sd_Fcoabhb3JhH8f1dv
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_7thYOpAw1d9g1Nzy(bh) {
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
      //appendnew_next_sd_7thYOpAw1d9g1Nzy
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Lxx9w7Fyob2KxPgv(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/registerdata';

      bh = await this.sd_VruvvTf9OSK9YSLG(bh);
      //appendnew_next_sd_Lxx9w7Fyob2KxPgv
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_VruvvTf9OSK9YSLG(bh) {
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
      //appendnew_next_sd_VruvvTf9OSK9YSLG
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_jSF8IcRYxzCN3Qix(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/deleteregisterdata?${bh.input.instructorrowId}`;

      bh = await this.sd_Z7YP4Cts7Hp17QQW(bh);
      //appendnew_next_sd_jSF8IcRYxzCN3Qix
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Z7YP4Cts7Hp17QQW(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.traineerowId
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Z7YP4Cts7Hp17QQW
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
