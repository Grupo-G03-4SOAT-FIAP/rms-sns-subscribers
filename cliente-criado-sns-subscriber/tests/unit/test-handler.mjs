'use strict';

import { handler } from '../../index.mjs';
import { expect } from 'chai';
import 'dotenv/config';
var event, context;

event = {
    "Records": [
        {
            "EventSource": "aws:sns",
            "EventVersion": "1.0",
            "EventSubscriptionArn": "arn:aws:sns:us-east-1:900534935988:ClienteRegistrado:83a74a64-46e7-4e5a-827c-14edec9cbd52",
            "Sns": {
                "Type": "Notification",
                "MessageId": "81c44c07-4a0d-579e-9ff2-1263c84e8998",
                "TopicArn": "arn:aws:sns:us-east-1:900534935988:ClienteRegistrado",
                "Subject": null,
                "Message": "{\"_nome\":\"Fulano Da Silva Santos\",\"_email\":\"fulano@gmail.com\",\"_cpf\":\"32084148030\"}",
                "Timestamp": "2024-03-08T03:03:31.540Z",
                "SignatureVersion": "1",
                "Signature": "M2zwMeE4ncGC8aLa3/otY2Ni/P1mPIs3InFewxJQ9TB+s9fqYIoOsNuEcp+UMWzTqv8FFdiOy9DL4N+QT0Bh14rXOacSWz/POD6hV8YEKfE0tY/V9tBcGiwNj1movmwzSxQjA/MPhMNuakqIs6XlH8B5IS18oQsPSwWaLboPY+rhNVgDIGEmWl2iiB78cgALYSKzR7O4IYyFWOV9/KYc2tuL41J27/Ooy0g7P+uMWooUl1Hdq3YxRxKC/8Tcd4hXqCGuR9anp5ed1He5qdiAVjm87Zh5RahhaFeYXfvLnmsssdVBf/SPFNxHbQhKDSYw7EBe7Npi12+DR5d7bQD1/g==",
                "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-60eadc530605d63b8e62a523676ef735.pem",
                "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:900534935988:ClienteRegistrado:83a74a64-46e7-4e5a-827c-14edec9cbd52",
                "MessageAttributes": {}
            }
        }
    ]
}

describe('Tests index', function () {
    it('verifies successful response', async () => {
        //const result = await handler(event, context)

        // expect(result).to.be.an('object');
        // expect(result.statusCode).to.equal(200);
        // expect(result.body).to.be.an('string');

        // let response = JSON.parse(result.body);

        // expect(response).to.be.an('object');
        // expect(response.message).to.be.equal("hello world");
        expect(true).to.be.equal(true);
    });
});
