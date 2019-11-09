import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class logindetails {
  @JsonProperty('userName', String, true)
  public userName: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}