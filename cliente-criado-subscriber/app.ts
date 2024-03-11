import { SNSEvent, SNSEventRecord } from 'aws-lambda';
import { AmazonCognitoService } from './cognito.service';
import 'dotenv/config'

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
        //await criarUsuario(usuario); // 
        await AmazonCognitoService.criarUsuario(usuario);
        console.log(`Processed message ${message}`);
        await Promise.resolve(1); //Placeholder for actual async work
    } catch (err) {
        console.error("An error occurred");
        throw err;
    }
}

// Baseado no exemplo em
// https://docs.aws.amazon.com/pt_br/lambda/latest/dg/with-sns-example.html#with-sns-example-create-test-function
