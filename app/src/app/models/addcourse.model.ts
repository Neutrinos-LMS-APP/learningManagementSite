import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class addcourse {
  @JsonProperty('courseName', String, true)
  public courseName: string = undefined;

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

  @JsonProperty('learning_outcome_1', String, true)
  public learning_outcome_1: string = undefined;

  @JsonProperty('learning_outcome_2', String, true)
  public learning_outcome_2: string = undefined;

  @JsonProperty('learning_outcome_3', String, true)
  public learning_outcome_3: string = undefined;

  @JsonProperty('learning_outcome_4', String, true)
  public learning_outcome_4: string = undefined;

  @JsonProperty('learning_outcome_5', String, true)
  public learning_outcome_5: string = undefined;

  @JsonProperty('learning_outcome_6', String, true)
  public learning_outcome_6: string = undefined;

}