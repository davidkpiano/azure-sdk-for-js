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
import * as Models from "../models";
import * as Mappers from "../models/testJobStreamsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a TestJobStreams. */
export class TestJobStreams {
  private readonly client: AutomationClientContext;

  /**
   * Create a TestJobStreams.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve a test job stream of the test job identified by runbook name and stream id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param jobStreamId The job stream id.
   * @param [options] The optional parameters
   * @returns Promise<Models.TestJobStreamsGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, jobStreamId: string, options?: msRest.RequestOptionsBase): Promise<Models.TestJobStreamsGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param jobStreamId The job stream id.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, jobStreamId: string, callback: msRest.ServiceCallback<Models.JobStream>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param jobStreamId The job stream id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, jobStreamId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobStream>): void;
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, jobStreamId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobStream>, callback?: msRest.ServiceCallback<Models.JobStream>): Promise<Models.TestJobStreamsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        jobStreamId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TestJobStreamsGetResponse>;
  }

  /**
   * Retrieve a list of test job streams identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TestJobStreamsListByTestJobResponse>
   */
  listByTestJob(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: Models.TestJobStreamsListByTestJobOptionalParams): Promise<Models.TestJobStreamsListByTestJobResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  listByTestJob(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<Models.JobStreamListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTestJob(resourceGroupName: string, automationAccountName: string, runbookName: string, options: Models.TestJobStreamsListByTestJobOptionalParams, callback: msRest.ServiceCallback<Models.JobStreamListResult>): void;
  listByTestJob(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: Models.TestJobStreamsListByTestJobOptionalParams | msRest.ServiceCallback<Models.JobStreamListResult>, callback?: msRest.ServiceCallback<Models.JobStreamListResult>): Promise<Models.TestJobStreamsListByTestJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      listByTestJobOperationSpec,
      callback) as Promise<Models.TestJobStreamsListByTestJobResponse>;
  }

  /**
   * Retrieve a list of test job streams identified by runbook name.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TestJobStreamsListByTestJobNextResponse>
   */
  listByTestJobNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TestJobStreamsListByTestJobNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByTestJobNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobStreamListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTestJobNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobStreamListResult>): void;
  listByTestJobNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobStreamListResult>, callback?: msRest.ServiceCallback<Models.JobStreamListResult>): Promise<Models.TestJobStreamsListByTestJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByTestJobNextOperationSpec,
      callback) as Promise<Models.TestJobStreamsListByTestJobNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams/{jobStreamId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName,
    Parameters.jobStreamId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobStream
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByTestJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByTestJobNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};