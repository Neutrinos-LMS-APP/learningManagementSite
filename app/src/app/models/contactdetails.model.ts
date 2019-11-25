import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class contactdetails {
  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

  @JsonProperty('emailid', String, true)
  public emailid: string = undefined;

  @JsonProperty('msg', String, true)
  public msg: string = undefined;

}