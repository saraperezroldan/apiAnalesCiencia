/*
 * 🏛️ TDW - ACiencia REST api
 * [UPM] TDW REST api ACiencia
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: miw.etsisi@upm.es
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ProductAllOf
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-05-21T12:12:24.277116300+02:00[Europe/Paris]")
public class ProductAllOf {
  public static final String SERIALIZED_NAME_PERSONS = "persons";
  @SerializedName(SERIALIZED_NAME_PERSONS)
  private List<Integer> persons = null;

  public static final String SERIALIZED_NAME_ENTITIES = "entities";
  @SerializedName(SERIALIZED_NAME_ENTITIES)
  private List<Integer> entities = null;


  public ProductAllOf persons(List<Integer> persons) {
    
    this.persons = persons;
    return this;
  }

  public ProductAllOf addPersonsItem(Integer personsItem) {
    if (this.persons == null) {
      this.persons = new ArrayList<Integer>();
    }
    this.persons.add(personsItem);
    return this;
  }

   /**
   * Array of Person Ids
   * @return persons
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Array of Person Ids")

  public List<Integer> getPersons() {
    return persons;
  }


  public void setPersons(List<Integer> persons) {
    this.persons = persons;
  }


  public ProductAllOf entities(List<Integer> entities) {
    
    this.entities = entities;
    return this;
  }

  public ProductAllOf addEntitiesItem(Integer entitiesItem) {
    if (this.entities == null) {
      this.entities = new ArrayList<Integer>();
    }
    this.entities.add(entitiesItem);
    return this;
  }

   /**
   * Array of Entity Ids
   * @return entities
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Array of Entity Ids")

  public List<Integer> getEntities() {
    return entities;
  }


  public void setEntities(List<Integer> entities) {
    this.entities = entities;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductAllOf productAllOf = (ProductAllOf) o;
    return Objects.equals(this.persons, productAllOf.persons) &&
        Objects.equals(this.entities, productAllOf.entities);
  }

  @Override
  public int hashCode() {
    return Objects.hash(persons, entities);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductAllOf {\n");
    sb.append("    persons: ").append(toIndentedString(persons)).append("\n");
    sb.append("    entities: ").append(toIndentedString(entities)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

