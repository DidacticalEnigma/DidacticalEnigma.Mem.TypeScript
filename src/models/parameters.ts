import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  AddCategoriesParams as AddCategoriesParamsMapper,
  AcceptInvitationParams as AcceptInvitationParamsMapper,
  RejectInvitationParams as RejectInvitationParamsMapper,
  CancelInvitationParams as CancelInvitationParamsMapper,
  SendInvitationParams as SendInvitationParamsMapper,
  AddTranslationsParams as AddTranslationsParamsMapper,
  UpdateTranslationParams as UpdateTranslationParamsMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AddCategoriesParamsMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const projectName: OperationQueryParameter = {
  parameterPath: ["options", "projectName"],
  mapper: {
    serializedName: "projectName",
    type: {
      name: "String"
    }
  }
};

export const categoryId: OperationQueryParameter = {
  parameterPath: ["options", "categoryId"],
  mapper: {
    serializedName: "categoryId",
    type: {
      name: "Uuid"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const id: OperationParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "Id",
    type: {
      name: "String"
    }
  }
};

export const projectName1: OperationParameter = {
  parameterPath: ["options", "projectName"],
  mapper: {
    serializedName: "ProjectName",
    type: {
      name: "String"
    }
  }
};

export const contentTypeOverride: OperationParameter = {
  parameterPath: ["options", "contentTypeOverride"],
  mapper: {
    serializedName: "ContentTypeOverride",
    type: {
      name: "String"
    }
  }
};

export const correlationId: OperationParameter = {
  parameterPath: ["options", "correlationId"],
  mapper: {
    serializedName: "CorrelationId",
    type: {
      name: "String"
    }
  }
};

export const content: OperationParameter = {
  parameterPath: ["options", "content"],
  mapper: {
    serializedName: "Content",
    type: {
      name: "Stream"
    }
  }
};

export const text: OperationParameter = {
  parameterPath: ["options", "text"],
  mapper: {
    serializedName: "Text",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const id1: OperationQueryParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "id",
    type: {
      name: "Uuid"
    }
  }
};

export const projectId: OperationQueryParameter = {
  parameterPath: ["options", "projectId"],
  mapper: {
    serializedName: "projectId",
    type: {
      name: "String"
    }
  }
};

export const correlationId1: OperationQueryParameter = {
  parameterPath: ["options", "correlationId"],
  mapper: {
    serializedName: "correlationId",
    type: {
      name: "String"
    }
  }
};

export const ifModifiedSinceOverride: OperationQueryParameter = {
  parameterPath: ["options", "ifModifiedSinceOverride"],
  mapper: {
    serializedName: "ifModifiedSinceOverride",
    type: {
      name: "DateTime"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AcceptInvitationParamsMapper
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: RejectInvitationParamsMapper
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: CancelInvitationParamsMapper
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: SendInvitationParamsMapper
};

export const contributorName: OperationQueryParameter = {
  parameterPath: ["options", "contributorName"],
  mapper: {
    serializedName: "contributorName",
    type: {
      name: "String"
    }
  }
};

export const publicallyReadable: OperationQueryParameter = {
  parameterPath: ["options", "publicallyReadable"],
  mapper: {
    serializedName: "publicallyReadable",
    type: {
      name: "Boolean"
    }
  }
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: AddTranslationsParamsMapper
};

export const query: OperationQueryParameter = {
  parameterPath: ["options", "query"],
  mapper: {
    serializedName: "query",
    type: {
      name: "String"
    }
  }
};

export const category: OperationQueryParameter = {
  parameterPath: ["options", "category"],
  mapper: {
    serializedName: "category",
    type: {
      name: "String"
    }
  }
};

export const paginationToken: OperationQueryParameter = {
  parameterPath: ["options", "paginationToken"],
  mapper: {
    serializedName: "paginationToken",
    type: {
      name: "String"
    }
  }
};

export const limit: OperationQueryParameter = {
  parameterPath: ["options", "limit"],
  mapper: {
    defaultValue: 50,
    serializedName: "limit",
    type: {
      name: "Number"
    }
  }
};

export const translatedOnly: OperationQueryParameter = {
  parameterPath: ["options", "translatedOnly"],
  mapper: {
    defaultValue: false,
    serializedName: "translatedOnly",
    type: {
      name: "Boolean"
    }
  }
};

export const body6: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UpdateTranslationParamsMapper
};
