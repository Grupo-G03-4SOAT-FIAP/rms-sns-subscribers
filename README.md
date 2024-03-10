# rms-sns-subscribers
A set of Lambda functions that processes Amazon SNS messages in the [RMS project](https://github.com/Grupo-G03-4SOAT-FIAP/rms-bff).

![AWS LAMBDA](https://img.shields.io/badge/AWS%20Lambda-FF9900.svg?style=for-the-badge&logo=AWS-Lambda&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

| Lambda Function           | CI Status                                                                                                                                                                                                   | CD Status          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| cliente-criado-subscriber | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-bff&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-bff) | [badge do CD aqui] |

> [!TIP]
> When you publish messages to your Amazon SNS topic, your Lambda function reads the contents of the message and outputs it to Amazon CloudWatch Logs.\
> _To learn more about Lambda using AWS Lambda with Amazon SNS please visit [Tutorial: Using AWS Lambda with Amazon Simple Notification Service](https://docs.aws.amazon.com/lambda/latest/dg/with-sns-example.html)._

## Pré-requisitos

Você deve ter instalado a [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), o [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) e possuir uma conta na AWS.

## Deploy the sample application

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## Use the SAM CLI to build and test locally

Build your application with the `sam build` command.

```bash
rms-sns-subscribers$ sam build
```

The SAM CLI installs dependencies defined in `<function-name>/package.json`, compiles TypeScript with esbuild, creates a deployment package, and saves it in the `.aws-sam/build` folder.

Test a single function by invoking it directly with a test event. An event is a JSON document that represents the input that the function receives from the event source. Test events are included in the `events` folder in this project.

Run functions locally and invoke them with the `sam local invoke` command.

```bash
rms-sns-subscribers$ sam local invoke HelloWorldFunction --event events/event.json
```

The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
rms-sns-subscribers$ sam local start-api
rms-sns-subscribers$ curl http://localhost:3000/
```

## Unit tests

Tests are defined in the `<function-name>/tests` folder in this project. Use NPM to install the [Jest test framework](https://jestjs.io/) and run unit tests.

```bash
rms-sns-subscribers$ cd function-name
function-name$ npm install
function-name$ npm run test
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
*SAM CLI, version 1.110.0*

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-sns-subscribers)
