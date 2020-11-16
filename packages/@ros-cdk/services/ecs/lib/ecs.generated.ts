// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`
 */
export interface RosAssignIpv6AddressesProps {

    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    readonly networkInterfaceId: string;

    /**
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6AddressCount?: number;

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
     * @Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    public readonly attrIpv6Addresses: any;

    /**
     * @Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    public readonly attrNetworkInterfaceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    public networkInterfaceId: string;

    /**
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    public ipv6AddressCount: number | undefined;

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
        this.attrIpv6Addresses = ros.Token.asString(this.getAtt('Ipv6Addresses'));
        this.attrNetworkInterfaceId = ros.Token.asString(this.getAtt('NetworkInterfaceId'));

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
    readonly networkInterfaceId: string;

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
    readonly secondaryPrivateIpAddressCount?: number;
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
    public readonly attrNetworkInterfaceId: any;

    /**
     * @Attribute PrivateIpAddresses: Assigned private ip addresses.
     */
    public readonly attrPrivateIpAddresses: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkInterfaceId: The ID of the ENI.
     */
    public networkInterfaceId: string;

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
    public secondaryPrivateIpAddressCount: number | undefined;

    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAssignPrivateIpAddressesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAssignPrivateIpAddresses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfaceId = ros.Token.asString(this.getAtt('NetworkInterfaceId'));
        this.attrPrivateIpAddresses = ros.Token.asString(this.getAtt('PrivateIpAddresses'));

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
     * @Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    readonly launchTemplateId: string;

    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    readonly totalTargetCapacity: string;

    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:// or https://.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly autoProvisioningGroupName?: string;

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
    readonly autoProvisioningGroupType?: string;

    /**
     * @Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    readonly defaultTargetCapacityType?: string;

    /**
     * @Property description: The description of the auto provisioning group.
     */
    readonly description?: string;

    /**
     * @Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
     */
    readonly excessCapacityTerminationPolicy?: string;

    /**
     * @Property launchTemplateConfig:
     */
    readonly launchTemplateConfig?: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    readonly launchTemplateVersion?: string;

    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    readonly maxSpotPrice?: number;

