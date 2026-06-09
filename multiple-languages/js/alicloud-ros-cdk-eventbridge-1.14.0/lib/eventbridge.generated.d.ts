import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApiDestination`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
export interface RosApiDestinationProps {
    /**
     * @Property apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly apiDestinationName: string | ros.IResolvable;
    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     * - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
     */
    readonly connectionName: string | ros.IResolvable;
    /**
     * @Property httpApiParameters: Configuration information for API endpoints.
     */
    readonly httpApiParameters: RosApiDestination.HttpApiParametersProperty | ros.IResolvable;
    /**
     * @Property description: The description of the api. It must be no more than 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EventBridge::ApiDestination`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiDestination` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
export declare class RosApiDestination extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::ApiDestination";
    /**
     * @Attribute ApiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrApiDestinationName: ros.IResolvable;
    /**
     * @Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrConnectionName: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the api. It must be no more than 255 characters.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute HttpApiParameters: Configuration information for API endpoints.
     */
    readonly attrHttpApiParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    apiDestinationName: string | ros.IResolvable;
    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     * - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
     */
    connectionName: string | ros.IResolvable;
    /**
     * @Property httpApiParameters: Configuration information for API endpoints.
     */
    httpApiParameters: RosApiDestination.HttpApiParametersProperty | ros.IResolvable;
    /**
     * @Property description: The description of the api. It must be no more than 255 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiDestinationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApiDestination {
    /**
     * @stability external
     */
    interface HttpApiParametersProperty {
        /**
         * @Property endpoint: The access point address of the API endpoint. The maximum length is 127 characters.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property method: HTTP request method.
     * - GET
     * - POST
     * - HEAD
     * - DELETE
     * - PUT
     * - PATCH.
         */
        readonly method: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
export interface RosConnectionProps {
    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly connectionName: string | ros.IResolvable;
    /**
     * @Property networkParameters: Network Configuration Data Structure.
     */
    readonly networkParameters: RosConnection.NetworkParametersProperty | ros.IResolvable;
    /**
     * @Property authParameters: Authentication Data Structure.
     */
    readonly authParameters?: RosConnection.AuthParametersProperty | ros.IResolvable;
    /**
     * @Property description: The connection configuration description. The maximum length is 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EventBridge::Connection`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Connection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
