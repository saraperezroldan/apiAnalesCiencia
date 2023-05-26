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


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.InlineResponse200;
import org.openapitools.client.model.InlineResponse400;
import org.openapitools.client.model.UNKNOWN_BASE_TYPE;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LoginApi {
    private ApiClient localVarApiClient;

    public LoginApi() {
        this(Configuration.getDefaultApiClient());
    }

    public LoginApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for apiPostLogin
     * @param UNKNOWN_BASE_TYPE Registered **username** and **password** (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> _User access token_ </td><td>  * Authorization - Authorization header with access token <br>  </td></tr>
        <tr><td> 400 </td><td> Error response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiPostLoginCall(UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = UNKNOWN_BASE_TYPE;

        // create path and map variables
        String localVarPath = "/access_token";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/x-www-form-urlencoded", "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call apiPostLoginValidateBeforeCall(UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
        if (UNKNOWN_BASE_TYPE == null) {
            throw new ApiException("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling apiPostLogin(Async)");
        }
        

        okhttp3.Call localVarCall = apiPostLoginCall(UNKNOWN_BASE_TYPE, _callback);
        return localVarCall;

    }

    /**
     * Returns api token
     * Returns api authorization token (JWT).
     * @param UNKNOWN_BASE_TYPE Registered **username** and **password** (required)
     * @return InlineResponse200
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> _User access token_ </td><td>  * Authorization - Authorization header with access token <br>  </td></tr>
        <tr><td> 400 </td><td> Error response </td><td>  -  </td></tr>
     </table>
     */
    public InlineResponse200 apiPostLogin(UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE) throws ApiException {
        ApiResponse<InlineResponse200> localVarResp = apiPostLoginWithHttpInfo(UNKNOWN_BASE_TYPE);
        return localVarResp.getData();
    }

    /**
     * Returns api token
     * Returns api authorization token (JWT).
     * @param UNKNOWN_BASE_TYPE Registered **username** and **password** (required)
     * @return ApiResponse&lt;InlineResponse200&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> _User access token_ </td><td>  * Authorization - Authorization header with access token <br>  </td></tr>
        <tr><td> 400 </td><td> Error response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<InlineResponse200> apiPostLoginWithHttpInfo(UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE) throws ApiException {
        okhttp3.Call localVarCall = apiPostLoginValidateBeforeCall(UNKNOWN_BASE_TYPE, null);
        Type localVarReturnType = new TypeToken<InlineResponse200>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Returns api token (asynchronously)
     * Returns api authorization token (JWT).
     * @param UNKNOWN_BASE_TYPE Registered **username** and **password** (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> _User access token_ </td><td>  * Authorization - Authorization header with access token <br>  </td></tr>
        <tr><td> 400 </td><td> Error response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call apiPostLoginAsync(UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE, final ApiCallback<InlineResponse200> _callback) throws ApiException {

        okhttp3.Call localVarCall = apiPostLoginValidateBeforeCall(UNKNOWN_BASE_TYPE, _callback);
        Type localVarReturnType = new TypeToken<InlineResponse200>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}