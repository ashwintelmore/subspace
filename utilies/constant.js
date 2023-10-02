
exports.errorMassge = {
  400: {
    code:400,
    name: "Bad Request",
    message: "The request could not be understood or was missing required parameters.",
  },
  401: {
    code:401,
    name: "Unauthorized",
    message: "Authentication failed or user does not have permissions for the requested operation.",
  },
  403: {
    code:403,
    name: "Forbidden",
    message: "The user is authenticated, but does not have permission to access the requested resource.",
  },
  404: {
    code:404,
    name: "Not Found",
    message: "The requested resource could not be found on the server.",
  },
  500: {
    code:500,
    name: "Internal Server Error",
    message: "An unexpected error occurred on the server.",
  }
};

exports.resMessage = {
  "FETCH_SUCCESS": {
    name: "FETCH_SUCCESS",
    desc: "Successfully fetch data",
  },
  "DATA_NOT_FOUND": {
    name: "DATA_NOT_FOUND",
    desc: "Data is not found",
  },
  "FIELD_REQUIRED": {
    name: "FIELD_REQUIRED",
    desc: "Some filed(s) is/are missing",
  }
};

