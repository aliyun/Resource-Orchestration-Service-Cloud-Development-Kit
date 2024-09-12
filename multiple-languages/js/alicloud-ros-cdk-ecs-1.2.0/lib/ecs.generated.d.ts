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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosActivation.TagsProperty[];
    /**
     * @Property timeToLiveInHours: The validity period of the activation code. The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
     */
    readonly timeToLiveInHours?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Activation`, which is used to create an activation code.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AssignIpv6Addresses`, which is used to assign one or more IPv6 addresses to an elastic network interface (ENI).
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
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AssignPrivateIpAddresses`, which is used to assign one or more secondary private IP addresses to an ENI. You can specify private IP addresses within the CIDR block of the vSwitch that hosts the ENI. You can also specify the number of private IP addresses for ECS to assign them automatically.
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
     * @Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
     * Valid values of number of private ip addresses:
     * When the ENI is in the Available state: 1 to 10.
     * When the ENI is in the InUse state: limited by the instance type.
     * For more information, see Instance type families.
     * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
     */
    privateIpAddresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
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
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    readonly totalTargetCapacity: string | ros.IResolvable;
    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AutoProvisioningGroup`, which is used to create an auto provisioning group.
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
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    totalTargetCapacity: string | ros.IResolvable;
    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    autoProvisioningGroupName: string | ros.IResolvable | undefined;
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
    autoProvisioningGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
     */
    checkExecutionStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    defaultTargetCapacityType: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the auto provisioning group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
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
     * @Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    launchTemplateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    maxSpotPrice: number | ros.IResolvable | undefined;
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
     * @Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    payAsYouGoTargetCapacity: string | ros.IResolvable | undefined;
    /**
     * @Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    spotAllocationStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    spotInstanceInterruptionBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    spotInstancePoolsToUseCount: number | ros.IResolvable | undefined;
    /**
     * @Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    spotTargetCapacity: string | ros.IResolvable | undefined;
    /**
     * @Property terminateInstances: Specifies whether to release instances of the auto provisioning group. Valid values:
     * true
     * false
     * Default: false
     */
    terminateInstances: boolean | ros.IResolvable | undefined;
    /**
     * @Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
     * Valid values:
     * true: shuts down preemptible instances. The action to be performed on these shutdown instances
     * is specified by the SpotInstanceInterruptionBehavior parameter.
     * false: does not shut down preemptible instances.
     * Default: false
     */
    terminateInstancesWithExpiration: boolean | ros.IResolvable | undefined;
    /**
     * @Property validFrom: The time when the auto provisioning group is started. The period of time between this
     * point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group is immediately started after creation.
     */
    validFrom: string | ros.IResolvable | undefined;
    /**
     * @Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
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
         * @Property description: The description of data disk N. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
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
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
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
         * @Property diskName: The name of data disk N. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
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
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface LaunchConfigurationProperty {
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
         * @Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
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
         * @Property systemDiskName: The name of the system disk. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
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
         * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit\/s. Valid values: 0 to 100. Default value: 0.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
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
export declare namespace RosAutoProvisioningGroup {
    /**
     * @stability external
     */
    interface LaunchTemplateConfigProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AutoSnapshotPolicy`, which is used to create an automatic snapshot policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoSnapshotPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
 */
export declare class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoSnapshotPolicy";
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
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    diskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosAutoSnapshotPolicy.TagsProperty[] | undefined;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CapacityReservation`, which is used to create a capacity reservation.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Command`, which is used to create a Cloud Assistant command.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CopyImage`, which is used to copy a custom image from one region to another region.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::CustomImage`, which is used to create a custom image.
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
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase\/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:\/\/ or https:\/\/.
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
     * @Property zoneId: The zone to create the host.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DedicatedHost`, which is used to create a dedicated host.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
 */
