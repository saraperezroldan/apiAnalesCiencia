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

import org.openapitools.client.ApiException;
import org.openapitools.client.model.InlineResponse2002;
import org.openapitools.client.model.InlineResponse2003;
import org.openapitools.client.model.InlineResponse2004;
import org.openapitools.client.model.Message;
import org.openapitools.client.model.Product;
import org.openapitools.client.model.UNKNOWN_BASE_TYPE;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ProductsApi
 */
@Ignore
public class ProductsApiTest {

    private final ProductsApi api = new ProductsApi();

    
    /**
     * Sets or remove the relationship product-entity
     *
     * Establishes/Removes the relationship of the product with the entity
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void apiProductsAddRemEntityTest() throws ApiException {
        Long productId = null;
        String operation = null;
        Long entityId = null;
        Product response = api.apiProductsAddRemEntity(productId, operation, entityId);

        // TODO: test validations
    }
    
    /**
     * Sets or remove the relationship product-person
     *
     * Establishes/Removes the relationship of the product with the person
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void apiProductsAddRemPersonTest() throws ApiException {
        Long productId = null;
        String operation = null;
        Long personId = null;
        Product response = api.apiProductsAddRemPerson(productId, operation, personId);

        // TODO: test validations
    }
    
    /**
     * Provides the list of HTTP supported methods.
     *
     * Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void cOptionsProductTest() throws ApiException {
        api.cOptionsProduct();

        // TODO: test validations
    }
    
    /**
     * Creates a Product resource.
     *
     * Creates a new product
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createProductTest() throws ApiException {
        UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null;
        Product response = api.createProduct(UNKNOWN_BASE_TYPE);

        // TODO: test validations
    }
    
    /**
     * Removes the Product resource.
     *
     * Deletes the product identified by &#x60;productId&#x60;.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteProductTest() throws ApiException {
        Long productId = null;
        api.deleteProduct(productId);

        // TODO: test validations
    }
    
    /**
     * Determines if productname exists
     *
     * Returns status code 204 if &#x60;productname&#x60; exists.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void existsProductTest() throws ApiException {
        String productname = null;
        api.existsProduct(productname);

        // TODO: test validations
    }
    
    /**
     * Provides the list of HTTP supported methods.
     *
     * Return a &#x60;Allow&#x60; header with a comma separated list of HTTP supported methods.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void optionsProductTest() throws ApiException {
        Long productId = null;
        api.optionsProduct(productId);

        // TODO: test validations
    }
    
    /**
     * Retrieves a Product resource based on a single ID.
     *
     * Returns the product identified by &#x60;productId&#x60;.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void readProductTest() throws ApiException {
        Long productId = null;
        Product response = api.readProduct(productId);

        // TODO: test validations
    }
    
    /**
     * List of entities related to the product
     *
     * Returns the entities related to the product &#x60;productId&#x60;
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void readProductEntitiesTest() throws ApiException {
        Long productId = null;
        InlineResponse2003 response = api.readProductEntities(productId);

        // TODO: test validations
    }
    
    /**
     * List of persons related to the product
     *
     * Returns the persons related to the product &#x60;productId&#x60;
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void readProductPersonsTest() throws ApiException {
        Long productId = null;
        InlineResponse2004 response = api.readProductPersons(productId);

        // TODO: test validations
    }
    
    /**
     * Retrieves the collection of Product resources.
     *
     * Returns all products from the system that the user has access to.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void readProductsTest() throws ApiException {
        String order = null;
        String ordering = null;
        InlineResponse2002 response = api.readProducts(order, ordering);

        // TODO: test validations
    }
    
    /**
     * Updates the Product resource.
     *
     * Updates the product identified by &#x60;productId&#x60;.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateProductTest() throws ApiException {
        Long productId = null;
        String ifMatch = null;
        UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null;
        Product response = api.updateProduct(productId, ifMatch, UNKNOWN_BASE_TYPE);

        // TODO: test validations
    }
    
}
