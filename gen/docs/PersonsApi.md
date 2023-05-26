# PersonsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPersonsAddRemEntity**](PersonsApi.md#apiPersonsAddRemEntity) | **PUT** /persons/{personId}/entities/{operation}/{entityId} | Sets or remove the relationship person-entity
[**apiPersonsAddRemProduct**](PersonsApi.md#apiPersonsAddRemProduct) | **PUT** /persons/{personId}/products/{operation}/{productId} | Sets or remove the relationship person-product
[**createPerson**](PersonsApi.md#createPerson) | **POST** /persons | Creates a Person resource.
[**deletePerson**](PersonsApi.md#deletePerson) | **DELETE** /persons/{personId} | Removes the Person resource.
[**existsPerson**](PersonsApi.md#existsPerson) | **GET** /persons/personname/{personname} | Determines if personname exists
[**optionsEntity**](PersonsApi.md#optionsEntity) | **OPTIONS** /persons | Provides the list of HTTP supported methods.
[**optionsPerson**](PersonsApi.md#optionsPerson) | **OPTIONS** /persons/{personId} | Provides the list of HTTP supported methods.
[**readPerson**](PersonsApi.md#readPerson) | **GET** /persons/{personId} | Retrieves a Person resource based on a single ID.
[**readPersonEntities**](PersonsApi.md#readPersonEntities) | **GET** /persons/{personId}/entities | List of entities related to the person
[**readPersonProducts**](PersonsApi.md#readPersonProducts) | **GET** /persons/{personId}/products | List of products related to the person
[**readPersons**](PersonsApi.md#readPersons) | **GET** /persons | Retrieves the collection of Person resources.
[**updatePerson**](PersonsApi.md#updatePerson) | **PUT** /persons/{personId} | Updates the Person resource.


<a name="apiPersonsAddRemEntity"></a>
# **apiPersonsAddRemEntity**
> Person apiPersonsAddRemEntity(personId, operation, entityId)

Sets or remove the relationship person-entity

Establishes/Removes the relationship of the person with the entity

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    String operation = "operation_example"; // String | Set the operation to perform: <li><b>add</b>: add the relationship <li><b>rem</b>: remove the relationship
    Long entityId = 56L; // Long | ID of entity
    try {
      Person result = apiInstance.apiPersonsAddRemEntity(personId, operation, entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#apiPersonsAddRemEntity");
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
 **personId** | **Long**| ID of person |
 **operation** | **String**| Set the operation to perform: &lt;li&gt;&lt;b&gt;add&lt;/b&gt;: add the relationship &lt;li&gt;&lt;b&gt;rem&lt;/b&gt;: remove the relationship | [enum: add, rem]
 **entityId** | **Long**| ID of entity |

### Return type

[**Person**](Person.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: person is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="apiPersonsAddRemProduct"></a>
# **apiPersonsAddRemProduct**
> Person apiPersonsAddRemProduct(personId, operation, productId)

Sets or remove the relationship person-product

Establishes/Removes the relationship of the person with the product

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    String operation = "operation_example"; // String | Set the operation to perform: <li><b>add</b>: add the relationship <li><b>rem</b>: remove the relationship
    Long productId = 56L; // Long | ID of product
    try {
      Person result = apiInstance.apiPersonsAddRemProduct(personId, operation, productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#apiPersonsAddRemProduct");
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
 **personId** | **Long**| ID of person |
 **operation** | **String**| Set the operation to perform: &lt;li&gt;&lt;b&gt;add&lt;/b&gt;: add the relationship &lt;li&gt;&lt;b&gt;rem&lt;/b&gt;: remove the relationship | [enum: add, rem]
 **productId** | **Long**| ID of product |

### Return type

[**Person**](Person.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: person is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="createPerson"></a>
# **createPerson**
> Person createPerson(UNKNOWN_BASE_TYPE)

Creates a Person resource.

Creates a new person

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Person result = apiInstance.createPerson(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#createPerson");
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

[**Person**](Person.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | &#x60;Created&#x60;: person created |  * Location -  <br>  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**422** | &#x60;UNPROCESSABLE ENTITY&#x60;: Username, e-mail or password is left out |  -  |

<a name="deletePerson"></a>
# **deletePerson**
> deletePerson(personId)

Removes the Person resource.

Deletes the entity identified by &#x60;personId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    try {
      apiInstance.deletePerson(personId);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#deletePerson");
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
 **personId** | **Long**| ID of person |

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
**204** | Person deleted &amp;lt;Response body is empty&amp;gt; |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="existsPerson"></a>
# **existsPerson**
> existsPerson(personname)

Determines if personname exists

Returns status code 204 if &#x60;personname&#x60; exists.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    String personname = "personname_example"; // String | Person name
    try {
      apiInstance.existsPerson(personname);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#existsPerson");
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
 **personname** | **String**| Person name |

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
**204** | Personname exists &amp;lt;Response body is empty&amp;gt; |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="optionsEntity"></a>
# **optionsEntity**
> optionsEntity()

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    try {
      apiInstance.optionsEntity();
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#optionsEntity");
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

<a name="optionsPerson"></a>
# **optionsPerson**
> optionsPerson(personId)

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    try {
      apiInstance.optionsPerson(personId);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#optionsPerson");
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
 **personId** | **Long**| ID of person |

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

<a name="readPerson"></a>
# **readPerson**
> Person readPerson(personId)

Retrieves a Person resource based on a single ID.

Returns the product identified by &#x60;personId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    try {
      Person result = apiInstance.readPerson(personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#readPerson");
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
 **personId** | **Long**| ID of person |

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Person |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="readPersonEntities"></a>
# **readPersonEntities**
> InlineResponse2003 readPersonEntities(personId)

List of entities related to the person

Returns the entities related to the person &#x60;personId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    try {
      InlineResponse2003 result = apiInstance.readPersonEntities(personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#readPersonEntities");
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
 **personId** | **Long**| ID of person |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Entities |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="readPersonProducts"></a>
# **readPersonProducts**
> InlineResponse2006 readPersonProducts(personId)

List of products related to the person

Returns the products related to the person &#x60;personId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    try {
      InlineResponse2006 result = apiInstance.readPersonProducts(personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#readPersonProducts");
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
 **personId** | **Long**| ID of person |

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

<a name="readPersons"></a>
# **readPersons**
> InlineResponse2008 readPersons(order, ordering)

Retrieves the collection of Person resources.

Returns all persons from the system that the user has access to.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    String order = "order_example"; // String | `id` | `name`
    String ordering = "ordering_example"; // String | `ASC` | `DESC`
    try {
      InlineResponse2008 result = apiInstance.readPersons(order, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#readPersons");
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of persons |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="updatePerson"></a>
# **updatePerson**
> Person updatePerson(personId, ifMatch, UNKNOWN_BASE_TYPE)

Updates the Person resource.

Updates the person identified by &#x60;personId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PersonsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    PersonsApi apiInstance = new PersonsApi(defaultClient);
    Long personId = 56L; // Long | ID of person
    String ifMatch = "ifMatch_example"; // String | ETag value of the resource you are trying to update
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Person result = apiInstance.updatePerson(personId, ifMatch, UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PersonsApi#updatePerson");
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
 **personId** | **Long**| ID of person |
 **ifMatch** | **String**| ETag value of the resource you are trying to update |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;Element&#x60; data | [optional]

### Return type

[**Person**](Person.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: person previously existed and is now updated |  -  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**412** | &#x60;PRECONDITION FAILED&#x60;: one or more conditions given evaluated to false |  -  |