export declare class RosConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::Connection";
    /**
     * @Attribute AuthParameters: Authentication Data Structure.
     */
    readonly attrAuthParameters: ros.IResolvable;
    /**
     * @Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrConnectionName: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The connection configuration description. The maximum length is 255 characters.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute NetworkParameters: Network Configuration Data Structure.
     */
    readonly attrNetworkParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    connectionName: string | ros.IResolvable;
    /**
     * @Property networkParameters: Network Configuration Data Structure.
     */
    networkParameters: RosConnection.NetworkParametersProperty | ros.IResolvable;
    /**
     * @Property authParameters: Authentication Data Structure.
     */
    authParameters: RosConnection.AuthParametersProperty | ros.IResolvable | undefined;
    /**
     * @Property description: The connection configuration description. The maximum length is 255 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConnectionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface ApiKeyAuthParametersProperty {
        /**
         * @Property apiKeyValue: Value of Api key.
         */
        readonly apiKeyValue?: string | ros.IResolvable;
        /**
         * @Property apiKeyName: The key value of Api key.
         */
        readonly apiKeyName?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface AuthParametersProperty {
        /**
         * @Property oauthParameters: OAuth Authentication parameter data structure.
         */
        readonly oauthParameters?: RosConnection.OauthParametersProperty | ros.IResolvable;
        /**
         * @Property basicAuthParameters: Basic authentication data structure.
         */
        readonly basicAuthParameters?: RosConnection.BasicAuthParametersProperty | ros.IResolvable;
        /**
         * @Property apiKeyAuthParameters: API KEY data structure.
         */
        readonly apiKeyAuthParameters?: RosConnection.ApiKeyAuthParametersProperty | ros.IResolvable;
        /**
         * @Property authorizationType: Authentication type:
     * BASIC:BASIC_AUTH
     * Introduction: This authorization method is the basic authorization method implemented by the browser in compliance with the http protocol. In the process of communication with the HTTP protocol, the HTTP protocol defines the method by which the basic authentication allows the HTTP server to carry out user identity cards on the client. In the request header, add Authorization :Basic empty Base64 encryption (user name: password) fixed format.
     *
     * 1. Username and Password are required
     * API KEY :API_KEY_AUTH
     * Introduction:
     * Fixed format Add Token :Token value in request header
     * - ApiKeyName and ApiKeyValue are required
     * OAUTH :OAUTH_AUTH
     * Introduction:
     * OAuth2.0 is an authorization mechanism. Normally, for systems that do not use authorization mechanisms such as OAuth2.0, the client can directly Access the resources of the Resource Server. In order for users to Access data safely, an Access Token mechanism is added in the middle of the Access. Clients need to carry Access tokens to Access protected resources. Therefore, OAuth2.0 ensures that resources are not accessed by malicious clients, thus improving the security of the system.
     * - AuthorizationEndpoint, oauthttpparameters, and HttpMethod are required.
         */
        readonly authorizationType?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface BasicAuthParametersProperty {
        /**
         * @Property username: Username for basic authentication.
         */
        readonly username?: string | ros.IResolvable;
        /**
         * @Property password: Password for basic authentication.
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface BodyParametersProperty {
        /**
         * @Property isValueSecret: Whether it is Authentication.
         */
        readonly isValueSecret?: boolean | ros.IResolvable;
        /**
         * @Property value: The value of the body request parameter.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the body request parameter.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface ClientParametersProperty {
        /**
         * @Property clientSecret: Application's client key secret.
         */
        readonly clientSecret?: string | ros.IResolvable;
        /**
         * @Property clientId: The ID of the client.
         */
        readonly clientId?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface HeaderParametersProperty {
        /**
         * @Property isValueSecret: Whether it is Authentication.
         */
        readonly isValueSecret?: boolean | ros.IResolvable;
        /**
         * @Property value: Request header parameter value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The parameter key of the request header.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface NetworkParametersProperty {
        /**
         * @Property vpcId: The ID of the VPC.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property networkType: Public network: PublicNetwork
     * Private network: PrivateNetwork
     * - Tip: When selecting a VPC, VpcId, VswitcheId, and SecurityGroupId are required.
         */
        readonly networkType: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vswitcheId: Switch ID.
         */
        readonly vswitcheId?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface OauthHttpParametersProperty {
        /**
         * @Property headerParameters: Parameter list of request header.
         */
        readonly headerParameters?: Array<RosConnection.HeaderParametersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queryStringParameters: Data structure of request path parameters.
         */
        readonly queryStringParameters?: Array<RosConnection.QueryStringParametersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property bodyParameters: Body request parameter data structure List.
         */
        readonly bodyParameters?: Array<RosConnection.BodyParametersProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface OauthParametersProperty {
        /**
         * @Property clientParameters: Customer Parameter Data Structure.
         */
        readonly clientParameters?: RosConnection.ClientParametersProperty | ros.IResolvable;
        /**
         * @Property oauthHttpParameters: Request parameters for Oauth Authentication.
         */
        readonly oauthHttpParameters?: RosConnection.OauthHttpParametersProperty | ros.IResolvable;
        /**
         * @Property authorizationEndpoint: Authorized endpoint address. The maximum length is 127 characters.
         */
        readonly authorizationEndpoint?: string | ros.IResolvable;
        /**
         * @Property httpMethod: The method of the probe type. Value:
     * - GET
     * - POST
     * - HEAD
     * - DELETE
     * - PUT
     * - PATCH.
         */
        readonly httpMethod?: string | ros.IResolvable;
    }
}
export declare namespace RosConnection {
    /**
     * @stability external
     */
    interface QueryStringParametersProperty {
        /**
         * @Property isValueSecret: Whether it is Authentication.
         */
        readonly isValueSecret?: boolean | ros.IResolvable;
        /**
         * @Property value: Request path parameter value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Request path parameter key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
 */
export interface RosRuleProps {
    /**
     * @Property eventBusName: The name of the event bus.
     */
    readonly eventBusName: string | ros.IResolvable;
    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    readonly filterPattern: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property ruleName: The name of the event rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property targets: The event target to which events are delivered.
     */
    readonly targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the event rule.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EventBridge::Rule`, which is used to create an event rule for an event bus.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::Rule";
    /**
     * @Attribute EventBusName: The name of the event bus.
     */
    readonly attrEventBusName: ros.IResolvable;
    /**
     * @Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    readonly attrRuleArn: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the event rule.
     */
    readonly attrRuleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property eventBusName: The name of the event bus.
     */
    eventBusName: string | ros.IResolvable;
    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    filterPattern: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property ruleName: The name of the event rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property targets: The event target to which events are delivered.
     */
    targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the event rule.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ConcurrentConfigProperty {
        /**
         * @Property concurrency: Number of concurrent connections.
         */
        readonly concurrency: number | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface DeadLetterQueueProperty {
        /**
         * @Property arn: The Alibaba Cloud Resource Name (ARN) of the dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The ARN feature is supported by the following queue types: MNS and Message Queue for Apache RocketMQ.
         */
        readonly arn: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ParamListProperty {
        /**
         * @Property form: The transformation method.For more information, see Event target parameters.
         */
        readonly form: string | ros.IResolvable;
        /**
         * @Property value: The event value to be transformed.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
         */
        readonly resourceKey: string | ros.IResolvable;
        /**
         * @Property template: The format of the template.
         */
        readonly template?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface TargetsProperty {
        /**
         * @Property errorsTolerance: The fault tolerance policy. Valid values:
     * - ALL: allows fault tolerance. If an error occurs, the event processing is not blocked. If the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the message is delivered to the dead-letter queue or discarded based on your configurations.
     * - NONE: does not allow fault tolerance. If an error occurs and the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the event processing is blocked.
         */
        readonly errorsTolerance?: string | ros.IResolvable;
        /**
         * @Property pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
         */
        readonly pushRetryStrategy?: string | ros.IResolvable;
        /**
         * @Property deadLetterQueue: The dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The dead-letter queue feature is supported by the following queue types: Message Queue for Apache RocketMQ, Message Service (MNS), Message Queue for Apache Kafka, and EventBridge.
         */
        readonly deadLetterQueue?: RosRule.DeadLetterQueueProperty | ros.IResolvable;
        /**
         * @Property type: The type of the event target.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the event target.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property concurrentConfig: Concurrency control configuration.
         */
        readonly concurrentConfig?: RosRule.ConcurrentConfigProperty | ros.IResolvable;
        /**
         * @Property paramList: The parameters that the event passes.
         */
        readonly paramList: Array<RosRule.ParamListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property identity: The custom ID of the event target.
         */
        readonly identity: string | ros.IResolvable;
    }
}
