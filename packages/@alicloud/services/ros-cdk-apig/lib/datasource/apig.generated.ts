// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainId', ros.requiredValidator)(properties.domainId));
    errors.collect(ros.propertyValidator('domainId', ros.validateString)(properties.domainId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainId': ros.stringToRosTemplate(properties.domainId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Domain";

    /**
     * @Attribute CertIdentifier: The certificate ID.
     */
    public readonly attrCertIdentifier: ros.IResolvable;

    /**
     * @Attribute DomainId: The ID of the domain.
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * @Attribute DomainName: The domain name.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    public readonly attrForceHttps: ros.IResolvable;

    /**
     * @Attribute Http2Option: The HTTP/2 configuration.
     */
    public readonly attrHttp2Option: ros.IResolvable;

    /**
     * @Attribute Protocol: The supported protocol.
     */
    public readonly attrProtocol: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
     */
    public readonly attrTlsCipherSuitesConfig: ros.IResolvable;

    /**
     * @Attribute TlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    public readonly attrTlsMax: ros.IResolvable;

    /**
     * @Attribute TlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    public readonly attrTlsMin: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainId: The ID of the domain.
     */
    public domainId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertIdentifier = this.getAtt('CertIdentifier');
        this.attrDomainId = this.getAtt('DomainId');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrForceHttps = this.getAtt('ForceHttps');
        this.attrHttp2Option = this.getAtt('Http2Option');
        this.attrProtocol = this.getAtt('Protocol');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTlsCipherSuitesConfig = this.getAtt('TlsCipherSuitesConfig');
        this.attrTlsMax = this.getAtt('TlsMax');
        this.attrTlsMin = this.getAtt('TlsMin');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainId = props.domainId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainId: this.domainId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDomainsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDomainsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Domains` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Domains` resource.
 */
// @ts-ignore TS6133
function rosDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Domains`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domains
 */
export class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Domains";

    /**
     * @Attribute DomainIds: The list of domain IDs.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * @Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainIds = this.getAtt('DomainIds');
        this.attrDomains = this.getAtt('Domains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosEnvironmentProps`
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentProps`
 *
 * @returns the result of the validation.
 */
function RosEnvironmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('environmentId', ros.requiredValidator)(properties.environmentId));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosEnvironmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Environment` resource
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Environment` resource.
 */
// @ts-ignore TS6133
function rosEnvironmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnvironmentPropsValidator(properties).assertSuccess();
    }
    return {
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Environment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environment
 */
export class RosEnvironment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Environment";

    /**
     * @Attribute Description: The description of the Environment.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EnvironmentId: The ID of the Environment.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * @Attribute EnvironmentName: The name of the Environment.
     */
    public readonly attrEnvironmentName: ros.IResolvable;

    /**
     * @Attribute GatewayId: Cloud-native API Gateway ID.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property environmentId: The ID of the Environment.
     */
    public environmentId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnvironment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrEnvironmentId = this.getAtt('EnvironmentId');
        this.attrEnvironmentName = this.getAtt('EnvironmentName');
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.environmentId = props.environmentId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            environmentId: this.environmentId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnvironmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosEnvironmentsProps`
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentsProps`
 *
 * @returns the result of the validation.
 */
function RosEnvironmentsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosEnvironmentsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Environments` resource
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Environments` resource.
 */
// @ts-ignore TS6133
function rosEnvironmentsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnvironmentsPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Environments`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environments` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-environments
 */
export class RosEnvironments extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Environments";

    /**
     * @Attribute EnvironmentIds: The list of environment IDs.
     */
    public readonly attrEnvironmentIds: ros.IResolvable;

    /**
     * @Attribute Environments: The list of environments.
     */
    public readonly attrEnvironments: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    public gatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnvironments.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEnvironmentIds = this.getAtt('EnvironmentIds');
        this.attrEnvironments = this.getAtt('Environments');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnvironmentsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gatewayId', ros.requiredValidator)(properties.gatewayId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Gateway` resource.
 */
// @ts-ignore TS6133
function rosGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
 */
export class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Gateway";

    /**
     * @Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Environments: The list of environments associated with the Gateway.
     */
    public readonly attrEnvironments: ros.IResolvable;

    /**
     * @Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute GatewayName: The name of the Gateway.
     */
    public readonly attrGatewayName: ros.IResolvable;

    /**
     * @Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the Gateway.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroup: The Security Group of the Gateway.
     */
    public readonly attrSecurityGroup: ros.IResolvable;

    /**
     * @Attribute Spec: Gateway instance specifications.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the Gateway.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update timestamp. Unit: milliseconds.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    public readonly attrVSwitch: ros.IResolvable;

    /**
     * @Attribute Version: The gateway version.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * @Attribute Vpc: The VPC associated with the Gateway.
     */
    public readonly attrVpc: ros.IResolvable;

    /**
     * @Attribute Zones: The List of zones associated with the Gateway.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    public gatewayId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEnvironments = this.getAtt('Environments');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrGatewayName = this.getAtt('GatewayName');
        this.attrLoadBalancers = this.getAtt('LoadBalancers');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroup = this.getAtt('SecurityGroup');
        this.attrSpec = this.getAtt('Spec');
        this.attrTags = this.getAtt('Tags');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrVSwitch = this.getAtt('VSwitch');
        this.attrVersion = this.getAtt('Version');
        this.attrVpc = this.getAtt('Vpc');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosGatewaysProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewaysProps`
 *
 * @returns the result of the validation.
 */
function RosGatewaysPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('gatewayName', ros.validateString)(properties.gatewayName));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGatewaysProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Gateways` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewaysProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Gateways` resource.
 */
// @ts-ignore TS6133
function rosGatewaysPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewaysPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'GatewayName': ros.stringToRosTemplate(properties.gatewayName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Gateways`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
export class RosGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Gateways";

    /**
     * @Attribute GatewayIds: The list of gateway IDs.
     */
    public readonly attrGatewayIds: ros.IResolvable;

    /**
     * @Attribute Gateways: The list of gateways.
     */
    public readonly attrGateways: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: Cloud-native API Gateway ID.
     */
    public gatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property gatewayName: The name of the Gateway.
     */
    public gatewayName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewaysProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateways.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGatewayIds = this.getAtt('GatewayIds');
        this.attrGateways = this.getAtt('Gateways');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.gatewayName = props.gatewayName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            gatewayName: this.gatewayName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewaysPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosHttpApiProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpApiProps`
 *
 * @returns the result of the validation.
 */
function RosHttpApiPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpApiId', ros.requiredValidator)(properties.httpApiId));
    errors.collect(ros.propertyValidator('httpApiId', ros.validateString)(properties.httpApiId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosHttpApiProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::HttpApi` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpApiProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::HttpApi` resource.
 */
// @ts-ignore TS6133
function rosHttpApiPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpApiPropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiId': ros.stringToRosTemplate(properties.httpApiId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::HttpApi`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpApi` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
 */
export class RosHttpApi extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::HttpApi";

    /**
     * @Attribute BasePath: The base path of the API.
     */
    public readonly attrBasePath: ros.IResolvable;

    /**
     * @Attribute Description: Description of API.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute HttpApiId: The ID of the API.
     */
    public readonly attrHttpApiId: ros.IResolvable;

    /**
     * @Attribute HttpApiName: The name of the API.
     */
    public readonly attrHttpApiName: ros.IResolvable;

    /**
     * @Attribute Protocols: List of API Access Protocols.
     */
    public readonly attrProtocols: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Type: The type of HTTP API.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiId: The ID of the API.
     */
    public httpApiId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpApiProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpApi.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBasePath = this.getAtt('BasePath');
        this.attrDescription = this.getAtt('Description');
        this.attrHttpApiId = this.getAtt('HttpApiId');
        this.attrHttpApiName = this.getAtt('HttpApiName');
        this.attrProtocols = this.getAtt('Protocols');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiId = props.httpApiId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiId: this.httpApiId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpApiPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosHttpApisProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpApisProps`
 *
 * @returns the result of the validation.
 */
function RosHttpApisPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpApiName', ros.validateString)(properties.httpApiName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosHttpApisProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::HttpApis` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpApisProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::HttpApis` resource.
 */
// @ts-ignore TS6133
function rosHttpApisPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpApisPropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiName': ros.stringToRosTemplate(properties.httpApiName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::HttpApis`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpApis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapis
 */
export class RosHttpApis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::HttpApis";

    /**
     * @Attribute HttpApiIds: The list of http api IDs.
     */
    public readonly attrHttpApiIds: ros.IResolvable;

    /**
     * @Attribute HttpApis: The list of http apis.
     */
    public readonly attrHttpApis: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiName: The name of the API.
     */
    public httpApiName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpApisProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpApis.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHttpApiIds = this.getAtt('HttpApiIds');
        this.attrHttpApis = this.getAtt('HttpApis');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiName = props.httpApiName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiName: this.httpApiName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpApisPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPluginProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginProps`
 *
 * @returns the result of the validation.
 */
function RosPluginPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pluginId', ros.requiredValidator)(properties.pluginId));
    errors.collect(ros.propertyValidator('pluginId', ros.validateString)(properties.pluginId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPluginProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Plugin` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Plugin` resource.
 */
// @ts-ignore TS6133
function rosPluginPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginPropsValidator(properties).assertSuccess();
    }
    return {
      'PluginId': ros.stringToRosTemplate(properties.pluginId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Plugin`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugin` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
 */
export class RosPlugin extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Plugin";

    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute GatewayName: The name of the gateway name.
     */
    public readonly attrGatewayName: ros.IResolvable;

    /**
     * @Attribute PluginClassId: The ID of the plugin class.
     */
    public readonly attrPluginClassId: ros.IResolvable;

    /**
     * @Attribute PluginId: The ID of the plugin.
     */
    public readonly attrPluginId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pluginId: The ID of the plugin.
     */
    public pluginId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPlugin.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrGatewayName = this.getAtt('GatewayName');
        this.attrPluginClassId = this.getAtt('PluginClassId');
        this.attrPluginId = this.getAtt('PluginId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pluginId = props.pluginId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pluginId: this.pluginId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPluginClassProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginClassProps`
 *
 * @returns the result of the validation.
 */
function RosPluginClassPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pluginClassId', ros.requiredValidator)(properties.pluginClassId));
    errors.collect(ros.propertyValidator('pluginClassId', ros.validateString)(properties.pluginClassId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPluginClassProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::PluginClass` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginClassProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::PluginClass` resource.
 */
// @ts-ignore TS6133
function rosPluginClassPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginClassPropsValidator(properties).assertSuccess();
    }
    return {
      'PluginClassId': ros.stringToRosTemplate(properties.pluginClassId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::PluginClass`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginClass` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
 */
export class RosPluginClass extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::PluginClass";

    /**
     * @Attribute Alias: The alias of the plugin class.
     */
    public readonly attrAlias: ros.IResolvable;

    /**
     * @Attribute Description: The description of the plugin class.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Document: The document of the plugin.
     */
    public readonly attrDocument: ros.IResolvable;

    /**
     * @Attribute PluginClassName: The name of the plugin class.
     */
    public readonly attrPluginClassName: ros.IResolvable;

    /**
     * @Attribute Type: The type of the plugin class.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute WasmLanguage: Wasm language.
     */
    public readonly attrWasmLanguage: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    public pluginClassId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginClassProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPluginClass.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlias = this.getAtt('Alias');
        this.attrDescription = this.getAtt('Description');
        this.attrDocument = this.getAtt('Document');
        this.attrPluginClassName = this.getAtt('PluginClassName');
        this.attrType = this.getAtt('Type');
        this.attrWasmLanguage = this.getAtt('WasmLanguage');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pluginClassId = props.pluginClassId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pluginClassId: this.pluginClassId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginClassPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPluginClassesProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginClassesProps`
 *
 * @returns the result of the validation.
 */
function RosPluginClassesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPluginClassesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::PluginClasses` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginClassesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::PluginClasses` resource.
 */
// @ts-ignore TS6133
function rosPluginClassesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginClassesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::PluginClasses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
 */
export class RosPluginClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::PluginClasses";

    /**
     * @Attribute PluginClassIds: The list of plugin class IDs.
     */
    public readonly attrPluginClassIds: ros.IResolvable;

    /**
     * @Attribute PluginClasses: The list of plugin classes.
     */
    public readonly attrPluginClasses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the plugin class.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginClassesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPluginClasses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPluginClassIds = this.getAtt('PluginClassIds');
        this.attrPluginClasses = this.getAtt('PluginClasses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPluginsProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginsProps`
 *
 * @returns the result of the validation.
 */
function RosPluginsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pluginClassId', ros.validateString)(properties.pluginClassId));
    errors.collect(ros.propertyValidator('pluginClassName', ros.validateString)(properties.pluginClassName));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosPluginsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Plugins` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Plugins` resource.
 */
// @ts-ignore TS6133
function rosPluginsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginsPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'PluginClassId': ros.stringToRosTemplate(properties.pluginClassId),
      'PluginClassName': ros.stringToRosTemplate(properties.pluginClassName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Plugins`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugins` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
 */
export class RosPlugins extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Plugins";

    /**
     * @Attribute PluginIds: The list of plugin IDs.
     */
    public readonly attrPluginIds: ros.IResolvable;

    /**
     * @Attribute Plugins: The list of plugins.
     */
    public readonly attrPlugins: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    public gatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    public pluginClassId: string | ros.IResolvable | undefined;

    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    public pluginClassName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPlugins.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPluginIds = this.getAtt('PluginIds');
        this.attrPlugins = this.getAtt('Plugins');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.pluginClassId = props.pluginClassId;
        this.pluginClassName = props.pluginClassName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            pluginClassId: this.pluginClassId,
            pluginClassName: this.pluginClassName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosRouteProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the result of the validation.
 */
function RosRoutePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeId', ros.requiredValidator)(properties.routeId));
    errors.collect(ros.propertyValidator('routeId', ros.validateString)(properties.routeId));
    errors.collect(ros.propertyValidator('httpApiId', ros.requiredValidator)(properties.httpApiId));
    errors.collect(ros.propertyValidator('httpApiId', ros.validateString)(properties.httpApiId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRouteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Route` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Route` resource.
 */
// @ts-ignore TS6133
function rosRoutePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRoutePropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiId': ros.stringToRosTemplate(properties.httpApiId),
      'RouteId': ros.stringToRosTemplate(properties.routeId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Route`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Route` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
 */
export class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Route";

    /**
     * @Attribute Backend: backend services.
     */
    public readonly attrBackend: ros.IResolvable;

    /**
     * @Attribute Description: description of route resource.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DomainInfos: domain items.
     */
    public readonly attrDomainInfos: ros.IResolvable;

    /**
     * @Attribute EnvironmentInfo: environment information.
     */
    public readonly attrEnvironmentInfo: ros.IResolvable;

    /**
     * @Attribute Match: the match rule of route resource.
     */
    public readonly attrMatch: ros.IResolvable;

    /**
     * @Attribute RouteId: The ID of route resource.
     */
    public readonly attrRouteId: ros.IResolvable;

    /**
     * @Attribute RouteName: The name of the route.
     */
    public readonly attrRouteName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    public httpApiId: string | ros.IResolvable;

    /**
     * @Property routeId: The ID of route resource.
     */
    public routeId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRoute.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackend = this.getAtt('Backend');
        this.attrDescription = this.getAtt('Description');
        this.attrDomainInfos = this.getAtt('DomainInfos');
        this.attrEnvironmentInfo = this.getAtt('EnvironmentInfo');
        this.attrMatch = this.getAtt('Match');
        this.attrRouteId = this.getAtt('RouteId');
        this.attrRouteName = this.getAtt('RouteName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiId = props.httpApiId;
        this.routeId = props.routeId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiId: this.httpApiId,
            routeId: this.routeId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRoutePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosRoutesProps`
 *
 * @param properties - the TypeScript properties of a `RosRoutesProps`
 *
 * @returns the result of the validation.
 */
function RosRoutesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeName', ros.validateString)(properties.routeName));
    errors.collect(ros.propertyValidator('httpApiId', ros.requiredValidator)(properties.httpApiId));
    errors.collect(ros.propertyValidator('httpApiId', ros.validateString)(properties.httpApiId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRoutesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Routes` resource
 *
 * @param properties - the TypeScript properties of a `RosRoutesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Routes` resource.
 */
// @ts-ignore TS6133
function rosRoutesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRoutesPropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiId': ros.stringToRosTemplate(properties.httpApiId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'RouteName': ros.stringToRosTemplate(properties.routeName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Routes`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Routes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
 */
export class RosRoutes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Routes";

    /**
     * @Attribute RouteIds: The list of route IDs.
     */
    public readonly attrRouteIds: ros.IResolvable;

    /**
     * @Attribute Routes: The list of routes.
     */
    public readonly attrRoutes: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiId: HTTP API ID.
     */
    public httpApiId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property routeName: The name of the route.
     */
    public routeName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoutesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRoutes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteIds = this.getAtt('RouteIds');
        this.attrRoutes = this.getAtt('Routes');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiId = props.httpApiId;
        this.refreshOptions = props.refreshOptions;
        this.routeName = props.routeName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiId: this.httpApiId,
            refreshOptions: this.refreshOptions,
            routeName: this.routeName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRoutesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceId', ros.requiredValidator)(properties.serviceId));
    errors.collect(ros.propertyValidator('serviceId', ros.validateString)(properties.serviceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Service` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Service` resource.
 */
// @ts-ignore TS6133
function rosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
      'ServiceId': ros.stringToRosTemplate(properties.serviceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Service`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-service
 */
export class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Service";

    /**
     * @Attribute Addresses: A list of domain names or fixed addresses.
     */
    public readonly attrAddresses: ros.IResolvable;

    /**
     * @Attribute AiServiceConfig: AI service configuration when sourceType equals AI.
     */
    public readonly attrAiServiceConfig: ros.IResolvable;

    /**
     * @Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute GroupName: The service group name.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace of the service:.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute Qualifier: The function version or alias.
     */
    public readonly attrQualifier: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ServiceId: The ID of the service.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceName: The name of the Service, need to fill in manually when sourceType is VIP/DNS/AI.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute SourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
     */
    public readonly attrSourceType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceId: The ID of the service.
     */
    public serviceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddresses = this.getAtt('Addresses');
        this.attrAiServiceConfig = this.getAtt('AiServiceConfig');
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrQualifier = this.getAtt('Qualifier');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrSourceType = this.getAtt('SourceType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceId = props.serviceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceId: this.serviceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosServicesProps`
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the result of the validation.
 */
function RosServicesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServicesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Services` resource
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::APIG::Services` resource.
 */
// @ts-ignore TS6133
function rosServicesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicesPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::APIG::Services`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-services
 */
export class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::APIG::Services";

    /**
     * @Attribute ServiceIds: The list of service IDs.
     */
    public readonly attrServiceIds: ros.IResolvable;

    /**
     * @Attribute Services: The list of services.
     */
    public readonly attrServices: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    public gatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: service source type, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServices.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceIds = this.getAtt('ServiceIds');
        this.attrServices = this.getAtt('Services');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.sourceType = props.sourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            sourceType: this.sourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
