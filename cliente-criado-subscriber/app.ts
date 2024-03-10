import { SNSEvent, SNSEventRecord } from 'aws-lambda';
import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: SNSEvent) => {
    for (const record of event.Records) {
        await processMessageAsync(record);
    }
    console.info("done");
};

async function processMessageAsync(record: SNSEventRecord) {
    try {
        const message = JSON.parse(record.Sns.Message)
        const usuario = message;
        await criarUsuario(usuario) // 
        console.log(`Processed message ${message}`);
        await Promise.resolve(1); //Placeholder for actual async work
    } catch (err) {
        console.error("An error occurred");
        throw err;
    }
}

async function criarUsuario(usuario: any) {
    console.log("Tentando criar usuário no Amazon Cognito...");

    console.debug(`Dados do usuário: ${JSON.stringify(usuario)}`);
    console.debug(`USER_POOL_ID: ${process.env.USER_POOL_ID}`);
    console.debug(`USER_POOL_AWS_REGION: ${process.env.USER_POOL_AWS_REGION}`);

    const cliente = usuario;

    const userPoolId = process.env.USER_POOL_ID; // Você pode consultar o User pool ID no Console da AWS

    let region = process.env.USER_POOL_AWS_REGION;

    const config = {
        region: region
    }

    const client = new CognitoIdentityProviderClient(config);

    // This request submits a value for all possible parameters for AdminCreateUser.
    const createUserInput = {
        "Username": cliente._cpf,
        "UserAttributes": [
            {
                "Name": "name",
                "Value": cliente._nome
            },
            {
                "Name": "email",
                "Value": cliente._email // User email should be empty or same as username, since username attribute is email.
            }
        ],
        "TemporaryPassword": "This-is-my-test-99!",
        "UserPoolId": userPoolId
    };

    // Creates a new user in the specified user pool.
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cognito-identity-provider/command/AdminCreateUserCommand/

    const command = new AdminCreateUserCommand(createUserInput);
    const response = await client.send(command);

    console.log(`Usuário registrado com sucesso no User Pool Id ${userPoolId} no Amazon Cognito.`);
    console.log(response);
}

// Baseado no exemplo em
// https://docs.aws.amazon.com/pt_br/lambda/latest/dg/with-sns-example.html#with-sns-example-create-test-function
