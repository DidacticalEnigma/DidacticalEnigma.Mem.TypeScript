import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { DidacticalEnigmaMemContext } from "./didacticalEnigmaMemContext";
import {
  DidacticalEnigmaMemOptionalParams,
  AddCategoriesOptionalParams,
  AddCategoriesResponse,
  DeleteCategoryOptionalParams,
  DeleteCategoryResponse,
  GetCategoriesOptionalParams,
  GetCategoriesResponse,
  AddContextOptionalParams,
  AddContextResponse,
  GetContextsOptionalParams,
  GetContextsResponse,
  DeleteContextOptionalParams,
  DeleteContextResponse,
  GetContextDataOptionalParams,
  AcceptInvitationOptionalParams,
  AcceptInvitationResponse,
  RejectInvitationOptionalParams,
  RejectInvitationResponse,
  CancelInvitationOptionalParams,
  CancelInvitationResponse,
  SendInvitationOptionalParams,
  SendInvitationResponse,
  QueryInvitationsOptionalParams,
  QueryInvitationsResponse,
  RemoveContributorOptionalParams,
  RemoveContributorResponse,
  AddProjectOptionalParams,
  AddProjectResponse,
  DeleteProjectOptionalParams,
  DeleteProjectResponse,
  ListProjectsOptionalParams,
  ListProjectsResponse,
  AddTranslationsOptionalParams,
  AddTranslationsResponse,
  QueryOptionalParams,
  QueryResponse,
  DeleteTranslationOptionalParams,
  DeleteTranslationResponse,
  UpdateTranslationOptionalParams,
  UpdateTranslationResponse
} from "./models";

export class DidacticalEnigmaMem extends DidacticalEnigmaMemContext {
  /**
   * Initializes a new instance of the DidacticalEnigmaMem class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    $host: string,
    options?: DidacticalEnigmaMemOptionalParams
  ) {
    super(credentials, $host, options);
  }

  /** @param options The options parameters. */
  addCategories(
    options?: AddCategoriesOptionalParams
  ): Promise<AddCategoriesResponse> {
    return this.sendOperationRequest({ options }, addCategoriesOperationSpec);
  }

  /** @param options The options parameters. */
  deleteCategory(
    options?: DeleteCategoryOptionalParams
  ): Promise<DeleteCategoryResponse> {
    return this.sendOperationRequest({ options }, deleteCategoryOperationSpec);
  }

  /** @param options The options parameters. */
  getCategories(
    options?: GetCategoriesOptionalParams
  ): Promise<GetCategoriesResponse> {
    return this.sendOperationRequest({ options }, getCategoriesOperationSpec);
  }

  /** @param options The options parameters. */
  addContext(options?: AddContextOptionalParams): Promise<AddContextResponse> {
    return this.sendOperationRequest({ options }, addContextOperationSpec);
  }

  /** @param options The options parameters. */
  getContexts(
    options?: GetContextsOptionalParams
  ): Promise<GetContextsResponse> {
    return this.sendOperationRequest({ options }, getContextsOperationSpec);
  }

  /** @param options The options parameters. */
  deleteContext(
    options?: DeleteContextOptionalParams
  ): Promise<DeleteContextResponse> {
    return this.sendOperationRequest({ options }, deleteContextOperationSpec);
  }