export declare class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DedicatedHost";
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
     * @Property dedicatedHostType: The instance type of host.
     */
    dedicatedHostType: string | ros.IResolvable;
    /**
     * @Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    actionOnMaintenance: string | ros.IResolvable | undefined;
    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    autoPlacement: string | ros.IResolvable | undefined;
    /**
     * @Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
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
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase\/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:\/\/ or https:\/\/.
     */
    dedicatedHostName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of host.
     */
    description: string | ros.IResolvable | undefined;
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
     * @Property zoneId: The zone to create the host.
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
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    readonly onUnableToRedeployFailedInstance?: string | ros.IResolvable;
    /**
     * @Property strategy: Deployment strategy. Ranges:
     * Availability: High availability strategy.
     * AvailabilityGroup: Deployment group high availability strategy.
     * LowLatency: Network low latency strategy.
     */
    readonly strategy?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DeploymentSet`, which is used to create a deployment set in a region.
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
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    onUnableToRedeployFailedInstance: string | ros.IResolvable | undefined;
    /**
     * @Property strategy: Deployment strategy. Ranges:
     * Availability: High availability strategy.
     * AvailabilityGroup: Deployment group high availability strategy.
     * LowLatency: Network low latency strategy.
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
     * @Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto, depends the region.
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
     * @Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId.
     * - Once the instance ID is set, the ResourceGroupId, Tags, and KMSKeyId parameters you set are ignored.
     * - You cannot specify both ZoneId and InstanceId.
     * Default value: null, meaning that a pay-as-you-go cloud drive is created, and the region of the drive is defined by the RegionId and ZoneId.
     */
    readonly instanceId?: string | ros.IResolvable;
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
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
    /**
     * @Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area.
     * - If you do not set InstanceId, ZoneId is required.
     * - You cannot specify both ZoneId and InstanceId.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Disk`, which is used to create a cloud disk for an Elastic Compute Service (ECS) instance.
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
     * @Property burstingEnabled: Whether enable bursting.
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
     * @Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto, depends the region.
     */
    diskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    diskName: string | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId.
     * - Once the instance ID is set, the ResourceGroupId, Tags, and KMSKeyId parameters you set are ignored.
     * - You cannot specify both ZoneId and InstanceId.
     * Default value: null, meaning that a pay-as-you-go cloud drive is created, and the region of the drive is defined by the RegionId and ZoneId.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
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
     * @Property provisionedIops: Provisioning IOPS.
     */
    provisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property size: The size of the disk unit in GB.
     */
    size: number | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetId: Storage set ID.
     */
    storageSetId: string | ros.IResolvable | undefined;
    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    storageSetPartitionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDisk.TagsProperty[] | undefined;
    /**
     * @Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area.
     * - If you do not set InstanceId, ZoneId is required.
     * - You cannot specify both ZoneId and InstanceId.
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
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::DiskAttachment`, which is used to attach a disk to an ECS instance.
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
     * @Property description: The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property period: The effective duration of the elasticity assurance. The unit of the effective duration is determined by the PeriodUnit value. Valid values:
     * When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
     * Default value: 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the effective duration of the elasticity assurance. Valid values:
     * Month
     * Year
     * Default value: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property privatePoolOptions:
     */
    readonly privatePoolOptions?: RosElasticityAssurance.PrivatePoolOptionsProperty | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ElasticityAssurance`, which is used to create an elasticity assurance.
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
     * @Property description: The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property period: The effective duration of the elasticity assurance. The unit of the effective duration is determined by the PeriodUnit value. Valid values:
     * When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
     * Default value: 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the effective duration of the elasticity assurance. Valid values:
     * Month
     * Year
     * Default value: Year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privatePoolOptions:
     */
    privatePoolOptions: RosElasticityAssurance.PrivatePoolOptionsProperty | ros.IResolvable | undefined;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ForwardEntry`, which is used to configure the Destination Network Address Translation (DNAT) table of a Network Address Translation (NAT) gateway.
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
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:\/\/ or https:\/\/. Default value: empty string.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::HpcCluster`, which is used to create a High Performance Computing (HPC) cluster.
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
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
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
     * @Property content: The content of the image component. The content consists of up to 127 commands.
     */
    readonly content: string | ros.IResolvable;
    /**
     * @Property componentType: The type of the image component. Only image build components are supported. Set the value to Build.Default value: Build.
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
     * @Property systemType: The operating system type supported by the image component. Only Linux is supported. Set the value to Linux.Default value: Linux.
     */
    readonly systemType?: string | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosImageComponent.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ImageComponent`, which is used to create an image component.
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
     * @Property content: The content of the image component. The content consists of up to 127 commands.
     */
    content: string | ros.IResolvable;
    /**
     * @Property componentType: The type of the image component. Only image build components are supported. Set the value to Build.Default value: Build.
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
     * @Property systemType: The operating system type supported by the image component. Only Linux is supported. Set the value to Linux.Default value: Linux.
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
     * @Property baseImage: The source image.
     * If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
     * If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
     */
    readonly baseImage: string | ros.IResolvable;
    /**
     * @Property baseImageType: The type of the source image. Valid values:
     * IMAGE: image
     * IMAGE_FAMILY: image family
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
     * @Property imageName: The prefix of the image name. The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}_{ExecutionId}.
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
     * @Property name: The name of the image template. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ImagePipeline`, which is used to create an image template.
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
     * @Property baseImage: The source image.
     * If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
     * If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
     */
    baseImage: string | ros.IResolvable;
    /**
     * @Property baseImageType: The type of the source image. Valid values:
     * IMAGE: image
     * IMAGE_FAMILY: image family
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
     * @Property imageName: The prefix of the image name. The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}_{ExecutionId}.
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
     * @Property name: The name of the image template. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
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
     * @Property imageId: The shared custom image ID.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    readonly accounts?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property isPublic: Whether to publish or remove community mirrors.
     * If this property is not set, no changes will be made to the community image
     */
    readonly isPublic?: boolean | ros.IResolvable;
    /**
     * @Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
     */
    readonly keepPermission?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::ImageSharePermission`, which is used to manage the share permissions on a custom image.
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
     * @Property imageId: The shared custom image ID.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    accounts: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property isPublic: Whether to publish or remove community mirrors.
     * If this property is not set, no changes will be made to the community image
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
     * @Property dedicatedHostId: which dedicated host will be deployed
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
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
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
     * @Property storageSetId: The storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. The value must be greater than or equal to 2.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Instance`, which is used to create an Elastic Compute Service (ECS) instance.
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
     * @Property dedicatedHostId: which dedicated host will be deployed
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
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
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
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
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
     * @Property securityEnhancementStrategy:
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
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    spotDuration: number | ros.IResolvable | undefined;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
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
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. The value must be greater than or equal to 2.
     */
    storageSetPartitionNumber: number | ros.IResolvable | undefined;
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
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
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
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceClone`, which is used to clone an Elastic Compute Service (ECS) instance.
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
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
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
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
     * @Property dedicatedHostId: which dedicated host will be deployed
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
     * @Property imageId: Image ID to create ecs instance.
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
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityOptions: Security options.
     */
    readonly securityOptions?: RosInstanceGroup.SecurityOptionsProperty | ros.IResolvable;
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
     * @Property storageSetId: The storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. The value must be greater than or equal to 2.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceGroup`, which is used to create a group of Elastic Compute Service (ECS) instances that have the same configurations.
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
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    readonly attrRelatedOrderIds: ros.IResolvable;
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
     * @Property dedicatedHostId: which dedicated host will be deployed
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
     * @Property imageId: Image ID to create ecs instance.
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
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
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
     * @Property securityEnhancementStrategy:
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
     * @Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    spotDuration: number | ros.IResolvable | undefined;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
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
     * @Property storageSetPartitionNumber: The maximum number of partitions in the storage set. The value must be greater than or equal to 2.
     */
    storageSetPartitionNumber: number | ros.IResolvable | undefined;
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
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
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
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
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
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceGroupClone`, which is used to create clones of an Elastic Compute Service (ECS) instance.
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
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
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
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
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
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[a-z]. If not specification, will use default value.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the Nth data disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
         * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
         */
        readonly vSwitchId?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Invocation`, which is used to run a Cloud Assistant command on Elastic Compute Service (ECS) instances.
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
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::JoinSecurityGroup`, which is used to add one or more ECS instances to a specified security group.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::LaunchTemplate`, which is used to create a launch template. You can use a launch template to create an Elastic Compute Service (ECS) instance.
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
 * Properties for defining a `RosNetworkInterface`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
