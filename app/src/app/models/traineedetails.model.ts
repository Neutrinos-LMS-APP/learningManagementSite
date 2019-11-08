import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class traineedetails {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('mobile', Number, true)
  public mobile: number = undefined;

  @JsonProperty('gender', String, true)
  public gender: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('country', String, true)
  public country: string = undefined;

}