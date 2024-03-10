import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

export class AmazonCognitoService {
    static async criarUsuario(usuario: any): Promise<void> {
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

        console.log(`Usuário registrado com sucesso no Amazon Cognito no User Pool Id ${userPoolId}`);
        console.log(response);
    }
}