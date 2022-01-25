import * as coreClient from "@azure/core-client";

export const AddCategoriesParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCategoriesParams",
    modelProperties: {
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AddCategoryParams"
            }
          }
        }
      }
    }
  }
};

export const AddCategoryParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCategoryParams",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryCategoriesResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryCategoriesResult",
    modelProperties: {
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryCategoryResult"
            }
          }
        }
      }
    }
  }
};

export const QueryCategoryResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryCategoryResult",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryContextsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryContextsResult",
    modelProperties: {
      contexts: {
        serializedName: "contexts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryContextResult"
            }
          }
        }
      }
    }
  }
};

export const QueryContextResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryContextResult",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      correlationId: {
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      mediaType: {
        serializedName: "mediaType",
        type: {
          name: "String"
        }
      },
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      },
      hasData: {
        serializedName: "hasData",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AcceptInvitationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcceptInvitationParams",
    modelProperties: {
      invitingUserName: {
        serializedName: "invitingUserName",
        type: {
          name: "String"
        }
      },
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RejectInvitationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RejectInvitationParams",
    modelProperties: {
      invitingUserName: {
        serializedName: "invitingUserName",
        type: {
          name: "String"
        }
      },
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CancelInvitationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CancelInvitationParams",
    modelProperties: {
      invitedUserName: {
        serializedName: "invitedUserName",
        type: {
          name: "String"
        }
      },
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendInvitationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendInvitationParams",
    modelProperties: {
      invitedUserName: {
        serializedName: "invitedUserName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryInvitationsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryInvitationsResult",
    modelProperties: {
      invitationsPending: {
        serializedName: "invitationsPending",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryInvitationSentResult"
            }
          }
        }
      },
      invitationsReceived: {
        serializedName: "invitationsReceived",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryInvitationReceivedResult"
            }
          }
        }
      }
    }
  }
};

export const QueryInvitationSentResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryInvitationSentResult",
    modelProperties: {
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      },
      invitedUser: {
        serializedName: "invitedUser",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryInvitationReceivedResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryInvitationReceivedResult",
    modelProperties: {
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      },
      invitingUser: {
        serializedName: "invitingUser",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryProjectsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryProjectsResult",
    modelProperties: {
      projects: {
        serializedName: "projects",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryProjectResult"
            }
          }
        }
      }
    }
  }
};

export const QueryProjectResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryProjectResult",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      canContribute: {
        serializedName: "canContribute",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AddTranslationsParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddTranslationsParams",
    modelProperties: {
      allowPartialAdd: {
        serializedName: "allowPartialAdd",
        type: {
          name: "Boolean"
        }
      },
      translations: {
        serializedName: "translations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AddTranslationParams"
            }
          }
        }
      }
    }
  }
};

export const AddTranslationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddTranslationParams",
    modelProperties: {
      source: {
        serializedName: "source",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      correlationId: {
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      categoryId: {
        serializedName: "categoryId",
        type: {
          name: "Uuid"
        }
      },
      translationNotes: {
        serializedName: "translationNotes",
        type: {
          name: "Composite",
          className: "AddTranslationNotesParams"
        }
      },
      associatedData: {
        serializedName: "associatedData",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AddTranslationNotesParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddTranslationNotesParams",
    modelProperties: {
      normal: {
        serializedName: "normal",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IoNormalNote"
            }
          }
        }
      },
      gloss: {
        serializedName: "gloss",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IoGlossNote"
            }
          }
        }
      }
    }
  }
};

export const IoNormalNote: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IoNormalNote",
    modelProperties: {
      sideText: {
        serializedName: "sideText",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IoGlossNote: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IoGlossNote",
    modelProperties: {
      foreign: {
        serializedName: "foreign",
        type: {
          name: "String"
        }
      },
      explanation: {
        serializedName: "explanation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddTranslationsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddTranslationsResult",
    modelProperties: {
      notAdded: {
        serializedName: "notAdded",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const QueryTranslationsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryTranslationsResult",
    modelProperties: {
      translations: {
        serializedName: "translations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryTranslationResult"
            }
          }
        }
      },
      paginationToken: {
        serializedName: "paginationToken",
        type: {
          name: "String"
        }
      },
      queryTime: {
        serializedName: "queryTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const QueryTranslationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryTranslationResult",
    modelProperties: {
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      },
      source: {
        serializedName: "source",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      highlighterSequence: {
        serializedName: "highlighterSequence",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      categoryId: {
        serializedName: "categoryId",
        type: {
          name: "Uuid"
        }
      },
      correlationId: {
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      translationNotes: {
        serializedName: "translationNotes",
        type: {
          name: "Composite",
          className: "QueryTranslationNotesResult"
        }
      },
      associatedData: {
        serializedName: "associatedData",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const QueryTranslationNotesResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryTranslationNotesResult",
    modelProperties: {
      normal: {
        serializedName: "normal",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IoNormalNote"
            }
          }
        }
      },
      gloss: {
        serializedName: "gloss",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IoGlossNote"
            }
          }
        }
      }
    }
  }
};

export const UpdateTranslationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateTranslationParams",
    modelProperties: {
      source: {
        serializedName: "source",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      categoryId: {
        serializedName: "categoryId",
        type: {
          name: "Uuid"
        }
      },
      translationNotes: {
        serializedName: "translationNotes",
        type: {
          name: "Composite",
          className: "UpdateTranslationNotesParams"
        }
      },
      associatedData: {
        serializedName: "associatedData",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      lastQueryTime: {
        serializedName: "lastQueryTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateTranslationNotesParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateTranslationNotesParams",
    modelProperties: {
      normal: {
        serializedName: "normal",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IoNormalNote"
            }
          }
        }
      },
      gloss: {
        serializedName: "gloss",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IoGlossNote"
            }
          }
        }
      }
    }
  }
};

export const Paths562MamMemContextsPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths562MamMemContextsPostRequestbodyContentMultipartFormDataSchema",
    modelProperties: {
      id: {
        serializedName: "Id",
        type: {
          name: "String"
        }
      },
      projectName: {
        serializedName: "ProjectName",
        type: {
          name: "String"
        }
      },
      contentTypeOverride: {
        serializedName: "ContentTypeOverride",
        type: {
          name: "String"
        }
      },
      correlationId: {
        serializedName: "CorrelationId",
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "Content",
        type: {
          name: "Stream"
        }
      },
      text: {
        serializedName: "Text",
        type: {
          name: "String"
        }
      }
    }
  }
};