  /** @param options The options parameters. */
  getContextData(options?: GetContextDataOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, getContextDataOperationSpec);
  }

  /** @param options The options parameters. */
  acceptInvitation(
    options?: AcceptInvitationOptionalParams
  ): Promise<AcceptInvitationResponse> {
    return this.sendOperationRequest(
      { options },
      acceptInvitationOperationSpec
    );
  }

  /** @param options The options parameters. */
  rejectInvitation(
    options?: RejectInvitationOptionalParams
  ): Promise<RejectInvitationResponse> {
    return this.sendOperationRequest(
      { options },
      rejectInvitationOperationSpec
    );
  }

  /** @param options The options parameters. */
  cancelInvitation(
    options?: CancelInvitationOptionalParams
  ): Promise<CancelInvitationResponse> {
    return this.sendOperationRequest(
      { options },
      cancelInvitationOperationSpec
    );
  }

  /** @param options The options parameters. */
  sendInvitation(
    options?: SendInvitationOptionalParams
  ): Promise<SendInvitationResponse> {
    return this.sendOperationRequest({ options }, sendInvitationOperationSpec);
  }

  /** @param options The options parameters. */
  queryInvitations(
    options?: QueryInvitationsOptionalParams
  ): Promise<QueryInvitationsResponse> {
    return this.sendOperationRequest(
      { options },
      queryInvitationsOperationSpec
    );
  }

  /** @param options The options parameters. */
  removeContributor(
    options?: RemoveContributorOptionalParams
  ): Promise<RemoveContributorResponse> {
    return this.sendOperationRequest(
      { options },
      removeContributorOperationSpec
    );
  }

  /** @param options The options parameters. */
  addProject(options?: AddProjectOptionalParams): Promise<AddProjectResponse> {
    return this.sendOperationRequest({ options }, addProjectOperationSpec);
  }

  /** @param options The options parameters. */
  deleteProject(
    options?: DeleteProjectOptionalParams
  ): Promise<DeleteProjectResponse> {
    return this.sendOperationRequest({ options }, deleteProjectOperationSpec);
  }

  /** @param options The options parameters. */
  listProjects(
    options?: ListProjectsOptionalParams
  ): Promise<ListProjectsResponse> {
    return this.sendOperationRequest({ options }, listProjectsOperationSpec);
  }

  /** @param options The options parameters. */
  addTranslations(
    options?: AddTranslationsOptionalParams
  ): Promise<AddTranslationsResponse> {
    return this.sendOperationRequest({ options }, addTranslationsOperationSpec);
  }

  /**
   * Query for translations
   * @param options The options parameters.
   */
  query(options?: QueryOptionalParams): Promise<QueryResponse> {
    return this.sendOperationRequest({ options }, queryOperationSpec);
  }

  /** @param options The options parameters. */
  deleteTranslation(
    options?: DeleteTranslationOptionalParams
  ): Promise<DeleteTranslationResponse> {
    return this.sendOperationRequest(
      { options },
      deleteTranslationOperationSpec
    );
  }

  /** @param options The options parameters. */
  updateTranslation(
    options?: UpdateTranslationOptionalParams
  ): Promise<UpdateTranslationResponse> {
    return this.sendOperationRequest(
      { options },
      updateTranslationOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const addCategoriesOperationSpec: coreClient.OperationSpec = {
  path: "/mem/categories",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.projectName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteCategoryOperationSpec: coreClient.OperationSpec = {
  path: "/mem/categories",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName, Parameters.categoryId],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getCategoriesOperationSpec: coreClient.OperationSpec = {
  path: "/mem/categories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryCategoriesResult
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const addContextOperationSpec: coreClient.OperationSpec = {
  path: "/mem/contexts",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  formDataParameters: [
    Parameters.id,
    Parameters.projectName1,
    Parameters.contentTypeOverride,
    Parameters.correlationId,
    Parameters.content,
    Parameters.text
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  serializer
};
const getContextsOperationSpec: coreClient.OperationSpec = {
  path: "/mem/contexts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryContextsResult
    },
    401: {},
    403: {}
  },
  queryParameters: [
    Parameters.id1,
    Parameters.projectId,
    Parameters.correlationId1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteContextOperationSpec: coreClient.OperationSpec = {
  path: "/mem/contexts",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName, Parameters.id1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getContextDataOperationSpec: coreClient.OperationSpec = {
  path: "/mem/contexts/data",
  httpMethod: "GET",
  responses: { 200: {}, 401: {}, 403: {} },
  queryParameters: [Parameters.id1, Parameters.ifModifiedSinceOverride],
  urlParameters: [Parameters.$host],
  serializer
};
const acceptInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects/invitations/accept",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const rejectInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects/invitations/reject",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const cancelInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects/invitations/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const sendInvitationOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects/invitations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.projectName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const queryInvitationsOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects/invitations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryInvitationsResult
    },
    401: {},
    403: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const removeContributorOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects/contributors",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName, Parameters.contributorName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const addProjectOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName, Parameters.publicallyReadable],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteProjectOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listProjectsOperationSpec: coreClient.OperationSpec = {
  path: "/mem/projects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryProjectsResult
    },
    401: {},
    403: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const addTranslationsOperationSpec: coreClient.OperationSpec = {
  path: "/mem/translations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddTranslationsResult
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.projectName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const queryOperationSpec: coreClient.OperationSpec = {
  path: "/mem/translations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryTranslationsResult
    },
    401: {},
    403: {}
  },
  queryParameters: [
    Parameters.projectName,
    Parameters.correlationId1,
    Parameters.query,
    Parameters.category,
    Parameters.paginationToken,
    Parameters.limit,
    Parameters.translatedOnly
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteTranslationOperationSpec: coreClient.OperationSpec = {
  path: "/mem/translations",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  queryParameters: [Parameters.projectName, Parameters.correlationId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const updateTranslationOperationSpec: coreClient.OperationSpec = {
  path: "/mem/translations",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    401: {},
    403: {}
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.projectName, Parameters.correlationId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
