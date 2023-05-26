# ProductsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProductsAddRemEntity**](ProductsApi.md#apiProductsAddRemEntity) | **PUT** /products/{productId}/entities/{operation}/{entityId} | Sets or remove the relationship product-entity
[**apiProductsAddRemPerson**](ProductsApi.md#apiProductsAddRemPerson) | **PUT** /products/{productId}/persons/{operation}/{personId} | Sets or remove the relationship product-person
[**cOptionsProduct**](ProductsApi.md#cOptionsProduct) | **OPTIONS** /products | Provides the list of HTTP supported methods.
[**createProduct**](ProductsApi.md#createProduct) | **POST** /products | Creates a Product resource.
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /products/{productId} | Removes the Product resource.
[**existsProduct**](ProductsApi.md#existsProduct) | **GET** /products/productname/{productname} | Determines if productname exists
[**optionsProduct**](ProductsApi.md#optionsProduct) | **OPTIONS** /products/{productId} | Provides the list of HTTP supported methods.
[**readProduct**](ProductsApi.md#readProduct) | **GET** /products/{productId} | Retrieves a Product resource based on a single ID.
[**readProductEntities**](ProductsApi.md#readProductEntities) | **GET** /products/{productId}/entities | List of entities related to the product
[**readProductPersons**](ProductsApi.md#readProductPersons) | **GET** /products/{productId}/persons | List of persons related to the product
[**readProducts**](ProductsApi.md#readProducts) | **GET** /products | Retrieves the collection of Product resources.
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /products/{productId} | Updates the Product resource.


<a name="apiProductsAddRemEntity"></a>
# **apiProductsAddRemEntity**
> Product apiProductsAddRemEntity(productId, operation, entityId)

Sets or remove the relationship product-entity

Establishes/Removes the relationship of the product with the entity

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    String operation = "operation_example"; // String | Set the operation to perform: <li><b>add</b>: add the relationship <li><b>rem</b>: remove the relationship
    Long entityId = 56L; // Long | ID of entity
    try {
      Product result = apiInstance.apiProductsAddRemEntity(productId, operation, entityId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsAddRemEntity");
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
 **productId** | **Long**| ID of product |
 **operation** | **String**| Set the operation to perform: &lt;li&gt;&lt;b&gt;add&lt;/b&gt;: add the relationship &lt;li&gt;&lt;b&gt;rem&lt;/b&gt;: remove the relationship | [enum: add, rem]
 **entityId** | **Long**| ID of entity |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="apiProductsAddRemPerson"></a>
# **apiProductsAddRemPerson**
> Product apiProductsAddRemPerson(productId, operation, personId)

Sets or remove the relationship product-person

Establishes/Removes the relationship of the product with the person

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    String operation = "operation_example"; // String | Set the operation to perform: <li><b>add</b>: add the relationship <li><b>rem</b>: remove the relationship
    Long personId = 56L; // Long | ID of person
    try {
      Product result = apiInstance.apiProductsAddRemPerson(productId, operation, personId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#apiProductsAddRemPerson");
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
 **productId** | **Long**| ID of product |
 **operation** | **String**| Set the operation to perform: &lt;li&gt;&lt;b&gt;add&lt;/b&gt;: add the relationship &lt;li&gt;&lt;b&gt;rem&lt;/b&gt;: remove the relationship | [enum: add, rem]
 **personId** | **Long**| ID of person |

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product is now updated |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**406** | &#x60;NOT ACCEPTABLE&#x60;: Requested resource not found |  -  |

<a name="cOptionsProduct"></a>
# **cOptionsProduct**
> cOptionsProduct()

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    try {
      apiInstance.cOptionsProduct();
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#cOptionsProduct");
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

<a name="createProduct"></a>
# **createProduct**
> Product createProduct(UNKNOWN_BASE_TYPE)

Creates a Product resource.

Creates a new product

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Product result = apiInstance.createProduct(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#createProduct");
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

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | &#x60;Created&#x60;: product created |  * Location -  <br>  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**403** | &#x60;FORBIDDEN&#x60;: You don&#39;t have permission to access |  -  |
**422** | &#x60;UNPROCESSABLE ENTITY&#x60;: Username, e-mail or password is left out |  -  |

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productId)

Removes the Product resource.

Deletes the product identified by &#x60;productId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    try {
      apiInstance.deleteProduct(productId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#deleteProduct");
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
 **productId** | **Long**| ID of product |

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
**204** | Product deleted &amp;lt;Response body is empty&amp;gt; |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="existsProduct"></a>
# **existsProduct**
> existsProduct(productname)

Determines if productname exists

Returns status code 204 if &#x60;productname&#x60; exists.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String productname = "productname_example"; // String | Product name
    try {
      apiInstance.existsProduct(productname);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#existsProduct");
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
 **productname** | **String**| Product name |

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
**204** | Productname exists &amp;lt;Response body is empty&amp;gt; |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="optionsProduct"></a>
# **optionsProduct**
> optionsProduct(productId)

Provides the list of HTTP supported methods.

Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    try {
      apiInstance.optionsProduct(productId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#optionsProduct");
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
 **productId** | **Long**| ID of product |

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

<a name="readProduct"></a>
# **readProduct**
> Product readProduct(productId)

Retrieves a Product resource based on a single ID.

Returns the product identified by &#x60;productId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    try {
      Product result = apiInstance.readProduct(productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#readProduct");
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
 **productId** | **Long**| ID of product |

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="readProductEntities"></a>
# **readProductEntities**
> InlineResponse2003 readProductEntities(productId)

List of entities related to the product

Returns the entities related to the product &#x60;productId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    try {
      InlineResponse2003 result = apiInstance.readProductEntities(productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#readProductEntities");
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
 **productId** | **Long**| ID of product |

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

<a name="readProductPersons"></a>
# **readProductPersons**
> InlineResponse2004 readProductPersons(productId)

List of persons related to the product

Returns the persons related to the product &#x60;productId&#x60;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    try {
      InlineResponse2004 result = apiInstance.readProductPersons(productId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#readProductPersons");
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
 **productId** | **Long**| ID of product |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

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

<a name="readProducts"></a>
# **readProducts**
> InlineResponse2002 readProducts(order, ordering)

Retrieves the collection of Product resources.

Returns all products from the system that the user has access to.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String order = "order_example"; // String | `id` | `name`
    String ordering = "ordering_example"; // String | `ASC` | `DESC`
    try {
      InlineResponse2002 result = apiInstance.readProducts(order, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#readProducts");
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of products |  * ETag -  <br>  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |

<a name="updateProduct"></a>
# **updateProduct**
> Product updateProduct(productId, ifMatch, UNKNOWN_BASE_TYPE)

Updates the Product resource.

Updates the product identified by &#x60;productId&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://127.0.0.1:8000/api/v1");
    
    // Configure OAuth2 access token for authorization: MiWApiSecurity
    OAuth MiWApiSecurity = (OAuth) defaultClient.getAuthentication("MiWApiSecurity");
    MiWApiSecurity.setAccessToken("YOUR ACCESS TOKEN");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long productId = 56L; // Long | ID of product
    String ifMatch = "ifMatch_example"; // String | ETag value of the resource you are trying to update
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | `Element` data
    try {
      Product result = apiInstance.updateProduct(productId, ifMatch, UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#updateProduct");
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
 **productId** | **Long**| ID of product |
 **ifMatch** | **String**| ETag value of the resource you are trying to update |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| &#x60;Element&#x60; data | [optional]

### Return type

[**Product**](Product.md)

### Authorization

[MiWApiSecurity](../README.md#MiWApiSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**209** | &#x60;Content Returned&#x60;: product previously existed and is now updated |  -  |
**400** | &#x60;BAD REQUEST&#x60;: User name or e-mail already exists, or role does not exist |  -  |
**401** | &#x60;UNAUTHORIZED&#x60;: invalid Authorization header |  -  |
**404** | &#x60;NOT FOUND&#x60;: resource not found |  -  |
**412** | &#x60;PRECONDITION FAILED&#x60;: one or more conditions given evaluated to false |  -  |

