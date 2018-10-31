const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-12nl6c20nvum"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vtauh6prhj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rLrgz8E7P",
    APP_CLIENT_ID: "4bck43b8jdsnuas52dakfujoqq",
    IDENTITY_POOL_ID: "us-east-1:fc5cf615-9303-4778-9539-d8700f722a95"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-m115ufiz52ra"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://so3i8blwn7.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_dvLiBXOBS",
    APP_CLIENT_ID: "4cg4g8hu85qvo9df4s6m26blri",
    IDENTITY_POOL_ID: "us-east-1:5eb1ee56-b52d-4667-83c7-6f60540075b7"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};