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
import org.openapitools.client.model.User;

/**
 * InlineResponse2001
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-05-21T12:12:24.277116300+02:00[Europe/Paris]")
public class InlineResponse2001 {
  public static final String SERIALIZED_NAME_USERS = "users";
  @SerializedName(SERIALIZED_NAME_USERS)
  private List<User> users = null;


  public InlineResponse2001 users(List<User> users) {
    
    this.users = users;
    return this;
  }

  public InlineResponse2001 addUsersItem(User usersItem) {
    if (this.users == null) {
      this.users = new ArrayList<User>();
    }
    this.users.add(usersItem);
    return this;
  }

   /**
   * Users array
   * @return users
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Users array")

  public List<User> getUsers() {
    return users;
  }


  public void setUsers(List<User> users) {
    this.users = users;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2001 inlineResponse2001 = (InlineResponse2001) o;
    return Objects.equals(this.users, inlineResponse2001.users);
  }

  @Override
  public int hashCode() {
    return Objects.hash(users);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2001 {\n");
    sb.append("    users: ").append(toIndentedString(users)).append("\n");
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

