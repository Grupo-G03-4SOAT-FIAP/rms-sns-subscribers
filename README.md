# rms-sns-subscribers
A set of Lambda functions that processes Amazon SNS messages in the [RMS project](https://github.com/Grupo-G03-4SOAT-FIAP/rms-bff).

[badge do CD aqui]
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-sns-subscribers&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-sns-subscribers)

![AWS LAMBDA](https://img.shields.io/badge/AWS%20Lambda-FF9900.svg?style=for-the-badge&logo=AWS-Lambda&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> [!TIP]
> When you publish messages to your Amazon SNS topic, your Lambda function reads the contents of the message and outputs it to Amazon CloudWatch Logs.\
> _To learn more about Lambda using AWS Lambda with Amazon SNS please visit [Tutorial: Using AWS Lambda with Amazon Simple Notification Service](https://docs.aws.amazon.com/lambda/latest/dg/with-sns-example.html)._

## Pré-requisitos

Você deve ter instalado a [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), o [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) e possuir uma conta na AWS.

### Políticas

Para que as Lambda functions possam acessar o Amazon Cognito é necessário criar uma Policy e anexa-la a Role da function Lambda.
> Para acessar a Role da function Lambda, acesse clique no nome da sua _Lambda function > Configuration > Permissions > Execution role > Role_ name no console da AWS.

<details>

<summary>Política de exemplo</summary>

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "cognito-idp:*", // All Cognito Identity actions (cognito-identity:*)
            "Resource": "arn:aws:cognito-idp:${Region}:${Account}:userpool/${UserPoolId}" // ARN do User pool no Amazon Cognito
        }
    ]
}
```

</details>

### Variáveis de ambiente

Algumas variáveis de ambiente são obrigatórias:

`USER_POOL_ID`: Você pode consultar o User pool ID no Console da AWS\
`USER_POOL_AWS_REGION`: O código da região do User pool do Amazon Cognito

> Para mais informações sobre como definir variáveis de ambiente no AWS Lambda visite a página [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).

## Use the SAM CLI to build and test locally

Build your application with the `sam build` command.

```bash
rms-sns-subscribers$ sam build
```

The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
rms-sns-subscribers$ sam local start-api
rms-sns-subscribers$ curl http://localhost:3000/
```

## Deploy the sample application

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## Unit tests

Tests are defined in the `hello-world/tests` folder in this project. Use NPM to install the [Mocha test framework](https://mochajs.org/) and run unit tests.

```bash
rms-sns-subscribers$ cd hello-world
hello-world$ npm install
hello-world$ npm run test
```

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
sam delete --stack-name rms-sns-subscribers
```

## Projetos relacionados

BFF do Restaurant Management System (RMS)\
https://github.com/Grupo-G03-4SOAT-FIAP/rms-bff

Amazon Cognito Lambda triggers\
https://github.com/Grupo-G03-4SOAT-FIAP/rms-cognito-triggers

## Requisitos

*aws-cli/2.15.10*\
*SAM CLI, version 1.110.0*\
*Node.js 20*

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-sns-subscribers)
