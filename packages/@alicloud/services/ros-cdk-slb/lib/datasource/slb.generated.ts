// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
      AclName: ros.stringToRosTemplate(properties.aclName),
      AddressIpVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::AccessControls`, which is used to query created access control lists (ACLs).
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
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclName: this.aclName,
            addressIpVersion: this.addressIpVersion,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessControlsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      DomainExtensionId: ros.stringToRosTemplate(properties.domainExtensionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::DomainExtensions`, which is used to query the domain name extensions that are added to a listener of a Server Load Balancer (SLB) instance.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            domainExtensionId: this.domainExtensionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainExtensionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      Address: ros.stringToRosTemplate(properties.address),
      AddressIpVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      AddressType: ros.stringToRosTemplate(properties.addressType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      MasterZoneId: ros.stringToRosTemplate(properties.masterZoneId),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SlaveZoneId: ros.stringToRosTemplate(properties.slaveZoneId),
      Status: ros.stringToRosTemplate(properties.status),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancers`, which is used to query created Classic Load Balancer (CLB) instances.
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
      ListenerPort: ros.stringToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      ListenerProtocol: ros.stringToRosTemplate(properties.listenerProtocol),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Rules`, which is used to query the forwarding rules that are configured for a listener.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            listenerProtocol: this.listenerProtocol,
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
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      TLSPolicyName: ros.stringToRosTemplate(properties.tlsPolicyName),
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
        this.tlsPolicyName = props.tlsPolicyName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            tlsPolicyName: this.tlsPolicyName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTLSPoliciesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
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
      AddressIPVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      AddressType: ros.stringToRosTemplate(properties.addressType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Zones`, which is used to query the zones in which Server Load Balancer (SLB) instances are deployed.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressIpVersion: this.addressIpVersion,
            addressType: this.addressType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
