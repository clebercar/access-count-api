APP_SECRET="{{ getv "/app_secret" }}"

#DATABASE
MONGO_URL="{{ getv "/mongo_url" }}"

#AWS
AWS_ACCESS_KEY_ID="{{ getv "/aws_access_key_id" }}"
AWS_SECRET_ACCESS_KEY="{{ getv "/aws_secret_access_key" }}"
AWS_REGION="{{ getv "/aws_region" }}"

#COUNT_API
COUNT_API_URL="{{ getv "/count_api_url" }}
COUNT_API_NAMESPACE="{{ getv "/count_api_namespace" }}
COUNT_API_SECRET_KEY="{{ getv "/count_api_secret_key" }}

#SWAGGER
ENABLE_DOCS="{{ getv "/enable_docs" }}"
