// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ECS::Activation`
 */
export interface RosActivationProps {

    /**
     * @Property description: The description of the activation code. It must be 1 to 100 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property instanceCount: The maximum number of times that you can use the activation code to register managed instances. Valid values: 1 to 1000.Default value: 10.
     */
    readonly instanceCount?: number | ros.IResolvable;

    /**
     * @Property instanceName: The default instance name prefix. The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
     */
    readonly ipAddressRange?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosActivation.TagsProperty[];

    /**
     * @Property timeToLiveInHours: The validity period of the activation code. The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
     */
    readonly timeToLiveInHours?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosActivationProps`
 *
 * @param properties - the TypeScript properties of a `RosActivationProps`
 *
 * @returns the result of the validation.
 */
function RosActivationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.instanceCount && (typeof properties.instanceCount) !== 'object') {
        errors.collect(ros.propertyValidator('instanceCount', ros.validateRange)({
            data: properties.instanceCount,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('instanceCount', ros.validateNumber)(properties.instanceCount));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.timeToLiveInHours && (typeof properties.timeToLiveInHours) !== 'object') {
        errors.collect(ros.propertyValidator('timeToLiveInHours', ros.validateRange)({
            data: properties.timeToLiveInHours,
            min: 1,
            max: 876576,
          }));
    }
    errors.collect(ros.propertyValidator('timeToLiveInHours', ros.validateNumber)(properties.timeToLiveInHours));
    errors.collect(ros.propertyValidator('ipAddressRange', ros.validateString)(properties.ipAddressRange));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosActivation_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosActivationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Activation` resource
 *
 * @param properties - the TypeScript properties of a `RosActivationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Activation` resource.
 */
// @ts-ignore TS6133
function rosActivationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosActivationPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      InstanceCount: ros.numberToRosTemplate(properties.instanceCount),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      IpAddressRange: ros.stringToRosTemplate(properties.ipAddressRange),
      Tags: ros.listMapper(rosActivationTagsPropertyToRosTemplate)(properties.tags),
      TimeToLiveInHours: ros.numberToRosTemplate(properties.timeToLiveInHours),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Activation`
 */
export class RosActivation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Activation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ActivationCode: Activation code.
     */
    public readonly attrActivationCode: ros.IResolvable;

    /**
     * @Attribute ActivationId: Activation code ID.
     */
    public readonly attrActivationId: ros.IResolvable;

    /**
     * @Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    public readonly attrDeregisteredCount: ros.IResolvable;

    /**
     * @Attribute RegisteredCount: The number of registered instances.
     */
    public readonly attrRegisteredCount: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the activation code. It must be 1 to 100 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property instanceCount: The maximum number of times that you can use the activation code to register managed instances. Valid values: 1 to 1000.Default value: 10.
     */
    public instanceCount: number | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The default instance name prefix. The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
     */
    public ipAddressRange: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosActivation.TagsProperty[] | undefined;

    /**
     * @Property timeToLiveInHours: The validity period of the activation code. The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
     */
    public timeToLiveInHours: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::Activation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosActivationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosActivation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActivationCode = this.getAtt('ActivationCode');
        this.attrActivationId = this.getAtt('ActivationId');
        this.attrDeregisteredCount = this.getAtt('DeregisteredCount');
        this.attrRegisteredCount = this.getAtt('RegisteredCount');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.instanceCount = props.instanceCount;
        this.instanceName = props.instanceName;
        this.ipAddressRange = props.ipAddressRange;
        this.tags = props.tags;
        this.timeToLiveInHours = props.timeToLiveInHours;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            instanceCount: this.instanceCount,
            instanceName: this.instanceName,
            ipAddressRange: this.ipAddressRange,
            tags: this.tags,
            timeToLiveInHours: this.timeToLiveInHours,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosActivationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosActivation {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosActivation_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Activation.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Activation.Tags` resource.
 */
// @ts-ignore TS6133
function rosActivationTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosActivation_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`
 */
export interface RosAssignIpv6AddressesProps {

    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAssignIpv6AddressesProps`
 *
 * @param properties - the TypeScript properties of a `RosAssignIpv6AddressesProps`
 *
 * @returns the result of the validation.
 */
function RosAssignIpv6AddressesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateAny))(properties.ipv6Addresses));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosAssignIpv6AddressesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignIpv6Addresses` resource
 *
 * @param properties - the TypeScript properties of a `RosAssignIpv6AddressesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignIpv6Addresses` resource.
 */
// @ts-ignore TS6133
function rosAssignIpv6AddressesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAssignIpv6AddressesPropsValidator(properties).assertSuccess();
    }
    return {
      NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      Ipv6Addresses: ros.listMapper(ros.objectToRosTemplate)(properties.ipv6Addresses),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::AssignIpv6Addresses`
 */
export class RosAssignIpv6Addresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignIpv6Addresses";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    public readonly attrIpv6AddressIds: ros.IResolvable;

    /**
     * @Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    public readonly attrIpv6Addresses: ros.IResolvable;

    /**
     * @Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    public networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    public ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::AssignIpv6Addresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAssignIpv6AddressesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAssignIpv6Addresses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpv6AddressIds = this.getAtt('Ipv6AddressIds');
        this.attrIpv6Addresses = this.getAtt('Ipv6Addresses');
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkInterfaceId = props.networkInterfaceId;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkInterfaceId: this.networkInterfaceId,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAssignIpv6AddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::AssignPrivateIpAddresses`
 */
export interface RosAssignPrivateIpAddressesProps {