    /**
     * @Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    readonly payAsYouGoAllocationStrategy?: string;

    /**
     * @Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    readonly payAsYouGoTargetCapacity?: string;

    /**
     * @Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    readonly spotAllocationStrategy?: string;

    /**
     * @Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    readonly spotInstanceInterruptionBehavior?: string;

    /**
     * @Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    readonly spotInstancePoolsToUseCount?: number;

    /**
     * @Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    readonly spotTargetCapacity?: string;

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
    readonly validFrom?: string;

    /**
     * @Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
     */
    readonly validUntil?: string;
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
    errors.collect(ros.propertyValidator('launchTemplateId', ros.requiredValidator)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('launchTemplateConfig', ros.listValidator(RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator))(properties.launchTemplateConfig));
    errors.collect(ros.propertyValidator('payAsYouGoTargetCapacity', ros.validateString)(properties.payAsYouGoTargetCapacity));
    if(properties.spotInstanceInterruptionBehavior && (typeof properties.spotInstanceInterruptionBehavior) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstanceInterruptionBehavior', ros.validateAllowedValues)({
          data: properties.spotInstanceInterruptionBehavior,
          allowedValues: ["stop","terminate"],
        }));
    }
    errors.collect(ros.propertyValidator('spotInstanceInterruptionBehavior', ros.validateString)(properties.spotInstanceInterruptionBehavior));
    if(properties.autoProvisioningGroupType && (typeof properties.autoProvisioningGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('autoProvisioningGroupType', ros.validateAllowedValues)({
          data: properties.autoProvisioningGroupType,
          allowedValues: ["maintain","request"],
        }));
    }
    errors.collect(ros.propertyValidator('autoProvisioningGroupType', ros.validateString)(properties.autoProvisioningGroupType));
    errors.collect(ros.propertyValidator('validUntil', ros.validateString)(properties.validUntil));
    errors.collect(ros.propertyValidator('terminateInstancesWithExpiration', ros.validateBoolean)(properties.terminateInstancesWithExpiration));
    if(properties.defaultTargetCapacityType && (typeof properties.defaultTargetCapacityType) !== 'object') {
        errors.collect(ros.propertyValidator('defaultTargetCapacityType', ros.validateAllowedValues)({
          data: properties.defaultTargetCapacityType,
          allowedValues: ["PayAsYouGo","Spot"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultTargetCapacityType', ros.validateString)(properties.defaultTargetCapacityType));
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
      LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
      TotalTargetCapacity: ros.stringToRosTemplate(properties.totalTargetCapacity),
      AutoProvisioningGroupName: ros.stringToRosTemplate(properties.autoProvisioningGroupName),
      AutoProvisioningGroupType: ros.stringToRosTemplate(properties.autoProvisioningGroupType),
      DefaultTargetCapacityType: ros.stringToRosTemplate(properties.defaultTargetCapacityType),
      Description: ros.stringToRosTemplate(properties.description),
      ExcessCapacityTerminationPolicy: ros.stringToRosTemplate(properties.excessCapacityTerminationPolicy),
      LaunchTemplateConfig: ros.listMapper(rosAutoProvisioningGroupLaunchTemplateConfigPropertyToRosTemplate)(properties.launchTemplateConfig),
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
    public readonly attrAutoProvisioningGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    public launchTemplateId: string;

    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    public totalTargetCapacity: string;

    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:// or https://.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    public autoProvisioningGroupName: string | undefined;

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
    public autoProvisioningGroupType: string | undefined;

    /**
     * @Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    public defaultTargetCapacityType: string | undefined;

    /**
     * @Property description: The description of the auto provisioning group.
     */
    public description: string | undefined;

    /**
     * @Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
     */
    public excessCapacityTerminationPolicy: string | undefined;

    /**
     * @Property launchTemplateConfig:
     */
    public launchTemplateConfig: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    public launchTemplateVersion: string | undefined;

    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    public maxSpotPrice: number | undefined;

    /**
     * @Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    public payAsYouGoAllocationStrategy: string | undefined;

    /**
     * @Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    public payAsYouGoTargetCapacity: string | undefined;

    /**
     * @Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    public spotAllocationStrategy: string | undefined;

    /**
     * @Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    public spotInstanceInterruptionBehavior: string | undefined;

    /**
     * @Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    public spotInstancePoolsToUseCount: number | undefined;

    /**
     * @Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    public spotTargetCapacity: string | undefined;

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
    public validFrom: string | undefined;

    /**
     * @Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
     */
    public validUntil: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoProvisioningGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoProvisioningGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoProvisioningGroupId = ros.Token.asString(this.getAtt('AutoProvisioningGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTemplateId = props.launchTemplateId;
        this.totalTargetCapacity = props.totalTargetCapacity;
        this.autoProvisioningGroupName = props.autoProvisioningGroupName;
        this.autoProvisioningGroupType = props.autoProvisioningGroupType;
        this.defaultTargetCapacityType = props.defaultTargetCapacityType;
        this.description = props.description;
        this.excessCapacityTerminationPolicy = props.excessCapacityTerminationPolicy;
        this.launchTemplateConfig = props.launchTemplateConfig;
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
            launchTemplateId: this.launchTemplateId,
            totalTargetCapacity: this.totalTargetCapacity,
            autoProvisioningGroupName: this.autoProvisioningGroupName,
            autoProvisioningGroupType: this.autoProvisioningGroupType,
            defaultTargetCapacityType: this.defaultTargetCapacityType,
            description: this.description,
            excessCapacityTerminationPolicy: this.excessCapacityTerminationPolicy,
            launchTemplateConfig: this.launchTemplateConfig,
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
        readonly weightedCapacity?: number;
        /**
         * @Property priority: The priority of the instance type specified in the Nth extended configurations of
     * the launch template. A value of 0 indicates the highest priority.
         */
        readonly priority?: number;
        /**
         * @Property vSwitchId: The ID of the VSwitch in the Nth extended configurations of the launch template.
         */
        readonly vSwitchId: string;
        /**
         * @Property instanceType: The instance type of the Nth extended configurations of the launch template.
         */
        readonly instanceType?: string;
        /**
         * @Property maxPrice: The maximum price of the instance type specified in the Nth extended configurations
     * of the launch template.
         */
        readonly maxPrice: number;
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
    errors.collect(ros.propertyValidator('maxPrice', ros.requiredValidator)(properties.maxPrice));
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

/**
 * Properties for defining a `ALIYUN::ECS::AutoSnapshotPolicy`
 */
export interface RosAutoSnapshotPolicyProps {

    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    readonly diskIds: string[];

    /**
     * @Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    readonly repeatWeekdays: number[] | ros.IResolvable;

    /**
     * @Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    readonly retentionDays: number;

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
    readonly autoSnapshotPolicyName?: string;
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
    errors.collect(ros.propertyValidator('diskIds', ros.requiredValidator)(properties.diskIds));
    errors.collect(ros.propertyValidator('diskIds', ros.listValidator(ros.validateString))(properties.diskIds));
    errors.collect(ros.propertyValidator('timePoints', ros.requiredValidator)(properties.timePoints));
    errors.collect(ros.propertyValidator('timePoints', ros.listValidator(ros.validateAny))(properties.timePoints));
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
      DiskIds: ros.listMapper(ros.stringToRosTemplate)(properties.diskIds),
      RepeatWeekdays: ros.listMapper(ros.numberToRosTemplate)(properties.repeatWeekdays),
      RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
      TimePoints: ros.listMapper(ros.objectToRosTemplate)(properties.timePoints),
      AutoSnapshotPolicyName: ros.stringToRosTemplate(properties.autoSnapshotPolicyName),
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
    public readonly attrAutoSnapshotPolicyId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    public diskIds: string[];

    /**
     * @Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    public repeatWeekdays: number[] | ros.IResolvable;

    /**
     * @Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    public retentionDays: number;

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
    public autoSnapshotPolicyName: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoSnapshotPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoSnapshotPolicyId = ros.Token.asString(this.getAtt('AutoSnapshotPolicyId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskIds = props.diskIds;
        this.repeatWeekdays = props.repeatWeekdays;
        this.retentionDays = props.retentionDays;
        this.timePoints = props.timePoints;
        this.autoSnapshotPolicyName = props.autoSnapshotPolicyName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskIds: this.diskIds,
            repeatWeekdays: this.repeatWeekdays,
            retentionDays: this.retentionDays,
            timePoints: this.timePoints,
            autoSnapshotPolicyName: this.autoSnapshotPolicyName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoSnapshotPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::BandwidthPackage`
 */
export interface RosBandwidthPackageProps {

    /**
     * @Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
     */
    readonly bandwidth: number;

    /**
     * @Property ipCount: Total internet IPs of this Bandwidth package, [1-5]
     */
    readonly ipCount: number;

    /**
     * @Property natGatewayId: Create bandwidth package for specified NAT gateway
     */
    readonly natGatewayId: string;

    /**
     * @Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly bandwidthPackageName?: string;

    /**
     * @Property description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string;

    /**
     * @Property zoneId: The availability zone where the bandwidth package will be created.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthPackageName', ros.validateString)(properties.bandwidthPackageName));
    errors.collect(ros.propertyValidator('ipCount', ros.requiredValidator)(properties.ipCount));
    if(properties.ipCount && (typeof properties.ipCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipCount', ros.validateRange)({
            data: properties.ipCount,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('ipCount', ros.validateNumber)(properties.ipCount));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 5,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::BandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::BandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      IpCount: ros.numberToRosTemplate(properties.ipCount),
      NatGatewayId: ros.stringToRosTemplate(properties.natGatewayId),
      BandwidthPackageName: ros.stringToRosTemplate(properties.bandwidthPackageName),
      Description: ros.stringToRosTemplate(properties.description),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::BandwidthPackage`
 */
export class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::BandwidthPackage";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BandwidthPackageId: The bandwidth package id of created Bandwidth package.
     */
    public readonly attrBandwidthPackageId: any;

    /**
     * @Attribute BandwidthPackageIps: The allocated public IPs.
     */
    public readonly attrBandwidthPackageIps: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
     */
    public bandwidth: number;

    /**
     * @Property ipCount: Total internet IPs of this Bandwidth package, [1-5]
     */
    public ipCount: number;

    /**
     * @Property natGatewayId: Create bandwidth package for specified NAT gateway
     */
    public natGatewayId: string;

    /**
     * @Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public bandwidthPackageName: string | undefined;

    /**
     * @Property description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    public internetChargeType: string | undefined;

    /**
     * @Property zoneId: The availability zone where the bandwidth package will be created.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::BandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidthPackageId = ros.Token.asString(this.getAtt('BandwidthPackageId'));
        this.attrBandwidthPackageIps = ros.Token.asString(this.getAtt('BandwidthPackageIps'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.ipCount = props.ipCount;
        this.natGatewayId = props.natGatewayId;
        this.bandwidthPackageName = props.bandwidthPackageName;
        this.description = props.description;
        this.internetChargeType = props.internetChargeType;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            ipCount: this.ipCount,
            natGatewayId: this.natGatewayId,
            bandwidthPackageName: this.bandwidthPackageName,
            description: this.description,
            internetChargeType: this.internetChargeType,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::Command`
 */
export interface RosCommandProps {

    /**
     * @Property type: The type of command.
     */
    readonly type: string;

    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    readonly commandContent?: string;

    /**
     * @Property description: The description of command.
     */
    readonly description?: string;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of command.
     */
    readonly name?: string;

    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    readonly timeout?: number;

    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    readonly workingDir?: string;
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
    public readonly attrCommandId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property type: The type of command.
     */
    public type: string;

    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    public commandContent: string | undefined;

    /**
     * @Property description: The description of command.
     */
    public description: string | undefined;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    public enableParameter: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of command.
     */
    public name: string | undefined;

    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    public timeout: number | undefined;

    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    public workingDir: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::Command`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandId = ros.Token.asString(this.getAtt('CommandId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.type = props.type;
        this.commandContent = props.commandContent;
        this.description = props.description;
        this.enableParameter = props.enableParameter;
        this.name = props.name;
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
            timeout: this.timeout,
            workingDir: this.workingDir,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::CopyImage`
 */
export interface RosCopyImageProps {

    /**
     * @Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    readonly destinationRegionId: string;

    /**
     * @Property imageId: ID of the source custom image.
     */
    readonly imageId: string;

    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    readonly destinationDescription?: string;

    /**
     * @Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    readonly destinationImageName?: string;

    /**
     * @Property encrypted: Whether to encrypt the image.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    readonly kmsKeyId?: string;

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
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
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
     * @Attribute ImageId: ID of the source custom image.
     */
    public readonly attrImageId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    public destinationRegionId: string;

    /**
     * @Property imageId: ID of the source custom image.
     */
    public imageId: string;

    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    public destinationDescription: string | undefined;

    /**
     * @Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    public destinationImageName: string | undefined;

    /**
     * @Property encrypted: Whether to encrypt the image.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    public kmsKeyId: string | undefined;

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
        this.attrImageId = ros.Token.asString(this.getAtt('ImageId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationRegionId = props.destinationRegionId;
        this.imageId = props.imageId;
        this.destinationDescription = props.destinationDescription;
        this.destinationImageName = props.destinationImageName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
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
        readonly value?: string;
        /**
         * @Property key: Custom image tag key.
         */
        readonly key?: string;
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
    readonly architecture?: string;

    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    readonly description?: string;

    /**
     * @Property diskDeviceMapping:
     */
    readonly diskDeviceMapping?: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    readonly imageName?: string;

    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId?: string;

    /**
     * @Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    readonly platform?: string;

    /**
     * @Property resourceGroupId: The enterprise resource group ID where the custom image is located.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    readonly snapshotId?: string;

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
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('architecture', ros.validateString)(properties.architecture));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
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
      ImageName: ros.stringToRosTemplate(properties.imageName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Platform: ros.stringToRosTemplate(properties.platform),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
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
    public readonly attrImageId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    public architecture: string | undefined;

    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    public description: string | undefined;

    /**
     * @Property diskDeviceMapping:
     */
    public diskDeviceMapping: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    public imageName: string | undefined;

    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | undefined;

    /**
     * @Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    public platform: string | undefined;

    /**
     * @Property resourceGroupId: The enterprise resource group ID where the custom image is located.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    public snapshotId: string | undefined;

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
        this.attrImageId = ros.Token.asString(this.getAtt('ImageId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.architecture = props.architecture;
        this.description = props.description;
        this.diskDeviceMapping = props.diskDeviceMapping;
        this.imageName = props.imageName;
        this.instanceId = props.instanceId;
        this.platform = props.platform;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
        this.tag = props.tag;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            architecture: this.architecture,
            description: this.description,
            diskDeviceMapping: this.diskDeviceMapping,
            imageName: this.imageName,
            instanceId: this.instanceId,
            platform: this.platform,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
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
        readonly diskType?: string;
        /**
         * @Property snapshotId: The snapshot ID of the disk DiskDeviceMapping.N..
         */
        readonly snapshotId?: string;
        /**
         * @Property device: Specify the device name in DiskMirrorMapping.N. in the custom image. Value range: /dev/xvda~/dev/xvdz
         */
        readonly device?: string;
        /**
         * @Property size: The size of a disk. The unit of measurement is GiB. Value range: [5, 2000] GiB.
     * The default value is the value of snapshot size (DiskDeviceMapping.N.SnapshotId) if you do not specify this parameter.
     * If you do not specify the snapshot ID (DiskDeviceMapping.N.SnapshotId), the default size is 5 GiB.
     * The size value cannot be less than the size of the snapshot (DiskDeviceMapping.N.SnapshotId).
     * The value range of n in DiskDeviceMapping.n is: [1, 17].
     * n =1: Indicates the specified disk is a system disk.
     * n =2, 3, ...17: Indicates the specified disk is a data disk.
         */
        readonly size?: number;
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
        readonly value?: string;
        /**
         * @Property key: The key of a tag of which n is from 1 to 20. Once you use this parameter, it cannot be a null string. It can be up to 64 characters in length. It cannot begin with "aliyun", "acs:", "http://", or "https://".
         */
        readonly key?: string;
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
    readonly dedicatedHostType: string;

    /**
     * @Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    readonly actionOnMaintenance?: string;

    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    readonly autoPlacement?: string;

    /**
     * @Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly chargeType?: string;

    /**
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    readonly dedicatedHostName?: string;

    /**
     * @Property description: The description of host.
     */
    readonly description?: string;

    /**
     * @Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesSlbUdpTimeout?: number;

    /**
     * @Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesUdpTimeout?: number;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string;

    /**
     * @Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    readonly quantity?: number;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property zoneId: The zone to create the host.
     */
    readonly zoneId?: string;
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
          allowedValues: [1,2,3,6,12],
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
    if(properties.quantity && (typeof properties.quantity) !== 'object') {
        errors.collect(ros.propertyValidator('quantity', ros.validateRange)({
            data: properties.quantity,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.requiredValidator)(properties.dedicatedHostType));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.validateString)(properties.dedicatedHostType));
    errors.collect(ros.propertyValidator('dedicatedHostName', ros.validateString)(properties.dedicatedHostName));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PrePaid","PostPaid"],
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrDedicatedHostIds: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostType: The instance type of host.
     */
    public dedicatedHostType: string;

    /**
     * @Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    public actionOnMaintenance: string | undefined;

    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    public autoPlacement: string | undefined;

    /**
     * @Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public chargeType: string | undefined;

    /**
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    public dedicatedHostName: string | undefined;

    /**
     * @Property description: The description of host.
     */
    public description: string | undefined;

    /**
     * @Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    public networkAttributesSlbUdpTimeout: number | undefined;

    /**
     * @Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    public networkAttributesUdpTimeout: number | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    public period: number | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    public periodUnit: string | undefined;

    /**
     * @Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    public quantity: number | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property zoneId: The zone to create the host.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::DedicatedHost`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostIds = ros.Token.asString(this.getAtt('DedicatedHostIds'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));

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
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::DedicatedHost", props.tags, { tagPropertyName: 'tags' });
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
            tags: this.tags.renderTags(),
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly deploymentSetName?: string;

    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    readonly onUnableToRedeployFailedInstance?: string;
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
    public readonly attrDeploymentSetId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    public deploymentSetName: string | undefined;

    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    public description: string | undefined;

    /**
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    public onUnableToRedeployFailedInstance: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::DeploymentSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentSetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeploymentSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeploymentSetId = ros.Token.asString(this.getAtt('DeploymentSetId'));

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
    readonly zoneId: string;

    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly autoSnapshotPolicyId?: string;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.
     */
    readonly diskCategory?: string;

    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly diskName?: string;

    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    readonly kmsKeyId?: string;

    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly performanceLevel?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property size: The size of the disk unit in GB.
     */
    readonly size?: number;

    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    readonly snapshotId?: string;

    /**
     * @Property storageSetId: Storage set ID.
     */
    readonly storageSetId?: string;

    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    readonly storageSetPartitionNumber?: number;

    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
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
    if(properties.diskCategory && (typeof properties.diskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('diskCategory', ros.validateAllowedValues)({
          data: properties.diskCategory,
          allowedValues: ["cloud","cloud_ssd","cloud_essd","cloud_efficiency","san_ssd","san_efficiency"],
        }));
    }
    errors.collect(ros.propertyValidator('diskCategory', ros.validateString)(properties.diskCategory));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('storageSetPartitionNumber', ros.validateNumber)(properties.storageSetPartitionNumber));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('storageSetId', ros.validateString)(properties.storageSetId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      DeleteAutoSnapshot: ros.booleanToRosTemplate(properties.deleteAutoSnapshot),
      Description: ros.stringToRosTemplate(properties.description),
      DiskCategory: ros.stringToRosTemplate(properties.diskCategory),
      DiskName: ros.stringToRosTemplate(properties.diskName),
      Encrypted: ros.booleanToRosTemplate(properties.encrypted),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Size: ros.numberToRosTemplate(properties.size),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      StorageSetId: ros.stringToRosTemplate(properties.storageSetId),
      StorageSetPartitionNumber: ros.numberToRosTemplate(properties.storageSetPartitionNumber),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrDiskId: any;

    /**
     * @Attribute Status: Created disk status.
     */
    public readonly attrStatus: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property zoneId: The availability zone in which the volume will be created.
     */
    public zoneId: string;

    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public autoSnapshotPolicyId: string | undefined;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    public deleteAutoSnapshot: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.
     */
    public diskCategory: string | undefined;

    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public diskName: string | undefined;

    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    public kmsKeyId: string | undefined;

    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public performanceLevel: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property size: The size of the disk unit in GB.
     */
    public size: number | undefined;

    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    public snapshotId: string | undefined;

    /**
     * @Property storageSetId: Storage set ID.
     */
    public storageSetId: string | undefined;

    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    public storageSetPartitionNumber: number | undefined;

    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * Create a new `ALIYUN::ECS::Disk`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDisk.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskId = ros.Token.asString(this.getAtt('DiskId'));
        this.attrStatus = ros.Token.asString(this.getAtt('Status'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.zoneId = props.zoneId;
        this.autoSnapshotPolicyId = props.autoSnapshotPolicyId;
        this.deleteAutoSnapshot = props.deleteAutoSnapshot;
        this.description = props.description;
        this.diskCategory = props.diskCategory;
        this.diskName = props.diskName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
        this.performanceLevel = props.performanceLevel;
        this.resourceGroupId = props.resourceGroupId;
        this.size = props.size;
        this.snapshotId = props.snapshotId;
        this.storageSetId = props.storageSetId;
        this.storageSetPartitionNumber = props.storageSetPartitionNumber;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::Disk", props.tags, { tagPropertyName: 'tags' });
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            zoneId: this.zoneId,
            autoSnapshotPolicyId: this.autoSnapshotPolicyId,
            deleteAutoSnapshot: this.deleteAutoSnapshot,
            description: this.description,
            diskCategory: this.diskCategory,
            diskName: this.diskName,
            encrypted: this.encrypted,
            kmsKeyId: this.kmsKeyId,
            performanceLevel: this.performanceLevel,
            resourceGroupId: this.resourceGroupId,
            size: this.size,
            snapshotId: this.snapshotId,
            storageSetId: this.storageSetId,
            storageSetPartitionNumber: this.storageSetPartitionNumber,
            tags: this.tags.renderTags(),
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::DiskAttachment`
 */
export interface RosDiskAttachmentProps {

    /**
     * @Property diskId: The disk id to attached.
     */
    readonly diskId: string;

    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    readonly instanceId: string;

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
    readonly device?: string;
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
    public readonly attrDevice: any;

    /**
     * @Attribute DiskId: The disk id of created disk
     */
    public readonly attrDiskId: any;

    /**
     * @Attribute Status: The disk status now.
     */
    public readonly attrStatus: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: The disk id to attached.
     */
    public diskId: string;

    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    public instanceId: string;

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
    public device: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::DiskAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDevice = ros.Token.asString(this.getAtt('Device'));
        this.attrDiskId = ros.Token.asString(this.getAtt('DiskId'));
        this.attrStatus = ros.Token.asString(this.getAtt('Status'));

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
    readonly externalIp: string;

    /**
     * @Property externalPort: Source port, now support [1-65535]|Any
     */
    readonly externalPort: string;

    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    readonly forwardTableId: string;

    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    readonly internalIp: string;

    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any
     */
    readonly internalPort: string;

    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string;
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
    errors.collect(ros.propertyValidator('internalPort', ros.requiredValidator)(properties.internalPort));
    errors.collect(ros.propertyValidator('internalPort', ros.validateString)(properties.internalPort));
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
    public readonly attrForwardEntryId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    public externalIp: string;

    /**
     * @Property externalPort: Source port, now support [1-65535]|Any
     */
    public externalPort: string;

    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    public forwardTableId: string;

    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    public internalIp: string;

    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any
     */
    public internalPort: string;

    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    public ipProtocol: string;

    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosForwardEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosForwardEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrForwardEntryId = ros.Token.asString(this.getAtt('ForwardEntryId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.externalIp = props.externalIp;
        this.externalPort = props.externalPort;
        this.forwardTableId = props.forwardTableId;
        this.internalIp = props.internalIp;
        this.internalPort = props.internalPort;
        this.ipProtocol = props.ipProtocol;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            externalIp: this.externalIp,
            externalPort: this.externalPort,
            forwardTableId: this.forwardTableId,
            internalIp: this.internalIp,
            internalPort: this.internalPort,
            ipProtocol: this.ipProtocol,
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
    readonly name: string;

    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    readonly description?: string;
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
    public readonly attrHpcClusterId: any;

    /**
     * @Attribute Name: The name of the HPC cluster.
     */
    public readonly attrName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    public name: string;

    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    public description: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::HpcCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHpcClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHpcCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHpcClusterId = ros.Token.asString(this.getAtt('HpcClusterId'));
        this.attrName = ros.Token.asString(this.getAtt('Name'));

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
    readonly imageId: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly instanceChargeType?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    readonly ioOptimized?: string;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
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
          allowedValues: ["PrePaid","PostPaid"],
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
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
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
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
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
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      UserData: ros.stringToRosTemplate(properties.userData),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
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
    public readonly attrHostName: any;

    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIp: any;

    /**
     * @Attribute InstanceId: The instance id of created ecs instance
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface id of created instance.
     */
    public readonly attrPrimaryNetworkInterfaceId: any;

    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIp: any;

    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    public readonly attrPublicIp: any;

    /**
     * @Attribute ZoneId: Zone id of created instance.
     */
    public readonly attrZoneId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    public allocatePublicIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    public dedicatedHostId: string | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    public deploymentSetId: string | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    public diskMappings: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    public hostName: string | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    public hpcClusterId: string | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public instanceChargeType: string | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    public internetChargeType: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    public ioOptimized: string | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    public period: number | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    public periodUnit: string | undefined;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    public systemDiskCategory: string | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    public systemDiskDescription: string | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    public systemDiskDiskName: string | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public systemDiskPerformanceLevel: string | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostName = ros.Token.asString(this.getAtt('HostName'));
        this.attrInnerIp = ros.Token.asString(this.getAtt('InnerIp'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrPrimaryNetworkInterfaceId = ros.Token.asString(this.getAtt('PrimaryNetworkInterfaceId'));
        this.attrPrivateIp = ros.Token.asString(this.getAtt('PrivateIp'));
        this.attrPublicIp = ros.Token.asString(this.getAtt('PublicIp'));
        this.attrZoneId = ros.Token.asString(this.getAtt('ZoneId'));

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
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::Instance", props.tags, { tagPropertyName: 'tags' });
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
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
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            keyPairName: this.keyPairName,
            password: this.password,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags.renderTags(),
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
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
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
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
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
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

/**
 * Properties for defining a `ALIYUN::ECS::InstanceClone`
 */
export interface RosInstanceCloneProps {

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    readonly backendServerWeight?: number;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly instanceChargeType?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    readonly loadBalancerIdToAttach?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
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
          allowedValues: ["PrePaid","PostPaid"],
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
            min: 1,
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrHostName: any;

    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIp: any;

    /**
     * @Attribute InstanceId: The instance id of created ecs instance
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface id of created instance.
     */
    public readonly attrPrimaryNetworkInterfaceId: any;

    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIp: any;

    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    public readonly attrPublicIp: any;

    /**
     * @Attribute ZoneId: Zone id of created instance.
     */
    public readonly attrZoneId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    public sourceInstanceId: string;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    public backendServerWeight: number | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    public diskMappings: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public instanceChargeType: string | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | undefined;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    public loadBalancerIdToAttach: string | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    public period: number | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostName = ros.Token.asString(this.getAtt('HostName'));
        this.attrInnerIp = ros.Token.asString(this.getAtt('InnerIp'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrPrimaryNetworkInterfaceId = ros.Token.asString(this.getAtt('PrimaryNetworkInterfaceId'));
        this.attrPrivateIp = ros.Token.asString(this.getAtt('PrivateIp'));
        this.attrPublicIp = ros.Token.asString(this.getAtt('PublicIp'));
        this.attrZoneId = ros.Token.asString(this.getAtt('ZoneId'));

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
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::InstanceClone", props.tags, { tagPropertyName: 'tags' });
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
            tags: this.tags.renderTags(),
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
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
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
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
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

/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroup`
 */
export interface RosInstanceGroupProps {

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string;

    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string;

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
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components. 
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
    readonly hostName?: string;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    readonly instanceChargeType?: string;

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
    readonly instanceName?: string;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    readonly ioOptimized?: string;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6AddressCount?: number;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    readonly networkType?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly period?: number;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
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
          allowedValues: ["PrePaid","PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
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
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
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
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
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
    if(properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
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
    if(properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
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
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
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
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
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
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosInstanceGroup_EniMappingsPropertyValidator))(properties.eniMappings));
    if(properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
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
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
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
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      UserData: ros.stringToRosTemplate(properties.userData),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
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
     * @Attribute HostNames: Host names of created instance.
     */
    public readonly attrHostNames: any;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIps: any;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    public readonly attrInstanceIds: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIps: any;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public readonly attrPublicIps: any;

    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    public readonly attrZoneIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string;

    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    public maxAmount: number;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    public allocatePublicIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    public dedicatedHostId: string | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    public deploymentSetId: string | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    public description: string | undefined;

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
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components. 
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
    public hostName: string | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    public hpcClusterId: string | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    public instanceChargeType: string | undefined;

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
    public instanceName: string | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    public internetChargeType: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    public ioOptimized: string | undefined;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6AddressCount: number | undefined;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    public keyPairName: string | undefined;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateId: string | undefined;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateName: string | undefined;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    public launchTemplateVersion: string | undefined;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    public networkType: string | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    public period: number | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    public periodUnit: string | undefined;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    public securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | undefined;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public systemDiskAutoSnapshotPolicyId: string | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    public systemDiskCategory: string | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    public systemDiskDescription: string | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    public systemDiskDiskName: string | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public systemDiskPerformanceLevel: string | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::InstanceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = ros.Token.asString(this.getAtt('HostNames'));
        this.attrInnerIps = ros.Token.asString(this.getAtt('InnerIps'));
        this.attrInstanceIds = ros.Token.asString(this.getAtt('InstanceIds'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPrivateIps = ros.Token.asString(this.getAtt('PrivateIps'));
        this.attrPublicIps = ros.Token.asString(this.getAtt('PublicIps'));
        this.attrZoneIds = ros.Token.asString(this.getAtt('ZoneIds'));

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
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
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
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::InstanceGroup", props.tags, { tagPropertyName: 'tags' });
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
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
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
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
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags.renderTags(),
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
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
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
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
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
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
    };
}

export namespace RosInstanceGroup {
    /**
     * @stability external
     */
    export interface EniMappingsProperty {
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId: string;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId: string;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         */
        readonly primaryIpAddress?: string;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
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
      Description: ros.stringToRosTemplate(properties.description),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroupClone`
 */
export interface RosInstanceGroupCloneProps {

    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    readonly backendServerWeight?: number;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string;

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
    readonly hpcClusterId?: string;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string;

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
    readonly instanceName?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6AddressCount?: number;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    readonly loadBalancerIdToAttach?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly period?: number;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceGroupClone_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
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
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
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
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosInstanceGroupClone_EniMappingsPropertyValidator))(properties.eniMappings));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
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
            min: 1,
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
          allowedValues: ["Week","Month"],
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
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
     * @Attribute HostNames: Host names of created instance.
     */
    public readonly attrHostNames: any;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIps: any;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    public readonly attrInstanceIds: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIps: any;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public readonly attrPublicIps: any;

    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    public readonly attrZoneIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    public maxAmount: number;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    public sourceInstanceId: string;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | undefined;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    public backendServerWeight: number | undefined;

    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    public deploymentSetId: string | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    public description: string | undefined;

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
    public hpcClusterId: string | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | undefined;

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
    public instanceName: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | undefined;

    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6AddressCount: number | undefined;

    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    public ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    public keyPairName: string | undefined;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateId: string | undefined;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateName: string | undefined;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    public launchTemplateVersion: string | undefined;

    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    public loadBalancerIdToAttach: string | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    public period: number | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    public periodUnit: string | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    public securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    public spotStrategy: string | undefined;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public systemDiskAutoSnapshotPolicyId: string | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    public systemDiskCategory: string | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    public systemDiskDescription: string | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    public systemDiskDiskName: string | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::InstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = ros.Token.asString(this.getAtt('HostNames'));
        this.attrInnerIps = ros.Token.asString(this.getAtt('InnerIps'));
        this.attrInstanceIds = ros.Token.asString(this.getAtt('InstanceIds'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPrivateIps = ros.Token.asString(this.getAtt('PrivateIps'));
        this.attrPublicIps = ros.Token.asString(this.getAtt('PublicIps'));
        this.attrZoneIds = ros.Token.asString(this.getAtt('ZoneIds'));

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
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::InstanceGroupClone", props.tags, { tagPropertyName: 'tags' });
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
            period: this.period,
            periodUnit: this.periodUnit,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            tags: this.tags.renderTags(),
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
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
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
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
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
    };
}

export namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    export interface EniMappingsProperty {
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId: string;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId: string;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         */
        readonly primaryIpAddress?: string;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
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
      Description: ros.stringToRosTemplate(properties.description),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::Invocation`
 */
export interface RosInvocationProps {

    /**
     * @Property commandId: The id of command.
     */
    readonly commandId: string;

    /**
     * @Property instanceIds: The instance id list. Select up to 50 instances at a time.Instances status must be running.
     */
    readonly instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    readonly frequency?: string;

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
    errors.collect(ros.propertyValidator('commandId', ros.requiredValidator)(properties.commandId));
    errors.collect(ros.propertyValidator('commandId', ros.validateString)(properties.commandId));
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
      CommandId: ros.stringToRosTemplate(properties.commandId),
      InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
      Frequency: ros.stringToRosTemplate(properties.frequency),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
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
    public readonly attrInvokeId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commandId: The id of command.
     */
    public commandId: string;

    /**
     * @Property instanceIds: The instance id list. Select up to 50 instances at a time.Instances status must be running.
     */
    public instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    public frequency: string | undefined;

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
        this.attrInvokeId = ros.Token.asString(this.getAtt('InvokeId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandId = props.commandId;
        this.instanceIds = props.instanceIds;
        this.frequency = props.frequency;
        this.parameters = props.parameters;
        this.timed = props.timed;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commandId: this.commandId,
            instanceIds: this.instanceIds,
            frequency: this.frequency,
            parameters: this.parameters,
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
    readonly securityGroupId: string;

    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    readonly instanceId?: string;

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
    public securityGroupId: string;

    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    public instanceId: string | undefined;

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
    readonly launchTemplateName: string;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters.
     */
    readonly description?: string;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    readonly diskMappings?: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType?: string;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second). The range is [1,200].
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    readonly ioOptimized?: string;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    readonly networkInterfaces?: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    readonly networkType?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    readonly securityEnhancementStrategy?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    readonly spotStrategy?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number;

    /**
     * @Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property templateTags: Template tags to attach to launch template.
     */
    readonly templateTags?: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    readonly userData?: string;

    /**
     * @Property versionDescription: Description for version 1 of launch template.
     */
    readonly versionDescription?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: Current zone to create the instance.
     */
    readonly zoneId?: string;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
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
    if(properties.templateTags && (Array.isArray(properties.templateTags) || (typeof properties.templateTags) === 'string')) {
        errors.collect(ros.propertyValidator('templateTags', ros.validateLength)({
            data: properties.templateTags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('templateTags', ros.listValidator(RosLaunchTemplate_TemplateTagsPropertyValidator))(properties.templateTags));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
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
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
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
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
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
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosLaunchTemplateDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      HostName: ros.stringToRosTemplate(properties.hostName),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      NetworkInterfaces: ros.listMapper(rosLaunchTemplateNetworkInterfacesPropertyToRosTemplate)(properties.networkInterfaces),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrDefaultVersionNumber: any;

    /**
     * @Attribute LatestVersionNumber: The latest version number of launch template.
     */
    public readonly attrLatestVersionNumber: any;

    /**
     * @Attribute LaunchTemplateId: The id of launch template.
     */
    public readonly attrLaunchTemplateId: any;

    /**
     * @Attribute LaunchTemplateName: The name of launch template.
     */
    public readonly attrLaunchTemplateName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property launchTemplateName: The name of launch template.
     */
    public launchTemplateName: string;

    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    public autoReleaseTime: string | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters.
     */
    public description: string | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    public diskMappings: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    public hostName: string | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | undefined;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    public internetChargeType: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second). The range is [1,200].
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    public ioOptimized: string | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | undefined;

    /**
     * @Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    public networkInterfaces: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    public networkType: string | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    public securityEnhancementStrategy: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    public spotPriceLimit: string | undefined;

    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    public spotStrategy: string | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    public systemDiskCategory: string | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    public systemDiskDescription: string | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    public systemDiskDiskName: string | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | undefined;

    /**
     * @Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property templateTags: Template tags to attach to launch template.
     */
    public templateTags: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    public userData: string | undefined;

    /**
     * @Property versionDescription: Description for version 1 of launch template.
     */
    public versionDescription: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: Current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLaunchTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLaunchTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDefaultVersionNumber = ros.Token.asString(this.getAtt('DefaultVersionNumber'));
        this.attrLatestVersionNumber = ros.Token.asString(this.getAtt('LatestVersionNumber'));
        this.attrLaunchTemplateId = ros.Token.asString(this.getAtt('LaunchTemplateId'));
        this.attrLaunchTemplateName = ros.Token.asString(this.getAtt('LaunchTemplateName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTemplateName = props.launchTemplateName;
        this.autoReleaseTime = props.autoReleaseTime;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.imageId = props.imageId;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.keyPairName = props.keyPairName;
        this.networkInterfaces = props.networkInterfaces;
        this.networkType = props.networkType;
        this.ramRoleName = props.ramRoleName;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::LaunchTemplate", props.tags, { tagPropertyName: 'tags' });
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
            description: this.description,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            imageId: this.imageId,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            keyPairName: this.keyPairName,
            networkInterfaces: this.networkInterfaces,
            networkType: this.networkType,
            ramRoleName: this.ramRoleName,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags.renderTags(),
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
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters.
         */
        readonly description?: string;
        /**
         * @Property encrypted: Whether data disk is encrypted.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768] ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size?: string;
        /**
         * @Property deleteWithInstance: Whether data disk should be released with instance.
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
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
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
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
        readonly description?: string;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC.
         */
        readonly vSwitchId?: string;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.
         */
        readonly primaryIpAddress?: string;
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
    export interface TemplateTagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string;
        /**
         * @Property key: undefined
         */
        readonly key?: string;
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
 * Properties for defining a `ALIYUN::ECS::NatGateway`
 */
export interface RosNatGatewayProps {

    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string;

    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string;

    /**
     * @Property spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
     */
    readonly spec?: string;

    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId?: string;
}

/**
 * Determine whether the given properties match those of a `RosNatGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('natGatewayName', ros.validateString)(properties.natGatewayName));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosNatGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NatGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NatGateway` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Description: ros.stringToRosTemplate(properties.description),
      NatGatewayName: ros.stringToRosTemplate(properties.natGatewayName),
      Spec: ros.stringToRosTemplate(properties.spec),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::NatGateway`
 */
export class RosNatGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NatGateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BandwidthPackageIds: The bandwidth package ids of created NAT gateway.
     */
    public readonly attrBandwidthPackageIds: any;

    /**
     * @Attribute BandwidthPackageIps: The allocated public IPs.
     */
    public readonly attrBandwidthPackageIps: any;

    /**
     * @Attribute ForwardTableId: The forward table id.
     */
    public readonly attrForwardTableId: any;

    /**
     * @Attribute NatGatewayId: The Id of created NAT gateway.
     */
    public readonly attrNatGatewayId: any;

    /**
     * @Attribute SNatTableId: The SNAT table id.
     */
    public readonly attrSNatTableId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    public vpcId: string;

    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public natGatewayName: string | undefined;

    /**
     * @Property spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
     */
    public spec: string | undefined;

    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::NatGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidthPackageIds = ros.Token.asString(this.getAtt('BandwidthPackageIds'));
        this.attrBandwidthPackageIps = ros.Token.asString(this.getAtt('BandwidthPackageIps'));
        this.attrForwardTableId = ros.Token.asString(this.getAtt('ForwardTableId'));
        this.attrNatGatewayId = ros.Token.asString(this.getAtt('NatGatewayId'));
        this.attrSNatTableId = ros.Token.asString(this.getAtt('SNatTableId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.deletionForce = props.deletionForce;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.natGatewayName = props.natGatewayName;
        this.spec = props.spec;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::NatGateway", props.tags, { tagPropertyName: 'tags' });
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            deletionForce: this.deletionForce,
            deletionProtection: this.deletionProtection,
            description: this.description,
            natGatewayName: this.natGatewayName,
            spec: this.spec,
            tags: this.tags.renderTags(),
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterface`
 */
export interface RosNetworkInterfaceProps {

    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    readonly vSwitchId: string;

    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    readonly description?: string;

    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string;

    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    readonly primaryIpAddress?: string;

    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    readonly privateIpAddresses?: string[];

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    readonly securityGroupIds?: string[];
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
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
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
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
      PrivateIpAddresses: ros.listMapper(ros.stringToRosTemplate)(properties.privateIpAddresses),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
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
    public readonly attrMacAddress: any;

    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: any;

    /**
     * @Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    public readonly attrPrivateIpAddress: any;

    /**
     * @Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    public readonly attrSecondaryPrivateIpAddresses: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    public vSwitchId: string;

    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    public description: string | undefined;

    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    public networkInterfaceName: string | undefined;

    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    public primaryIpAddress: string | undefined;

    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    public privateIpAddresses: string[] | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    public securityGroupIds: string[] | undefined;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterface.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMacAddress = ros.Token.asString(this.getAtt('MacAddress'));
        this.attrNetworkInterfaceId = ros.Token.asString(this.getAtt('NetworkInterfaceId'));
        this.attrPrivateIpAddress = ros.Token.asString(this.getAtt('PrivateIpAddress'));
        this.attrSecondaryPrivateIpAddresses = ros.Token.asString(this.getAtt('SecondaryPrivateIpAddresses'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.networkInterfaceName = props.networkInterfaceName;
        this.primaryIpAddress = props.primaryIpAddress;
        this.privateIpAddresses = props.privateIpAddresses;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vSwitchId: this.vSwitchId,
            description: this.description,
            networkInterfaceName: this.networkInterfaceName,
            primaryIpAddress: this.primaryIpAddress,
            privateIpAddresses: this.privateIpAddresses,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkInterfacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export interface RosNetworkInterfaceAttachmentProps {

    /**
     * @Property instanceId: ECS instance id
     */
    readonly instanceId: string;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string;

    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    readonly trunkNetworkInstanceId?: string;
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
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: any;

    /**
     * @Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    public readonly attrTrunkNetworkInstanceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: ECS instance id
     */
    public instanceId: string;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    public networkInterfaceId: string;

    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    public trunkNetworkInstanceId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfaceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfaceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterfaceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfaceId = ros.Token.asString(this.getAtt('NetworkInterfaceId'));
        this.attrTrunkNetworkInstanceId = ros.Token.asString(this.getAtt('TrunkNetworkInstanceId'));

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
    readonly accountId: string;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string;

    /**
     * @Property permission: the permission
     */
    readonly permission: string;
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
    public readonly attrNetworkInterfacePermissionId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountId: the account id
     */
    public accountId: string;

    /**
     * @Property networkInterfaceId: Network interface id
     */
    public networkInterfaceId: string;

    /**
     * @Property permission: the permission
     */
    public permission: string;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfacePermissionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterfacePermission.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfacePermissionId = ros.Token.asString(this.getAtt('NetworkInterfacePermissionId'));

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
 * Properties for defining a `ALIYUN::ECS::PrepayInstance`
 */
export interface RosPrepayInstanceProps {

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string;

    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    readonly maxAmount: number;

    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    readonly minAmount: number;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType: string;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosPrepayInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly instanceChargeType?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
     */
    readonly internetChargeType?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support true or false, Default is true.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosPrepayInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosPrepayInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('periodType', ros.requiredValidator)(properties.periodType));
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Monthly","Yearly"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosPrepayInstance_DiskMappingsPropertyValidator))(properties.diskMappings));
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
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('maxAmount', ros.requiredValidator)(properties.maxAmount));
    if(properties.maxAmount && (typeof properties.maxAmount) !== 'object') {
        errors.collect(ros.propertyValidator('maxAmount', ros.validateRange)({
            data: properties.maxAmount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('maxAmount', ros.validateNumber)(properties.maxAmount));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('minAmount', ros.requiredValidator)(properties.minAmount));
    if(properties.minAmount && (typeof properties.minAmount) !== 'object') {
        errors.collect(ros.propertyValidator('minAmount', ros.validateRange)({
            data: properties.minAmount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('minAmount', ros.validateNumber)(properties.minAmount));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateBoolean)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosPrepayInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosPrepayInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstance` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrepayInstancePropsValidator(properties).assertSuccess();
    }
    return {
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      MaxAmount: ros.numberToRosTemplate(properties.maxAmount),
      MinAmount: ros.numberToRosTemplate(properties.minAmount),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      AllocatePublicIP: ros.booleanToRosTemplate(properties.allocatePublicIp),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosPrepayInstanceDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      HostName: ros.stringToRosTemplate(properties.hostName),
      HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.booleanToRosTemplate(properties.ioOptimized),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      UserData: ros.stringToRosTemplate(properties.userData),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::PrepayInstance`
 */
export class RosPrepayInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrepayInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HostNames: Host names of created instance.
     */
    public readonly attrHostNames: any;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIps: any;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    public readonly attrInstanceIds: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIps: any;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public readonly attrPublicIps: any;

    /**
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    public readonly attrRelatedOrderIds: any;

    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    public readonly attrZoneIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string;

    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    public instanceType: string;

    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    public maxAmount: number;

    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    public minAmount: number;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    public period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string;

    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    public allocatePublicIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    public dedicatedHostId: string | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    public deploymentSetId: string | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    public diskMappings: Array<RosPrepayInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    public hostName: string | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    public hpcClusterId: string | undefined;

    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    public instanceChargeType: string | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
     */
    public internetChargeType: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support true or false, Default is true.
     */
    public ioOptimized: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    public periodUnit: string | undefined;

    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    public systemDiskCategory: string | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    public systemDiskDescription: string | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    public systemDiskDiskName: string | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    public systemDiskPerformanceLevel: string | undefined;

    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    public systemDiskSize: number | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrepayInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = ros.Token.asString(this.getAtt('HostNames'));
        this.attrInnerIps = ros.Token.asString(this.getAtt('InnerIps'));
        this.attrInstanceIds = ros.Token.asString(this.getAtt('InstanceIds'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPrivateIps = ros.Token.asString(this.getAtt('PrivateIps'));
        this.attrPublicIps = ros.Token.asString(this.getAtt('PublicIps'));
        this.attrRelatedOrderIds = ros.Token.asString(this.getAtt('RelatedOrderIds'));
        this.attrZoneIds = ros.Token.asString(this.getAtt('ZoneIds'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.maxAmount = props.maxAmount;
        this.minAmount = props.minAmount;
        this.period = props.period;
        this.periodType = props.periodType;
        this.allocatePublicIp = props.allocatePublicIp;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dedicatedHostId = props.dedicatedHostId;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.hpcClusterId = props.hpcClusterId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.securityGroupId = props.securityGroupId;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::PrepayInstance", props.tags, { tagPropertyName: 'tags' });
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            maxAmount: this.maxAmount,
            minAmount: this.minAmount,
            period: this.period,
            periodType: this.periodType,
            allocatePublicIp: this.allocatePublicIp,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dedicatedHostId: this.dedicatedHostId,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            hpcClusterId: this.hpcClusterId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            keyPairName: this.keyPairName,
            password: this.password,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            securityGroupId: this.securityGroupId,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags.renderTags(),
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrepayInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstance.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstance.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_DiskMappingsPropertyValidator(properties).assertSuccess();
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

/**
 * Properties for defining a `ALIYUN::ECS::PrepayInstanceGroupClone`
 */
export interface RosPrepayInstanceGroupCloneProps {

    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    readonly maxAmount: number;

    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    readonly minAmount: number;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType: string;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    readonly diskMappings?: Array<RosPrepayInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    readonly eniMappings?: Array<RosPrepayInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosPrepayInstanceGroupCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosPrepayInstanceGroupCloneProps`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstanceGroupClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('periodType', ros.requiredValidator)(properties.periodType));
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Monthly","Yearly"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosPrepayInstanceGroupClone_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if(properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
          data: properties.autoRenew,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('maxAmount', ros.requiredValidator)(properties.maxAmount));
    if(properties.maxAmount && (typeof properties.maxAmount) !== 'object') {
        errors.collect(ros.propertyValidator('maxAmount', ros.validateRange)({
            data: properties.maxAmount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('maxAmount', ros.validateNumber)(properties.maxAmount));
    errors.collect(ros.propertyValidator('systemDiskAutoSnapshotPolicyId', ros.validateString)(properties.systemDiskAutoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('minAmount', ros.requiredValidator)(properties.minAmount));
    if(properties.minAmount && (typeof properties.minAmount) !== 'object') {
        errors.collect(ros.propertyValidator('minAmount', ros.validateRange)({
            data: properties.minAmount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('minAmount', ros.validateNumber)(properties.minAmount));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,6,12],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosPrepayInstanceGroupClone_EniMappingsPropertyValidator))(properties.eniMappings));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
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
            min: 1,
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
          allowedValues: ["Week","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosPrepayInstanceGroupCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstanceGroupClone` resource
 *
 * @param properties - the TypeScript properties of a `RosPrepayInstanceGroupCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstanceGroupClone` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceGroupClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrepayInstanceGroupClonePropsValidator(properties).assertSuccess();
    }
    return {
      MaxAmount: ros.numberToRosTemplate(properties.maxAmount),
      MinAmount: ros.numberToRosTemplate(properties.minAmount),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      Description: ros.stringToRosTemplate(properties.description),
      DiskMappings: ros.listMapper(rosPrepayInstanceGroupCloneDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      EniMappings: ros.listMapper(rosPrepayInstanceGroupCloneEniMappingsPropertyToRosTemplate)(properties.eniMappings),
      HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
      LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
      LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
      Password: ros.stringToRosTemplate(properties.password),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
      SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
      SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECS::PrepayInstanceGroupClone`
 */
export class RosPrepayInstanceGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrepayInstanceGroupClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HostNames: Host names of created instance.
     */
    public readonly attrHostNames: any;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIps: any;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    public readonly attrInstanceIds: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIps: any;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public readonly attrPublicIps: any;

    /**
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    public readonly attrRelatedOrderIds: any;

    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    public readonly attrZoneIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    public maxAmount: number;

    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    public minAmount: number;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    public period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    public sourceInstanceId: string;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    public autoRenew: string | undefined;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    public deploymentSetId: string | undefined;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    public description: string | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    public diskMappings: Array<RosPrepayInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    public eniMappings: Array<RosPrepayInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    public hpcClusterId: string | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    public imageId: string | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | undefined;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    public internetMaxBandwidthIn: number | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | undefined;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    public keyPairName: string | undefined;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateId: string | undefined;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    public launchTemplateName: string | undefined;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    public launchTemplateVersion: string | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | undefined;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    public periodUnit: string | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | undefined;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    public securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public systemDiskAutoSnapshotPolicyId: string | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    public systemDiskCategory: string | undefined;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    public systemDiskDescription: string | undefined;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    public systemDiskDiskName: string | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property zoneId: current zone to create the instance.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceGroupCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrepayInstanceGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = ros.Token.asString(this.getAtt('HostNames'));
        this.attrInnerIps = ros.Token.asString(this.getAtt('InnerIps'));
        this.attrInstanceIds = ros.Token.asString(this.getAtt('InstanceIds'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPrivateIps = ros.Token.asString(this.getAtt('PrivateIps'));
        this.attrPublicIps = ros.Token.asString(this.getAtt('PublicIps'));
        this.attrRelatedOrderIds = ros.Token.asString(this.getAtt('RelatedOrderIds'));
        this.attrZoneIds = ros.Token.asString(this.getAtt('ZoneIds'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.maxAmount = props.maxAmount;
        this.minAmount = props.minAmount;
        this.period = props.period;
        this.periodType = props.periodType;
        this.sourceInstanceId = props.sourceInstanceId;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.eniMappings = props.eniMappings;
        this.hpcClusterId = props.hpcClusterId;
        this.imageId = props.imageId;
        this.instanceName = props.instanceName;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.keyPairName = props.keyPairName;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateName = props.launchTemplateName;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.password = props.password;
        this.periodUnit = props.periodUnit;
        this.ramRoleName = props.ramRoleName;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::PrepayInstanceGroupClone", props.tags, { tagPropertyName: 'tags' });
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            maxAmount: this.maxAmount,
            minAmount: this.minAmount,
            period: this.period,
            periodType: this.periodType,
            sourceInstanceId: this.sourceInstanceId,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            eniMappings: this.eniMappings,
            hpcClusterId: this.hpcClusterId,
            imageId: this.imageId,
            instanceName: this.instanceName,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            keyPairName: this.keyPairName,
            launchTemplateId: this.launchTemplateId,
            launchTemplateName: this.launchTemplateName,
            launchTemplateVersion: this.launchTemplateVersion,
            password: this.password,
            periodUnit: this.periodUnit,
            ramRoleName: this.ramRoleName,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            tags: this.tags.renderTags(),
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrepayInstanceGroupClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrepayInstanceGroupClone {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string;
        /**
         * @Property category: The volume type.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd. Default is cloud_efficiency.
         */
        readonly category?: string;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string;
        /**
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstanceGroupClone_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd"],
        }));
    }
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
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstanceGroupClone.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstanceGroupClone.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceGroupCloneDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstanceGroupClone_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
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
    };
}

export namespace RosPrepayInstanceGroupClone {
    /**
     * @stability external
     */
    export interface EniMappingsProperty {
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId: string;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId: string;
        /**
         * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
         */
        readonly networkInterfaceName?: string;
        /**
         * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
         */
        readonly primaryIpAddress?: string;
    }
}
/**
 * Determine whether the given properties match those of a `EniMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstanceGroupClone_EniMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    return errors.wrap('supplied properties not correct for "EniMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstanceGroupClone.EniMappings` resource
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrepayInstanceGroupClone.EniMappings` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceGroupCloneEniMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstanceGroupClone_EniMappingsPropertyValidator(properties).assertSuccess();
    return {
      Description: ros.stringToRosTemplate(properties.description),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
      PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::Route`
 */
export interface RosRouteProps {

    /**
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    readonly destinationCidrBlock: string;

    /**
     * @Property routeId: RouteId of created route entry.
     */
    readonly routeId: string;

    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    readonly routeTableId: string;

    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopId?: string;

    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    readonly nextHopList?: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property nextHopType: The next hop type. Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopType?: string;
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
    if(properties.nextHopType && (typeof properties.nextHopType) !== 'object') {
        errors.collect(ros.propertyValidator('nextHopType', ros.validateAllowedValues)({
          data: properties.nextHopType,
          allowedValues: ["Instance","Tunnel","HaVip","RouterInterface"],
        }));
    }
    errors.collect(ros.propertyValidator('nextHopType', ros.validateString)(properties.nextHopType));
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('nextHopId', ros.validateString)(properties.nextHopId));
    errors.collect(ros.propertyValidator('nextHopList', ros.listValidator(RosRoute_NextHopListPropertyValidator))(properties.nextHopList));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.requiredValidator)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('routeId', ros.requiredValidator)(properties.routeId));
    errors.collect(ros.propertyValidator('routeId', ros.validateString)(properties.routeId));
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
      RouteId: ros.stringToRosTemplate(properties.routeId),
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

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    public destinationCidrBlock: string;

    /**
     * @Property routeId: RouteId of created route entry.
     */
    public routeId: string;

    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    public routeTableId: string;

    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    public nextHopId: string | undefined;

    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    public nextHopList: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property nextHopType: The next hop type. Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    public nextHopType: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRoute.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationCidrBlock = props.destinationCidrBlock;
        this.routeId = props.routeId;
        this.routeTableId = props.routeTableId;
        this.nextHopId = props.nextHopId;
        this.nextHopList = props.nextHopList;
        this.nextHopType = props.nextHopType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destinationCidrBlock: this.destinationCidrBlock,
            routeId: this.routeId,
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
         * @Property nextHopType: Route entry next hop type. Now support 'Instance|Tunnel|HaVip|RouterInterface'.
         */
        readonly nextHopType?: string;
        /**
         * @Property nextHopId: Route entry next hop Instance id or Tunnel id.
         */
        readonly nextHopId: string;
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
    if(properties.nextHopType && (typeof properties.nextHopType) !== 'object') {
        errors.collect(ros.propertyValidator('nextHopType', ros.validateAllowedValues)({
          data: properties.nextHopType,
          allowedValues: ["Instance","Tunnel","HaVip","RouterInterface"],
        }));
    }
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
    readonly commandContent: string;

    /**
     * @Property instanceIds: The instance id list. Select up to 20 instances at a time.Instances status must be running.
     */
    readonly instanceIds: string[];

    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    readonly type: string;

    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    readonly contentEncoding?: string;

    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    readonly description?: string;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * @Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    readonly frequency?: string;

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
    readonly name?: string;

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
    readonly timeout?: number;

    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    readonly workingDir?: string;
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
    errors.collect(ros.propertyValidator('enableParameter', ros.validateBoolean)(properties.enableParameter));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('keepCommand', ros.validateBoolean)(properties.keepCommand));
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
    public readonly attrCommandId: any;

    /**
     * @Attribute InvokeId: The invoke id of command.
     */
    public readonly attrInvokeId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commandContent: The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    public commandContent: string;

    /**
     * @Property instanceIds: The instance id list. Select up to 20 instances at a time.Instances status must be running.
     */
    public instanceIds: string[];

    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    public type: string;

    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    public contentEncoding: string | undefined;

    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    public description: string | undefined;

    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    public enableParameter: boolean | ros.IResolvable | undefined;

    /**
     * @Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    public frequency: string | undefined;

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
    public name: string | undefined;

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
    public timeout: number | undefined;

    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    public workingDir: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRunCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandId = ros.Token.asString(this.getAtt('CommandId'));
        this.attrInvokeId = ros.Token.asString(this.getAtt('InvokeId'));

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
            timed: this.timed,
            timeout: this.timeout,
            workingDir: this.workingDir,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRunCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::SNatEntry`
 */
export interface RosSNatEntryProps {

    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly sNatIp: string;

    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    readonly sNatTableId: string;

    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId: string;
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
    errors.collect(ros.propertyValidator('sourceVSwitchId', ros.requiredValidator)(properties.sourceVSwitchId));
    errors.collect(ros.propertyValidator('sourceVSwitchId', ros.validateString)(properties.sourceVSwitchId));
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
    public readonly attrSNatEntryId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    public sNatIp: string;

    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    public sNatTableId: string;

    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    public sourceVSwitchId: string;

    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSNatEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSNatEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSNatEntryId = ros.Token.asString(this.getAtt('SNatEntryId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sNatIp = props.sNatIp;
        this.sNatTableId = props.sNatTableId;
        this.sourceVSwitchId = props.sourceVSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sNatIp: this.sNatIp,
            sNatTableId: this.sNatTableId,
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
    readonly keyPairName: string;

    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    readonly publicKeyBody?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
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
    public readonly attrKeyPairFingerPrint: any;

    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    public readonly attrKeyPairName: any;

    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    public readonly attrPrivateKeyBody: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
     */
    public keyPairName: string;

    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    public publicKeyBody: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSSHKeyPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSSHKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyPairFingerPrint = ros.Token.asString(this.getAtt('KeyPairFingerPrint'));
        this.attrKeyPairName = ros.Token.asString(this.getAtt('KeyPairName'));
        this.attrPrivateKeyBody = ros.Token.asString(this.getAtt('PrivateKeyBody'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.publicKeyBody = props.publicKeyBody;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairName: this.keyPairName,
            publicKeyBody: this.publicKeyBody,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSSHKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly keyPairName: string;
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
    public keyPairName: string;

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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            keyPairName: this.keyPairName,
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
    readonly description?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

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
    readonly securityGroupName?: string;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    readonly securityGroupType?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string;
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrSecurityGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

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
    public securityGroupName: string | undefined;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    public securityGroupType: string | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    public vpcId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = ros.Token.asString(this.getAtt('SecurityGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupEgress = props.securityGroupEgress;
        this.securityGroupIngress = props.securityGroupIngress;
        this.securityGroupName = props.securityGroupName;
        this.securityGroupType = props.securityGroupType;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::SecurityGroup", props.tags, { tagPropertyName: 'tags' });
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
            tags: this.tags.renderTags(),
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
        readonly policy?: string;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         */
        readonly portRange: string;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number;
        /**
         * @Property securityGroupId: Id of the security group.
         */
        readonly securityGroupId?: string;
        /**
         * @Property destGroupOwnerId: Dest Group Owner Account ID
         */
        readonly destGroupOwnerId?: string;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string;
        /**
         * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
         */
        readonly destCidrIp?: string;
        /**
         * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
         */
        readonly nicType?: string;
        /**
         * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
         */
        readonly ipv6DestCidrIp?: string;
        /**
         * @Property destGroupId: Dest Group Id
         */
        readonly destGroupId?: string;
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
          allowedValues: ["tcp","udp","icmp","gre","all"],
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
        readonly sourceGroupId?: string;
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         */
        readonly portRange: string;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
         */
        readonly sourcePortRange?: string;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number;
        /**
         * @Property securityGroupId: Id of the security group.
         */
        readonly securityGroupId?: string;
        /**
         * @Property sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
         */
        readonly sourceCidrIp?: string;
        /**
         * @Property sourceGroupOwnerId: Source Group Owner Account ID
         */
        readonly sourceGroupOwnerId?: string;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string;
        /**
         * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
         */
        readonly ipv6SourceCidrIp?: string;
        /**
         * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
         */
        readonly nicType?: string;
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
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('sourceGroupOwnerId', ros.validateString)(properties.sourceGroupOwnerId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if(properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
          data: properties.nicType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
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
      PortRange: ros.stringToRosTemplate(properties.portRange),
      Description: ros.stringToRosTemplate(properties.description),
      SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
      Priority: ros.numberToRosTemplate(properties.priority),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
      SourceGroupOwnerId: ros.stringToRosTemplate(properties.sourceGroupOwnerId),
      IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
      Ipv6SourceCidrIp: ros.stringToRosTemplate(properties.ipv6SourceCidrIp),
      NicType: ros.stringToRosTemplate(properties.nicType),
    };
}

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupClone`
 */
export interface RosSecurityGroupCloneProps {

    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    readonly sourceSecurityGroupId: string;

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    readonly destinationRegionId?: string;

    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    readonly networkType?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly securityGroupName?: string;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    readonly securityGroupType?: string;

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string;
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
    public readonly attrSecurityGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    public sourceSecurityGroupId: string;

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    public destinationRegionId: string | undefined;

    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    public networkType: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public securityGroupName: string | undefined;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    public securityGroupType: string | undefined;

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    public vpcId: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = ros.Token.asString(this.getAtt('SecurityGroupId'));

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
    readonly ipProtocol: string;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    readonly portRange: string;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string;

    /**
     * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    readonly destCidrIp?: string;

    /**
     * @Property destGroupId: Dest Group Id
     */
    readonly destGroupId?: string;

    /**
     * @Property destGroupOwnerId: Dest Group Owner Account ID
     */
    readonly destGroupOwnerId?: string;

    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6DestCidrIp?: string;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    readonly nicType?: string;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    readonly policy?: string;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    readonly priority?: number;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId?: string;
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
          allowedValues: ["tcp","udp","icmp","gre","all"],
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
    public ipProtocol: string;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    public portRange: string;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    public description: string | undefined;

    /**
     * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    public destCidrIp: string | undefined;

    /**
     * @Property destGroupId: Dest Group Id
     */
    public destGroupId: string | undefined;

    /**
     * @Property destGroupOwnerId: Dest Group Owner Account ID
     */
    public destGroupOwnerId: string | undefined;

    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    public ipv6DestCidrIp: string | undefined;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    public nicType: string | undefined;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    public policy: string | undefined;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    public priority: number | undefined;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    public securityGroupId: string | undefined;

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
    readonly ipProtocol: string;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    readonly portRange: string;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string;

    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    readonly ipv6SourceCidrIp?: string;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    readonly nicType?: string;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    readonly policy?: string;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    readonly priority?: number;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId?: string;

    /**
     * @Property sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
     */
    readonly sourceCidrIp?: string;

    /**
     * @Property sourceGroupId: Source Group Id
     */
    readonly sourceGroupId?: string;

    /**
     * @Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    readonly sourceGroupOwnerId?: string;

    /**
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    readonly sourcePortRange?: string;
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
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('sourceGroupOwnerId', ros.validateString)(properties.sourceGroupOwnerId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if(properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
          data: properties.ipProtocol,
          allowedValues: ["tcp","udp","icmp","gre","all"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if(properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
          data: properties.nicType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
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
    public ipProtocol: string;

    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    public portRange: string;

    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    public description: string | undefined;

    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    public ipv6SourceCidrIp: string | undefined;

    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    public nicType: string | undefined;

    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    public policy: string | undefined;

    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    public priority: number | undefined;

    /**
     * @Property securityGroupId: Id of the security group.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
     */
    public sourceCidrIp: string | undefined;

    /**
     * @Property sourceGroupId: Source Group Id
     */
    public sourceGroupId: string | undefined;

    /**
     * @Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    public sourceGroupOwnerId: string | undefined;

    /**
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    public sourcePortRange: string | undefined;

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
    readonly diskId: string;

    /**
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    readonly description?: string;

    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    readonly snapshotName?: string;

    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    readonly timeout?: number;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 200,
            max: 1440,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('snapshotName', ros.validateString)(properties.snapshotName));
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
      SnapshotName: ros.stringToRosTemplate(properties.snapshotName),
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
    public readonly attrSnapshotId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    public diskId: string;

    /**
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    public description: string | undefined;

    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    public snapshotName: string | undefined;

    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    public timeout: number | undefined;

    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSnapshot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnapshotId = ros.Token.asString(this.getAtt('SnapshotId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.description = props.description;
        this.snapshotName = props.snapshotName;
        this.timeout = props.timeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskId: this.diskId,
            description: this.description,
            snapshotName: this.snapshotName,
            timeout: this.timeout,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSnapshotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
    readonly cidrBlock?: string;

    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;

    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    readonly ipv6CidrBlock?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vpcName?: string;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('enableIpv6', ros.validateBoolean)(properties.enableIpv6));
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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrRouteTableId: any;

    /**
     * @Attribute VRouterId: Router id of created VPC.
     */
    public readonly attrVRouterId: any;

    /**
     * @Attribute VpcId: Id of created VPC.
     */
    public readonly attrVpcId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    public cidrBlock: string | undefined;

    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    public enableIpv6: boolean | ros.IResolvable | undefined;

    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    public ipv6CidrBlock: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public vpcName: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVPCProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVPC.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = ros.Token.asString(this.getAtt('RouteTableId'));
        this.attrVRouterId = ros.Token.asString(this.getAtt('VRouterId'));
        this.attrVpcId = ros.Token.asString(this.getAtt('VpcId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.description = props.description;
        this.enableIpv6 = props.enableIpv6;
        this.ipv6CidrBlock = props.ipv6CidrBlock;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::VPC", props.tags, { tagPropertyName: 'tags' });
        this.vpcName = props.vpcName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidrBlock: this.cidrBlock,
            description: this.description,
            enableIpv6: this.enableIpv6,
            ipv6CidrBlock: this.ipv6CidrBlock,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags.renderTags(),
            vpcName: this.vpcName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVPCPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ECS::VSwitch`
 */
export interface RosVSwitchProps {

    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    readonly cidrBlock: string;

    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    readonly vpcId: string;

    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    readonly zoneId: string;

    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    readonly ipv6CidrBlock?: number;

    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vSwitchName?: string;
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      VSwitchName: ros.stringToRosTemplate(properties.vSwitchName),
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
    public readonly attrCidrBlock: any;

    /**
     * @Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    public readonly attrIpv6CidrBlock: any;

    /**
     * @Attribute VSwitchId: Id of created VSwitch.
     */
    public readonly attrVSwitchId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    public cidrBlock: string;

    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    public vpcId: string;

    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    public zoneId: string;

    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | undefined;

    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    public ipv6CidrBlock: number | undefined;

    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public vSwitchName: string | undefined;

    /**
     * Create a new `ALIYUN::ECS::VSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCidrBlock = ros.Token.asString(this.getAtt('CidrBlock'));
        this.attrIpv6CidrBlock = ros.Token.asString(this.getAtt('Ipv6CidrBlock'));
        this.attrVSwitchId = ros.Token.asString(this.getAtt('VSwitchId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.vpcId = props.vpcId;
        this.zoneId = props.zoneId;
        this.description = props.description;
        this.ipv6CidrBlock = props.ipv6CidrBlock;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::ECS::VSwitch", props.tags, { tagPropertyName: 'tags' });
        this.vSwitchName = props.vSwitchName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidrBlock: this.cidrBlock,
            vpcId: this.vpcId,
            zoneId: this.zoneId,
            description: this.description,
            ipv6CidrBlock: this.ipv6CidrBlock,
            tags: this.tags.renderTags(),
            vSwitchName: this.vSwitchName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