export interface RosNetworkInterfaceProps {
    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
     */
    readonly deleteOnRelease?: boolean | ros.IResolvable;
    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
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
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
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
    /**
     * @Property txQueueSize: Elastic network card outbound queue depth.
     * **Note**: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
     */
    readonly txQueueSize?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterface`, which is used to create an elastic network interface (ENI).
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkInterface` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
export declare class RosNetworkInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterface";
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
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
     */
    deleteOnRelease: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
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
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
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
     * @Property networkInterfaceTrafficMode: The communication mode of the ENI. Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
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
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterfaceAttachment`, which is used to bind an elastic network interface (ENI) to an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC).
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterfacePermission`, which is used to grant an account the permission to attach an elastic network interface (ENI) to an instance.
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
     * @Property accountId: the account id
     */
    accountId: string | ros.IResolvable;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property permission: the permission
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
     * @Property addressFamily: The IP address family. Valid values: IPv4 IPv6
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::PrefixList`, which is used to create a prefix list.
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
     * @Property addressFamily: The IP address family. Valid values: IPv4 IPv6
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::RamRoleAttachment`, which is used to attach an instance Resource Access Management (RAM) role to Elastic Compute Service (ECS) instances.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Route`, which is used to create a custom route entry.
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
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    destinationCidrBlock: string | ros.IResolvable;
    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    routeTableId: string | ros.IResolvable;
    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    nextHopId: string | ros.IResolvable | undefined;
    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    nextHopList: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property nextHopType: The next hop type. Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::RunCommand`, which is used to run a shell, PowerShell, or batch command on Elastic Compute Service (ECS) instances.
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
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly snatEntryName?: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;
    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SNatEntry`, which is used to configure the Source Network Address Translation (SNAT) table of a NAT gateway.
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
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    snatEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    sourceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
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
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http:\/\/, or https:\/\/. It can contain digits, ".", "_", or "-".
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SSHKeyPair`, which is used to create an SSH key pair or import an existing SSH key pair to access an Elastic Compute Service (ECS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `SSHKeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
 */
export declare class RosSSHKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPair";
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
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http:\/\/, or https:\/\/. It can contain digits, ".", "_", or "-".
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SSHKeyPairAttachment`, which is used to attach an SSH key pair to Elastic Compute Service (ECS) instances.
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
     * @Property instanceIds: The comma delimited ECS instance id list. Only support Linux.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroup`, which is used to create a security group.
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
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
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
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    securityGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to security group. Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSecurityGroup.TagsProperty[] | undefined;
    /**
     * @Property vpcId: Physical ID of the VPC.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupClone`, which is used to clone a security group.
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
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
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
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    securityGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: Physical ID of the VPC.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupEgress`, which is used to create an outbound access rule for a security group.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::SecurityGroupIngress`, which is used to create an inbound rule for a security group.
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
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:\/\/ or https:\/\/. The description will appear on the console. By default, the value is zero.
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
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase\/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:\/\/ or https:\/\/.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Snapshot`, which is used to create a snapshot for a disk.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
 */
export declare class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Snapshot";
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
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:\/\/ or https:\/\/. The description will appear on the console. By default, the value is zero.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instantAccess: Specifies whether to enable the instant access feature. Valid values:
     * true: enables the instant access feature. This feature can be enabled only for enhanced SSDs (ESSDs)
     * false: disables the instant access feature. If InstantAccess is set to false, normal snapshots are created.
     * Default value: false.
     * Note This parameter and the Category parameter cannot be specified at the same time.
     * For more information, see the "Description" section in this topic.
     */
    instantAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property instantAccessRetentionDays: Specifies the retention period of the instant access feature. After the retention period ends,
     * the snapshot is automatically released. This parameter takes effect only when InstantAccess
     * is set to true. Unit: days.
     * Valid values: 1 to 65535. By default, the value of
     * this parameter is the same as that of RetentionDays.
     */
    instantAccessRetentionDays: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property retentionDays: Set the retention period of a snapshot in days. The snapshot will be automatically released after the retention period expires.
     * The value ranges from 1 to 65536.
     */
    retentionDays: number | ros.IResolvable | undefined;
    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase\/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:\/\/ or https:\/\/.
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
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vpcName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::VPC`, which is used to create a virtual private cloud (VPC).
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
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::VSwitch`, which is used to create a vSwitch.
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
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
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
