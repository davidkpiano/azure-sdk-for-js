### 2019-06-28 5.0.0-preview.1

Version 5.0.0-preview.1 is a preview of our efforts to create a client library that is user friendly and
idiomatic to the Javascript ecosystem. The reasons for most of the changes in this update can be found in the
[Azure SDK Design Guidelines for TypeScript](https://azuresdkspecs.z5.web.core.windows.net/TypeScriptSpec.html).
For more information, please visit https://aka.ms/azure-sdk-preview1-js

#### Breaking changes
- Creating an instance of [EventHubClient](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubclient.html)
is now done using construtor overloads instead of static helpers.
    - If you previously used the `createFromTokenProvider` static helper to provide your own custom token provider,
    you will now need to update the provider to follow the new `TokenCredential` interface instead.
    - If you previously used the `@azure/ms-rest-nodeauth` library to provide AAD credentials, you will now need to use the new
    [@azure/identity](https://www.npmjs.com/package/@azure/identity) library instead.
- The send methods are moved from the `EventHubClient` class to the new [EventHubProducer](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubproducer.html) class.
    - Use the [createProducer()](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubclient.html#createproducer)
    function on the `EventHubClient` to create an instance of a `EventHubProducer`.
    - Each producer represents a dedicated AMQP sender link to Azure Event Hubs.
    - The [EventData](https://azure.github.io/azure-sdk-for-js/event-hubs/interfaces/eventdata.html) type used for
    the data being sent only supports a `body` for the content being sent and a
    `properties` bag to hold any custom metadata you want to send. The properties corresponding to a received event are
    removed from this type and a separate type [ReceivedEventData](https://azure.github.io/azure-sdk-for-js/event-hubs/interfaces/receivedeventdata.html)
    is used for received events.
- The receive methods are moved from the `EventHubClient` class to the new [EventHubConsumer](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubconsumer.html) class.
    - Use the [createConsumer()](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubclient.html#createconsumer)
    function on the `EventHubClient` to create an instance of a `EventHubConsumer`.
    - Each consumer represents a dedicated AMQP receiver link to Azure Event Hubs based
    on the flavor of receive function being used i.e `receiveBatch()` that receives events in a batch vs `receive()` that provides
    a streaming receiver.
    - The static methods `EventPosition.fromStart()` and `EventPosition.fromEnd()` are renamed to `EventPosition.earliest()` and `EventPosition.latest()` respectively.
- Inspecting Event Hub
    - The methods `getHubRuntimeInformation()` and `getPartitionInformation()` on the `EventHubClient` are renamed to 
    [getProperties()](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubclient.html#getproperties) and 
    [getPartitionProperties()](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubclient.html#getpartitionproperties)
    respectively. Please refer to the return types of these functions to ensure you are using the right property names.

#### New features
- You can now configure retry options that are used to govern retry attempts when a retryable error occurs. These can be
set when creating the `EventHubClient`, `EventHubProducer` and `EventHubConsumer`
- You can now pass an abort signal to any of the async operations. This signal can be used to cancel such operations. Use
the package [@azure/abort-controller](https://www.npmjs.com/package/@azure/abort-controller) to create such abort signals.
- An async iterator is now available to receive events after you create an instance of `EventHubConsumer`. Use the function
[getEventIterator()](https://azure.github.io/azure-sdk-for-js/event-hubs/classes/eventhubconsumer.html#geteventiterator) on the consumer to get a `AsyncIterableIterator` which you can then use in a loop or use it's `next()` function to receive events.

#### Next Steps

- Refer to the [API reference documentation](https://azure.github.io/azure-sdk-for-js/event-hubs/index.html) to get
an overview of the entire API surface.
- Refer to our [samples](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/eventhub/event-hubs/samples) to understand the usage of the new APIs.

### 2019-06-10 2.1.0

- Added support for WebSockets. WebSockets enable Event Hubs to work over an HTTP proxy and in environments where the standard AMQP port 5671 is blocked.
Refer to the [websockets](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/websockets.ts) sample to see how to use WebSockets. 
- `@types/async-lock` has been moved to being a dependency from a dev-dependency. This fixes the [bug 3240](https://github.com/Azure/azure-sdk-for-js/issues/3240) 

### 2019-03-26 2.0.0

#### Breaking Changes
- If you have been using the `createFromAadTokenCredentials` function to create an instance of the 
`EventHubClient`, you will now need to use the [@azure/ms-rest-nodeauth](https://www.npmjs.com/package/@azure/ms-rest-nodeauth) 
library instead of [ms-rest-azure](https://www.npmjs.com/package/ms-rest-azure) library to create 
the credentials that are needed by the `createFromAadTokenCredentials` function.
    - Typescript: Replace `import * from "ms-rest-azure";` with `import * from "@azure/ms-rest-nodeauth";`
    - Javascript: Replace `require("ms-rest-azure")` with `require("@azure/ms-rest-nodeauth")`
- If you have been passing a non string value in the `partitionKey` property on the message when 
sending it using the `EventHubClient`, an error will now be thrown. This property only supports string values.

#### Bug fixes and other changes
- A network connection lost error is now treated as retryable error. A new error with name `ConnectionLostError` 
is introduced for this scenario which you can see if you enable the [logs](https://github.com/Azure/azure-sdk-for-js/sdk/eventhub/event-hubs/README.md#debug-logs).
- When recovering from an error that caused the underlying AMQP connection to get disconnected, 
[rhea](https://github.com/amqp/rhea/issues/205) reconnects all the older AMQP links on the connection 
resulting in the below 2 errors in the logs. We now clear rhea's internal map to avoid such reconnections. 
We already have code in place to create new AMQP links to resume send/receive operations.
    - InvalidOperationError: A link to connection '.....' $cbs node has already been opened.
    - UnauthorizedError: Unauthorized access. 'Listen' claim(s) are required to perform this operation.
- Enabled the `esModuleInterop` compilerOption in the `tsconfig.json` file for this library to be 
compliant with the [best practices](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop).


### 2018-12-14 1.0.8
- Use `isItselfClosed()` instead of `isClosed()` in rhea to correctly determine if the sdk initiated close on receiver/sender. 
This ensures that on connection issues like the ECONNRESET error, the receivers get re-connected properly thus fixing the [bug 174](https://github.com/Azure/azure-event-hubs-node/issues/174)

### 2018-10-25 1.0.7
- Only set `message_id` while sending the message, when provided by caller [PR](https://github.com/Azure/azure-event-hubs-node/pull/169).

### 2018-10-01 1.0.6
- export `EventHubConnectionConfig` from the library.

### 2018-10-01 1.0.5
- Moved `lib/amqp-common` to `"@azure/amqp-common"` package and took a dependency on it.
- Moved `lib/rhea-promise` to `"rhea-promise"` package and took a dependency on it.
- Fixed issues where the private instance of `rhea receiver or sender` were undefined when `*_open`
and `*_close` events happened instantaneously.

### 2018-09-26 1.0.4
- update the version of ms-rest-azure to "2.5.9"

### 2018-09-19 1.0.3
- `EventPosition.fromSequenceNumber()` accepts `0` as a valid argument.
- `client.receive()` and `client.receiveBatch()` accept partitionId as a `string | number`.
- User's error handler in `client.receive()` will only be notified if the user did not close the receiver and the error is not retryable.

### 2018-09-14 1.0.2
- `client.getPartitionInformation()` should works as expected when partitionId is of type `number | string`.

### 2018-09-12 1.0.1
- Stable version of the libray.

### 2018-09-11 0.2.10
- Added support to provide custom user-agent string that will be appended to the default user agent string.

### 2018-09-11 0.2.9
- Updated examples and content in README.md

### 2018-08-31 0.2.8
- Fixed [issue](https://github.com/Azure/azure-event-hubs-node/issues/135)
  - Added error handlers to the $management sender/receiver links.
  - Added error handlers to the amqp session of the $management and $cbs sender/receiver links.
- Exported `AadTokenProvider` and `SasTokenProvider` from the client.

### 2018-08-29 0.2.7
- Improved logging statements to the connection context.
- Added timeout to promisifed creation/closing of rhea sender, receiver, session, connection.
- Fixed a bug in the EventData deserialization logic by checking for `!= undefined` check rather than the `!` check.
- While handling disconnects we retry for 150 times at an interval of 15 seconds as long the error is `retryable`.

### 2018-08-07 0.2.6
- Improved log statements.
- Documented different mechanisms of getting the debug logs in [README](https://github.com/Azure/azure-sdk-for-js/tree/master/eventhub/event-hubs/#debug-logs).
- Minimum dependency on `"rhea": "^0.2.18"`.
- Fixed bugs in recovery logic
- Added support to recover from session close for sender and receiver
- Added a new property `isConnecting` that provides information whether a linkEntity is currently in the process of establishing itself.
- Using `is_closed()` method of sender, receiver and session in rhea to determine whether the sdk initiated the close.
- MessagingError is retryable by default.
- Added support to translate node.js [`SystemError`](https://nodejs.org/api/errors.html#errors_class_systemerror) into AmqpError.
- Added a new static method `createFromTokenProvider()` on the EventHubClient where customers can provide their own [TokenProvider](https://github.com/Azure/azure-event-hubs-node/blob/master/client/lib/amqp-common/auth/token.ts#L42).

### 2018-07-17 0.2.5
- Improved log statements
- Updated README.md
- Updated dependency rhea to "^0.2.16" instead of github dependency.

## 2018-07-16 0.2.4
- Added support to handle disconnects and link timeout errors.
- Fixed client examples link in README.
- Updated issue templates
- Improvised the example structure
- Moved the common stuff to `amqp-common` and added `Connection`, `Session`, `Sender`, `Receiver` objects to `rhea-promise`.
- Improved tsconfig.json and tslint.json config files.
- Added `import "mocha"` to all the test files, inorder to get rid of red squiggles in vscode.
- Replaced crypto with jssha which is browser compatible

## 2018-06-13 0.2.3
- Minor doc fixes and sample updates.
- Add a listener for the disconnected event after opening the connection.

## 2018-05-23 0.2.2
- Fixed the partitionkey issue while sending events. #73.
- Bumped the minimum dependency on rhea to 0.2.13. This gives us type definitions for rhea.
- rpc.open() returns the connection object. This makes it easy to extract common functionality to a
separate library.

## 2018-05-09 0.2.1
- Added support to create EventHubClient from an IotHub connectionstring. The following can be done
```javascript
const client = await EventHubClient.createFromIotHubConnectionString(process.env.IOTHUB_CONNECTION_STRING);
```
- Internal design changes:
  - ManagementClient also does cbs auth before making the management request.
  - EventHubSender, EventHubReceiver, ManagementClient inherit from a base class ClientEntity.
  - Moved opening the connection to CbSClient as that is the first thing that should happen after opening the connection. This reduces calls to `rpc.open()` all over the sdk and puts them at one place in the `init()` method on the CbsClient.

## 2018-05-02 0.2.0
- Added functionality to encode/decode the messages sent and received.
- Created an options object in the `client.createFromConnectionString()` and the `EventHubClient` constructor. This is a breaking change. However moving to an options object design reduces the chances of breaking changes in the future.
 This options object will:
 - have the existing optional `tokenProvider` property
 - and a new an optional property named `dataTransformer`. You can provide your own transformer. If not provided then we will use the [DefaultDataTransformer](./client/lib/dataTransformer.ts). This should be applicable for majority of the scenarios and will ensure that messages are interoperable between different Azure services. It fixes issue #60.

## 2018-04-26 0.1.2
- Added missing dependency for `uuid` package and nit fixes in the README.md

## 2018-04-24 0.1.1
- Changing `client.receiveOnMessage()` to `client.receive()` as that is a better naming convention and is in sync with other language sdks.

## 2018-04-23 0.1.0
- Previously we were depending on [amqp10](https://npmjs.com/package/amqp10) package for the amqp protocol. Moving forward we will be depending on [rhea](https://npmjs.com/package/rhea).
- The public facing API of this library has major breaking changes from the previous version 0.0.8. Please take a look at the [Readme](./README.md) and the [samples](./samples) directory for detailed samples.
- Removed the need to say `client.open.then()`. First call to create a sender, receiver or get metadata about the hub or partition will establish the AMQP connection.
- Added support to authenticate via Service Principal credentials, MSITokenCredentials, DeviceTokenCredentials.
  - This should make it easy for customers to login once using the above mentioned credentials, 
    - Create the EventHubs infrastructure on the Azure management/control plane programmatically using (azure-arm-eventhubs) package over HTTPS prtocol.
    - Use the same credentials to send and receive messages to the EventHub using this library over AMQP protocol.
- Provided a promise based API to create senders/receivers off the `EventHubClient`.
- Added capability to send multiple messages by batching them together.
- Added capability to receive predefined number of messages for a specified amount of time. Note that this method will receive all the messages and return an array of EventData objects.
- Added capability to create an epoch receiver.
- Simplified the mechanism to specify the `EventPosition` from which to receive messages from the EventHub.
- Added proper TypeScript type definitions to the library that improves the intellisense experience for our customers.

## 2017-05-18 0.0.8
- Fixed a race condition within the AMQP redirection code when using an IoT Hub connection string.
- Disabled auto-retry of AMQP connections in amqp10 since the current client is not built to handle them and fails when retrying.

## 2017-03-31 0.0.7
- Pulled changes for #14 and #20/#21.
- Special thanks to @kurtb and @ali92hm for their contributions!

## 2017-01-13 0.0.6
- Added support for message properties in the EventData structure.