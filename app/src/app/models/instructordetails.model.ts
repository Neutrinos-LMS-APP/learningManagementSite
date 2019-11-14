import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class instructordetails {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('mobile', Number, true)
  public mobile: number = undefined;

  @JsonProperty('country', String, true)
  public country: string = undefined;

  @JsonProperty('gender', String, true)
  public gender: string = undefined;

  @JsonProperty('role', String, true)
  public role: string = undefined;

  @JsonProperty('status', String, true)
  public status: string = undefined;

  @JsonProperty('registercourses', [String], true)
  public registercourses: string[] = [];

}