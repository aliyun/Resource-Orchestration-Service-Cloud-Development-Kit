import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
 */
export interface RosDomainProps {
    /**
     * @Property domainId: The ID of the domain.
     */
    readonly domainId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Domain`Use DATASOURCE::APIG::Query domain names using domain type.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Domain";
    /**
     * @Attribute CertIdentifier: The certificate ID.
     */
    readonly attrCertIdentifier: ros.IResolvable;
    /**
     * @Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * @Attribute DomainName: The domain name.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly attrForceHttps: ros.IResolvable;
    /**
     * @Attribute Http2Option: The HTTP/2 configuration.
     */
    readonly attrHttp2Option: ros.IResolvable;
    /**
     * @Attribute Protocol: The supported protocol.
     */
    readonly attrProtocol: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
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
     * @Property domainId: The ID of the domain.
     */
    domainId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domains
 */
export interface RosDomainsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Domains`The , which type is used to query domain list.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domains
 */
export declare class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Domains";
    /**
     * @Attribute DomainIds: The list of domain IDs.
     */
    readonly attrDomainIds: ros.IResolvable;
    /**
     * @Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEnvironment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environment
 */
export interface RosEnvironmentProps {
    /**
     * @Property environmentId: The ID of the Environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Environment`The , which type is used to query environment.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environment
 */
export declare class RosEnvironment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Environment";
    /**
     * @Attribute Description: The description of the Environment.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EnvironmentId: The ID of the Environment.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * @Attribute EnvironmentName: The name of the Environment.
     */
    readonly attrEnvironmentName: ros.IResolvable;
    /**
     * @Attribute GatewayId: Cloud-native API Gateway ID.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property environmentId: The ID of the Environment.
     */
    environmentId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosEnvironments`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environments
 */
export interface RosEnvironmentsProps {
    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Environments`The DATASOURCE::APIG:: Environments type is used to query environment list.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environments` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environments
 */
export declare class RosEnvironments extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Environments";
    /**
     * @Attribute EnvironmentIds: The list of environment IDs.
     */
    readonly attrEnvironmentIds: ros.IResolvable;
    /**
     * @Attribute Environments: The list of environments.
     */
    readonly attrEnvironments: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    gatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentsProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
 */
export interface RosGatewayProps {
    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Gateway`The , which type is used to query gateway details.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
 */
export declare class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Gateway";
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
     * @Attribute GatewayName: The name of the Gateway.
     */
    readonly attrGatewayName: ros.IResolvable;
    /**
     * @Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the Gateway.
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
     * @Attribute UpdateTime: Update timestamp. Unit: milliseconds.
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
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    gatewayId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
export interface RosGatewaysProps {
    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * @Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Gateways`, which is used to query gateways.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
export declare class RosGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Gateways";
    /**
     * @Attribute GatewayIds: The list of gateway IDs.
     */
    readonly attrGatewayIds: ros.IResolvable;
    /**
     * @Attribute Gateways: The list of gateways.
     */
    readonly attrGateways: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    gatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property gatewayName: The name of the Gateway.
     */
    gatewayName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewaysProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHttpApi`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
 */
export interface RosHttpApiProps {
    /**
     * @Property httpApiId: The ID of the API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::HttpApi`, which is used to query the information about an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpApi` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
 */
export declare class RosHttpApi extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::HttpApi";
    /**
     * @Attribute BasePath: The base path of the API.
     */
    readonly attrBasePath: ros.IResolvable;
    /**
     * @Attribute Description: Description of API.
     */
    readonly attrDescription: ros.IResolvable;
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
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Type: The type of HTTP API.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiId: The ID of the API.
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosHttpApis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapis
 */
export interface RosHttpApisProps {
    /**
     * @Property httpApiName: The name of the API.
     */
    readonly httpApiName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::HttpApis`, which is used to query HTTP APIs.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpApis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapis
 */
export declare class RosHttpApis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::HttpApis";
    /**
     * @Attribute HttpApiIds: The list of http api IDs.
     */
    readonly attrHttpApiIds: ros.IResolvable;
    /**
     * @Attribute HttpApis: The list of http apis.
     */
    readonly attrHttpApis: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiName: The name of the API.
     */
    httpApiName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpApisProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPlugin`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
 */
export interface RosPluginProps {
    /**
     * @Property pluginId: The ID of the plugin.
     */
    readonly pluginId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Plugin`, which is used to query the information about a plug-in.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugin` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
 */
export declare class RosPlugin extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Plugin";
    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * @Attribute GatewayName: The name of the gateway name.
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
     * @Property pluginId: The ID of the plugin.
     */
    pluginId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosPluginClass`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
 */
export interface RosPluginClassProps {
    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::PluginClass`, which is used to query the information about a plug-in class.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginClass` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
 */
export declare class RosPluginClass extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::PluginClass";
    /**
     * @Attribute Alias: The alias of the plugin class.
     */
    readonly attrAlias: ros.IResolvable;
    /**
     * @Attribute Description: The description of the plugin class.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Document: The document of the plugin.
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
     * @Property pluginClassId: The ID of the plugin class.
     */
    pluginClassId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosPluginClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
 */
export interface RosPluginClassesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property type: The type of the plugin class.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::PluginClasses`, which is used to query plug-in classes.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
 */
export declare class RosPluginClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::PluginClasses";
    /**
     * @Attribute PluginClassIds: The list of plugin class IDs.
     */
    readonly attrPluginClassIds: ros.IResolvable;
    /**
     * @Attribute PluginClasses: The list of plugin classes.
     */
    readonly attrPluginClasses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property type: The type of the plugin class.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginClassesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPlugins`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
 */
export interface RosPluginsProps {
    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId?: string | ros.IResolvable;
    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    readonly pluginClassName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Plugins`, which is used to query plug-ins.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugins` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
 */
export declare class RosPlugins extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Plugins";
    /**
     * @Attribute PluginIds: The list of plugin IDs.
     */
    readonly attrPluginIds: ros.IResolvable;
    /**
     * @Attribute Plugins: The list of plugins.
     */
    readonly attrPlugins: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    gatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    pluginClassId: string | ros.IResolvable | undefined;
    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    pluginClassName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginsProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
 */
export interface RosRouteProps {
    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property routeId: The ID of route resource.
     */
    readonly routeId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Route`, which is used to query the information about a route.
 * @Note This class does not contain additional functions, so it is recommended to use the `Route` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
 */
export declare class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Route";
    /**
     * @Attribute Backend: backend services.
     */
    readonly attrBackend: ros.IResolvable;
    /**
     * @Attribute Description: description of route resource.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DomainInfos: domain items.
     */
    readonly attrDomainInfos: ros.IResolvable;
    /**
     * @Attribute EnvironmentInfo: environment information.
     */
    readonly attrEnvironmentInfo: ros.IResolvable;
    /**
     * @Attribute Match: the match rule of route resource.
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
     * @Property httpApiId: The ID of the HTTP API.
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property routeId: The ID of route resource.
     */
    routeId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosRoutes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
export interface RosRoutesProps {
    /**
     * @Property httpApiId: HTTP API ID.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property routeName: The name of the route.
     */
    readonly routeName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Routes`, which is used to query routes.
 * @Note This class does not contain additional functions, so it is recommended to use the `Routes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
export declare class RosRoutes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Routes";
    /**
     * @Attribute RouteIds: The list of route IDs.
     */
    readonly attrRouteIds: ros.IResolvable;
    /**
     * @Attribute Routes: The list of routes.
     */
    readonly attrRoutes: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property httpApiId: HTTP API ID.
     */
    httpApiId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property routeName: The name of the route.
     */
    routeName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoutesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-service
 */
export interface RosServiceProps {
    /**
     * @Property serviceId: The ID of the service.
     */
    readonly serviceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Service`, which is used to query the information about a service.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-service
 */
export declare class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Service";
    /**
     * @Attribute Addresses: A list of domain names or fixed addresses.
     */
    readonly attrAddresses: ros.IResolvable;
    /**
     * @Attribute AiServiceConfig: AI service configuration when sourceType equals AI.
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
     * @Attribute ServiceName: The name of the Service, need to fill in manually when sourceType is VIP/DNS/AI.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute SourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
     */
    readonly attrSourceType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceId: The ID of the service.
     */
    serviceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosServices`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
 */
export interface RosServicesProps {
    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property sourceType: service source type, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    readonly sourceType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Services`, which is used to query services.
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
 */
export declare class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Services";
    /**
     * @Attribute ServiceIds: The list of service IDs.
     */
    readonly attrServiceIds: ros.IResolvable;
    /**
     * @Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    gatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceType: service source type, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    sourceType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
