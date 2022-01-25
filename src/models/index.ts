import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export interface AddCategoriesParams {
  categories?: AddCategoryParams[];
}

export interface AddCategoryParams {
  id?: string;
  name?: string;
}

export interface QueryCategoriesResult {
  categories?: QueryCategoryResult[];
}

export interface QueryCategoryResult {
  id?: string;
  name?: string;
}

export interface QueryContextsResult {
  contexts?: QueryContextResult[];
}

export interface QueryContextResult {
  id?: string;
  text?: string;
  correlationId?: string;
  mediaType?: string;
  projectName?: string;
  hasData?: boolean;
}

export interface AcceptInvitationParams {
  invitingUserName?: string;
  projectName?: string;
}

export interface RejectInvitationParams {
  invitingUserName?: string;
  projectName?: string;
}

export interface CancelInvitationParams {
  invitedUserName?: string;
  projectName?: string;
}

export interface SendInvitationParams {
  invitedUserName?: string;
}

export interface QueryInvitationsResult {
  invitationsPending?: QueryInvitationSentResult[];
  invitationsReceived?: QueryInvitationReceivedResult[];
}

export interface QueryInvitationSentResult {
  projectName?: string;
  invitedUser?: string;
}

export interface QueryInvitationReceivedResult {
  projectName?: string;
  invitingUser?: string;
}

export interface QueryProjectsResult {
  projects?: QueryProjectResult[];
}

export interface QueryProjectResult {
  name?: string;
  owner?: string;
  canContribute?: boolean;
}

export interface AddTranslationsParams {
  /** Controls whether to add translations if only a part of them could be inserted (because the correlation ids of others are already added for the project) */
  allowPartialAdd?: boolean;
  translations?: AddTranslationParams[];
}

export interface AddTranslationParams {
  source?: string;
  target?: string;
  correlationId?: string;
  categoryId?: string;
  translationNotes?: AddTranslationNotesParams;
  /** Dictionary of <any> */
  associatedData?: { [propertyName: string]: any };
}

export interface AddTranslationNotesParams {
  normal?: IoNormalNote[];
  gloss?: IoGlossNote[];
}

export interface IoNormalNote {
  sideText?: string;
  text?: string;
}

export interface IoGlossNote {
  foreign?: string;
  explanation?: string;
}

export interface AddTranslationsResult {
  notAdded?: string[];
}

export interface QueryTranslationsResult {
  translations?: QueryTranslationResult[];
  paginationToken?: string;
  queryTime?: Date;
}

export interface QueryTranslationResult {
  projectName?: string;
  source?: string;
  target?: string;
  highlighterSequence?: string;
  category?: string;
  categoryId?: string;
  correlationId?: string;
  translationNotes?: QueryTranslationNotesResult;
  /** Dictionary of <any> */
  associatedData?: { [propertyName: string]: any };
}

export interface QueryTranslationNotesResult {
  normal?: IoNormalNote[];
  gloss?: IoGlossNote[];
}

export interface UpdateTranslationParams {
  source?: string;
  target?: string;
  categoryId?: string;
  translationNotes?: UpdateTranslationNotesParams;
  /** Dictionary of <any> */
  associatedData?: { [propertyName: string]: any };
  lastQueryTime?: Date;
}

export interface UpdateTranslationNotesParams {
  normal?: IoNormalNote[];
  gloss?: IoGlossNote[];
}

export interface Paths562MamMemContextsPostRequestbodyContentMultipartFormDataSchema {
  id?: string;
  projectName?: string;
  contentTypeOverride?: string;
  correlationId?: string;
  content?: coreRestPipeline.RequestBodyType;
  text?: string;
}

/** Optional parameters. */
export interface AddCategoriesOptionalParams
  extends coreClient.OperationOptions {
  body?: AddCategoriesParams;
  projectName?: string;
}

/** Contains response data for the addCategories operation. */
export type AddCategoriesResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DeleteCategoryOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  categoryId?: string;
}

/** Contains response data for the deleteCategory operation. */
export type DeleteCategoryResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GetCategoriesOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
}

/** Contains response data for the getCategories operation. */
export type GetCategoriesResponse = QueryCategoriesResult;

