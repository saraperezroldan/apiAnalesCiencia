# EntitiesApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEntitiesAddRemPerson**](EntitiesApi.md#apiEntitiesAddRemPerson) | **PUT** /entities/{entityId}/persons/{operation}/{personId} | Sets or remove the relationship entity-person
[**apiEntitiesAddRemProduct**](EntitiesApi.md#apiEntitiesAddRemProduct) | **PUT** /entities/{entityId}/products/{operation}/{productId} | Sets or remove the relationship entity-product
[**cOptionsEntity**](EntitiesApi.md#cOptionsEntity) | **OPTIONS** /entities | Provides the list of HTTP supported methods.
[**createEntity**](EntitiesApi.md#createEntity) | **POST** /entities | Creates a Entity resource.
[**deleteEntity**](EntitiesApi.md#deleteEntity) | **DELETE** /entities/{entityId} | Removes the Entity resource.
[**existsEntity**](EntitiesApi.md#existsEntity) | **GET** /entities/entityname/{entityname} | Determines if entityname exists
[**optionsEntity**](EntitiesApi.md#optionsEntity) | **OPTIONS** /entities/{entityId} | Provides the list of HTTP supported methods.
[**readEntities**](EntitiesApi.md#readEntities) | **GET** /entities | Retrieves the collection of Entity resources.
[**readEntity**](EntitiesApi.md#readEntity) | **GET** /entities/{entityId} | Retrieves a Entity resource based on a single ID.
[**readEntityPersons**](EntitiesApi.md#readEntityPersons) | **GET** /entities/{entityId}/persons | List of persons related to the entity
[**readEntityProducts**](EntitiesApi.md#readEntityProducts) | **GET** /entities/{entityId}/products | List of products related to the entity
[**updateEntity**](EntitiesApi.md#updateEntity) | **PUT** /entities/{entityId} | Updates the Entity resource.


<a name="apiEntitiesAddRemPerson"></a>
# **apiEntitiesAddRemPerson**
> Entity apiEntitiesAddRemPerson(entityId, operation, personId)

Sets or remove the relationship entity-person

Establishes/Removes the relationship of the entity with the person

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    String operation = "operation_example"; // String | Set the operation to perform: <li><b>add</b>: add the relationship <li><b>rem</b>: remove the relationship
    Long personId = 56L; // Long | ID of person
    try {
      Entity result = apiInstance.apiEntitiesAddRemPerson(entityId, operation, personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#apiEntitiesAddRemPerson");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |
 **operation** | **String**| Set the operation to perform: &lt;li&gt;&lt;b&gt;add&lt;/b&gt;: add the relationship &lt;li&gt;&lt;b&gt;rem&lt;/b&gt;: remove the relationship | [enum: add, rem]
 **personId** | **Long**| ID of person |

### Return type

[**Entity**](Entity.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: entity is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="apiEntitiesAddRemProduct"></a>
# **apiEntitiesAddRemProduct**
> Entity apiEntitiesAddRemProduct(entityId, operation, productId)

Sets or remove the relationship entity-product

Establishes/Removes the relationship of the entity with the product

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    String operation = "operation_example"; // String | Set the operation to perform: <li><b>add</b>: add the relationship <li><b>rem</b>: remove the relationship
    Long productId = 56L; // Long | ID of product
    try {
      Entity result = apiInstance.apiEntitiesAddRemProduct(entityId, operation, productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#apiEntitiesAddRemProduct");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |
 **operation** | **String**| Set the operation to perform: &lt;li&gt;&lt;b&gt;add&lt;/b&gt;: add the relationship &lt;li&gt;&lt;b&gt;rem&lt;/b&gt;: remove the relationship | [enum: add, rem]
 **productId** | **Long**| ID of product |

### Return type

[**Entity**](Entity.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: entity is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="cOptionsEntity"></a>
# **cOptionsEntity**
> cOptionsEntity()

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    try {
      apiInstance.cOptionsEntity();
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#cOptionsEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | &#x60;Allow&#x60; header &amp;lt;Response body is empty&amp;gt; |  * Allow -  <br>  |

<a name="createEntity"></a>
# **createEntity**
> Entity createEntity(UNKNOWN_BASE_TYPE)

Creates a Entity resource.

Creates a new entity

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Entity result = apiInstance.createEntity(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#createEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;Element&#x60; data | [optional]

### Return type

[**Entity**](Entity.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | &#x60;Created&#x60;: entity created |  * Location -  <br>  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**422** | &#x60;UNPROCESSABLE ENTITY&#x60;: Username, e-mail or password is left out |  -  |

<a name="deleteEntity"></a>
# **deleteEntity**
> deleteEntity(entityId)

Removes the Entity resource.

Deletes the entity identified by &#x60;entityId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    try {
      apiInstance.deleteEntity(entityId);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#deleteEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |

### Return type

null (empty response body)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Entity deleted &amp;lt;Response body is empty&amp;gt; |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="existsEntity"></a>
# **existsEntity**
> existsEntity(entityname)

Determines if entityname exists

Returns status code 204 if &#x60;entityname&#x60; exists.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    String entityname = "entityname_example"; // String | Entity name
    try {
      apiInstance.existsEntity(entityname);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#existsEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityname** | **String**| Entity name |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Entityname exists &amp;lt;Response body is empty&amp;gt; |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="optionsEntity"></a>
# **optionsEntity**
> optionsEntity(entityId)

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    try {
      apiInstance.optionsEntity(entityId);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#optionsEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | &#x60;Allow&#x60; header &amp;lt;Response body is empty&amp;gt; |  * Allow -  <br>  |

<a name="readEntities"></a>
# **readEntities**
> InlineResponse2005 readEntities(order, ordering)

Retrieves the collection of Entity resources.

Returns all entities from the system that the user has access to.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    String order = "order_example"; // String | `id` | `name`
    String ordering = "ordering_example"; // String | `ASC` | `DESC`
    try {
      InlineResponse2005 result = apiInstance.readEntities(order, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#readEntities");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **String**| &#x60;id&#x60; | &#x60;name&#x60; | [optional] [enum: id, name]
 **ordering** | **String**| &#x60;ASC&#x60; | &#x60;DESC&#x60; | [optional] [enum: ASC, DESC]

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of entities |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="readEntity"></a>
# **readEntity**
> Entity readEntity(entityId)

Retrieves a Entity resource based on a single ID.

Returns the product identified by &#x60;entityId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    try {
      Entity result = apiInstance.readEntity(entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#readEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |

### Return type

[**Entity**](Entity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Entity |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="readEntityPersons"></a>
# **readEntityPersons**
> InlineResponse2007 readEntityPersons(entityId)

List of persons related to the entity

Returns the persons related to the entity &#x60;entityId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    try {
      InlineResponse2007 result = apiInstance.readEntityPersons(entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#readEntityPersons");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Persons |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="readEntityProducts"></a>
# **readEntityProducts**
> InlineResponse2006 readEntityProducts(entityId)

List of products related to the entity

Returns the products related to the entity &#x60;entityId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    try {
      InlineResponse2006 result = apiInstance.readEntityProducts(entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#readEntityProducts");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Products |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="updateEntity"></a>
# **updateEntity**
> Entity updateEntity(entityId, ifMatch, UNKNOWN_BASE_TYPE)

Updates the Entity resource.

Updates the product identified by &#x60;entityId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EntitiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    EntitiesApi apiInstance = new EntitiesApi(defaultClient);
    Long entityId = 56L; // Long | ID of entity
    String ifMatch = "ifMatch_example"; // String | ETag value of the resource you are trying to update
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Entity result = apiInstance.updateEntity(entityId, ifMatch, UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EntitiesApi#updateEntity");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | **Long**| ID of entity |
 **ifMatch** | **String**| ETag value of the resource you are trying to update |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;Element&#x60; data | [optional]

### Return type

[**Entity**](Entity.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: entity previously existed and is now updated |  -  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**412** | &#x60;PRECONDITION FAILED&#x60;: one or more conditions given evaluated to false |  -  |

