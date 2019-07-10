/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import * as msRest from "@azure/ms-rest-js";

/**
 * Image url.
 */
export interface ImageUrl {
  /**
   * Url of the image.
   */
  url: string;
}

/**
 * Bounding box that defines a region of an image.
 */
export interface BoundingBox {
  /**
   * Coordinate of the left boundary.
   */
  left: number;
  /**
   * Coordinate of the top boundary.
   */
  top: number;
  /**
   * Width.
   */
  width: number;
  /**
   * Height.
   */
  height: number;
}

/**
 * Prediction result.
 */
export interface Prediction {
  /**
   * Probability of the tag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly probability?: number;
  /**
   * Id of the predicted tag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tagId?: string;
  /**
   * Name of the predicted tag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tagName?: string;
  /**
   * Bounding box of the prediction.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly boundingBox?: BoundingBox;
}

/**
 * Result of an image prediction request.
 */
export interface ImagePrediction {
  /**
   * Prediction Id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Project Id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly project?: string;
  /**
   * Iteration Id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly iteration?: string;
  /**
   * Date this prediction was created.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly created?: Date;
  /**
   * List of predictions.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly predictions?: Prediction[];
}

/**
 * An interface representing CustomVisionError.
 */
export interface CustomVisionError {
  /**
   * The error code. Possible values include: 'NoError', 'BadRequest',
   * 'BadRequestExceededBatchSize', 'BadRequestNotSupported', 'BadRequestInvalidIds',
   * 'BadRequestProjectName', 'BadRequestProjectNameNotUnique', 'BadRequestProjectDescription',
   * 'BadRequestProjectUnknownDomain', 'BadRequestProjectUnknownClassification',
   * 'BadRequestProjectUnsupportedDomainTypeChange', 'BadRequestProjectUnsupportedExportPlatform',
   * 'BadRequestIterationName', 'BadRequestIterationNameNotUnique',
   * 'BadRequestIterationDescription', 'BadRequestIterationIsNotTrained',
   * 'BadRequestWorkspaceCannotBeModified', 'BadRequestWorkspaceNotDeletable', 'BadRequestTagName',
   * 'BadRequestTagNameNotUnique', 'BadRequestTagDescription', 'BadRequestTagType',
   * 'BadRequestMultipleNegativeTag', 'BadRequestImageTags', 'BadRequestImageRegions',
   * 'BadRequestNegativeAndRegularTagOnSameImage', 'BadRequestRequiredParamIsNull',
   * 'BadRequestIterationIsPublished', 'BadRequestInvalidPublishName',
   * 'BadRequestInvalidPublishTarget', 'BadRequestUnpublishFailed', 'BadRequestSubscriptionApi',
   * 'BadRequestExceedProjectLimit', 'BadRequestExceedIterationPerProjectLimit',
   * 'BadRequestExceedTagPerProjectLimit', 'BadRequestExceedTagPerImageLimit',
   * 'BadRequestExceededQuota', 'BadRequestCannotMigrateProjectWithName',
   * 'BadRequestNotLimitedTrial', 'BadRequestImageBatch', 'BadRequestImageStream',
   * 'BadRequestImageUrl', 'BadRequestImageFormat', 'BadRequestImageSizeBytes',
   * 'BadRequestImageExceededCount', 'BadRequestTrainingNotNeeded',
   * 'BadRequestTrainingNotNeededButTrainingPipelineUpdated', 'BadRequestTrainingValidationFailed',
   * 'BadRequestClassificationTrainingValidationFailed',
   * 'BadRequestMultiClassClassificationTrainingValidationFailed',
   * 'BadRequestMultiLabelClassificationTrainingValidationFailed',
   * 'BadRequestDetectionTrainingValidationFailed', 'BadRequestTrainingAlreadyInProgress',
   * 'BadRequestDetectionTrainingNotAllowNegativeTag', 'BadRequestInvalidEmailAddress',
   * 'BadRequestDomainNotSupportedForAdvancedTraining',
   * 'BadRequestExportPlatformNotSupportedForAdvancedTraining',
   * 'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining',
   * 'BadRequestExportValidationFailed', 'BadRequestExportAlreadyInProgress',
   * 'BadRequestPredictionIdsMissing', 'BadRequestPredictionIdsExceededCount',
   * 'BadRequestPredictionTagsExceededCount', 'BadRequestPredictionResultsExceededCount',
   * 'BadRequestPredictionInvalidApplicationName', 'BadRequestPredictionInvalidQueryParameters',
   * 'BadRequestInvalid', 'UnsupportedMediaType', 'Forbidden', 'ForbiddenUser',
   * 'ForbiddenUserResource', 'ForbiddenUserSignupDisabled',
   * 'ForbiddenUserSignupAllowanceExceeded', 'ForbiddenUserDoesNotExist', 'ForbiddenUserDisabled',
   * 'ForbiddenUserInsufficientCapability', 'ForbiddenDRModeEnabled', 'ForbiddenInvalid',
   * 'NotFound', 'NotFoundProject', 'NotFoundProjectDefaultIteration', 'NotFoundIteration',
   * 'NotFoundIterationPerformance', 'NotFoundTag', 'NotFoundImage', 'NotFoundDomain',
   * 'NotFoundApimSubscription', 'NotFoundInvalid', 'Conflict', 'ConflictInvalid', 'ErrorUnknown',
   * 'ErrorProjectInvalidWorkspace', 'ErrorProjectInvalidPipelineConfiguration',
   * 'ErrorProjectInvalidDomain', 'ErrorProjectTrainingRequestFailed',
   * 'ErrorProjectExportRequestFailed', 'ErrorFeaturizationServiceUnavailable',
   * 'ErrorFeaturizationQueueTimeout', 'ErrorFeaturizationInvalidFeaturizer',
   * 'ErrorFeaturizationAugmentationUnavailable', 'ErrorFeaturizationUnrecognizedJob',
   * 'ErrorFeaturizationAugmentationError', 'ErrorExporterInvalidPlatform',
   * 'ErrorExporterInvalidFeaturizer', 'ErrorExporterInvalidClassifier',
   * 'ErrorPredictionServiceUnavailable', 'ErrorPredictionModelNotFound',
   * 'ErrorPredictionModelNotCached', 'ErrorPrediction', 'ErrorPredictionStorage',
   * 'ErrorRegionProposal', 'ErrorInvalid'
   */
  code: CustomVisionErrorCodes;
  /**
   * A message explaining the error reported by the service.
   */
  message: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientClassifyImageUrlOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientClassifyImageOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientClassifyImageUrlWithNoStoreOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientClassifyImageWithNoStoreOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientDetectImageUrlOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientDetectImageOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientDetectImageUrlWithNoStoreOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Optional Parameters.
 */
export interface PredictionAPIClientDetectImageWithNoStoreOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. Specifies the name of application using the endpoint.
   */
  application?: string;
}

/**
 * Defines values for CustomVisionErrorCodes.
 * Possible values include: 'NoError', 'BadRequest', 'BadRequestExceededBatchSize',
 * 'BadRequestNotSupported', 'BadRequestInvalidIds', 'BadRequestProjectName',
 * 'BadRequestProjectNameNotUnique', 'BadRequestProjectDescription',
 * 'BadRequestProjectUnknownDomain', 'BadRequestProjectUnknownClassification',
 * 'BadRequestProjectUnsupportedDomainTypeChange', 'BadRequestProjectUnsupportedExportPlatform',
 * 'BadRequestIterationName', 'BadRequestIterationNameNotUnique', 'BadRequestIterationDescription',
 * 'BadRequestIterationIsNotTrained', 'BadRequestWorkspaceCannotBeModified',
 * 'BadRequestWorkspaceNotDeletable', 'BadRequestTagName', 'BadRequestTagNameNotUnique',
 * 'BadRequestTagDescription', 'BadRequestTagType', 'BadRequestMultipleNegativeTag',
 * 'BadRequestImageTags', 'BadRequestImageRegions', 'BadRequestNegativeAndRegularTagOnSameImage',
 * 'BadRequestRequiredParamIsNull', 'BadRequestIterationIsPublished',
 * 'BadRequestInvalidPublishName', 'BadRequestInvalidPublishTarget', 'BadRequestUnpublishFailed',
 * 'BadRequestSubscriptionApi', 'BadRequestExceedProjectLimit',
 * 'BadRequestExceedIterationPerProjectLimit', 'BadRequestExceedTagPerProjectLimit',
 * 'BadRequestExceedTagPerImageLimit', 'BadRequestExceededQuota',
 * 'BadRequestCannotMigrateProjectWithName', 'BadRequestNotLimitedTrial', 'BadRequestImageBatch',
 * 'BadRequestImageStream', 'BadRequestImageUrl', 'BadRequestImageFormat',
 * 'BadRequestImageSizeBytes', 'BadRequestImageExceededCount', 'BadRequestTrainingNotNeeded',
 * 'BadRequestTrainingNotNeededButTrainingPipelineUpdated', 'BadRequestTrainingValidationFailed',
 * 'BadRequestClassificationTrainingValidationFailed',
 * 'BadRequestMultiClassClassificationTrainingValidationFailed',
 * 'BadRequestMultiLabelClassificationTrainingValidationFailed',
 * 'BadRequestDetectionTrainingValidationFailed', 'BadRequestTrainingAlreadyInProgress',
 * 'BadRequestDetectionTrainingNotAllowNegativeTag', 'BadRequestInvalidEmailAddress',
 * 'BadRequestDomainNotSupportedForAdvancedTraining',
 * 'BadRequestExportPlatformNotSupportedForAdvancedTraining',
 * 'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining',
 * 'BadRequestExportValidationFailed', 'BadRequestExportAlreadyInProgress',
 * 'BadRequestPredictionIdsMissing', 'BadRequestPredictionIdsExceededCount',
 * 'BadRequestPredictionTagsExceededCount', 'BadRequestPredictionResultsExceededCount',
 * 'BadRequestPredictionInvalidApplicationName', 'BadRequestPredictionInvalidQueryParameters',
 * 'BadRequestInvalid', 'UnsupportedMediaType', 'Forbidden', 'ForbiddenUser',
 * 'ForbiddenUserResource', 'ForbiddenUserSignupDisabled', 'ForbiddenUserSignupAllowanceExceeded',
 * 'ForbiddenUserDoesNotExist', 'ForbiddenUserDisabled', 'ForbiddenUserInsufficientCapability',
 * 'ForbiddenDRModeEnabled', 'ForbiddenInvalid', 'NotFound', 'NotFoundProject',
 * 'NotFoundProjectDefaultIteration', 'NotFoundIteration', 'NotFoundIterationPerformance',
 * 'NotFoundTag', 'NotFoundImage', 'NotFoundDomain', 'NotFoundApimSubscription', 'NotFoundInvalid',
 * 'Conflict', 'ConflictInvalid', 'ErrorUnknown', 'ErrorProjectInvalidWorkspace',
 * 'ErrorProjectInvalidPipelineConfiguration', 'ErrorProjectInvalidDomain',
 * 'ErrorProjectTrainingRequestFailed', 'ErrorProjectExportRequestFailed',
 * 'ErrorFeaturizationServiceUnavailable', 'ErrorFeaturizationQueueTimeout',
 * 'ErrorFeaturizationInvalidFeaturizer', 'ErrorFeaturizationAugmentationUnavailable',
 * 'ErrorFeaturizationUnrecognizedJob', 'ErrorFeaturizationAugmentationError',
 * 'ErrorExporterInvalidPlatform', 'ErrorExporterInvalidFeaturizer',
 * 'ErrorExporterInvalidClassifier', 'ErrorPredictionServiceUnavailable',
 * 'ErrorPredictionModelNotFound', 'ErrorPredictionModelNotCached', 'ErrorPrediction',
 * 'ErrorPredictionStorage', 'ErrorRegionProposal', 'ErrorInvalid'
 * @readonly
 * @enum {string}
 */
export type CustomVisionErrorCodes = 'NoError' | 'BadRequest' | 'BadRequestExceededBatchSize' | 'BadRequestNotSupported' | 'BadRequestInvalidIds' | 'BadRequestProjectName' | 'BadRequestProjectNameNotUnique' | 'BadRequestProjectDescription' | 'BadRequestProjectUnknownDomain' | 'BadRequestProjectUnknownClassification' | 'BadRequestProjectUnsupportedDomainTypeChange' | 'BadRequestProjectUnsupportedExportPlatform' | 'BadRequestIterationName' | 'BadRequestIterationNameNotUnique' | 'BadRequestIterationDescription' | 'BadRequestIterationIsNotTrained' | 'BadRequestWorkspaceCannotBeModified' | 'BadRequestWorkspaceNotDeletable' | 'BadRequestTagName' | 'BadRequestTagNameNotUnique' | 'BadRequestTagDescription' | 'BadRequestTagType' | 'BadRequestMultipleNegativeTag' | 'BadRequestImageTags' | 'BadRequestImageRegions' | 'BadRequestNegativeAndRegularTagOnSameImage' | 'BadRequestRequiredParamIsNull' | 'BadRequestIterationIsPublished' | 'BadRequestInvalidPublishName' | 'BadRequestInvalidPublishTarget' | 'BadRequestUnpublishFailed' | 'BadRequestSubscriptionApi' | 'BadRequestExceedProjectLimit' | 'BadRequestExceedIterationPerProjectLimit' | 'BadRequestExceedTagPerProjectLimit' | 'BadRequestExceedTagPerImageLimit' | 'BadRequestExceededQuota' | 'BadRequestCannotMigrateProjectWithName' | 'BadRequestNotLimitedTrial' | 'BadRequestImageBatch' | 'BadRequestImageStream' | 'BadRequestImageUrl' | 'BadRequestImageFormat' | 'BadRequestImageSizeBytes' | 'BadRequestImageExceededCount' | 'BadRequestTrainingNotNeeded' | 'BadRequestTrainingNotNeededButTrainingPipelineUpdated' | 'BadRequestTrainingValidationFailed' | 'BadRequestClassificationTrainingValidationFailed' | 'BadRequestMultiClassClassificationTrainingValidationFailed' | 'BadRequestMultiLabelClassificationTrainingValidationFailed' | 'BadRequestDetectionTrainingValidationFailed' | 'BadRequestTrainingAlreadyInProgress' | 'BadRequestDetectionTrainingNotAllowNegativeTag' | 'BadRequestInvalidEmailAddress' | 'BadRequestDomainNotSupportedForAdvancedTraining' | 'BadRequestExportPlatformNotSupportedForAdvancedTraining' | 'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining' | 'BadRequestExportValidationFailed' | 'BadRequestExportAlreadyInProgress' | 'BadRequestPredictionIdsMissing' | 'BadRequestPredictionIdsExceededCount' | 'BadRequestPredictionTagsExceededCount' | 'BadRequestPredictionResultsExceededCount' | 'BadRequestPredictionInvalidApplicationName' | 'BadRequestPredictionInvalidQueryParameters' | 'BadRequestInvalid' | 'UnsupportedMediaType' | 'Forbidden' | 'ForbiddenUser' | 'ForbiddenUserResource' | 'ForbiddenUserSignupDisabled' | 'ForbiddenUserSignupAllowanceExceeded' | 'ForbiddenUserDoesNotExist' | 'ForbiddenUserDisabled' | 'ForbiddenUserInsufficientCapability' | 'ForbiddenDRModeEnabled' | 'ForbiddenInvalid' | 'NotFound' | 'NotFoundProject' | 'NotFoundProjectDefaultIteration' | 'NotFoundIteration' | 'NotFoundIterationPerformance' | 'NotFoundTag' | 'NotFoundImage' | 'NotFoundDomain' | 'NotFoundApimSubscription' | 'NotFoundInvalid' | 'Conflict' | 'ConflictInvalid' | 'ErrorUnknown' | 'ErrorProjectInvalidWorkspace' | 'ErrorProjectInvalidPipelineConfiguration' | 'ErrorProjectInvalidDomain' | 'ErrorProjectTrainingRequestFailed' | 'ErrorProjectExportRequestFailed' | 'ErrorFeaturizationServiceUnavailable' | 'ErrorFeaturizationQueueTimeout' | 'ErrorFeaturizationInvalidFeaturizer' | 'ErrorFeaturizationAugmentationUnavailable' | 'ErrorFeaturizationUnrecognizedJob' | 'ErrorFeaturizationAugmentationError' | 'ErrorExporterInvalidPlatform' | 'ErrorExporterInvalidFeaturizer' | 'ErrorExporterInvalidClassifier' | 'ErrorPredictionServiceUnavailable' | 'ErrorPredictionModelNotFound' | 'ErrorPredictionModelNotCached' | 'ErrorPrediction' | 'ErrorPredictionStorage' | 'ErrorRegionProposal' | 'ErrorInvalid';

/**
 * Contains response data for the classifyImageUrl operation.
 */
export type ClassifyImageUrlResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the classifyImage operation.
 */
export type ClassifyImageResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the classifyImageUrlWithNoStore operation.
 */
export type ClassifyImageUrlWithNoStoreResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the classifyImageWithNoStore operation.
 */
export type ClassifyImageWithNoStoreResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the detectImageUrl operation.
 */
export type DetectImageUrlResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the detectImage operation.
 */
export type DetectImageResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the detectImageUrlWithNoStore operation.
 */
export type DetectImageUrlWithNoStoreResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};

/**
 * Contains response data for the detectImageWithNoStore operation.
 */
export type DetectImageWithNoStoreResponse = ImagePrediction & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ImagePrediction;
    };
};