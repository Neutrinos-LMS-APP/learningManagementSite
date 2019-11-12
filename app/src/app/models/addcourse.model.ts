import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class addcourse {
  @JsonProperty('courseName', String, true)
  public courseName: string = undefined;

  @JsonProperty('courseStream', String, true)
  public courseStream: string = undefined;

  @JsonProperty('duration', String, true)
  public duration: string = undefined;

  @JsonProperty('price', Number, true)
  public price: number = undefined;

  @JsonProperty('createdby', String, true)
  public createdby: string = undefined;

  @JsonProperty('coursedescription', String, true)
  public coursedescription: string = undefined;

  @JsonProperty('status', String, true)
  public status: string = undefined;

}