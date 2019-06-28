/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/poolsMappers";
import * as Parameters from "../models/parameters";
import { AzureNetAppFilesManagementClientContext } from "../azureNetAppFilesManagementClientContext";

/** Class representing a Pools. */
export class Pools {
  private readonly client: AzureNetAppFilesManagementClientContext;

  /**
   * Create a Pools.
   * @param {AzureNetAppFilesManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureNetAppFilesManagementClientContext) {
    this.client = client;
  }

  /**
   * List all capacity pools in the NetApp Account
   * @summary Describe all Capacity Pools
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolsListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.CapacityPoolList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityPoolList>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityPoolList>, callback?: msRest.ServiceCallback<Models.CapacityPoolList>): Promise<Models.PoolsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PoolsListResponse>;
  }

  /**
   * Get details of the specified capacity pool
   * @summary Describe a Capacity Pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, poolName: string, callback: msRest.ServiceCallback<Models.CapacityPool>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, poolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityPool>): void;
  get(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityPool>, callback?: msRest.ServiceCallback<Models.CapacityPool>): Promise<Models.PoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PoolsGetResponse>;
  }

  /**
   * Create or Update a capacity pool
   * @summary Create or Update the specified capacity pool within the resource group
   * @param body Capacity pool object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolsCreateOrUpdateResponse>
   */
  createOrUpdate(body: Models.CapacityPool, resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(body,resourceGroupName,accountName,poolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PoolsCreateOrUpdateResponse>;
  }

  /**
   * Patch the specified capacity pool
   * @summary Update a capacity pool
   * @param body Capacity pool object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolsUpdateResponse>
   */
  update(body: Models.CapacityPoolPatch, resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolsUpdateResponse>;
  /**
   * @param body Capacity pool object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param callback The callback
   */
  update(body: Models.CapacityPoolPatch, resourceGroupName: string, accountName: string, poolName: string, callback: msRest.ServiceCallback<Models.CapacityPool>): void;
  /**
   * @param body Capacity pool object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param options The optional parameters
   * @param callback The callback
   */
  update(body: Models.CapacityPoolPatch, resourceGroupName: string, accountName: string, poolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityPool>): void;
  update(body: Models.CapacityPoolPatch, resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityPool>, callback?: msRest.ServiceCallback<Models.CapacityPool>): Promise<Models.PoolsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PoolsUpdateResponse>;
  }

  /**
   * Delete the specified capacity pool
   * @summary Delete a capacity pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,poolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create or Update a capacity pool
   * @summary Create or Update the specified capacity pool within the resource group
   * @param body Capacity pool object supplied in the body of the operation.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(body: Models.CapacityPool, resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete the specified capacity pool
   * @summary Delete a capacity pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityPoolList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.CapacityPoolPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CapacityPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.CapacityPool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CapacityPool
    },
    201: {
      bodyMapper: Mappers.CapacityPool
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};