/** Optional parameters. */
export interface AddContextOptionalParams extends coreClient.OperationOptions {
  id?: string;
  projectName?: string;
  contentTypeOverride?: string;
  correlationId?: string;
  content?: coreRestPipeline.RequestBodyType;
  text?: string;
}

/** Contains response data for the addContext operation. */
export type AddContextResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GetContextsOptionalParams extends coreClient.OperationOptions {
  id?: string;
  projectId?: string;
  correlationId?: string;
}

/** Contains response data for the getContexts operation. */
export type GetContextsResponse = QueryContextsResult;

/** Optional parameters. */
export interface DeleteContextOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  id?: string;
}

/** Contains response data for the deleteContext operation. */
export type DeleteContextResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GetContextDataOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
  ifModifiedSinceOverride?: Date;
}

/** Optional parameters. */
export interface AcceptInvitationOptionalParams
  extends coreClient.OperationOptions {
  body?: AcceptInvitationParams;
}

/** Contains response data for the acceptInvitation operation. */
export type AcceptInvitationResponse = Record<string, unknown>;

/** Optional parameters. */
export interface RejectInvitationOptionalParams
  extends coreClient.OperationOptions {
  body?: RejectInvitationParams;
}

/** Contains response data for the rejectInvitation operation. */
export type RejectInvitationResponse = Record<string, unknown>;

/** Optional parameters. */
export interface CancelInvitationOptionalParams
  extends coreClient.OperationOptions {
  body?: CancelInvitationParams;
}

/** Contains response data for the cancelInvitation operation. */
export type CancelInvitationResponse = Record<string, unknown>;

/** Optional parameters. */
export interface SendInvitationOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  body?: SendInvitationParams;
}

/** Contains response data for the sendInvitation operation. */
export type SendInvitationResponse = Record<string, unknown>;

/** Optional parameters. */
export interface QueryInvitationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryInvitations operation. */
export type QueryInvitationsResponse = QueryInvitationsResult;

/** Optional parameters. */
export interface RemoveContributorOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  contributorName?: string;
}

/** Contains response data for the removeContributor operation. */
export type RemoveContributorResponse = Record<string, unknown>;

/** Optional parameters. */
export interface AddProjectOptionalParams extends coreClient.OperationOptions {
  projectName?: string;
  publicallyReadable?: boolean;
}

/** Contains response data for the addProject operation. */
export type AddProjectResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DeleteProjectOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
}

/** Contains response data for the deleteProject operation. */
export type DeleteProjectResponse = Record<string, unknown>;

/** Optional parameters. */
export interface ListProjectsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listProjects operation. */
export type ListProjectsResponse = QueryProjectsResult;

/** Optional parameters. */
export interface AddTranslationsOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  body?: AddTranslationsParams;
}

/** Contains response data for the addTranslations operation. */
export type AddTranslationsResponse = AddTranslationsResult;

/** Optional parameters. */
export interface QueryOptionalParams extends coreClient.OperationOptions {
  /** The name of the project */
  projectName?: string;
  /** The prefix of the correlation id */
  correlationId?: string;
  /** Search query */
  query?: string;
  /** Translation category */
  category?: string;
  /** A pagination token that was returned from the previous query with the same set of parameters */
  paginationToken?: string;
  /** How many translations should be returned? Values above 250 are treated as if 250 was passed. */
  limit?: number;
  /** Return only the sentences which have corresponding translations */
  translatedOnly?: boolean;
}

/** Contains response data for the query operation. */
export type QueryResponse = QueryTranslationsResult;

/** Optional parameters. */
export interface DeleteTranslationOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  correlationId?: string;
}

/** Contains response data for the deleteTranslation operation. */
export type DeleteTranslationResponse = Record<string, unknown>;

/** Optional parameters. */
export interface UpdateTranslationOptionalParams
  extends coreClient.OperationOptions {
  projectName?: string;
  correlationId?: string;
  body?: UpdateTranslationParams;
}

/** Contains response data for the updateTranslation operation. */
export type UpdateTranslationResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DidacticalEnigmaMemOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
