import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApiAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export interface RosApiAttachmentProps {
    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property description: The description of publication.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property domainIds: The list of user domain names associated with API publishing.
     */
    readonly domainIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property routeId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly routeId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::ApiAttachment`, which is used to attach an API.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export declare class RosApiAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::ApiAttachment";
    /**
     * @Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable;
    /**
     * @Attribute RouteId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly attrRouteId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property description: The description of publication.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property domainIds: The list of user domain names associated with API publishing.
     */
    domainIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property routeId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    routeId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosConsumer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
export interface RosConsumerProps {
    /**
     * @Property akSkIdentityConfigs: List of AK\/SK identity configurations.
     */
    readonly akSkIdentityConfigs?: Array<RosConsumer.AkSkIdentityConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property apikeyIdentityConfig: API key identity configuration.
     */
    readonly apikeyIdentityConfig?: RosConsumer.ApikeyIdentityConfigProperty | ros.IResolvable;
    /**
     * @Property description: The description of the consumer.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enable: Whether to enable the consumer.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property gatewayType: The type of the gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;
    /**
     * @Property jwtIdentityConfig: JWT identity configuration.
     */
    readonly jwtIdentityConfig?: RosConsumer.JwtIdentityConfigProperty | ros.IResolvable;
    /**
     * @Property name: The name of the consumer.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Consumer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Consumer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
export declare class RosConsumer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Consumer";
    /**
     * @Attribute ConsumerId: The ID of the consumer.
     */
    readonly attrConsumerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property akSkIdentityConfigs: List of AK\/SK identity configurations.
     */
    akSkIdentityConfigs: Array<RosConsumer.AkSkIdentityConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property apikeyIdentityConfig: API key identity configuration.
     */
    apikeyIdentityConfig: RosConsumer.ApikeyIdentityConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the consumer.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enable: Whether to enable the consumer.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property gatewayType: The type of the gateway.
     */
    gatewayType: string | ros.IResolvable | undefined;
    /**
     * @Property jwtIdentityConfig: JWT identity configuration.
     */
    jwtIdentityConfig: RosConsumer.JwtIdentityConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the consumer.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface AkSkIdentityConfigsProperty {
        /**
         * @Property type: The type of the identity configuration. Valid values: AkSk.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property sk: The Secret Key.
         */
        readonly sk?: string | ros.IResolvable;
        /**
         * @Property ak: The Access Key.
         */
        readonly ak?: string | ros.IResolvable;
        /**
         * @Property generateMode: The generation mode. Valid values: Custom, System.
         */
        readonly generateMode?: string | ros.IResolvable;
    }
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface ApikeyIdentityConfigProperty {
        /**
         * @Property apikeySource: The API key source configuration.
         */
        readonly apikeySource?: RosConsumer.ApikeySourceProperty | ros.IResolvable;
        /**
         * @Property type: The type of the identity configuration. Valid values: Apikey.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property credentials: The list of credentials.
         */
        readonly credentials?: Array<RosConsumer.CredentialsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface ApikeySourceProperty {
        /**
         * @Property value: The value for the API key source.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property source: The source of the API key. Valid values: Header, QueryString, Default.
         */
        readonly source: string | ros.IResolvable;
    }
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface CredentialsProperty {
        /**
         * @Property apikey: The API key value.
         */
        readonly apikey?: string | ros.IResolvable;
        /**
         * @Property generateMode: The generation mode. Valid values: Custom, System.
         */
        readonly generateMode: string | ros.IResolvable;
    }
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface JwtIdentityConfigProperty {
        /**
         * @Property type: The type of the identity configuration. Valid values: Jwt.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property secretType: The secret type. Valid values: Asymmetry (asymmetric encryption), Symmetry (symmetric encryption).
         */
        readonly secretType?: string | ros.IResolvable;
        /**
         * @Property jwks: The JWKS configuration.
         */
        readonly jwks?: string | ros.IResolvable;
        /**
         * @Property jwtPayloadConfig: The JWT payload configuration.
         */
        readonly jwtPayloadConfig?: RosConsumer.JwtPayloadConfigProperty | ros.IResolvable;
        /**
         * @Property jwtTokenConfig: The JWT token configuration.
         */
        readonly jwtTokenConfig?: RosConsumer.JwtTokenConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface JwtPayloadConfigProperty {
        /**
         * @Property payloadKeyName: The key name of the JWT payload.
         */
        readonly payloadKeyName?: string | ros.IResolvable;
        /**
         * @Property payloadKeyValue: The value of the JWT payload.
         */
        readonly payloadKeyValue?: string | ros.IResolvable;
    }
}
export declare namespace RosConsumer {
    /**
     * @stability external
     */
    interface JwtTokenConfigProperty {
        /**
         * @Property pass: Whether to pass through the JWT.
         */
        readonly pass?: boolean | ros.IResolvable;
        /**
         * @Property position: The position where JWT is stored. Valid values: HEADER, QUERY.
         */
        readonly position?: string | ros.IResolvable;
        /**
         * @Property prefix: The prefix for JWT token.
         */
        readonly prefix?: string | ros.IResolvable;
        /**
         * @Property key: The key name for JWT.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosConsumerAuthorizationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
export interface RosConsumerAuthorizationRuleProps {
    /**
     * @Property consumerId: The consumer ID.
     */
    readonly consumerId: string | ros.IResolvable;
    /**
     * @Property resourceIdentifier: Resource identifier for non-standard code sources.
     */
    readonly resourceIdentifier: RosConsumerAuthorizationRule.ResourceIdentifierProperty | ros.IResolvable;
    /**
     * @Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * @Property expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
     */
    readonly expireMode?: string | ros.IResolvable;
    /**
     * @Property expireTimestamp: The expire timestamp in milliseconds.
     */
    readonly expireTimestamp?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::ConsumerAuthorizationRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerAuthorizationRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
export declare class RosConsumerAuthorizationRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::ConsumerAuthorizationRule";
    /**
     * @Attribute ConsumerAuthorizationRuleId: The ID of the consumer authorization rule.
     */
    readonly attrConsumerAuthorizationRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property consumerId: The consumer ID.
     */
    consumerId: string | ros.IResolvable;
    /**
     * @Property resourceIdentifier: Resource identifier for non-standard code sources.
     */
    resourceIdentifier: RosConsumerAuthorizationRule.ResourceIdentifierProperty | ros.IResolvable;
    /**
     * @Property resourceType: The resource type.
     */
    resourceType: string | ros.IResolvable;
    /**
     * @Property expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
     */
    expireMode: string | ros.IResolvable | undefined;
    /**
     * @Property expireTimestamp: The expire timestamp in milliseconds.
     */
    expireTimestamp: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerAuthorizationRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosConsumerAuthorizationRule {
    /**
     * @stability external
     */
    interface ResourceIdentifierProperty {
        /**
         * @Property environmentId: The environment ID.
         */
        readonly environmentId: string | ros.IResolvable;
        /**
         * @Property parentResourceId: The parent resource ID.
         */
        readonly parentResourceId?: string | ros.IResolvable;
        /**
         * @Property resourceId: The resource ID.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resources: The resource infos.
         */
        readonly resources?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
export interface RosDomainProps {
    /**
     * @Property domainName: The name of the Domain.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property protocol: The types of protocols supported by the domain are as follows:
     * * HTTP: Supports only the HTTP protocol.
     * * HTTPS: Supports only the HTTPS protocol.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * @Property certIdentifier: The tls Certificate identification.
     */
    readonly certIdentifier?: string | ros.IResolvable;
    /**
     * @Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly forceHttps?: boolean | ros.IResolvable;
    /**
     * @Property gatewayType: The type of Gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;
    /**
     * @Property http2Option: Whether to enable http2 settings.
     */
    readonly http2Option?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite
     */
    readonly tlsCipherSuitesConfig?: RosDomain.TlsCipherSuitesConfigProperty | ros.IResolvable;
    /**
     * @Property tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    readonly tlsMax?: string | ros.IResolvable;
    /**
     * @Property tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    readonly tlsMin?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Domain`, which is used to create a domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Domain";
    /**
     * @Attribute CertIdentifier: The tls Certificate identification.
     */
    readonly attrCertIdentifier: ros.IResolvable;
    /**
     * @Attribute DomainId: The ID of the Domain.
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * @Attribute DomainName: The name of the Domain.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly attrForceHttps: ros.IResolvable;
    /**
     * @Attribute Http2Option: Whether to enable http2 settings.
     */
    readonly attrHttp2Option: ros.IResolvable;
    /**
     * @Attribute Protocol: The types of protocols.
     */
    readonly attrProtocol: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
     */
    readonly attrTlsCipherSuitesConfig: ros.IResolvable;
    /**
     * @Attribute TlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    readonly attrTlsMax: ros.IResolvable;
    /**
     * @Attribute TlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    readonly attrTlsMin: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: The name of the Domain.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property protocol: The types of protocols supported by the domain are as follows:
     * * HTTP: Supports only the HTTP protocol.
     * * HTTPS: Supports only the HTTPS protocol.
     */
    protocol: string | ros.IResolvable;
    /**
     * @Property certIdentifier: The tls Certificate identification.
     */
    certIdentifier: string | ros.IResolvable | undefined;
    /**
     * @Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    forceHttps: boolean | ros.IResolvable | undefined;
    /**
     * @Property gatewayType: The type of Gateway.
     */
    gatewayType: string | ros.IResolvable | undefined;
    /**
     * @Property http2Option: Whether to enable http2 settings.
     */
    http2Option: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite
     */
    tlsCipherSuitesConfig: RosDomain.TlsCipherSuitesConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    tlsMax: string | ros.IResolvable | undefined;
    /**
     * @Property tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    tlsMin: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDomain {
    /**
     * @stability external
     */
    interface TlsCipherSuiteProperty {
        /**
         * @Property name: The name of the cipher suite.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosDomain {
    /**
     * @stability external
     */
    interface TlsCipherSuitesConfigProperty {
        /**
         * @Property tlsCipherSuite: Tls Cipher Suite.
         */
        readonly tlsCipherSuite?: Array<RosDomain.TlsCipherSuiteProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property configType: Config type, Default or Custom.
         */
        readonly configType?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export interface RosGatewayProps {
    /**
     * @Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName: string | ros.IResolvable;
    /**
     * @Property networkAccessConfig: Network Access Configuration.
     */
    readonly networkAccessConfig: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the gateway. Valid values:
     * * PayAsYouGo
     * * Subscription
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property spec: Gateway instance specifications.
     */
    readonly spec: string | ros.IResolvable;
    /**
     * @Property zoneConfig: Availability Zone Configuration.
     */
    readonly zoneConfig: RosGateway.ZoneConfigProperty | ros.IResolvable;
    /**
     * @Property gatewayType: Describes the gateway type, which is categorized into the following two types:
     * * API: indicates an API gateway
     * * AI: Indicates an AI gateway.
     * Default value: API.
     */
    readonly gatewayType?: string | ros.IResolvable;
    /**
     * @Property logConfig: Log Configuration.
     */
    readonly logConfig?: RosGateway.LogConfigProperty | ros.IResolvable;
    /**
     * @Property period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of The tags of the Gateway..
     */
    readonly tags?: RosGateway.TagsProperty[];
    /**
     * @Property vpc: The VPC associated with the Gateway.
     */
    readonly vpc?: RosGateway.VpcProperty | ros.IResolvable;
    /**
     * @Property vSwitch: The virtual switch associated with the Gateway.
     */
    readonly vSwitch?: RosGateway.VSwitchProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Gateway`, which is used to create a Cloud-native API Gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export declare class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Gateway";
    /**
     * @Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Environments: The list of environments associated with the Gateway.
     */
    readonly attrEnvironments: ros.IResolvable;
    /**
     * @Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * @Attribute GatewayName: The name of the resource.
     */
    readonly attrGatewayName: ros.IResolvable;
    /**
     * @Attribute GatewayType: The type of the gateway.
     */
    readonly attrGatewayType: ros.IResolvable;
    /**
     * @Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the gateway.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroup: The Security Group of the Gateway.
     */
    readonly attrSecurityGroup: ros.IResolvable;
    /**
     * @Attribute Spec: Gateway instance specifications.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the Gateway.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Update the timestamp. Unit: milliseconds.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    readonly attrVSwitch: ros.IResolvable;
    /**
     * @Attribute Version: The gateway version.
     */
    readonly attrVersion: ros.IResolvable;
    /**
     * @Attribute Vpc: The VPC associated with the Gateway.
     */
    readonly attrVpc: ros.IResolvable;
    /**
     * @Attribute Zones: The List of zones associated with the Gateway.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayName: The name of the Gateway.
     */
    gatewayName: string | ros.IResolvable;
    /**
     * @Property networkAccessConfig: Network Access Configuration.
     */
    networkAccessConfig: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the gateway. Valid values:
     * * PayAsYouGo
     * * Subscription
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property spec: Gateway instance specifications.
     */
    spec: string | ros.IResolvable;
    /**
     * @Property zoneConfig: Availability Zone Configuration.
     */
    zoneConfig: RosGateway.ZoneConfigProperty | ros.IResolvable;
    /**
     * @Property gatewayType: Describes the gateway type, which is categorized into the following two types:
     * * API: indicates an API gateway
     * * AI: Indicates an AI gateway.
     * Default value: API.
     */
    gatewayType: string | ros.IResolvable | undefined;
    /**
     * @Property logConfig: Log Configuration.
     */
    logConfig: RosGateway.LogConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of The tags of the Gateway..
     */
    tags: RosGateway.TagsProperty[] | undefined;
    /**
     * @Property vpc: The VPC associated with the Gateway.
     */
    vpc: RosGateway.VpcProperty | ros.IResolvable | undefined;
    /**
     * @Property vSwitch: The virtual switch associated with the Gateway.
     */
    vSwitch: RosGateway.VSwitchProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface LogConfigProperty {
        /**
         * @Property sls: Log Service Configuration.
         */
        readonly sls?: RosGateway.SlsProperty | ros.IResolvable;
    }
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface NetworkAccessConfigProperty {
        /**
         * @Property type: Network Access Type. Valid values:
     * * Internet
     * * Intranet
     * * InternetAndIntranet
         */
        readonly type: string | ros.IResolvable;
    }
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface SlsProperty {
        /**
         * @Property enable: Enable Log Service.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface VSwitchProperty {
        /**
         * @Property vSwitchId: The ID of the VSwitch.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property name: The name of the VSwitch.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface VpcProperty {
        /**
         * @Property vpcId: The VPC network ID.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property name: The name of the VPC gateway.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosGateway {
    /**
     * @stability external
     */
    interface ZoneConfigProperty {
        /**
         * @Property selectOption: Availability Zone Options. Valid values:
     * * Auto
     * * Manual
         */
        readonly selectOption: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosHttpApi`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export interface RosHttpApiProps {
    /**
     * @Property httpApiName: The name of the HTTP API.
     */
    readonly httpApiName: string | ros.IResolvable;
    /**
     * @Property agentProtocols: The agent protocols of the HTTP API.
     */
    readonly agentProtocols?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aiProtocols: The AI protocols of the HTTP API.
     */
    readonly aiProtocols?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property authConfig: The authentication configuration.
     */
    readonly authConfig?: RosHttpApi.AuthConfigProperty | ros.IResolvable;
    /**
     * @Property basePath: The base path of the HTTP API.
     */
    readonly basePath?: string | ros.IResolvable;
    /**
     * @Property belongGatewayId: The gateway ID that the HTTP API belongs to.
     */
    readonly belongGatewayId?: string | ros.IResolvable;
    /**
     * @Property builtinRouteNames: The builtin route names.
     */
    readonly builtinRouteNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deployConfigs: The deploy configurations of the HTTP API.
     */
    readonly deployConfigs?: Array<RosHttpApi.DeployConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the HTTP API.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enableAuth: Whether to enable authentication.
     */
    readonly enableAuth?: boolean | ros.IResolvable;
    /**
     * @Property firstByteTimeout: The first byte timeout.
     */
    readonly firstByteTimeout?: number | ros.IResolvable;
    /**
     * @Property ingressConfig: The ingress configuration of the HTTP API.
     */
    readonly ingressConfig?: RosHttpApi.IngressConfigProperty | ros.IResolvable;
    /**
     * @Property modelCategory: The model category.
     */
    readonly modelCategory?: string | ros.IResolvable;
    /**
     * @Property onlyChangeConfig: Whether to only change config without triggering redeployment. True means only modify configuration without triggering redeployment.
     */
    readonly onlyChangeConfig?: boolean | ros.IResolvable;
    /**
     * @Property protocols: The protocols supported by the HTTP API.
     */
    readonly protocols?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property removeBasePathOnForward: Whether to remove the base path on forward.
     */
    readonly removeBasePathOnForward?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property strategy: The strategy of the HTTP API.
     */
    readonly strategy?: string | ros.IResolvable;
    /**
     * @Property type: The type of the HTTP API.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * @Property versionConfig: The version configuration of the HTTP API.
     */
    readonly versionConfig?: RosHttpApi.VersionConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::HttpApi`, which is used to create an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpApi` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export declare class RosHttpApi extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::HttpApi";
    /**
     * @Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiName: The name of the HTTP API.
     */
    httpApiName: string | ros.IResolvable;
    /**
     * @Property agentProtocols: The agent protocols of the HTTP API.
     */
    agentProtocols: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property aiProtocols: The AI protocols of the HTTP API.
     */
    aiProtocols: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property authConfig: The authentication configuration.
     */
    authConfig: RosHttpApi.AuthConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property basePath: The base path of the HTTP API.
     */
    basePath: string | ros.IResolvable | undefined;
    /**
     * @Property belongGatewayId: The gateway ID that the HTTP API belongs to.
     */
    belongGatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property builtinRouteNames: The builtin route names.
     */
    builtinRouteNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deployConfigs: The deploy configurations of the HTTP API.
     */
    deployConfigs: Array<RosHttpApi.DeployConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the HTTP API.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableAuth: Whether to enable authentication.
     */
    enableAuth: boolean | ros.IResolvable | undefined;
    /**
     * @Property firstByteTimeout: The first byte timeout.
     */
    firstByteTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property ingressConfig: The ingress configuration of the HTTP API.
     */
    ingressConfig: RosHttpApi.IngressConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property modelCategory: The model category.
     */
    modelCategory: string | ros.IResolvable | undefined;
    /**
     * @Property onlyChangeConfig: Whether to only change config without triggering redeployment. True means only modify configuration without triggering redeployment.
     */
    onlyChangeConfig: boolean | ros.IResolvable | undefined;
    /**
     * @Property protocols: The protocols supported by the HTTP API.
     */
    protocols: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property removeBasePathOnForward: Whether to remove the base path on forward.
     */
    removeBasePathOnForward: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property strategy: The strategy of the HTTP API.
     */
    strategy: string | ros.IResolvable | undefined;
    /**
     * @Property type: The type of the HTTP API.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @Property versionConfig: The version configuration of the HTTP API.
     */
    versionConfig: RosHttpApi.VersionConfigProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpApiProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiCacheConfigProperty {
        /**
         * @Property pluginStatus: The plugin status.
         */
        readonly pluginStatus?: RosHttpApi.PluginStatusProperty | ros.IResolvable;
        /**
         * @Property cacheKeyStrategy: The cache key strategy.
         */
        readonly cacheKeyStrategy?: string | ros.IResolvable;
        /**
         * @Property cacheTtl: The cache TTL.
         */
        readonly cacheTtl?: number | ros.IResolvable;
        /**
         * @Property embeddingConfig: The embedding configuration.
         */
        readonly embeddingConfig?: RosHttpApi.EmbeddingConfigProperty | ros.IResolvable;
        /**
         * @Property cacheMode: The cache mode.
         */
        readonly cacheMode?: string | ros.IResolvable;
        /**
         * @Property vectorConfig: The vector configuration.
         */
        readonly vectorConfig?: RosHttpApi.VectorConfigProperty | ros.IResolvable;
        /**
         * @Property redisConfig: The Redis configuration.
         */
        readonly redisConfig?: RosHttpApi.RedisConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiFallbackConfigProperty {
        /**
         * @Property serviceConfigs: The service configurations of AI fallback.
         */
        readonly serviceConfigs?: Array<RosHttpApi.AiFallbackConfigServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property onlyRedirectUpstreamCode: Whether to only redirect upstream code.
         */
        readonly onlyRedirectUpstreamCode?: boolean | ros.IResolvable;
        /**
         * @Property routeEmbedded: Whether to route embedded.
         */
        readonly routeEmbedded?: boolean | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiFallbackConfigServiceConfigsProperty {
        /**
         * @Property targetModelName: The target model name.
         */
        readonly targetModelName?: string | ros.IResolvable;
        /**
         * @Property passThroughModelName: Whether to pass through model name.
         */
        readonly passThroughModelName?: boolean | ros.IResolvable;
        /**
         * @Property serviceId: The service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
        /**
         * @Property name: The service name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiNetworkSearchConfigProperty {
        /**
         * @Property searchFrom: The search from configuration.
         */
        readonly searchFrom?: RosHttpApi.SearchFromProperty | ros.IResolvable;
        /**
         * @Property pluginStatus: The plugin status.
         */
        readonly pluginStatus?: RosHttpApi.AiNetworkSearchConfigPluginStatusProperty | ros.IResolvable;
        /**
         * @Property defaultLang: The default language.
         */
        readonly defaultLang?: string | ros.IResolvable;
        /**
         * @Property searchEngineConfig: The search engine configuration.
         */
        readonly searchEngineConfig?: RosHttpApi.SearchEngineConfigProperty | ros.IResolvable;
        /**
         * @Property referenceLocation: The reference location.
         */
        readonly referenceLocation?: string | ros.IResolvable;
        /**
         * @Property referenceFormat: The reference format.
         */
        readonly referenceFormat?: string | ros.IResolvable;
        /**
         * @Property defaultEnable: Whether to default enable.
         */
        readonly defaultEnable?: boolean | ros.IResolvable;
        /**
         * @Property searchRewrite: The search rewrite configuration.
         */
        readonly searchRewrite?: RosHttpApi.SearchRewriteProperty | ros.IResolvable;
        /**
         * @Property needReference: Whether to need reference.
         */
        readonly needReference?: boolean | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiNetworkSearchConfigPluginStatusProperty {
        /**
         * @Property errorLogs: The error logs.
         */
        readonly errorLogs?: string | ros.IResolvable;
        /**
         * @Property serviceHealthy: Whether the service is healthy.
         */
        readonly serviceHealthy?: boolean | ros.IResolvable;
        /**
         * @Property pluginId: The plugin ID.
         */
        readonly pluginId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiSecurityGuardConfigProperty {
        /**
         * @Property serviceAddress: The service address.
         */
        readonly serviceAddress?: string | ros.IResolvable;
        /**
         * @Property checkRequestImage: Whether to check request image.
         */
        readonly checkRequestImage?: boolean | ros.IResolvable;
        /**
         * @Property responseImageCheckService: The response image check service.
         */
        readonly responseImageCheckService?: string | ros.IResolvable;
        /**
         * @Property consumerRiskLevel: The consumer risk level configurations.
         */
        readonly consumerRiskLevel?: Array<RosHttpApi.ConsumerRiskLevelProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property riskAlertLevel: The risk alert level.
         */
        readonly riskAlertLevel?: string | ros.IResolvable;
        /**
         * @Property checkResponse: Whether to check response.
         */
        readonly checkResponse?: boolean | ros.IResolvable;
        /**
         * @Property riskConfig: The risk config configurations.
         */
        readonly riskConfig?: Array<RosHttpApi.RiskConfigProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property consumerRequestCheckService: The consumer request check service configurations.
         */
        readonly consumerRequestCheckService?: Array<RosHttpApi.ConsumerRequestCheckServiceProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property pluginStatus: The plugin status.
         */
        readonly pluginStatus?: RosHttpApi.AiSecurityGuardConfigPluginStatusProperty | ros.IResolvable;
        /**
         * @Property checkResponseImage: Whether to check response image.
         */
        readonly checkResponseImage?: boolean | ros.IResolvable;
        /**
         * @Property requestImageCheckService: The request image check service.
         */
        readonly requestImageCheckService?: string | ros.IResolvable;
        /**
         * @Property requestCheckService: The request check service.
         */
        readonly requestCheckService?: string | ros.IResolvable;
        /**
         * @Property responseCheckService: The response check service.
         */
        readonly responseCheckService?: string | ros.IResolvable;
        /**
         * @Property bufferLimit: The buffer limit.
         */
        readonly bufferLimit?: number | ros.IResolvable;
        /**
         * @Property checkRequest: Whether to check request.
         */
        readonly checkRequest?: boolean | ros.IResolvable;
        /**
         * @Property consumerResponseCheckService: The consumer response check service configurations.
         */
        readonly consumerResponseCheckService?: Array<RosHttpApi.ConsumerResponseCheckServiceProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiSecurityGuardConfigPluginStatusProperty {
        /**
         * @Property errorLogs: The error logs.
         */
        readonly errorLogs?: string | ros.IResolvable;
        /**
         * @Property serviceHealthy: Whether the service is healthy.
         */
        readonly serviceHealthy?: boolean | ros.IResolvable;
        /**
         * @Property pluginId: The plugin ID.
         */
        readonly pluginId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiStatisticsConfigProperty {
        /**
         * @Property pathFieldConfigs: The path field configurations.
         */
        readonly pathFieldConfigs?: Array<RosHttpApi.PathFieldConfigsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property logResponseContent: Whether to log response content.
         */
        readonly logResponseContent?: boolean | ros.IResolvable;
        /**
         * @Property logRequestContent: Whether to log request content.
         */
        readonly logRequestContent?: boolean | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiTokenRateLimitConfigProperty {
        /**
         * @Property pluginStatus: The plugin status.
         */
        readonly pluginStatus?: RosHttpApi.AiTokenRateLimitConfigPluginStatusProperty | ros.IResolvable;
        /**
         * @Property enableGlobalRules: Whether to enable global rules.
         */
        readonly enableGlobalRules?: boolean | ros.IResolvable;
        /**
         * @Property rules: The token rate limit rules.
         */
        readonly rules?: Array<RosHttpApi.RulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property globalRules: The global rules.
         */
        readonly globalRules?: Array<RosHttpApi.GlobalRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property redisConfig: The Redis configuration.
         */
        readonly redisConfig?: RosHttpApi.AiTokenRateLimitConfigRedisConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiTokenRateLimitConfigPluginStatusProperty {
        /**
         * @Property errorLogs: The error logs.
         */
        readonly errorLogs?: string | ros.IResolvable;
        /**
         * @Property serviceHealthy: Whether the service is healthy.
         */
        readonly serviceHealthy?: boolean | ros.IResolvable;
        /**
         * @Property pluginId: The plugin ID.
         */
        readonly pluginId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiTokenRateLimitConfigRedisConfigProperty {
        /**
         * @Property username: The Redis username.
         */
        readonly username?: string | ros.IResolvable;
        /**
         * @Property timeout: The Redis timeout.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property port: The Redis port.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property host: The Redis host.
         */
        readonly host?: string | ros.IResolvable;
        /**
         * @Property password: The Redis password.
         */
        readonly password?: string | ros.IResolvable;
        /**
         * @Property databaseNumber: The Redis database number.
         */
        readonly databaseNumber?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiToolSelectionConfigProperty {
        /**
         * @Property queryRewriting: The query rewriting configuration.
         */
        readonly queryRewriting?: RosHttpApi.QueryRewritingProperty | ros.IResolvable;
        /**
         * @Property pluginStatus: The plugin status.
         */
        readonly pluginStatus?: RosHttpApi.AiToolSelectionConfigPluginStatusProperty | ros.IResolvable;
        /**
         * @Property toolReranking: The tool reranking configuration.
         */
        readonly toolReranking?: RosHttpApi.ToolRerankingProperty | ros.IResolvable;
        /**
         * @Property enableConditions: The enable conditions.
         */
        readonly enableConditions?: RosHttpApi.EnableConditionsProperty | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AiToolSelectionConfigPluginStatusProperty {
        /**
         * @Property errorLogs: The error logs.
         */
        readonly errorLogs?: string | ros.IResolvable;
        /**
         * @Property serviceHealthy: Whether the service is healthy.
         */
        readonly serviceHealthy?: boolean | ros.IResolvable;
        /**
         * @Property pluginId: The plugin ID.
         */
        readonly pluginId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface AuthConfigProperty {
        /**
         * @Property authType: The authentication type.
         */
        readonly authType?: string | ros.IResolvable;
        /**
         * @Property authMode: The authentication mode.
         */
        readonly authMode?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ConditionsProperty {
        /**
         * @Property operator: The operator.
         */
        readonly operator?: string | ros.IResolvable;
        /**
         * @Property type: The match type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The match value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The match key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ConsumerRequestCheckServiceProperty {
        /**
         * @Property requestImageCheckService: The request image check service.
         */
        readonly requestImageCheckService?: string | ros.IResolvable;
        /**
         * @Property matchType: The match type.
         */
        readonly matchType?: string | ros.IResolvable;
        /**
         * @Property requestCheckService: The request check service.
         */
        readonly requestCheckService?: string | ros.IResolvable;
        /**
         * @Property modalityType: The modality type.
         */
        readonly modalityType?: string | ros.IResolvable;
        /**
         * @Property name: The name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ConsumerResponseCheckServiceProperty {
        /**
         * @Property matchType: The match type.
         */
        readonly matchType?: string | ros.IResolvable;
        /**
         * @Property responseImageCheckService: The response image check service.
         */
        readonly responseImageCheckService?: string | ros.IResolvable;
        /**
         * @Property responseCheckService: The response check service.
         */
        readonly responseCheckService?: string | ros.IResolvable;
        /**
         * @Property modalityType: The modality type.
         */
        readonly modalityType?: string | ros.IResolvable;
        /**
         * @Property name: The name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ConsumerRiskLevelProperty {
        /**
         * @Property type: The type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property matchType: The match type.
         */
        readonly matchType?: string | ros.IResolvable;
        /**
         * @Property level: The level.
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property name: The name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ConsumerRulesProperty {
        /**
         * @Property pattern: The pattern.
         */
        readonly pattern?: string | ros.IResolvable;
        /**
         * @Property matchType: The match type.
         */
        readonly matchType?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ContextSelectionProperty {
        /**
         * @Property type: The type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface CustomDomainInfosProperty {
        /**
         * @Property domainId: The domain ID.
         */
        readonly domainId?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property name: The domain name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface DeployConfigsProperty {
        /**
         * @Property gatewayInfo: The gateway info.
         */
        readonly gatewayInfo?: RosHttpApi.GatewayInfoProperty | ros.IResolvable;
        /**
         * @Property autoDeploy: Whether to auto deploy.
         */
        readonly autoDeploy?: boolean | ros.IResolvable;
        /**
         * @Property backendScene: The backend scene.
         */
        readonly backendScene?: string | ros.IResolvable;
        /**
         * @Property subDomains: The sub domains.
         */
        readonly subDomains?: Array<RosHttpApi.SubDomainsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property customDomainIds: The custom domain IDs.
         */
        readonly customDomainIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property gatewayType: The gateway type.
         */
        readonly gatewayType?: string | ros.IResolvable;
        /**
         * @Property serviceConfigs: The service configurations.
         */
        readonly serviceConfigs?: Array<RosHttpApi.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property routeBackend: The backend service.
         */
        readonly routeBackend?: RosHttpApi.RouteBackendProperty | ros.IResolvable;
        /**
         * @Property gatewayId: The gateway ID.
         */
        readonly gatewayId?: string | ros.IResolvable;
        /**
         * @Property mock: The mock configuration.
         */
        readonly mock?: RosHttpApi.MockProperty | ros.IResolvable;
        /**
         * @Property environmentId: The environment ID.
         */
        readonly environmentId?: string | ros.IResolvable;
        /**
         * @Property customDomainInfos: The custom domain informations.
         */
        readonly customDomainInfos?: Array<RosHttpApi.CustomDomainInfosProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property policyConfigs: The policy configurations of the deploy config.
         */
        readonly policyConfigs?: Array<RosHttpApi.PolicyConfigsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface EmbeddingConfigProperty {
        /**
         * @Property type: The embedding type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property modelName: The embedding model name.
         */
        readonly modelName?: string | ros.IResolvable;
        /**
         * @Property timeout: The embedding timeout.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property serviceId: The embedding service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface EnableConditionsProperty {
        /**
         * @Property toolCountThreshold: The tool count threshold.
         */
        readonly toolCountThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface GatewayInfoProperty {
        /**
         * @Property engineVersion: The engine version.
         */
        readonly engineVersion?: string | ros.IResolvable;
        /**
         * @Property vpcInfo: The VPC info.
         */
        readonly vpcInfo?: RosHttpApi.VpcInfoProperty | ros.IResolvable;
        /**
         * @Property gatewayId: The gateway ID.
         */
        readonly gatewayId?: string | ros.IResolvable;
        /**
         * @Property name: The gateway name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface GlobalRulesProperty {
        /**
         * @Property matchType: The match type.
         */
        readonly matchType?: string | ros.IResolvable;
        /**
         * @Property matchKey: The match key.
         */
        readonly matchKey?: string | ros.IResolvable;
        /**
         * @Property limitMode: The limit mode.
         */
        readonly limitMode?: string | ros.IResolvable;
        /**
         * @Property matchValue: The match value.
         */
        readonly matchValue?: string | ros.IResolvable;
        /**
         * @Property limitType: The limit type.
         */
        readonly limitType?: string | ros.IResolvable;
        /**
         * @Property limitValue: The limit value.
         */
        readonly limitValue?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface IngressConfigProperty {
        /**
         * @Property environmentId: The environment ID of the ingress config.
         */
        readonly environmentId?: string | ros.IResolvable;
        /**
         * @Property ingressClass: The ingress class of the ingress config.
         */
        readonly ingressClass?: string | ros.IResolvable;
        /**
         * @Property clusterId: The cluster ID of the ingress config.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property overrideIngressIp: Whether to override the ingress IP.
         */
        readonly overrideIngressIp?: boolean | ros.IResolvable;
        /**
         * @Property sourceId: The source ID of the ingress config.
         */
        readonly sourceId?: string | ros.IResolvable;
        /**
         * @Property watchNamespace: The watch namespace of the ingress config.
         */
        readonly watchNamespace?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface MatchProperty {
        /**
         * @Property default: Whether it is the default match condition.
         */
        readonly default?: boolean | ros.IResolvable;
        /**
         * @Property conditions: The match conditions.
         */
        readonly conditions?: Array<RosHttpApi.ConditionsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface MockProperty {
        /**
         * @Property responseContent: The mock response content.
         */
        readonly responseContent?: string | ros.IResolvable;
        /**
         * @Property responseCode: The mock response code.
         */
        readonly responseCode?: number | ros.IResolvable;
        /**
         * @Property enable: Whether to enable mock.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ModelServiceProperty {
        /**
         * @Property timeoutMillisecond: The timeout in milliseconds.
         */
        readonly timeoutMillisecond?: number | ros.IResolvable;
        /**
         * @Property modelName: The model name.
         */
        readonly modelName?: string | ros.IResolvable;
        /**
         * @Property serviceId: The service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ObservabilityRouteConfigProperty {
        /**
         * @Property rateLimit: The observability rate limit.
         */
        readonly rateLimit?: number | ros.IResolvable;
        /**
         * @Property queueSize: The observability queue size.
         */
        readonly queueSize?: number | ros.IResolvable;
        /**
         * @Property mode: The observability route mode.
         */
        readonly mode?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface PathFieldConfigsProperty {
        /**
         * @Property path: The path.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property fieldPaths: The field paths.
         */
        readonly fieldPaths?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface PluginStatusProperty {
        /**
         * @Property errorLogs: The error logs.
         */
        readonly errorLogs?: string | ros.IResolvable;
        /**
         * @Property serviceHealthy: Whether the service is healthy.
         */
        readonly serviceHealthy?: boolean | ros.IResolvable;
        /**
         * @Property pluginId: The plugin ID.
         */
        readonly pluginId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface PolicyConfigsProperty {
        /**
         * @Property aiStatisticsConfig: The AI statistics configuration.
         */
        readonly aiStatisticsConfig?: RosHttpApi.AiStatisticsConfigProperty | ros.IResolvable;
        /**
         * @Property aiNetworkSearchConfig: The AI network search configuration.
         */
        readonly aiNetworkSearchConfig?: RosHttpApi.AiNetworkSearchConfigProperty | ros.IResolvable;
        /**
         * @Property type: The policy template type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property aiFallbackConfig: The AI fallback configuration.
         */
        readonly aiFallbackConfig?: RosHttpApi.AiFallbackConfigProperty | ros.IResolvable;
        /**
         * @Property aiTokenRateLimitConfig: The AI token rate limit configuration.
         */
        readonly aiTokenRateLimitConfig?: RosHttpApi.AiTokenRateLimitConfigProperty | ros.IResolvable;
        /**
         * @Property aiCacheConfig: The AI cache configuration.
         */
        readonly aiCacheConfig?: RosHttpApi.AiCacheConfigProperty | ros.IResolvable;
        /**
         * @Property aiSecurityGuardConfig: The AI security guard configuration.
         */
        readonly aiSecurityGuardConfig?: RosHttpApi.AiSecurityGuardConfigProperty | ros.IResolvable;
        /**
         * @Property enable: Whether to enable the policy.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property semanticRouterConfig: The semantic router configuration.
         */
        readonly semanticRouterConfig?: RosHttpApi.SemanticRouterConfigProperty | ros.IResolvable;
        /**
         * @Property aiToolSelectionConfig: The AI tool selection configuration.
         */
        readonly aiToolSelectionConfig?: RosHttpApi.AiToolSelectionConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface PromptConfigProperty {
        /**
         * @Property type: The prompt type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property customPrompt: The custom prompt.
         */
        readonly customPrompt?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface QueryRewritingProperty {
        /**
         * @Property fallbackStrategy: The fallback strategy.
         */
        readonly fallbackStrategy?: string | ros.IResolvable;
        /**
         * @Property promptConfig: The prompt configuration.
         */
        readonly promptConfig?: RosHttpApi.PromptConfigProperty | ros.IResolvable;
        /**
         * @Property triggerConditions: The trigger conditions.
         */
        readonly triggerConditions?: RosHttpApi.TriggerConditionsProperty | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable query rewriting.
         */
        readonly enabled?: boolean | ros.IResolvable;
        /**
         * @Property contextSelection: The context selection.
         */
        readonly contextSelection?: RosHttpApi.ContextSelectionProperty | ros.IResolvable;
        /**
         * @Property maxOutputTokens: The max output tokens.
         */
        readonly maxOutputTokens?: number | ros.IResolvable;
        /**
         * @Property modelService: The model service configuration.
         */
        readonly modelService?: RosHttpApi.ModelServiceProperty | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface RedisConfigProperty {
        /**
         * @Property username: The Redis username.
         */
        readonly username?: string | ros.IResolvable;
        /**
         * @Property timeout: The Redis timeout.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property port: The Redis port.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property host: The Redis host.
         */
        readonly host?: string | ros.IResolvable;
        /**
         * @Property password: The Redis password.
         */
        readonly password?: string | ros.IResolvable;
        /**
         * @Property databaseNumber: The Redis database number.
         */
        readonly databaseNumber?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface RiskConfigProperty {
        /**
         * @Property type: The type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property consumerRules: The consumer rules.
         */
        readonly consumerRules?: RosHttpApi.ConsumerRulesProperty | ros.IResolvable;
        /**
         * @Property level: The level.
         */
        readonly level?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface RouteBackendProperty {
        /**
         * @Property services: The services of the route backend.
         */
        readonly services?: Array<RosHttpApi.ServicesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scene: The scene of the route backend.
         */
        readonly scene?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface RulesProperty {
        /**
         * @Property matchType: The match type.
         */
        readonly matchType?: string | ros.IResolvable;
        /**
         * @Property matchKey: The match key.
         */
        readonly matchKey?: string | ros.IResolvable;
        /**
         * @Property limitMode: The limit mode.
         */
        readonly limitMode?: string | ros.IResolvable;
        /**
         * @Property matchValue: The match value.
         */
        readonly matchValue?: string | ros.IResolvable;
        /**
         * @Property limitType: The limit type.
         */
        readonly limitType?: string | ros.IResolvable;
        /**
         * @Property limitValue: The limit value.
         */
        readonly limitValue?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface SearchEngineConfigProperty {
        /**
         * @Property industry: The search engine industry.
         */
        readonly industry?: string | ros.IResolvable;
        /**
         * @Property timeRange: The search engine time range.
         */
        readonly timeRange?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property type: The search engine type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property timeoutMillisecond: The search engine timeout in milliseconds.
         */
        readonly timeoutMillisecond?: number | ros.IResolvable;
        /**
         * @Property apiKey: The search engine API key.
         */
        readonly apiKey?: string | ros.IResolvable;
        /**
         * @Property endpoint: The search engine endpoint.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property start: The search engine start.
         */
        readonly start?: number | ros.IResolvable;
        /**
         * @Property contentMode: The search engine content mode.
         */
        readonly contentMode?: string | ros.IResolvable;
        /**
         * @Property optionArgs: The search engine option args.
         */
        readonly optionArgs?: string | ros.IResolvable;
        /**
         * @Property count: The search engine count.
         */
        readonly count?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface SearchFromProperty {
        /**
         * @Property industry: The search from industry.
         */
        readonly industry?: string | ros.IResolvable;
        /**
         * @Property timeRange: The search from time range.
         */
        readonly timeRange?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property type: The search from type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property timeoutMillisecond: The search from timeout in milliseconds.
         */
        readonly timeoutMillisecond?: number | ros.IResolvable;
        /**
         * @Property apiKey: The search from API key.
         */
        readonly apiKey?: string | ros.IResolvable;
        /**
         * @Property endpoint: The search from endpoint.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property start: The search from start.
         */
        readonly start?: number | ros.IResolvable;
        /**
         * @Property contentMode: The search from content mode.
         */
        readonly contentMode?: string | ros.IResolvable;
        /**
         * @Property optionArgs: The search from option args.
         */
        readonly optionArgs?: string | ros.IResolvable;
        /**
         * @Property count: The search from count.
         */
        readonly count?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface SearchRewriteProperty {
        /**
         * @Property timeoutMillisecond: The search rewrite timeout in milliseconds.
         */
        readonly timeoutMillisecond?: number | ros.IResolvable;
        /**
         * @Property modelName: The search rewrite model name.
         */
        readonly modelName?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to enable search rewrite.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property maxCount: The search rewrite max count.
         */
        readonly maxCount?: number | ros.IResolvable;
        /**
         * @Property serviceId: The search rewrite service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface SemanticRouterConfigProperty {
        /**
         * @Property timeoutMillisecond: The timeout in milliseconds.
         */
        readonly timeoutMillisecond?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ServiceConfigsProperty {
        /**
         * @Property modelName: The model name.
         */
        readonly modelName?: string | ros.IResolvable;
        /**
         * @Property intentCode: The intent code.
         */
        readonly intentCode?: string | ros.IResolvable;
        /**
         * @Property port: The service port.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property modelNamePattern: The model name pattern.
         */
        readonly modelNamePattern?: string | ros.IResolvable;
        /**
         * @Property observabilityRouteConfig: The observability route config.
         */
        readonly observabilityRouteConfig?: RosHttpApi.ObservabilityRouteConfigProperty | ros.IResolvable;
        /**
         * @Property weight: The service weight.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property serviceId: The service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
        /**
         * @Property match: The match conditions.
         */
        readonly match?: RosHttpApi.MatchProperty | ros.IResolvable;
        /**
         * @Property name: The service name.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property gatewayServiceId: The gateway service ID.
         */
        readonly gatewayServiceId?: string | ros.IResolvable;
        /**
         * @Property version: The service version.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property multiServiceRouteStrategy: The multi service route strategy.
         */
        readonly multiServiceRouteStrategy?: string | ros.IResolvable;
        /**
         * @Property protocol: The service protocol.
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ServicesProperty {
        /**
         * @Property version: The service version.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property port: The service port.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: The service protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property weight: The service weight.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property serviceId: The service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
        /**
         * @Property name: The service name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface SubDomainsProperty {
        /**
         * @Property domainId: The domain ID.
         */
        readonly domainId?: string | ros.IResolvable;
        /**
         * @Property networkType: The network type.
         */
        readonly networkType?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property name: The domain name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ToolRerankingProperty {
        /**
         * @Property filteringMethod: The filtering method.
         */
        readonly filteringMethod?: string | ros.IResolvable;
        /**
         * @Property topKPercent: The top K percent.
         */
        readonly topKPercent?: number | ros.IResolvable;
        /**
         * @Property fallbackStrategy: The fallback strategy.
         */
        readonly fallbackStrategy?: string | ros.IResolvable;
        /**
         * @Property scoreThreshold: The score threshold.
         */
        readonly scoreThreshold?: number | ros.IResolvable;
        /**
         * @Property topNCount: The top N count.
         */
        readonly topNCount?: number | ros.IResolvable;
        /**
         * @Property modelService: The model service configuration.
         */
        readonly modelService?: RosHttpApi.ToolRerankingModelServiceProperty | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface ToolRerankingModelServiceProperty {
        /**
         * @Property timeoutMillisecond: The timeout in milliseconds.
         */
        readonly timeoutMillisecond?: number | ros.IResolvable;
        /**
         * @Property modelName: The model name.
         */
        readonly modelName?: string | ros.IResolvable;
        /**
         * @Property serviceId: The service ID.
         */
        readonly serviceId?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface TriggerConditionsProperty {
        /**
         * @Property messageCountThreshold: The message count threshold.
         */
        readonly messageCountThreshold?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface VectorConfigProperty {
        /**
         * @Property type: The vector type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property apiKey: The vector API key.
         */
        readonly apiKey?: string | ros.IResolvable;
        /**
         * @Property timeout: The vector timeout.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property collectionId: The vector collection ID.
         */
        readonly collectionId?: string | ros.IResolvable;
        /**
         * @Property serviceHost: The vector service host.
         */
        readonly serviceHost?: string | ros.IResolvable;
        /**
         * @Property threshold: The vector threshold.
         */
        readonly threshold?: number | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface VersionConfigProperty {
        /**
         * @Property scheme: The scheme of the version config.
         */
        readonly scheme?: string | ros.IResolvable;
        /**
         * @Property headerName: The header name of the version config.
         */
        readonly headerName?: string | ros.IResolvable;
        /**
         * @Property version: The version of the version config.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to enable the version config.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property queryName: The query name of the version config.
         */
        readonly queryName?: string | ros.IResolvable;
    }
}
export declare namespace RosHttpApi {
    /**
     * @stability external
     */
    interface VpcInfoProperty {
        /**
         * @Property vpcId: The VPC ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property name: The VPC name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosOperation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
export interface RosOperationProps {
    /**
     * @Property httpApiId: The HTTP API ID to which the interface belongs
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property method: The method of http protocol.
     */
    readonly method: string | ros.IResolvable;
    /**
     * @Property operationName: The name of the operation.
     */
    readonly operationName: string | ros.IResolvable;
    /**
     * @Property path: The interface path of the operation.
     */
    readonly path: string | ros.IResolvable;
    /**
     * @Property description: The description of the operation.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property mock: Mock configuration.
     */
    readonly mock?: RosOperation.MockProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Operation`, which is used to create an operation for an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `Operation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
export declare class RosOperation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Operation";
    /**
     * @Attribute CreateTime: The creation timestamp of the operation.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the operation.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Method: The method of http protocol.
     */
    readonly attrMethod: ros.IResolvable;
    /**
     * @Attribute Mock: Mock configuration.
     */
    readonly attrMock: ros.IResolvable;
    /**
     * @Attribute OperationId: The ID of the operation.
     */
    readonly attrOperationId: ros.IResolvable;
    /**
     * @Attribute OperationName: The name of the resource.
     */
    readonly attrOperationName: ros.IResolvable;
    /**
     * @Attribute Path: The interface path of the operation.
     */
    readonly attrPath: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiId: The HTTP API ID to which the interface belongs
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property method: The method of http protocol.
     */
    method: string | ros.IResolvable;
    /**
     * @Property operationName: The name of the operation.
     */
    operationName: string | ros.IResolvable;
    /**
     * @Property path: The interface path of the operation.
     */
    path: string | ros.IResolvable;
    /**
     * @Property description: The description of the operation.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property mock: Mock configuration.
     */
    mock: RosOperation.MockProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOperationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosOperation {
    /**
     * @stability external
     */
    interface MockProperty {
        /**
         * @Property responseContent: Response content.
         */
        readonly responseContent?: string | ros.IResolvable;
        /**
         * @Property responseCode: Response Status Code.
         */
        readonly responseCode: number | ros.IResolvable;
        /**
         * @Property enable: Whether to enable Mock in the interface path.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPlugin`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
export interface RosPluginProps {
    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Plugin`, which is used to create a plug-in.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugin` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
export declare class RosPlugin extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Plugin";
    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * @Attribute GatewayName: The name of the gateway.
     */
    readonly attrGatewayName: ros.IResolvable;
    /**
     * @Attribute PluginClassId: The ID of the plugin class.
     */
    readonly attrPluginClassId: ros.IResolvable;
    /**
     * @Attribute PluginId: The ID of the plugin.
     */
    readonly attrPluginId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    gatewayId: string | ros.IResolvable;
    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    pluginClassId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosPluginAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export interface RosPluginAttachmentProps {
    /**
     * @Property pluginInfo: The information about the association of plugin with gateway instance.
     */
    readonly pluginInfo: RosPluginAttachment.PluginInfoProperty | ros.IResolvable;
    /**
     * @Property attachResourceId: The resource ID to be attached by the plugin.
     */
    readonly attachResourceId?: string | ros.IResolvable;
    /**
     * @Property attachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    readonly attachResourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property attachResourceType: The type of the resource to be attached by the plugin.
     */
    readonly attachResourceType?: string | ros.IResolvable;
    /**
     * @Property enable: Whether to enable this plugin, default value is false.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property environmentId: The ID of the environment.
     */
    readonly environmentId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::PluginAttachment`, which is used to bind a plug-in.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export declare class RosPluginAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::PluginAttachment";
    /**
     * @Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    readonly attrAttachResourceId: ros.IResolvable;
    /**
     * @Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    readonly attrAttachResourceIds: ros.IResolvable;
    /**
     * @Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    readonly attrAttachResourceNames: ros.IResolvable;
    /**
     * @Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    readonly attrAttachResourceParentIds: ros.IResolvable;
    /**
     * @Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    readonly attrAttachResourceType: ros.IResolvable;
    /**
     * @Attribute Enable: Whether to enable this plugin.
     */
    readonly attrEnable: ros.IResolvable;
    /**
     * @Attribute EnvironmentId: The ID of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * @Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    readonly attrPluginAttachmentId: ros.IResolvable;
    /**
     * @Attribute PluginClassInfo: The type of the plugin.
     */
    readonly attrPluginClassInfo: ros.IResolvable;
    /**
     * @Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    readonly attrPluginInfo: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property pluginInfo: The information about the association of plugin with gateway instance.
     */
    pluginInfo: RosPluginAttachment.PluginInfoProperty | ros.IResolvable;
    /**
     * @Property attachResourceId: The resource ID to be attached by the plugin.
     */
    attachResourceId: string | ros.IResolvable | undefined;
    /**
     * @Property attachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property attachResourceType: The type of the resource to be attached by the plugin.
     */
    attachResourceType: string | ros.IResolvable | undefined;
    /**
     * @Property enable: Whether to enable this plugin, default value is false.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property environmentId: The ID of the environment.
     */
    environmentId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPluginAttachment {
    /**
     * @stability external
     */
    interface PluginInfoProperty {
        /**
         * @Property pluginConfig: The information about the association of plugin with gateway instance. The value of this parameter must be transmitted using Base64 encoding.
         */
        readonly pluginConfig?: string | ros.IResolvable;
        /**
         * @Property gatewayId: The ID of the Gateway.
         */
        readonly gatewayId: string | ros.IResolvable;
        /**
         * @Property pluginId: The ID of plugin and gateway association.
         */
        readonly pluginId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPluginClass`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
export interface RosPluginClassProps {
    /**
     * @Property description: The description of the plugin class.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property executePriority: The execute priority of the Plugin.
     */
    readonly executePriority: number | ros.IResolvable;
    /**
     * @Property executeStage: The Execution stage.
     */
    readonly executeStage: string | ros.IResolvable;
    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    readonly pluginClassName: string | ros.IResolvable;
    /**
     * @Property version: The version of plugin class.
     */
    readonly version: string | ros.IResolvable;
    /**
     * @Property versionDescription: The description of the version .
     */
    readonly versionDescription: string | ros.IResolvable;
    /**
     * @Property wasmLanguage: the language of the wasm.
     */
    readonly wasmLanguage: string | ros.IResolvable;
    /**
     * @Property wasmUrl: The url of the wasm.
     */
    readonly wasmUrl: string | ros.IResolvable;
    /**
     * @Property alias: The alias of the plugin class.
     */
    readonly alias?: string | ros.IResolvable;
    /**
     * @Property supportedMinGatewayVersion: The supported minimum gateway version.
     */
    readonly supportedMinGatewayVersion?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::PluginClass`, which is used to create a plug-in class.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginClass` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
export declare class RosPluginClass extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::PluginClass";
    /**
     * @Attribute Alias: The alias of the plugin class.
     */
    readonly attrAlias: ros.IResolvable;
    /**
     * @Attribute Description: The description of the plugin class.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Document: The document of plugin.
     */
    readonly attrDocument: ros.IResolvable;
    /**
     * @Attribute PluginClassName: The name of the plugin class.
     */
    readonly attrPluginClassName: ros.IResolvable;
    /**
     * @Attribute Type: The type of the plugin class.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute WasmLanguage: Wasm language.
     */
    readonly attrWasmLanguage: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the plugin class.
     */
    description: string | ros.IResolvable;
    /**
     * @Property executePriority: The execute priority of the Plugin.
     */
    executePriority: number | ros.IResolvable;
    /**
     * @Property executeStage: The Execution stage.
     */
    executeStage: string | ros.IResolvable;
    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    pluginClassName: string | ros.IResolvable;
    /**
     * @Property version: The version of plugin class.
     */
    version: string | ros.IResolvable;
    /**
     * @Property versionDescription: The description of the version .
     */
    versionDescription: string | ros.IResolvable;
    /**
     * @Property wasmLanguage: the language of the wasm.
     */
    wasmLanguage: string | ros.IResolvable;
    /**
     * @Property wasmUrl: The url of the wasm.
     */
    wasmUrl: string | ros.IResolvable;
    /**
     * @Property alias: The alias of the plugin class.
     */
    alias: string | ros.IResolvable | undefined;
    /**
     * @Property supportedMinGatewayVersion: The supported minimum gateway version.
     */
    supportedMinGatewayVersion: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginClassProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
export interface RosPolicyProps {
    /**
     * @Property attachResourceIds: The Mount point id list.
     */
    readonly attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property attachResourceType: Policies support mount point types.
     * HttpApi:HttpApi.
     * Operation: the Operation of the HttpApi.
     * GatewayRoute: Gateway route.
     * GatewayService: Gateway service.
     * GatewayServicePort: The Gateway service port.
     * Domain: The Gateway Domain name.
     * Gateway: Gateway.
     */
    readonly attachResourceType: string | ros.IResolvable;
    /**
     * @Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * @Property policyClassName: The name of the policy class.
     */
    readonly policyClassName: string | ros.IResolvable;
    /**
     * @Property policyConfig: Policy Configuration.
     */
    readonly policyConfig: string | ros.IResolvable;
    /**
     * @Property policyName: The name of the policy.
     */
    readonly policyName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Policy`, which is used to create a policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
export declare class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Policy";
    /**
     * @Attribute PolicyClassId: The ID of policy class.
     */
    readonly attrPolicyClassId: ros.IResolvable;
    /**
     * @Attribute PolicyClassName: The name of policy class.
     */
    readonly attrPolicyClassName: ros.IResolvable;
    /**
     * @Attribute PolicyConfig: Policy Configuration.
     */
    readonly attrPolicyConfig: ros.IResolvable;
    /**
     * @Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable;
    /**
     * @Attribute PolicyName: The name of the policy.
     */
    readonly attrPolicyName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property attachResourceIds: The Mount point id list.
     */
    attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property attachResourceType: Policies support mount point types.
     * HttpApi:HttpApi.
     * Operation: the Operation of the HttpApi.
     * GatewayRoute: Gateway route.
     * GatewayService: Gateway service.
     * GatewayServicePort: The Gateway service port.
     * Domain: The Gateway Domain name.
     * Gateway: Gateway.
     */
    attachResourceType: string | ros.IResolvable;
    /**
     * @Property environmentId: The id of the environment.
     */
    environmentId: string | ros.IResolvable;
    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    gatewayId: string | ros.IResolvable;
    /**
     * @Property policyClassName: The name of the policy class.
     */
    policyClassName: string | ros.IResolvable;
    /**
     * @Property policyConfig: Policy Configuration.
     */
    policyConfig: string | ros.IResolvable;
    /**
     * @Property policyName: The name of the policy.
     */
    policyName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosRoute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
export interface RosRouteProps {
    /**
     * @Property backend: Backend service configuration for routing.
     */
    readonly backend: RosRoute.BackendProperty | ros.IResolvable;
    /**
     * @Property environmentInfo: The information if the environment.
     */
    readonly environmentInfo: RosRoute.EnvironmentInfoProperty | ros.IResolvable;
    /**
     * @Property httpApiId: The ID of the API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property match: The match rule of route resource.
     */
    readonly match: RosRoute.MatchProperty | ros.IResolvable;
    /**
     * @Property routeName: The name of the route.
     */
    readonly routeName: string | ros.IResolvable;
    /**
     * @Property description: The description of route.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property domainIds: The list of domain name IDs.
     */
    readonly domainIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property domainInfos: Domain items.
     */
    readonly domainInfos?: Array<RosRoute.DomainInfosProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Route`, which is used to create a route for an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `Route` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
export declare class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Route";
    /**
     * @Attribute Backend: Backend services.
     */
    readonly attrBackend: ros.IResolvable;
    /**
     * @Attribute Description: The description of route resource.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DomainInfos: Domain items.
     */
    readonly attrDomainInfos: ros.IResolvable;
    /**
     * @Attribute EnvironmentInfo: Environment information.
     */
    readonly attrEnvironmentInfo: ros.IResolvable;
    /**
     * @Attribute Match: The match rule of route resource.
     */
    readonly attrMatch: ros.IResolvable;
    /**
     * @Attribute RouteId: The ID of route resource.
     */
    readonly attrRouteId: ros.IResolvable;
    /**
     * @Attribute RouteName: The name of the route.
     */
    readonly attrRouteName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backend: Backend service configuration for routing.
     */
    backend: RosRoute.BackendProperty | ros.IResolvable;
    /**
     * @Property environmentInfo: The information if the environment.
     */
    environmentInfo: RosRoute.EnvironmentInfoProperty | ros.IResolvable;
    /**
     * @Property httpApiId: The ID of the API.
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property match: The match rule of route resource.
     */
    match: RosRoute.MatchProperty | ros.IResolvable;
    /**
     * @Property routeName: The name of the route.
     */
    routeName: string | ros.IResolvable;
    /**
     * @Property description: The description of route.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property domainIds: The list of domain name IDs.
     */
    domainIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property domainInfos: Domain items.
     */
    domainInfos: Array<RosRoute.DomainInfosProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface BackendProperty {
        /**
         * @Property services: Backend service scenario.
         */
        readonly services: Array<RosRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scene: Backend service scene.
         */
        readonly scene: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface DomainInfosProperty {
        /**
         * @Property domainId: The ID of the Domain.
         */
        readonly domainId?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol of the Domain.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property name: The name of the Domain.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface EnvironmentInfoProperty {
        /**
         * @Property gatewayInfo: The information of the gateway.
         */
        readonly gatewayInfo?: RosRoute.GatewayInfoProperty | ros.IResolvable;
        /**
         * @Property environmentId: The ID if the environment.
         */
        readonly environmentId: string | ros.IResolvable;
        /**
         * @Property alias: The alias of the environment.
         */
        readonly alias?: string | ros.IResolvable;
        /**
         * @Property subDomains: Sub domains.
         */
        readonly subDomains?: Array<RosRoute.SubDomainsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: The name of the environment.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface GatewayInfoProperty {
        /**
         * @Property gatewayId: The ID of the Gateway.
         */
        readonly gatewayId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the Gateway.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface HeadersProperty {
        /**
         * @Property type: The type of the header match rule.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value of the value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of the header.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface MatchProperty {
        /**
         * @Property path: path rule.
         */
        readonly path: RosRoute.PathProperty | ros.IResolvable;
        /**
         * @Property headers: Http request header matching rule list
         */
        readonly headers?: Array<RosRoute.HeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queryParams: List of query request parameter matching rules
         */
        readonly queryParams?: Array<RosRoute.QueryParamsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property methods: Request method list.
         */
        readonly methods?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ignoreUriCase: Is the path case-insensitive.
         */
        readonly ignoreUriCase?: boolean | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface PathProperty {
        /**
         * @Property type: route match rule.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property value: path value.
         */
        readonly value: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface QueryParamsProperty {
        /**
         * @Property type: query param match rule.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value of query param.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of query param.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface ServicesProperty {
        /**
         * @Property version: The version of the service.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property port: The port of the service.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: service protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of the traffic.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property name: The name of the service.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the service.
         */
        readonly serviceId?: string | ros.IResolvable;
    }
}
export declare namespace RosRoute {
    /**
     * @stability external
     */
    interface SubDomainsProperty {
        /**
         * @Property domainId: The ID of the sub domain.
         */
        readonly domainId?: string | ros.IResolvable;
        /**
         * @Property networkType: The access type of the domain network.
         */
        readonly networkType?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol of the sub domain.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property name: The name of the sub domain.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export interface RosServiceProps {
    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * @Property addresses: Service Address List.
     */
    readonly addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aiServiceConfig: AI service configuration when SourceType equals AI.
     */
    readonly aiServiceConfig?: RosService.AiServiceConfigProperty | ros.IResolvable;
    /**
     * @Property groupName: The service group name.
     * Required when SourceType is MSE_NACOS.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the service:
     * - SourceType is K8S, indicating the namespace of the K8S service.
     * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
     * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
     */
    readonly namespace?: string | ros.IResolvable;
    /**
     * @Property qualifier: The function version or alias.
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceName: The name of the service, need to fill in manually when SourceType is VIP\/DNS\/AI.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * @Property sourceType: The type of the service source, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    readonly sourceType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Service`, which is used to create a service.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export declare class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Service";
    /**
     * @Attribute Addresses: Service Address List.
     */
    readonly attrAddresses: ros.IResolvable;
    /**
     * @Attribute AiServiceConfig: AI service configuration when SourceType equals AI.
     */
    readonly attrAiServiceConfig: ros.IResolvable;
    /**
     * @Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * @Attribute GroupName: The service group name.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace of the service:.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute Qualifier: The function version or alias.
     */
    readonly attrQualifier: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ServiceId: The ID of the service.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.
     */
    readonly attrServiceName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    gatewayId: string | ros.IResolvable;
    /**
     * @Property addresses: Service Address List.
     */
    addresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property aiServiceConfig: AI service configuration when SourceType equals AI.
     */
    aiServiceConfig: RosService.AiServiceConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property groupName: The service group name.
     * Required when SourceType is MSE_NACOS.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property namespace: The namespace of the service:
     * - SourceType is K8S, indicating the namespace of the K8S service.
     * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
     * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
     */
    namespace: string | ros.IResolvable | undefined;
    /**
     * @Property qualifier: The function version or alias.
     */
    qualifier: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceName: The name of the service, need to fill in manually when SourceType is VIP\/DNS\/AI.
     */
    serviceName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceType: The type of the service source, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    sourceType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosService {
    /**
     * @stability external
     */
    interface AiServiceConfigProperty {
        /**
         * @Property apiKeys: Api key list.
         */
        readonly apiKeys?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property protocols: Model protocol list.
         */
        readonly protocols?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property address: AI provider address.
         */
        readonly address?: string | ros.IResolvable;
        /**
         * @Property enableHealthCheck: whether enable health check.
         */
        readonly enableHealthCheck?: boolean | ros.IResolvable;
        /**
         * @Property provider: AI model provider.
         */
        readonly provider?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
export interface RosSourceProps {
    /**
     * @Property gatewayId: The gateway ID.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * @Property k8SSourceConfig: The K8s source configuration.
     */
    readonly k8SSourceConfig?: RosSource.K8sSourceConfigProperty | ros.IResolvable;
    /**
     * @Property nacosSourceConfig: The Nacos source configuration.
     */
    readonly nacosSourceConfig?: RosSource.NacosSourceConfigProperty | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property type: The source type:
     * - MSE_NACOS: MSE Nacos.
     * - K8S: Container service.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Source`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Source` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
export declare class RosSource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Source";
    /**
     * @Attribute SourceId: The ID of the source.
     */
    readonly attrSourceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The gateway ID.
     */
    gatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property k8SSourceConfig: The K8s source configuration.
     */
    k8SSourceConfig: RosSource.K8sSourceConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property nacosSourceConfig: The Nacos source configuration.
     */
    nacosSourceConfig: RosSource.NacosSourceConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property type: The source type:
     * - MSE_NACOS: MSE Nacos.
     * - K8S: Container service.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSourceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSource {
    /**
     * @stability external
     */
    interface AuthorizeSecurityGroupRulesProperty {
        /**
         * @Property description: The description of the security group rule.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property portRanges: The port ranges for the security group rule.
         */
        readonly portRanges?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosSource {
    /**
     * @stability external
     */
    interface K8sSourceConfigProperty {
        /**
         * @Property clusterId: The cluster ID of the container service source.
         */
        readonly clusterId: string | ros.IResolvable;
        /**
         * @Property authorizeSecurityGroupRules: The security group rules for authorization.
         */
        readonly authorizeSecurityGroupRules?: Array<RosSource.AuthorizeSecurityGroupRulesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosSource {
    /**
     * @stability external
     */
    interface NacosSourceConfigProperty {
        /**
         * @Property instanceId: The instance ID of the Nacos source.
         */
        readonly instanceId: string | ros.IResolvable;
    }
}
