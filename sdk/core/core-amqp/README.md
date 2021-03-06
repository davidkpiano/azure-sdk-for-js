# Azure Core AMQP client library for AMQP operations

Azure Core AMQP is a library that provides common functionality for **Azure** Javascript
libraries that use [AMQP protocol](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-amqp-protocol-guide)
like the ones for Azure Service Bus and Azure Event Hubs.

## Getting started

### Installation

Install this library using npm as follows:

```bash
npm install @azure/core-amqp
```

**Note**: [`rhea-promise`](https://github.com/amqp/rhea-promise) is a peer dependency. You need to explicitly install this library as a dependency
in your application.

## Key concepts

Some of the key features of Azure Core AMQP library are:

- [Claims based Authorization](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-amqp-protocol-guide#claims-based-authorization)
- Request-Response link for [sending request and receiving response over AMQP](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-amqp-protocol-guide#amqp-management)
- A Data Transformer class to encode given data to an AMQP message and decode a given AMQP message. Useful for sending and receiving messages that are not of type Buffer.
- Error translation of AMQP error codes along with errors specific to Azure Service Bus and Azure Event Hubs.
- RetryPolicy for retrying a given operation if a retryable error was encountered.

## Examples

[Claims Based Authorization](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-amqp-protocol-guide#claims-based-authorization)
need to be done for every AMQP link that your application creates. The claims also has to be renewed periodically.
For more details on CBS, please see the [CBS Specification](https://www.oasis-open.org/committees/download.php/62097/amqp-cbs-v1.0-wd05.doc).

In the below examples, we use the Shared Key details present in the connection string to create a SAS token.
This token is then used to make a request on the \$cbs link to carry out Claims Based Authorization for a link to the given entity
in Azure Service Bus or Azure Event Hubs.

The examples below expect a connection string to a Azure Service Bus or Azure Event Hubs instance.
The entity path refers to an Event Hub name in case of Azure Event Hubs and a queue or a topic name
in case of Azure Service Bus.

## Create a sender link

In the below example, we first create a `ConnectionContext` which is used to carry out the claims
based authorization. Then, we create a sender link using the `ConnectionContext.connection` to
send a message.

```js
async function main() {
  const connectionConfig = ConnectionConfig.create(
    "your-connection-string-with-shared-key",
    "entity-path"
  );
  const connectionContext = ConnectionContextBase.create({
    config: connectionConfig,
    connectionProperties: {
      product: "product",
      userAgent: "/user-agent",
      version: "0.0.0"
    }
  });

  // Carry out the Claims Based Authorization
  await connectionContext.cbsSession.init();
  const token = await connectionContext.tokenCredential.getToken(audience);
  await connectionContext.cbsSession.negotiateClaim(audience, token, TokenType.CbsTokenTypeSas);

  // Create a sender
  const senderName = "your-sender-name";
  const senderOptions = {
    name: senderName,
    target: {
      // For an EventHub Sender bound to a partition, the address will be "<EventHubName>/Partitions/<PartitionId>"
      address: `${connectionConfig.entityPath}`
    },
    onError: (context) => {
      const senderError = context.sender && context.sender.error;
      if (senderError) {
        console.log("An error occurred for sender '%s': %O.", senderName, senderError);
      }
    },
    onSessionError: (context) => {
      const sessionError = context.session && context.session.error;
      if (sessionError) {
        console.log("An error occurred for session of sender '%s': %O.", senderName, sessionError);
      }
    }
  };
  const sender = await connectionContext.connection.createSender(senderOptions);

  // Send a message
  const delivery = await sender.send({ body: "your-message-body" });

  await sender.close();
  await connectionContext.connection.close();
}

main().catch((err) => console.log(err));
```

## Create a receiver link

In the below example, we first create a `ConnectionContext` which is used to carry out the claims
based authorization. Then, we create a receiver link using the `ConnectionContext.connection` to
receive messages for 30 seconds.

```js
async function main() {
  const connectionConfig = ConnectionConfig.create(
    "your-connection-string-with-shared-key",
    "entity-path"
  );
  const connectionContext = ConnectionContextBase.create({
    config: connectionConfig,
    connectionProperties: {
      product: "product",
      userAgent: "/user-agent",
      version: "0.0.0"
    }
  });

  // Carry out the Claims Based Authorization
  await connectionContext.cbsSession.init();
  const token = await connectionContext.tokenCredential.getToken(audience);
  await connectionContext.cbsSession.negotiateClaim(audience, token, TokenType.CbsTokenTypeSas);

  // Create a receiver
  const receiverName = "your-receiver-name";
  const filterClause = `amqp.annotation.x-opt-enqueued-time > '${Date.now() - 3600 * 1000}'`; // Get messages from the past hour
  const receiverAddress = `${connectionConfig.entityPath}/ConsumerGroups/$default/Partitions/0`; // For ServiceBus "<QueueName>"
  const receiverOptions = {
    name: receiverName,
    source: {
      address: receiverAddress,
      filter: {
        // May not be required for ServiceBus. The current example is for EventHubs.
        "apache.org:selector-filter:string": types.wrap_described(filterClause, 0x468c00000004)
      }
    },
    onError: (context) => {
      const receiverError = context.receiver && context.receiver.error;
      if (receiverError) {
        console.log("An error occurred for receiver '%s': %O.", receiverName, receiverError);
      }
    },
    onMessage: (context) => {
      console.log("Received message: %O", context.message);
    },
    onSessionError: (context) => {
      const sessionError = context.session && context.session.error;
      if (sessionError) {
        console.log(
          "An error occurred for session of receiver '%s': %O.",
          receiverName,
          sessionError
        );
      }
    }
  };
  const receiver = await connectionContext.connection.createReceiver(receiverOptions);

  // sleeping for 30 seconds to let the receiver receive messages
  await new Promise((r) => setTimeout(r, 30000));

  // Close the receiver to stop receiving messages
  await receiver.close();
  await connectionContext.connection.close();
}

main().catch((err) => console.log(err));
```

## Troubleshooting

You can set the following environment variable to get the debug logs.

- Getting debug logs from the Event Hub SDK.

```bash
export DEBUG=azure:core-amqp*
```

- Getting debug logs from the Event Hub SDK and the protocol level library.

```bash
export DEBUG=azure:core-amqp*,rhea*
```

- If you are **not interested in viewing the message transformation** (which consumes lot of console/disk space) then you can set the `DEBUG` environment variable as follows:

```bash
export DEBUG=azure:core-amqp*,rhea*,-rhea:raw,-rhea:message,-azure:core-amqp:datatransformer
```

- If you are interested only in **errors**, then you can set the `DEBUG` environment variable as follows:

```bash
export DEBUG=azure-core-amqp:error,rhea-promise:error,rhea:events,rhea:frames,rhea:io,rhea:flow
```

#### Logging to a file

- Set the `DEBUG` environment variable as shown above and then run your test script as follows:
  - Logging statements from you test script go to `out.log` and logging statement from the sdk go to `debug.log`.
    ```bash
    node your-test-script.js > out.log 2>debug.log
    ```
  - Logging statements from your test script and the sdk go to the same file `out.log` by redirecting stderr to stdout (&1), and then redirect stdout to a file:
    ```bash
    node your-test-script.js >out.log 2>&1
    ```
  - Logging statements from your test script and the sdk go to the same file `out.log`.
    ```bash
      node your-test-script.js &> out.log
    ```

# Next steps

Please take a look at the [samples](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/core/core-amqp/samples) directory for detailed samples.

# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
