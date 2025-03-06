import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApiAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export interface RosApiAttachmentProps {
    /**
     * @Property backendScene: API release scenario.
     */
    readonly backendScene: string | ros.IResolvable;
    /**
     * @Property environmentId: The ID of the environment to which the API is to deploy.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property serviceConfigs: Services associated with API publishing and their configurations.
     */
    readonly serviceConfigs: Array<RosApiAttachment.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
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
     * @Attribute EnvironmentId: The ID of the environment to which the API is to deploy.
     */
    readonly attrEnvironmentId: ros.IResolvable;
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
     * @Property backendScene: API release scenario.
     */
    backendScene: string | ros.IResolvable;
    /**
     * @Property environmentId: The ID of the environment to which the API is to deploy.
     */
    environmentId: string | ros.IResolvable;
    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property serviceConfigs: Services associated with API publishing and their configurations.
     */
    serviceConfigs: Array<RosApiAttachment.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
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
export declare namespace RosApiAttachment {
    /**
     * @stability external
     */
    interface ConditionsProperty {
        /**
         * @Property operator: The operator. Exact\/Prefix\/Regex.
         */
        readonly operator?: string | ros.IResolvable;
        /**
         * @Property type: The type of the match.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Param value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Param key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosApiAttachment {
    /**
     * @stability external
     */
    interface MatchProperty {
        /**
         * @Property defaultMatch: Match default condition or not.
         */
        readonly defaultMatch?: boolean | ros.IResolvable;
        /**
         * @Property conditions: Match conditions.
         */
        readonly conditions?: Array<RosApiAttachment.ConditionsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosApiAttachment {
    /**
     * @stability external
     */
    interface ServiceConfigsProperty {
        /**
         * @Property version: The version of the service.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property port: Service Port. Dynamic ports are not passed in.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: The protocol of the Domain.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property weight: Traffic weight for this service, range [1,100], valid only in proportional scenarios.
         */
        readonly weight: number | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the service associated with the release API.
         */
        readonly serviceId: string | ros.IResolvable;
        /**
         * @Property match: Match condition configurations in api deployment.
         */
        readonly match?: RosApiAttachment.MatchProperty | ros.IResolvable;
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
 * Properties for defining a `RosEnvironment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
export interface RosEnvironmentProps {
    /**
     * @Property environmentName: The name of the environment.
     */
    readonly environmentName: string | ros.IResolvable;
    /**
     * @Property gatewayId: Gateway id.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * @Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Environment`, which is used to create an environment.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
export declare class RosEnvironment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Environment";
    /**
     * @Attribute Description: Description of the environment.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EnvironmentId: The ID of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * @Attribute EnvironmentName: The name of the resource.
     */
    readonly attrEnvironmentName: ros.IResolvable;
    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property environmentName: The name of the environment.
     */
    environmentName: string | ros.IResolvable;
    /**
     * @Property gatewayId: Gateway id.
     */
    gatewayId: string | ros.IResolvable;
    /**
     * @Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export interface RosGatewayProps {
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
     * @Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName?: string | ros.IResolvable;
    /**
     * @Property logConfig: Log Configuration.
     */
    readonly logConfig?: RosGateway.LogConfigProperty | ros.IResolvable;
    /**
     * @Property networkAccessConfig: Network Access Configuration.
     */
    readonly networkAccessConfig?: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Gateway`, which is used to create a Cloud-native API Gateway instance.
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
     * @Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the gateway.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute SecurityGroup: The Security Group of the Gateway.
     */
    readonly attrSecurityGroup: ros.IResolvable;
    /**
     * @Attribute Spec: Gateway instance specifications.
     */
    readonly attrSpec: ros.IResolvable;
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
     * @Property gatewayName: The name of the Gateway.
     */
    gatewayName: string | ros.IResolvable | undefined;
    /**
     * @Property logConfig: Log Configuration.
     */
    logConfig: RosGateway.LogConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property networkAccessConfig: Network Access Configuration.
     */
    networkAccessConfig: RosGateway.NetworkAccessConfigProperty | ros.IResolvable | undefined;
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
     * @Property httpApiName: The name of the API.
     */
    readonly httpApiName: string | ros.IResolvable;
    /**
     * @Property protocols: List of API Access Protocols.
     */
    readonly protocols: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property basePath: The base path of the API should start with a \/.
     */
    readonly basePath?: string | ros.IResolvable;
    /**
     * @Property description: Description of API.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property type: The type of HTTP API, Valid values:
     * * Http
     * * Rest
     * * WebSocket
     * * HttpIngress
     */
    readonly type?: string | ros.IResolvable;
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
     * @Attribute BasePath: The base path of the API.
     */
    readonly attrBasePath: ros.IResolvable;
    /**
     * @Attribute Description: Description of API.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Environments: Published Environmental Information of the API.
     */
    readonly attrEnvironments: ros.IResolvable;
    /**
     * @Attribute HttpApiId: The ID of the API.
     */
    readonly attrHttpApiId: ros.IResolvable;
    /**
     * @Attribute HttpApiName: The name of the API.
     */
    readonly attrHttpApiName: ros.IResolvable;
    /**
     * @Attribute Protocols: List of API Access Protocols.
     */
    readonly attrProtocols: ros.IResolvable;
    /**
     * @Attribute Type: The type of HTTP API
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiName: The name of the API.
     */
    httpApiName: string | ros.IResolvable;
    /**
     * @Property protocols: List of API Access Protocols.
     */
    protocols: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property basePath: The base path of the API should start with a \/.
     */
    basePath: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of API.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property type: The type of HTTP API, Valid values:
     * * Http
     * * Rest
     * * WebSocket
     * * HttpIngress
     */
    type: string | ros.IResolvable | undefined;
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
