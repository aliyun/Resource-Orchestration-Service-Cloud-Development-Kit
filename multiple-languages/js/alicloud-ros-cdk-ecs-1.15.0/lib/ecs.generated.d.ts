import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosActivation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-activation
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
     * @Property instanceName: The default instance name prefix. The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
     */
    readonly ipAddressRange?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Activation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Activation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-activation
 */
export declare class RosActivation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Activation";
    /**
     * @Attribute ActivationCode: Activation code.
     */
    readonly attrActivationCode: ros.IResolvable;
    /**
     * @Attribute ActivationId: Activation code ID.
     */
    readonly attrActivationId: ros.IResolvable;
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    readonly attrDeregisteredCount: ros.IResolvable;
    /**
     * @Attribute RegisteredCount: The number of registered instances.
     */
    readonly attrRegisteredCount: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the activation code. It must be 1 to 100 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instanceCount: The maximum number of times that you can use the activation code to register managed instances. Valid values: 1 to 1000.Default value: 10.
     */
    instanceCount: number | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The default instance name prefix. The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
     */
    ipAddressRange: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosActivation.TagsProperty[] | undefined;
    /**
     * @Property timeToLiveInHours: The validity period of the activation code. The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
     */
    timeToLiveInHours: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosActivationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosActivation {
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
/**
 * Properties for defining a `RosAssignIpv6Addresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
 */
export interface RosAssignIpv6AddressesProps {
    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    readonly networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses to randomly generate for the ENI. Valid values: 1 to
     * 10.
     * > You must specify `Ipv6Addresses.N` or `Ipv6AddressCount`, but not both.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ipv6PrefixCount: The number of IPv6 prefixes to assign to the ENI. Valid values: 1 to 10.
     * > To assign IPv6 prefixes to the ENI, you must specify Ipv6Prefix.N or
     * Ipv6PrefixCount, but not both.
     */
    readonly ipv6PrefixCount?: number | ros.IResolvable;
    /**
     * @Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
     */
    readonly ipv6Prefixes?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AssignIpv6Addresses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AssignIpv6Addresses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
 */
export declare class RosAssignIpv6Addresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignIpv6Addresses";
    /**
     * @Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    readonly attrIpv6AddressIds: ros.IResolvable;
    /**
     * @Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    readonly attrIpv6Addresses: ros.IResolvable;
    /**
     * @Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses to randomly generate for the ENI. Valid values: 1 to
     * 10.
     * > You must specify `Ipv6Addresses.N` or `Ipv6AddressCount`, but not both.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ipv6PrefixCount: The number of IPv6 prefixes to assign to the ENI. Valid values: 1 to 10.
     * > To assign IPv6 prefixes to the ENI, you must specify Ipv6Prefix.N or
     * Ipv6PrefixCount, but not both.
     */
    ipv6PrefixCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
     */
    ipv6Prefixes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAssignIpv6AddressesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAssignPrivateIpAddresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
 */
export interface RosAssignPrivateIpAddressesProps {
    /**
     * @Property networkInterfaceId: The ID of the ENI.
     */
    readonly networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property ipv4PrefixCount: The number of IPv4 prefixes to be randomly generated for the ENI. Valid values: 1
     * to 10.
     * > To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or
     * Ipv4PrefixCount parameter, but not both.
     */
    readonly ipv4PrefixCount?: number | ros.IResolvable;
    /**
     * @Property ipv4Prefixes: One or multiple IPv4 prefixes to be assigned to the ENI.
     */
    readonly ipv4Prefixes?: Array<any | ros.IResolvable> | ros.IResolvable;
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
     * @Property secondaryPrivateIpAddressCount: The number of private IP addresses to be automatically assigned from the CIDR
     * block of the vSwitch that is connected to the ENI.
     * To assign secondary private IP addresses to the ENI, you must specify
     * `PrivateIpAddress.N` or `SecondaryPrivateIpAddressCount` but not both.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AssignPrivateIpAddresses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AssignPrivateIpAddresses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
 */
export declare class RosAssignPrivateIpAddresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignPrivateIpAddresses";
    /**
     * @Attribute NetworkInterfaceId: The ID of the ENI.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable;
    /**
     * @Attribute PrivateIpAddresses: Assigned private ip addresses.
     */
    readonly attrPrivateIpAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkInterfaceId: The ID of the ENI.
     */
    networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property ipv4PrefixCount: The number of IPv4 prefixes to be randomly generated for the ENI. Valid values: 1
     * to 10.
     * > To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or
     * Ipv4PrefixCount parameter, but not both.
     */
    ipv4PrefixCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv4Prefixes: One or multiple IPv4 prefixes to be assigned to the ENI.
     */
    ipv4Prefixes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
     * Valid values of number of private ip addresses:
     * When the ENI is in the Available state: 1 to 10.
     * When the ENI is in the InUse state: limited by the instance type.
     * For more information, see Instance type families.
     * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
     */
    privateIpAddresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property secondaryPrivateIpAddressCount: The number of private IP addresses to be automatically assigned from the CIDR
     * block of the vSwitch that is connected to the ENI.
     * To assign secondary private IP addresses to the ENI, you must specify
     * `PrivateIpAddress.N` or `SecondaryPrivateIpAddressCount` but not both.
     */
    secondaryPrivateIpAddressCount: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAssignPrivateIpAddressesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAutoProvisioningGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
 */
export interface RosAutoProvisioningGroupProps {
    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. Valid values: Positive
     * integers.
     * The total capacity must be greater than or equal to the sum of
     * `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and
     * `SpotTargetCapacity` (target capacity for spot instances).
     */
    readonly totalTargetCapacity: string | ros.IResolvable;
    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly autoProvisioningGroupName?: string | ros.IResolvable;
    /**
     * @Property autoProvisioningGroupType: The delivery type of the auto provisioning group. Valid values:
     * - request: One-time asynchronous delivery. The group delivers the instance
     * cluster only at startup. If scheduling fails, no retry occurs.
     * - instant: One-time synchronous delivery. The group creates instances
     * synchronously at startup and returns the list of successfully created instances
     * and reasons for failures in the response.
     * - maintain: Continuous provisioning. The group attempts to deliver the instance
     * cluster at startup and monitors real-time capacity. If the target capacity is not
     * met, it continues creating ECS instances.
     * Default value: maintain.
     */
    readonly autoProvisioningGroupType?: string | ros.IResolvable;
    /**
     * @Property checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
     */
    readonly checkExecutionStatus?: boolean | ros.IResolvable;
    /**
     * @Property dataDiskConfig: List of instance data disk information.
     */
    readonly dataDiskConfig?: Array<RosAutoProvisioningGroup.DataDiskConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of
     * `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than
     * `TotalTargetCapacity`. Valid values:
     * - PayAsYouGo: Pay-as-you-go instances.
     * - Spot: Spot instances.
     * Default value: Spot.
     */
    readonly defaultTargetCapacityType?: string | ros.IResolvable;
    /**
     * @Property description: The description of the auto provisioning group.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto
     * provisioning group exceeds the target capacity and scale-in is triggered. Valid
     * values:
     * - termination: Releases scaled-in instances.
     * - no-termination: Only removes scaled-in instances from the auto provisioning
     * group.
     * Default value: no-termination.
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
     * @Property launchTemplateVersion: The version of the launch template associated with the auto provisioning group.
     * Call [DescribeLaunchTemplateVersions]() to query available launch template
     * versions.
     * Default value: The default version of the launch template.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;
    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    readonly maxSpotPrice?: number | ros.IResolvable;
    /**
     * @Property minTargetCapacity: The target minimum capacity of the elastic supply group. Value range: Positive integer.
     * Once you have set this parameter, note that:
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     * If the inventory of instances in the current domain is less than this value, the call to the interface will fail and no instance will be created.
     * If the instance inventory in the current domain is greater than the parameter value, the instance is created normally according to the other parameter values that have been set.
     */
    readonly minTargetCapacity?: string | ros.IResolvable;
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
     * @Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.
     * Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
     */
    readonly payAsYouGoTargetCapacity?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property resourcePoolOptions: Resource pooling policy to use when creating an instance. Once you have set this parameter, note that:
     * This parameter only applies if a pay-as-you-go instance is created.
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     */
    readonly resourcePoolOptions?: RosAutoProvisioningGroup.ResourcePoolOptionsProperty | ros.IResolvable;
    /**
     * @Property spotAllocationStrategy: The strategy for creating spot instances. Valid values:
     * - lowest-price: Cost optimization strategy. Selects the instance type with the
     * lowest price.
     * - diversified: Balanced zone distribution strategy. Creates instances across the
     * zones specified in the launch template configurations and distributes them
     * evenly.
     * - capacity-optimized: Capacity optimization strategy. Selects the optimal
     * instance type and zone based on inventory availability.
     * Default value: lowest-price.
     */
    readonly spotAllocationStrategy?: string | ros.IResolvable;
    /**
     * @Property spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted. Valid values:
     * - stop: Stops the instance.
     * - terminate: Releases the instance.
     * Default value: terminate.
     */
    readonly spotInstanceInterruptionBehavior?: string | ros.IResolvable;
    /**
     * @Property spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
     * Specifies the number of lowest-priced instance types from which the auto
     * provisioning group creates instances.
     * Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
     */
    readonly spotInstancePoolsToUseCount?: number | ros.IResolvable;
    /**
     * @Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group. Valid
     * values: Integers less than or equal to the value of `TotalTargetCapacity`.
     */
    readonly spotTargetCapacity?: string | ros.IResolvable;
    /**
     * @Property systemDiskConfig: List of instance system disk information.
     */
    readonly systemDiskConfig?: Array<RosAutoProvisioningGroup.SystemDiskConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property terminateInstances: Specifies whether to release instances in the group when you delete the auto
     * provisioning group. Valid values:
     * - true: Releases instances in the group.
     * - false: Retains instances in the group.
     * Default value: false.
     */
    readonly terminateInstances?: boolean | ros.IResolvable;
    /**
     * @Property terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning
     * group expires. Valid values:
     * - true: Releases instances in the group.
     * - false: Only removes instances from the auto provisioning group.
     * Default value: false.
     */
    readonly terminateInstancesWithExpiration?: boolean | ros.IResolvable;
    /**
     * @Property validFrom: The start time of the auto provisioning group. Used together with `ValidUntil` to
     * define the validity period.
     * Specify the time in [ISO 8601]() format using UTC+0 time. Format:
     * yyyy-MM-ddTHH:mm:ssZ.
     * Default value: The timestamp when the API call takes effect immediately.
     */
    readonly validFrom?: string | ros.IResolvable;
    /**
     * @Property validUntil: The expiration time of the auto provisioning group. Used together with
     * `ValidFrom` to define the validity period.
     * Specify the time in [ISO 8601]() format using UTC+0 time. Format:
     * yyyy-MM-ddTHH:mm:ssZ.
     * Default value: 2099-12-31T23:59:59Z.
     */
    readonly validUntil?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AutoProvisioningGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoProvisioningGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
 */
export declare class RosAutoProvisioningGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoProvisioningGroup";
    /**
     * @Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    readonly attrAutoProvisioningGroupId: ros.IResolvable;
    /**
     * @Attribute AutoProvisioningGroupName: The name of the auto provisioning group.
     */
    readonly attrAutoProvisioningGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. Valid values: Positive
     * integers.
     * The total capacity must be greater than or equal to the sum of
     * `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and
     * `SpotTargetCapacity` (target capacity for spot instances).
     */
    totalTargetCapacity: string | ros.IResolvable;
    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    autoProvisioningGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property autoProvisioningGroupType: The delivery type of the auto provisioning group. Valid values:
     * - request: One-time asynchronous delivery. The group delivers the instance
     * cluster only at startup. If scheduling fails, no retry occurs.
     * - instant: One-time synchronous delivery. The group creates instances
     * synchronously at startup and returns the list of successfully created instances
     * and reasons for failures in the response.
     * - maintain: Continuous provisioning. The group attempts to deliver the instance
     * cluster at startup and monitors real-time capacity. If the target capacity is not
     * met, it continues creating ECS instances.
     * Default value: maintain.
     */
    autoProvisioningGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
     */
    checkExecutionStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property dataDiskConfig: List of instance data disk information.
     */
    dataDiskConfig: Array<RosAutoProvisioningGroup.DataDiskConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of
     * `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than
     * `TotalTargetCapacity`. Valid values:
     * - PayAsYouGo: Pay-as-you-go instances.
     * - Spot: Spot instances.
     * Default value: Spot.
     */
    defaultTargetCapacityType: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the auto provisioning group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto
     * provisioning group exceeds the target capacity and scale-in is triggered. Valid
     * values:
     * - termination: Releases scaled-in instances.
     * - no-termination: Only removes scaled-in instances from the auto provisioning
     * group.
     * Default value: no-termination.
     */
    excessCapacityTerminationPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property launchConfiguration:
     */
    launchConfiguration: RosAutoProvisioningGroup.LaunchConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateConfig:
     */
    launchTemplateConfig: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    launchTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateVersion: The version of the launch template associated with the auto provisioning group.
     * Call [DescribeLaunchTemplateVersions]() to query available launch template
     * versions.
     * Default value: The default version of the launch template.
     */
    launchTemplateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    maxSpotPrice: number | ros.IResolvable | undefined;
    /**
     * @Property minTargetCapacity: The target minimum capacity of the elastic supply group. Value range: Positive integer.
     * Once you have set this parameter, note that:
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     * If the inventory of instances in the current domain is less than this value, the call to the interface will fail and no instance will be created.
     * If the instance inventory in the current domain is greater than the parameter value, the instance is created normally according to the other parameter values that have been set.
     */
    minTargetCapacity: string | ros.IResolvable | undefined;
    /**
     * @Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    payAsYouGoAllocationStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.
     * Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
     */
    payAsYouGoTargetCapacity: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property resourcePoolOptions: Resource pooling policy to use when creating an instance. Once you have set this parameter, note that:
     * This parameter only applies if a pay-as-you-go instance is created.
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     */
    resourcePoolOptions: RosAutoProvisioningGroup.ResourcePoolOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property spotAllocationStrategy: The strategy for creating spot instances. Valid values:
     * - lowest-price: Cost optimization strategy. Selects the instance type with the
     * lowest price.
     * - diversified: Balanced zone distribution strategy. Creates instances across the
     * zones specified in the launch template configurations and distributes them
     * evenly.
     * - capacity-optimized: Capacity optimization strategy. Selects the optimal
     * instance type and zone based on inventory availability.
     * Default value: lowest-price.
     */
    spotAllocationStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted. Valid values:
     * - stop: Stops the instance.
     * - terminate: Releases the instance.
     * Default value: terminate.
     */
    spotInstanceInterruptionBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
     * Specifies the number of lowest-priced instance types from which the auto
     * provisioning group creates instances.
     * Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
     */
    spotInstancePoolsToUseCount: number | ros.IResolvable | undefined;
    /**
     * @Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group. Valid
     * values: Integers less than or equal to the value of `TotalTargetCapacity`.
     */
    spotTargetCapacity: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskConfig: List of instance system disk information.
     */
    systemDiskConfig: Array<RosAutoProvisioningGroup.SystemDiskConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property terminateInstances: Specifies whether to release instances in the group when you delete the auto
     * provisioning group. Valid values:
     * - true: Releases instances in the group.
     * - false: Retains instances in the group.
     * Default value: false.
     */
    terminateInstances: boolean | ros.IResolvable | undefined;
    /**
     * @Property terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning
     * group expires. Valid values:
     * - true: Releases instances in the group.
     * - false: Only removes instances from the auto provisioning group.
     * Default value: false.
     */
    terminateInstancesWithExpiration: boolean | ros.IResolvable | undefined;
    /**
     * @Property validFrom: The start time of the auto provisioning group. Used together with `ValidUntil` to
     * define the validity period.
     * Specify the time in [ISO 8601]() format using UTC+0 time. Format:
     * yyyy-MM-ddTHH:mm:ssZ.
     * Default value: The timestamp when the API call takes effect immediately.
     */
    validFrom: string | ros.IResolvable | undefined;
    /**
     * @Property validUntil: The expiration time of the auto provisioning group. Used together with
     * `ValidFrom` to define the validity period.
     * Specify the time in [ISO 8601]() format using UTC+0 time. Format:
     * yyyy-MM-ddTHH:mm:ssZ.
     * Default value: 2099-12-31T23:59:59Z.
     */
    validUntil: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoProvisioningGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface DataDiskProperty {
        /**
         * @Property burstingEnabled: Specifies whether to enable the bursting feature for the data disk.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property category: The category of data disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: ESSD
     * cloud: basic disk
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: The description of data disk N. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The ID of the KMS key to be used by data disk
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property size: The size of data disk
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the ESSD used as data disk. Default value: PL1. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt data disk. Default value: false
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property device: The mount point of the data disk. When specifying both the launch template and the launch configuration information, the launch template is preferred.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Specifies whether to release data disk when the instance is released. Default value: true
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property diskName: The name of data disk N. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
         */
        readonly diskName?: string | ros.IResolvable;
        /**
         * @Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk. Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
     * Baseline performance =min{1,800+50* capacity, 50000}.
         */
        readonly provisionedIops?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: The billing method for network usage. Default value: PayByTraffic. Valid values:
     * PayByBandwidth
     * PayByTraffic
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property snapshotId: The ID of the snapshot used to create data disk
         */
        readonly snapshotId?: string | ros.IResolvable;
    }
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface DataDiskConfigProperty {
        /**
         * @Property diskCategory: The category of the data disk.
         */
        readonly diskCategory: string | ros.IResolvable;
    }
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface LaunchConfigurationProperty {
        /**
         * @Property resourceGroupId: The ID of the resource group to which to assign the instance.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property userData: The user data of the instance.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property systemDiskSize: The size of the system disk. Unit: GiB. Valid values: 20 to 500.
         */
        readonly systemDiskSize?: number | ros.IResolvable;
        /**
         * @Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly systemDiskDescription?: string | ros.IResolvable;
        /**
         * @Property systemDiskProvisionedIops: The provisioned IOPS.
         */
        readonly systemDiskProvisionedIops?: number | ros.IResolvable;
        /**
         * @Property systemDiskEncrypted: Specifies whether the disk is encrypted.
         */
        readonly systemDiskEncrypted?: boolean | ros.IResolvable;
        /**
         * @Property systemDiskName: The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
         */
        readonly systemDiskName?: string | ros.IResolvable;
        /**
         * @Property ramRoleName: The name of the RAM role.
         */
        readonly ramRoleName?: string | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the ESSD used as the system disk. Default value: PL0. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property imageId: Image ID.
         */
        readonly imageId: string | ros.IResolvable;
        /**
         * @Property hostNames: Specify different host names for one or more instances. The limitations are as follows:
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     * N is the number of instances, ranging from 1 to 1000 and matching the TotalTargetCapacity parameter.
     * Half-angular period (.) The and dash (-) are not allowed to start or end characters, nor can they be used continuously.
     * Windows example: Character length 2 to 15, does not support half-corner period (.) It can't be all numbers. Allows upper - and lowercase letters, numbers, and a dash (-).
     * Other type instances (Linux, etc.) : Character lengths from 2 to 64, support multiple half-angular periods (.) Half-angular period (.) Each paragraph is allowed to contain upper - and lowercase letters, numbers, and a dash (-).
     * Does not support at the same time set up LaunchConfiguration. The HostName and LaunchConfiguration. HostNames. N, otherwise it will return an error message.
     * When specifying both the launch template and the launch configuration information, the launch template is preferred.
         */
        readonly hostNames?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property hostName: The hostname of the instance.
         */
        readonly hostName?: string | ros.IResolvable;
        /**
         * @Property passwordInherit: Specifies whether to use the password preset in the image.
         */
        readonly passwordInherit?: boolean | ros.IResolvable;
        /**
         * @Property keyPairName: The name of the key pair to be bound to the instance.
         */
        readonly keyPairName?: string | ros.IResolvable;
        /**
         * @Property ioOptimized: Specifies whether the instance is I\/O optimized. Valid values:
     * none: The instance is not I\/O optimized.
     * optimized: The instance is I\/O optimized.
         */
        readonly ioOptimized?: string | ros.IResolvable;
        /**
         * @Property systemDiskKmsKeyId: The ID of the KMS key.
         */
        readonly systemDiskKmsKeyId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID.
         */
        readonly securityGroupId: string | ros.IResolvable;
        /**
         * @Property imageFamily: The image family.
         */
        readonly imageFamily?: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: A list of security groups to which the instance belongs.
         */
        readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
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
         * @Property systemDiskBurstingEnabled: Specifies whether bursting is enabled.
         */
        readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property deploymentSetId: The deployment set ID.
         */
        readonly deploymentSetId?: string | ros.IResolvable;
        /**
         * @Property dataDisk: Data disk
         */
        readonly dataDisk?: Array<RosAutoProvisioningGroup.DataDiskProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100. Default value: 0.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property instanceDescription: The description of the instance.
         */
        readonly instanceDescription?: string | ros.IResolvable;
        /**
         * @Property tag:
         */
        readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * Active: Security hardening is enabled. This value is applicable only to public images.
     * Deactive: Security hardening is disabled. This value is applicable to all image types.
         */
        readonly securityEnhancementStrategy?: string | ros.IResolvable;
        /**
         * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode. For more information, see the "Standard mode" section of the Burstable instances topic.
     * Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section of the Burstable instances topic.
         */
        readonly creditSpecification?: string | ros.IResolvable;
        /**
         * @Property autoReleaseTime: The auto release time of the instance.
         */
        readonly autoReleaseTime?: string | ros.IResolvable;
    }
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface LaunchTemplateConfigProperty {
        /**
         * @Property cores: The cores.
         */
        readonly cores?: Array<number | ros.IResolvable> | ros.IResolvable;
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
         * @Property imageId: The image ID.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property instanceFamilyLevel: Instance specification family level, used to filter the range of instance specifications that meet the requirements. Valid values:
     * - EntryLevel: This is the shared instance specification. The cost is lower, but the performance of instance calculation cannot be guaranteed to be stable. It is suitable for business scenarios with low CPU usage at ordinary times.
     * - EnterpriseLevel: Enterprise level. Stable performance, resource exclusive, suitable for high stability requirements of business scenarios.
     * - CreditEntryLevel: Credit entry level, that is, burst performance instance. CPU credits are used to ensure the computing performance, which is suitable for the situation of low CPU utilization and occasional burst CPU utilization.
         */
        readonly instanceFamilyLevel?: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the Nth extended configurations of the launch template.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property maxPrice: The maximum price of the instance type specified in the Nth extended configurations
     * of the launch template.
         */
        readonly maxPrice?: number | ros.IResolvable;
        /**
         * @Property burstablePerformance: Whether it is a performance burst instance specification. Valid values:
     * - Exclude: The performance burst instance specification is not included.
     * - Include: Contains the performance burst instance specification.
     * - Required: Contains only the performance burst instance specification.
     * Default value: Include
         */
        readonly burstablePerformance?: string | ros.IResolvable;
        /**
         * @Property excludedInstanceTypes: The excluded instance types.
         */
        readonly excludedInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property memories: The memories.
         */
        readonly memories?: Array<number | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property architectures: The architectures.
         */
        readonly architectures?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface ResourcePoolOptionsProperty {
        /**
         * @Property strategy: The resource pool includes the private pool and the public pool generated after the elastic guarantee service or capacity reservation service is in effect, which can be selected when the instance is started. Range:
     * PrivatePoolFirst: Private pools take precedence Choosing this strategy, when specifying the ResourcePoolOptions. PrivatePoolIds, using the specified priority private pool. If the private pool is not specified or the designated private pool has insufficient capacity, the open type private pool will be matched automatically. If there is no eligible private pool, the instance is created using the public pool.
     * PrivatePoolOnly: Private pools only Choosing this strategy, you must specify ResourcePoolOptions. PrivatePoolIds. If the specified private pool capacity is insufficient, the instance will fail to start.
     * PublicPoolOnly: Creates instances using a public pool.
     * Default value: PublicPoolOnly
         */
        readonly strategy?: string | ros.IResolvable;
        /**
         * @Property privatePoolIds: Private pool ID. That is, elastic guarantee service ID or capacity reservation service ID. This parameter can only be passed to the Target mode private pool ID.
         */
        readonly privatePoolIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface SystemDiskConfigProperty {
        /**
         * @Property diskCategory: The category of the system disk.
         */
        readonly diskCategory: string | ros.IResolvable;
    }
}
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface TagProperty {
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
 * Properties for defining a `RosAutoSnapshotPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
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
     * Cannot start with http:\/\/ or https:\/\/.
     * Default value: null.
     */
    readonly autoSnapshotPolicyName?: string | ros.IResolvable;
    /**
     * @Property copiedSnapshotsRetentionDays: The retention period of the snapshot copy in the destination region. Unit: days.
     * Valid values:
     * - -1: The snapshot copy is retained until it is deleted.
     * - 1 to 65535: The snapshot copy is retained for the specified number of days.
     * After the retention period of the snapshot copy expires, the snapshot copy is
     * automatically deleted.
     * Default value: -1.
     */
    readonly copiedSnapshotsRetentionDays?: number | ros.IResolvable;
    /**
     * @Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.
     */
    readonly copyEncryptionConfiguration?: RosAutoSnapshotPolicy.CopyEncryptionConfigurationProperty | ros.IResolvable;
    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.
     */
    readonly enableCrossRegionCopy?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAutoSnapshotPolicy.TagsProperty[];
    /**
     * @Property targetCopyRegions: The target region of the snapshot is replicated across geographies. Setting a target region is currently supported.
     */
    readonly targetCopyRegions?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AutoSnapshotPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoSnapshotPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
 */
export declare class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoSnapshotPolicy";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    repeatWeekdays: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    retentionDays: number | ros.IResolvable;
    /**
     * @Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
     * A maximum of 24 time points can be selected.
     * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
     */
    timePoints: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
     * It can consist of [2, 128] English or Chinese characters.
     * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
     * Cannot start with http:\/\/ or https:\/\/.
     * Default value: null.
     */
    autoSnapshotPolicyName: string | ros.IResolvable | undefined;
    /**
     * @Property copiedSnapshotsRetentionDays: The retention period of the snapshot copy in the destination region. Unit: days.
     * Valid values:
     * - -1: The snapshot copy is retained until it is deleted.
     * - 1 to 65535: The snapshot copy is retained for the specified number of days.
     * After the retention period of the snapshot copy expires, the snapshot copy is
     * automatically deleted.
     * Default value: -1.
     */
    copiedSnapshotsRetentionDays: number | ros.IResolvable | undefined;
    /**
     * @Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.
     */
    copyEncryptionConfiguration: RosAutoSnapshotPolicy.CopyEncryptionConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    diskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.
     */
    enableCrossRegionCopy: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosAutoSnapshotPolicy.TagsProperty[] | undefined;
    /**
     * @Property targetCopyRegions: The target region of the snapshot is replicated across geographies. Setting a target region is currently supported.
     */
    targetCopyRegions: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAutoSnapshotPolicy {
    /**
     * @stability external
     */
    interface CopyEncryptionConfigurationProperty {
        /**
         * @Property kmsKeyId: KMS key ID used for snapshot offsite encryption backup
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether to enable remote encrypted backup of snapshots. Default: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
    }
}
export declare namespace RosAutoSnapshotPolicy {
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
/**
 * Properties for defining a `RosCapacityReservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
 */
export interface RosCapacityReservationProps {
    /**
     * @Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     */
    readonly instanceAmount: number | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of zone N within the region in which to create the capacity reservation. A capacity reservation can reserve resources within only a single zone.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property description: The description of the capacity reservation. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property endTime: The time when the capacity reservation expires. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    readonly endTime?: string | ros.IResolvable;
    /**
     * @Property endTimeType: The release mode of the capacity reservation. Valid values:
     * Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
     * Unlimited: The capacity reservation must be manually released. You can release it anytime.
     */
    readonly endTimeType?: string | ros.IResolvable;
    /**
     * @Property privatePoolOptions:
     */
    readonly privatePoolOptions?: RosCapacityReservation.PrivatePoolOptionsProperty | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosCapacityReservation.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CapacityReservation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CapacityReservation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
 */
export declare class RosCapacityReservation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CapacityReservation";
    /**
     * @Attribute PrivatePoolOptionsId: The ID of the capacity reservation.
     */
    readonly attrPrivatePoolOptionsId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     */
    instanceAmount: number | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of zone N within the region in which to create the capacity reservation. A capacity reservation can reserve resources within only a single zone.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property description: The description of the capacity reservation. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property endTime: The time when the capacity reservation expires. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    endTime: string | ros.IResolvable | undefined;
    /**
     * @Property endTimeType: The release mode of the capacity reservation. Valid values:
     * Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
     * Unlimited: The capacity reservation must be manually released. You can release it anytime.
     */
    endTimeType: string | ros.IResolvable | undefined;
    /**
     * @Property privatePoolOptions:
     */
    privatePoolOptions: RosCapacityReservation.PrivatePoolOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags:
     */
    tags: RosCapacityReservation.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCapacityReservationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCapacityReservation {
    /**
     * @stability external
     */
    interface PrivatePoolOptionsProperty {
        /**
         * @Property matchCriteria: The type of the private pool to generate after the capacity reservation takes effect. Valid values:
     * Open: open private pool
     * Target: targeted private pool
     * Default value: Open.
         */
        readonly matchCriteria?: string | ros.IResolvable;
        /**
         * @Property name: The name of the capacity reservation. The name must be 2 to 128 characters in length. The description must start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosCapacityReservation {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:\/\/ or https:\/\/.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. It cannot start with acs: or aliyun.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCloneDisks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
 */
export interface RosCloneDisksProps {
    /**
     * @Property diskCategory: The type of the new disk. Valid values:
     * - `cloud_essd`: ESSD cloud disk.
     * - `cloud_auto`: ESSD AutoPL cloud disk.
     * - `cloud_essd_entry`: ESSD Entry cloud disk.
     * - `cloud_regional_disk_auto`: regional disk.
     * > Disk type limits for cloning
     * >
     * > - A non-regional disk can be cloned only as a non-regional disk.
     * >
     * > - A regional disk can be cloned only as a regional disk.
     */
    readonly diskCategory: string | ros.IResolvable;
    /**
     * @Property multiAttach: Specifies whether to enable the multi-attach feature for the new disk. Valid
     * values:
     * - `Disabled`: Disables the multi-attach feature.
     * - `Enabled`: Enables the multi-attach feature. You can set this parameter to
     * `Enabled` only for ESSD cloud disks.
     */
    readonly multiAttach: string | ros.IResolvable;
    /**
     * @Property size: The size of the new disk, in GiB. The value must be greater than or equal to the
     * size of the source disk. The value range varies based on the `DiskCategory`
     * value:
     * - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
     * - `PL0`: 1 to 65,536
     * - `PL1`: 20 to 65,536
     * - `PL2`: 461 to 65,536
     * - `PL3`: 1,261 to 65,536
     * - `cloud_auto`: 1 to 65,536
     * - `cloud_essd_entry`: 10 to 32,768
     * - `cloud_regional_disk_auto`: 10 to 65,536
     */
    readonly size: number | ros.IResolvable;
    /**
     * @Property sourceDiskId: The ID of the source disk.
     */
    readonly sourceDiskId: string | ros.IResolvable;
    /**
     * @Property burstingEnabled: Specifies whether to enable performance bursting for the new disk. Valid values:
     * - `true`: Enables performance bursting.
     * - `false`: Disables performance bursting.
     * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
     * more information, see ESSD AutoPL cloud disks.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property diskName: The name of the new disk. The name must be 2 to 128 characters in length. It must
     * start with a letter and can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     * Default value: none.
     */
    readonly diskName?: string | ros.IResolvable;
    /**
     * @Property encrypted: Specifies whether to encrypt the new disk. Valid values:
     * - `true`: The disk is encrypted.
     * - `false`: The disk is not encrypted.
     * Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property performanceLevel: The performance level of the new ESSD cloud disk. Valid values:
     * - `PL0`: A single disk can deliver up to 10,000 random read\/write IOPS.
     * - `PL1`: A single disk can deliver up to 50,000 random read\/write IOPS.
     * - `PL2`: A single disk can deliver up to 100,000 random read\/write IOPS.
     * - `PL3`: A single disk can deliver up to 1,000,000 random read\/write IOPS.
     * > This parameter is required when `DiskCategory` is set to `cloud_essd`.
     */
    readonly performanceLevel?: string | ros.IResolvable;
    /**
     * @Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk. Valid values:
     * - You cannot set this parameter for disks that are 3 GiB or smaller in size.
     * - For disks that are 4 GiB or larger in size, the value must be in the range of
     * `[0, min(1000 * Size - baseline performance, 50000)]`.
     * baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
     * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
     * more information, see ESSD AutoPL cloud disks.
     */
    readonly provisionedIops?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloneDisks.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CloneDisks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CloneDisks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
 */
export declare class RosCloneDisks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CloneDisks";
    /**
     * @Attribute DiskIds: The IDS of the disk.
     */
    readonly attrDiskIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskCategory: The type of the new disk. Valid values:
     * - `cloud_essd`: ESSD cloud disk.
     * - `cloud_auto`: ESSD AutoPL cloud disk.
     * - `cloud_essd_entry`: ESSD Entry cloud disk.
     * - `cloud_regional_disk_auto`: regional disk.
     * > Disk type limits for cloning
     * >
     * > - A non-regional disk can be cloned only as a non-regional disk.
     * >
     * > - A regional disk can be cloned only as a regional disk.
     */
    diskCategory: string | ros.IResolvable;
    /**
     * @Property multiAttach: Specifies whether to enable the multi-attach feature for the new disk. Valid
     * values:
     * - `Disabled`: Disables the multi-attach feature.
     * - `Enabled`: Enables the multi-attach feature. You can set this parameter to
     * `Enabled` only for ESSD cloud disks.
     */
    multiAttach: string | ros.IResolvable;
    /**
     * @Property size: The size of the new disk, in GiB. The value must be greater than or equal to the
     * size of the source disk. The value range varies based on the `DiskCategory`
     * value:
     * - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
     * - `PL0`: 1 to 65,536
     * - `PL1`: 20 to 65,536
     * - `PL2`: 461 to 65,536
     * - `PL3`: 1,261 to 65,536
     * - `cloud_auto`: 1 to 65,536
     * - `cloud_essd_entry`: 10 to 32,768
     * - `cloud_regional_disk_auto`: 10 to 65,536
     */
    size: number | ros.IResolvable;
    /**
     * @Property sourceDiskId: The ID of the source disk.
     */
    sourceDiskId: string | ros.IResolvable;
    /**
     * @Property burstingEnabled: Specifies whether to enable performance bursting for the new disk. Valid values:
     * - `true`: Enables performance bursting.
     * - `false`: Disables performance bursting.
     * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
     * more information, see ESSD AutoPL cloud disks.
     */
    burstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property diskName: The name of the new disk. The name must be 2 to 128 characters in length. It must
     * start with a letter and can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     * Default value: none.
     */
    diskName: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Specifies whether to encrypt the new disk. Valid values:
     * - `true`: The disk is encrypted.
     * - `false`: The disk is not encrypted.
     * Default value: false.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property performanceLevel: The performance level of the new ESSD cloud disk. Valid values:
     * - `PL0`: A single disk can deliver up to 10,000 random read\/write IOPS.
     * - `PL1`: A single disk can deliver up to 50,000 random read\/write IOPS.
     * - `PL2`: A single disk can deliver up to 100,000 random read\/write IOPS.
     * - `PL3`: A single disk can deliver up to 1,000,000 random read\/write IOPS.
     * > This parameter is required when `DiskCategory` is set to `cloud_essd`.
     */
    performanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk. Valid values:
     * - You cannot set this parameter for disks that are 3 GiB or smaller in size.
     * - For disks that are 4 GiB or larger in size, the value must be in the range of
     * `[0, min(1000 * Size - baseline performance, 50000)]`.
     * baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
     * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
     * more information, see ESSD AutoPL cloud disks.
     */
    provisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCloneDisks.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCloneDisksProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCloneDisks {
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
/**
 * Properties for defining a `RosCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
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
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: Base64. If the specified value of this parameter is invalid, Base64 is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;
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
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    readonly launcher?: string | ros.IResolvable;
    /**
     * @Property name: The name of command.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Command`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Command` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
 */
export declare class RosCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Command";
    /**
     * @Attribute CommandId: The id of command created.
     */
    readonly attrCommandId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property type: The type of command.
     */
    type: string | ros.IResolvable;
    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    commandContent: string | ros.IResolvable | undefined;
    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: Base64. If the specified value of this parameter is invalid, Base64 is used by default.
     */
    contentEncoding: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of command.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    enableParameter: boolean | ros.IResolvable | undefined;
    /**
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    launcher: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of command.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to command. Max support 20 tags to add during create command. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCommand.TagsProperty[] | undefined;
    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    workingDir: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommandProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCommand {
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
/**
 * Properties for defining a `RosCopyImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
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
     * @Property allowCopyInSameRegion: Whether to allow copying images in the same region.
     * If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
     */
    readonly allowCopyInSameRegion?: boolean | ros.IResolvable;
    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:\/\/ or https:\/\/.  Default value: null.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CopyImage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CopyImage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
 */
export declare class RosCopyImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CopyImage";
    /**
     * @Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * @Attribute ImageId: ID of the source custom image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute SourceRegionId: ID of the region to where the source image belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    destinationRegionId: string | ros.IResolvable;
    /**
     * @Property imageId: ID of the source custom image.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property allowCopyInSameRegion: Whether to allow copying images in the same region.
     * If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
     */
    allowCopyInSameRegion: boolean | ros.IResolvable | undefined;
    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:\/\/ or https:\/\/.  Default value: null.
     */
    destinationDescription: string | ros.IResolvable | undefined;
    /**
     * @Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    destinationImageName: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Whether to encrypt the image.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the image copy belongs. If not provided, the image copy belongs to the default resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceRegionId: ID of the region to where the source image belongs. Default is current region ID.
     */
    sourceRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property tag:
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCopyImageProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCopyImage {
    /**
     * @stability external
     */
    interface TagProperty {
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
 * Properties for defining a `RosCustomImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
 */
export interface RosCustomImageProps {
    /**
     * @Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    readonly architecture?: string | ros.IResolvable;
    /**
     * @Property bootMode: Modify the startup mode of the image. Ranges:
     * BIOS: BIOS boot mode.
     * UEFI: UEFI boot mode.
     * You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
     */
    readonly bootMode?: string | ros.IResolvable;
    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:\/\/ or https:\/\/.
     * Default value: null.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property detectionStrategy: Image detection policy. If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux\/Windows versions are supported.
     */
    readonly detectionStrategy?: string | ros.IResolvable;
    /**
     * @Property diskDeviceMapping:
     */
    readonly diskDeviceMapping?: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property features: Mirror feature-related properties.
     */
    readonly features?: RosCustomImage.FeaturesProperty | ros.IResolvable;
    /**
     * @Property imageFamily: The name of the image family of the image. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:\/\/ or https:\/\/. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:\/\/ or https:\/\/.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * @Property imageVersion: Image version.
     * When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
     */
    readonly imageVersion?: string | ros.IResolvable;
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
     * @Property sourceRegionId: ID of the region to where the instance\/snapshot belongs. Default is current region ID.
     */
    readonly sourceRegionId?: string | ros.IResolvable;
    /**
     * @Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CustomImage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomImage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
 */
export declare class RosCustomImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CustomImage";
    /**
     * @Attribute ImageId: Image ID
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    architecture: string | ros.IResolvable | undefined;
    /**
     * @Property bootMode: Modify the startup mode of the image. Ranges:
     * BIOS: BIOS boot mode.
     * UEFI: UEFI boot mode.
     * You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
     */
    bootMode: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:\/\/ or https:\/\/.
     * Default value: null.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property detectionStrategy: Image detection policy. If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux\/Windows versions are supported.
     */
    detectionStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property diskDeviceMapping:
     */
    diskDeviceMapping: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property features: Mirror feature-related properties.
     */
    features: RosCustomImage.FeaturesProperty | ros.IResolvable | undefined;
    /**
     * @Property imageFamily: The name of the image family of the image. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:\/\/ or https:\/\/. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    imageFamily: string | ros.IResolvable | undefined;
    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:\/\/ or https:\/\/.
     */
    imageName: string | ros.IResolvable | undefined;
    /**
     * @Property imageVersion: Image version.
     * When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
     */
    imageVersion: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    platform: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the custom image.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceRegionId: ID of the region to where the instance\/snapshot belongs. Default is current region ID.
     */
    sourceRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property tag:
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomImageProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCustomImage {
    /**
     * @stability external
     */
    interface DiskDeviceMappingProperty {
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
         * @Property device: Specify the device name in DiskMirrorMapping.N. in the custom image. Value range: \/dev\/xvda~\/dev\/xvdz
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
export declare namespace RosCustomImage {
    /**
     * @stability external
     */
    interface FeaturesProperty {
        /**
         * @Property imdsSupport: Mirrored metadata access pattern, possible values:
     * - v1: Setting the metadata access mode to "hardened only mode" is not supported when creating an ECS instance through this image.
     * - v2: Supports setting the metadata access mode to hardened mode only when creating an ECS instance through this image.
     * Default: v1 is the default when using snapshots to create images. When an instance is used to create an image, the default is the value of the ImdsSupport property of the image at the time of instance creation.
         */
        readonly imdsSupport?: string | ros.IResolvable;
    }
}
export declare namespace RosCustomImage {
    /**
     * @stability external
     */
    interface TagProperty {
        /**
         * @Property value: The value of a tag of which n is a number from 1 to 20. Once you use this parameter, it can be a null string. It can be up to 128 characters in length. It cannot begin with "aliyun", "acs:", "http:\/\/", or "https:\/\/".
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of a tag of which n is from 1 to 20. Once you use this parameter, it cannot be a null string. It can be up to 64 characters in length. It cannot begin with "aliyun", "acs:", "http:\/\/", or "https:\/\/".
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDedicatedHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
 */
export interface RosDedicatedHostProps {
    /**
     * @Property dedicatedHostType: The dedicated host type. You can call the [DescribeDedicatedHostTypes]()
     * operation to query the most recent list of dedicated host types.
     */
    readonly dedicatedHostType: string | ros.IResolvable;
    /**
     * @Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the
     * dedicated host fails or needs to be repaired online. Valid values:
     * - Migrate: The instances are migrated to another physical machine and then
     * restarted.
     * If cloud disks are attached to the dedicated host, the default value is Migrate.
     * - Stop: The instances are stopped. If the dedicated host cannot be repaired, the
     * instances are migrated to another physical machine and then restarted.
     * If local disks are attached to the dedicated host, the default value is Stop.
     */
    readonly actionOnMaintenance?: string | ros.IResolvable;
    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    readonly autoPlacement?: string | ros.IResolvable;
    /**
     * @Property autoReleaseTime: The time when to automatically release the dedicated host. Specify the time in
     * the `ISO 8601` standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
     * UTC.
     * >
     * - It must be at least half an hour later than the current time.
     * - It must be at most three years later than the current time.
     * - If the value of seconds (ss) is not 00, it is automatically set to 00.
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
     * @Property cpuOverCommitRatio: The CPU overcommit ratio. You can configure CPU overcommit ratios only for the
     * following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
     * The CPU overcommit ratio affects the number of available vCPUs on a dedicated
     * host. You can use the following formula to calculate the number of available
     * vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
     * cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
     * on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
     * dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
     * For scenarios that have minimal requirements on CPU stability or where CPU load
     * is not heavy, such as development and test environments, you can increase the
     * number of available vCPUs on a dedicated host by increasing the CPU overcommit
     * ratio. This way, you can deploy more ECS instances of the same specifications on
     * the dedicated host and reduce the unit deployment cost.
     */
    readonly cpuOverCommitRatio?: number | ros.IResolvable;
    /**
     * @Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    readonly dedicatedHostClusterId?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostName: The name of the dedicated host. The name must be 2 to 128 characters in length
     * and can contain letters and digits. The name can contain colons (:), underscores
     * (_), periods (.), and hyphens (-).
     */
    readonly dedicatedHostName?: string | ros.IResolvable;
    /**
     * @Property description: The description of the dedicated host. The description must be 2 to 256
     * characters in length and cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property minQuantity: The minimum number of dedicated hosts to create. Valid values: 1 to 100.
     * > If the number of available dedicated hosts is less than the minimum number of
     * dedicated hosts to create, the dedicated hosts fail to be created.
     */
    readonly minQuantity?: number | ros.IResolvable;
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
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.
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
     * @Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];
    /**
     * @Property zoneId: The ID of the zone in which to create the dedicated host.
     * This parameter is empty by default. If you do not specify a zone, the system
     * selects a zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DedicatedHost`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
 */
export declare class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DedicatedHost";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DedicatedHostIds: The host id list of created hosts
     */
    readonly attrDedicatedHostIds: ros.IResolvable;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostType: The dedicated host type. You can call the [DescribeDedicatedHostTypes]()
     * operation to query the most recent list of dedicated host types.
     */
    dedicatedHostType: string | ros.IResolvable;
    /**
     * @Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the
     * dedicated host fails or needs to be repaired online. Valid values:
     * - Migrate: The instances are migrated to another physical machine and then
     * restarted.
     * If cloud disks are attached to the dedicated host, the default value is Migrate.
     * - Stop: The instances are stopped. If the dedicated host cannot be repaired, the
     * instances are migrated to another physical machine and then restarted.
     * If local disks are attached to the dedicated host, the default value is Stop.
     */
    actionOnMaintenance: string | ros.IResolvable | undefined;
    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    autoPlacement: string | ros.IResolvable | undefined;
    /**
     * @Property autoReleaseTime: The time when to automatically release the dedicated host. Specify the time in
     * the `ISO 8601` standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
     * UTC.
     * >
     * - It must be at least half an hour later than the current time.
     * - It must be at most three years later than the current time.
     * - If the value of seconds (ss) is not 00, it is automatically set to 00.
     */
    autoReleaseTime: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property cpuOverCommitRatio: The CPU overcommit ratio. You can configure CPU overcommit ratios only for the
     * following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
     * The CPU overcommit ratio affects the number of available vCPUs on a dedicated
     * host. You can use the following formula to calculate the number of available
     * vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
     * cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
     * on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
     * dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
     * For scenarios that have minimal requirements on CPU stability or where CPU load
     * is not heavy, such as development and test environments, you can increase the
     * number of available vCPUs on a dedicated host by increasing the CPU overcommit
     * ratio. This way, you can deploy more ECS instances of the same specifications on
     * the dedicated host and reduce the unit deployment cost.
     */
    cpuOverCommitRatio: number | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    dedicatedHostClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostName: The name of the dedicated host. The name must be 2 to 128 characters in length
     * and can contain letters and digits. The name can contain colons (:), underscores
     * (_), periods (.), and hyphens (-).
     */
    dedicatedHostName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the dedicated host. The description must be 2 to 256
     * characters in length and cannot start with `http:\/\/` or `https:\/\/`.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property minQuantity: The minimum number of dedicated hosts to create. Valid values: 1 to 100.
     * > If the number of available dedicated hosts is less than the minimum number of
     * dedicated hosts to create, the dedicated hosts fail to be created.
     */
    minQuantity: number | ros.IResolvable | undefined;
    /**
     * @Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    networkAttributesSlbUdpTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    networkAttributesUdpTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    quantity: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDedicatedHost.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The ID of the zone in which to create the dedicated host.
     * This parameter is empty by default. If you do not specify a zone, the system
     * selects a zone.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDedicatedHost {
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
/**
 * Properties for defining a `RosDedicatedHostCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
 */
export interface RosDedicatedHostClusterProps {
    /**
     * @Property dedicatedHostClusterName: The name of the host group. It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    readonly dedicatedHostClusterName?: string | ros.IResolvable;
    /**
     * @Property description: The description of the host group. It must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group ID of the host group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of dedicated host cluster.
     */
    readonly tags?: RosDedicatedHostCluster.TagsProperty[];
    /**
     * @Property zoneId: The zone ID of the host group.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DedicatedHostCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
 */
export declare class RosDedicatedHostCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DedicatedHostCluster";
    /**
     * @Attribute DedicatedHostClusterId: Dedicated host cluster id.
     */
    readonly attrDedicatedHostClusterId: ros.IResolvable;
    /**
     * @Attribute DedicatedHostClusterName: The name of the host group.
     */
    readonly attrDedicatedHostClusterName: ros.IResolvable;
    /**
     * @Attribute Description: The description of the host group.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group ID of the host group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tag of the dedicated host cluster.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID of the host group.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostClusterName: The name of the host group. It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    dedicatedHostClusterName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the host group. It must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group ID of the host group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of dedicated host cluster.
     */
    tags: RosDedicatedHostCluster.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The zone ID of the host group.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDedicatedHostCluster {
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
/**
 * Properties for defining a `RosDeploymentSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
 */
export interface RosDeploymentSetProps {
    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly deploymentSetName?: string | ros.IResolvable;
    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property groupCount: Set the number of groups for the deployment set group high availability policy. Value range: 1~7.
     * Default value: 3.
     * This parameter only takes effect when Strategy=AvailabilityGroup.
     */
    readonly groupCount?: number | ros.IResolvable;
    /**
     * @Property onUnableToRedeployFailedInstance: The policy to use when an instance fails over but cannot be redeployed due to
     * insufficient resources. Valid values:
     * - CancelMembershipAndStart: Removes the instance from the deployment set and
     * starts the instance immediately after failover.
     * - KeepStopped: Keeps the instance's deployment set membership and leaves it in
     * the Stopped state.
     * Default value: CancelMembershipAndStart.
     */
    readonly onUnableToRedeployFailedInstance?: string | ros.IResolvable;
    /**
     * @Property strategy: The deployment strategy. Valid values:
     * - Availability: A high availability strategy.
     * - AvailabilityGroup: A high availability strategy for a deployment set group.
     * - LowLatency: A low-latency strategy.
     * Default value: Availability.
     */
    readonly strategy?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DeploymentSet`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeploymentSet` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
 */
export declare class RosDeploymentSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DeploymentSet";
    /**
     * @Attribute DeploymentSetId: The ID of the deployment set.
     */
    readonly attrDeploymentSetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    deploymentSetName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property groupCount: Set the number of groups for the deployment set group high availability policy. Value range: 1~7.
     * Default value: 3.
     * This parameter only takes effect when Strategy=AvailabilityGroup.
     */
    groupCount: number | ros.IResolvable | undefined;
    /**
     * @Property onUnableToRedeployFailedInstance: The policy to use when an instance fails over but cannot be redeployed due to
     * insufficient resources. Valid values:
     * - CancelMembershipAndStart: Removes the instance from the deployment set and
     * starts the instance immediately after failover.
     * - KeepStopped: Keeps the instance's deployment set membership and leaves it in
     * the Stopped state.
     * Default value: CancelMembershipAndStart.
     */
    onUnableToRedeployFailedInstance: string | ros.IResolvable | undefined;
    /**
     * @Property strategy: The deployment strategy. Valid values:
     * - Availability: A high availability strategy.
     * - AvailabilityGroup: A high availability strategy for a deployment set group.
     * - LowLatency: A low-latency strategy.
     * Default value: Availability.
     */
    strategy: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentSetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDisk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
 */
export interface RosDiskProps {
    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property burstingEnabled: Specifies whether to enable performance bursting. Valid values:
     * - true
     * - false
     * > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
     * information, see [ESSD AutoPL disks]().
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
     * @Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.
     */
    readonly diskCategory?: string | ros.IResolvable;
    /**
     * @Property diskName: The name of the disk. The name must be 2 to 128 characters in length. It must
     * start with a letter as defined by Unicode and can contain letters (including
     * English and Chinese characters), digits (0-9), colons (:), underscores (_),
     * periods (.), and hyphens (-).
     * Default value: empty.
     */
    readonly diskName?: string | ros.IResolvable;
    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property instanceId: Creates a subscription disk and automatically attaches it to the specified
     * subscription instance.
     * - If you set this parameter, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`,
     * `ClientToken`, and `KMSKeyId` parameters are ignored.
     * - You cannot specify both `ZoneId` and `InstanceId`.
     * Default value: empty. An empty value indicates that you are creating a
     * pay-as-you-go disk. The disk's location is determined by `RegionId` and `ZoneId`.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the KMS key to use for the disk.
     * > If `Encrypted` is set to true and you do not specify `KMSKeyId`, a default key
     * is used for encryption. The `KMSKeyId` is returned in the response after the
     * instance is created.
     * >
     * > - - If the disk is created from an unshared encrypted snapshot, the encryption
     * key used by that snapshot is used by default.
     * >
     * > - - If the disk is created from a shared encrypted snapshot, the service key is
     * used by default.
     * >
     * > - - If the disk is created in a region with account-level default encryption
     * enabled, the specified account-level key is used by default.
     * >
     * > - - In other cases, the service key is used by default.
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
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     */
    readonly performanceLevel?: string | ros.IResolvable;
    /**
     * @Property provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk. Valid values:
     * - Capacity <= 3 GiB: You cannot set provisioned performance.
     * - Capacity >= 4 GiB: 0 to min(1,000 IOPS\/GiB × Capacity - Baseline IOPS, 50,000).
     * Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).
     * > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
     * information, see [ESSD AutoPL disks]().
     */
    readonly provisionedIops?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property size: The capacity of the disk, in GiB. You must specify a value for this parameter.
     * Value range:
     * - `cloud`: 5 to 2,000
     * - `cloud_efficiency`: 20 to 32,768
     * - `cloud_ssd`: 20 to 32,768
     * - `PerformanceLevel`
     * - PL0: 1 to 65,536
     * - PL1: 20 to 65,536
     * - PL2: 461 to 65,536
     * - PL3: 1,261 to 65,536
     * - `cloud_auto`: 1 to 65,536
     * - `cloud_essd_entry`: 10 to 32,768
     * - `cloud_regional_disk_auto`: 10 to 65,536
     * - `elastic_ephemeral_disk_standard`: 64 to 8,192
     * - `elastic_ephemeral_disk_premium`: 64 to 8,192
     * If you specify `SnapshotId`, the following limits apply to `SnapshotId` and
     * `Size`:
     * - If the snapshot capacity is greater than the specified `Size`, the actual disk
     * size is the snapshot capacity.
     * - If the snapshot capacity is smaller than the specified `Size`, the actual disk
     * size is the specified `Size`.
     */
    readonly size?: number | ros.IResolvable;
    /**
     * @Property snapshotId: The ID of the snapshot used to create the disk. Snapshots created on or before
     * July 15, 2013 cannot be used to create disks.
     * The `SnapshotId` and `Size` parameters have the following limits:
     * - If the snapshot capacity is greater than the specified `Size`, the actual disk
     * size is the snapshot capacity.
     * - If the snapshot capacity is smaller than the specified `Size`, the actual disk
     * size is the specified `Size`.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * @Property storageSetId: The ID of the storage set.
     * > You can specify either storage set parameters (`StorageSetId` and
     * `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter
     * (`StorageClusterId`), but not both. The request fails if you specify parameters
     * for both.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * @Property storageSetPartitionNumber: The number of partitions in the storage set. The value must be greater than or
     * equal to 2 and cannot exceed the quota returned by the
     * [DescribeAccountAttributes]() operation.
     * Default value: 2.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDisk.TagsProperty[];
    /**
     * @Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.
     * - If you do not set `InstanceId`, this parameter is required.
     * - You cannot specify both `ZoneId` and `InstanceId`.
     * > ESSD zone-redundant disks (`cloud_regional_disk_auto`) do not require a zone
     * ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Disk`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disk` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
 */
export declare class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Disk";
    /**
     * @Attribute DiskId: Id of created disk.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute Status: Created disk status.
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    autoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property burstingEnabled: Specifies whether to enable performance bursting. Valid values:
     * - true
     * - false
     * > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
     * information, see [ESSD AutoPL disks]().
     */
    burstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    deleteAutoSnapshot: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto\/cloud_essd_entry\/cloud_regional_disk_auto\/elastic_ephemeral_disk_standard\/elastic_ephemeral_disk_premium, depends the region.
     */
    diskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property diskName: The name of the disk. The name must be 2 to 128 characters in length. It must
     * start with a letter as defined by Unicode and can contain letters (including
     * English and Chinese characters), digits (0-9), colons (:), underscores (_),
     * periods (.), and hyphens (-).
     * Default value: empty.
     */
    diskName: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceId: Creates a subscription disk and automatically attaches it to the specified
     * subscription instance.
     * - If you set this parameter, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`,
     * `ClientToken`, and `KMSKeyId` parameters are ignored.
     * - You cannot specify both `ZoneId` and `InstanceId`.
     * Default value: empty. An empty value indicates that you are creating a
     * pay-as-you-go disk. The disk's location is determined by `RegionId` and `ZoneId`.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the KMS key to use for the disk.
     * > If `Encrypted` is set to true and you do not specify `KMSKeyId`, a default key
     * is used for encryption. The `KMSKeyId` is returned in the response after the
     * instance is created.
     * >
     * > - - If the disk is created from an unshared encrypted snapshot, the encryption
     * key used by that snapshot is used by default.
     * >
     * > - - If the disk is created from a shared encrypted snapshot, the service key is
     * used by default.
     * >
     * > - - If the disk is created in a region with account-level default encryption
     * enabled, the specified account-level key is used by default.
     * >
     * > - - In other cases, the service key is used by default.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property multiAttach: Specifies whether to enable the multi-attach feature for the disk. Valid values:
     * Disabled: disables the multi-attach feature.
     * Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
     * Default value: Disabled.
     */
    multiAttach: string | ros.IResolvable | undefined;
    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     */
    performanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property provisionedIops: The provisioned read\/write IOPS of a single ESSD AutoPL disk. Valid values:
     * - Capacity <= 3 GiB: You cannot set provisioned performance.
     * - Capacity >= 4 GiB: 0 to min(1,000 IOPS\/GiB × Capacity - Baseline IOPS, 50,000).
     * Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).
     * > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more
     * information, see [ESSD AutoPL disks]().
     */
    provisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property size: The capacity of the disk, in GiB. You must specify a value for this parameter.
     * Value range:
     * - `cloud`: 5 to 2,000
     * - `cloud_efficiency`: 20 to 32,768
     * - `cloud_ssd`: 20 to 32,768
     * - `PerformanceLevel`
     * - PL0: 1 to 65,536
     * - PL1: 20 to 65,536
     * - PL2: 461 to 65,536
     * - PL3: 1,261 to 65,536
     * - `cloud_auto`: 1 to 65,536
     * - `cloud_essd_entry`: 10 to 32,768
     * - `cloud_regional_disk_auto`: 10 to 65,536
     * - `elastic_ephemeral_disk_standard`: 64 to 8,192
     * - `elastic_ephemeral_disk_premium`: 64 to 8,192
     * If you specify `SnapshotId`, the following limits apply to `SnapshotId` and
     * `Size`:
     * - If the snapshot capacity is greater than the specified `Size`, the actual disk
     * size is the snapshot capacity.
     * - If the snapshot capacity is smaller than the specified `Size`, the actual disk
     * size is the specified `Size`.
     */
    size: number | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: The ID of the snapshot used to create the disk. Snapshots created on or before
     * July 15, 2013 cannot be used to create disks.
     * The `SnapshotId` and `Size` parameters have the following limits:
     * - If the snapshot capacity is greater than the specified `Size`, the actual disk
     * size is the snapshot capacity.
     * - If the snapshot capacity is smaller than the specified `Size`, the actual disk
     * size is the specified `Size`.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetId: The ID of the storage set.
     * > You can specify either storage set parameters (`StorageSetId` and
     * `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter
     * (`StorageClusterId`), but not both. The request fails if you specify parameters
     * for both.
     */
    storageSetId: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetPartitionNumber: The number of partitions in the storage set. The value must be greater than or
     * equal to 2 and cannot exceed the quota returned by the
     * [DescribeAccountAttributes]() operation.
     * Default value: 2.
     */
    storageSetPartitionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDisk.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The ID of the zone in which to create the pay-as-you-go disk.
     * - If you do not set `InstanceId`, this parameter is required.
     * - You cannot specify both `ZoneId` and `InstanceId`.
     * > ESSD zone-redundant disks (`cloud_regional_disk_auto`) do not require a zone
     * ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDisk {
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
/**
 * Properties for defining a `RosDiskAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
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
     * @Property bootable: Whether the disk is bootable.
     */
    readonly bootable?: boolean | ros.IResolvable;
    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;
    /**
     * @Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;
    /**
     * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[b-z]. If not specification, will use default value.
     */
    readonly device?: string | ros.IResolvable;
    /**
     * @Property force: Whether to force the operation.
     */
    readonly force?: boolean | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. Allowed values are LingJun and ECS, Default is ECS.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property password: The password for the disk.
     */
    readonly password?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DiskAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
 */
export declare class RosDiskAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DiskAttachment";
    /**
     * @Attribute Device: The device where the volume is exposed on ecs instance.
     */
    readonly attrDevice: ros.IResolvable;
    /**
     * @Attribute DiskId: The disk id of created disk
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute Status: The disk status now.
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: The disk id to attached.
     */
    diskId: string | ros.IResolvable;
    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property bootable: Whether the disk is bootable.
     */
    bootable: boolean | ros.IResolvable | undefined;
    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    deleteAutoSnapshot: boolean | ros.IResolvable | undefined;
    /**
     * @Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    deleteWithInstance: boolean | ros.IResolvable | undefined;
    /**
     * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[b-z]. If not specification, will use default value.
     */
    device: string | ros.IResolvable | undefined;
    /**
     * @Property force: Whether to force the operation.
     */
    force: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type. Allowed values are LingJun and ECS, Default is ECS.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: The name of the key pair.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property password: The password for the disk.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosElasticityAssurance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
export interface RosElasticityAssuranceProps {
    /**
     * @Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     * Valid values: 1 to 1000.
     */
    readonly instanceAmount: number | ros.IResolvable;
    /**
     * @Property instanceTypes: Instance type. Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
     */
    readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the elasticity assurance. Currently, an elasticity assurance can be used to reserve resources within a single zone.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the elasticity assurance. Valid
     * values:
     * - true
     * - false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
     * - Default value when `PeriodUnit` is set to Month: 1.
     * - Default value when `PeriodUnit` is set to Year: 12.
     * > If you set `AutoRenew` to `true`, you must specify this parameter.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property description: The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property instanceCpuCoreCount: > This parameter is no longer used.
     */
    readonly instanceCpuCoreCount?: number | ros.IResolvable;
    /**
     * @Property period: The validity period of the elasticity assurance. The unit of the validity period
     * is determined by the value of `PeriodUnit`. Specifies whether to check the image
     * used by the instance supports hot migration. Valid values:
     * - When the value of `PeriodUnit` is `Month`, the valid values are 1, 2, 3, 4, 5,
     * 6, 7, 8, and 9.
     * - When the value of `PeriodUnit` is `Year`, the valid values are 1, 2, 3, 4, and
     * 5.
     * - When the value of `PeriodUnit` is `Day`, the valid values are 1 to 365.
     * Default value: 1
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the validity period of the elasticity assurance. Valid values:
     * - Month
     * - Year
     * - Day
     * \*\*
     * Note If you set `PeriodUnit` to `Day`, you must specify RecurrenceRules to create
     * a time-segmented elasticity assurance.
     * Default value: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property privatePoolOptions:
     */
    readonly privatePoolOptions?: RosElasticityAssurance.PrivatePoolOptionsProperty | ros.IResolvable;
    /**
     * @Property recurrenceRules: The assurance schedules based on which the capacity reservation takes effect.
     * > Time-segmented elasticity assurances are available only in specific regions and
     * to specific users. To use time-segmented elasticity assurances, submit a ticket.
     */
    readonly recurrenceRules?: Array<RosElasticityAssurance.RecurrenceRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property startTime: The time when the elasticity assurance takes effect. The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    readonly startTime?: string | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosElasticityAssurance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ElasticityAssurance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ElasticityAssurance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
export declare class RosElasticityAssurance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ElasticityAssurance";
    /**
     * @Attribute PrivatePoolOptionsId: The ID of the elasticity assurance.
     */
    readonly attrPrivatePoolOptionsId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     * Valid values: 1 to 1000.
     */
    instanceAmount: number | ros.IResolvable;
    /**
     * @Property instanceTypes: Instance type. Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
     */
    instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the elasticity assurance. Currently, an elasticity assurance can be used to reserve resources within a single zone.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the elasticity assurance. Valid
     * values:
     * - true
     * - false
     * Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
     * - Default value when `PeriodUnit` is set to Month: 1.
     * - Default value when `PeriodUnit` is set to Year: 12.
     * > If you set `AutoRenew` to `true`, you must specify this parameter.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instanceCpuCoreCount: > This parameter is no longer used.
     */
    instanceCpuCoreCount: number | ros.IResolvable | undefined;
    /**
     * @Property period: The validity period of the elasticity assurance. The unit of the validity period
     * is determined by the value of `PeriodUnit`. Specifies whether to check the image
     * used by the instance supports hot migration. Valid values:
     * - When the value of `PeriodUnit` is `Month`, the valid values are 1, 2, 3, 4, 5,
     * 6, 7, 8, and 9.
     * - When the value of `PeriodUnit` is `Year`, the valid values are 1, 2, 3, 4, and
     * 5.
     * - When the value of `PeriodUnit` is `Day`, the valid values are 1 to 365.
     * Default value: 1
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the validity period of the elasticity assurance. Valid values:
     * - Month
     * - Year
     * - Day
     * \*\*
     * Note If you set `PeriodUnit` to `Day`, you must specify RecurrenceRules to create
     * a time-segmented elasticity assurance.
     * Default value: Year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privatePoolOptions:
     */
    privatePoolOptions: RosElasticityAssurance.PrivatePoolOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property recurrenceRules: The assurance schedules based on which the capacity reservation takes effect.
     * > Time-segmented elasticity assurances are available only in specific regions and
     * to specific users. To use time-segmented elasticity assurances, submit a ticket.
     */
    recurrenceRules: Array<RosElasticityAssurance.RecurrenceRulesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property startTime: The time when the elasticity assurance takes effect. The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    startTime: string | ros.IResolvable | undefined;
    /**
     * @Property tags:
     */
    tags: RosElasticityAssurance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosElasticityAssuranceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosElasticityAssurance {
    /**
     * @stability external
     */
    interface PrivatePoolOptionsProperty {
        /**
         * @Property matchCriteria: The type of the private pool with which to associate the elasticity assurance. Valid values:
     * Open: open private pool
     * Target: targeted private pool
     * Default value: Open.
         */
        readonly matchCriteria?: string | ros.IResolvable;
        /**
         * @Property name: The name of the elasticity assurance. The description must be 2 to 128 characters in length. The description must start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosElasticityAssurance {
    /**
     * @stability external
     */
    interface RecurrenceRulesProperty {
        /**
         * @Property startHour: The start hour for recurrence.
         */
        readonly startHour?: number | ros.IResolvable;
        /**
         * @Property recurrenceType: The type of recurrence.
         */
        readonly recurrenceType?: string | ros.IResolvable;
        /**
         * @Property endHour: The end hour for recurrence.
         */
        readonly endHour?: number | ros.IResolvable;
        /**
         * @Property recurrenceValue: The value of recurrence.
         */
        readonly recurrenceValue?: string | ros.IResolvable;
    }
}
export declare namespace RosElasticityAssurance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of tag N to add to the elasticity assurance. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:\/\/ or https:\/\/.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of tag N to add to the elasticity assurance. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key must be 1 to 128 characters in length and cannot contain http:\/\/ or https:\/\/. The tag key cannot start with acs: or aliyun.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosForwardEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
 */
export interface RosForwardEntryProps {
    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string | ros.IResolvable;
    /**
     * @Property externalPort: Source port, now support [1-65535]|Any|x\/y
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
     * @Property internalPort: Destination port, now support [1-65535]|Any|x\/y
     */
    readonly internalPort: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly forwardEntryName?: string | ros.IResolvable;
    /**
     * @Property portBreak: Specifies whether to remove limits on the port range.
     */
    readonly portBreak?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ForwardEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ForwardEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
 */
export declare class RosForwardEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ForwardEntry";
    /**
     * @Attribute ForwardEntryId: The id of created forward entry.
     */
    readonly attrForwardEntryId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    externalIp: string | ros.IResolvable;
    /**
     * @Property externalPort: Source port, now support [1-65535]|Any|x\/y
     */
    externalPort: string | ros.IResolvable;
    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    forwardTableId: string | ros.IResolvable;
    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    internalIp: string | ros.IResolvable;
    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any|x\/y
     */
    internalPort: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    forwardEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property portBreak: Specifies whether to remove limits on the port range.
     */
    portBreak: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosForwardEntryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHpcCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-hpccluster
 */
export interface RosHpcClusterProps {
    /**
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, underscores (_), and hyphens (-). The name must
     * start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:\/\/ or https:\/\/. Default value: empty string.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::HpcCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HpcCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-hpccluster
 */
export declare class RosHpcCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::HpcCluster";
    /**
     * @Attribute HpcClusterId: The ID of the HPC cluster.
     */
    readonly attrHpcClusterId: ros.IResolvable;
    /**
     * @Attribute Name: The name of the HPC cluster.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, underscores (_), and hyphens (-). The name must
     * start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:\/\/ or https:\/\/. Default value: empty string.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHpcClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosImageComponent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
 */
export interface RosImageComponentProps {
    /**
     * @Property content: The content of the image component. The image component consists of multiple
     * commands. The command content cannot exceed 16 KB in size. For information about
     * the commands supported by Image Builder and the formats of the commands, see
     * [Commands supported by Image Builder]().
     */
    readonly content: string | ros.IResolvable;
    /**
     * @Property componentType: The type of the image component. Only image building components and image test
     * components are supported.
     * Valid values:
     * - Build
     * - Test
     * Default value: Build.
     * > Image building components can be used only in image building templates. Image
     * test components can be used only in image test templates.
     */
    readonly componentType?: string | ros.IResolvable;
    /**
     * @Property description: The description. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The component name. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not configure Name, the return value of ImageComponentId is used.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property systemType: The type of the operating system supported by the image component.
     * Valid values:
     * - Linux
     * - Windows
     * Default value: Linux.
     */
    readonly systemType?: string | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosImageComponent.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ImageComponent`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageComponent` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
 */
export declare class RosImageComponent extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ImageComponent";
    /**
     * @Attribute ImageComponentId: The ID of the image component.
     */
    readonly attrImageComponentId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: The content of the image component. The image component consists of multiple
     * commands. The command content cannot exceed 16 KB in size. For information about
     * the commands supported by Image Builder and the formats of the commands, see
     * [Commands supported by Image Builder]().
     */
    content: string | ros.IResolvable;
    /**
     * @Property componentType: The type of the image component. Only image building components and image test
     * components are supported.
     * Valid values:
     * - Build
     * - Test
     * Default value: Build.
     * > Image building components can be used only in image building templates. Image
     * test components can be used only in image test templates.
     */
    componentType: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The component name. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not configure Name, the return value of ImageComponentId is used.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property systemType: The type of the operating system supported by the image component.
     * Valid values:
     * - Linux
     * - Windows
     * Default value: Linux.
     */
    systemType: string | ros.IResolvable | undefined;
    /**
     * @Property tags:
     */
    tags: RosImageComponent.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageComponentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosImageComponent {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:\/\/ or https:\/\/.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. It cannot start with acs: or aliyun.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosImagePipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
 */
export interface RosImagePipelineProps {
    /**
     * @Property baseImage: The base image. The value of this parameter varies based on the value of
     * `BaseImageType`:
     * - If `BaseImageType` is `IMAGE`, specify the ID of the base image.
     * - If `BaseImageType` is `IMAGE_FAMILY`, specify the name of the base image
     * family.
     * - If `BaseImageType` is `OSS`, this parameter is not required.
     */
    readonly baseImage: string | ros.IResolvable;
    /**
     * @Property baseImageType: The type of the base image. Valid values:
     * - IMAGE: An ECS image.
     * - IMAGE_FAMILY: An image family.
     * - OSS: An OSS object.
     */
    readonly baseImageType: string | ros.IResolvable;
    /**
     * @Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.
     */
    readonly addAccount?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property buildContent: The content of the image template. The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
     */
    readonly buildContent?: string | ros.IResolvable;
    /**
     * @Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created. Valid values:
     * true
     * false
     * Default value: true.
     * Note If the intermediate instance cannot be started, the instance is released by default.
     */
    readonly deleteInstanceOnFailure?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the image template. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property executePipeline: Whether execute pipeline. Default value is true
     */
    readonly executePipeline?: boolean | ros.IResolvable;
    /**
     * @Property imageName: The prefix of the destination image name.
     * ><notice>This parameter is deprecated. Use `ImageOptions.ImageName`
     * instead.><\/notice>
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type. You can call the  DescribeInstanceTypes  to query instance types.
     * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property name: The name of the image pipeline. It must be 2 to 128 characters long, start with a
     * letter or a Chinese character, and cannot start with `http:\/\/` or `https:\/\/`.
     * Allowed characters include letters, digits, Chinese characters, colons (:),
     * underscores (_), periods (.), and hyphens (-).
     * > If you do not specify this parameter, the value of `ImagePipelineId` is used as
     * the name.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property systemDiskSize: The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.
     * Default value: 40.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosImagePipeline.TagsProperty[];
    /**
     * @Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template. You can specify up to 20 region IDs.
     * If you do not specify this parameter, the image is created only in the current region.
     */
    readonly toRegionId?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ImagePipeline`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImagePipeline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
 */
export declare class RosImagePipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ImagePipeline";
    /**
     * @Attribute ImagePipelineId: The ID of the image template.
     */
    readonly attrImagePipelineId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property baseImage: The base image. The value of this parameter varies based on the value of
     * `BaseImageType`:
     * - If `BaseImageType` is `IMAGE`, specify the ID of the base image.
     * - If `BaseImageType` is `IMAGE_FAMILY`, specify the name of the base image
     * family.
     * - If `BaseImageType` is `OSS`, this parameter is not required.
     */
    baseImage: string | ros.IResolvable;
    /**
     * @Property baseImageType: The type of the base image. Valid values:
     * - IMAGE: An ECS image.
     * - IMAGE_FAMILY: An image family.
     * - OSS: An OSS object.
     */
    baseImageType: string | ros.IResolvable;
    /**
     * @Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.
     */
    addAccount: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property buildContent: The content of the image template. The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
     */
    buildContent: string | ros.IResolvable | undefined;
    /**
     * @Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created. Valid values:
     * true
     * false
     * Default value: true.
     * Note If the intermediate instance cannot be started, the instance is released by default.
     */
    deleteInstanceOnFailure: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the image template. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property executePipeline: Whether execute pipeline. Default value is true
     */
    executePipeline: boolean | ros.IResolvable | undefined;
    /**
     * @Property imageName: The prefix of the destination image name.
     * ><notice>This parameter is deprecated. Use `ImageOptions.ImageName`
     * instead.><\/notice>
     */
    imageName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type. You can call the  DescribeInstanceTypes  to query instance types.
     * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the image pipeline. It must be 2 to 128 characters long, start with a
     * letter or a Chinese character, and cannot start with `http:\/\/` or `https:\/\/`.
     * Allowed characters include letters, digits, Chinese characters, colons (:),
     * underscores (_), periods (.), and hyphens (-).
     * > If you do not specify this parameter, the value of `ImagePipelineId` is used as
     * the name.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.
     * Default value: 40.
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags:
     */
    tags: RosImagePipeline.TagsProperty[] | undefined;
    /**
     * @Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template. You can specify up to 20 region IDs.
     * If you do not specify this parameter, the image is created only in the current region.
     */
    toRegionId: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImagePipelineProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosImagePipeline {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:\/\/ or https:\/\/.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. It cannot start with acs: or aliyun.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosImageSharePermission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
export interface RosImageSharePermissionProps {
    /**
     * @Property imageId: The ID of the custom image.
     * ><notice>
     * You can no longer share images that are encrypted by using a service key. You can
     * share only images that are encrypted by using a customer managed key (CMK). If
     * you attempt to share an image that is encrypted by using a service key, the
     * request fails.
     * ><\/notice>
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    readonly accounts?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property isPublic: Specifies whether to publish or unpublish the community image. Valid values:
     * - true: publishes the image as a community image.
     * - false: unpublishes the community image. The image becomes a custom image. If
     * the image is a custom image, this setting has no effect.
     * Default value: false.
     */
    readonly isPublic?: boolean | ros.IResolvable;
    /**
     * @Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
     */
    readonly keepPermission?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ImageSharePermission`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageSharePermission` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
export declare class RosImageSharePermission extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ImageSharePermission";
    /**
     * @Attribute ImageId: The shared custom image ID.
     */
    readonly attrImageId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The ID of the custom image.
     * ><notice>
     * You can no longer share images that are encrypted by using a service key. You can
     * share only images that are encrypted by using a customer managed key (CMK). If
     * you attempt to share an image that is encrypted by using a service key, the
     * request fails.
     * ><\/notice>
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    accounts: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property isPublic: Specifies whether to publish or unpublish the community image. Valid values:
     * - true: publishes the image as a community image.
     * - false: unpublishes the community image. The image becomes a custom image. If
     * the image is a custom image, this setting has no effect.
     * Default value: false.
     */
    isPublic: boolean | ros.IResolvable | undefined;
    /**
     * @Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
     */
    keepPermission: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageSharePermissionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
     * - **host**: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
     * Default value: **default**.
     */
    readonly affinity?: string | ros.IResolvable;
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
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * - **Standard**: the standard mode.
     * - **Unlimited**: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host.
     * You can call the [DescribeDedicatedHosts]() operation to query the list of
     * dedicated host IDs.
     * > Spot instances cannot be created on dedicated hosts. If you specify
     * DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. If the deployment set specified by **DeploymentSetId** uses the high availability group strategy (AvailabilityGroup), you can use **DeploymentSetGroupNo** to specify a deployment set group in the deployment set. Valid values: 1 to 7.
     */
    readonly deploymentSetGroupNo?: number | ros.IResolvable;
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
     * @Property hpcClusterId: The ID of the high performance computing (HPC) cluster to which the instance
     * belongs.
     * This parameter is required when you create instances of a Supper Computing
     * Cluster (SCC) instance type. For information about how to create an HPC cluster,
     * see [CreateHpcCluster]().
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * @Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. Valid values:
     * - **enabled**
     * - **disabled**
     * Default value: **enabled**.
     */
    readonly httpEndpoint?: string | ros.IResolvable;
    /**
     * @Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
     * - **optional**: does not forcefully use the security-enhanced mode (IMDSv2).
     * - **required**: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
     * Default value: **optional**.
     */
    readonly httpTokens?: string | ros.IResolvable;
    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
     * - **ImageFamily** must be empty if **ImageId** is specified.
     * - **ImageFamily** can be specified if **ImageId** is not specified.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * @Property imageId: The image ID.
     * <details>
     * <summary>
     * Naming convention for image IDs
     * <\/summary>
     * - Public images: Named based on the operating system version, architecture,
     * language, and published date.
     * - Custom images, shared images, cloud marketplace images, and community
     * images: Start with the letter `m`.
     * <\/details>
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
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. For instances of [retired
     * instance types](), the default value is none. For instances of other instance
     * types, the default value is optimized. Valid values:
     * - none: The instance is not I\/O optimized.
     * - optimized: The instance is I\/O optimized.
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. Valid values:
     * - true: uses the preset password.
     * - false: does not use the preset password.
     * Default value: false.
     * > If you set this parameter to true, make sure that you leave the Password
     * parameter empty and the selected image has a preset password.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property privatePoolOptions: The options of the private pool.
     */
    readonly privatePoolOptions?: RosInstance.PrivatePoolOptionsProperty | ros.IResolvable;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - Active: enables security hardening. This value is applicable only to public
     * images.
     * - Deactive: does not enable security hardening. This value is applicable to all
     * images.
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
     * @Property spotDuration: The protection period of the spot instance. Unit: hours. Valid values:
     * - 1: After a spot instance is created, the system ensures that the instance is not
     * automatically released within 1 hour. After the 1-hour protection period ends, the system
     * compares the bid price with the market price and checks the resource inventory to
     * determine whether to retain or release the instance.
     * - 0: After a spot instance is created, the system does not ensure that the instance
     * can run for one hour. The system compares the biding price with the market prices and
     * checks the resource inventory to determine whether to retain or release the instance.
     * Default value: 1.
     * >
     * - You can set this parameter only to 0 or 1.
     * - The spot instance is billed by second. Specify an appropriate protection period.
     * - The system sends an ECS system event to notify you 5 minutes before the instance is
     * released.
     */
    readonly spotDuration?: number | ros.IResolvable;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the spot instance. Valid values:
     * - Terminate: The instance is released.
     * - Stop: The instance is stopped in economical mode.
     * For information about the economical mode, see [Economical mode]().
     * Default value: Terminate.
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
     * @Property storageSetId: The storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. Valid values: integers
     * greater than or equal to 2.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
    /**
     * @Property subscriptionDeletionForce: This option is only applicable to subscription instances. For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
     */
    readonly subscriptionDeletionForce?: boolean | ros.IResolvable;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry
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
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
     * @Property tenancy: Specifies whether to create the instance on a dedicated host. Valid values:
     * - **default**: creates the instance on a non-dedicated host.
     * - **host**: creates the instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the instance.
     * Default value: **default**.
     */
    readonly tenancy?: string | ros.IResolvable;
    /**
     * @Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
     */
    readonly useAdditionalService?: boolean | ros.IResolvable;
    /**
     * @Property userData: The user data of the instance. You must specify Base64-encoded data. The instance
     * user data cannot exceed 32 KB in size before Base64 encoding.
     * For information about the limits, formats, and running frequencies of instance
     * user data, see [Instance user data]().
     * > To ensure security, we recommend that you do not use plaintext to pass in
     * confidential information, such as passwords or private keys, as user data. If you
     * need to pass in confidential information, we recommend that you encrypt and
     * encode the information in Base64 and then decode and decrypt the information in
     * the same manner in the instance.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which to connect to the instance. You must set this
     * parameter when you create an instance of the VPC type. The specified vSwitch and
     * security group must belong to the same VPC. You can call the
     * [DescribeVSwitches]() operation to query available vSwitches.
     * Take note of the following items:
     * - If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId`
     * parameter must be the zone where the specified vSwitch is located. You can also
     * leave the `ZoneId` parameter empty. Then, the system selects the zone where the
     * specified vSwitch resides.
     * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify
     * `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Instance";
    /**
     * @Attribute HostName: Host name of created instance.
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    readonly attrInnerIp: ros.IResolvable;
    /**
     * @Attribute InstanceId: The instance ID of created ecs instance
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    readonly attrPrimaryNetworkInterfaceId: ros.IResolvable;
    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIp: ros.IResolvable;
    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    readonly attrPublicIp: ros.IResolvable;
    /**
     * @Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone ID of created instance.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
     * - **host**: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
     * Default value: **default**.
     */
    affinity: string | ros.IResolvable | undefined;
    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    allocatePublicIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * - **Standard**: the standard mode.
     * - **Unlimited**: the unlimited mode.
     */
    creditSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host.
     * You can call the [DescribeDedicatedHosts]() operation to query the list of
     * dedicated host IDs.
     * > Spot instances cannot be created on dedicated hosts. If you specify
     * DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.
     */
    dedicatedHostId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. If the deployment set specified by **DeploymentSetId** uses the high availability group strategy (AvailabilityGroup), you can use **DeploymentSetGroupNo** to specify a deployment set group in the deployment set. Valid values: 1 to 7.
     */
    deploymentSetGroupNo: number | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    deploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    diskMappings: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The ID of the high performance computing (HPC) cluster to which the instance
     * belongs.
     * This parameter is required when you create instances of a Supper Computing
     * Cluster (SCC) instance type. For information about how to create an HPC cluster,
     * see [CreateHpcCluster]().
     */
    hpcClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. Valid values:
     * - **enabled**
     * - **disabled**
     * Default value: **enabled**.
     */
    httpEndpoint: string | ros.IResolvable | undefined;
    /**
     * @Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
     * - **optional**: does not forcefully use the security-enhanced mode (IMDSv2).
     * - **required**: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
     * Default value: **optional**.
     */
    httpTokens: string | ros.IResolvable | undefined;
    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
     * - **ImageFamily** must be empty if **ImageId** is specified.
     * - **ImageFamily** can be specified if **ImageId** is not specified.
     */
    imageFamily: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: The image ID.
     * <details>
     * <summary>
     * Naming convention for image IDs
     * <\/summary>
     * - Public images: Named based on the operating system version, architecture,
     * language, and published date.
     * - Custom images, shared images, cloud marketplace images, and community
     * images: Start with the letter `m`.
     * <\/details>
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. For instances of [retired
     * instance types](), the default value is none. For instances of other instance
     * types, the default value is optimized. Valid values:
     * - none: The instance is not I\/O optimized.
     * - optimized: The instance is I\/O optimized.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. Valid values:
     * - true: uses the preset password.
     * - false: does not use the preset password.
     * Default value: false.
     * > If you set this parameter to true, make sure that you leave the Password
     * parameter empty and the selected image has a preset password.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property privatePoolOptions: The options of the private pool.
     */
    privatePoolOptions: RosInstance.PrivatePoolOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - Active: enables security hardening. This value is applicable only to public
     * images.
     * - Deactive: does not enable security hardening. This value is applicable to all
     * images.
     */
    securityEnhancementStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The ID list of security group to which to assign the instance. The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotDuration: The protection period of the spot instance. Unit: hours. Valid values:
     * - 1: After a spot instance is created, the system ensures that the instance is not
     * automatically released within 1 hour. After the 1-hour protection period ends, the system
     * compares the bid price with the market price and checks the resource inventory to
     * determine whether to retain or release the instance.
     * - 0: After a spot instance is created, the system does not ensure that the instance
     * can run for one hour. The system compares the biding price with the market prices and
     * checks the resource inventory to determine whether to retain or release the instance.
     * Default value: 1.
     * >
     * - You can set this parameter only to 0 or 1.
     * - The spot instance is billed by second. Specify an appropriate protection period.
     * - The system sends an ECS system event to notify you 5 minutes before the instance is
     * released.
     */
    spotDuration: number | ros.IResolvable | undefined;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the spot instance. Valid values:
     * - Terminate: The instance is released.
     * - Stop: The instance is stopped in economical mode.
     * For information about the economical mode, see [Economical mode]().
     * Default value: Terminate.
     */
    spotInterruptionBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetId: The storage set ID.
     */
    storageSetId: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. Valid values: integers
     * greater than or equal to 2.
     */
    storageSetPartitionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property subscriptionDeletionForce: This option is only applicable to subscription instances. For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
     */
    subscriptionDeletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    systemDiskDescription: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    systemDiskDiskName: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     */
    systemDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @Property tenancy: Specifies whether to create the instance on a dedicated host. Valid values:
     * - **default**: creates the instance on a non-dedicated host.
     * - **host**: creates the instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the instance.
     * Default value: **default**.
     */
    tenancy: string | ros.IResolvable | undefined;
    /**
     * @Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
     */
    useAdditionalService: boolean | ros.IResolvable | undefined;
    /**
     * @Property userData: The user data of the instance. You must specify Base64-encoded data. The instance
     * user data cannot exceed 32 KB in size before Base64 encoding.
     * For information about the limits, formats, and running frequencies of instance
     * user data, see [Instance user data]().
     * > To ensure security, we recommend that you do not use plaintext to pass in
     * confidential information, such as passwords or private keys, as user data. If you
     * need to pass in confidential information, we recommend that you encrypt and
     * encode the information in Base64 and then decode and decrypt the information in
     * the same manner in the instance.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which to connect to the instance. You must set this
     * parameter when you create an instance of the VPC type. The specified vSwitch and
     * security group must belong to the same VPC. You can call the
     * [DescribeVSwitches]() operation to query available vSwitches.
     * Take note of the following items:
     * - If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId`
     * parameter must be the zone where the specified vSwitch is located. You can also
     * leave the `ZoneId` parameter empty. Then, the system selects the zone where the
     * specified vSwitch resides.
     * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify
     * `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: Zone ids for query parameters
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
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
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface PrivatePoolOptionsProperty {
        /**
         * @Property matchCriteria: The type of the private pool to use to create the instance. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool when you create an instance. Valid values:
     * - **Open**: open private pool. The system selects a matching open private pool to create the instance. If no matching private pools are found, resources in the public pool are used. When you set this parameter to Open, you can leave PrivatePoolOptions.Id empty.
     * - **Target**: specified private pool. The system uses the capacity in a specified private pool to create the instance. If the specified private pool is unavailable, the instance cannot be created. If you set this parameter to Target, you must specify PrivatePoolOptions.Id.
     * - **None**: no private pool. The capacity in private pools is not used.
     * Default value: **None**.
     * In the following scenarios, PrivatePoolOptions.MatchCriteria can be set only to **None** or left empty:
     * - Create a preemptible instance.
     * - Create an instance in the classic network.
     * - Create an instance on a dedicated host.
         */
        readonly matchCriteria?: string | ros.IResolvable;
        /**
         * @Property identity: The private pool ID. The ID of a private pool is the same as that of the elasticity assurance or capacity reservation for which the private pool is generated.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
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
/**
 * Properties for defining a `RosInstanceClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instanceclone
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
     * @Property deletionProtection: Specifies whether to enable release protection for the instance. This parameter
     * determines whether you can use the ECS console or call the [DeleteInstance]()
     * operation to release the instance. Valid values:
     * - true: enables release protection for the instance.
     * - false: disables release protection for the instance.
     * Default value: false.
     * > This parameter is applicable to only pay-as-you-go instances. It can protect
     * instances against manual releases, but not against automatic releases.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceClone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceClone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instanceclone
 */
export declare class RosInstanceClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceClone";
    /**
     * @Attribute HostName: Host name of created instance.
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    readonly attrInnerIp: ros.IResolvable;
    /**
     * @Attribute InstanceId: The instance ID of created ecs instance
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    readonly attrPrimaryNetworkInterfaceId: ros.IResolvable;
    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIp: ros.IResolvable;
    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    readonly attrPublicIp: ros.IResolvable;
    /**
     * @Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone ID of created instance.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    sourceInstanceId: string | ros.IResolvable;
    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    backendServerWeight: number | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable release protection for the instance. This parameter
     * determines whether you can use the ECS console or call the [DeleteInstance]()
     * operation to release the instance. Valid values:
     * - true: enables release protection for the instance.
     * - false: disables release protection for the instance.
     * Default value: false.
     * > This parameter is applicable to only pay-as-you-go instances. It can protect
     * instances against manual releases, but not against automatic releases.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    diskMappings: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    loadBalancerIdToAttach: string | ros.IResolvable | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstanceClone.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceCloneProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstanceClone {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
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
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceClone {
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
/**
 * Properties for defining a `RosInstanceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroup
 */
export interface RosInstanceGroupProps {
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number | ros.IResolvable;
    /**
     * @Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
     * - **host**: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
     * Default value: **default**.
     */
    readonly affinity?: string | ros.IResolvable;
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
     * @Property cpuOptions: Cpu options.
     */
    readonly cpuOptions?: RosInstanceGroup.CpuOptionsProperty | ros.IResolvable;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * - **Standard**: the standard mode.
     * - **Unlimited**: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host.
     * You can call the [DescribeDedicatedHosts]() operation to query the list of
     * dedicated host IDs.
     * > Spot instances cannot be created on dedicated hosts. If you specify
     * DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the instance. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. If the deployment set specified by **DeploymentSetId** uses the high availability group strategy (AvailabilityGroup), you can use **DeploymentSetGroupNo** to specify a deployment set group in the deployment set. Valid values: 1 to 7.
     */
    readonly deploymentSetGroupNo?: number | ros.IResolvable;
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
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 2 ENIs.
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
     * @Property hostNames: The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
     * - The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.
     * - You cannot specify both HostName and HostNames.N.
     * - The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
     * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
     * - For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    readonly hostNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * @Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. Valid values:
     * - **enabled**
     * - **disabled**
     * Default value: **enabled**.
     */
    readonly httpEndpoint?: string | ros.IResolvable;
    /**
     * @Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
     * - **optional**: does not forcefully use the security-enhanced mode (IMDSv2).
     * - **required**: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
     * Default value: **optional**.
     */
    readonly httpTokens?: string | ros.IResolvable;
    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
     * - **ImageFamily** must be empty if **ImageId** is specified.
     * - **ImageFamily** can be specified if **ImageId** is not specified.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * @Property imageId: The image ID.
     * <details>
     * <summary>
     * Naming convention for image IDs
     * <\/summary>
     * - Public images: Named based on the operating system version, architecture,
     * language, and published date.
     * - Custom images, shared images, cloud marketplace images, and community
     * images: Start with the letter `m`.
     * <\/details>
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property imageOptions: Image options.
     */
    readonly imageOptions?: RosInstanceGroup.ImageOptionsProperty | ros.IResolvable;
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
     * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. For instances of [retired
     * instance types](), the default value is none. For instances of other instance
     * types, the default value is optimized. Valid values:
     * - none: The instance is not I\/O optimized.
     * - optimized: The instance is I\/O optimized.
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
     * @Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. Take note of the following items:
     * - The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
     * - The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.
     * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber
     */
    readonly networkInterfaceQueueNumber?: number | ros.IResolvable;
    /**
     * @Property networkOptions: Network options.
     */
    readonly networkOptions?: RosInstanceGroup.NetworkOptionsProperty | ros.IResolvable;
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
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property privatePoolOptions: The options of the private pool.
     */
    readonly privatePoolOptions?: RosInstanceGroup.PrivatePoolOptionsProperty | ros.IResolvable;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property schedulerOptions: undefined
     */
    readonly schedulerOptions?: RosInstanceGroup.SchedulerOptionsProperty | ros.IResolvable;
    /**
     * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - Active: enables security hardening. This value is applicable only to public
     * images.
     * - Deactive: does not enable security hardening. This value is applicable to all
     * images.
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityOptions: Security options.
     */
    readonly securityOptions?: RosInstanceGroup.SecurityOptionsProperty | ros.IResolvable;
    /**
     * @Property spotDuration: The protection period of the spot instance. Unit: hours. Valid values:
     * - 1: After a spot instance is created, the system ensures that the instance is not
     * automatically released within 1 hour. After the 1-hour protection period ends, the system
     * compares the bid price with the market price and checks the resource inventory to
     * determine whether to retain or release the instance.
     * - 0: After a spot instance is created, the system does not ensure that the instance
     * can run for one hour. The system compares the biding price with the market prices and
     * checks the resource inventory to determine whether to retain or release the instance.
     * Default value: 1.
     * >
     * - You can set this parameter only to 0 or 1.
     * - The spot instance is billed by second. Specify an appropriate protection period.
     * - The system sends an ECS system event to notify you 5 minutes before the instance is
     * released.
     */
    readonly spotDuration?: number | ros.IResolvable;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the spot instance. Valid values:
     * - Terminate: The instance is released.
     * - Stop: The instance is stopped in economical mode.
     * For information about the economical mode, see [Economical mode]().
     * Default value: Terminate.
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
     * @Property storageSetId: The storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. Valid values: integers
     * greater than or equal to 2.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
    /**
     * @Property subscriptionDeletionForce: This option is only applicable to subscription instances. For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
     */
    readonly subscriptionDeletionForce?: boolean | ros.IResolvable;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
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
     * - aes-256
     * - sm4-128
     * Default value: aes-256.
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
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
     * @Property tenancy: Specifies whether to create the instance on a dedicated host. Valid values:
     * - **default**: creates the instance on a non-dedicated host.
     * - **host**: creates the instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the instance.
     * Default value: **default**.
     */
    readonly tenancy?: string | ros.IResolvable;
    /**
     * @Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the **HostName** parameter and to the instance name specified by the **InstanceName** parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:
     * - **true**: appends incremental suffixes to the hostname and the instance name.
     * - **false**: does not append incremental suffixes to the hostname or the instance name.
     * Default value: **false**.
     * When the **HostName** or **InstanceName** value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the **UniqueSuffix** parameter does not take effect. The names are sorted in the specified sequence.
     */
    readonly uniqueSuffix?: boolean | ros.IResolvable;
    /**
     * @Property updatePolicy: Specify the policy at update.
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    readonly updatePolicy?: string | ros.IResolvable;
    /**
     * @Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
     */
    readonly useAdditionalService?: boolean | ros.IResolvable;
    /**
     * @Property userData: The user data of the instance. You must specify Base64-encoded data. The instance
     * user data cannot exceed 32 KB in size before Base64 encoding.
     * For information about the limits, formats, and running frequencies of instance
     * user data, see [Instance user data]().
     * > To ensure security, we recommend that you do not use plaintext to pass in
     * confidential information, such as passwords or private keys, as user data. If you
     * need to pass in confidential information, we recommend that you encrypt and
     * encode the information in Base64 and then decode and decrypt the information in
     * the same manner in the instance.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which to connect to the instance. You must set this
     * parameter when you create an instance of the VPC type. The specified vSwitch and
     * security group must belong to the same VPC. You can call the
     * [DescribeVSwitches]() operation to query available vSwitches.
     * Take note of the following items:
     * - If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId`
     * parameter must be the zone where the specified vSwitch is located. You can also
     * leave the `ZoneId` parameter empty. Then, the system selects the zone where the
     * specified vSwitch resides.
     * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify
     * `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroup
 */
export declare class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroup";
    /**
     * @Attribute HostNames: Host names of created instances.
     */
    readonly attrHostNames: ros.IResolvable;
    /**
     * @Attribute InnerIps: Inner IP address list of the specified instances. Only for classical instances.
     */
    readonly attrInnerIps: ros.IResolvable;
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instances
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances. Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    readonly attrIpv6AddressIds: ros.IResolvable;
    /**
     * @Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances. Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    readonly attrIpv6Addresses: ros.IResolvable;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instances. Only for VPC instance.
     */
    readonly attrPrivateIps: ros.IResolvable;
    /**
     * @Attribute PublicIps: Public IP address list of created ecs instances.
     */
    readonly attrPublicIps: ros.IResolvable;
    /**
     * @Attribute ZoneIds: Zone id of created instances.
     */
    readonly attrZoneIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    maxAmount: number | ros.IResolvable;
    /**
     * @Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
     * - **host**: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
     * Default value: **default**.
     */
    affinity: string | ros.IResolvable | undefined;
    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    allocatePublicIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property cpuOptions: Cpu options.
     */
    cpuOptions: RosInstanceGroup.CpuOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * - **Standard**: the standard mode.
     * - **Unlimited**: the unlimited mode.
     */
    creditSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host.
     * You can call the [DescribeDedicatedHosts]() operation to query the list of
     * dedicated host IDs.
     * > Spot instances cannot be created on dedicated hosts. If you specify
     * DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.
     */
    dedicatedHostId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force delete the instance. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. If the deployment set specified by **DeploymentSetId** uses the high availability group strategy (AvailabilityGroup), you can use **DeploymentSetGroupNo** to specify a deployment set group in the deployment set. Valid values: 1 to 7.
     */
    deploymentSetGroupNo: number | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    deploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    diskMappings: Array<RosInstanceGroup.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 2 ENIs.
     */
    eniMappings: Array<RosInstanceGroup.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property hostNames: The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
     * - The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.
     * - You cannot specify both HostName and HostNames.N.
     * - The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
     * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
     * - For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    hostNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    hpcClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. Valid values:
     * - **enabled**
     * - **disabled**
     * Default value: **enabled**.
     */
    httpEndpoint: string | ros.IResolvable | undefined;
    /**
     * @Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
     * - **optional**: does not forcefully use the security-enhanced mode (IMDSv2).
     * - **required**: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
     * Default value: **optional**.
     */
    httpTokens: string | ros.IResolvable | undefined;
    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
     * - **ImageFamily** must be empty if **ImageId** is specified.
     * - **ImageFamily** can be specified if **ImageId** is not specified.
     */
    imageFamily: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: The image ID.
     * <details>
     * <summary>
     * Naming convention for image IDs
     * <\/summary>
     * - Public images: Named based on the operating system version, architecture,
     * language, and published date.
     * - Custom images, shared images, cloud marketplace images, and community
     * images: Start with the letter `m`.
     * <\/details>
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageOptions: Image options.
     */
    imageOptions: RosInstanceGroup.ImageOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
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
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. For instances of [retired
     * instance types](), the default value is none. For instances of other instance
     * types, the default value is optimized. Valid values:
     * - none: The instance is not I\/O optimized.
     * - optimized: The instance is I\/O optimized.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateName: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    launchTemplateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. Take note of the following items:
     * - The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
     * - The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.
     * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber
     */
    networkInterfaceQueueNumber: number | ros.IResolvable | undefined;
    /**
     * @Property networkOptions: Network options.
     */
    networkOptions: RosInstanceGroup.NetworkOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.Old instances will not be changed.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property privatePoolOptions: The options of the private pool.
     */
    privatePoolOptions: RosInstanceGroup.PrivatePoolOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property schedulerOptions: undefined
     */
    schedulerOptions: RosInstanceGroup.SchedulerOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - Active: enables security hardening. This value is applicable only to public
     * images.
     * - Deactive: does not enable security hardening. This value is applicable to all
     * images.
     */
    securityEnhancementStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityOptions: Security options.
     */
    securityOptions: RosInstanceGroup.SecurityOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property spotDuration: The protection period of the spot instance. Unit: hours. Valid values:
     * - 1: After a spot instance is created, the system ensures that the instance is not
     * automatically released within 1 hour. After the 1-hour protection period ends, the system
     * compares the bid price with the market price and checks the resource inventory to
     * determine whether to retain or release the instance.
     * - 0: After a spot instance is created, the system does not ensure that the instance
     * can run for one hour. The system compares the biding price with the market prices and
     * checks the resource inventory to determine whether to retain or release the instance.
     * Default value: 1.
     * >
     * - You can set this parameter only to 0 or 1.
     * - The spot instance is billed by second. Specify an appropriate protection period.
     * - The system sends an ECS system event to notify you 5 minutes before the instance is
     * released.
     */
    spotDuration: number | ros.IResolvable | undefined;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the spot instance. Valid values:
     * - Terminate: The instance is released.
     * - Stop: The instance is stopped in economical mode.
     * For information about the economical mode, see [Economical mode]().
     * Default value: Terminate.
     */
    spotInterruptionBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetId: The storage set ID.
     */
    storageSetId: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. Valid values: integers
     * greater than or equal to 2.
     */
    storageSetPartitionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property subscriptionDeletionForce: This option is only applicable to subscription instances. For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
     */
    subscriptionDeletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    systemDiskBurstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    systemDiskDescription: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    systemDiskDiskName: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - aes-256
     * - sm4-128
     * Default value: aes-256.
     */
    systemDiskEncryptAlgorithm: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    systemDiskEncrypted: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    systemDiskKmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     */
    systemDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    systemDiskProvisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    systemDiskStorageClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstanceGroup.TagsProperty[] | undefined;
    /**
     * @Property tenancy: Specifies whether to create the instance on a dedicated host. Valid values:
     * - **default**: creates the instance on a non-dedicated host.
     * - **host**: creates the instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the instance.
     * Default value: **default**.
     */
    tenancy: string | ros.IResolvable | undefined;
    /**
     * @Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the **HostName** parameter and to the instance name specified by the **InstanceName** parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:
     * - **true**: appends incremental suffixes to the hostname and the instance name.
     * - **false**: does not append incremental suffixes to the hostname or the instance name.
     * Default value: **false**.
     * When the **HostName** or **InstanceName** value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the **UniqueSuffix** parameter does not take effect. The names are sorted in the specified sequence.
     */
    uniqueSuffix: boolean | ros.IResolvable | undefined;
    /**
     * @Property updatePolicy: Specify the policy at update.
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    updatePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
     */
    useAdditionalService: boolean | ros.IResolvable | undefined;
    /**
     * @Property userData: The user data of the instance. You must specify Base64-encoded data. The instance
     * user data cannot exceed 32 KB in size before Base64 encoding.
     * For information about the limits, formats, and running frequencies of instance
     * user data, see [Instance user data]().
     * > To ensure security, we recommend that you do not use plaintext to pass in
     * confidential information, such as passwords or private keys, as user data. If you
     * need to pass in confidential information, we recommend that you encrypt and
     * encode the information in Base64 and then decode and decrypt the information in
     * the same manner in the instance.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which to connect to the instance. You must set this
     * parameter when you create an instance of the VPC type. The specified vSwitch and
     * security group must belong to the same VPC. You can call the
     * [DescribeVSwitches]() operation to query available vSwitches.
     * Take note of the following items:
     * - If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId`
     * parameter must be the zone where the specified vSwitch is located. You can also
     * leave the `ZoneId` parameter empty. Then, the system selects the zone where the
     * specified vSwitch resides.
     * - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify
     * `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: Zone ids for query parameters
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface CpuOptionsProperty {
        /**
         * @Property threadsPerCore: The number of threads per CPU core. The following formula is used to calculate the number of vCPUs of the instance: CpuOptions.Core value × CpuOptions.ThreadsPerCore value.
     * - If CpuOptionsThreadPerCore is set to 1, hyperthreading is disabled.
     * - This parameter is applicable only to specific instance types.
         */
        readonly threadsPerCore?: number | ros.IResolvable;
        /**
         * @Property core: The number of CPU cores. This parameter cannot be specified but only uses its default value.
         */
        readonly core?: number | ros.IResolvable;
        /**
         * @Property nestedVirtualization: Specifies whether to enable nested virtualization. Valid values:
     * - **enabled**: enables nested virtualization.
     * - **disabled**: disables nested virtualization.
     * This parameter is currently under invitation testing and is not yet available for use.
         */
        readonly nestedVirtualization?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
        /**
         * @Property burstingEnabled: Whether enable bursting.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property storageClusterId: The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, you must specify this parameter.
         */
        readonly storageClusterId?: string | ros.IResolvable;
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
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
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
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface EniMappingsProperty {
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
         * @Property deleteOnRelease: Specifies whether to retain the ENI when the associated instance is released. Valid values:
     * - **true**
     * - **false**
     * Default value: **true**.
     * **Note**: This parameter takes effect only for secondary ENIs.
         */
        readonly deleteOnRelease?: boolean | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
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
         * @Property networkCardIndex: The index of the network card for ENI N.
     * Take note of the following items:
     * - You can specify network card indexes only for instances of specific instance types.
     * - When NetworkInterface.N.InstanceType is set to **Primary**, you can set **NetworkInterface.N.NetworkCardIndex** only to 0 for instance types that support network cards.
     * - When **NetworkInterface.N.InstanceType** is set to **Secondary** or left empty, you can set **NetworkInterface.N.NetworkCardIndex** based on instance types if the instance types support network cards.
         */
        readonly networkCardIndex?: number | ros.IResolvable;
        /**
         * @Property networkInterfaceId: The ID of the ENI to attach to the instance.
     * **Note**: This parameter takes effect only for secondary ENIs.
         */
        readonly networkInterfaceId?: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: The IDs of security groups to which to assign ENI
     * Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         */
        readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         */
        readonly queueNumber?: number | ros.IResolvable;
        /**
         * @Property queuePairNumber: The number of queues supported by the ERI.
         */
        readonly queuePairNumber?: number | ros.IResolvable;
        /**
         * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         */
        readonly ipv6AddressCount?: number | ros.IResolvable;
        /**
         * @Property instanceType: The type of ENI. Default value: Secondary.
         */
        readonly instanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface ImageOptionsProperty {
        /**
         * @Property loginAsNonRoot: Specifies whether the instance that uses the image supports logons of the ecs-user user. Valid values:
     * - true
     * - false
         */
        readonly loginAsNonRoot?: boolean | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface NetworkOptionsProperty {
        /**
         * @Property enableJumboFrame: Specifies whether to enable the Jumbo Frame feature for the instance. Valid values:
     * - **false**: does not enable the Jumbo Frame feature for the instance. The maximum transmission unit (MTU) value of all ENIs on the instance is set to 1500.
     * - **true**: enables the Jumbo Frame feature for the instance. The MTU value of all ENIs on the instance is set to 8500.
     * Default value: true.
     * **Note**: The Jumbo Frame feature is supported by only 8th-generation or later instance types.
         */
        readonly enableJumboFrame?: boolean | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface PrivatePoolOptionsProperty {
        /**
         * @Property matchCriteria: The type of the private pool to use to create the instance. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool when you create an instance. Valid values:
     * - **Open**: open private pool. The system selects a matching open private pool to create the instance. If no matching private pools are found, resources in the public pool are used. When you set this parameter to Open, you can leave PrivatePoolOptions.Id empty.
     * - **Target**: specified private pool. The system uses the capacity in a specified private pool to create the instance. If the specified private pool is unavailable, the instance cannot be created. If you set this parameter to Target, you must specify PrivatePoolOptions.Id.
     * - **None**: no private pool. The capacity in private pools is not used.
     * Default value: **None**.
     * In the following scenarios, PrivatePoolOptions.MatchCriteria can be set only to **None** or left empty:
     * - Create a preemptible instance.
     * - Create an instance in the classic network.
     * - Create an instance on a dedicated host.
         */
        readonly matchCriteria?: string | ros.IResolvable;
        /**
         * @Property identity: The private pool ID. The ID of a private pool is the same as that of the elasticity assurance or capacity reservation for which the private pool is generated.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface SchedulerOptionsProperty {
        /**
         * @Property managedPrivateSpaceId: Managed private resource pool ID.
         */
        readonly managedPrivateSpaceId?: string | ros.IResolvable;
        /**
         * @Property dedicatedHostClusterId: The ID of the dedicated host cluster in which to create the instance. After this parameter is specified, the system selects one dedicated host from the specified cluster to create the instance.
     * **Note**: This parameter is valid only when **Tenancy** is set to host.
     * When you specify both **DedicatedHostId** and **SchedulerOptions.DedicatedHostClusterId**, take note of the following items:
     * - If the specified dedicated host belongs to the specified dedicated host cluster, the instance is preferentially deployed on the specified dedicated host.
     * - If the specified dedicated host does not belong to the specified dedicated host cluster, the instance cannot be created.
         */
        readonly dedicatedHostClusterId?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface SecurityOptionsProperty {
        /**
         * @Property trustedSystemMode: The trusted system mode. Set the value to vTPM.
     * The trusted system mode supports the following instance families:
     * - g7, c7, and r7
     * - Security-enhanced instance families: g7t, c7t, and r7t
     * When you create instances of the preceding instance families, you must set this parameter. Take note of the following items:
     * - To use Alibaba Cloud Trusted System, set this parameter to vTPM. Then, Alibaba Cloud Trusted System performs trust verifications when the instances start.
     * - If you do not want to use Alibaba Cloud Trusted System, leave this parameter empty. Take note that if your created instances use an enclave-based confidential computing environment (with SecurityOptions.ConfidentialComputingMode set to Enclave), Alibaba Cloud Trusted System is enabled for the instances.
     * - When you use the ECS API to create instances that use Alibaba Cloud Trusted System, you can call only the RunInstances operation. The CreateInstance operation does not support the SecurityOptions.TrustedSystemMode parameter.
     * **Note**: If you have configured an instance as a trusted instance when you created the instance, you can use only an image that supports Alibaba Cloud Trusted System to replace the system disk of the instance.
         */
        readonly trustedSystemMode?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroup {
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
/**
 * Properties for defining a `RosInstanceGroupClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroupclone
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
     * @Property cpuOptions: Cpu options.
     */
    readonly cpuOptions?: RosInstanceGroupClone.CpuOptionsProperty | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable release protection for the instance. This parameter
     * determines whether you can use the ECS console or call the [DeleteInstance]()
     * operation to release the instance. Valid values:
     * - true: enables release protection for the instance.
     * - false: disables release protection for the instance.
     * Default value: false.
     * > This parameter is applicable to only pay-as-you-go instances. It can protect
     * instances against manual releases, but not against automatic releases.
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
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 2 ENIs.
     */
    readonly eniMappings?: Array<RosInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hostNames: The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
     * - The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.
     * - You cannot specify both HostName and HostNames.N.
     * - The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
     * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
     * - For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    readonly hostNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property imageOptions: Image options.
     */
    readonly imageOptions?: RosInstanceGroupClone.ImageOptionsProperty | ros.IResolvable;
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
     * @Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. Take note of the following items:
     * - The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
     * - The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.
     * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber
     */
    readonly networkInterfaceQueueNumber?: number | ros.IResolvable;
    /**
     * @Property networkOptions: Network options.
     */
    readonly networkOptions?: RosInstanceGroupClone.NetworkOptionsProperty | ros.IResolvable;
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
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.Old instances will not be changed.
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
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityOptions: Security options.
     */
    readonly securityOptions?: RosInstanceGroupClone.SecurityOptionsProperty | ros.IResolvable;
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
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
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
     * - aes-256
     * - sm4-128
     * Default value: aes-256.
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
     * @Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the **HostName** parameter and to the instance name specified by the **InstanceName** parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:
     * - **true**: appends incremental suffixes to the hostname and the instance name.
     * - **false**: does not append incremental suffixes to the hostname or the instance name.
     * Default value: **false**.
     * When the **HostName** or **InstanceName** value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the **UniqueSuffix** parameter does not take effect. The names are sorted in the specified sequence.
     */
    readonly uniqueSuffix?: boolean | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceGroupClone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceGroupClone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroupclone
 */
export declare class RosInstanceGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroupClone";
    /**
     * @Attribute HostNames: Host names of created instances.
     */
    readonly attrHostNames: ros.IResolvable;
    /**
     * @Attribute InnerIps: Inner IP address list of the specified instances. Only for classical instances.
     */
    readonly attrInnerIps: ros.IResolvable;
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instances
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances. Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    readonly attrIpv6AddressIds: ros.IResolvable;
    /**
     * @Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances. Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    readonly attrIpv6Addresses: ros.IResolvable;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instances. Only for VPC instance.
     */
    readonly attrPrivateIps: ros.IResolvable;
    /**
     * @Attribute PublicIps: Public IP address list of created ecs instances.
     */
    readonly attrPublicIps: ros.IResolvable;
    /**
     * @Attribute ZoneIds: Zone id of created instances.
     */
    readonly attrZoneIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    maxAmount: number | ros.IResolvable;
    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    sourceInstanceId: string | ros.IResolvable;
    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    backendServerWeight: number | ros.IResolvable | undefined;
    /**
     * @Property cpuOptions: Cpu options.
     */
    cpuOptions: RosInstanceGroupClone.CpuOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable release protection for the instance. This parameter
     * determines whether you can use the ECS console or call the [DeleteInstance]()
     * operation to release the instance. Valid values:
     * - true: enables release protection for the instance.
     * - false: disables release protection for the instance.
     * Default value: false.
     * > This parameter is applicable to only pay-as-you-go instances. It can protect
     * instances against manual releases, but not against automatic releases.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    deploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    diskMappings: Array<RosInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 2 ENIs.
     */
    eniMappings: Array<RosInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostNames: The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
     * - The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.
     * - You cannot specify both HostName and HostNames.N.
     * - The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
     * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
     * - For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    hostNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    hpcClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageOptions: Image options.
     */
    imageOptions: RosInstanceGroupClone.ImageOptionsProperty | ros.IResolvable | undefined;
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
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateName: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    launchTemplateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    loadBalancerIdToAttach: string | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. Take note of the following items:
     * - The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
     * - The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.
     * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber
     */
    networkInterfaceQueueNumber: number | ros.IResolvable | undefined;
    /**
     * @Property networkOptions: Network options.
     */
    networkOptions: RosInstanceGroupClone.NetworkOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.Old instances will not be changed.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityOptions: Security options.
     */
    securityOptions: RosInstanceGroupClone.SecurityOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    systemDiskBurstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    systemDiskDescription: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    systemDiskDiskName: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - aes-256
     * - sm4-128
     * Default value: aes-256.
     */
    systemDiskEncryptAlgorithm: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    systemDiskEncrypted: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    systemDiskKmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    systemDiskProvisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    systemDiskStorageClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstanceGroupClone.TagsProperty[] | undefined;
    /**
     * @Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the **HostName** parameter and to the instance name specified by the **InstanceName** parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:
     * - **true**: appends incremental suffixes to the hostname and the instance name.
     * - **false**: does not append incremental suffixes to the hostname or the instance name.
     * Default value: **false**.
     * When the **HostName** or **InstanceName** value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the **UniqueSuffix** parameter does not take effect. The names are sorted in the specified sequence.
     */
    uniqueSuffix: boolean | ros.IResolvable | undefined;
    /**
     * @Property updatePolicy: Specify the policy at update.
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    updatePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupCloneProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface CpuOptionsProperty {
        /**
         * @Property threadsPerCore: The number of threads per CPU core. The following formula is used to calculate the number of vCPUs of the instance: CpuOptions.Core value × CpuOptions.ThreadsPerCore value.
     * - If CpuOptionsThreadPerCore is set to 1, hyperthreading is disabled.
     * - This parameter is applicable only to specific instance types.
         */
        readonly threadsPerCore?: number | ros.IResolvable;
        /**
         * @Property core: The number of CPU cores. This parameter cannot be specified but only uses its default value.
         */
        readonly core?: number | ros.IResolvable;
        /**
         * @Property nestedVirtualization: Specifies whether to enable nested virtualization. Valid values:
     * - **enabled**: enables nested virtualization.
     * - **disabled**: disables nested virtualization.
     * This parameter is currently under invitation testing and is not yet available for use.
         */
        readonly nestedVirtualization?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
        /**
         * @Property burstingEnabled: Whether enable bursting.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property storageClusterId: The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, you must specify this parameter.
         */
        readonly storageClusterId?: string | ros.IResolvable;
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
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
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
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface EniMappingsProperty {
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
         * @Property deleteOnRelease: Specifies whether to retain the ENI when the associated instance is released. Valid values:
     * - **true**
     * - **false**
     * Default value: **true**.
     * **Note**: This parameter takes effect only for secondary ENIs.
         */
        readonly deleteOnRelease?: boolean | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
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
         * @Property networkCardIndex: The index of the network card for ENI N.
     * Take note of the following items:
     * - You can specify network card indexes only for instances of specific instance types.
     * - When NetworkInterface.N.InstanceType is set to **Primary**, you can set **NetworkInterface.N.NetworkCardIndex** only to 0 for instance types that support network cards.
     * - When **NetworkInterface.N.InstanceType** is set to **Secondary** or left empty, you can set **NetworkInterface.N.NetworkCardIndex** based on instance types if the instance types support network cards.
         */
        readonly networkCardIndex?: number | ros.IResolvable;
        /**
         * @Property networkInterfaceId: The ID of the ENI to attach to the instance.
     * **Note**: This parameter takes effect only for secondary ENIs.
         */
        readonly networkInterfaceId?: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: The IDs of security groups to which to assign ENI
     * Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         */
        readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
         */
        readonly queueNumber?: number | ros.IResolvable;
        /**
         * @Property queuePairNumber: The number of queues supported by the ERI.
         */
        readonly queuePairNumber?: number | ros.IResolvable;
        /**
         * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
         */
        readonly ipv6AddressCount?: number | ros.IResolvable;
        /**
         * @Property instanceType: The type of ENI. Default value: Secondary.
         */
        readonly instanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface ImageOptionsProperty {
        /**
         * @Property loginAsNonRoot: Specifies whether the instance that uses the image supports logons of the ecs-user user. Valid values:
     * - true
     * - false
         */
        readonly loginAsNonRoot?: boolean | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface NetworkOptionsProperty {
        /**
         * @Property enableJumboFrame: Specifies whether to enable the Jumbo Frame feature for the instance. Valid values:
     * - **false**: does not enable the Jumbo Frame feature for the instance. The maximum transmission unit (MTU) value of all ENIs on the instance is set to 1500.
     * - **true**: enables the Jumbo Frame feature for the instance. The MTU value of all ENIs on the instance is set to 8500.
     * Default value: true.
     * **Note**: The Jumbo Frame feature is supported by only 8th-generation or later instance types.
         */
        readonly enableJumboFrame?: boolean | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface SecurityOptionsProperty {
        /**
         * @Property trustedSystemMode: The trusted system mode. Set the value to vTPM.
     * The trusted system mode supports the following instance families:
     * - g7, c7, and r7
     * - Security-enhanced instance families: g7t, c7t, and r7t
     * When you create instances of the preceding instance families, you must set this parameter. Take note of the following items:
     * - To use Alibaba Cloud Trusted System, set this parameter to vTPM. Then, Alibaba Cloud Trusted System performs trust verifications when the instances start.
     * - If you do not want to use Alibaba Cloud Trusted System, leave this parameter empty. Take note that if your created instances use an enclave-based confidential computing environment (with SecurityOptions.ConfidentialComputingMode set to Enclave), Alibaba Cloud Trusted System is enabled for the instances.
     * - When you use the ECS API to create instances that use Alibaba Cloud Trusted System, you can call only the RunInstances operation. The CreateInstance operation does not support the SecurityOptions.TrustedSystemMode parameter.
     * **Note**: If you have configured an instance as a trusted instance when you created the instance, you can use only an image that supports Alibaba Cloud Trusted System to replace the system disk of the instance.
         */
        readonly trustedSystemMode?: string | ros.IResolvable;
    }
}
export declare namespace RosInstanceGroupClone {
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
/**
 * Properties for defining a `RosInvocation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
 */
export interface RosInvocationProps {
    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property commandId: The id of command.
     */
    readonly commandId?: string | ros.IResolvable;
    /**
     * @Property commandName: The name of command. Only system commands whose provide is AlibabaCloud are supported
     */
    readonly commandName?: string | ros.IResolvable;
    /**
     * @Property containerId: The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    readonly containerId?: string | ros.IResolvable;
    /**
     * @Property containerName: The name of the container.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
     * - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    readonly containerName?: string | ros.IResolvable;
    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    readonly frequency?: string | ros.IResolvable;
    /**
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    readonly launcher?: string | ros.IResolvable;
    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property repeatMode: Specifies how to run the command. Valid values:
     * - **Once**: immediately runs the command.
     * - **Period**: runs the command on a schedule. If you set this parameter to Period, you must specify **Frequency**.
     * - **NextRebootOnly**: runs the command the next time the instance is started.
     * - **EveryReboot*: runs the command every time the instance is started.
     * Default value:
     * - If you do not specify Frequency, the default value is Once.
     * - If you specify **Frequency**, **Period** is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.
     */
    readonly repeatMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the command executions. The instances specified by InstanceIds must belong to the specified resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property sync: Whether to invoke synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to invocation. Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInvocation.TagsProperty[];
    /**
     * @Property timeout: The timeout period for the command execution. Unit: seconds.
     * - The timeout period cannot be less than 10 seconds.
     * - A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.
     * - If you do not specify this parameter, the timeout period that is specified when the command is created is used.
     * - This timeout period is applicable only to this execution. The timeout period of the command is not modified.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property username: The username to use to run the command on instances. The username can be up to 255 characters in length.
     * - For Linux instances, the root username is used by default.
     * - For Windows instances, the System username is used by default.
     * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
     */
    readonly username?: string | ros.IResolvable;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    readonly windowsPasswordName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Invocation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Invocation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
 */
export declare class RosInvocation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Invocation";
    /**
     * @Attribute InvokeId: The id of command execution.
     */
    readonly attrInvokeId: ros.IResolvable;
    /**
     * @Attribute InvokeInstances: The InvokeInstances of command.
     */
    readonly attrInvokeInstances: ros.IResolvable;
    /**
     * @Attribute InvokeResults: The results of invoke command.
     */
    readonly attrInvokeResults: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property commandId: The id of command.
     */
    commandId: string | ros.IResolvable | undefined;
    /**
     * @Property commandName: The name of command. Only system commands whose provide is AlibabaCloud are supported
     */
    commandName: string | ros.IResolvable | undefined;
    /**
     * @Property containerId: The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    containerId: string | ros.IResolvable | undefined;
    /**
     * @Property containerName: The name of the container.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
     * - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    containerName: string | ros.IResolvable | undefined;
    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    frequency: string | ros.IResolvable | undefined;
    /**
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    launcher: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property repeatMode: Specifies how to run the command. Valid values:
     * - **Once**: immediately runs the command.
     * - **Period**: runs the command on a schedule. If you set this parameter to Period, you must specify **Frequency**.
     * - **NextRebootOnly**: runs the command the next time the instance is started.
     * - **EveryReboot*: runs the command every time the instance is started.
     * Default value:
     * - If you do not specify Frequency, the default value is Once.
     * - If you specify **Frequency**, **Period** is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.
     */
    repeatMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the command executions. The instances specified by InstanceIds must belong to the specified resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sync: Whether to invoke synchronously.
     */
    sync: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to invocation. Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInvocation.TagsProperty[] | undefined;
    /**
     * @Property timeout: The timeout period for the command execution. Unit: seconds.
     * - The timeout period cannot be less than 10 seconds.
     * - A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.
     * - If you do not specify this parameter, the timeout period that is specified when the command is created is used.
     * - This timeout period is applicable only to this execution. The timeout period of the command is not modified.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property username: The username to use to run the command on instances. The username can be up to 255 characters in length.
     * - For Linux instances, the root username is used by default.
     * - For Windows instances, the System username is used by default.
     * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
     */
    username: string | ros.IResolvable | undefined;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    windowsPasswordName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInvocationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInvocation {
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
/**
 * Properties for defining a `RosJoinSecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::JoinSecurityGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `JoinSecurityGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
 */
export declare class RosJoinSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::JoinSecurityGroup";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property securityGroupId: Security group id to join.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
     */
    instanceIdList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceList: Network interface list.
     */
    networkInterfaceList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJoinSecurityGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosLaunchTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
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
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::LaunchTemplate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LaunchTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
 */
export declare class RosLaunchTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::LaunchTemplate";
    /**
     * @Attribute DefaultVersionNumber: The default version number of launch template.
     */
    readonly attrDefaultVersionNumber: ros.IResolvable;
    /**
     * @Attribute LatestVersionNumber: The latest version number of launch template.
     */
    readonly attrLatestVersionNumber: ros.IResolvable;
    /**
     * @Attribute LaunchTemplateId: The id of launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable;
    /**
     * @Attribute LaunchTemplateName: The name of launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property launchTemplateName: The name of launch template.
     */
    launchTemplateName: string | ros.IResolvable;
    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: The ID of the deployment set.
     */
    deploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    diskMappings: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     */
    imageOwnerAlias: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
     * PostPaid: pay-as-you-go.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    networkInterfaces: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image.
     * Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the instance. Unit: months.
     * This parameter is valid and required only when InstanceChargeType is set to PrePaid.
     * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The private IP address of the instance.
     * To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    securityEnhancementStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The ID of security group list to which to assign the instance.
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    spotDuration: number | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released. Valid values:
     * true: releases the system disk when the instance is released.
     * false: does not release the system disk when the instance is released.
     * Default value: true.
     */
    systemDiskDeleteWithInstance: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    systemDiskDescription: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    systemDiskDiskName: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
     */
    systemDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    tags: RosLaunchTemplate.TagsProperty[] | undefined;
    /**
     * @Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
     */
    templateResourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property templateTags: Template tags to attach to launch template.
     */
    templateTags: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property versionDescription: Description for version 1 of launch template.
     */
    versionDescription: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: Current zone to create the instance.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLaunchTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
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
         * @Property size: The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], cloud_essd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.
         */
        readonly size?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether data disk is encrypted.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the ESSD used as data disk. The value of Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
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
export declare namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    interface NetworkInterfacesProperty {
        /**
         * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
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
export declare namespace RosLaunchTemplate {
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
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    interface TemplateTagsProperty {
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
 * Properties for defining a `RosLaunchTemplateVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
 */
export interface RosLaunchTemplateVersionProps {
    /**
     * @Property launchTemplateData: The configurations of the launch template.
     */
    readonly launchTemplateData?: RosLaunchTemplateVersion.LaunchTemplateDataProperty | ros.IResolvable;
    /**
     * @Property launchTemplateId: The ID of the launch template. You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
     */
    readonly launchTemplateId?: string | ros.IResolvable;
    /**
     * @Property launchTemplateName: The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly launchTemplateName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the instance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property versionDescription: The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly versionDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::LaunchTemplateVersion`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LaunchTemplateVersion` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
 */
export declare class RosLaunchTemplateVersion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::LaunchTemplateVersion";
    /**
     * @Attribute CreateTime: The time when the launch template version was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute DefaultVersion: Indicates whether the launch template version is the default version.
     */
    readonly attrDefaultVersion: ros.IResolvable;
    /**
     * @Attribute LaunchTemplateData: The configurations of the launch template.
     */
    readonly attrLaunchTemplateData: ros.IResolvable;
    /**
     * @Attribute LaunchTemplateId: The ID of the launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable;
    /**
     * @Attribute LaunchTemplateName: The name of the launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable;
    /**
     * @Attribute ModifiedTime: The time when the launch template version was modified.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute VersionDescription: The description of the launch template version.
     */
    readonly attrVersionDescription: ros.IResolvable;
    /**
     * @Attribute VersionNumber: The number of the created version of the launch template.
     */
    readonly attrVersionNumber: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property launchTemplateData: The configurations of the launch template.
     */
    launchTemplateData: RosLaunchTemplateVersion.LaunchTemplateDataProperty | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateId: The ID of the launch template. You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
     */
    launchTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateName: The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    launchTemplateName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the instance.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property versionDescription: The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    versionDescription: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLaunchTemplateVersionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLaunchTemplateVersion {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property burstingEnabled: Specifies whether to enable the performance burst feature for the data disk.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property snapshotId: The ID of the snapshot used by the data disk.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The category of data disk. Valid values:
     * * cloud: basic disk.
     * * cloud_efficiency: utra disk.
     * * cloud_ssd: standard SSD.
     * * cloud_auto: ESSD AutoPL disk.
     * * cloud_essd: ESSD.
     * * cloud_essd_entry: ESSD Entry disk.
     * For I\/O optimized instances, the default value is cloud_efficiency. For non-I\/O optimized instances, the default value is cloud.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: 	The description of data disk. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt data disk
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: The device name of the data disk.
     * > This parameter is about to stop using. In order to improve code compatibility, it is recommended that you try not to use this parameter.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: When creating an ESSD cloud disk for use as a data disk, set the performance level of the cloud disk. This parameter has a return value when 'Category = cloud_essd. Possible values:
     * - PL0: The highest random read-write IOPS 10,000 per disk.
     * - PL1: The highest random read-write IOPS 50,000 per disk.
     * - PL2: The highest random read-write IOPS 100,000 per disk.
     * - PL3: The highest random read-write IOPS 1 million per disk.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of data disk.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Whether the data disk is released with the release of the instance.
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy to apply to data disk
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property provisionedIops: The pre-configured read and write IOPS of the data disk ESSD AutoPL cloud disk.
         */
        readonly provisionedIops?: number | ros.IResolvable;
        /**
         * @Property diskName: The name of data disk. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
export declare namespace RosLaunchTemplateVersion {
    /**
     * @stability external
     */
    interface LaunchTemplateDataProperty {
        /**
         * @Property imageOwnerAlias: The source of the image.
         */
        readonly imageOwnerAlias?: string | ros.IResolvable;
        /**
         * @Property privateIpAddress: The private IP address to assign to the instance. To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
         */
        readonly privateIpAddress?: string | ros.IResolvable;
        /**
         * @Property description: The description of the instance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property dataDisks: A collection of data disks.
         */
        readonly dataDisks?: Array<RosLaunchTemplateVersion.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The size of the system disk. Unit: GiB.
         */
        readonly systemDiskSize?: number | ros.IResolvable;
        /**
         * @Property userData: The user data of the instance. The user data must be encoded in Base64. The maximum size of raw data is 32 KB.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly systemDiskDescription?: string | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of the instance. Valid values:
     * * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account has sufficient credits. Otherwise, an InvalidPayMethod error is returned.
     * * PostPaid: pay-as-you-go.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskProvisionedIops: The pre-configured read and write IOPS of the system disk ESSD AutoPL cloud disk.
         */
        readonly systemDiskProvisionedIops?: number | ros.IResolvable;
        /**
         * @Property spotDuration: The retention period of a preemptible instance, in hours. Possible value: 0~6
     * - The reserved duration is 2~6 and is under invitation test. Please submit the work order if you need to open it.
     * - If the value is 0, it is the unprotected period mode.
         */
        readonly spotDuration?: number | ros.IResolvable;
        /**
         * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * * true
     * * false
     * Default value: false.
         */
        readonly systemDiskEncrypted?: string | ros.IResolvable;
        /**
         * @Property systemDiskAutoSnapshotPolicyId: The ID of the automatic snapshot policy to apply to the system disk.
         */
        readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property ramRoleName: The name of the instance Resource Access Management (RAM) role.
         */
        readonly ramRoleName?: string | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: When creating an ESSD cloud disk for use as a system disk, set the performance level of the cloud disk. This parameter has a return value when 'SystemDisk.Category = cloud_essd. Possible values:
     * - PL0: The highest random read-write IOPS 10,000 per disk.
     * - PL1: The highest random read-write IOPS 50,000 per disk.
     * - PL2: The highest random read-write IOPS 100,000 per disk.
     * - PL3: The highest random read-write IOPS 1 million per disk.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property ipv6AddressCount: The number of IPv6 addresses to randomly generate for the primary elastic network interface (ENI). Valid values: 1 to 10.
         */
        readonly ipv6AddressCount?: number | ros.IResolvable;
        /**
         * @Property networkType: The network type of the instance. Valid values:
     * * classic: classic network
     * * vpc: VPC.
         */
        readonly networkType?: string | ros.IResolvable;
        /**
         * @Property networkInterfaces: The information of the elastic network interfaces (ENIs).
         */
        readonly networkInterfaces?: Array<RosLaunchTemplateVersion.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property imageId: The ID of the image to use to create the Elastic Compute Service (ECS) instance.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: Set the maximum price per hour for the instance.
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property systemDiskDiskName: The name of the system disk. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         */
        readonly systemDiskDiskName?: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property tags: The tags to add to the ECS instance, disks, and primary elastic network interface (ENI) created based on the launch template version.
         */
        readonly tags?: RosLaunchTemplateVersion.TagsProperty[];
        /**
         * @Property hostName: The hostname of the instance.
     * * The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
     * * For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
     * * For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
         */
        readonly hostName?: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The preemption policy for the pay-as-you-go instance. This parameter is valid only when the InstanceChargeType parameter is set to PostPaid. Default value: NoSpot. Valid values:
     * * NoSpot: The instance is created as a pay-as-you-go instance.
     * * SpotWithPriceLimit: The instances of the compute node are spot instances. These types of instances have a specified maximum hourly price.
     * * SpotAsPriceGo: The instance is created as a spot instance for which the market price at the time of purchase is automatically used as the bid price.
         */
        readonly spotStrategy?: string | ros.IResolvable;
        /**
         * @Property passwordInherit: Specifies whether to use the password that is preconfigured in the image.
         */
        readonly passwordInherit?: boolean | ros.IResolvable;
        /**
         * @Property keyPairName: The name of the key pair to bind to the instance.
     * * For Windows instances, this parameter is ignored The Password parameter is valid even if the KeyPairName parameter is specified.
     * * For Linux instances, the password-based logon method is disabled by default.
         */
        readonly keyPairName?: string | ros.IResolvable;
        /**
         * @Property ioOptimized: Specifies whether to create an I\/O optimized instance.
         */
        readonly ioOptimized?: string | ros.IResolvable;
        /**
         * @Property zoneId: The ID of the zone to which the instance belongs.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch to which to connect the instance. This parameter is required if you specify the VpcId parameter.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group of the instance.
     * > 'SecurityGroupId' and 'SecurityGroupIds' do not return values at the same time.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property period: The subscription period of the instance. Unit: months. This parameter is valid and required only when InstanceChargeType is set to PrePaid. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property deletionProtection: Specifies whether to enable release protection for the instance.
         */
        readonly deletionProtection?: boolean | ros.IResolvable;
        /**
         * @Property securityGroupIds: One or more security groups to which the instance is added.
         */
        readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property internetChargeType: Public network bandwidth billing method. Valid values:
     * * PayByBandwidth: pay-by-bandwidth.
     * * PayByTraffic: pay-by-traffic.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The category of the system disk. Valid values:
     * * cloud: basic disk.
     * * cloud_efficiency: ultra disk.
     * * cloud_ssd: standard SSD.
     * * cloud_auto: Enterprise SSD (ESSD) AutoPL disk.
     * * cloud_essd: ESSD.
     * * cloud_essd_entry: ESSD Entry disk.
     * For non-I\/O optimized instances of retired instance types, the default value is cloud. For other types of instances, the default value is cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property deploymentSetId: The ID of the deployment set to which to deploy the instance.
         */
        readonly deploymentSetId?: string | ros.IResolvable;
        /**
         * @Property systemDiskBurstingEnabled: Specifies whether to enable the performance burst feature.
         */
        readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property instanceName: The instance name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The default value of this parameter is the InstanceId value.
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released.
         */
        readonly systemDiskDeleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property enableVmOsConfig: Specifies whether to enable the operating system configuration of the instance.
         */
        readonly enableVmOsConfig?: boolean | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property vpcId: The ID of the virtual private cloud (VPC) in which to create the ECS instance.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthIn: The maximum inbound public bandwidth. Unit: Mbit\/s. Valid values:* When the purchased outbound public bandwidth is less than or equal to 10 Mbit\/s, the valid values of this parameter are 1 to 10 and the default value is 10.
     * * If the purchased outbound public bandwidth is greater than 10 Mbit\/s, the valid values of this parameter range from 1 to the InternetMaxBandwidthOut value and the default value is the InternetMaxBandwidthOut value.
         */
        readonly internetMaxBandwidthIn?: number | ros.IResolvable;
        /**
         * @Property systemDiskIops: System disk I\/O times per second.
     * > This parameter is about to stop using. To improve code compatibility, please try to use other parameters.
         */
        readonly systemDiskIops?: number | ros.IResolvable;
        /**
         * @Property securityEnhancementStrategy: Specifies whether to enable security hardening for the operating system. Valid values:
     * * Active: Security hardening is enabled. This value is applicable only to public images.
     * * Deactive: Security hardening is disabled. This value is available to all types of images.
         */
        readonly securityEnhancementStrategy?: string | ros.IResolvable;
        /**
         * @Property autoReleaseTime: The automatic release time of the instance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * * If the value of ss is not 00, the time is automatically rounded down to the nearest minute based on the value of mm.
     * * The specified time must be at least 30 minutes later than the current time.
     * * The specified time can be at most three years later than the current time.
         */
        readonly autoReleaseTime?: string | ros.IResolvable;
    }
}
export declare namespace RosLaunchTemplateVersion {
    /**
     * @stability external
     */
    interface NetworkInterfacesProperty {
        /**
         * @Property networkInterfaceTrafficMode: The communication mode of the primary ENI. Valid values:
     * * Standard: uses the TCP communication mode.
     * * HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
         */
        readonly networkInterfaceTrafficMode?: string | ros.IResolvable;
        /**
         * @Property description: The description of the secondary ENI. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group to which the secondary Eni belongs. Must be a security group under the same VPC.
     * > SecurityGroupId and SecurityGroupIds do not return values at the same time.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch to which to connect the secondary ENI. The instance and the secondary ENI must reside in the same zone of the same VPC, but they can be connected to different VSwitches.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property networkInterfaceName: The name of the secondary ENI.
         */
        readonly networkInterfaceName?: string | ros.IResolvable;
        /**
         * @Property primaryIpAddress: The primary private IP address of the secondary Eni.
         */
        readonly primaryIpAddress?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the ENI.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: One or more security groups to which the secondary ENI is attached.
         */
        readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosLaunchTemplateVersion {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The tag value of the instance.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The tag key of the instance.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNetworkInterface`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
export interface RosNetworkInterfaceProps {
    /**
     * @Property vSwitchId: The ID of the VSwitch for the elastic network interface. The private IP addresses
     * for the elastic network interface are assigned from the available CIDR block of
     * the VSwitch.
     * ><notice>
     * The elastic network interface and the instance to be attached must be in the same
     * availability zone but can belong to different VSwitches.
     * ><\/notice>
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
     */
    readonly deleteOnRelease?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the elastic network interface. The description must be 2 to
     * 256 characters long and cannot start with `http:\/\/` or `https:\/\/`.
     * Default value: empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface. Range: 1-10
     * **Note**: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
     */
    readonly ipv4PrefixCount?: number | ros.IResolvable;
    /**
     * @Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
     */
    readonly ipv4Prefixes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of random IPv6 addresses to assign to the elastic network interface.
     * Valid values: 1 to 10.
     * > You must specify either `Ipv6Address.N` or `Ipv6AddressCount`, but not both, to
     * assign IPv6 addresses.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * @Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface. Range: 1-10
     * **Note**: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
     */
    readonly ipv6PrefixCount?: number | ros.IResolvable;
    /**
     * @Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
     */
    readonly ipv6Prefixes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string | ros.IResolvable;
    /**
     * @Property networkInterfaceTrafficMode: The traffic mode of the elastic network interface. Valid values:
     * - `Standard`: uses the TCP traffic mode.
     * - `HighPerformance`: enables the Elastic RDMA Interface (ERI) and uses the RDMA
     * traffic mode.
     * > An elastic network interface in RDMA traffic mode can be attached only to an
     * ERI-supported instance type. The number of these elastic network interfaces that
     * can be attached is limited by the instance family. Default value: `Standard`.
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
     * @Property rxQueueSize: Elastic network card inbound queue depth.
     * **Note**: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
     */
    readonly rxQueueSize?: number | ros.IResolvable;
    /**
     * @Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group for the elastic network interface. The security
     * group and the elastic network interface must be in the same VPC.
     * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not
     * both.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupIds: The IDs of one or more security groups to which to add the elastic network
     * interface. The security groups and the elastic network interface must be in the
     * same VPC. The valid values of N depend on the maximum number of security groups
     * to which an elastic network interface can be added.
     * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not
     * both.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNetworkInterface.TagsProperty[];
    /**
     * @Property txQueueSize: Elastic network card outbound queue depth.
     * **Note**: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
     */
    readonly txQueueSize?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterface`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkInterface` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
export declare class RosNetworkInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterface";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute MacAddress: The MAC address of your Network Interface.
     */
    readonly attrMacAddress: ros.IResolvable;
    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable;
    /**
     * @Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    readonly attrPrivateIpAddress: ros.IResolvable;
    /**
     * @Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    readonly attrSecondaryPrivateIpAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vSwitchId: The ID of the VSwitch for the elastic network interface. The private IP addresses
     * for the elastic network interface are assigned from the available CIDR block of
     * the VSwitch.
     * ><notice>
     * The elastic network interface and the instance to be attached must be in the same
     * availability zone but can belong to different VSwitches.
     * ><\/notice>
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
     */
    deleteOnRelease: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the elastic network interface. The description must be 2 to
     * 256 characters long and cannot start with `http:\/\/` or `https:\/\/`.
     * Default value: empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface. Range: 1-10
     * **Note**: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
     */
    ipv4PrefixCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
     */
    ipv4Prefixes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: The number of random IPv6 addresses to assign to the elastic network interface.
     * Valid values: 1 to 10.
     * > You must specify either `Ipv6Address.N` or `Ipv6AddressCount`, but not both, to
     * assign IPv6 addresses.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    ipv6Addresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface. Range: 1-10
     * **Note**: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
     */
    ipv6PrefixCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
     */
    ipv6Prefixes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    networkInterfaceName: string | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceTrafficMode: The traffic mode of the elastic network interface. Valid values:
     * - `Standard`: uses the TCP traffic mode.
     * - `HighPerformance`: enables the Elastic RDMA Interface (ERI) and uses the RDMA
     * traffic mode.
     * > An elastic network interface in RDMA traffic mode can be attached only to an
     * ERI-supported instance type. The number of these elastic network interfaces that
     * can be attached is limited by the instance family. Default value: `Standard`.
     */
    networkInterfaceTrafficMode: string | ros.IResolvable | undefined;
    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    primaryIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    privateIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
     */
    queueNumber: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property rxQueueSize: Elastic network card inbound queue depth.
     * **Note**: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
     */
    rxQueueSize: number | ros.IResolvable | undefined;
    /**
     * @Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    secondaryPrivateIpAddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the security group for the elastic network interface. The security
     * group and the elastic network interface must be in the same VPC.
     * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not
     * both.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The IDs of one or more security groups to which to add the elastic network
     * interface. The security groups and the elastic network interface must be in the
     * same VPC. The valid values of N depend on the maximum number of security groups
     * to which an elastic network interface can be added.
     * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not
     * both.
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosNetworkInterface.TagsProperty[] | undefined;
    /**
     * @Property txQueueSize: Elastic network card outbound queue depth.
     * **Note**: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
     */
    txQueueSize: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosNetworkInterface {
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
/**
 * Properties for defining a `RosNetworkInterfaceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
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
     * @Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
     */
    readonly ecsRestartOption?: string | ros.IResolvable;
    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    readonly trunkNetworkInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterfaceAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkInterfaceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
 */
export declare class RosNetworkInterfaceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfaceAttachment";
    /**
     * @Attribute InstanceId: ID of ECS instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable;
    /**
     * @Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    readonly attrTrunkNetworkInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: ECS instance id
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
     */
    ecsRestartOption: string | ros.IResolvable | undefined;
    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    trunkNetworkInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfaceAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNetworkInterfacePermission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
 */
export interface RosNetworkInterfacePermissionProps {
    /**
     * @Property accountId: The ID of the account to which the permission is granted. The
     * account can be a cloud partner (certified ISV) or an individual user.
     */
    readonly accountId: string | ros.IResolvable;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property permission: The permission to grant. The only supported value is InstanceAttach.
     * InstanceAttach: Allows an authorized account to attach your elastic network
     * interface to one of its ECS instances. The ECS instance and the elastic network
     * interface must be in the same availability zone.
     */
    readonly permission: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterfacePermission`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkInterfacePermission` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
 */
export declare class RosNetworkInterfacePermission extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfacePermission";
    /**
     * @Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    readonly attrNetworkInterfacePermissionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountId: The ID of the account to which the permission is granted. The
     * account can be a cloud partner (certified ISV) or an individual user.
     */
    accountId: string | ros.IResolvable;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property permission: The permission to grant. The only supported value is InstanceAttach.
     * InstanceAttach: Allows an authorized account to attach your elastic network
     * interface to one of its ECS instances. The ECS instance and the elastic network
     * interface must be in the same availability zone.
     */
    permission: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfacePermissionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrefixList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-prefixlist
 */
export interface RosPrefixListProps {
    /**
     * @Property addressFamily: The IP address family. Valid values:
     * - IPv4
     * - IPv6
     */
    readonly addressFamily: string | ros.IResolvable;
    /**
     * @Property maxEntries: The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.
     */
    readonly maxEntries: number | ros.IResolvable;
    /**
     * @Property prefixListName: The name of the prefix. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/, https:\/\/, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    readonly prefixListName: string | ros.IResolvable;
    /**
     * @Property description: The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property entries:
     */
    readonly entries?: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::PrefixList`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-prefixlist
 */
export declare class RosPrefixList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrefixList";
    /**
     * @Attribute PrefixListId: The ID of the prefix list.
     */
    readonly attrPrefixListId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressFamily: The IP address family. Valid values:
     * - IPv4
     * - IPv6
     */
    addressFamily: string | ros.IResolvable;
    /**
     * @Property maxEntries: The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.
     */
    maxEntries: number | ros.IResolvable;
    /**
     * @Property prefixListName: The name of the prefix. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/, https:\/\/, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    prefixListName: string | ros.IResolvable;
    /**
     * @Property description: The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property entries:
     */
    entries: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrefixListProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrefixList {
    /**
     * @stability external
     */
    interface EntriesProperty {
        /**
         * @Property description: The description in entry. The description must be 2 to 32 characters in length and cannot start with http:\/\/ or https:\/\/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property cidr: The CIDR block in entry. Take note of the following items:
     * The total number of entries must not exceed the MaxEntries value.
     * CIDR block types are determined by the IP address family. You cannot combine IPv4 and IPv6 CIDR blocks in a single prefix list.
     * CIDR blocks must be unique across all entries in a prefix list. For example, you cannot specify 192.168.1.0\/24 twice in the entries of the prefix list.
     * IP addresses are supported.
     * The system converts IP addresses into CIDR blocks. For example, if you specify 192.168.1.100, the system converts it into the 192.168.1.100\/32 CIDR block.
     * If an IPv6 CIDR block is used, the system converts it to the zero compression format and changes uppercase letters into lowercase ones. For example, if you specify 2001:0DB8:0000:0000:0000:0000:0000:0000\/32,the system converts it into 2001:db8::\/32.
         */
        readonly cidr: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRamRoleAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::RamRoleAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RamRoleAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
 */
export declare class RosRamRoleAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RamRoleAttachment";
    /**
     * @Attribute InstanceIds: The list of ecs instance id
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute RamRoleName: The ram role name.
     */
    readonly attrRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The instance id that needs to be granted the ram role.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ramRoleName: The ram role name.
     */
    ramRoleName: string | ros.IResolvable;
    /**
     * @Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
     * The length is 1~1024 characters.
     */
    policy: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRamRoleAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
export interface RosRouteProps {
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR
     * blocks, and prefix lists are supported. You must specify one of the following
     * parameters: `DestinationCidrBlock` and `DestinationPrefixListId`. The following
     * requirements apply:
     * - The destination CIDR block cannot be 100.64.0.0\/10 or a subset of
     * 100.64.0.0\/10.
     * - The destination CIDR block of a route entry cannot be the same as the
     * destination CIDR block of another route entry in the same route table.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * @Property nextHopId: The ID of the next hop.
     * > ## If `NextHopType` is set to `Ecr`, you can obtain the `AssociationId` by
     * calling the DescribeExpressConnectRouterAssociation operation and use the ID
     * as the next hop ID.
     */
    readonly nextHopId?: string | ros.IResolvable;
    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    readonly nextHopList?: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property nextHopType: The route entry next hop type. Valid values:
     * Instance (default): Elastic Compute Service (ECS) instance.
     * HaVip: High Availability Virtual IP (HAVIP).
     * RouterInterface: Router interface.
     * NetworkInterface: Elastic Network Interface (ENI).
     * VpnGateway: VPN gateway.
     * IPv6Gateway: IPv6 gateway.
     * NatGateway: NAT gateway.
     * Attachment: Transit router.
     * VpcPeer: VPC peering connection.
     * Ipv4Gateway: IPv4 gateway.
     * GatewayEndpoint: Gateway endpoint.
     * Ecr: Express Connect router.
     * GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
     * The default value is 'Instance'.
     * If NextHopList is specified, this field will be ignored.
     */
    readonly nextHopType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Route`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Route` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
export declare class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Route";
    /**
     * @Attribute RouteEntryId: The ID of the route entry.
     */
    readonly attrRouteEntryId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR
     * blocks, and prefix lists are supported. You must specify one of the following
     * parameters: `DestinationCidrBlock` and `DestinationPrefixListId`. The following
     * requirements apply:
     * - The destination CIDR block cannot be 100.64.0.0\/10 or a subset of
     * 100.64.0.0\/10.
     * - The destination CIDR block of a route entry cannot be the same as the
     * destination CIDR block of another route entry in the same route table.
     */
    destinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    routeTableId: string | ros.IResolvable;
    /**
     * @Property nextHopId: The ID of the next hop.
     * > ## If `NextHopType` is set to `Ecr`, you can obtain the `AssociationId` by
     * calling the DescribeExpressConnectRouterAssociation operation and use the ID
     * as the next hop ID.
     */
    nextHopId: string | ros.IResolvable | undefined;
    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    nextHopList: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property nextHopType: The route entry next hop type. Valid values:
     * Instance (default): Elastic Compute Service (ECS) instance.
     * HaVip: High Availability Virtual IP (HAVIP).
     * RouterInterface: Router interface.
     * NetworkInterface: Elastic Network Interface (ENI).
     * VpnGateway: VPN gateway.
     * IPv6Gateway: IPv6 gateway.
     * NatGateway: NAT gateway.
     * Attachment: Transit router.
     * VpcPeer: VPC peering connection.
     * Ipv4Gateway: IPv4 gateway.
     * GatewayEndpoint: Gateway endpoint.
     * Ecr: Express Connect router.
     * GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
     * The default value is 'Instance'.
     * If NextHopList is specified, this field will be ignored.
     */
    nextHopType: string | ros.IResolvable | undefined;
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
    interface NextHopListProperty {
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
 * Properties for defining a `RosRunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
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
     * @Property containerId: The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    readonly containerId?: string | ros.IResolvable;
    /**
     * @Property containerName: The name of the container.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
     * - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    readonly containerName?: string | ros.IResolvable;
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
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    readonly launcher?: string | ros.IResolvable;
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property repeatMode: Specifies how to run the command. Valid values:
     * - **Once**: immediately runs the command.
     * - **Period**: runs the command on a schedule. If you set this parameter to Period, you must specify **Frequency**.
     * - **NextRebootOnly**: runs the command the next time the instance is started.
     * - **EveryReboot*: runs the command every time the instance is started.
     * Default value:
     * - If you do not specify Frequency, the default value is Once.
     * - If you specify **Frequency**, **Period** is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.
     */
    readonly repeatMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the command executions. The instances specified by InstanceIds must belong to the specified resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property username: The username to use to run the command on instances. The username can be up to 255 characters in length.
     * - For Linux instances, the root username is used by default.
     * - For Windows instances, the System username is used by default.
     * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
     */
    readonly username?: string | ros.IResolvable;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    readonly windowsPasswordName?: string | ros.IResolvable;
    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): \/root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    readonly workingDir?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::RunCommand`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RunCommand` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
 */
export declare class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RunCommand";
    /**
     * @Attribute CommandId: The id of command created.
     */
    readonly attrCommandId: ros.IResolvable;
    /**
     * @Attribute InvokeId: The invoke id of command.
     */
    readonly attrInvokeId: ros.IResolvable;
    /**
     * @Attribute InvokeInstances: The InvokeInstances of command.
     */
    readonly attrInvokeInstances: ros.IResolvable;
    /**
     * @Attribute InvokeResults: The results of invoke command.
     */
    readonly attrInvokeResults: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commandContent: The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    commandContent: string | ros.IResolvable;
    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    type: string | ros.IResolvable;
    /**
     * @Property containerId: The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    containerId: string | ros.IResolvable | undefined;
    /**
     * @Property containerName: The name of the container.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
     * - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    containerName: string | ros.IResolvable | undefined;
    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    contentEncoding: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    enableParameter: boolean | ros.IResolvable | undefined;
    /**
     * @Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    frequency: string | ros.IResolvable | undefined;
    /**
     * @Property keepCommand: Specifies whether to retain the script after it is run. Valid values:
     * true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
     * false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
     * Default value: false
     */
    keepCommand: boolean | ros.IResolvable | undefined;
    /**
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    launcher: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the script, which supports all character sets. It can be up to 128 characters in length.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property repeatMode: Specifies how to run the command. Valid values:
     * - **Once**: immediately runs the command.
     * - **Period**: runs the command on a schedule. If you set this parameter to Period, you must specify **Frequency**.
     * - **NextRebootOnly**: runs the command the next time the instance is started.
     * - **EveryReboot*: runs the command every time the instance is started.
     * Default value:
     * - If you do not specify Frequency, the default value is Once.
     * - If you specify **Frequency**, **Period** is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.
     */
    repeatMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the command executions. The instances specified by InstanceIds must belong to the specified resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property runAgainOn: The stage of executing the command again.
     */
    runAgainOn: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sync: Whether to invoke synchronously.
     */
    sync: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to run_command. Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosRunCommand.TagsProperty[] | undefined;
    /**
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property username: The username to use to run the command on instances. The username can be up to 255 characters in length.
     * - For Linux instances, the root username is used by default.
     * - For Windows instances, the System username is used by default.
     * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
     */
    username: string | ros.IResolvable | undefined;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    windowsPasswordName: string | ros.IResolvable | undefined;
    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): \/root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    workingDir: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRunCommand {
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
/**
 * Properties for defining a `RosRunCommandOfLifespan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommandoflifespan
 */
export interface RosRunCommandOfLifespanProps {
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
     * @Property commandContent: When this resource is created, this content will be executed. When this parameter changes, the new content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    readonly commandContent?: string | ros.IResolvable;
    /**
     * @Property commandContentOnDeletion: When this resource is deleted, this content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    readonly commandContentOnDeletion?: string | ros.IResolvable;
    /**
     * @Property containerId: The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    readonly containerId?: string | ros.IResolvable;
    /**
     * @Property containerName: The name of the container.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
     * - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    readonly containerName?: string | ros.IResolvable;
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
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    readonly launcher?: string | ros.IResolvable;
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the command executions. The instances specified by InstanceIds must belong to the specified resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property sync: Whether to invoke synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to run_command. Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosRunCommandOfLifespan.TagsProperty[];
    /**
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;
    /**
     * @Property username: The username to use to run the command on instances. The username can be up to 255 characters in length.
     * - For Linux instances, the root username is used by default.
     * - For Windows instances, the System username is used by default.
     * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
     */
    readonly username?: string | ros.IResolvable;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    readonly windowsPasswordName?: string | ros.IResolvable;
    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): \/root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    readonly workingDir?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::RunCommandOfLifespan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RunCommandOfLifespan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommandoflifespan
 */
export declare class RosRunCommandOfLifespan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RunCommandOfLifespan";
    /**
     * @Attribute CommandId: The id of command created.
     */
    readonly attrCommandId: ros.IResolvable;
    /**
     * @Attribute InvokeId: The invoke id of command.
     */
    readonly attrInvokeId: ros.IResolvable;
    /**
     * @Attribute InvokeInstances: The InvokeInstances of command.
     */
    readonly attrInvokeInstances: ros.IResolvable;
    /**
     * @Attribute InvokeResults: The results of invoke command.
     */
    readonly attrInvokeResults: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The instance id list. Instances status must be running.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    type: string | ros.IResolvable;
    /**
     * @Property commandContent: When this resource is created, this content will be executed. When this parameter changes, the new content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    commandContent: string | ros.IResolvable | undefined;
    /**
     * @Property commandContentOnDeletion: When this resource is deleted, this content will be executed. Either CommandContent or CommandContentOnDeletion must be specified. The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    commandContentOnDeletion: string | ros.IResolvable | undefined;
    /**
     * @Property containerId: The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    containerId: string | ros.IResolvable | undefined;
    /**
     * @Property containerName: The name of the container.
     * Take note of the following items:
     * - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
     * - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
     * - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
     * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
     */
    containerName: string | ros.IResolvable | undefined;
    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    contentEncoding: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    enableParameter: boolean | ros.IResolvable | undefined;
    /**
     * @Property launcher: A bootloader for script execution. The length cannot exceed 1 KB.
     */
    launcher: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the script, which supports all character sets. It can be up to 128 characters in length.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which to assign the command executions. The instances specified by InstanceIds must belong to the specified resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sync: Whether to invoke synchronously.
     */
    sync: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to run_command. Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosRunCommandOfLifespan.TagsProperty[] | undefined;
    /**
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @Property username: The username to use to run the command on instances. The username can be up to 255 characters in length.
     * - For Linux instances, the root username is used by default.
     * - For Windows instances, the System username is used by default.
     * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
     */
    username: string | ros.IResolvable | undefined;
    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    windowsPasswordName: string | ros.IResolvable | undefined;
    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): \/root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    workingDir: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandOfLifespanProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRunCommandOfLifespan {
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
/**
 * Properties for defining a `RosSNatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
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
     * @Property snatEntryName: The name of the SNAT entry.
     * The name must be 2 to 128 characters in length. It must start with a letter but
     * cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly snatEntryName?: string | ros.IResolvable;
    /**
     * @Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a
     * custom CIDR block.
     * You can specify an SNAT entry in the following ways:
     * *   You can specify the CIDR block of the VPC where the NAT gateway is deployed.
     * Then, all ECS instances in the VPC can access the Internet or external networks
     * by using SNAT.
     * *   You can specify the CIDR block of a vSwitch, for example, 192.168.1.0\/24.
     * Then, the ECS instances in the vSwitch can access the Internet or external
     * networks by using SNAT.
     * *   You can specify the IP address of an ECS instance, for example,
     * 192.168.1.1\/32. Then, the ECS instance can access the Internet or external
     * networks by using SNAT.
     * *   You can specify a custom CIDR block. Then, all ECS instances within the
     * specified CIDR block can access the Internet or external networks by using SNAT.
     * When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
     * EIP, the ECS instance uses the specified EIP to access the Internet.
     * If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
     * specified in the SnatIp parameter to access the Internet.
     * You cannot specify this parameter and SourceVSwtichId at the same time. If
     * SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
     * specified, you cannot specify SourceVSwitchId.
     */
    readonly sourceCidr?: string | ros.IResolvable;
    /**
     * @Property sourceVSwitchId: The ID of the vSwitch.
     * *   When you add an SNAT entry to an Internet NAT gateway, this parameter
     * specifies that ECS instances in the vSwitch can use the SNAT entry to access the
     * Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
     * address pool, connections are hashed to these EIPs. Network traffic may not be
     * evenly distributed to the EIPs because the amount of traffic that passes through
     * each connection varies. We recommend that you associate these EIPs with the same
     * EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
     * on individual EIPs.
     * *   When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
     * that ECS instances in the vSwitch can use the SNAT entry to access external
     * networks.
     */
    readonly sourceVSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SNatEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SNatEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
 */
export declare class RosSNatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SNatEntry";
    /**
     * @Attribute SNatEntryId: The id of created SNAT entry.
     */
    readonly attrSNatEntryId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    sNatIp: string | ros.IResolvable;
    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    sNatTableId: string | ros.IResolvable;
    /**
     * @Property snatEntryName: The name of the SNAT entry.
     * The name must be 2 to 128 characters in length. It must start with a letter but
     * cannot start with `http:\/\/` or `https:\/\/`.
     */
    snatEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a
     * custom CIDR block.
     * You can specify an SNAT entry in the following ways:
     * *   You can specify the CIDR block of the VPC where the NAT gateway is deployed.
     * Then, all ECS instances in the VPC can access the Internet or external networks
     * by using SNAT.
     * *   You can specify the CIDR block of a vSwitch, for example, 192.168.1.0\/24.
     * Then, the ECS instances in the vSwitch can access the Internet or external
     * networks by using SNAT.
     * *   You can specify the IP address of an ECS instance, for example,
     * 192.168.1.1\/32. Then, the ECS instance can access the Internet or external
     * networks by using SNAT.
     * *   You can specify a custom CIDR block. Then, all ECS instances within the
     * specified CIDR block can access the Internet or external networks by using SNAT.
     * When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
     * EIP, the ECS instance uses the specified EIP to access the Internet.
     * If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
     * specified in the SnatIp parameter to access the Internet.
     * You cannot specify this parameter and SourceVSwtichId at the same time. If
     * SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
     * specified, you cannot specify SourceVSwitchId.
     */
    sourceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property sourceVSwitchId: The ID of the vSwitch.
     * *   When you add an SNAT entry to an Internet NAT gateway, this parameter
     * specifies that ECS instances in the vSwitch can use the SNAT entry to access the
     * Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
     * address pool, connections are hashed to these EIPs. Network traffic may not be
     * evenly distributed to the EIPs because the amount of traffic that passes through
     * each connection varies. We recommend that you associate these EIPs with the same
     * EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
     * on individual EIPs.
     * *   When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
     * that ECS instances in the vSwitch can use the SNAT entry to access external
     * networks.
     */
    sourceVSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSNatEntryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSSHKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
 */
export interface RosSSHKeyPairProps {
    /**
     * @Property keyPairName: The name of the key pair. The name must be unique. It must be 2 to 128 characters
     * in length. It must start with a letter and cannot start with http\:\/\/ or
     * https\:\/\/. It can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SSHKeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SSHKeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
 */
export declare class RosSSHKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPair";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable;
    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    readonly attrPrivateKeyBody: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairName: The name of the key pair. The name must be unique. It must be 2 to 128 characters
     * in length. It must start with a letter and cannot start with http\:\/\/ or
     * https\:\/\/. It can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    keyPairName: string | ros.IResolvable;
    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    publicKeyBody: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSSHKeyPair.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSSHKeyPairProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSSHKeyPair {
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
/**
 * Properties for defining a `RosSSHKeyPairAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
 */
export interface RosSSHKeyPairAttachmentProps {
    /**
     * @Property instanceIds: The IDs of instances to which you want to bind the SSH key pair. The value can be
     * a JSON array that consists of up to 50 instance IDs. Separate multiple instance
     * IDs with commas (,).
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SSHKeyPairAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SSHKeyPairAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
 */
export declare class RosSSHKeyPairAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPairAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The IDs of instances to which you want to bind the SSH key pair. The value can be
     * a JSON array that consists of up to 50 instance IDs. Separate multiple instance
     * IDs with commas (,).
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable;
    /**
     * @Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
     * Default: false
     */
    autoReboot: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSSHKeyPairAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
 */
export interface RosSecurityGroupProps {
    /**
     * @Property description: The description of the security group. The description must be 2 to 256
     * characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
     * By default, this parameter is left empty.
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
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
     * The name can contain letters, digits, colons (:), underscores (_), periods (.),
     * and hyphens (-).
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * - normal: basic security group
     * - enterprise: advanced security group
     * Default value: normal.
     */
    readonly securityGroupType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to security group. Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecurityGroup.TagsProperty[];
    /**
     * @Property vpcId: The ID of the VPC in which you want to create the security group.
     * > The VpcId parameter is required only if you want to create security groups of
     * the VPC type.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
 */
export declare class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroup";
    /**
     * @Attribute SecurityGroupId: generated security group id for security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupName: The name of security group.
     */
    readonly attrSecurityGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the security group. The description must be 2 to 256
     * characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
     * By default, this parameter is left empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    securityGroupEgress: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    securityGroupIngress: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
     * The name can contain letters, digits, colons (:), underscores (_), periods (.),
     * and hyphens (-).
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * - normal: basic security group
     * - enterprise: advanced security group
     * Default value: normal.
     */
    securityGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to security group. Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSecurityGroup.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The ID of the VPC in which you want to create the security group.
     * > The VpcId parameter is required only if you want to create security groups of
     * the VPC type.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecurityGroup {
    /**
     * @stability external
     */
    interface SecurityGroupEgressProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
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
         * @Property destGroupId: The destination security group ID to which access permissions need to be set.
     * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
     * - If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.
     * - If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
     * You should pay attention to:
     * - Enterprise Security groups do not support authorized security group access.
     * - The maximum number of authorized security groups supported by ordinary security groups is 20.
         */
        readonly destGroupId?: string | ros.IResolvable;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property destGroupOwnerAccount: When setting security group rules across accounts, the Ali cloud account to which the destination security group belongs.
     * - If neither DestGroupOwnerAccount nor DestGroupOwnerId is set, it is considered to set access permissions for your other security group.
     * - If the parameter DestCidrIp has been set, the parameter DestGroupOwnerAccount is invalid.
         */
        readonly destGroupOwnerAccount?: string | ros.IResolvable;
        /**
         * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
         */
        readonly destPrefixListId?: string | ros.IResolvable;
        /**
         * @Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly sourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
     * - If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.
     * - If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.
         */
        readonly destGroupOwnerId?: string | ros.IResolvable;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string | ros.IResolvable;
        /**
         * @Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly destCidrIp?: string | ros.IResolvable;
        /**
         * @Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
         */
        readonly ipv6DestCidrIp?: string | ros.IResolvable;
    }
}
export declare namespace RosSecurityGroup {
    /**
     * @stability external
     */
    interface SecurityGroupIngressProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property sourceGroupId: Source Group Id
         */
        readonly sourceGroupId?: string | ros.IResolvable;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
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
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
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
         * @Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly destCidrIp?: string | ros.IResolvable;
        /**
         * @Property sourceGroupOwnerAccount: Source Group Owner Account
         */
        readonly sourceGroupOwnerAccount?: string | ros.IResolvable;
        /**
         * @Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
         */
        readonly ipv6DestCidrIp?: string | ros.IResolvable;
        /**
         * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * - If a security group is in the classic network, you cannot configure prefix lists in the security group rules.
     * - If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         */
        readonly sourcePrefixListId?: string | ros.IResolvable;
    }
}
export declare namespace RosSecurityGroup {
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
/**
 * Properties for defining a `RosSecurityGroupClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
 */
export interface RosSecurityGroupCloneProps {
    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    readonly sourceSecurityGroupId: string | ros.IResolvable;
    /**
     * @Property description: The description of the security group. The description must be 2 to 256
     * characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
     * By default, this parameter is left empty.
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
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
     * The name can contain letters, digits, colons (:), underscores (_), periods (.),
     * and hyphens (-).
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * - normal: basic security group
     * - enterprise: advanced security group
     * Default value: normal.
     */
    readonly securityGroupType?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC in which you want to create the security group.
     * > The VpcId parameter is required only if you want to create security groups of
     * the VPC type.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupClone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroupClone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
 */
export declare class RosSecurityGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupClone";
    /**
     * @Attribute SecurityGroupId: Generated security group id of new security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    sourceSecurityGroupId: string | ros.IResolvable;
    /**
     * @Property description: The description of the security group. The description must be 2 to 256
     * characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
     * By default, this parameter is left empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    destinationRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
     * The name can contain letters, digits, colons (:), underscores (_), periods (.),
     * and hyphens (-).
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * - normal: basic security group
     * - enterprise: advanced security group
     * Default value: normal.
     */
    securityGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC in which you want to create the security group.
     * > The VpcId parameter is required only if you want to create security groups of
     * the VPC type.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupCloneProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroupEgress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
 */
export interface RosSecurityGroupEgressProps {
    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
     */
    readonly portRange: string | ros.IResolvable;
    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    readonly destCidrIp?: string | ros.IResolvable;
    /**
     * @Property destGroupId: The destination security group ID to which access permissions need to be set.
     * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
     * - If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.
     * - If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
     * You should pay attention to:
     * - Enterprise Security groups do not support authorized security group access.
     * - The maximum number of authorized security groups supported by ordinary security groups is 20.
     */
    readonly destGroupId?: string | ros.IResolvable;
    /**
     * @Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
     * - If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.
     * - If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.
     */
    readonly destGroupOwnerId?: string | ros.IResolvable;
    /**
     * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
     */
    readonly destPrefixListId?: string | ros.IResolvable;
    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupEgress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroupEgress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
 */
export declare class RosSecurityGroupEgress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupEgress";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
     */
    portRange: string | ros.IResolvable;
    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    destCidrIp: string | ros.IResolvable | undefined;
    /**
     * @Property destGroupId: The destination security group ID to which access permissions need to be set.
     * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
     * - If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.
     * - If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
     * You should pay attention to:
     * - Enterprise Security groups do not support authorized security group access.
     * - The maximum number of authorized security groups supported by ordinary security groups is 20.
     */
    destGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
     * - If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.
     * - If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.
     */
    destGroupOwnerId: string | ros.IResolvable | undefined;
    /**
     * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
     */
    destPrefixListId: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
     */
    ipv6DestCidrIp: string | ros.IResolvable | undefined;
    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    nicType: string | ros.IResolvable | undefined;
    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    policy: string | ros.IResolvable | undefined;
    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupEgressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroupEgresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
 */
export interface RosSecurityGroupEgressesProps {
    /**
     * @Property permissions: A list of security group rules. A hundred at most.
     */
    readonly permissions: Array<RosSecurityGroupEgresses.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupEgresses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroupEgresses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
 */
export declare class RosSecurityGroupEgresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupEgresses";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property permissions: A list of security group rules. A hundred at most.
     */
    permissions: Array<RosSecurityGroupEgresses.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupEgressesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecurityGroupEgresses {
    /**
     * @stability external
     */
    interface PermissionsProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
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
         * @Property destGroupId: The destination security group ID to which access permissions need to be set.
     * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
     * - If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.
     * - If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
     * You should pay attention to:
     * - Enterprise Security groups do not support authorized security group access.
     * - The maximum number of authorized security groups supported by ordinary security groups is 20.
         */
        readonly destGroupId?: string | ros.IResolvable;
        /**
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
         */
        readonly portRange: string | ros.IResolvable;
        /**
         * @Property destGroupOwnerAccount: When setting security group rules across accounts, the Ali cloud account to which the destination security group belongs.
     * - If neither DestGroupOwnerAccount nor DestGroupOwnerId is set, it is considered to set access permissions for your other security group.
     * - If the parameter DestCidrIp has been set, the parameter DestGroupOwnerAccount is invalid.
         */
        readonly destGroupOwnerAccount?: string | ros.IResolvable;
        /**
         * @Property destPrefixListId: The ID of the destination prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
     * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
         */
        readonly destPrefixListId?: string | ros.IResolvable;
        /**
         * @Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly sourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
     * - If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.
     * - If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.
         */
        readonly destGroupOwnerId?: string | ros.IResolvable;
        /**
         * @Property ipProtocol: Ip protocol for in rule.
         */
        readonly ipProtocol: string | ros.IResolvable;
        /**
         * @Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly destCidrIp?: string | ros.IResolvable;
        /**
         * @Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
         */
        readonly ipv6DestCidrIp?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSecurityGroupIngress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingress
 */
export interface RosSecurityGroupIngressProps {
    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
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
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
     */
    readonly sourcePortRange?: string | ros.IResolvable;
    /**
     * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * - If a security group is in the classic network, you cannot configure prefix lists in the security group rules.
     * - If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
     */
    readonly sourcePrefixListId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupIngress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroupIngress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingress
 */
export declare class RosSecurityGroupIngress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupIngress";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
     */
    portRange: string | ros.IResolvable;
    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    ipv6SourceCidrIp: string | ros.IResolvable | undefined;
    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    nicType: string | ros.IResolvable | undefined;
    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    policy: string | ros.IResolvable | undefined;
    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
     */
    sourceCidrIp: string | ros.IResolvable | undefined;
    /**
     * @Property sourceGroupId: Source Group Id
     */
    sourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    sourceGroupOwnerId: string | ros.IResolvable | undefined;
    /**
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
     */
    sourcePortRange: string | ros.IResolvable | undefined;
    /**
     * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * - If a security group is in the classic network, you cannot configure prefix lists in the security group rules.
     * - If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
     */
    sourcePrefixListId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupIngressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSecurityGroupIngresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
 */
export interface RosSecurityGroupIngressesProps {
    /**
     * @Property permissions: A list of security group rules. A hundred at most.
     */
    readonly permissions: Array<RosSecurityGroupIngresses.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupIngresses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroupIngresses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
 */
export declare class RosSecurityGroupIngresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupIngresses";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property permissions: A list of security group rules. A hundred at most.
     */
    permissions: Array<RosSecurityGroupIngresses.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupIngressesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecurityGroupIngresses {
    /**
     * @stability external
     */
    interface PermissionsProperty {
        /**
         * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property sourceGroupId: Source Group Id
         */
        readonly sourceGroupId?: string | ros.IResolvable;
        /**
         * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: Authorization policies priority range[1, 100]
         */
        readonly priority?: number | ros.IResolvable;
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
         * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'
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
         * @Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. CIDR blocks and IPv4 addresses are supported.
         */
        readonly destCidrIp?: string | ros.IResolvable;
        /**
         * @Property sourceGroupOwnerAccount: Source Group Owner Account
         */
        readonly sourceGroupOwnerAccount?: string | ros.IResolvable;
        /**
         * @Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. CIDR format and IPv6 format IP address range are supported.
         */
        readonly ipv6DestCidrIp?: string | ros.IResolvable;
        /**
         * @Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * - If a security group is in the classic network, you cannot configure prefix lists in the security group rules.
     * - If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         */
        readonly sourcePrefixListId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSnapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
 */
export interface RosSnapshotProps {
    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    readonly diskId: string | ros.IResolvable;
    /**
     * @Property description: The snapshot description must be 2 to 256 characters in length and cannot start
     * with `http:\/\/` or `https:\/\/`.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property instantAccess: Specifies whether to enable the Instant Access feature. Valid values:
     * - true: Enables the Instant Access feature. This feature can be enabled only for
     * snapshots of ESSD cloud disks.
     * - false: Disables the Instant Access feature. A standard snapshot is created.
     * Default value: false.
     * > This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the [Instant Access]() feature by default at no additional cost.
     */
    readonly instantAccess?: boolean | ros.IResolvable;
    /**
     * @Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days. The snapshot is
     * automatically deleted when this retention period expires. This parameter takes
     * effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
     * Defaults to the value of `RetentionDays`.
     * > This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the [Instant Access]() feature by default at no additional cost.
     */
    readonly instantAccessRetentionDays?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property retentionDays: The retention period of the snapshot, in days. Valid values: 1 to 65,536. The
     * snapshot is automatically deleted when the retention period expires.
     * If this parameter is not specified, the snapshot is retained indefinitely.
     */
    readonly retentionDays?: number | ros.IResolvable;
    /**
     * @Property snapshotName: The snapshot name must be 2 to 128 characters long. It must start with a letter
     * or a Chinese character and can contain letters, digits, colons (:), underscores
     * (_), periods (.), and hyphens (-).
     * > The name cannot start with `http:\/\/` or `https:\/\/`. To avoid conflicts with
     * auto snapshot names, the name cannot start with `auto`.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Snapshot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
 */
export declare class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Snapshot";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute SnapshotId: The snapshot ID.
     */
    readonly attrSnapshotId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    diskId: string | ros.IResolvable;
    /**
     * @Property description: The snapshot description must be 2 to 256 characters in length and cannot start
     * with `http:\/\/` or `https:\/\/`.
     * This parameter is empty by default.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instantAccess: Specifies whether to enable the Instant Access feature. Valid values:
     * - true: Enables the Instant Access feature. This feature can be enabled only for
     * snapshots of ESSD cloud disks.
     * - false: Disables the Instant Access feature. A standard snapshot is created.
     * Default value: false.
     * > This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the [Instant Access]() feature by default at no additional cost.
     */
    instantAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days. The snapshot is
     * automatically deleted when this retention period expires. This parameter takes
     * effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
     * Defaults to the value of `RetentionDays`.
     * > This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the [Instant Access]() feature by default at no additional cost.
     */
    instantAccessRetentionDays: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property retentionDays: The retention period of the snapshot, in days. Valid values: 1 to 65,536. The
     * snapshot is automatically deleted when the retention period expires.
     * If this parameter is not specified, the snapshot is retained indefinitely.
     */
    retentionDays: number | ros.IResolvable | undefined;
    /**
     * @Property snapshotName: The snapshot name must be 2 to 128 characters long. It must start with a letter
     * or a Chinese character and can contain letters, digits, colons (:), underscores
     * (_), periods (.), and hyphens (-).
     * > The name cannot start with `http:\/\/` or `https:\/\/`. To avoid conflicts with
     * auto snapshot names, the name cannot start with `auto`.
     */
    snapshotName: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSnapshot.TagsProperty[] | undefined;
    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    timeout: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSnapshot {
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
/**
 * Properties for defining a `RosSnapshotGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
 */
export interface RosSnapshotGroupProps {
    /**
     * @Property description: The description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property diskIds: The IDs of cloud disk for which you want to create snapshots. You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
     * Take note of the following items:
     * You cannot specify both DiskIds and ExcludeDiskIdin the same request.
     * If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots. If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
     * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
     * Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
     */
    readonly excludeDiskIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property name: The name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to snapshot-consistent group. Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSnapshotGroup.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SnapshotGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SnapshotGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
 */
export declare class RosSnapshotGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SnapshotGroup";
    /**
     * @Attribute SnapshotGroupId: The ID of the snapshot-consistent group.
     */
    readonly attrSnapshotGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskIds: The IDs of cloud disk for which you want to create snapshots. You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
     * Take note of the following items:
     * You cannot specify both DiskIds and ExcludeDiskIdin the same request.
     * If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
     */
    diskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots. If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
     * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
     * Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
     */
    excludeDiskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The instance ID.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to snapshot-consistent group. Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSnapshotGroup.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSnapshotGroup {
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
/**
 * Properties for defining a `RosVPC`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vpc
 */
export interface RosVPCProps {
    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0\/8
     * 172.16.0.0\/12 (Default)
     * 192.168.0.0\/16
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
     * @Property vpcName: The value contains 1 to 128 characters and cannot start with http:\/\/ or https:\/\/
     */
    readonly vpcName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::VPC`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VPC` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vpc
 */
export declare class RosVPC extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VPC";
    /**
     * @Attribute RouteTableId: The router table id of created VPC.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute VRouterId: Router id of created VPC.
     */
    readonly attrVRouterId: ros.IResolvable;
    /**
     * @Attribute VpcId: Id of created VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcName: The name of VPC
     */
    readonly attrVpcName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0\/8
     * 172.16.0.0\/12 (Default)
     * 192.168.0.0\/16
     */
    cidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    enableIpv6: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    ipv6CidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC. Valid values:
     * BGP(default): Alibaba Cloud BGP IPv6
     * ChinaMobile: China Mobile (single line)
     * ChinaUnicom: China Unicom (single line)
     * ChinaTelecom: China Telecom (single line)
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
     */
    ipv6Isp: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
     *
     */
    secondaryCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosVPC.TagsProperty[] | undefined;
    /**
     * @Property userCidr: The user CIDR block. Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
     */
    userCidr: string | ros.IResolvable | undefined;
    /**
     * @Property vpcName: The value contains 1 to 128 characters and cannot start with http:\/\/ or https:\/\/
     */
    vpcName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVPCProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVPC {
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
/**
 * Properties for defining a `RosVSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vswitch
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
     * @Property vSwitchName: The value contains 1 to 128 characters and cannot start with http:\/\/ or https:\/\/
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::VSwitch`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vswitch
 */
export declare class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VSwitch";
    /**
     * @Attribute CidrBlock: CIDR Block of created VSwitch
     */
    readonly attrCidrBlock: ros.IResolvable;
    /**
     * @Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * @Attribute VSwitchId: Id of created VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VSwitchName: The name of the VSwitch
     */
    readonly attrVSwitchName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    cidrBlock: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    ipv6CidrBlock: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosVSwitch.TagsProperty[] | undefined;
    /**
     * @Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
     */
    vpcIpv6CidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchName: The value contains 1 to 128 characters and cannot start with http:\/\/ or https:\/\/
     */
    vSwitchName: string | ros.IResolvable | undefined;
    /**
     * @Property zoneType: The type of the zones to be queried.
     * Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
     *
     */
    zoneType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVSwitch {
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
