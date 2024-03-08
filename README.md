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

## Projetos relacionados

BFF do Restaurant Management System (RMS)\
https://github.com/Grupo-G03-4SOAT-FIAP/rms-bff

Amazon Cognito Lambda triggers\
https://github.com/Grupo-G03-4SOAT-FIAP/rms-cognito-triggers

## Requisitos

*aws-cli/2.15.10*\
*SAM CLI, version 1.110.0*

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-sns-subscribers)