    /**
     * @Property networkInterfaceId: The ID of the ENI.
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI. 
     * Valid values of number of private ip addresses:
     * When the ENI is in the Available state: 1 to 10.
     * When the ENI is in the InUse state: limited by the instance type. 
     * For more information, see Instance type families.
     * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
     */
    readonly privateIpAddresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAssignPrivateIpAddressesProps`
 *
 * @param properties - the TypeScript properties of a `RosAssignPrivateIpAddressesProps`
 *
 * @returns the result of the validation.
 */
function RosAssignPrivateIpAddressesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.secondaryPrivateIpAddressCount && (typeof properties.secondaryPrivateIpAddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('secondaryPrivateIpAddressCount', ros.validateRange)({
            data: properties.secondaryPrivateIpAddressCount,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('secondaryPrivateIpAddressCount', ros.validateNumber)(properties.secondaryPrivateIpAddressCount));
    if(properties.privateIpAddresses && (Array.isArray(properties.privateIpAddresses) || (typeof properties.privateIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('privateIpAddresses', ros.validateLength)({
            data: properties.privateIpAddresses.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('privateIpAddresses', ros.listValidator(ros.validateAny))(properties.privateIpAddresses));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosAssignPrivateIpAddressesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignPrivateIpAddresses` resource
 *
 * @param properties - the TypeScript properties of a `RosAssignPrivateIpAddressesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignPrivateIpAddresses` resource.
 */
// @ts-ignore TS6133
function rosAssignPrivateIpAddressesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAssignPrivateIpAddressesPropsValidator(properties).assertSuccess();
    }
    return {
      NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
      PrivateIpAddresses: ros.listMapper(ros.objectToRosTemplate)(properties.privateIpAddresses),
      SecondaryPrivateIpAddressCount: ros.numberToRosTemplate(properties.secondaryPrivateIpAddressCount),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::AssignPrivateIpAddresses`
 */
export class RosAssignPrivateIpAddresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignPrivateIpAddresses";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NetworkInterfaceId: The ID of the ENI.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    /**
     * @Attribute PrivateIpAddresses: Assigned private ip addresses.
     */
    public readonly attrPrivateIpAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkInterfaceId: The ID of the ENI.
     */
    public networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI. 
     * Valid values of number of private ip addresses:
     * When the ENI is in the Available state: 1 to 10.
     * When the ENI is in the InUse state: limited by the instance type. 
     * For more information, see Instance type families.
     * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
     */
    public privateIpAddresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
     */
    public secondaryPrivateIpAddressCount: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAssignPrivateIpAddressesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAssignPrivateIpAddresses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.attrPrivateIpAddresses = this.getAtt('PrivateIpAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkInterfaceId = props.networkInterfaceId;
        this.privateIpAddresses = props.privateIpAddresses;
        this.secondaryPrivateIpAddressCount = props.secondaryPrivateIpAddressCount;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkInterfaceId: this.networkInterfaceId,
            privateIpAddresses: this.privateIpAddresses,
            secondaryPrivateIpAddressCount: this.secondaryPrivateIpAddressCount,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAssignPrivateIpAddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::AutoProvisioningGroup`
 */
export interface RosAutoProvisioningGroupProps {

    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    readonly totalTargetCapacity: string | ros.IResolvable;

    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:// or https://.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly autoProvisioningGroupName?: string | ros.IResolvable;

    /**
     * @Property autoProvisioningGroupType: The type of the auto provisioning group. Valid values:
     * request: One-time delivery. After the auto provisioning group is started, it only attempts
     * to create an instance cluster once. If the cluster fails to be created, the group
     * does not try again.
     * maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
     * is started, it continuously attempts to create and maintain the instance cluster.
     * The auto provisioning group compares the real-time and target capacity of the cluster.
     * If the cluster does not meet the target capacity, the group will create instances
     * until the cluster meets the target capacity.
     * Default value: maintain
     */
    readonly autoProvisioningGroupType?: string | ros.IResolvable;

    /**
     * @Property checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
     */
    readonly checkExecutionStatus?: boolean | ros.IResolvable;

    /**
     * @Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    readonly defaultTargetCapacityType?: string | ros.IResolvable;

    /**
     * @Property description: The description of the auto provisioning group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
     */
    readonly excessCapacityTerminationPolicy?: string | ros.IResolvable;

    /**
     * @Property launchConfiguration:
     */
    readonly launchConfiguration?: RosAutoProvisioningGroup.LaunchConfigurationProperty | ros.IResolvable;

    /**
     * @Property launchTemplateConfig:
     */
    readonly launchTemplateConfig?: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * @Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    readonly maxSpotPrice?: number | ros.IResolvable;

    /**
     * @Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    readonly payAsYouGoAllocationStrategy?: string | ros.IResolvable;

    /**
     * @Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    readonly payAsYouGoTargetCapacity?: string | ros.IResolvable;

    /**
     * @Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    readonly spotAllocationStrategy?: string | ros.IResolvable;

    /**
     * @Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    readonly spotInstanceInterruptionBehavior?: string | ros.IResolvable;

    /**
     * @Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    readonly spotInstancePoolsToUseCount?: number | ros.IResolvable;

    /**
     * @Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    readonly spotTargetCapacity?: string | ros.IResolvable;

    /**
     * @Property terminateInstances: Specifies whether to release instances of the auto provisioning group. Valid values:
     * true
     * false
     * Default: false
     */
    readonly terminateInstances?: boolean | ros.IResolvable;

    /**
     * @Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
     * Valid values:
     * true: shuts down preemptible instances. The action to be performed on these shutdown instances
     * is specified by the SpotInstanceInterruptionBehavior parameter.
     * false: does not shut down preemptible instances.
     * Default: false
     */
    readonly terminateInstancesWithExpiration?: boolean | ros.IResolvable;

    /**
     * @Property validFrom: The time when the auto provisioning group is started. The period of time between this
     * point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group is immediately started after creation.
     */
    readonly validFrom?: string | ros.IResolvable;

    /**
     * @Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
     */
    readonly validUntil?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAutoProvisioningGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoProvisioningGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('totalTargetCapacity', ros.requiredValidator)(properties.totalTargetCapacity));
    errors.collect(ros.propertyValidator('totalTargetCapacity', ros.validateString)(properties.totalTargetCapacity));
    errors.collect(ros.propertyValidator('autoProvisioningGroupName', ros.validateString)(properties.autoProvisioningGroupName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.excessCapacityTerminationPolicy && (typeof properties.excessCapacityTerminationPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('excessCapacityTerminationPolicy', ros.validateAllowedValues)({
          data: properties.excessCapacityTerminationPolicy,
          allowedValues: ["no-termination","termination"],
        }));
    }
    errors.collect(ros.propertyValidator('excessCapacityTerminationPolicy', ros.validateString)(properties.excessCapacityTerminationPolicy));
    errors.collect(ros.propertyValidator('launchTemplateConfig', ros.listValidator(RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator))(properties.launchTemplateConfig));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('checkExecutionStatus', ros.validateBoolean)(properties.checkExecutionStatus));
    errors.collect(ros.propertyValidator('payAsYouGoTargetCapacity', ros.validateString)(properties.payAsYouGoTargetCapacity));
    if(properties.autoProvisioningGroupType && (typeof properties.autoProvisioningGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('autoProvisioningGroupType', ros.validateAllowedValues)({
          data: properties.autoProvisioningGroupType,
          allowedValues: ["maintain","request"],
        }));
    }
    errors.collect(ros.propertyValidator('autoProvisioningGroupType', ros.validateString)(properties.autoProvisioningGroupType));
    if(properties.spotInstanceInterruptionBehavior && (typeof properties.spotInstanceInterruptionBehavior) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstanceInterruptionBehavior', ros.validateAllowedValues)({
          data: properties.spotInstanceInterruptionBehavior,
          allowedValues: ["stop","terminate"],
        }));
    }
    errors.collect(ros.propertyValidator('spotInstanceInterruptionBehavior', ros.validateString)(properties.spotInstanceInterruptionBehavior));
    errors.collect(ros.propertyValidator('validUntil', ros.validateString)(properties.validUntil));
    errors.collect(ros.propertyValidator('terminateInstancesWithExpiration', ros.validateBoolean)(properties.terminateInstancesWithExpiration));
    if(properties.defaultTargetCapacityType && (typeof properties.defaultTargetCapacityType) !== 'object') {
        errors.collect(ros.propertyValidator('defaultTargetCapacityType', ros.validateAllowedValues)({
          data: properties.defaultTargetCapacityType,
          allowedValues: ["PayAsYouGo","Spot"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultTargetCapacityType', ros.validateString)(properties.defaultTargetCapacityType));
    errors.collect(ros.propertyValidator('launchConfiguration', RosAutoProvisioningGroup_LaunchConfigurationPropertyValidator)(properties.launchConfiguration));
    errors.collect(ros.propertyValidator('spotInstancePoolsToUseCount', ros.validateNumber)(properties.spotInstancePoolsToUseCount));
    errors.collect(ros.propertyValidator('spotTargetCapacity', ros.validateString)(properties.spotTargetCapacity));
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    errors.collect(ros.propertyValidator('validFrom', ros.validateString)(properties.validFrom));
    errors.collect(ros.propertyValidator('maxSpotPrice', ros.validateNumber)(properties.maxSpotPrice));
    if(properties.spotAllocationStrategy && (typeof properties.spotAllocationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotAllocationStrategy', ros.validateAllowedValues)({
          data: properties.spotAllocationStrategy,
          allowedValues: ["diversified","lowest-price"],
        }));
    }
    errors.collect(ros.propertyValidator('spotAllocationStrategy', ros.validateString)(properties.spotAllocationStrategy));
    errors.collect(ros.propertyValidator('terminateInstances', ros.validateBoolean)(properties.terminateInstances));
    if(properties.payAsYouGoAllocationStrategy && (typeof properties.payAsYouGoAllocationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('payAsYouGoAllocationStrategy', ros.validateAllowedValues)({
          data: properties.payAsYouGoAllocationStrategy,
          allowedValues: ["lowest-price","prioritized"],
        }));
    }
    errors.collect(ros.propertyValidator('payAsYouGoAllocationStrategy', ros.validateString)(properties.payAsYouGoAllocationStrategy));
    return errors.wrap('supplied properties not correct for "RosAutoProvisioningGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoProvisioningGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoProvisioningGroupPropsValidator(properties).assertSuccess();
    }
    return {
      TotalTargetCapacity: ros.stringToRosTemplate(properties.totalTargetCapacity),
      AutoProvisioningGroupName: ros.stringToRosTemplate(properties.autoProvisioningGroupName),
      AutoProvisioningGroupType: ros.stringToRosTemplate(properties.autoProvisioningGroupType),
      CheckExecutionStatus: ros.booleanToRosTemplate(properties.checkExecutionStatus),
      DefaultTargetCapacityType: ros.stringToRosTemplate(properties.defaultTargetCapacityType),
      Description: ros.stringToRosTemplate(properties.description),
      ExcessCapacityTerminationPolicy: ros.stringToRosTemplate(properties.excessCapacityTerminationPolicy),
      LaunchConfiguration: rosAutoProvisioningGroupLaunchConfigurationPropertyToRosTemplate(properties.launchConfiguration),
      LaunchTemplateConfig: ros.listMapper(rosAutoProvisioningGroupLaunchTemplateConfigPropertyToRosTemplate)(properties.launchTemplateConfig),
      LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
      LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
      MaxSpotPrice: ros.numberToRosTemplate(properties.maxSpotPrice),
      PayAsYouGoAllocationStrategy: ros.stringToRosTemplate(properties.payAsYouGoAllocationStrategy),
      PayAsYouGoTargetCapacity: ros.stringToRosTemplate(properties.payAsYouGoTargetCapacity),
      SpotAllocationStrategy: ros.stringToRosTemplate(properties.spotAllocationStrategy),
      SpotInstanceInterruptionBehavior: ros.stringToRosTemplate(properties.spotInstanceInterruptionBehavior),
      SpotInstancePoolsToUseCount: ros.numberToRosTemplate(properties.spotInstancePoolsToUseCount),
      SpotTargetCapacity: ros.stringToRosTemplate(properties.spotTargetCapacity),
      TerminateInstances: ros.booleanToRosTemplate(properties.terminateInstances),
      TerminateInstancesWithExpiration: ros.booleanToRosTemplate(properties.terminateInstancesWithExpiration),
      ValidFrom: ros.stringToRosTemplate(properties.validFrom),
      ValidUntil: ros.stringToRosTemplate(properties.validUntil),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::AutoProvisioningGroup`
 */
export class RosAutoProvisioningGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoProvisioningGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    public readonly attrAutoProvisioningGroupId: ros.IResolvable;

    /**
     * @Attribute AutoProvisioningGroupName: The name of the auto provisioning group.
     */
    public readonly attrAutoProvisioningGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    public totalTargetCapacity: string | ros.IResolvable;

    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:// or https://.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    public autoProvisioningGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property autoProvisioningGroupType: The type of the auto provisioning group. Valid values:
     * request: One-time delivery. After the auto provisioning group is started, it only attempts
     * to create an instance cluster once. If the cluster fails to be created, the group
     * does not try again.
     * maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
     * is started, it continuously attempts to create and maintain the instance cluster.
     * The auto provisioning group compares the real-time and target capacity of the cluster.
     * If the cluster does not meet the target capacity, the group will create instances
     * until the cluster meets the target capacity.
     * Default value: maintain
     */
    public autoProvisioningGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
     */
    public checkExecutionStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    public defaultTargetCapacityType: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the auto provisioning group.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
     */
    public excessCapacityTerminationPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property launchConfiguration:
     */
    public launchConfiguration: RosAutoProvisioningGroup.LaunchConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateConfig:
     */
    public launchTemplateConfig: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    public launchTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    public launchTemplateVersion: string | ros.IResolvable | undefined;

    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    public maxSpotPrice: number | ros.IResolvable | undefined;

    /**
     * @Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    public payAsYouGoAllocationStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    public payAsYouGoTargetCapacity: string | ros.IResolvable | undefined;

    /**
     * @Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    public spotAllocationStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    public spotInstanceInterruptionBehavior: string | ros.IResolvable | undefined;

    /**
     * @Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    public spotInstancePoolsToUseCount: number | ros.IResolvable | undefined;

    /**
     * @Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    public spotTargetCapacity: string | ros.IResolvable | undefined;

    /**
     * @Property terminateInstances: Specifies whether to release instances of the auto provisioning group. Valid values:
     * true
     * false
     * Default: false
     */
    public terminateInstances: boolean | ros.IResolvable | undefined;

    /**
     * @Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
     * Valid values:
     * true: shuts down preemptible instances. The action to be performed on these shutdown instances
     * is specified by the SpotInstanceInterruptionBehavior parameter.
     * false: does not shut down preemptible instances.
     * Default: false
     */
    public terminateInstancesWithExpiration: boolean | ros.IResolvable | undefined;

    /**
     * @Property validFrom: The time when the auto provisioning group is started. The period of time between this
     * point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group is immediately started after creation.
     */
    public validFrom: string | ros.IResolvable | undefined;

    /**
     * @Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
     */
    public validUntil: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoProvisioningGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoProvisioningGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoProvisioningGroupId = this.getAtt('AutoProvisioningGroupId');
        this.attrAutoProvisioningGroupName = this.getAtt('AutoProvisioningGroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.totalTargetCapacity = props.totalTargetCapacity;
        this.autoProvisioningGroupName = props.autoProvisioningGroupName;
        this.autoProvisioningGroupType = props.autoProvisioningGroupType;
        this.checkExecutionStatus = props.checkExecutionStatus;
        this.defaultTargetCapacityType = props.defaultTargetCapacityType;
        this.description = props.description;
        this.excessCapacityTerminationPolicy = props.excessCapacityTerminationPolicy;
        this.launchConfiguration = props.launchConfiguration;
        this.launchTemplateConfig = props.launchTemplateConfig;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.maxSpotPrice = props.maxSpotPrice;
        this.payAsYouGoAllocationStrategy = props.payAsYouGoAllocationStrategy;
        this.payAsYouGoTargetCapacity = props.payAsYouGoTargetCapacity;
        this.spotAllocationStrategy = props.spotAllocationStrategy;
        this.spotInstanceInterruptionBehavior = props.spotInstanceInterruptionBehavior;
        this.spotInstancePoolsToUseCount = props.spotInstancePoolsToUseCount;
        this.spotTargetCapacity = props.spotTargetCapacity;
        this.terminateInstances = props.terminateInstances;
        this.terminateInstancesWithExpiration = props.terminateInstancesWithExpiration;
        this.validFrom = props.validFrom;
        this.validUntil = props.validUntil;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            totalTargetCapacity: this.totalTargetCapacity,
            autoProvisioningGroupName: this.autoProvisioningGroupName,
            autoProvisioningGroupType: this.autoProvisioningGroupType,
            checkExecutionStatus: this.checkExecutionStatus,
            defaultTargetCapacityType: this.defaultTargetCapacityType,
            description: this.description,
            excessCapacityTerminationPolicy: this.excessCapacityTerminationPolicy,
            launchConfiguration: this.launchConfiguration,
            launchTemplateConfig: this.launchTemplateConfig,
            launchTemplateId: this.launchTemplateId,
            launchTemplateVersion: this.launchTemplateVersion,
            maxSpotPrice: this.maxSpotPrice,
            payAsYouGoAllocationStrategy: this.payAsYouGoAllocationStrategy,
            payAsYouGoTargetCapacity: this.payAsYouGoTargetCapacity,
            spotAllocationStrategy: this.spotAllocationStrategy,
            spotInstanceInterruptionBehavior: this.spotInstanceInterruptionBehavior,
            spotInstancePoolsToUseCount: this.spotInstancePoolsToUseCount,
            spotTargetCapacity: this.spotTargetCapacity,
            terminateInstances: this.terminateInstances,
            terminateInstancesWithExpiration: this.terminateInstancesWithExpiration,
            validFrom: this.validFrom,
            validUntil: this.validUntil,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoProvisioningGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    export interface DataDiskProperty {
        /**
         * @Property snapshotId: The ID of the snapshot used to create data disk
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The category of data disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: ESSD
     * cloud: basic disk
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: The description of data disk N. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The ID of the KMS key to be used by data disk
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt data disk. Default value: false
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the ESSD used as data disk. Default value: PL1. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of data disk
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Specifies whether to release data disk when the instance is released. Default value: true
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property diskName: The name of data disk N. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
         */
        readonly diskName?: string | ros.IResolvable;
        /**
         * @Property internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
     * PayByBandwidth
     * PayByTraffic
         */
        readonly internetChargeType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataDiskProperty`
 *
 * @param properties - the TypeScript properties of a `DataDiskProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_DataDiskPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "DataDiskProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.DataDisk` resource
 *
 * @param properties - the TypeScript properties of a `DataDiskProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.DataDisk` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupDataDiskPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoProvisioningGroup_DataDiskPropertyValidator(properties).assertSuccess();
    return {
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      KmsKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.numberToRosTemplate(properties.size),
      DeleteWithInstance: ros.booleanToRosTemplate(properties.deleteWithInstance),
      DiskName: ros.stringToRosTemplate(properties.diskName),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
    };
}

export namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    export interface LaunchConfigurationProperty {
        /**
         * @Property keyPairName: The name of the key pair to be bound to the instance.
         */
        readonly keyPairName?: string | ros.IResolvable;
        /**
         * @Property ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
     * none: The instance is not I/O optimized.
     * optimized: The instance is I/O optimized.
         */
        readonly ioOptimized?: string | ros.IResolvable;
        /**
         * @Property resourceGroupId: The ID of the resource group to which to assign the instance.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property systemDiskSize: The size of the system disk. Unit: GiB. Valid values: 20 to 500.
         */
        readonly systemDiskSize?: number | ros.IResolvable;
        /**
         * @Property userData: The user data of the instance.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         */
        readonly systemDiskDescription?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID.
         */
        readonly securityGroupId: string | ros.IResolvable;
        /**
         * @Property internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
     * PayByBandwidth
     * PayByTraffic
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     * cloud: basic disk
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property instanceName: The name of the instance.
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property systemDiskName: The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
         */
        readonly systemDiskName?: string | ros.IResolvable;
        /**
         * @Property dataDisk: Data disk
         */
        readonly dataDisk?: Array<RosAutoProvisioningGroup.DataDiskProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ramRoleName: The name of the RAM role.
         */
        readonly ramRoleName?: string | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100. Default value: 0.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the ESSD used as the system disk. Default value: PL0. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property imageId: Image ID.
         */
        readonly imageId: string | ros.IResolvable;
        /**
         * @Property instanceDescription: The description of the instance.
         */
        readonly instanceDescription?: string | ros.IResolvable;
        /**
         * @Property tag:
         */
        readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property hostName: The hostname of the instance.
         */
        readonly hostName?: string | ros.IResolvable;
        /**
         * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode. For more information, see the "Standard mode" section of the Burstable instances topic.
     * Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section of the Burstable instances topic.
         */
        readonly creditSpecification?: string | ros.IResolvable;
        /**
         * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * Active: Security hardening is enabled. This value is applicable only to public images.
     * Deactive: Security hardening is disabled. This value is applicable to all image types.
         */
        readonly securityEnhancementStrategy?: string | ros.IResolvable;
        /**
         * @Property passwordInherit: Specifies whether to use the password preset in the image.
         */
        readonly passwordInherit?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LaunchConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LaunchConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_LaunchConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
          data: properties.ioOptimized,
          allowedValues: ["optimized","none"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('systemDiskName', ros.validateString)(properties.systemDiskName));
    if(properties.dataDisk && (Array.isArray(properties.dataDisk) || (typeof properties.dataDisk) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisk', ros.validateLength)({
            data: properties.dataDisk.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('dataDisk', ros.listValidator(RosAutoProvisioningGroup_DataDiskPropertyValidator))(properties.dataDisk));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('instanceDescription', ros.validateString)(properties.instanceDescription));
    if(properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('creditSpecification', ros.validateString)(properties.creditSpecification));
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    return errors.wrap('supplied properties not correct for "LaunchConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `LaunchConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupLaunchConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoProvisioningGroup_LaunchConfigurationPropertyValidator(properties).assertSuccess();
    return {
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      UserData: ros.stringToRosTemplate(properties.userData),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      SystemDiskName: ros.stringToRosTemplate(properties.systemDiskName),
      DataDisk: ros.listMapper(rosAutoProvisioningGroupDataDiskPropertyToRosTemplate)(properties.dataDisk),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceDescription: ros.stringToRosTemplate(properties.instanceDescription),
      Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
      HostName: ros.stringToRosTemplate(properties.hostName),
      CreditSpecification: ros.stringToRosTemplate(properties.creditSpecification),
      SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
      PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
    };
}

export namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    export interface LaunchTemplateConfigProperty {
        /**
         * @Property weightedCapacity: The weight of the instance type specified in the Nth extended configurations of the
     * launch template.
     * The weight is calculated based on the computing power of a specified instance type
     * and the minimum computing power of a single node of the cluster. A greater weight
     * indicates that the instance has more computing power, and as a result fewer instances
     * are required.
     * For example, when the minimum computing power of a single node is 8 vCPUs and 60 GiB
     * of memory, the weight of the instance type with 8 vCPUs and 60 GiB of memory is 1,
     * and the weight of the instance type with 16 vCPUs and 120 GiB of memory is 2.
         */
        readonly weightedCapacity?: number | ros.IResolvable;
        /**
         * @Property priority: The priority of the instance type specified in the Nth extended configurations of
     * the launch template. A value of 0 indicates the highest priority.
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the VSwitch in the Nth extended configurations of the launch template.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the Nth extended configurations of the launch template.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property maxPrice: The maximum price of the instance type specified in the Nth extended configurations
     * of the launch template.
         */
        readonly maxPrice?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LaunchTemplateConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LaunchTemplateConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('weightedCapacity', ros.validateNumber)(properties.weightedCapacity));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('maxPrice', ros.validateNumber)(properties.maxPrice));
    return errors.wrap('supplied properties not correct for "LaunchTemplateConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchTemplateConfig` resource
 *
 * @param properties - the TypeScript properties of a `LaunchTemplateConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchTemplateConfig` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupLaunchTemplateConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator(properties).assertSuccess();
    return {
      WeightedCapacity: ros.numberToRosTemplate(properties.weightedCapacity),
      Priority: ros.numberToRosTemplate(properties.priority),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      MaxPrice: ros.numberToRosTemplate(properties.maxPrice),
    };
}

export namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    export interface TagProperty {
        /**
         * @Property value: The tag value of the instance.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The tag key of the instance.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.Tag` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoProvisioningGroup_TagPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::AutoSnapshotPolicy`
 */
export interface RosAutoSnapshotPolicyProps {

    /**
     * @Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    readonly repeatWeekdays: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    readonly retentionDays: number | ros.IResolvable;

    /**
     * @Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
     * A maximum of 24 time points can be selected.
     * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
     */
    readonly timePoints: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
     * It can consist of [2, 128] English or Chinese characters.
     * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
     * Cannot start with http:// or https://.
     * Default value: null.
     */
    readonly autoSnapshotPolicyName?: string | ros.IResolvable;

    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAutoSnapshotPolicy.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosAutoSnapshotPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosAutoSnapshotPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timePoints', ros.requiredValidator)(properties.timePoints));
    errors.collect(ros.propertyValidator('timePoints', ros.listValidator(ros.validateAny))(properties.timePoints));
    errors.collect(ros.propertyValidator('diskIds', ros.listValidator(ros.validateString))(properties.diskIds));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('retentionDays', ros.requiredValidator)(properties.retentionDays));
    if(properties.retentionDays && (typeof properties.retentionDays) !== 'object') {
        errors.collect(ros.propertyValidator('retentionDays', ros.validateRange)({
            data: properties.retentionDays,
            min: -1,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('repeatWeekdays', ros.requiredValidator)(properties.repeatWeekdays));
    errors.collect(ros.propertyValidator('repeatWeekdays', ros.listValidator(ros.validateNumber))(properties.repeatWeekdays));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyName', ros.validateString)(properties.autoSnapshotPolicyName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosAutoSnapshotPolicy_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosAutoSnapshotPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoSnapshotPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      RepeatWeekdays: ros.listMapper(ros.numberToRosTemplate)(properties.repeatWeekdays),
      RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
      TimePoints: ros.listMapper(ros.objectToRosTemplate)(properties.timePoints),
      AutoSnapshotPolicyName: ros.stringToRosTemplate(properties.autoSnapshotPolicyName),
      DiskIds: ros.listMapper(ros.stringToRosTemplate)(properties.diskIds),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosAutoSnapshotPolicyTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::AutoSnapshotPolicy`
 */
export class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoSnapshotPolicy";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
     */
    public readonly attrAutoSnapshotPolicyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    public repeatWeekdays: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    public retentionDays: number | ros.IResolvable;

    /**
     * @Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
     * A maximum of 24 time points can be selected.
     * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
     */
    public timePoints: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
     * It can consist of [2, 128] English or Chinese characters.
     * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
     * Cannot start with http:// or https://.
     * Default value: null.
     */
    public autoSnapshotPolicyName: string | ros.IResolvable | undefined;

    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    public diskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosAutoSnapshotPolicy.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoSnapshotPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoSnapshotPolicyId = this.getAtt('AutoSnapshotPolicyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.repeatWeekdays = props.repeatWeekdays;
        this.retentionDays = props.retentionDays;
        this.timePoints = props.timePoints;
        this.autoSnapshotPolicyName = props.autoSnapshotPolicyName;
        this.diskIds = props.diskIds;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            repeatWeekdays: this.repeatWeekdays,
            retentionDays: this.retentionDays,
            timePoints: this.timePoints,
            autoSnapshotPolicyName: this.autoSnapshotPolicyName,
            diskIds: this.diskIds,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoSnapshotPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAutoSnapshotPolicy {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoSnapshotPolicy_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy.Tags` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPolicyTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoSnapshotPolicy_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::Command`
 */
export interface RosCommandProps {

    /**
     * @Property type: The type of command.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    readonly commandContent?: string | ros.IResolvable;

    /**
     * @Property description: The description of command.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of command.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to command. Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCommand.TagsProperty[];

    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    readonly workingDir?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosCommandProps`
 *
 * @returns the result of the validation.
 */
function RosCommandPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('commandContent', ros.validateString)(properties.commandContent));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('enableParameter', ros.validateBoolean)(properties.enableParameter));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCommand_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCommandProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Command` resource
 *
 * @param properties - the TypeScript properties of a `RosCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Command` resource.
 */
// @ts-ignore TS6133
function rosCommandPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommandPropsValidator(properties).assertSuccess();
    }
    return {
      Type: ros.stringToRosTemplate(properties.type),
      CommandContent: ros.stringToRosTemplate(properties.commandContent),
      Description: ros.stringToRosTemplate(properties.description),
      EnableParameter: ros.booleanToRosTemplate(properties.enableParameter),
      Name: ros.stringToRosTemplate(properties.name),
      Tags: ros.listMapper(rosCommandTagsPropertyToRosTemplate)(properties.tags),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      WorkingDir: ros.stringToRosTemplate(properties.workingDir),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Command`
 */
export class RosCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Command";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CommandId: The id of command created.
     */
    public readonly attrCommandId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property type: The type of command.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    public commandContent: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of command.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    public enableParameter: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of command.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to command. Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCommand.TagsProperty[] | undefined;

    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    public workingDir: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::Command`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandId = this.getAtt('CommandId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.type = props.type;
        this.commandContent = props.commandContent;
        this.description = props.description;
        this.enableParameter = props.enableParameter;
        this.name = props.name;
        this.tags = props.tags;
        this.timeout = props.timeout;
        this.workingDir = props.workingDir;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            type: this.type,
            commandContent: this.commandContent,
            description: this.description,
            enableParameter: this.enableParameter,
            name: this.name,
            tags: this.tags,
            timeout: this.timeout,
            workingDir: this.workingDir,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCommand {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCommand_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Command.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Command.Tags` resource.
 */
// @ts-ignore TS6133
function rosCommandTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCommand_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::CopyImage`
 */
export interface RosCopyImageProps {

    /**
     * @Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    readonly destinationRegionId: string | ros.IResolvable;

    /**
     * @Property imageId: ID of the source custom image.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    readonly destinationDescription?: string | ros.IResolvable;

    /**
     * @Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    readonly destinationImageName?: string | ros.IResolvable;

    /**
     * @Property encrypted: Whether to encrypt the image.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the image copy belongs. If not provided, the image copy belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property sourceRegionId: ID of the region to where the source image belongs. Default is current region ID.
     */
    readonly sourceRegionId?: string | ros.IResolvable;

    /**
     * @Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCopyImageProps`
 *
 * @param properties - the TypeScript properties of a `RosCopyImageProps`
 *
 * @returns the result of the validation.
 */
function RosCopyImagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceRegionId', ros.validateString)(properties.sourceRegionId));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.requiredValidator)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.validateString)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('destinationDescription', ros.validateString)(properties.destinationDescription));
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('destinationImageName', ros.validateString)(properties.destinationImageName));
    return errors.wrap('supplied properties not correct for "RosCopyImageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage` resource
 *
 * @param properties - the TypeScript properties of a `RosCopyImageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage` resource.
 */
// @ts-ignore TS6133
function rosCopyImagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCopyImagePropsValidator(properties).assertSuccess();
    }
    return {
      DestinationRegionId: ros.stringToRosTemplate(properties.destinationRegionId),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      DestinationDescription: ros.stringToRosTemplate(properties.destinationDescription),
      DestinationImageName: ros.stringToRosTemplate(properties.destinationImageName),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SourceRegionId: ros.stringToRosTemplate(properties.sourceRegionId),
      Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::CopyImage`
 */
export class RosCopyImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CopyImage";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
     */
    public readonly attrDestinationRegionId: ros.IResolvable;

    /**
     * @Attribute ImageId: ID of the source custom image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute SourceRegionId: ID of the region to where the source image belongs.
     */
    public readonly attrSourceRegionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    public destinationRegionId: string | ros.IResolvable;

    /**
     * @Property imageId: ID of the source custom image.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    public destinationDescription: string | ros.IResolvable | undefined;

    /**
     * @Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    public destinationImageName: string | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Whether to encrypt the image.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the image copy belongs. If not provided, the image copy belongs to the default resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceRegionId: ID of the region to where the source image belongs. Default is current region ID.
     */
    public sourceRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property tag:
     */
    public tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::CopyImage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCopyImageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCopyImage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDestinationRegionId = this.getAtt('DestinationRegionId');
        this.attrImageId = this.getAtt('ImageId');
        this.attrSourceRegionId = this.getAtt('SourceRegionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationRegionId = props.destinationRegionId;
        this.imageId = props.imageId;
        this.destinationDescription = props.destinationDescription;
        this.destinationImageName = props.destinationImageName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
        this.resourceGroupId = props.resourceGroupId;
        this.sourceRegionId = props.sourceRegionId;
        this.tag = props.tag;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destinationRegionId: this.destinationRegionId,
            imageId: this.imageId,
            destinationDescription: this.destinationDescription,
            destinationImageName: this.destinationImageName,
            encrypted: this.encrypted,
            kmsKeyId: this.kmsKeyId,
            resourceGroupId: this.resourceGroupId,
            sourceRegionId: this.sourceRegionId,
            tag: this.tag,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCopyImagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCopyImage {
    /**
     * @stability external
     */
    export interface TagProperty {
        /**
         * @Property value: Customize the label value of the image.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Custom image tag key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosCopyImage_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage.Tag` resource.
 */
// @ts-ignore TS6133
function rosCopyImageTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCopyImage_TagPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::CustomImage`
 */
export interface RosCustomImageProps {

    /**
     * @Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    readonly architecture?: string | ros.IResolvable;

    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskDeviceMapping:
     */
    readonly diskDeviceMapping?: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageFamily: The name of the image family of the custom image. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;

    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    readonly imageName?: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    readonly platform?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the custom image.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    readonly snapshotId?: string | ros.IResolvable;

    /**
     * @Property sourceRegionId: ID of the region to where the instance/snapshot belongs. Default is current region ID.
     */
    readonly sourceRegionId?: string | ros.IResolvable;

    /**
     * @Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomImageProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomImageProps`
 *
 * @returns the result of the validation.
 */
function RosCustomImagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageName', ros.validateString)(properties.imageName));
    errors.collect(ros.propertyValidator('sourceRegionId', ros.validateString)(properties.sourceRegionId));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('architecture', ros.validateString)(properties.architecture));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('imageFamily', ros.validateString)(properties.imageFamily));
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('diskDeviceMapping', ros.listValidator(RosCustomImage_DiskDeviceMappingPropertyValidator))(properties.diskDeviceMapping));
    return errors.wrap('supplied properties not correct for "RosCustomImageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomImageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage` resource.
 */
// @ts-ignore TS6133
function rosCustomImagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomImagePropsValidator(properties).assertSuccess();
    }
    return {
      Architecture: ros.stringToRosTemplate(properties.architecture),
      Description: ros.stringToRosTemplate(properties.description),
      DiskDeviceMapping: ros.listMapper(rosCustomImageDiskDeviceMappingPropertyToRosTemplate)(properties.diskDeviceMapping),
      ImageFamily: ros.stringToRosTemplate(properties.imageFamily),
      ImageName: ros.stringToRosTemplate(properties.imageName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Platform: ros.stringToRosTemplate(properties.platform),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      SourceRegionId: ros.stringToRosTemplate(properties.sourceRegionId),
      Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::CustomImage`
 */
export class RosCustomImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CustomImage";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ImageId: Image ID
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
     */
    public readonly attrSourceRegionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    public architecture: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskDeviceMapping:
     */
    public diskDeviceMapping: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageFamily: The name of the image family of the custom image. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    public imageFamily: string | ros.IResolvable | undefined;

    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    public imageName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    public platform: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the custom image.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceRegionId: ID of the region to where the instance/snapshot belongs. Default is current region ID.
     */
    public sourceRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property tag:
     */
    public tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::CustomImage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomImageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomImage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrImageId = this.getAtt('ImageId');
        this.attrSourceRegionId = this.getAtt('SourceRegionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.architecture = props.architecture;
        this.description = props.description;
        this.diskDeviceMapping = props.diskDeviceMapping;
        this.imageFamily = props.imageFamily;
        this.imageName = props.imageName;
        this.instanceId = props.instanceId;
        this.platform = props.platform;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
        this.sourceRegionId = props.sourceRegionId;
        this.tag = props.tag;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            architecture: this.architecture,
            description: this.description,
            diskDeviceMapping: this.diskDeviceMapping,
            imageFamily: this.imageFamily,
            imageName: this.imageName,
            instanceId: this.instanceId,
            platform: this.platform,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
            sourceRegionId: this.sourceRegionId,
            tag: this.tag,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomImagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCustomImage {
    /**
     * @stability external
     */
    export interface DiskDeviceMappingProperty {
        /**
         * @Property diskType: Specifies the disk type of DiskDeviceMapping.N. in the new image. You can use the data disk snapshot as the mirrored system disk. If not specified, the default is the disk type corresponding to the snapshot. Ranges:
     * System: system disk
     * Data: data disk
         */
        readonly diskType?: string | ros.IResolvable;
        /**
         * @Property snapshotId: The snapshot ID of the disk DiskDeviceMapping.N..
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property device: Specify the device name in DiskMirrorMapping.N. in the custom image. Value range: /dev/xvda~/dev/xvdz
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property size: The size of a disk. The unit of measurement is GiB. Value range: [5, 2000] GiB.
     * The default value is the value of snapshot size (DiskDeviceMapping.N.SnapshotId) if you do not specify this parameter.
     * If you do not specify the snapshot ID (DiskDeviceMapping.N.SnapshotId), the default size is 5 GiB.
     * The size value cannot be less than the size of the snapshot (DiskDeviceMapping.N.SnapshotId).
     * The value range of n in DiskDeviceMapping.n is: [1, 17].
     * n =1: Indicates the specified disk is a system disk.
     * n =2, 3, ...17: Indicates the specified disk is a data disk.
         */
        readonly size?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskDeviceMappingProperty`
 *
 * @param properties - the TypeScript properties of a `DiskDeviceMappingProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomImage_DiskDeviceMappingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
          data: properties.diskType,
          allowedValues: ["system","data"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "DiskDeviceMappingProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.DiskDeviceMapping` resource
 *
 * @param properties - the TypeScript properties of a `DiskDeviceMappingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.DiskDeviceMapping` resource.
 */
// @ts-ignore TS6133
function rosCustomImageDiskDeviceMappingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomImage_DiskDeviceMappingPropertyValidator(properties).assertSuccess();
    return {
      DiskType: ros.stringToRosTemplate(properties.diskType),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Device: ros.stringToRosTemplate(properties.device),
      Size: ros.numberToRosTemplate(properties.size),
    };
}

export namespace RosCustomImage {
    /**
     * @stability external
     */
    export interface TagProperty {
        /**
         * @Property value: The value of a tag of which n is a number from 1 to 20. Once you use this parameter, it can be a null string. It can be up to 128 characters in length. It cannot begin with "aliyun", "acs:", "http://", or "https://".
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of a tag of which n is from 1 to 20. Once you use this parameter, it cannot be a null string. It can be up to 64 characters in length. It cannot begin with "aliyun", "acs:", "http://", or "https://".
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomImage_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.Tag` resource.
 */
// @ts-ignore TS6133
function rosCustomImageTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomImage_TagPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::DedicatedHost`
 */
export interface RosDedicatedHostProps {

    /**
     * @Property dedicatedHostType: The instance type of host.
     */
    readonly dedicatedHostType: string | ros.IResolvable;

    /**
     * @Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    readonly actionOnMaintenance?: string | ros.IResolvable;

    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    readonly autoPlacement?: string | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    readonly dedicatedHostName?: string | ros.IResolvable;

    /**
     * @Property description: The description of host.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesSlbUdpTimeout?: number | ros.IResolvable;

    /**
     * @Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesUdpTimeout?: number | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    readonly quantity?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];

    /**
     * @Property zoneId: The zone to create the host.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.networkAttributesSlbUdpTimeout && (typeof properties.networkAttributesSlbUdpTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('networkAttributesSlbUdpTimeout', ros.validateRange)({
            data: properties.networkAttributesSlbUdpTimeout,
            min: 15,
            max: 310,
          }));
    }
    errors.collect(ros.propertyValidator('networkAttributesSlbUdpTimeout', ros.validateNumber)(properties.networkAttributesSlbUdpTimeout));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.networkAttributesUdpTimeout && (typeof properties.networkAttributesUdpTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('networkAttributesUdpTimeout', ros.validateRange)({
            data: properties.networkAttributesUdpTimeout,
            min: 15,
            max: 310,
          }));
    }
    errors.collect(ros.propertyValidator('networkAttributesUdpTimeout', ros.validateNumber)(properties.networkAttributesUdpTimeout));
    if(properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
          data: properties.autoRenew,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    if(properties.autoPlacement && (typeof properties.autoPlacement) !== 'object') {
        errors.collect(ros.propertyValidator('autoPlacement', ros.validateAllowedValues)({
          data: properties.autoPlacement,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('autoPlacement', ros.validateString)(properties.autoPlacement));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.quantity && (typeof properties.quantity) !== 'object') {
        errors.collect(ros.propertyValidator('quantity', ros.validateRange)({
            data: properties.quantity,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.requiredValidator)(properties.dedicatedHostType));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.validateString)(properties.dedicatedHostType));
    errors.collect(ros.propertyValidator('dedicatedHostName', ros.validateString)(properties.dedicatedHostName));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.actionOnMaintenance && (typeof properties.actionOnMaintenance) !== 'object') {
        errors.collect(ros.propertyValidator('actionOnMaintenance', ros.validateAllowedValues)({
          data: properties.actionOnMaintenance,
          allowedValues: ["Migrate","Stop"],
        }));
    }
    errors.collect(ros.propertyValidator('actionOnMaintenance', ros.validateString)(properties.actionOnMaintenance));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDedicatedHost_TagsPropertyValidator))(properties.tags));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostPropsValidator(properties).assertSuccess();
    }
    return {
      DedicatedHostType: ros.stringToRosTemplate(properties.dedicatedHostType),
      ActionOnMaintenance: ros.stringToRosTemplate(properties.actionOnMaintenance),
      AutoPlacement: ros.stringToRosTemplate(properties.autoPlacement),
      AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      DedicatedHostName: ros.stringToRosTemplate(properties.dedicatedHostName),
      Description: ros.stringToRosTemplate(properties.description),
      NetworkAttributesSlbUdpTimeout: ros.numberToRosTemplate(properties.networkAttributesSlbUdpTimeout),
      NetworkAttributesUdpTimeout: ros.numberToRosTemplate(properties.networkAttributesUdpTimeout),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      Quantity: ros.numberToRosTemplate(properties.quantity),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosDedicatedHostTagsPropertyToRosTemplate)(properties.tags),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::DedicatedHost`
 */
export class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DedicatedHost";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DedicatedHostIds: The host id list of created hosts
     */
    public readonly attrDedicatedHostIds: ros.IResolvable;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostType: The instance type of host.
     */
    public dedicatedHostType: string | ros.IResolvable;

    /**
     * @Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    public actionOnMaintenance: string | ros.IResolvable | undefined;

    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    public autoPlacement: string | ros.IResolvable | undefined;

    /**
     * @Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    public autoRenew: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    public dedicatedHostName: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of host.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    public networkAttributesSlbUdpTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    public networkAttributesUdpTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    public quantity: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDedicatedHost.TagsProperty[] | undefined;

    /**
     * @Property zoneId: The zone to create the host.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::DedicatedHost`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostIds = this.getAtt('DedicatedHostIds');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostType = props.dedicatedHostType;
        this.actionOnMaintenance = props.actionOnMaintenance;
        this.autoPlacement = props.autoPlacement;
        this.autoReleaseTime = props.autoReleaseTime;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.chargeType = props.chargeType;
        this.dedicatedHostName = props.dedicatedHostName;
        this.description = props.description;
        this.networkAttributesSlbUdpTimeout = props.networkAttributesSlbUdpTimeout;
        this.networkAttributesUdpTimeout = props.networkAttributesUdpTimeout;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.quantity = props.quantity;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostType: this.dedicatedHostType,
            actionOnMaintenance: this.actionOnMaintenance,
            autoPlacement: this.autoPlacement,
            autoReleaseTime: this.autoReleaseTime,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            chargeType: this.chargeType,
            dedicatedHostName: this.dedicatedHostName,
            description: this.description,
            networkAttributesSlbUdpTimeout: this.networkAttributesSlbUdpTimeout,
            networkAttributesUdpTimeout: this.networkAttributesUdpTimeout,
            period: this.period,
            periodUnit: this.periodUnit,
            quantity: this.quantity,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDedicatedHost {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHost_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost.Tags` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDedicatedHost_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::DeploymentSet`
 */
export interface RosDeploymentSetProps {

    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly deploymentSetName?: string | ros.IResolvable;

    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    readonly onUnableToRedeployFailedInstance?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDeploymentSetProps`
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetProps`
 *
 * @returns the result of the validation.
 */
function RosDeploymentSetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.onUnableToRedeployFailedInstance && (typeof properties.onUnableToRedeployFailedInstance) !== 'object') {
        errors.collect(ros.propertyValidator('onUnableToRedeployFailedInstance', ros.validateAllowedValues)({
          data: properties.onUnableToRedeployFailedInstance,
          allowedValues: ["CancelMembershipAndStart","KeepStopped"],
        }));
    }
    errors.collect(ros.propertyValidator('onUnableToRedeployFailedInstance', ros.validateString)(properties.onUnableToRedeployFailedInstance));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deploymentSetName', ros.validateString)(properties.deploymentSetName));
    return errors.wrap('supplied properties not correct for "RosDeploymentSetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DeploymentSet` resource
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DeploymentSet` resource.
 */
// @ts-ignore TS6133
function rosDeploymentSetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeploymentSetPropsValidator(properties).assertSuccess();
    }
    return {
      DeploymentSetName: ros.stringToRosTemplate(properties.deploymentSetName),
      Description: ros.stringToRosTemplate(properties.description),
      OnUnableToRedeployFailedInstance: ros.stringToRosTemplate(properties.onUnableToRedeployFailedInstance),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::DeploymentSet`
 */
export class RosDeploymentSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DeploymentSet";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DeploymentSetId: The ID of the deployment set.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    public deploymentSetName: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    public onUnableToRedeployFailedInstance: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::DeploymentSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentSetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeploymentSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeploymentSetId = this.getAtt('DeploymentSetId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deploymentSetName = props.deploymentSetName;
        this.description = props.description;
        this.onUnableToRedeployFailedInstance = props.onUnableToRedeployFailedInstance;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deploymentSetName: this.deploymentSetName,
            description: this.description,
            onUnableToRedeployFailedInstance: this.onUnableToRedeployFailedInstance,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeploymentSetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::Disk`
 */
export interface RosDiskProps {

    /**
     * @Property zoneId: The availability zone in which the volume will be created.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property burstingEnabled: Whether enable bursting.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto, depends the region.
     */
    readonly diskCategory?: string | ros.IResolvable;

    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly diskName?: string | ros.IResolvable;

    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property multiAttach: Specifies whether to enable the multi-attach feature for the disk. Valid values:
     * Disabled: disables the multi-attach feature.
     * Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
     * Default value: Disabled.
     */
    readonly multiAttach?: string | ros.IResolvable;

    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly performanceLevel?: string | ros.IResolvable;

    /**
     * @Property provisionedIops: Provisioning IOPS.
     */
    readonly provisionedIops?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property size: The size of the disk unit in GB.
     */
    readonly size?: number | ros.IResolvable;

    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    readonly snapshotId?: string | ros.IResolvable;

    /**
     * @Property storageSetId: Storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;

    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDisk.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosDiskProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the result of the validation.
 */
function RosDiskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('burstingEnabled', ros.validateBoolean)(properties.burstingEnabled));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 5,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('deleteAutoSnapshot', ros.validateBoolean)(properties.deleteAutoSnapshot));
    errors.collect(ros.propertyValidator('diskCategory', ros.validateString)(properties.diskCategory));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('storageSetPartitionNumber', ros.validateNumber)(properties.storageSetPartitionNumber));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    if(properties.multiAttach && (typeof properties.multiAttach) !== 'object') {
        errors.collect(ros.propertyValidator('multiAttach', ros.validateAllowedValues)({
          data: properties.multiAttach,
          allowedValues: ["Disabled","Enabled"],
        }));
    }
    errors.collect(ros.propertyValidator('multiAttach', ros.validateString)(properties.multiAttach));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('storageSetId', ros.validateString)(properties.storageSetId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDisk_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDiskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk` resource.
 */
// @ts-ignore TS6133
function rosDiskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskPropsValidator(properties).assertSuccess();
    }
    return {
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      BurstingEnabled: ros.booleanToRosTemplate(properties.burstingEnabled),
      DeleteAutoSnapshot: ros.booleanToRosTemplate(properties.deleteAutoSnapshot),
      Description: ros.stringToRosTemplate(properties.description),
      DiskCategory: ros.stringToRosTemplate(properties.diskCategory),
      DiskName: ros.stringToRosTemplate(properties.diskName),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      MultiAttach: ros.stringToRosTemplate(properties.multiAttach),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      ProvisionedIops: ros.numberToRosTemplate(properties.provisionedIops),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Size: ros.numberToRosTemplate(properties.size),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      StorageSetId: ros.stringToRosTemplate(properties.storageSetId),
      StorageSetPartitionNumber: ros.numberToRosTemplate(properties.storageSetPartitionNumber),
      Tags: ros.listMapper(rosDiskTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Disk`
 */
export class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Disk";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DiskId: Id of created disk.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * @Attribute Status: Created disk status.
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property zoneId: The availability zone in which the volume will be created.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public autoSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property burstingEnabled: Whether enable bursting.
     */
    public burstingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    public deleteAutoSnapshot: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency/cloud_auto, depends the region.
     */
    public diskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public diskName: string | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property multiAttach: Specifies whether to enable the multi-attach feature for the disk. Valid values:
     * Disabled: disables the multi-attach feature.
     * Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
     * Default value: Disabled.
     */
    public multiAttach: string | ros.IResolvable | undefined;

    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public performanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property provisionedIops: Provisioning IOPS.
     */
    public provisionedIops: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property size: The size of the disk unit in GB.
     */
    public size: number | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @Property storageSetId: Storage set ID.
     */
    public storageSetId: string | ros.IResolvable | undefined;

    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    public storageSetPartitionNumber: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDisk.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::ECS::Disk`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDisk.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskId = this.getAtt('DiskId');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.zoneId = props.zoneId;
        this.autoSnapshotPolicyId = props.autoSnapshotPolicyId;
        this.burstingEnabled = props.burstingEnabled;
        this.deleteAutoSnapshot = props.deleteAutoSnapshot;
        this.description = props.description;
        this.diskCategory = props.diskCategory;
        this.diskName = props.diskName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
        this.multiAttach = props.multiAttach;
        this.performanceLevel = props.performanceLevel;
        this.provisionedIops = props.provisionedIops;
        this.resourceGroupId = props.resourceGroupId;
        this.size = props.size;
        this.snapshotId = props.snapshotId;
        this.storageSetId = props.storageSetId;
        this.storageSetPartitionNumber = props.storageSetPartitionNumber;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            zoneId: this.zoneId,
            autoSnapshotPolicyId: this.autoSnapshotPolicyId,
            burstingEnabled: this.burstingEnabled,
            deleteAutoSnapshot: this.deleteAutoSnapshot,
            description: this.description,
            diskCategory: this.diskCategory,
            diskName: this.diskName,
            encrypted: this.encrypted,
            kmsKeyId: this.kmsKeyId,
            multiAttach: this.multiAttach,
            performanceLevel: this.performanceLevel,
            provisionedIops: this.provisionedIops,
            resourceGroupId: this.resourceGroupId,
            size: this.size,
            snapshotId: this.snapshotId,
            storageSetId: this.storageSetId,
            storageSetPartitionNumber: this.storageSetPartitionNumber,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDisk {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDisk_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk.Tags` resource.
 */
// @ts-ignore TS6133
function rosDiskTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDisk_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::DiskAttachment`
 */
export interface RosDiskAttachmentProps {

    /**
     * @Property diskId: The disk id to attached.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;

    /**
     * @Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;

    /**
     * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[b-z]. If not specification, will use default value.
     */
    readonly device?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDiskAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('deleteAutoSnapshot', ros.validateBoolean)(properties.deleteAutoSnapshot));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosDiskAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DiskAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DiskAttachment` resource.
 */
// @ts-ignore TS6133
function rosDiskAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      DiskId: ros.stringToRosTemplate(properties.diskId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      DeleteAutoSnapshot: ros.booleanToRosTemplate(properties.deleteAutoSnapshot),
      DeleteWithInstance: ros.booleanToRosTemplate(properties.deleteWithInstance),
      Device: ros.stringToRosTemplate(properties.device),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::DiskAttachment`
 */
export class RosDiskAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DiskAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Device: The device where the volume is exposed on ecs instance.
     */
    public readonly attrDevice: ros.IResolvable;

    /**
     * @Attribute DiskId: The disk id of created disk
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * @Attribute Status: The disk status now.
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: The disk id to attached.
     */
    public diskId: string | ros.IResolvable;

    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    public deleteAutoSnapshot: boolean | ros.IResolvable | undefined;

    /**
     * @Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    public deleteWithInstance: boolean | ros.IResolvable | undefined;

    /**
     * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[b-z]. If not specification, will use default value.
     */
    public device: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::DiskAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDevice = this.getAtt('Device');
        this.attrDiskId = this.getAtt('DiskId');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.instanceId = props.instanceId;
        this.deleteAutoSnapshot = props.deleteAutoSnapshot;
        this.deleteWithInstance = props.deleteWithInstance;
        this.device = props.device;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskId: this.diskId,
            instanceId: this.instanceId,
            deleteAutoSnapshot: this.deleteAutoSnapshot,
            deleteWithInstance: this.deleteWithInstance,
            device: this.device,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::ForwardEntry`
 */
export interface RosForwardEntryProps {

    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string | ros.IResolvable;

    /**
     * @Property externalPort: Source port, now support [1-65535]|Any|x/y
     */
    readonly externalPort: string | ros.IResolvable;

    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    readonly forwardTableId: string | ros.IResolvable;

    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    readonly internalIp: string | ros.IResolvable;

    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any|x/y
     */
    readonly internalPort: string | ros.IResolvable;

    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * @Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly forwardEntryName?: string | ros.IResolvable;

    /**
     * @Property portBreak: Specifies whether to remove limits on the port range.
     */
    readonly portBreak?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosForwardEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosForwardEntryProps`
 *
 * @returns the result of the validation.
 */
function RosForwardEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('externalPort', ros.requiredValidator)(properties.externalPort));
    errors.collect(ros.propertyValidator('externalPort', ros.validateString)(properties.externalPort));
    errors.collect(ros.propertyValidator('externalIp', ros.requiredValidator)(properties.externalIp));
    errors.collect(ros.propertyValidator('externalIp', ros.validateString)(properties.externalIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["TCP","UDP","Any"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('portBreak', ros.validateBoolean)(properties.portBreak));
    errors.collect(ros.propertyValidator('internalPort', ros.requiredValidator)(properties.internalPort));
    errors.collect(ros.propertyValidator('internalPort', ros.validateString)(properties.internalPort));
    errors.collect(ros.propertyValidator('forwardEntryName', ros.validateString)(properties.forwardEntryName));
    errors.collect(ros.propertyValidator('internalIp', ros.requiredValidator)(properties.internalIp));
    errors.collect(ros.propertyValidator('internalIp', ros.validateString)(properties.internalIp));
    errors.collect(ros.propertyValidator('forwardTableId', ros.requiredValidator)(properties.forwardTableId));
    errors.collect(ros.propertyValidator('forwardTableId', ros.validateString)(properties.forwardTableId));
    return errors.wrap('supplied properties not correct for "RosForwardEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::ForwardEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosForwardEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::ForwardEntry` resource.
 */
// @ts-ignore TS6133
function rosForwardEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosForwardEntryPropsValidator(properties).assertSuccess();
    }
    return {
      ExternalIp: ros.stringToRosTemplate(properties.externalIp),
      ExternalPort: ros.stringToRosTemplate(properties.externalPort),
      ForwardTableId: ros.stringToRosTemplate(properties.forwardTableId),
      InternalIp: ros.stringToRosTemplate(properties.internalIp),
      InternalPort: ros.stringToRosTemplate(properties.internalPort),
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      ForwardEntryName: ros.stringToRosTemplate(properties.forwardEntryName),
      PortBreak: ros.booleanToRosTemplate(properties.portBreak),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::ForwardEntry`
 */
export class RosForwardEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ForwardEntry";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ForwardEntryId: The id of created forward entry.
     */
    public readonly attrForwardEntryId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    public externalIp: string | ros.IResolvable;

    /**
     * @Property externalPort: Source port, now support [1-65535]|Any|x/y
     */
    public externalPort: string | ros.IResolvable;

    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    public forwardTableId: string | ros.IResolvable;

    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    public internalIp: string | ros.IResolvable;

    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any|x/y
     */
    public internalPort: string | ros.IResolvable;

    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    public ipProtocol: string | ros.IResolvable;

    /**
     * @Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    public forwardEntryName: string | ros.IResolvable | undefined;

    /**
     * @Property portBreak: Specifies whether to remove limits on the port range.
     */
    public portBreak: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosForwardEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosForwardEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrForwardEntryId = this.getAtt('ForwardEntryId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.externalIp = props.externalIp;
        this.externalPort = props.externalPort;
        this.forwardTableId = props.forwardTableId;
        this.internalIp = props.internalIp;
        this.internalPort = props.internalPort;
        this.ipProtocol = props.ipProtocol;
        this.forwardEntryName = props.forwardEntryName;
        this.portBreak = props.portBreak;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            externalIp: this.externalIp,
            externalPort: this.externalPort,
            forwardTableId: this.forwardTableId,
            internalIp: this.internalIp,
            internalPort: this.internalPort,
            ipProtocol: this.ipProtocol,
            forwardEntryName: this.forwardEntryName,
            portBreak: this.portBreak,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosForwardEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::HpcCluster`
 */
export interface RosHpcClusterProps {

    /**
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHpcClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosHpcClusterProps`
 *
 * @returns the result of the validation.
 */
function RosHpcClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosHpcClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::HpcCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosHpcClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::HpcCluster` resource.
 */
// @ts-ignore TS6133
function rosHpcClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHpcClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::HpcCluster`
 */
export class RosHpcCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::HpcCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HpcClusterId: The ID of the HPC cluster.
     */
    public readonly attrHpcClusterId: ros.IResolvable;

    /**
     * @Attribute Name: The name of the HPC cluster.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::HpcCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHpcClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHpcCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHpcClusterId = this.getAtt('HpcClusterId');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHpcClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupIds: The ID list of security group to which to assign the instance. The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    readonly spotDuration?: number | ros.IResolvable;

    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
     */
    readonly spotInterruptionBehavior?: string | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;

    /**
     * @Property zoneIds: Zone ids for query parameters
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstance_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    if(properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
          data: properties.autoRenew,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('spotDuration', ros.validateNumber)(properties.spotDuration));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('allocatePublicIp', ros.validateBoolean)(properties.allocatePublicIp));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    if(properties.hostName && (Array.isArray(properties.hostName) || (typeof properties.hostName) === 'string')) {
        errors.collect(ros.propertyValidator('hostName', ros.validateLength)({
            data: properties.hostName.length,
            min: 2,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
          data: properties.ioOptimized,
          allowedValues: ["none","optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
          data: properties.deletionProtection,
          allowedValues: [true,false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["paybytraffic","PayByTraffic","paybybandwidth","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd","cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('spotInterruptionBehavior', ros.validateString)(properties.spotInterruptionBehavior));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.securityEnhancementStrategy && (typeof properties.securityEnhancementStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateAllowedValues)({
          data: properties.securityEnhancementStrategy,
          allowedValues: ["Active","Deactive"],
        }));
    }
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      AllocatePublicIP: ros.booleanToRosTemplate(properties.allocatePublicIp),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosInstanceDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      HostName: ros.stringToRosTemplate(properties.hostName),
      HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
      SpotDuration: ros.numberToRosTemplate(properties.spotDuration),
      SpotInterruptionBehavior: ros.stringToRosTemplate(properties.spotInterruptionBehavior),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      UserData: ros.stringToRosTemplate(properties.userData),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      ZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HostName: Host name of created instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIp: ros.IResolvable;

    /**
     * @Attribute InstanceId: The instance ID of created ecs instance
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    public readonly attrPrimaryNetworkInterfaceId: ros.IResolvable;

    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    public readonly attrPublicIp: ros.IResolvable;

    /**
     * @Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone ID of created instance.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    public allocatePublicIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    public autoRenew: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    public dedicatedHostId: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    public deploymentSetId: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    public diskMappings: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    public hpcClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    public ioOptimized: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    public passwordInherit: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityEnhancementStrategy:
     */
    public securityEnhancementStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The ID list of security group to which to assign the instance. The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
     */
    public securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    public spotDuration: number | ros.IResolvable | undefined;

    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
     */
    public spotInterruptionBehavior: string | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    public systemDiskDescription: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    public systemDiskDiskName: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public systemDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneIds: Zone ids for query parameters
     */
    public zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostName = this.getAtt('HostName');
        this.attrInnerIp = this.getAtt('InnerIp');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPrimaryNetworkInterfaceId = this.getAtt('PrimaryNetworkInterfaceId');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrPublicIp = this.getAtt('PublicIp');
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.allocatePublicIp = props.allocatePublicIp;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dedicatedHostId = props.dedicatedHostId;
        this.deletionProtection = props.deletionProtection;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.hpcClusterId = props.hpcClusterId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotDuration = props.spotDuration;
        this.spotInterruptionBehavior = props.spotInterruptionBehavior;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = props.tags;
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.zoneIds = props.zoneIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            allocatePublicIp: this.allocatePublicIp,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dedicatedHostId: this.dedicatedHostId,
            deletionProtection: this.deletionProtection,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            hpcClusterId: this.hpcClusterId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            keyPairName: this.keyPairName,
            password: this.password,
            passwordInherit: this.passwordInherit,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotDuration: this.spotDuration,
            spotInterruptionBehavior: this.spotInterruptionBehavior,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags,
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            zoneIds: this.zoneIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      Device: ros.stringToRosTemplate(properties.device),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.stringToRosTemplate(properties.size),
      DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::InstanceClone`
 */
export interface RosInstanceCloneProps {

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    readonly backendServerWeight?: number | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    readonly loadBalancerIdToAttach?: string | ros.IResolvable;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstanceClone.TagsProperty[];

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceCloneProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.backendServerWeight && (typeof properties.backendServerWeight) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerWeight', ros.validateRange)({
            data: properties.backendServerWeight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('backendServerWeight', ros.validateNumber)(properties.backendServerWeight));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceClone_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
          data: properties.deletionProtection,
          allowedValues: [true,false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('loadBalancerIdToAttach', ros.validateString)(properties.loadBalancerIdToAttach));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    if(properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceClone_TagsPropertyValidator))(properties.tags));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone` resource.
 */
// @ts-ignore TS6133
function rosInstanceClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceClonePropsValidator(properties).assertSuccess();
    }
    return {
      SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
      BackendServerWeight: ros.numberToRosTemplate(properties.backendServerWeight),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosInstanceCloneDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      LoadBalancerIdToAttach: ros.stringToRosTemplate(properties.loadBalancerIdToAttach),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.numberToRosTemplate(properties.period),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      Tags: ros.listMapper(rosInstanceCloneTagsPropertyToRosTemplate)(properties.tags),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::InstanceClone`
 */
export class RosInstanceClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HostName: Host name of created instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIp: ros.IResolvable;

    /**
     * @Attribute InstanceId: The instance ID of created ecs instance
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    public readonly attrPrimaryNetworkInterfaceId: ros.IResolvable;

    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    public readonly attrPublicIp: ros.IResolvable;

    /**
     * @Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone ID of created instance.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    public sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    public backendServerWeight: number | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    public diskMappings: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    public loadBalancerIdToAttach: string | ros.IResolvable | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstanceClone.TagsProperty[] | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostName = this.getAtt('HostName');
        this.attrInnerIp = this.getAtt('InnerIp');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPrimaryNetworkInterfaceId = this.getAtt('PrimaryNetworkInterfaceId');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrPublicIp = this.getAtt('PublicIp');
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceInstanceId = props.sourceInstanceId;
        this.backendServerWeight = props.backendServerWeight;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.imageId = props.imageId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.keyPairName = props.keyPairName;
        this.loadBalancerIdToAttach = props.loadBalancerIdToAttach;
        this.password = props.password;
        this.period = props.period;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.tags = props.tags;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sourceInstanceId: this.sourceInstanceId,
            backendServerWeight: this.backendServerWeight,
            deletionProtection: this.deletionProtection,
            description: this.description,
            diskMappings: this.diskMappings,
            imageId: this.imageId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            keyPairName: this.keyPairName,
            loadBalancerIdToAttach: this.loadBalancerIdToAttach,
            password: this.password,
            period: this.period,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            tags: this.tags,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstanceClone {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceClone_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceCloneDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceClone_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      Device: ros.stringToRosTemplate(properties.device),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.stringToRosTemplate(properties.size),
      DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}

export namespace RosInstanceClone {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceClone_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceCloneTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceClone_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroup`
 */
export interface RosInstanceGroupProps {

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number | ros.IResolvable;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    readonly diskMappings?: Array<RosInstanceGroup.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    readonly eniMappings?: Array<RosInstanceGroup.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components. 
     * Support to use the regular expression to set the different instance name for each ECS instance. HostName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'host[123,4]tail'. If you creates 3 instances with hostname 'host[123,4]tail', all the host names of instances are host0123tail, host0124tail, host0125tail. The 'name_prefix[begin_number,bits]name_suffix' should follow those rules: 
     * 1. 'name_prefix' is required. 
     * 2. 'name_suffix' is optional. 
     * 3. The name regular expression can't include any spaces. 
     * 4. The 'bits' must be in range [1, 6]. 
     * 5. The 'begin_number' must be in range [0, 999999]. 
     * 6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default. 
     * 7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default. 
     * 8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default. 
     * The host name is specified by regular expression works after restart instance manually.
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. 
     * Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail. 
     * The 'name_prefix[begin_number,bits]name_suffix' should follow those rules: 
     * 1. 'name_prefix' is required. 
     * 2. 'name_suffix' is optional. 
     * 3. The name regular expression can't include any spaces. 
     * 4. The 'bits' must be in range [1, 6]. 
     * 5. The 'begin_number' must be in range [0, 999999]. 
     * 6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default. 
     * 7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default. 
     * 8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string | ros.IResolvable;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    readonly spotDuration?: number | ros.IResolvable;

    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
     */
    readonly spotInterruptionBehavior?: string | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * @Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
     */
    readonly systemDiskEncryptAlgorithm?: string | ros.IResolvable;

    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    readonly systemDiskEncrypted?: string | ros.IResolvable;

    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    readonly systemDiskKmsKeyId?: string | ros.IResolvable;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    readonly systemDiskProvisionedIops?: number | ros.IResolvable;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * @Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    readonly systemDiskStorageClusterId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstanceGroup.TagsProperty[];

    /**
     * @Property updatePolicy: Specify the policy at update. 
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    readonly updatePolicy?: string | ros.IResolvable;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;

    /**
     * @Property zoneIds: Zone ids for query parameters
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('systemDiskProvisionedIops', ros.validateNumber)(properties.systemDiskProvisionedIops));
    if(properties.systemDiskEncryptAlgorithm && (typeof properties.systemDiskEncryptAlgorithm) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskEncryptAlgorithm', ros.validateAllowedValues)({
          data: properties.systemDiskEncryptAlgorithm,
          allowedValues: ["ase-256","sm4-128"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskEncryptAlgorithm', ros.validateString)(properties.systemDiskEncryptAlgorithm));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('systemDiskStorageClusterId', ros.validateString)(properties.systemDiskStorageClusterId));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    if(properties.updatePolicy && (typeof properties.updatePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('updatePolicy', ros.validateAllowedValues)({
          data: properties.updatePolicy,
          allowedValues: ["ForNewInstances","ForAllInstances"],
        }));
    }
    errors.collect(ros.propertyValidator('updatePolicy', ros.validateString)(properties.updatePolicy));
    errors.collect(ros.propertyValidator('systemDiskKmsKeyId', ros.validateString)(properties.systemDiskKmsKeyId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    if(properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
          data: properties.deletionProtection,
          allowedValues: [true,false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["paybytraffic","PayByTraffic","paybybandwidth","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('spotInterruptionBehavior', ros.validateString)(properties.spotInterruptionBehavior));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.launchTemplateVersion && (typeof properties.launchTemplateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateAllowedPattern)({
          data: properties.launchTemplateVersion,
          reg: /^[1-9]\d*$/
        }));
    }
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    if(properties.securityEnhancementStrategy && (typeof properties.securityEnhancementStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateAllowedValues)({
          data: properties.securityEnhancementStrategy,
          allowedValues: ["Active","Deactive"],
        }));
    }
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceGroup_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    if(properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    if(properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
          data: properties.autoRenew,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('spotDuration', ros.validateNumber)(properties.spotDuration));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateAny))(properties.ipv6Addresses));
    if(properties.systemDiskEncrypted && (typeof properties.systemDiskEncrypted) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskEncrypted', ros.validateAllowedValues)({
          data: properties.systemDiskEncrypted,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskEncrypted', ros.validateString)(properties.systemDiskEncrypted));
    errors.collect(ros.propertyValidator('maxAmount', ros.requiredValidator)(properties.maxAmount));
    if(properties.maxAmount && (typeof properties.maxAmount) !== 'object') {
        errors.collect(ros.propertyValidator('maxAmount', ros.validateRange)({
            data: properties.maxAmount,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('maxAmount', ros.validateNumber)(properties.maxAmount));
    errors.collect(ros.propertyValidator('systemDiskAutoSnapshotPolicyId', ros.validateString)(properties.systemDiskAutoSnapshotPolicyId));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["vpc","classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('allocatePublicIp', ros.validateBoolean)(properties.allocatePublicIp));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
          data: properties.ioOptimized,
          allowedValues: ["none","optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd","cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosInstanceGroup_EniMappingsPropertyValidator))(properties.eniMappings));
    errors.collect(ros.propertyValidator('systemDiskBurstingEnabled', ros.validateBoolean)(properties.systemDiskBurstingEnabled));
    return errors.wrap('supplied properties not correct for "RosInstanceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      MaxAmount: ros.numberToRosTemplate(properties.maxAmount),
      AllocatePublicIP: ros.booleanToRosTemplate(properties.allocatePublicIp),
      AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosInstanceGroupDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      EniMappings: ros.listMapper(rosInstanceGroupEniMappingsPropertyToRosTemplate)(properties.eniMappings),
      HostName: ros.stringToRosTemplate(properties.hostName),
      HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      Ipv6Addresses: ros.listMapper(ros.objectToRosTemplate)(properties.ipv6Addresses),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
      LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
      LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Password: ros.stringToRosTemplate(properties.password),
      PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
      SpotDuration: ros.numberToRosTemplate(properties.spotDuration),
      SpotInterruptionBehavior: ros.stringToRosTemplate(properties.spotInterruptionBehavior),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
      SystemDiskBurstingEnabled: ros.booleanToRosTemplate(properties.systemDiskBurstingEnabled),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskEncryptAlgorithm: ros.stringToRosTemplate(properties.systemDiskEncryptAlgorithm),
      SystemDiskEncrypted: ros.stringToRosTemplate(properties.systemDiskEncrypted),
      SystemDiskKMSKeyId: ros.stringToRosTemplate(properties.systemDiskKmsKeyId),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskProvisionedIops: ros.numberToRosTemplate(properties.systemDiskProvisionedIops),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      SystemDiskStorageClusterId: ros.stringToRosTemplate(properties.systemDiskStorageClusterId),
      Tags: ros.listMapper(rosInstanceGroupTagsPropertyToRosTemplate)(properties.tags),
      UpdatePolicy: ros.stringToRosTemplate(properties.updatePolicy),
      UserData: ros.stringToRosTemplate(properties.userData),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      ZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::InstanceGroup`
 */
export class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HostNames: Host names of created instances.
     */
    public readonly attrHostNames: ros.IResolvable;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instances. Only for classical instances.
     */
    public readonly attrInnerIps: ros.IResolvable;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instances
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances. Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public readonly attrIpv6AddressIds: ros.IResolvable;

    /**
     * @Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances. Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public readonly attrIpv6Addresses: ros.IResolvable;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instances. Only for VPC instance.
     */
    public readonly attrPrivateIps: ros.IResolvable;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instances.
     */
    public readonly attrPublicIps: ros.IResolvable;

    /**
     * @Attribute ZoneIds: Zone id of created instances.
     */
    public readonly attrZoneIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    public maxAmount: number | ros.IResolvable;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    public allocatePublicIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    public autoRenew: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    public dedicatedHostId: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    public deploymentSetId: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    public diskMappings: Array<RosInstanceGroup.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    public eniMappings: Array<RosInstanceGroup.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components. 
     * Support to use the regular expression to set the different instance name for each ECS instance. HostName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'host[123,4]tail'. If you creates 3 instances with hostname 'host[123,4]tail', all the host names of instances are host0123tail, host0124tail, host0125tail. The 'name_prefix[begin_number,bits]name_suffix' should follow those rules: 
     * 1. 'name_prefix' is required. 
     * 2. 'name_suffix' is optional. 
     * 3. The name regular expression can't include any spaces. 
     * 4. The 'bits' must be in range [1, 6]. 
     * 5. The 'begin_number' must be in range [0, 999999]. 
     * 6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default. 
     * 7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default. 
     * 8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default. 
     * The host name is specified by regular expression works after restart instance manually.
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    public hpcClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. 
     * Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail. 
     * The 'name_prefix[begin_number,bits]name_suffix' should follow those rules: 
     * 1. 'name_prefix' is required. 
     * 2. 'name_suffix' is optional. 
     * 3. The name regular expression can't include any spaces. 
     * 4. The 'bits' must be in range [1, 6]. 
     * 5. The 'begin_number' must be in range [0, 999999]. 
     * 6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default. 
     * 7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default. 
     * 8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    public ioOptimized: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateName: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    public launchTemplateVersion: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    public passwordInherit: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.Old instances will not be changed.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityEnhancementStrategy:
     */
    public securityEnhancementStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    public securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    public spotDuration: number | ros.IResolvable | undefined;

    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
     */
    public spotInterruptionBehavior: string | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    public systemDiskBurstingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    public systemDiskDescription: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    public systemDiskDiskName: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
     */
    public systemDiskEncryptAlgorithm: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    public systemDiskEncrypted: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    public systemDiskKmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public systemDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    public systemDiskProvisionedIops: number | ros.IResolvable | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    public systemDiskStorageClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstanceGroup.TagsProperty[] | undefined;

    /**
     * @Property updatePolicy: Specify the policy at update. 
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    public updatePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneIds: Zone ids for query parameters
     */
    public zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::InstanceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = this.getAtt('HostNames');
        this.attrInnerIps = this.getAtt('InnerIps');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrIpv6AddressIds = this.getAtt('Ipv6AddressIds');
        this.attrIpv6Addresses = this.getAtt('Ipv6Addresses');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPrivateIps = this.getAtt('PrivateIps');
        this.attrPublicIps = this.getAtt('PublicIps');
        this.attrZoneIds = this.getAtt('ZoneIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.maxAmount = props.maxAmount;
        this.allocatePublicIp = props.allocatePublicIp;
        this.autoReleaseTime = props.autoReleaseTime;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dedicatedHostId = props.dedicatedHostId;
        this.deletionProtection = props.deletionProtection;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.eniMappings = props.eniMappings;
        this.hostName = props.hostName;
        this.hpcClusterId = props.hpcClusterId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
        this.keyPairName = props.keyPairName;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateName = props.launchTemplateName;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.networkType = props.networkType;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotDuration = props.spotDuration;
        this.spotInterruptionBehavior = props.spotInterruptionBehavior;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskBurstingEnabled = props.systemDiskBurstingEnabled;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskEncryptAlgorithm = props.systemDiskEncryptAlgorithm;
        this.systemDiskEncrypted = props.systemDiskEncrypted;
        this.systemDiskKmsKeyId = props.systemDiskKmsKeyId;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskProvisionedIops = props.systemDiskProvisionedIops;
        this.systemDiskSize = props.systemDiskSize;
        this.systemDiskStorageClusterId = props.systemDiskStorageClusterId;
        this.tags = props.tags;
        this.updatePolicy = props.updatePolicy;
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.zoneIds = props.zoneIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            maxAmount: this.maxAmount,
            allocatePublicIp: this.allocatePublicIp,
            autoReleaseTime: this.autoReleaseTime,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dedicatedHostId: this.dedicatedHostId,
            deletionProtection: this.deletionProtection,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            eniMappings: this.eniMappings,
            hostName: this.hostName,
            hpcClusterId: this.hpcClusterId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
            keyPairName: this.keyPairName,
            launchTemplateId: this.launchTemplateId,
            launchTemplateName: this.launchTemplateName,
            launchTemplateVersion: this.launchTemplateVersion,
            networkType: this.networkType,
            password: this.password,
            passwordInherit: this.passwordInherit,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotDuration: this.spotDuration,
            spotInterruptionBehavior: this.spotInterruptionBehavior,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskBurstingEnabled: this.systemDiskBurstingEnabled,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskEncryptAlgorithm: this.systemDiskEncryptAlgorithm,
            systemDiskEncrypted: this.systemDiskEncrypted,
            systemDiskKmsKeyId: this.systemDiskKmsKeyId,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskProvisionedIops: this.systemDiskProvisionedIops,
            systemDiskSize: this.systemDiskSize,
            systemDiskStorageClusterId: this.systemDiskStorageClusterId,
            tags: this.tags,
            updatePolicy: this.updatePolicy,
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            zoneIds: this.zoneIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstanceGroup {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property burstingEnabled: Whether enable bursting.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto. Default is cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
        /**
         * @Property provisionedIops: Provisioning IOPS.
         */
        readonly provisionedIops?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('burstingEnabled', ros.validateBoolean)(properties.burstingEnabled));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    if(properties.encrypted && (typeof properties.encrypted) !== 'object') {
        errors.collect(ros.propertyValidator('encrypted', ros.validateAllowedValues)({
          data: properties.encrypted,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('encrypted', ros.validateString)(properties.encrypted));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroup_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
      BurstingEnabled: ros.booleanToRosTemplate(properties.burstingEnabled),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      Encrypted: ros.stringToRosTemplate(properties.encrypted),
      Device: ros.stringToRosTemplate(properties.device),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.stringToRosTemplate(properties.size),
      AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      DiskName: ros.stringToRosTemplate(properties.diskName),
      ProvisionedIops: ros.numberToRosTemplate(properties.provisionedIops),
    };
}

export namespace RosInstanceGroup {
    /**
     * @stability external
     */
    export interface EniMappingsProperty {
        /**
         * @Property networkInterfaceTrafficMode: The communication mode of the ENI. Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
         */
        readonly networkInterfaceTrafficMode?: string | ros.IResolvable;
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         */
        readonly queueNumber?: number | ros.IResolvable;
        /**
         * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         */
        readonly ipv6AddressCount?: number | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string | ros.IResolvable;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         */
        readonly primaryIpAddress?: string | ros.IResolvable;
        /**
         * @Property ipv6Addresses: The IPv6 address N to assign to the ENI.
         */
        readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceType: The type of ENI. Default value: Secondary.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: The IDs of security groups to which to assign ENI
     * Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         */
        readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EniMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_EniMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.networkInterfaceTrafficMode && (typeof properties.networkInterfaceTrafficMode) !== 'object') {
        errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateAllowedValues)({
          data: properties.networkInterfaceTrafficMode,
          allowedValues: ["Standard","HighPerformance"],
        }));
    }
    errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateString)(properties.networkInterfaceTrafficMode));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.queueNumber && (typeof properties.queueNumber) !== 'object') {
        errors.collect(ros.propertyValidator('queueNumber', ros.validateRange)({
            data: properties.queueNumber,
            min: 1,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('queueNumber', ros.validateNumber)(properties.queueNumber));
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateString))(properties.ipv6Addresses));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["Primary","Secondary"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    return errors.wrap('supplied properties not correct for "EniMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.EniMappings` resource
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.EniMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupEniMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroup_EniMappingsPropertyValidator(properties).assertSuccess();
    return {
      NetworkInterfaceTrafficMode: ros.stringToRosTemplate(properties.networkInterfaceTrafficMode),
      Description: ros.stringToRosTemplate(properties.description),
      QueueNumber: ros.numberToRosTemplate(properties.queueNumber),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
      Ipv6Addresses: ros.listMapper(ros.stringToRosTemplate)(properties.ipv6Addresses),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
    };
}

export namespace RosInstanceGroup {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroupClone`
 */
export interface RosInstanceGroupCloneProps {

    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number | ros.IResolvable;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    readonly backendServerWeight?: number | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    readonly diskMappings?: Array<RosInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    readonly eniMappings?: Array<RosInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. 
     * Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail. 
     * The 'name_prefix[begin_number,bits]name_suffix' should follow those rules: 
     * 1. 'name_prefix' is required. 
     * 2. 'name_suffix' is optional. 
     * 3. The name regular expression can't include any spaces. 
     * 4. The 'bits' must be in range [1, 6]. 
     * 5. The 'begin_number' must be in range [0, 999999]. 
     * 6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default. 
     * 7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default. 
     * 8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string | ros.IResolvable;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    readonly loadBalancerIdToAttach?: string | ros.IResolvable;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * @Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
     */
    readonly systemDiskEncryptAlgorithm?: string | ros.IResolvable;

    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    readonly systemDiskEncrypted?: string | ros.IResolvable;

    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    readonly systemDiskKmsKeyId?: string | ros.IResolvable;

    /**
     * @Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    readonly systemDiskProvisionedIops?: number | ros.IResolvable;

    /**
     * @Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    readonly systemDiskStorageClusterId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstanceGroupClone.TagsProperty[];

    /**
     * @Property updatePolicy: Specify the policy at update. 
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    readonly updatePolicy?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceGroupCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupCloneProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceGroupClone_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    errors.collect(ros.propertyValidator('systemDiskProvisionedIops', ros.validateNumber)(properties.systemDiskProvisionedIops));
    if(properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
          data: properties.autoRenew,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateAny))(properties.ipv6Addresses));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    if(properties.systemDiskEncrypted && (typeof properties.systemDiskEncrypted) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskEncrypted', ros.validateAllowedValues)({
          data: properties.systemDiskEncrypted,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskEncrypted', ros.validateString)(properties.systemDiskEncrypted));
    errors.collect(ros.propertyValidator('maxAmount', ros.requiredValidator)(properties.maxAmount));
    if(properties.maxAmount && (typeof properties.maxAmount) !== 'object') {
        errors.collect(ros.propertyValidator('maxAmount', ros.validateRange)({
            data: properties.maxAmount,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('maxAmount', ros.validateNumber)(properties.maxAmount));
    errors.collect(ros.propertyValidator('systemDiskAutoSnapshotPolicyId', ros.validateString)(properties.systemDiskAutoSnapshotPolicyId));
    if(properties.systemDiskEncryptAlgorithm && (typeof properties.systemDiskEncryptAlgorithm) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskEncryptAlgorithm', ros.validateAllowedValues)({
          data: properties.systemDiskEncryptAlgorithm,
          allowedValues: ["ase-256","sm4-128"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskEncryptAlgorithm', ros.validateString)(properties.systemDiskEncryptAlgorithm));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    if(properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceGroupClone_TagsPropertyValidator))(properties.tags));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('systemDiskStorageClusterId', ros.validateString)(properties.systemDiskStorageClusterId));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    if(properties.backendServerWeight && (typeof properties.backendServerWeight) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerWeight', ros.validateRange)({
            data: properties.backendServerWeight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('backendServerWeight', ros.validateNumber)(properties.backendServerWeight));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    if(properties.updatePolicy && (typeof properties.updatePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('updatePolicy', ros.validateAllowedValues)({
          data: properties.updatePolicy,
          allowedValues: ["ForNewInstances","ForAllInstances"],
        }));
    }
    errors.collect(ros.propertyValidator('updatePolicy', ros.validateString)(properties.updatePolicy));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('systemDiskKmsKeyId', ros.validateString)(properties.systemDiskKmsKeyId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    if(properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
          data: properties.deletionProtection,
          allowedValues: [true,false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    errors.collect(ros.propertyValidator('loadBalancerIdToAttach', ros.validateString)(properties.loadBalancerIdToAttach));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd","cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosInstanceGroupClone_EniMappingsPropertyValidator))(properties.eniMappings));
    errors.collect(ros.propertyValidator('systemDiskBurstingEnabled', ros.validateBoolean)(properties.systemDiskBurstingEnabled));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if(properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
    if(properties.launchTemplateVersion && (typeof properties.launchTemplateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateAllowedPattern)({
          data: properties.launchTemplateVersion,
          reg: /^[1-9]\d*$/
        }));
    }
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    return errors.wrap('supplied properties not correct for "RosInstanceGroupCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceGroupClonePropsValidator(properties).assertSuccess();
    }
    return {
      MaxAmount: ros.numberToRosTemplate(properties.maxAmount),
      SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
      AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      BackendServerWeight: ros.numberToRosTemplate(properties.backendServerWeight),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosInstanceGroupCloneDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      EniMappings: ros.listMapper(rosInstanceGroupCloneEniMappingsPropertyToRosTemplate)(properties.eniMappings),
      HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      Ipv6Addresses: ros.listMapper(ros.objectToRosTemplate)(properties.ipv6Addresses),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
      LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
      LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
      LoadBalancerIdToAttach: ros.stringToRosTemplate(properties.loadBalancerIdToAttach),
      Password: ros.stringToRosTemplate(properties.password),
      PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
      SystemDiskBurstingEnabled: ros.booleanToRosTemplate(properties.systemDiskBurstingEnabled),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskEncryptAlgorithm: ros.stringToRosTemplate(properties.systemDiskEncryptAlgorithm),
      SystemDiskEncrypted: ros.stringToRosTemplate(properties.systemDiskEncrypted),
      SystemDiskKMSKeyId: ros.stringToRosTemplate(properties.systemDiskKmsKeyId),
      SystemDiskProvisionedIops: ros.numberToRosTemplate(properties.systemDiskProvisionedIops),
      SystemDiskStorageClusterId: ros.stringToRosTemplate(properties.systemDiskStorageClusterId),
      Tags: ros.listMapper(rosInstanceGroupCloneTagsPropertyToRosTemplate)(properties.tags),
      UpdatePolicy: ros.stringToRosTemplate(properties.updatePolicy),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::InstanceGroupClone`
 */
export class RosInstanceGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroupClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HostNames: Host names of created instances.
     */
    public readonly attrHostNames: ros.IResolvable;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instances. Only for classical instances.
     */
    public readonly attrInnerIps: ros.IResolvable;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instances
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances. Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public readonly attrIpv6AddressIds: ros.IResolvable;

    /**
     * @Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances. Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public readonly attrIpv6Addresses: ros.IResolvable;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instances. Only for VPC instance.
     */
    public readonly attrPrivateIps: ros.IResolvable;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instances.
     */
    public readonly attrPublicIps: ros.IResolvable;

    /**
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    public readonly attrRelatedOrderIds: ros.IResolvable;

    /**
     * @Attribute ZoneIds: Zone id of created instances.
     */
    public readonly attrZoneIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    public maxAmount: number | ros.IResolvable;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    public sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    public autoRenew: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    public backendServerWeight: number | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    public deploymentSetId: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    public diskMappings: Array<RosInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    public eniMappings: Array<RosInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    public hpcClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. 
     * Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail. 
     * The 'name_prefix[begin_number,bits]name_suffix' should follow those rules: 
     * 1. 'name_prefix' is required. 
     * 2. 'name_suffix' is optional. 
     * 3. The name regular expression can't include any spaces. 
     * 4. The 'bits' must be in range [1, 6]. 
     * 5. The 'begin_number' must be in range [0, 999999]. 
     * 6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default. 
     * 7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default. 
     * 8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateName: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    public launchTemplateVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    public loadBalancerIdToAttach: string | ros.IResolvable | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    public passwordInherit: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.Old instances will not be changed.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    public securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    public systemDiskBurstingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    public systemDiskDescription: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    public systemDiskDiskName: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
     */
    public systemDiskEncryptAlgorithm: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    public systemDiskEncrypted: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    public systemDiskKmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    public systemDiskProvisionedIops: number | ros.IResolvable | undefined;

    /**
     * @Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    public systemDiskStorageClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstanceGroupClone.TagsProperty[] | undefined;

    /**
     * @Property updatePolicy: Specify the policy at update. 
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    public updatePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::InstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = this.getAtt('HostNames');
        this.attrInnerIps = this.getAtt('InnerIps');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrIpv6AddressIds = this.getAtt('Ipv6AddressIds');
        this.attrIpv6Addresses = this.getAtt('Ipv6Addresses');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPrivateIps = this.getAtt('PrivateIps');
        this.attrPublicIps = this.getAtt('PublicIps');
        this.attrRelatedOrderIds = this.getAtt('RelatedOrderIds');
        this.attrZoneIds = this.getAtt('ZoneIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.maxAmount = props.maxAmount;
        this.sourceInstanceId = props.sourceInstanceId;
        this.autoReleaseTime = props.autoReleaseTime;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.backendServerWeight = props.backendServerWeight;
        this.deletionProtection = props.deletionProtection;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.eniMappings = props.eniMappings;
        this.hpcClusterId = props.hpcClusterId;
        this.imageId = props.imageId;
        this.instanceName = props.instanceName;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
        this.keyPairName = props.keyPairName;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateName = props.launchTemplateName;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.loadBalancerIdToAttach = props.loadBalancerIdToAttach;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskBurstingEnabled = props.systemDiskBurstingEnabled;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskEncryptAlgorithm = props.systemDiskEncryptAlgorithm;
        this.systemDiskEncrypted = props.systemDiskEncrypted;
        this.systemDiskKmsKeyId = props.systemDiskKmsKeyId;
        this.systemDiskProvisionedIops = props.systemDiskProvisionedIops;
        this.systemDiskStorageClusterId = props.systemDiskStorageClusterId;
        this.tags = props.tags;
        this.updatePolicy = props.updatePolicy;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            maxAmount: this.maxAmount,
            sourceInstanceId: this.sourceInstanceId,
            autoReleaseTime: this.autoReleaseTime,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            backendServerWeight: this.backendServerWeight,
            deletionProtection: this.deletionProtection,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            eniMappings: this.eniMappings,
            hpcClusterId: this.hpcClusterId,
            imageId: this.imageId,
            instanceName: this.instanceName,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
            keyPairName: this.keyPairName,
            launchTemplateId: this.launchTemplateId,
            launchTemplateName: this.launchTemplateName,
            launchTemplateVersion: this.launchTemplateVersion,
            loadBalancerIdToAttach: this.loadBalancerIdToAttach,
            password: this.password,
            passwordInherit: this.passwordInherit,
            period: this.period,
            periodUnit: this.periodUnit,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskBurstingEnabled: this.systemDiskBurstingEnabled,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskEncryptAlgorithm: this.systemDiskEncryptAlgorithm,
            systemDiskEncrypted: this.systemDiskEncrypted,
            systemDiskKmsKeyId: this.systemDiskKmsKeyId,
            systemDiskProvisionedIops: this.systemDiskProvisionedIops,
            systemDiskStorageClusterId: this.systemDiskStorageClusterId,
            tags: this.tags,
            updatePolicy: this.updatePolicy,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceGroupClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property burstingEnabled: Whether enable bursting.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto. Default is cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
        /**
         * @Property provisionedIops: Provisioning IOPS.
         */
        readonly provisionedIops?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClone_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('burstingEnabled', ros.validateBoolean)(properties.burstingEnabled));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    if(properties.encrypted && (typeof properties.encrypted) !== 'object') {
        errors.collect(ros.propertyValidator('encrypted', ros.validateAllowedValues)({
          data: properties.encrypted,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('encrypted', ros.validateString)(properties.encrypted));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupCloneDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroupClone_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
      BurstingEnabled: ros.booleanToRosTemplate(properties.burstingEnabled),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      Encrypted: ros.stringToRosTemplate(properties.encrypted),
      Device: ros.stringToRosTemplate(properties.device),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.stringToRosTemplate(properties.size),
      AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      DiskName: ros.stringToRosTemplate(properties.diskName),
      ProvisionedIops: ros.numberToRosTemplate(properties.provisionedIops),
    };
}

export namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    export interface EniMappingsProperty {
        /**
         * @Property networkInterfaceTrafficMode: The communication mode of the ENI. Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
         */
        readonly networkInterfaceTrafficMode?: string | ros.IResolvable;
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         */
        readonly queueNumber?: number | ros.IResolvable;
        /**
         * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         */
        readonly ipv6AddressCount?: number | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string | ros.IResolvable;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         */
        readonly primaryIpAddress?: string | ros.IResolvable;
        /**
         * @Property ipv6Addresses: The IPv6 address N to assign to the ENI.
         */
        readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceType: The type of ENI. Default value: Secondary.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: The IDs of security groups to which to assign ENI
     * Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         */
        readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EniMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClone_EniMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.networkInterfaceTrafficMode && (typeof properties.networkInterfaceTrafficMode) !== 'object') {
        errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateAllowedValues)({
          data: properties.networkInterfaceTrafficMode,
          allowedValues: ["Standard","HighPerformance"],
        }));
    }
    errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateString)(properties.networkInterfaceTrafficMode));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.queueNumber && (typeof properties.queueNumber) !== 'object') {
        errors.collect(ros.propertyValidator('queueNumber', ros.validateRange)({
            data: properties.queueNumber,
            min: 1,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('queueNumber', ros.validateNumber)(properties.queueNumber));
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateString))(properties.ipv6Addresses));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["Primary","Secondary"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    return errors.wrap('supplied properties not correct for "EniMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.EniMappings` resource
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.EniMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupCloneEniMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroupClone_EniMappingsPropertyValidator(properties).assertSuccess();
    return {
      NetworkInterfaceTrafficMode: ros.stringToRosTemplate(properties.networkInterfaceTrafficMode),
      Description: ros.stringToRosTemplate(properties.description),
      QueueNumber: ros.numberToRosTemplate(properties.queueNumber),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
      Ipv6Addresses: ros.listMapper(ros.stringToRosTemplate)(properties.ipv6Addresses),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
    };
}

export namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClone_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupCloneTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstanceGroupClone_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::Invocation`
 */
export interface RosInvocationProps {

    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    readonly instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property commandId: The id of command.
     */
    readonly commandId?: string | ros.IResolvable;

    /**
     * @Property commandName: The name of command. Only system commands whose provide is AlibabaCloud are supported
     */
    readonly commandName?: string | ros.IResolvable;

    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    readonly frequency?: string | ros.IResolvable;

    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property sync: Whether to invoke synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;

    /**
     * @Property timed: Whether it is timed execution. Default is False.
     */
    readonly timed?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInvocationProps`
 *
 * @param properties - the TypeScript properties of a `RosInvocationProps`
 *
 * @returns the result of the validation.
 */
function RosInvocationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('timed', ros.validateBoolean)(properties.timed));
    errors.collect(ros.propertyValidator('frequency', ros.validateString)(properties.frequency));
    errors.collect(ros.propertyValidator('commandName', ros.validateString)(properties.commandName));
    errors.collect(ros.propertyValidator('commandId', ros.validateString)(properties.commandId));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: undefined,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosInvocationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Invocation` resource
 *
 * @param properties - the TypeScript properties of a `RosInvocationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Invocation` resource.
 */
// @ts-ignore TS6133
function rosInvocationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInvocationPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
      CommandId: ros.stringToRosTemplate(properties.commandId),
      CommandName: ros.stringToRosTemplate(properties.commandName),
      Frequency: ros.stringToRosTemplate(properties.frequency),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      Sync: ros.booleanToRosTemplate(properties.sync),
      Timed: ros.booleanToRosTemplate(properties.timed),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Invocation`
 */
export class RosInvocation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Invocation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InvokeId: The id of command execution.
     */
    public readonly attrInvokeId: ros.IResolvable;

    /**
     * @Attribute InvokeInstances: The InvokeInstances of command.
     */
    public readonly attrInvokeInstances: ros.IResolvable;

    /**
     * @Attribute InvokeResults: The results of invoke command.
     */
    public readonly attrInvokeResults: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    public instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property commandId: The id of command.
     */
    public commandId: string | ros.IResolvable | undefined;

    /**
     * @Property commandName: The name of command. Only system commands whose provide is AlibabaCloud are supported
     */
    public commandName: string | ros.IResolvable | undefined;

    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    public frequency: string | ros.IResolvable | undefined;

    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property sync: Whether to invoke synchronously.
     */
    public sync: boolean | ros.IResolvable | undefined;

    /**
     * @Property timed: Whether it is timed execution. Default is False.
     */
    public timed: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::Invocation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInvocationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInvocation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInvokeId = this.getAtt('InvokeId');
        this.attrInvokeInstances = this.getAtt('InvokeInstances');
        this.attrInvokeResults = this.getAtt('InvokeResults');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.commandId = props.commandId;
        this.commandName = props.commandName;
        this.frequency = props.frequency;
        this.parameters = props.parameters;
        this.sync = props.sync;
        this.timed = props.timed;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            commandId: this.commandId,
            commandName: this.commandName,
            frequency: this.frequency,
            parameters: this.parameters,
            sync: this.sync,
            timed: this.timed,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInvocationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::JoinSecurityGroup`
 */
export interface RosJoinSecurityGroupProps {

    /**
     * @Property securityGroupId: Security group id to join.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
     */
    readonly instanceIdList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkInterfaceList: Network interface list.
     */
    readonly networkInterfaceList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosJoinSecurityGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosJoinSecurityGroupProps`
 *
 * @returns the result of the validation.
 */
function RosJoinSecurityGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkInterfaceList', ros.listValidator(ros.validateAny))(properties.networkInterfaceList));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('instanceIdList', ros.listValidator(ros.validateAny))(properties.instanceIdList));
    return errors.wrap('supplied properties not correct for "RosJoinSecurityGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::JoinSecurityGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosJoinSecurityGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::JoinSecurityGroup` resource.
 */
// @ts-ignore TS6133
function rosJoinSecurityGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosJoinSecurityGroupPropsValidator(properties).assertSuccess();
    }
    return {
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      InstanceIdList: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIdList),
      NetworkInterfaceList: ros.listMapper(ros.objectToRosTemplate)(properties.networkInterfaceList),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::JoinSecurityGroup`
 */
export class RosJoinSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::JoinSecurityGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property securityGroupId: Security group id to join.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
     */
    public instanceIdList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaceList: Network interface list.
     */
    public networkInterfaceList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJoinSecurityGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosJoinSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.securityGroupId = props.securityGroupId;
        this.instanceId = props.instanceId;
        this.instanceIdList = props.instanceIdList;
        this.networkInterfaceList = props.networkInterfaceList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            securityGroupId: this.securityGroupId,
            instanceId: this.instanceId,
            instanceIdList: this.instanceIdList,
            networkInterfaceList: this.networkInterfaceList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosJoinSecurityGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::LaunchTemplate`
 */
export interface RosLaunchTemplateProps {

    /**
     * @Property launchTemplateName: The name of launch template.
     */
    readonly launchTemplateName: string | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string | ros.IResolvable;

    /**
     * @Property deploymentSetId: The ID of the deployment set.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * @Property description: Description of the instance, [2, 256] characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    readonly diskMappings?: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
     * PostPaid: pay-as-you-go.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    readonly networkInterfaces?: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image.
     * Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance. Unit: months.
     * This parameter is valid and required only when InstanceChargeType is set to PrePaid.
     * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property privateIpAddress: The private IP address of the instance.
     * To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupIds: The ID of security group list to which to assign the instance.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    readonly spotDuration?: number | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released. Valid values:
     * true: releases the system disk when the instance is released.
     * false: does not release the system disk when the instance is released.
     * Default value: true.
     */
    readonly systemDiskDeleteWithInstance?: boolean | ros.IResolvable;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    readonly tags?: RosLaunchTemplate.TagsProperty[];

    /**
     * @Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
     */
    readonly templateResourceGroupId?: string | ros.IResolvable;

    /**
     * @Property templateTags: Template tags to attach to launch template.
     */
    readonly templateTags?: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * @Property versionDescription: Description for version 1 of launch template.
     */
    readonly versionDescription?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: Current zone to create the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLaunchTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateString)(properties.imageOwnerAlias));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosLaunchTemplate_DiskMappingsPropertyValidator))(properties.diskMappings));
    if(properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PrePaid","PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('spotDuration', ros.validateNumber)(properties.spotDuration));
    if(properties.templateTags && (Array.isArray(properties.templateTags) || (typeof properties.templateTags) === 'string')) {
        errors.collect(ros.propertyValidator('templateTags', ros.validateLength)({
            data: properties.templateTags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('templateTags', ros.listValidator(RosLaunchTemplate_TemplateTagsPropertyValidator))(properties.templateTags));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    if(properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["vpc","classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.networkInterfaces && (Array.isArray(properties.networkInterfaces) || (typeof properties.networkInterfaces) === 'string')) {
        errors.collect(ros.propertyValidator('networkInterfaces', ros.validateLength)({
            data: properties.networkInterfaces.length,
            min: undefined,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('networkInterfaces', ros.listValidator(RosLaunchTemplate_NetworkInterfacesPropertyValidator))(properties.networkInterfaces));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLaunchTemplate_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('templateResourceGroupId', ros.validateString)(properties.templateResourceGroupId));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.requiredValidator)(properties.launchTemplateName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    if(properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
          data: properties.ioOptimized,
          allowedValues: ["none","optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('versionDescription', ros.validateString)(properties.versionDescription));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    errors.collect(ros.propertyValidator('systemDiskDeleteWithInstance', ros.validateBoolean)(properties.systemDiskDeleteWithInstance));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if(properties.securityEnhancementStrategy && (typeof properties.securityEnhancementStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateAllowedValues)({
          data: properties.securityEnhancementStrategy,
          allowedValues: ["Active","Deactive"],
        }));
    }
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    return errors.wrap('supplied properties not correct for "RosLaunchTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLaunchTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
      AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosLaunchTemplateDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      HostName: ros.stringToRosTemplate(properties.hostName),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      ImageOwnerAlias: ros.stringToRosTemplate(properties.imageOwnerAlias),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      NetworkInterfaces: ros.listMapper(rosLaunchTemplateNetworkInterfacesPropertyToRosTemplate)(properties.networkInterfaces),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
      Period: ros.numberToRosTemplate(properties.period),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
      SpotDuration: ros.numberToRosTemplate(properties.spotDuration),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDeleteWithInstance: ros.booleanToRosTemplate(properties.systemDiskDeleteWithInstance),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      Tags: ros.listMapper(rosLaunchTemplateTagsPropertyToRosTemplate)(properties.tags),
      TemplateResourceGroupId: ros.stringToRosTemplate(properties.templateResourceGroupId),
      TemplateTags: ros.listMapper(rosLaunchTemplateTemplateTagsPropertyToRosTemplate)(properties.templateTags),
      UserData: ros.stringToRosTemplate(properties.userData),
      VersionDescription: ros.stringToRosTemplate(properties.versionDescription),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::LaunchTemplate`
 */
export class RosLaunchTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::LaunchTemplate";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DefaultVersionNumber: The default version number of launch template.
     */
    public readonly attrDefaultVersionNumber: ros.IResolvable;

    /**
     * @Attribute LatestVersionNumber: The latest version number of launch template.
     */
    public readonly attrLatestVersionNumber: ros.IResolvable;

    /**
     * @Attribute LaunchTemplateId: The id of launch template.
     */
    public readonly attrLaunchTemplateId: ros.IResolvable;

    /**
     * @Attribute LaunchTemplateName: The name of launch template.
     */
    public readonly attrLaunchTemplateName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property launchTemplateName: The name of launch template.
     */
    public launchTemplateName: string | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: The ID of the deployment set.
     */
    public deploymentSetId: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    public diskMappings: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     */
    public imageOwnerAlias: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
     * PostPaid: pay-as-you-go.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    public ioOptimized: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    public networkInterfaces: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image.
     * Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
     */
    public passwordInherit: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance. Unit: months.
     * This parameter is valid and required only when InstanceChargeType is set to PrePaid.
     * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: The private IP address of the instance.
     * To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    public securityEnhancementStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The ID of security group list to which to assign the instance.
     */
    public securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    public spotDuration: number | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released. Valid values:
     * true: releases the system disk when the instance is released.
     * false: does not release the system disk when the instance is released.
     * Default value: true.
     */
    public systemDiskDeleteWithInstance: boolean | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    public systemDiskDescription: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    public systemDiskDiskName: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
     */
    public systemDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    public tags: RosLaunchTemplate.TagsProperty[] | undefined;

    /**
     * @Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
     */
    public templateResourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property templateTags: Template tags to attach to launch template.
     */
    public templateTags: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property versionDescription: Description for version 1 of launch template.
     */
    public versionDescription: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: Current zone to create the instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLaunchTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLaunchTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDefaultVersionNumber = this.getAtt('DefaultVersionNumber');
        this.attrLatestVersionNumber = this.getAtt('LatestVersionNumber');
        this.attrLaunchTemplateId = this.getAtt('LaunchTemplateId');
        this.attrLaunchTemplateName = this.getAtt('LaunchTemplateName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTemplateName = props.launchTemplateName;
        this.autoReleaseTime = props.autoReleaseTime;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.imageId = props.imageId;
        this.imageOwnerAlias = props.imageOwnerAlias;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.keyPairName = props.keyPairName;
        this.networkInterfaces = props.networkInterfaces;
        this.networkType = props.networkType;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotDuration = props.spotDuration;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDeleteWithInstance = props.systemDiskDeleteWithInstance;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = props.tags;
        this.templateResourceGroupId = props.templateResourceGroupId;
        this.templateTags = props.templateTags;
        this.userData = props.userData;
        this.versionDescription = props.versionDescription;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            launchTemplateName: this.launchTemplateName,
            autoReleaseTime: this.autoReleaseTime,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            imageId: this.imageId,
            imageOwnerAlias: this.imageOwnerAlias,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            ipv6AddressCount: this.ipv6AddressCount,
            keyPairName: this.keyPairName,
            networkInterfaces: this.networkInterfaces,
            networkType: this.networkType,
            passwordInherit: this.passwordInherit,
            period: this.period,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotDuration: this.spotDuration,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDeleteWithInstance: this.systemDiskDeleteWithInstance,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags,
            templateResourceGroupId: this.templateResourceGroupId,
            templateTags: this.templateTags,
            userData: this.userData,
            versionDescription: this.versionDescription,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLaunchTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether data disk is encrypted.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the ESSD used as data disk. The value of Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768] ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size?: string | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Whether data disk should be released with instance.
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLaunchTemplate_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.stringToRosTemplate(properties.size),
      DeleteWithInstance: ros.booleanToRosTemplate(properties.deleteWithInstance),
      DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}

export namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    export interface NetworkInterfacesProperty {
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string | ros.IResolvable;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.
         */
        readonly primaryIpAddress?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NetworkInterfacesProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkInterfacesProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_NetworkInterfacesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    return errors.wrap('supplied properties not correct for "NetworkInterfacesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.NetworkInterfaces` resource
 *
 * @param properties - the TypeScript properties of a `NetworkInterfacesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.NetworkInterfaces` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateNetworkInterfacesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLaunchTemplate_NetworkInterfacesPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}

export namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.Tags` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLaunchTemplate_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    export interface TemplateTagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TemplateTagsProperty`
 *
 * @param properties - the TypeScript properties of a `TemplateTagsProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_TemplateTagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TemplateTagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.TemplateTags` resource
 *
 * @param properties - the TypeScript properties of a `TemplateTagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.TemplateTags` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateTemplateTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLaunchTemplate_TemplateTagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterface`
 */
export interface RosNetworkInterfaceProps {

    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string | ros.IResolvable;

    /**
     * @Property networkInterfaceTrafficMode: The communication mode of the ENI. Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
     */
    readonly networkInterfaceTrafficMode?: string | ros.IResolvable;

    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    readonly primaryIpAddress?: string | ros.IResolvable;

    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
     */
    readonly queueNumber?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNetworkInterface.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosNetworkInterfaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.networkInterfaceTrafficMode && (typeof properties.networkInterfaceTrafficMode) !== 'object') {
        errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateAllowedValues)({
          data: properties.networkInterfaceTrafficMode,
          allowedValues: ["Standard","HighPerformance"],
        }));
    }
    errors.collect(ros.propertyValidator('networkInterfaceTrafficMode', ros.validateString)(properties.networkInterfaceTrafficMode));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.privateIpAddresses && (Array.isArray(properties.privateIpAddresses) || (typeof properties.privateIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('privateIpAddresses', ros.validateLength)({
            data: properties.privateIpAddresses.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('privateIpAddresses', ros.listValidator(ros.validateString))(properties.privateIpAddresses));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('secondaryPrivateIpAddressCount', ros.validateNumber)(properties.secondaryPrivateIpAddressCount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateString))(properties.ipv6Addresses));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    if(properties.queueNumber && (typeof properties.queueNumber) !== 'object') {
        errors.collect(ros.propertyValidator('queueNumber', ros.validateRange)({
            data: properties.queueNumber,
            min: 1,
            max: 2048,
          }));
    }
    errors.collect(ros.propertyValidator('queueNumber', ros.validateNumber)(properties.queueNumber));
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosNetworkInterface_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkInterfacePropsValidator(properties).assertSuccess();
    }
    return {
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      Description: ros.stringToRosTemplate(properties.description),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      Ipv6Addresses: ros.listMapper(ros.stringToRosTemplate)(properties.ipv6Addresses),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      NetworkInterfaceTrafficMode: ros.stringToRosTemplate(properties.networkInterfaceTrafficMode),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
      PrivateIpAddresses: ros.listMapper(ros.stringToRosTemplate)(properties.privateIpAddresses),
      QueueNumber: ros.numberToRosTemplate(properties.queueNumber),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecondaryPrivateIpAddressCount: ros.numberToRosTemplate(properties.secondaryPrivateIpAddressCount),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
      Tags: ros.listMapper(rosNetworkInterfaceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::NetworkInterface`
 */
export class RosNetworkInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterface";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MacAddress: The MAC address of your Network Interface.
     */
    public readonly attrMacAddress: ros.IResolvable;

    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    /**
     * @Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable;

    /**
     * @Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    public readonly attrSecondaryPrivateIpAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    public ipv6Addresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    public networkInterfaceName: string | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaceTrafficMode: The communication mode of the ENI. Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
     */
    public networkInterfaceTrafficMode: string | ros.IResolvable | undefined;

    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    public primaryIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    public privateIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
     */
    public queueNumber: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    public secondaryPrivateIpAddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    public securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosNetworkInterface.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterface.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMacAddress = this.getAtt('MacAddress');
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.attrPrivateIpAddress = this.getAtt('PrivateIpAddress');
        this.attrSecondaryPrivateIpAddresses = this.getAtt('SecondaryPrivateIpAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
        this.networkInterfaceName = props.networkInterfaceName;
        this.networkInterfaceTrafficMode = props.networkInterfaceTrafficMode;
        this.primaryIpAddress = props.primaryIpAddress;
        this.privateIpAddresses = props.privateIpAddresses;
        this.queueNumber = props.queueNumber;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryPrivateIpAddressCount = props.secondaryPrivateIpAddressCount;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vSwitchId: this.vSwitchId,
            description: this.description,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
            networkInterfaceName: this.networkInterfaceName,
            networkInterfaceTrafficMode: this.networkInterfaceTrafficMode,
            primaryIpAddress: this.primaryIpAddress,
            privateIpAddresses: this.privateIpAddresses,
            queueNumber: this.queueNumber,
            resourceGroupId: this.resourceGroupId,
            secondaryPrivateIpAddressCount: this.secondaryPrivateIpAddressCount,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkInterfacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNetworkInterface {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterface_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface.Tags` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfaceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNetworkInterface_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export interface RosNetworkInterfaceAttachmentProps {

    /**
     * @Property instanceId: ECS instance id
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    readonly trunkNetworkInstanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkInterfaceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfaceAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('trunkNetworkInstanceId', ros.validateString)(properties.trunkNetworkInstanceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfaceAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfaceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfaceAttachment` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfaceAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkInterfaceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
      TrunkNetworkInstanceId: ros.stringToRosTemplate(properties.trunkNetworkInstanceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export class RosNetworkInterfaceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfaceAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceId: ID of ECS instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    /**
     * @Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    public readonly attrTrunkNetworkInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: ECS instance id
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    public networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    public trunkNetworkInstanceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfaceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfaceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterfaceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.attrTrunkNetworkInstanceId = this.getAtt('TrunkNetworkInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.networkInterfaceId = props.networkInterfaceId;
        this.trunkNetworkInstanceId = props.trunkNetworkInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            networkInterfaceId: this.networkInterfaceId,
            trunkNetworkInstanceId: this.trunkNetworkInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkInterfaceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`
 */
export interface RosNetworkInterfacePermissionProps {

    /**
     * @Property accountId: the account id
     */
    readonly accountId: string | ros.IResolvable;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property permission: the permission
     */
    readonly permission: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkInterfacePermissionProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfacePermissionProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfacePermissionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountId', ros.requiredValidator)(properties.accountId));
    errors.collect(ros.propertyValidator('accountId', ros.validateString)(properties.accountId));
    errors.collect(ros.propertyValidator('permission', ros.requiredValidator)(properties.permission));
    errors.collect(ros.propertyValidator('permission', ros.validateString)(properties.permission));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfacePermissionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfacePermission` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfacePermissionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfacePermission` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfacePermissionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkInterfacePermissionPropsValidator(properties).assertSuccess();
    }
    return {
      AccountId: ros.stringToRosTemplate(properties.accountId),
      NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
      Permission: ros.stringToRosTemplate(properties.permission),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::NetworkInterfacePermission`
 */
export class RosNetworkInterfacePermission extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfacePermission";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    public readonly attrNetworkInterfacePermissionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountId: the account id
     */
    public accountId: string | ros.IResolvable;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    public networkInterfaceId: string | ros.IResolvable;

    /**
     * @Property permission: the permission
     */
    public permission: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfacePermissionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterfacePermission.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfacePermissionId = this.getAtt('NetworkInterfacePermissionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountId = props.accountId;
        this.networkInterfaceId = props.networkInterfaceId;
        this.permission = props.permission;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountId: this.accountId,
            networkInterfaceId: this.networkInterfaceId,
            permission: this.permission,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkInterfacePermissionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::PrefixList`
 */
export interface RosPrefixListProps {

    /**
     * @Property addressFamily: The IP address family. Valid values: IPv4 IPv6
     */
    readonly addressFamily: string | ros.IResolvable;

    /**
     * @Property maxEntries: The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.
     */
    readonly maxEntries: number | ros.IResolvable;

    /**
     * @Property prefixListName: The name of the prefix. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    readonly prefixListName: string | ros.IResolvable;

    /**
     * @Property description: The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property entries:
     */
    readonly entries?: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrefixListProps`
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the result of the validation.
 */
function RosPrefixListPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('maxEntries', ros.requiredValidator)(properties.maxEntries));
    if(properties.maxEntries && (typeof properties.maxEntries) !== 'object') {
        errors.collect(ros.propertyValidator('maxEntries', ros.validateRange)({
            data: properties.maxEntries,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('maxEntries', ros.validateNumber)(properties.maxEntries));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('prefixListName', ros.requiredValidator)(properties.prefixListName));
    errors.collect(ros.propertyValidator('prefixListName', ros.validateString)(properties.prefixListName));
    if(properties.entries && (Array.isArray(properties.entries) || (typeof properties.entries) === 'string')) {
        errors.collect(ros.propertyValidator('entries', ros.validateLength)({
            data: properties.entries.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('entries', ros.listValidator(RosPrefixList_EntriesPropertyValidator))(properties.entries));
    errors.collect(ros.propertyValidator('addressFamily', ros.requiredValidator)(properties.addressFamily));
    if(properties.addressFamily && (typeof properties.addressFamily) !== 'object') {
        errors.collect(ros.propertyValidator('addressFamily', ros.validateAllowedValues)({
          data: properties.addressFamily,
          allowedValues: ["Ipv4","Ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressFamily', ros.validateString)(properties.addressFamily));
    return errors.wrap('supplied properties not correct for "RosPrefixListProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList` resource
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList` resource.
 */
// @ts-ignore TS6133
function rosPrefixListPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrefixListPropsValidator(properties).assertSuccess();
    }
    return {
      AddressFamily: ros.stringToRosTemplate(properties.addressFamily),
      MaxEntries: ros.numberToRosTemplate(properties.maxEntries),
      PrefixListName: ros.stringToRosTemplate(properties.prefixListName),
      Description: ros.stringToRosTemplate(properties.description),
      Entries: ros.listMapper(rosPrefixListEntriesPropertyToRosTemplate)(properties.entries),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::PrefixList`
 */
export class RosPrefixList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrefixList";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute PrefixListId: The ID of the prefix list.
     */
    public readonly attrPrefixListId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressFamily: The IP address family. Valid values: IPv4 IPv6
     */
    public addressFamily: string | ros.IResolvable;

    /**
     * @Property maxEntries: The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.
     */
    public maxEntries: number | ros.IResolvable;

    /**
     * @Property prefixListName: The name of the prefix. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    public prefixListName: string | ros.IResolvable;

    /**
     * @Property description: The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property entries:
     */
    public entries: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::PrefixList`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrefixListProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrefixList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrefixListId = this.getAtt('PrefixListId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressFamily = props.addressFamily;
        this.maxEntries = props.maxEntries;
        this.prefixListName = props.prefixListName;
        this.description = props.description;
        this.entries = props.entries;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressFamily: this.addressFamily,
            maxEntries: this.maxEntries,
            prefixListName: this.prefixListName,
            description: this.description,
            entries: this.entries,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrefixListPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrefixList {
    /**
     * @stability external
     */
    export interface EntriesProperty {
        /**
         * @Property description: The description in entry. The description must be 2 to 32 characters in length and cannot start with http:// or https://.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property cidr: The CIDR block in entry. Take note of the following items: 
     * The total number of entries must not exceed the MaxEntries value.
     * CIDR block types are determined by the IP address family. You cannot combine IPv4 and IPv6 CIDR blocks in a single prefix list.
     * CIDR blocks must be unique across all entries in a prefix list. For example, you cannot specify 192.168.1.0/24 twice in the entries of the prefix list.
     * IP addresses are supported. 
     * The system converts IP addresses into CIDR blocks. For example, if you specify 192.168.1.100, the system converts it into the 192.168.1.100/32 CIDR block.
     * If an IPv6 CIDR block is used, the system converts it to the zero compression format and changes uppercase letters into lowercase ones. For example, if you specify 2001:0DB8:0000:0000:0000:0000:0000:0000/32,the system converts it into 2001:db8::/32.
         */
        readonly cidr: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EntriesProperty`
 *
 * @param properties - the TypeScript properties of a `EntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosPrefixList_EntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('cidr', ros.requiredValidator)(properties.cidr));
    errors.collect(ros.propertyValidator('cidr', ros.validateString)(properties.cidr));
    return errors.wrap('supplied properties not correct for "EntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList.Entries` resource
 *
 * @param properties - the TypeScript properties of a `EntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList.Entries` resource.
 */
// @ts-ignore TS6133
function rosPrefixListEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrefixList_EntriesPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      Cidr: ros.stringToRosTemplate(properties.cidr),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::RamRoleAttachment`
 */
export interface RosRamRoleAttachmentProps {

    /**
     * @Property instanceIds: The instance id that needs to be granted the ram role.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ramRoleName: The ram role name.
     */
    readonly ramRoleName: string | ros.IResolvable;

    /**
     * @Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
     * The length is 1~1024 characters.
     */
    readonly policy?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRamRoleAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosRamRoleAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosRamRoleAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.policy && (Array.isArray(properties.policy) || (typeof properties.policy) === 'string')) {
        errors.collect(ros.propertyValidator('policy', ros.validateLength)({
            data: properties.policy.length,
            min: 1,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('ramRoleName', ros.requiredValidator)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosRamRoleAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::RamRoleAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosRamRoleAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::RamRoleAttachment` resource.
 */
// @ts-ignore TS6133
function rosRamRoleAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRamRoleAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      Policy: ros.stringToRosTemplate(properties.policy),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::RamRoleAttachment`
 */
export class RosRamRoleAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RamRoleAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceIds: The list of ecs instance id
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute RamRoleName: The ram role name.
     */
    public readonly attrRamRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: The instance id that needs to be granted the ram role.
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ramRoleName: The ram role name.
     */
    public ramRoleName: string | ros.IResolvable;

    /**
     * @Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
     * The length is 1~1024 characters.
     */
    public policy: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::RamRoleAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRamRoleAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRamRoleAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrRamRoleName = this.getAtt('RamRoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.ramRoleName = props.ramRoleName;
        this.policy = props.policy;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            ramRoleName: this.ramRoleName,
            policy: this.policy,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRamRoleAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::Route`
 */
export interface RosRouteProps {

    /**
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;

    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopId?: string | ros.IResolvable;

    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    readonly nextHopList?: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property nextHopType: The next hop type. Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopType?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('nextHopType', ros.validateString)(properties.nextHopType));
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('nextHopId', ros.validateString)(properties.nextHopId));
    errors.collect(ros.propertyValidator('nextHopList', ros.listValidator(RosRoute_NextHopListPropertyValidator))(properties.nextHopList));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.requiredValidator)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    return errors.wrap('supplied properties not correct for "RosRouteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route` resource.
 */
// @ts-ignore TS6133
function rosRoutePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRoutePropsValidator(properties).assertSuccess();
    }
    return {
      DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
      RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
      NextHopId: ros.stringToRosTemplate(properties.nextHopId),
      NextHopList: ros.listMapper(rosRouteNextHopListPropertyToRosTemplate)(properties.nextHopList),
      NextHopType: ros.stringToRosTemplate(properties.nextHopType),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Route`
 */
export class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Route";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RouteEntryId: The ID of the route entry.
     */
    public readonly attrRouteEntryId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    public destinationCidrBlock: string | ros.IResolvable;

    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    public routeTableId: string | ros.IResolvable;

    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    public nextHopId: string | ros.IResolvable | undefined;

    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    public nextHopList: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property nextHopType: The next hop type. Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    public nextHopType: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRoute.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteEntryId = this.getAtt('RouteEntryId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationCidrBlock = props.destinationCidrBlock;
        this.routeTableId = props.routeTableId;
        this.nextHopId = props.nextHopId;
        this.nextHopList = props.nextHopList;
        this.nextHopType = props.nextHopType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destinationCidrBlock: this.destinationCidrBlock,
            routeTableId: this.routeTableId,
            nextHopId: this.nextHopId,
            nextHopList: this.nextHopList,
            nextHopType: this.nextHopType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRoutePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface NextHopListProperty {
        /**
         * @Property nextHopType: Route entry next hop type. Now support 'RouterInterface'.
         */
        readonly nextHopType?: string | ros.IResolvable;
        /**
         * @Property nextHopId: Route entry next hop Instance id or Tunnel id.
         */
        readonly nextHopId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NextHopListProperty`
 *
 * @param properties - the TypeScript properties of a `NextHopListProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_NextHopListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nextHopType', ros.validateString)(properties.nextHopType));
    errors.collect(ros.propertyValidator('nextHopId', ros.requiredValidator)(properties.nextHopId));
    errors.collect(ros.propertyValidator('nextHopId', ros.validateString)(properties.nextHopId));
    return errors.wrap('supplied properties not correct for "NextHopListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route.NextHopList` resource
 *
 * @param properties - the TypeScript properties of a `NextHopListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route.NextHopList` resource.
 */
// @ts-ignore TS6133
function rosRouteNextHopListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_NextHopListPropertyValidator(properties).assertSuccess();
    return {
      NextHopType: ros.stringToRosTemplate(properties.nextHopType),
      NextHopId: ros.stringToRosTemplate(properties.nextHopId),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::RunCommand`
 */
export interface RosRunCommandProps {

    /**
     * @Property commandContent: The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    readonly commandContent: string | ros.IResolvable;

    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;

    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * @Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    readonly frequency?: string | ros.IResolvable;

    /**
     * @Property keepCommand: Specifies whether to retain the script after it is run. Valid values:
     * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
     * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
     * Default value: false
     */
    readonly keepCommand?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the script, which supports all character sets. It can be up to 128 characters in length.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    readonly runAgainOn?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sync: Whether to invoke synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to run_command. Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosRunCommand.TagsProperty[];

    /**
     * @Property timed: Specifies whether to periodically run the script. Valid values:
     * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
     * false: runs once only.
     * Default value: false
     */
    readonly timed?: boolean | ros.IResolvable;

    /**
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    readonly workingDir?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRunCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the result of the validation.
 */
function RosRunCommandPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('timed', ros.validateBoolean)(properties.timed));
    errors.collect(ros.propertyValidator('contentEncoding', ros.validateString)(properties.contentEncoding));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('commandContent', ros.requiredValidator)(properties.commandContent));
    errors.collect(ros.propertyValidator('commandContent', ros.validateString)(properties.commandContent));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('frequency', ros.validateString)(properties.frequency));
    if(properties.runAgainOn && (Array.isArray(properties.runAgainOn) || (typeof properties.runAgainOn) === 'string')) {
        errors.collect(ros.propertyValidator('runAgainOn', ros.validateLength)({
            data: properties.runAgainOn.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('runAgainOn', ros.listValidator(ros.validateString))(properties.runAgainOn));
    errors.collect(ros.propertyValidator('enableParameter', ros.validateBoolean)(properties.enableParameter));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('keepCommand', ros.validateBoolean)(properties.keepCommand));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosRunCommand_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosRunCommandProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::RunCommand` resource
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::RunCommand` resource.
 */
// @ts-ignore TS6133
function rosRunCommandPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRunCommandPropsValidator(properties).assertSuccess();
    }
    return {
      CommandContent: ros.stringToRosTemplate(properties.commandContent),
      InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      Type: ros.stringToRosTemplate(properties.type),
      ContentEncoding: ros.stringToRosTemplate(properties.contentEncoding),
      Description: ros.stringToRosTemplate(properties.description),
      EnableParameter: ros.booleanToRosTemplate(properties.enableParameter),
      Frequency: ros.stringToRosTemplate(properties.frequency),
      KeepCommand: ros.booleanToRosTemplate(properties.keepCommand),
      Name: ros.stringToRosTemplate(properties.name),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      RunAgainOn: ros.listMapper(ros.stringToRosTemplate)(properties.runAgainOn),
      Sync: ros.booleanToRosTemplate(properties.sync),
      Tags: ros.listMapper(rosRunCommandTagsPropertyToRosTemplate)(properties.tags),
      Timed: ros.booleanToRosTemplate(properties.timed),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      WorkingDir: ros.stringToRosTemplate(properties.workingDir),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::RunCommand`
 */
export class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RunCommand";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CommandId: The id of command created.
     */
    public readonly attrCommandId: ros.IResolvable;

    /**
     * @Attribute InvokeId: The invoke id of command.
     */
    public readonly attrInvokeId: ros.IResolvable;

    /**
     * @Attribute InvokeInstances: The InvokeInstances of command.
     */
    public readonly attrInvokeInstances: ros.IResolvable;

    /**
     * @Attribute InvokeResults: The results of invoke command.
     */
    public readonly attrInvokeResults: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commandContent: The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    public commandContent: string | ros.IResolvable;

    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    public type: string | ros.IResolvable;

    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    public contentEncoding: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    public enableParameter: boolean | ros.IResolvable | undefined;

    /**
     * @Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    public frequency: string | ros.IResolvable | undefined;

    /**
     * @Property keepCommand: Specifies whether to retain the script after it is run. Valid values:
     * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
     * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
     * Default value: false
     */
    public keepCommand: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the script, which supports all character sets. It can be up to 128 characters in length.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    public runAgainOn: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sync: Whether to invoke synchronously.
     */
    public sync: boolean | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to run_command. Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosRunCommand.TagsProperty[] | undefined;

    /**
     * @Property timed: Specifies whether to periodically run the script. Valid values:
     * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
     * false: runs once only.
     * Default value: false
     */
    public timed: boolean | ros.IResolvable | undefined;

    /**
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    public workingDir: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRunCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandId = this.getAtt('CommandId');
        this.attrInvokeId = this.getAtt('InvokeId');
        this.attrInvokeInstances = this.getAtt('InvokeInstances');
        this.attrInvokeResults = this.getAtt('InvokeResults');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandContent = props.commandContent;
        this.instanceIds = props.instanceIds;
        this.type = props.type;
        this.contentEncoding = props.contentEncoding;
        this.description = props.description;
        this.enableParameter = props.enableParameter;
        this.frequency = props.frequency;
        this.keepCommand = props.keepCommand;
        this.name = props.name;
        this.parameters = props.parameters;
        this.runAgainOn = props.runAgainOn;
        this.sync = props.sync;
        this.tags = props.tags;
        this.timed = props.timed;
        this.timeout = props.timeout;
        this.workingDir = props.workingDir;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commandContent: this.commandContent,
            instanceIds: this.instanceIds,
            type: this.type,
            contentEncoding: this.contentEncoding,
            description: this.description,
            enableParameter: this.enableParameter,
            frequency: this.frequency,
            keepCommand: this.keepCommand,
            name: this.name,
            parameters: this.parameters,
            runAgainOn: this.runAgainOn,
            sync: this.sync,
            tags: this.tags,
            timed: this.timed,
            timeout: this.timeout,
            workingDir: this.workingDir,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRunCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRunCommand {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosRunCommand_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::RunCommand.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::RunCommand.Tags` resource.
 */
// @ts-ignore TS6133
function rosRunCommandTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRunCommand_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::SNatEntry`
 */
export interface RosSNatEntryProps {

    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly sNatIp: string | ros.IResolvable;

    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    readonly sNatTableId: string | ros.IResolvable;

    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string | ros.IResolvable;

    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;

    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSNatEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosSNatEntryProps`
 *
 * @returns the result of the validation.
 */
function RosSNatEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceVSwitchId', ros.validateString)(properties.sourceVSwitchId));
    errors.collect(ros.propertyValidator('snatEntryName', ros.validateString)(properties.snatEntryName));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('sNatTableId', ros.requiredValidator)(properties.sNatTableId));
    errors.collect(ros.propertyValidator('sNatTableId', ros.validateString)(properties.sNatTableId));
    errors.collect(ros.propertyValidator('sNatIp', ros.requiredValidator)(properties.sNatIp));
    errors.collect(ros.propertyValidator('sNatIp', ros.validateString)(properties.sNatIp));
    return errors.wrap('supplied properties not correct for "RosSNatEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SNatEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosSNatEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SNatEntry` resource.
 */
// @ts-ignore TS6133
function rosSNatEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSNatEntryPropsValidator(properties).assertSuccess();
    }
    return {
      SNatIp: ros.stringToRosTemplate(properties.sNatIp),
      SNatTableId: ros.stringToRosTemplate(properties.sNatTableId),
      SnatEntryName: ros.stringToRosTemplate(properties.snatEntryName),
      SourceCIDR: ros.stringToRosTemplate(properties.sourceCidr),
      SourceVSwitchId: ros.stringToRosTemplate(properties.sourceVSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SNatEntry`
 */
export class RosSNatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SNatEntry";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SNatEntryId: The id of created SNAT entry.
     */
    public readonly attrSNatEntryId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    public sNatIp: string | ros.IResolvable;

    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    public sNatTableId: string | ros.IResolvable;

    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    public snatEntryName: string | ros.IResolvable | undefined;

    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    public sourceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    public sourceVSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSNatEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSNatEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSNatEntryId = this.getAtt('SNatEntryId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sNatIp = props.sNatIp;
        this.sNatTableId = props.sNatTableId;
        this.snatEntryName = props.snatEntryName;
        this.sourceCidr = props.sourceCidr;
        this.sourceVSwitchId = props.sourceVSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sNatIp: this.sNatIp,
            sNatTableId: this.sNatTableId,
            snatEntryName: this.snatEntryName,
            sourceCidr: this.sourceCidr,
            sourceVSwitchId: this.sourceVSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSNatEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPair`
 */
export interface RosSSHKeyPairProps {

    /**
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
     */
    readonly keyPairName: string | ros.IResolvable;

    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    readonly publicKeyBody?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSSHKeyPair.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosSSHKeyPairProps`
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairProps`
 *
 * @returns the result of the validation.
 */
function RosSSHKeyPairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('publicKeyBody', ros.validateString)(properties.publicKeyBody));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSSHKeyPair_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosSSHKeyPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair` resource
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair` resource.
 */
// @ts-ignore TS6133
function rosSSHKeyPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSSHKeyPairPropsValidator(properties).assertSuccess();
    }
    return {
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      PublicKeyBody: ros.stringToRosTemplate(properties.publicKeyBody),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosSSHKeyPairTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SSHKeyPair`
 */
export class RosSSHKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPair";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    public readonly attrKeyPairFingerPrint: ros.IResolvable;

    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    public readonly attrPrivateKeyBody: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
     */
    public keyPairName: string | ros.IResolvable;

    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    public publicKeyBody: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosSSHKeyPair.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSSHKeyPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSSHKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyPairFingerPrint = this.getAtt('KeyPairFingerPrint');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrPrivateKeyBody = this.getAtt('PrivateKeyBody');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.publicKeyBody = props.publicKeyBody;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairName: this.keyPairName,
            publicKeyBody: this.publicKeyBody,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSSHKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSSHKeyPair {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSSHKeyPair_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair.Tags` resource.
 */
// @ts-ignore TS6133
function rosSSHKeyPairTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSSHKeyPair_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`
 */
export interface RosSSHKeyPairAttachmentProps {

    /**
     * @Property instanceIds: The comma delimited ECS instance id list. Only support Linux.
     */
    readonly instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName: string | ros.IResolvable;

    /**
     * @Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
     * Default: false
     */
    readonly autoReboot?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSSHKeyPairAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosSSHKeyPairAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('autoReboot', ros.validateBoolean)(properties.autoReboot));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosSSHKeyPairAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPairAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPairAttachment` resource.
 */
// @ts-ignore TS6133
function rosSSHKeyPairAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSSHKeyPairAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      AutoReboot: ros.booleanToRosTemplate(properties.autoReboot),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SSHKeyPairAttachment`
 */
export class RosSSHKeyPairAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPairAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: The comma delimited ECS instance id list. Only support Linux.
     */
    public instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | ros.IResolvable;

    /**
     * @Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
     * Default: false
     */
    public autoReboot: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::SSHKeyPairAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSSHKeyPairAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSSHKeyPairAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.keyPairName = props.keyPairName;
        this.autoReboot = props.autoReboot;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            keyPairName: this.keyPairName,
            autoReboot: this.autoReboot,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSSHKeyPairAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroup`
 */
export interface RosSecurityGroupProps {

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    readonly securityGroupEgress?: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    readonly securityGroupIngress?: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    readonly securityGroupType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to security group. Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecurityGroup.TagsProperty[];

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.securityGroupType && (typeof properties.securityGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('securityGroupType', ros.validateAllowedValues)({
          data: properties.securityGroupType,
          allowedValues: ["normal","enterprise"],
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupType', ros.validateString)(properties.securityGroupType));
    errors.collect(ros.propertyValidator('securityGroupIngress', ros.listValidator(RosSecurityGroup_SecurityGroupIngressPropertyValidator))(properties.securityGroupIngress));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSecurityGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('securityGroupEgress', ros.listValidator(RosSecurityGroup_SecurityGroupEgressPropertyValidator))(properties.securityGroupEgress));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupEgress: ros.listMapper(rosSecurityGroupSecurityGroupEgressPropertyToRosTemplate)(properties.securityGroupEgress),
      SecurityGroupIngress: ros.listMapper(rosSecurityGroupSecurityGroupIngressPropertyToRosTemplate)(properties.securityGroupIngress),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      SecurityGroupType: ros.stringToRosTemplate(properties.securityGroupType),
      Tags: ros.listMapper(rosSecurityGroupTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroup`
 */
export class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SecurityGroupId: generated security group id for security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupName: The name of security group.
     */
    public readonly attrSecurityGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    public securityGroupEgress: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    public securityGroupIngress: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    public securityGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to security group. Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosSecurityGroup.TagsProperty[] | undefined;

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSecurityGroupName = this.getAtt('SecurityGroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupEgress = props.securityGroupEgress;
        this.securityGroupIngress = props.securityGroupIngress;
        this.securityGroupName = props.securityGroupName;
        this.securityGroupType = props.securityGroupType;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            resourceGroupId: this.resourceGroupId,
            securityGroupEgress: this.securityGroupEgress,
            securityGroupIngress: this.securityGroupIngress,
            securityGroupName: this.securityGroupName,
            securityGroupType: this.securityGroupType,
            tags: this.tags,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSecurityGroup {
    /**
     * @stability external
     */
    export interface SecurityGroupEgressProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
         */
        readonly destPrefixListId?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property securityGroupId: Id of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property destGroupOwnerId: Dest Group Owner Account ID
         */
        readonly destGroupOwnerId?: string | ros.IResolvable;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string | ros.IResolvable;
        /**
         * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
         */
        readonly destCidrIp?: string | ros.IResolvable;
        /**
         * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
         */
        readonly nicType?: string | ros.IResolvable;
        /**
         * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
         */
        readonly ipv6DestCidrIp?: string | ros.IResolvable;
        /**
         * @Property destGroupId: Dest Group Id
         */
        readonly destGroupId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SecurityGroupEgressProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityGroupEgressProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_SecurityGroupEgressPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destPrefixListId', ros.validateString)(properties.destPrefixListId));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('destGroupOwnerId', ros.validateString)(properties.destGroupOwnerId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all","icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('destCidrIp', ros.validateString)(properties.destCidrIp));
    if(properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
          data: properties.nicType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('ipv6DestCidrIp', ros.validateString)(properties.ipv6DestCidrIp));
    errors.collect(ros.propertyValidator('destGroupId', ros.validateString)(properties.destGroupId));
    return errors.wrap('supplied properties not correct for "SecurityGroupEgressProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupEgress` resource
 *
 * @param properties - the TypeScript properties of a `SecurityGroupEgressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupEgress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupSecurityGroupEgressPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecurityGroup_SecurityGroupEgressPropertyValidator(properties).assertSuccess();
    return {
      Policy: ros.stringToRosTemplate(properties.policy),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      Description: ros.stringToRosTemplate(properties.description),
      DestPrefixListId: ros.stringToRosTemplate(properties.destPrefixListId),
      Priority: ros.numberToRosTemplate(properties.priority),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      DestGroupOwnerId: ros.stringToRosTemplate(properties.destGroupOwnerId),
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      DestCidrIp: ros.stringToRosTemplate(properties.destCidrIp),
      NicType: ros.stringToRosTemplate(properties.nicType),
      Ipv6DestCidrIp: ros.stringToRosTemplate(properties.ipv6DestCidrIp),
      DestGroupId: ros.stringToRosTemplate(properties.destGroupId),
    };
}

export namespace RosSecurityGroup {
    /**
     * @stability external
     */
    export interface SecurityGroupIngressProperty {
        /**
         * @Property sourceGroupId: Source Group Id
         */
        readonly sourceGroupId?: string | ros.IResolvable;
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property securityGroupId: Id of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property sourceGroupOwnerId: Source Group Owner Account ID
         */
        readonly sourceGroupOwnerId?: string | ros.IResolvable;
        /**
         * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
         */
        readonly ipv6SourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
         */
        readonly nicType?: string | ros.IResolvable;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly sourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string | ros.IResolvable;
        /**
         * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
     * If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         */
        readonly sourcePrefixListId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SecurityGroupIngressProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityGroupIngressProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_SecurityGroupIngressPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceGroupId', ros.validateString)(properties.sourceGroupId));
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('sourceGroupOwnerId', ros.validateString)(properties.sourceGroupOwnerId));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if(properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
          data: properties.nicType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all","icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('sourcePrefixListId', ros.validateString)(properties.sourcePrefixListId));
    return errors.wrap('supplied properties not correct for "SecurityGroupIngressProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupIngress` resource
 *
 * @param properties - the TypeScript properties of a `SecurityGroupIngressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupIngress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupSecurityGroupIngressPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecurityGroup_SecurityGroupIngressPropertyValidator(properties).assertSuccess();
    return {
      SourceGroupId: ros.stringToRosTemplate(properties.sourceGroupId),
      Policy: ros.stringToRosTemplate(properties.policy),
      Description: ros.stringToRosTemplate(properties.description),
      SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
      Priority: ros.numberToRosTemplate(properties.priority),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SourceGroupOwnerId: ros.stringToRosTemplate(properties.sourceGroupOwnerId),
      Ipv6SourceCidrIp: ros.stringToRosTemplate(properties.ipv6SourceCidrIp),
      NicType: ros.stringToRosTemplate(properties.nicType),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      SourcePrefixListId: ros.stringToRosTemplate(properties.sourcePrefixListId),
    };
}

export namespace RosSecurityGroup {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecurityGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupClone`
 */
export interface RosSecurityGroupCloneProps {

    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    readonly sourceSecurityGroupId: string | ros.IResolvable;

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    readonly destinationRegionId?: string | ros.IResolvable;

    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    readonly securityGroupType?: string | ros.IResolvable;

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityGroupCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupCloneProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.validateString)(properties.destinationRegionId));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.securityGroupType && (typeof properties.securityGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('securityGroupType', ros.validateAllowedValues)({
          data: properties.securityGroupType,
          allowedValues: ["normal","enterprise"],
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupType', ros.validateString)(properties.securityGroupType));
    errors.collect(ros.propertyValidator('sourceSecurityGroupId', ros.requiredValidator)(properties.sourceSecurityGroupId));
    errors.collect(ros.propertyValidator('sourceSecurityGroupId', ros.validateString)(properties.sourceSecurityGroupId));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupClone` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupClone` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupClonePropsValidator(properties).assertSuccess();
    }
    return {
      SourceSecurityGroupId: ros.stringToRosTemplate(properties.sourceSecurityGroupId),
      Description: ros.stringToRosTemplate(properties.description),
      DestinationRegionId: ros.stringToRosTemplate(properties.destinationRegionId),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      SecurityGroupType: ros.stringToRosTemplate(properties.securityGroupType),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupClone`
 */
export class RosSecurityGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SecurityGroupId: Generated security group id of new security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    public sourceSecurityGroupId: string | ros.IResolvable;

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    public destinationRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    public securityGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceSecurityGroupId = props.sourceSecurityGroupId;
        this.description = props.description;
        this.destinationRegionId = props.destinationRegionId;
        this.networkType = props.networkType;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupName = props.securityGroupName;
        this.securityGroupType = props.securityGroupType;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sourceSecurityGroupId: this.sourceSecurityGroupId,
            description: this.description,
            destinationRegionId: this.destinationRegionId,
            networkType: this.networkType,
            resourceGroupId: this.resourceGroupId,
            securityGroupName: this.securityGroupName,
            securityGroupType: this.securityGroupType,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`
 */
export interface RosSecurityGroupEgressProps {

    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    readonly portRange: string | ros.IResolvable;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    readonly destCidrIp?: string | ros.IResolvable;

    /**
     * @Property destGroupId: Dest Group Id
     */
    readonly destGroupId?: string | ros.IResolvable;

    /**
     * @Property destGroupOwnerId: Dest Group Owner Account ID
     */
    readonly destGroupOwnerId?: string | ros.IResolvable;

    /**
     * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
     */
    readonly destPrefixListId?: string | ros.IResolvable;

    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6DestCidrIp?: string | ros.IResolvable;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    readonly nicType?: string | ros.IResolvable;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    readonly policy?: string | ros.IResolvable;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityGroupEgressProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupEgressProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupEgressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destPrefixListId', ros.validateString)(properties.destPrefixListId));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('destGroupOwnerId', ros.validateString)(properties.destGroupOwnerId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all","icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('destCidrIp', ros.validateString)(properties.destCidrIp));
    if(properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
          data: properties.nicType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('ipv6DestCidrIp', ros.validateString)(properties.ipv6DestCidrIp));
    errors.collect(ros.propertyValidator('destGroupId', ros.validateString)(properties.destGroupId));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupEgressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupEgress` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupEgressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupEgress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupEgressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupEgressPropsValidator(properties).assertSuccess();
    }
    return {
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      Description: ros.stringToRosTemplate(properties.description),
      DestCidrIp: ros.stringToRosTemplate(properties.destCidrIp),
      DestGroupId: ros.stringToRosTemplate(properties.destGroupId),
      DestGroupOwnerId: ros.stringToRosTemplate(properties.destGroupOwnerId),
      DestPrefixListId: ros.stringToRosTemplate(properties.destPrefixListId),
      Ipv6DestCidrIp: ros.stringToRosTemplate(properties.ipv6DestCidrIp),
      NicType: ros.stringToRosTemplate(properties.nicType),
      Policy: ros.stringToRosTemplate(properties.policy),
      Priority: ros.numberToRosTemplate(properties.priority),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
export class RosSecurityGroupEgress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupEgress";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    public ipProtocol: string | ros.IResolvable;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    public portRange: string | ros.IResolvable;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    public destCidrIp: string | ros.IResolvable | undefined;

    /**
     * @Property destGroupId: Dest Group Id
     */
    public destGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property destGroupOwnerId: Dest Group Owner Account ID
     */
    public destGroupOwnerId: string | ros.IResolvable | undefined;

    /**
     * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
     */
    public destPrefixListId: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    public ipv6DestCidrIp: string | ros.IResolvable | undefined;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    public nicType: string | ros.IResolvable | undefined;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    public policy: string | ros.IResolvable | undefined;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupEgressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroupEgress.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipProtocol = props.ipProtocol;
        this.portRange = props.portRange;
        this.description = props.description;
        this.destCidrIp = props.destCidrIp;
        this.destGroupId = props.destGroupId;
        this.destGroupOwnerId = props.destGroupOwnerId;
        this.destPrefixListId = props.destPrefixListId;
        this.ipv6DestCidrIp = props.ipv6DestCidrIp;
        this.nicType = props.nicType;
        this.policy = props.policy;
        this.priority = props.priority;
        this.securityGroupId = props.securityGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipProtocol: this.ipProtocol,
            portRange: this.portRange,
            description: this.description,
            destCidrIp: this.destCidrIp,
            destGroupId: this.destGroupId,
            destGroupOwnerId: this.destGroupOwnerId,
            destPrefixListId: this.destPrefixListId,
            ipv6DestCidrIp: this.ipv6DestCidrIp,
            nicType: this.nicType,
            policy: this.policy,
            priority: this.priority,
            securityGroupId: this.securityGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupEgressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupIngress`
 */
export interface RosSecurityGroupIngressProps {

    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    readonly portRange: string | ros.IResolvable;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6SourceCidrIp?: string | ros.IResolvable;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    readonly nicType?: string | ros.IResolvable;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    readonly policy?: string | ros.IResolvable;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    readonly sourceCidrIp?: string | ros.IResolvable;

    /**
     * @Property sourceGroupId: Source Group Id
     */
    readonly sourceGroupId?: string | ros.IResolvable;

    /**
     * @Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    readonly sourceGroupOwnerId?: string | ros.IResolvable;

    /**
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    readonly sourcePortRange?: string | ros.IResolvable;

    /**
     * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
     * If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
     */
    readonly sourcePrefixListId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityGroupIngressProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupIngressProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupIngressPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceGroupId', ros.validateString)(properties.sourceGroupId));
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('sourceGroupOwnerId', ros.validateString)(properties.sourceGroupOwnerId));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if(properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
          data: properties.nicType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all","icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('sourcePrefixListId', ros.validateString)(properties.sourcePrefixListId));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupIngressProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupIngress` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupIngressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupIngress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupIngressPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupIngressPropsValidator(properties).assertSuccess();
    }
    return {
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      PortRange: ros.stringToRosTemplate(properties.portRange),
      Description: ros.stringToRosTemplate(properties.description),
      Ipv6SourceCidrIp: ros.stringToRosTemplate(properties.ipv6SourceCidrIp),
      NicType: ros.stringToRosTemplate(properties.nicType),
      Policy: ros.stringToRosTemplate(properties.policy),
      Priority: ros.numberToRosTemplate(properties.priority),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
      SourceGroupId: ros.stringToRosTemplate(properties.sourceGroupId),
      SourceGroupOwnerId: ros.stringToRosTemplate(properties.sourceGroupOwnerId),
      SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
      SourcePrefixListId: ros.stringToRosTemplate(properties.sourcePrefixListId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupIngress`
 */
export class RosSecurityGroupIngress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupIngress";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    public ipProtocol: string | ros.IResolvable;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    public portRange: string | ros.IResolvable;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    public ipv6SourceCidrIp: string | ros.IResolvable | undefined;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    public nicType: string | ros.IResolvable | undefined;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    public policy: string | ros.IResolvable | undefined;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    public sourceCidrIp: string | ros.IResolvable | undefined;

    /**
     * @Property sourceGroupId: Source Group Id
     */
    public sourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    public sourceGroupOwnerId: string | ros.IResolvable | undefined;

    /**
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    public sourcePortRange: string | ros.IResolvable | undefined;

    /**
     * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
     * If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
     */
    public sourcePrefixListId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupIngress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupIngressProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroupIngress.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipProtocol = props.ipProtocol;
        this.portRange = props.portRange;
        this.description = props.description;
        this.ipv6SourceCidrIp = props.ipv6SourceCidrIp;
        this.nicType = props.nicType;
        this.policy = props.policy;
        this.priority = props.priority;
        this.securityGroupId = props.securityGroupId;
        this.sourceCidrIp = props.sourceCidrIp;
        this.sourceGroupId = props.sourceGroupId;
        this.sourceGroupOwnerId = props.sourceGroupOwnerId;
        this.sourcePortRange = props.sourcePortRange;
        this.sourcePrefixListId = props.sourcePrefixListId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipProtocol: this.ipProtocol,
            portRange: this.portRange,
            description: this.description,
            ipv6SourceCidrIp: this.ipv6SourceCidrIp,
            nicType: this.nicType,
            policy: this.policy,
            priority: this.priority,
            securityGroupId: this.securityGroupId,
            sourceCidrIp: this.sourceCidrIp,
            sourceGroupId: this.sourceGroupId,
            sourceGroupOwnerId: this.sourceGroupOwnerId,
            sourcePortRange: this.sourcePortRange,
            sourcePrefixListId: this.sourcePrefixListId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupIngressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::Snapshot`
 */
export interface RosSnapshotProps {

    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property instantAccess: Specifies whether to enable the instant access feature. Valid values: 
     * true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs) 
     * false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
     * Default value: false.
     * Note This parameter and the Category parameter cannot be specified at the same time. 
     * For more information, see the "Description" section in this topic.
     */
    readonly instantAccess?: boolean | ros.IResolvable;

    /**
     * @Property instantAccessRetentionDays: Specifies the retention period of the instant access feature. After the retention period ends, 
     * the snapshot is automatically released. This parameter takes effect only when InstantAccess 
     * is set to true. Unit: days.
     * Valid values: 1 to 65535. By default, the value of 
     * this parameter is the same as that of RetentionDays.
     */
    readonly instantAccessRetentionDays?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property retentionDays: Set the retention period of a snapshot in days. The snapshot will be automatically released after the retention period expires.
     * The value ranges from 1 to 65536.
     */
    readonly retentionDays?: number | ros.IResolvable;

    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    readonly snapshotName?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSnapshot.TagsProperty[];

    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    readonly timeout?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSnapshotProps`
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the result of the validation.
 */
function RosSnapshotPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instantAccess', ros.validateBoolean)(properties.instantAccess));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 200,
            max: 1440,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    if(properties.retentionDays && (typeof properties.retentionDays) !== 'object') {
        errors.collect(ros.propertyValidator('retentionDays', ros.validateRange)({
            data: properties.retentionDays,
            min: 1,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('snapshotName', ros.validateString)(properties.snapshotName));
    errors.collect(ros.propertyValidator('instantAccessRetentionDays', ros.validateNumber)(properties.instantAccessRetentionDays));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSnapshot_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosSnapshotProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot` resource
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot` resource.
 */
// @ts-ignore TS6133
function rosSnapshotPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSnapshotPropsValidator(properties).assertSuccess();
    }
    return {
      DiskId: ros.stringToRosTemplate(properties.diskId),
      Description: ros.stringToRosTemplate(properties.description),
      InstantAccess: ros.booleanToRosTemplate(properties.instantAccess),
      InstantAccessRetentionDays: ros.numberToRosTemplate(properties.instantAccessRetentionDays),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
      SnapshotName: ros.stringToRosTemplate(properties.snapshotName),
      Tags: ros.listMapper(rosSnapshotTagsPropertyToRosTemplate)(properties.tags),
      Timeout: ros.numberToRosTemplate(properties.timeout),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::Snapshot`
 */
export class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Snapshot";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SnapshotId: The snapshot ID.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    public diskId: string | ros.IResolvable;

    /**
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property instantAccess: Specifies whether to enable the instant access feature. Valid values: 
     * true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs) 
     * false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
     * Default value: false.
     * Note This parameter and the Category parameter cannot be specified at the same time. 
     * For more information, see the "Description" section in this topic.
     */
    public instantAccess: boolean | ros.IResolvable | undefined;

    /**
     * @Property instantAccessRetentionDays: Specifies the retention period of the instant access feature. After the retention period ends, 
     * the snapshot is automatically released. This parameter takes effect only when InstantAccess 
     * is set to true. Unit: days.
     * Valid values: 1 to 65535. By default, the value of 
     * this parameter is the same as that of RetentionDays.
     */
    public instantAccessRetentionDays: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property retentionDays: Set the retention period of a snapshot in days. The snapshot will be automatically released after the retention period expires.
     * The value ranges from 1 to 65536.
     */
    public retentionDays: number | ros.IResolvable | undefined;

    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    public snapshotName: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosSnapshot.TagsProperty[] | undefined;

    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSnapshot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnapshotId = this.getAtt('SnapshotId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.description = props.description;
        this.instantAccess = props.instantAccess;
        this.instantAccessRetentionDays = props.instantAccessRetentionDays;
        this.resourceGroupId = props.resourceGroupId;
        this.retentionDays = props.retentionDays;
        this.snapshotName = props.snapshotName;
        this.tags = props.tags;
        this.timeout = props.timeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskId: this.diskId,
            description: this.description,
            instantAccess: this.instantAccess,
            instantAccessRetentionDays: this.instantAccessRetentionDays,
            resourceGroupId: this.resourceGroupId,
            retentionDays: this.retentionDays,
            snapshotName: this.snapshotName,
            tags: this.tags,
            timeout: this.timeout,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSnapshotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSnapshot {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSnapshot_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot.Tags` resource.
 */
// @ts-ignore TS6133
function rosSnapshotTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSnapshot_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::VPC`
 */
export interface RosVPCProps {

    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    readonly cidrBlock?: string | ros.IResolvable;

    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;

    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    readonly ipv6CidrBlock?: string | ros.IResolvable;

    /**
     * @Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC. Valid values:
     * BGP(default): Alibaba Cloud BGP IPv6
     * ChinaMobile: China Mobile (single line)
     * ChinaUnicom: China Unicom (single line)
     * ChinaTelecom: China Telecom (single line)
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
     */
    readonly ipv6Isp?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks. 
     *
     */
    readonly secondaryCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVPC.TagsProperty[];

    /**
     * @Property userCidr: The user CIDR block. Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
     */
    readonly userCidr?: string | ros.IResolvable;

    /**
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vpcName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVPCProps`
 *
 * @param properties - the TypeScript properties of a `RosVPCProps`
 *
 * @returns the result of the validation.
 */
function RosVPCPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipv6Isp', ros.validateString)(properties.ipv6Isp));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.secondaryCidrBlocks && (Array.isArray(properties.secondaryCidrBlocks) || (typeof properties.secondaryCidrBlocks) === 'string')) {
        errors.collect(ros.propertyValidator('secondaryCidrBlocks', ros.validateLength)({
            data: properties.secondaryCidrBlocks.length,
            min: 0,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('secondaryCidrBlocks', ros.listValidator(ros.validateString))(properties.secondaryCidrBlocks));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('vpcName', ros.validateString)(properties.vpcName));
    if(properties.ipv6CidrBlock && (Array.isArray(properties.ipv6CidrBlock) || (typeof properties.ipv6CidrBlock) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateLength)({
            data: properties.ipv6CidrBlock.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateString)(properties.ipv6CidrBlock));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVPC_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('enableIpv6', ros.validateBoolean)(properties.enableIpv6));
    errors.collect(ros.propertyValidator('userCidr', ros.validateString)(properties.userCidr));
    return errors.wrap('supplied properties not correct for "RosVPCProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC` resource
 *
 * @param properties - the TypeScript properties of a `RosVPCProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC` resource.
 */
// @ts-ignore TS6133
function rosVPCPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVPCPropsValidator(properties).assertSuccess();
    }
    return {
      CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
      Description: ros.stringToRosTemplate(properties.description),
      EnableIpv6: ros.booleanToRosTemplate(properties.enableIpv6),
      Ipv6CidrBlock: ros.stringToRosTemplate(properties.ipv6CidrBlock),
      Ipv6Isp: ros.stringToRosTemplate(properties.ipv6Isp),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecondaryCidrBlocks: ros.listMapper(ros.stringToRosTemplate)(properties.secondaryCidrBlocks),
      Tags: ros.listMapper(rosVPCTagsPropertyToRosTemplate)(properties.tags),
      UserCidr: ros.stringToRosTemplate(properties.userCidr),
      VpcName: ros.stringToRosTemplate(properties.vpcName),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::VPC`
 */
export class RosVPC extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VPC";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RouteTableId: The router table id of created VPC.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute VRouterId: Router id of created VPC.
     */
    public readonly attrVRouterId: ros.IResolvable;

    /**
     * @Attribute VpcId: Id of created VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    public cidrBlock: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    public enableIpv6: boolean | ros.IResolvable | undefined;

    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    public ipv6CidrBlock: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC. Valid values:
     * BGP(default): Alibaba Cloud BGP IPv6
     * ChinaMobile: China Mobile (single line)
     * ChinaUnicom: China Unicom (single line)
     * ChinaTelecom: China Telecom (single line)
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
     */
    public ipv6Isp: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks. 
     *
     */
    public secondaryCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosVPC.TagsProperty[] | undefined;

    /**
     * @Property userCidr: The user CIDR block. Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
     */
    public userCidr: string | ros.IResolvable | undefined;

    /**
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public vpcName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVPCProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVPC.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrVRouterId = this.getAtt('VRouterId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.description = props.description;
        this.enableIpv6 = props.enableIpv6;
        this.ipv6CidrBlock = props.ipv6CidrBlock;
        this.ipv6Isp = props.ipv6Isp;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryCidrBlocks = props.secondaryCidrBlocks;
        this.tags = props.tags;
        this.userCidr = props.userCidr;
        this.vpcName = props.vpcName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidrBlock: this.cidrBlock,
            description: this.description,
            enableIpv6: this.enableIpv6,
            ipv6CidrBlock: this.ipv6CidrBlock,
            ipv6Isp: this.ipv6Isp,
            resourceGroupId: this.resourceGroupId,
            secondaryCidrBlocks: this.secondaryCidrBlocks,
            tags: this.tags,
            userCidr: this.userCidr,
            vpcName: this.vpcName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVPCPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVPC {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVPC_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC.Tags` resource.
 */
// @ts-ignore TS6133
function rosVPCTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVPC_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::VSwitch`
 */
export interface RosVSwitchProps {

    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    readonly cidrBlock: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    readonly ipv6CidrBlock?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVSwitch.TagsProperty[];

    /**
     * @Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
     */
    readonly vpcIpv6CidrBlock?: string | ros.IResolvable;

    /**
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vSwitchName?: string | ros.IResolvable;

    /**
     * @Property zoneType: The type of the zones to be queried. 
     * Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
     *
     */
    readonly zoneType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('cidrBlock', ros.requiredValidator)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('vSwitchName', ros.validateString)(properties.vSwitchName));
    errors.collect(ros.propertyValidator('vpcIpv6CidrBlock', ros.validateString)(properties.vpcIpv6CidrBlock));
    if(properties.ipv6CidrBlock && (typeof properties.ipv6CidrBlock) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateRange)({
            data: properties.ipv6CidrBlock,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateNumber)(properties.ipv6CidrBlock));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVSwitch_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('zoneType', ros.validateString)(properties.zoneType));
    return errors.wrap('supplied properties not correct for "RosVSwitchProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch` resource.
 */
// @ts-ignore TS6133
function rosVSwitchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVSwitchPropsValidator(properties).assertSuccess();
    }
    return {
      CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      Description: ros.stringToRosTemplate(properties.description),
      Ipv6CidrBlock: ros.numberToRosTemplate(properties.ipv6CidrBlock),
      Tags: ros.listMapper(rosVSwitchTagsPropertyToRosTemplate)(properties.tags),
      VpcIpv6CidrBlock: ros.stringToRosTemplate(properties.vpcIpv6CidrBlock),
      VSwitchName: ros.stringToRosTemplate(properties.vSwitchName),
      ZoneType: ros.stringToRosTemplate(properties.zoneType),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::VSwitch`
 */
export class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VSwitch";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CidrBlock: CIDR Block of created VSwitch
     */
    public readonly attrCidrBlock: ros.IResolvable;

    /**
     * @Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    public readonly attrIpv6CidrBlock: ros.IResolvable;

    /**
     * @Attribute VSwitchId: Id of created VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    public cidrBlock: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    public ipv6CidrBlock: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosVSwitch.TagsProperty[] | undefined;

    /**
     * @Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
     */
    public vpcIpv6CidrBlock: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public vSwitchName: string | ros.IResolvable | undefined;

    /**
     * @Property zoneType: The type of the zones to be queried. 
     * Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
     *
     */
    public zoneType: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECS::VSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCidrBlock = this.getAtt('CidrBlock');
        this.attrIpv6CidrBlock = this.getAtt('Ipv6CidrBlock');
        this.attrVSwitchId = this.getAtt('VSwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.vpcId = props.vpcId;
        this.zoneId = props.zoneId;
        this.description = props.description;
        this.ipv6CidrBlock = props.ipv6CidrBlock;
        this.tags = props.tags;
        this.vpcIpv6CidrBlock = props.vpcIpv6CidrBlock;
        this.vSwitchName = props.vSwitchName;
        this.zoneType = props.zoneType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidrBlock: this.cidrBlock,
            vpcId: this.vpcId,
            zoneId: this.zoneId,
            description: this.description,
            ipv6CidrBlock: this.ipv6CidrBlock,
            tags: this.tags,
            vpcIpv6CidrBlock: this.vpcIpv6CidrBlock,
            vSwitchName: this.vSwitchName,
            zoneType: this.zoneType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVSwitch {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVSwitch_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch.Tags` resource.
 */
// @ts-ignore TS6133
function rosVSwitchTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVSwitch_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
