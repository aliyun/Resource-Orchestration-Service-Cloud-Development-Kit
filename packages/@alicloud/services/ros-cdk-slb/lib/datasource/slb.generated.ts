// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export interface RosAccessControlProps {

    /**
     * @Property aclId: The ID of the ACL.
     */
    readonly aclId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessControlProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the result of the validation.
 */
function RosAccessControlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aclId', ros.requiredValidator)(properties.aclId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAccessControlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::AccessControl` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::AccessControl` resource.
 */
// @ts-ignore TS6133
function rosAccessControlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessControlPropsValidator(properties).assertSuccess();
    }
    return {
      'AclId': ros.stringToRosTemplate(properties.aclId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::AccessControl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessControl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export class RosAccessControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::AccessControl";

    /**
     * @Attribute AclEntries: The IP entries that you want to remove from the network ACL.
     */
    public readonly attrAclEntries: ros.IResolvable;

    /**
     * @Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AclName: The ACL name.
     */
    public readonly attrAclName: ros.IResolvable;

    /**
     * @Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute RelatedListeners: The listeners that are associated with the network ACL.
     */
    public readonly attrRelatedListeners: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: The ID of the ACL.
     */
    public aclId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosAccessControlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessControl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntries = this.getAtt('AclEntries');
        this.attrAclId = this.getAtt('AclId');
        this.attrAclName = this.getAtt('AclName');
        this.attrAddressIpVersion = this.getAtt('AddressIpVersion');
        this.attrRelatedListeners = this.getAtt('RelatedListeners');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclId = props.aclId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclId: this.aclId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessControlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccessControls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
 */
export interface RosAccessControlsProps {

    /**
     * @Property aclName: The name of the network ACL.
     */
    readonly aclName?: string | ros.IResolvable;

    /**
     * @Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessControlsProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessControlsProps`
 *
 * @returns the result of the validation.
 */
function RosAccessControlsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAccessControlsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::AccessControls` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessControlsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::AccessControls` resource.
 */
// @ts-ignore TS6133
function rosAccessControlsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessControlsPropsValidator(properties).assertSuccess();
    }
    return {
      'AclName': ros.stringToRosTemplate(properties.aclName),
      'AddressIpVersion': ros.stringToRosTemplate(properties.addressIpVersion),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::AccessControls`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessControls` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
 */
export class RosAccessControls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::AccessControls";

    /**
     * @Attribute AccessControls: The list of access controls.
     */
    public readonly attrAccessControls: ros.IResolvable;

    /**
     * @Attribute AclIds: The list of acl IDs.
     */
    public readonly attrAclIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclName: The name of the network ACL.
     */
    public aclName: string | ros.IResolvable | undefined;

    /**
     * @Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessControlsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessControls.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessControls = this.getAtt('AccessControls');
        this.attrAclIds = this.getAtt('AclIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclName = props.aclName;
        this.addressIpVersion = props.addressIpVersion;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclName: this.aclName,
            addressIpVersion: this.addressIpVersion,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessControlsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomainExtension`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export interface RosDomainExtensionProps {

    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainExtensionProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the result of the validation.
 */
function RosDomainExtensionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainExtensionId', ros.requiredValidator)(properties.domainExtensionId));
    errors.collect(ros.propertyValidator('domainExtensionId', ros.validateString)(properties.domainExtensionId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDomainExtensionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::DomainExtension` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::DomainExtension` resource.
 */
// @ts-ignore TS6133
function rosDomainExtensionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainExtensionPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainExtensionId': ros.stringToRosTemplate(properties.domainExtensionId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::DomainExtension`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainExtension` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export class RosDomainExtension extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::DomainExtension";

    /**
     * @Attribute Domain: The domain name.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * @Attribute DomainExtensionId: The ID of the additional certificate.
     */
    public readonly attrDomainExtensionId: ros.IResolvable;

    /**
     * @Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
     */
    public readonly attrListenerPort: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the SLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    public readonly attrServerCertificateId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    public domainExtensionId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDomainExtensionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainExtension.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = this.getAtt('Domain');
        this.attrDomainExtensionId = this.getAtt('DomainExtensionId');
        this.attrListenerPort = this.getAtt('ListenerPort');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrServerCertificateId = this.getAtt('ServerCertificateId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainExtensionId = props.domainExtensionId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainExtensionId: this.domainExtensionId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainExtensionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomainExtensions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
 */
export interface RosDomainExtensionsProps {

    /**
     * @Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainExtensionsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainExtensionsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('domainExtensionId', ros.validateString)(properties.domainExtensionId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDomainExtensionsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::DomainExtensions` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::DomainExtensions` resource.
 */
// @ts-ignore TS6133
function rosDomainExtensionsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainExtensionsPropsValidator(properties).assertSuccess();
    }
    return {
      'ListenerPort': ros.numberToRosTemplate(properties.listenerPort),
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'DomainExtensionId': ros.stringToRosTemplate(properties.domainExtensionId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::DomainExtensions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainExtensions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
 */
export class RosDomainExtensions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::DomainExtensions";

    /**
     * @Attribute DomainExtensionIds: The list of domain extension IDs.
     */
    public readonly attrDomainExtensionIds: ros.IResolvable;

    /**
     * @Attribute DomainExtensions: The list of domain extensions.
     */
    public readonly attrDomainExtensions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * Valid values: 1 to 65535.
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    public domainExtensionId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosDomainExtensionsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainExtensions.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainExtensionIds = this.getAtt('DomainExtensionIds');
        this.attrDomainExtensions = this.getAtt('DomainExtensions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.domainExtensionId = props.domainExtensionId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            domainExtensionId: this.domainExtensionId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainExtensionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosLoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export interface RosLoadBalancerProps {

    /**
     * @Property loadBalancerId: The CLB instance ID.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancer";

    /**
     * @Attribute Address: The service IP address of the CLB instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * @Attribute AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute AddressType: The address type of the CLB instance.
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * @Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable;

    /**
     * @Attribute BackendServers: The backend servers of the CLB instance.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the CLB instance was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    public readonly attrCreateTimeStamp: ros.IResolvable;

    /**
     * @Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    public readonly attrDeleteProtection: ros.IResolvable;

    /**
     * @Attribute EndTime: The time when the CLB instance expires.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * @Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    public readonly attrEndTimeStamp: ros.IResolvable;

    /**
     * @Attribute InstanceChargeType: Instance billing method.
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    public readonly attrListenerPortsAndProtocal: ros.IResolvable;

    /**
     * @Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    public readonly attrListenerPortsAndProtocol: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The CLB instance ID.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerName: The name of the CLB instance.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * @Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    public readonly attrLoadBalancerSpec: ros.IResolvable;

    /**
     * @Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    public readonly attrMasterZoneId: ros.IResolvable;

    /**
     * @Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    public readonly attrModificationProtectionReason: ros.IResolvable;

    /**
     * @Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    public readonly attrModificationProtectionStatus: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type of the CLB instance.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute PaymentType: Load balancing instance payment type.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    public readonly attrRegionIdAlias: ros.IResolvable;

    /**
     * @Attribute RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
     */
    public readonly attrRenewalCycUnit: ros.IResolvable;

    /**
     * @Attribute RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    public readonly attrRenewalDuration: ros.IResolvable;

    /**
     * @Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    public readonly attrSlaveZoneId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the CLB instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The CLB instance ID.
     */
    public loadBalancerId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddress = this.getAtt('Address');
        this.attrAddressIpVersion = this.getAtt('AddressIpVersion');
        this.attrAddressType = this.getAtt('AddressType');
        this.attrAutoReleaseTime = this.getAtt('AutoReleaseTime');
        this.attrBackendServers = this.getAtt('BackendServers');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreateTimeStamp = this.getAtt('CreateTimeStamp');
        this.attrDeleteProtection = this.getAtt('DeleteProtection');
        this.attrEndTime = this.getAtt('EndTime');
        this.attrEndTimeStamp = this.getAtt('EndTimeStamp');
        this.attrInstanceChargeType = this.getAtt('InstanceChargeType');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrListenerPortsAndProtocal = this.getAtt('ListenerPortsAndProtocal');
        this.attrListenerPortsAndProtocol = this.getAtt('ListenerPortsAndProtocol');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrLoadBalancerName = this.getAtt('LoadBalancerName');
        this.attrLoadBalancerSpec = this.getAtt('LoadBalancerSpec');
        this.attrMasterZoneId = this.getAtt('MasterZoneId');
        this.attrModificationProtectionReason = this.getAtt('ModificationProtectionReason');
        this.attrModificationProtectionStatus = this.getAtt('ModificationProtectionStatus');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRegionIdAlias = this.getAtt('RegionIdAlias');
        this.attrRenewalCycUnit = this.getAtt('RenewalCycUnit');
        this.attrRenewalDuration = this.getAtt('RenewalDuration');
        this.attrRenewalStatus = this.getAtt('RenewalStatus');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSlaveZoneId = this.getAtt('SlaveZoneId');
        this.attrTags = this.getAtt('Tags');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosLoadBalancerTCPListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export interface RosLoadBalancerTCPListenerProps {

    /**
     * @Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerTCPListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerTCPListenerProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerTCPListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerTCPListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancerTCPListener` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerTCPListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancerTCPListener` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerTCPListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerTCPListenerPropsValidator(properties).assertSuccess();
    }
    return {
      'ListenerPort': ros.numberToRosTemplate(properties.listenerPort),
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancerTCPListener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export class RosLoadBalancerTCPListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancerTCPListener";

    /**
     * @Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    public readonly attrAclIds: ros.IResolvable;

    /**
     * @Attribute AclStatus: Indicates whether access control is enabled.
     */
    public readonly attrAclStatus: ros.IResolvable;

    /**
     * @Attribute AclType: The type of the ACL.
     */
    public readonly attrAclType: ros.IResolvable;

    /**
     * @Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    public readonly attrBackendServerPort: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The maximum bandwidth of the listener. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute ConnectionDrain: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
     */
    public readonly attrConnectionDrain: ros.IResolvable;

    /**
     * @Attribute ConnectionDrainTimeout: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
     */
    public readonly attrConnectionDrainTimeout: ros.IResolvable;

    /**
     * @Attribute Description: The description of the listener.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EstablishedTimeout: The timeout period of a connection.
     */
    public readonly attrEstablishedTimeout: ros.IResolvable;

    /**
     * @Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    public readonly attrHealthCheck: ros.IResolvable;

    /**
     * @Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    public readonly attrHealthCheckConnectPort: ros.IResolvable;

    /**
     * @Attribute HealthCheckConnectTimeout: The timeout period. Unit: seconds.
     */
    public readonly attrHealthCheckConnectTimeout: ros.IResolvable;

    /**
     * @Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    public readonly attrHealthCheckDomain: ros.IResolvable;

    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable;

    /**
     * @Attribute HealthCheckInterval: The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * @Attribute HealthCheckMethod: The health check method.
     */
    public readonly attrHealthCheckMethod: ros.IResolvable;

    /**
     * @Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    public readonly attrHealthCheckType: ros.IResolvable;

    /**
     * @Attribute HealthCheckUri: The URL that is used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable;

    /**
     * @Attribute HealthyThreshold: The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    public readonly attrHealthyThreshold: ros.IResolvable;

    /**
     * @Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    public readonly attrListenerPort: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the CLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    public readonly attrMasterSlaveServerGroupId: ros.IResolvable;

    /**
     * @Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    public readonly attrPersistenceTimeout: ros.IResolvable;

    /**
     * @Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    public readonly attrProxyProtocolV2Enabled: ros.IResolvable;

    /**
     * @Attribute Scheduler: The scheduling algorithm.
     */
    public readonly attrScheduler: ros.IResolvable;

    /**
     * @Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    public readonly attrSynProxy: ros.IResolvable;

    /**
     * @Attribute UnhealthyThreshold: The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    public readonly attrUnhealthyThreshold: ros.IResolvable;

    /**
     * @Attribute VServerGroupId: The ID of the associated server group.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    public loadBalancerId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerTCPListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancerTCPListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = this.getAtt('AclId');
        this.attrAclIds = this.getAtt('AclIds');
        this.attrAclStatus = this.getAtt('AclStatus');
        this.attrAclType = this.getAtt('AclType');
        this.attrBackendServerPort = this.getAtt('BackendServerPort');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrConnectionDrain = this.getAtt('ConnectionDrain');
        this.attrConnectionDrainTimeout = this.getAtt('ConnectionDrainTimeout');
        this.attrDescription = this.getAtt('Description');
        this.attrEstablishedTimeout = this.getAtt('EstablishedTimeout');
        this.attrHealthCheck = this.getAtt('HealthCheck');
        this.attrHealthCheckConnectPort = this.getAtt('HealthCheckConnectPort');
        this.attrHealthCheckConnectTimeout = this.getAtt('HealthCheckConnectTimeout');
        this.attrHealthCheckDomain = this.getAtt('HealthCheckDomain');
        this.attrHealthCheckHttpCode = this.getAtt('HealthCheckHttpCode');
        this.attrHealthCheckInterval = this.getAtt('HealthCheckInterval');
        this.attrHealthCheckMethod = this.getAtt('HealthCheckMethod');
        this.attrHealthCheckType = this.getAtt('HealthCheckType');
        this.attrHealthCheckUri = this.getAtt('HealthCheckUri');
        this.attrHealthyThreshold = this.getAtt('HealthyThreshold');
        this.attrListenerPort = this.getAtt('ListenerPort');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrMasterSlaveServerGroupId = this.getAtt('MasterSlaveServerGroupId');
        this.attrPersistenceTimeout = this.getAtt('PersistenceTimeout');
        this.attrProxyProtocolV2Enabled = this.getAtt('ProxyProtocolV2Enabled');
        this.attrScheduler = this.getAtt('Scheduler');
        this.attrSynProxy = this.getAtt('SynProxy');
        this.attrUnhealthyThreshold = this.getAtt('UnhealthyThreshold');
        this.attrVServerGroupId = this.getAtt('VServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerTCPListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosLoadBalancerTCPListeners`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
 */
export interface RosLoadBalancerTCPListenersProps {

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerTCPListenersProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerTCPListenersProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerTCPListenersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerTCPListenersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancerTCPListeners` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerTCPListenersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancerTCPListeners` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerTCPListenersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerTCPListenersPropsValidator(properties).assertSuccess();
    }
    return {
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListeners`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancerTCPListeners` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
 */
export class RosLoadBalancerTCPListeners extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancerTCPListeners";

    /**
     * @Attribute ListenerPorts: The list of listener ports.
     */
    public readonly attrListenerPorts: ros.IResolvable;

    /**
     * @Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.
     */
    public readonly attrLoadBalancerTcpListeners: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    public loadBalancerId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerTCPListenersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancerTCPListeners.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerPorts = this.getAtt('ListenerPorts');
        this.attrLoadBalancerTcpListeners = this.getAtt('LoadBalancerTCPListeners');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerTCPListenersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosLoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
export interface RosLoadBalancersProps {

    /**
     * @Property address: The service address of the load balancing instance.
     */
    readonly address?: string | ros.IResolvable;

    /**
     * @Property addressIpVersion: IP version.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Public network type instance payment method.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: ID of the load balancing instance.
     */
    readonly loadBalancerId?: string | ros.IResolvable;

    /**
     * @Property loadBalancerName: Name of the load balancing instance.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * @Property masterZoneId: ID of the primary available area of the load balancing instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;

    /**
     * @Property networkType: The network type of the private network load balancing instance
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property paymentType: Load balancing instance payment type
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;

    /**
     * @Property status: The status of SLB.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the switch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancersProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancersProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["inactive","active","locked"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('slaveZoneId', ros.validateString)(properties.slaveZoneId));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["vpc","classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","Subscription","PrePaid","PrePay","Prepaid","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    errors.collect(ros.propertyValidator('masterZoneId', ros.validateString)(properties.masterZoneId));
    return errors.wrap('supplied properties not correct for "RosLoadBalancersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancers` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::LoadBalancers` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancersPropsValidator(properties).assertSuccess();
    }
    return {
      'Address': ros.stringToRosTemplate(properties.address),
      'AddressIpVersion': ros.stringToRosTemplate(properties.addressIpVersion),
      'AddressType': ros.stringToRosTemplate(properties.addressType),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'LoadBalancerName': ros.stringToRosTemplate(properties.loadBalancerName),
      'MasterZoneId': ros.stringToRosTemplate(properties.masterZoneId),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SlaveZoneId': ros.stringToRosTemplate(properties.slaveZoneId),
      'Status': ros.stringToRosTemplate(properties.status),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancers`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
export class RosLoadBalancers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancers";

    /**
     * @Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    public readonly attrLoadBalancerIds: ros.IResolvable;

    /**
     * @Attribute LoadBalancers: The list of load balancers.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property address: The service address of the load balancing instance.
     */
    public address: string | ros.IResolvable | undefined;

    /**
     * @Property addressIpVersion: IP version.
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    public addressType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Public network type instance payment method.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerId: ID of the load balancing instance.
     */
    public loadBalancerId: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerName: Name of the load balancing instance.
     */
    public loadBalancerName: string | ros.IResolvable | undefined;

    /**
     * @Property masterZoneId: ID of the primary available area of the load balancing instance.
     */
    public masterZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The network type of the private network load balancing instance
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Load balancing instance payment type
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    public slaveZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of SLB.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC ID
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the switch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancers.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoadBalancerIds = this.getAtt('LoadBalancerIds');
        this.attrLoadBalancers = this.getAtt('LoadBalancers');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.address = props.address;
        this.addressIpVersion = props.addressIpVersion;
        this.addressType = props.addressType;
        this.internetChargeType = props.internetChargeType;
        this.loadBalancerId = props.loadBalancerId;
        this.loadBalancerName = props.loadBalancerName;
        this.masterZoneId = props.masterZoneId;
        this.networkType = props.networkType;
        this.paymentType = props.paymentType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.slaveZoneId = props.slaveZoneId;
        this.status = props.status;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            address: this.address,
            addressIpVersion: this.addressIpVersion,
            addressType: this.addressType,
            internetChargeType: this.internetChargeType,
            loadBalancerId: this.loadBalancerId,
            loadBalancerName: this.loadBalancerName,
            masterZoneId: this.masterZoneId,
            networkType: this.networkType,
            paymentType: this.paymentType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            slaveZoneId: this.slaveZoneId,
            status: this.status,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export interface RosRuleProps {

    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    readonly ruleId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      'RuleId': ros.stringToRosTemplate(properties.ruleId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::Rule";

    /**
     * @Attribute Cookie: The cookie to be configured on the backend server.
     */
    public readonly attrCookie: ros.IResolvable;

    /**
     * @Attribute CookieTimeout: The timeout period of a cookie.
     */
    public readonly attrCookieTimeout: ros.IResolvable;

    /**
     * @Attribute Domain: The domain name that is configured in the forwarding rule.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * @Attribute HealthCheck: Specifies whether to enable health checks.
     */
    public readonly attrHealthCheck: ros.IResolvable;

    /**
     * @Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks. Valid values: 1 to 65535.
     */
    public readonly attrHealthCheckConnectPort: ros.IResolvable;

    /**
     * @Attribute HealthCheckDomain: The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
     */
    public readonly attrHealthCheckDomain: ros.IResolvable;

    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable;

    /**
     * @Attribute HealthCheckInterval: The time interval between two consecutive health checks.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * @Attribute HealthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
     */
    public readonly attrHealthCheckTimeout: ros.IResolvable;

    /**
     * @Attribute HealthCheckUri: The URI that is used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable;

    /**
     * @Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
     */
    public readonly attrHealthyThreshold: ros.IResolvable;

    /**
     * @Attribute ListenerPort: The listener port that is used by the SLB instance.
     */
    public readonly attrListenerPort: ros.IResolvable;

    /**
     * @Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
     */
    public readonly attrListenerSync: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the SLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute RuleId: The ID of the forwarding rule.
     */
    public readonly attrRuleId: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the forwarding rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Scheduler: The scheduling algorithm.
     */
    public readonly attrScheduler: ros.IResolvable;

    /**
     * @Attribute StickySession: Indicates whether session persistence is enabled.  Valid values: on and off.
     */
    public readonly attrStickySession: ros.IResolvable;

    /**
     * @Attribute StickySessionType: The method that is used to handle a cookie.
     */
    public readonly attrStickySessionType: ros.IResolvable;

    /**
     * @Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
     */
    public readonly attrUnhealthyThreshold: ros.IResolvable;

    /**
     * @Attribute Url: The URL that is configured in the forwarding rule.
     */
    public readonly attrUrl: ros.IResolvable;

    /**
     * @Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
     */
    public readonly attrVserverGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    public ruleId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCookie = this.getAtt('Cookie');
        this.attrCookieTimeout = this.getAtt('CookieTimeout');
        this.attrDomain = this.getAtt('Domain');
        this.attrHealthCheck = this.getAtt('HealthCheck');
        this.attrHealthCheckConnectPort = this.getAtt('HealthCheckConnectPort');
        this.attrHealthCheckDomain = this.getAtt('HealthCheckDomain');
        this.attrHealthCheckHttpCode = this.getAtt('HealthCheckHttpCode');
        this.attrHealthCheckInterval = this.getAtt('HealthCheckInterval');
        this.attrHealthCheckTimeout = this.getAtt('HealthCheckTimeout');
        this.attrHealthCheckUri = this.getAtt('HealthCheckUri');
        this.attrHealthyThreshold = this.getAtt('HealthyThreshold');
        this.attrListenerPort = this.getAtt('ListenerPort');
        this.attrListenerSync = this.getAtt('ListenerSync');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrRuleId = this.getAtt('RuleId');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrScheduler = this.getAtt('Scheduler');
        this.attrStickySession = this.getAtt('StickySession');
        this.attrStickySessionType = this.getAtt('StickySessionType');
        this.attrUnhealthyThreshold = this.getAtt('UnhealthyThreshold');
        this.attrUrl = this.getAtt('Url');
        this.attrVserverGroupId = this.getAtt('VserverGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleId = props.ruleId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleId: this.ruleId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export interface RosRulesProps {

    /**
     * @Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
     */
    readonly listenerPort: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosRulesProps`
 *
 * @returns the result of the validation.
 */
function RosRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    errors.collect(ros.propertyValidator('listenerPort', ros.validateString)(properties.listenerPort));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('listenerProtocol', ros.validateString)(properties.listenerProtocol));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::Rules` resource
 *
 * @param properties - the TypeScript properties of a `RosRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::Rules` resource.
 */
// @ts-ignore TS6133
function rosRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulesPropsValidator(properties).assertSuccess();
    }
    return {
      'ListenerPort': ros.stringToRosTemplate(properties.listenerPort),
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'ListenerProtocol': ros.stringToRosTemplate(properties.listenerProtocol),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Rules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export class RosRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::Rules";

    /**
     * @Attribute RuleIds: The list of rule IDs.
     */
    public readonly attrRuleIds: ros.IResolvable;

    /**
     * @Attribute Rules: The list of rules.
     */
    public readonly attrRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
     */
    public listenerPort: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
     */
    public listenerProtocol: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRuleIds = this.getAtt('RuleIds');
        this.attrRules = this.getAtt('Rules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.listenerProtocol = props.listenerProtocol;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            listenerProtocol: this.listenerProtocol,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTLSPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
export interface RosTLSPoliciesProps {

    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly tlsPolicyName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTLSPoliciesProps`
 *
 * @param properties - the TypeScript properties of a `RosTLSPoliciesProps`
 *
 * @returns the result of the validation.
 */
function RosTLSPoliciesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tlsPolicyName', ros.validateString)(properties.tlsPolicyName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTLSPoliciesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::TLSPolicies` resource
 *
 * @param properties - the TypeScript properties of a `RosTLSPoliciesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::TLSPolicies` resource.
 */
// @ts-ignore TS6133
function rosTLSPoliciesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTLSPoliciesPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'TLSPolicyName': ros.stringToRosTemplate(properties.tlsPolicyName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::TLSPolicies`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TLSPolicies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
export class RosTLSPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::TLSPolicies";

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute TLSPolicies: The list of tls policies.
     */
    public readonly attrTlsPolicies: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    public tlsPolicyName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTLSPoliciesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTLSPolicies.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrTlsPolicies = this.getAtt('TLSPolicies');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
        this.tlsPolicyName = props.tlsPolicyName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
            tlsPolicyName: this.tlsPolicyName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTLSPoliciesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTLSPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export interface RosTLSPolicyProps {

    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTLSPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosTLSPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosTLSPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTLSPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::TLSPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosTLSPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::TLSPolicy` resource.
 */
// @ts-ignore TS6133
function rosTLSPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTLSPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::TLSPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TLSPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export class RosTLSPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::TLSPolicy";

    /**
     * @Attribute Ciphers: The cipher suites supported by the TLS version.
     */
    public readonly attrCiphers: ros.IResolvable;

    /**
     * @Attribute CreateTime: The timestamp generated when the TLS policy is created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the TLS policy.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute TLSPolicyName: The name of the TLS policy.
     */
    public readonly attrTlsPolicyName: ros.IResolvable;

    /**
     * @Attribute TlsVersions: The version of the TLS protocol.
     */
    public readonly attrTlsVersions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    public instanceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosTLSPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTLSPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCiphers = this.getAtt('Ciphers');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrTlsPolicyName = this.getAtt('TLSPolicyName');
        this.attrTlsVersions = this.getAtt('TlsVersions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTLSPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
 */
export interface RosVServerGroupProps {

    /**
     * @Property vServerGroupId: The ID of the vServer group.
     */
    readonly vServerGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosVServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::VServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::VServerGroup` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'VServerGroupId': ros.stringToRosTemplate(properties.vServerGroupId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::VServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
 */
export class RosVServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::VServerGroup";

    /**
     * @Attribute BackendServers: The list of backend servers.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the CLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute VServerGroupId: The ID of the vServer group.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    /**
     * @Attribute VServerGroupName: The name of the vServer group.
     */
    public readonly attrVServerGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vServerGroupId: The ID of the vServer group.
     */
    public vServerGroupId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = this.getAtt('BackendServers');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrVServerGroupId = this.getAtt('VServerGroupId');
        this.attrVServerGroupName = this.getAtt('VServerGroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vServerGroupId = props.vServerGroupId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vServerGroupId: this.vServerGroupId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVServerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export interface RosVServerGroupsProps {

    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVServerGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosVServerGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVServerGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::VServerGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::VServerGroups` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVServerGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::VServerGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VServerGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export class RosVServerGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::VServerGroups";

    /**
     * @Attribute VServerGroupIds: The list of VServer group IDs.
     */
    public readonly attrVServerGroupIds: ros.IResolvable;

    /**
     * @Attribute VServerGroups: The list of VServer groups.
     */
    public readonly attrVServerGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    public loadBalancerId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVServerGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVServerGroupIds = this.getAtt('VServerGroupIds');
        this.attrVServerGroups = this.getAtt('VServerGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVServerGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
 */
export interface RosZonesProps {

    /**
     * @Property addressIpVersion: The type of IP address.
     * Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
     * vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
     * classic_internet: a public-facing SLB instance.
     * classic_intranet: an internal SLB instance that is deployed in a classic network.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the result of the validation.
 */
function RosZonesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLB::Zones` resource
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLB::Zones` resource.
 */
// @ts-ignore TS6133
function rosZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonesPropsValidator(properties).assertSuccess();
    }
    return {
      'AddressIPVersion': ros.stringToRosTemplate(properties.addressIpVersion),
      'AddressType': ros.stringToRosTemplate(properties.addressType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Zones`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::Zones";

    /**
     * @Attribute ZoneIds: The list of The primary zone Ids.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * @Attribute Zones: The list of The Zones.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressIpVersion: The type of IP address.
     * Valid values: ipv4 and ipv6.
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
     * vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
     * classic_internet: a public-facing SLB instance.
     * classic_intranet: an internal SLB instance that is deployed in a classic network.
     */
    public addressType: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressIpVersion = props.addressIpVersion;
        this.addressType = props.addressType;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressIpVersion: this.addressIpVersion,
            addressType: this.addressType,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
