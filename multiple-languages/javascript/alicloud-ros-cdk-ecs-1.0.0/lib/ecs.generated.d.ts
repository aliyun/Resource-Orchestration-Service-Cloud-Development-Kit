import * as ros from '@alicloud/ros-cdk-core';
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
 * A ROS template type:  `ALIYUN::ECS::AssignIpv6Addresses`
 */
export declare class RosAssignIpv6Addresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignIpv6Addresses";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    readonly attrIpv6AddressIds: any;
    /**
     * @Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    readonly attrIpv6Addresses: any;
    /**
     * @Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    readonly attrNetworkInterfaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    networkInterfaceId: string;
    /**
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    ipv6AddressCount: number | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECS::AssignIpv6Addresses`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::AssignPrivateIpAddresses`
 */
export declare class RosAssignPrivateIpAddresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignPrivateIpAddresses";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NetworkInterfaceId: The ID of the ENI.
     */
    readonly attrNetworkInterfaceId: any;
    /**
     * @Attribute PrivateIpAddresses: Assigned private ip addresses.
     */
    readonly attrPrivateIpAddresses: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkInterfaceId: The ID of the ENI.
     */
    networkInterfaceId: string;
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
    secondaryPrivateIpAddressCount: number | undefined;
    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::AutoProvisioningGroup`
 */
export declare class RosAutoProvisioningGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoProvisioningGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    readonly attrAutoProvisioningGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    launchTemplateId: string;
    /**
     * @Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    totalTargetCapacity: string;
    /**
     * @Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:// or https://.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    autoProvisioningGroupName: string | undefined;
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
    autoProvisioningGroupType: string | undefined;
    /**
     * @Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    defaultTargetCapacityType: string | undefined;
    /**
     * @Property description: The description of the auto provisioning group.
     */
    description: string | undefined;
    /**
     * @Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
     */
    excessCapacityTerminationPolicy: string | undefined;
    /**
     * @Property launchTemplateConfig:
     */
    launchTemplateConfig: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    launchTemplateVersion: string | undefined;
    /**
     * @Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    maxSpotPrice: number | undefined;
    /**
     * @Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    payAsYouGoAllocationStrategy: string | undefined;
    /**
     * @Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    payAsYouGoTargetCapacity: string | undefined;
    /**
     * @Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    spotAllocationStrategy: string | undefined;
    /**
     * @Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    spotInstanceInterruptionBehavior: string | undefined;
    /**
     * @Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    spotInstancePoolsToUseCount: number | undefined;
    /**
     * @Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    spotTargetCapacity: string | undefined;
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
    validFrom: string | undefined;
    /**
     * @Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
     */
    validUntil: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     *
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
 * Properties for defining a `ALIYUN::ECS::AutoSnapshotPolicy`
 */
export interface RosAutoSnapshotPolicyProps {
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
    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    readonly diskIds?: string[];
}
/**
 * A ROS template type:  `ALIYUN::ECS::AutoSnapshotPolicy`
 */
export declare class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoSnapshotPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property repeatWeekdays: The automatic snapshot repetition dates. The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    repeatWeekdays: number[] | ros.IResolvable;
    /**
     * @Property retentionDays: The snapshot retention time, and the unit of measurement is day. Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    retentionDays: number;
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
     * Cannot start with http:// or https://.
     * Default value: null.
     */
    autoSnapshotPolicyName: string | undefined;
    /**
     * @Property diskIds: The disk ID. When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    diskIds: string[] | undefined;
    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::BandwidthPackage`
 */
export declare class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::BandwidthPackage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute BandwidthPackageId: The bandwidth package id of created Bandwidth package.
     */
    readonly attrBandwidthPackageId: any;
    /**
     * @Attribute BandwidthPackageIps: The allocated public IPs.
     */
    readonly attrBandwidthPackageIps: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
     */
    bandwidth: number;
    /**
     * @Property ipCount: Total internet IPs of this Bandwidth package, [1-5]
     */
    ipCount: number;
    /**
     * @Property natGatewayId: Create bandwidth package for specified NAT gateway
     */
    natGatewayId: string;
    /**
     * @Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    bandwidthPackageName: string | undefined;
    /**
     * @Property description: Description of the bandwidth package, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    internetChargeType: string | undefined;
    /**
     * @Property zoneId: The availability zone where the bandwidth package will be created.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::BandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean);
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
 * A ROS template type:  `ALIYUN::ECS::Command`
 */
export declare class RosCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Command";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CommandId: The id of command created.
     */
    readonly attrCommandId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property type: The type of command.
     */
    type: string;
    /**
     * @Property commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
     */
    commandContent: string | undefined;
    /**
     * @Property description: The description of command.
     */
    description: string | undefined;
    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    enableParameter: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of command.
     */
    name: string | undefined;
    /**
     * @Property timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
     */
    timeout: number | undefined;
    /**
     * @Property workingDir: The path where command will be executed in the instance.
     */
    workingDir: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::Command`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::CopyImage`
 */
export declare class RosCopyImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CopyImage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ImageId: ID of the source custom image.
     */
    readonly attrImageId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    destinationRegionId: string;
    /**
     * @Property imageId: ID of the source custom image.
     */
    imageId: string;
    /**
     * @Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    destinationDescription: string | undefined;
    /**
     * @Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    destinationImageName: string | undefined;
    /**
     * @Property encrypted: Whether to encrypt the image.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    kmsKeyId: string | undefined;
    /**
     * @Property tag:
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECS::CopyImage`.
     *
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
        readonly value?: string;
        /**
         * @Property key: Custom image tag key.
         */
        readonly key?: string;
    }
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
 * A ROS template type:  `ALIYUN::ECS::CustomImage`
 */
export declare class RosCustomImage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CustomImage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ImageId: Image ID
     */
    readonly attrImageId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    architecture: string | undefined;
    /**
     * @Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    description: string | undefined;
    /**
     * @Property diskDeviceMapping:
     */
    diskDeviceMapping: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    imageName: string | undefined;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | undefined;
    /**
     * @Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    platform: string | undefined;
    /**
     * @Property resourceGroupId: The enterprise resource group ID where the custom image is located.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    snapshotId: string | undefined;
    /**
     * @Property tag:
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECS::CustomImage`.
     *
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
export declare namespace RosCustomImage {
    /**
     * @stability external
     */
    interface TagProperty {
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
 * A ROS template type:  `ALIYUN::ECS::DedicatedHost`
 */
export declare class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DedicatedHost";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DedicatedHostIds: The host id list of created hosts
     */
    readonly attrDedicatedHostIds: any;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostType: The instance type of host.
     */
    dedicatedHostType: string;
    /**
     * @Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    actionOnMaintenance: string | undefined;
    /**
     * @Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    autoPlacement: string | undefined;
    /**
     * @Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    autoRenew: string | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    autoRenewPeriod: number | undefined;
    /**
     * @Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    chargeType: string | undefined;
    /**
     * @Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    dedicatedHostName: string | undefined;
    /**
     * @Property description: The description of host.
     */
    description: string | undefined;
    /**
     * @Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    networkAttributesSlbUdpTimeout: number | undefined;
    /**
     * @Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    networkAttributesUdpTimeout: number | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    period: number | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    periodUnit: string | undefined;
    /**
     * @Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    quantity: number | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property zoneId: The zone to create the host.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::DedicatedHost`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::DeploymentSet`
 */
export declare class RosDeploymentSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DeploymentSet";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DeploymentSetId: The ID of the deployment set.
     */
    readonly attrDeploymentSetId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    deploymentSetName: string | undefined;
    /**
     * @Property description: The description of the deployment set. It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    onUnableToRedeployFailedInstance: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::DeploymentSet`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::Disk`
 */
export declare class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Disk";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DiskId: Id of created disk.
     */
    readonly attrDiskId: any;
    /**
     * @Attribute Status: Created disk status.
     */
    readonly attrStatus: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property zoneId: The availability zone in which the volume will be created.
     */
    zoneId: string;
    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    autoSnapshotPolicyId: string | undefined;
    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    deleteAutoSnapshot: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.
     */
    diskCategory: string | undefined;
    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    diskName: string | undefined;
    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    kmsKeyId: string | undefined;
    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    performanceLevel: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property size: The size of the disk unit in GB.
     */
    size: number | undefined;
    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    snapshotId: string | undefined;
    /**
     * @Property storageSetId: Storage set ID.
     */
    storageSetId: string | undefined;
    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    storageSetPartitionNumber: number | undefined;
    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * Create a new `ALIYUN::ECS::Disk`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::DiskAttachment`
 */
export declare class RosDiskAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DiskAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Device: The device where the volume is exposed on ecs instance.
     */
    readonly attrDevice: any;
    /**
     * @Attribute DiskId: The disk id of created disk
     */
    readonly attrDiskId: any;
    /**
     * @Attribute Status: The disk status now.
     */
    readonly attrStatus: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: The disk id to attached.
     */
    diskId: string;
    /**
     * @Property instanceId: The instanceId to attach the disk.
     */
    instanceId: string;
    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    deleteAutoSnapshot: boolean | ros.IResolvable | undefined;
    /**
     * @Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    deleteWithInstance: boolean | ros.IResolvable | undefined;
    /**
     * @Property device: The device where the volume is exposed on the instance. could be /dev/xvd[b-z]. If not specification, will use default value.
     */
    device: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::DiskAttachment`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::ForwardEntry`
 */
export declare class RosForwardEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ForwardEntry";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ForwardEntryId: The id of created forward entry.
     */
    readonly attrForwardEntryId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    externalIp: string;
    /**
     * @Property externalPort: Source port, now support [1-65535]|Any
     */
    externalPort: string;
    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    forwardTableId: string;
    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    internalIp: string;
    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any
     */
    internalPort: string;
    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    ipProtocol: string;
    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::HpcCluster`
 */
export declare class RosHpcCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::HpcCluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HpcClusterId: The ID of the HPC cluster.
     */
    readonly attrHpcClusterId: any;
    /**
     * @Attribute Name: The name of the HPC cluster.
     */
    readonly attrName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    name: string;
    /**
     * @Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    description: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::HpcCluster`.
     *
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
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
     * @Property securityEnhancementStrategy:
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
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HostName: Host name of created instance.
     */
    readonly attrHostName: any;
    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    readonly attrInnerIp: any;
    /**
     * @Attribute InstanceId: The instance id of created ecs instance
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface id of created instance.
     */
    readonly attrPrimaryNetworkInterfaceId: any;
    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIp: any;
    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    readonly attrPublicIp: any;
    /**
     * @Attribute ZoneId: Zone id of created instance.
     */
    readonly attrZoneId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string;
    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    allocatePublicIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    autoRenew: string | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    autoRenewPeriod: number | undefined;
    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    dedicatedHostId: string | undefined;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    deploymentSetId: string | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    diskMappings: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    hostName: string | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    hpcClusterId: string | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    instanceChargeType: string | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    internetChargeType: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    ioOptimized: string | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    period: number | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    periodUnit: string | undefined;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityEnhancementStrategy:
     */
    securityEnhancementStrategy: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    systemDiskCategory: string | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    systemDiskDescription: string | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    systemDiskDiskName: string | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    systemDiskPerformanceLevel: string | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
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
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::InstanceClone`
 */
export declare class RosInstanceClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceClone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HostName: Host name of created instance.
     */
    readonly attrHostName: any;
    /**
     * @Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    readonly attrInnerIp: any;
    /**
     * @Attribute InstanceId: The instance id of created ecs instance
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute PrimaryNetworkInterfaceId: Primary network interface id of created instance.
     */
    readonly attrPrimaryNetworkInterfaceId: any;
    /**
     * @Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIp: any;
    /**
     * @Attribute PublicIp: Public IP address of created ecs instance.
     */
    readonly attrPublicIp: any;
    /**
     * @Attribute ZoneId: Zone id of created instance.
     */
    readonly attrZoneId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    sourceInstanceId: string;
    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    backendServerWeight: number | undefined;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    diskMappings: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    instanceChargeType: string | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | undefined;
    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    loadBalancerIdToAttach: string | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    period: number | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     *
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
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
     * @Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string;
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
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::InstanceGroup`
 */
export declare class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HostNames: Host names of created instance.
     */
    readonly attrHostNames: any;
    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    readonly attrInnerIps: any;
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    readonly attrInstanceIds: any;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIps: any;
    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    readonly attrPublicIps: any;
    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    readonly attrZoneIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string;
    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    maxAmount: number;
    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    allocatePublicIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    autoRenew: string | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    autoRenewPeriod: number | undefined;
    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    dedicatedHostId: string | undefined;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    deploymentSetId: string | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    diskMappings: Array<RosInstanceGroup.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    eniMappings: Array<RosInstanceGroup.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
    hostName: string | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    hpcClusterId: string | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    instanceChargeType: string | undefined;
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
    instanceName: string | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    internetChargeType: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    ioOptimized: string | undefined;
    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6AddressCount: number | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    keyPairName: string | undefined;
    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateId: string | undefined;
    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateName: string | undefined;
    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    launchTemplateVersion: string | undefined;
    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    networkType: string | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    period: number | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    periodUnit: string | undefined;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityEnhancementStrategy:
     */
    securityEnhancementStrategy: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    systemDiskCategory: string | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    systemDiskDescription: string | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    systemDiskDiskName: string | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    systemDiskPerformanceLevel: string | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::InstanceGroup`.
     *
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
    interface DiskMappingsProperty {
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
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface EniMappingsProperty {
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
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
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::InstanceGroupClone`
 */
export declare class RosInstanceGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroupClone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HostNames: Host names of created instance.
     */
    readonly attrHostNames: any;
    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    readonly attrInnerIps: any;
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    readonly attrInstanceIds: any;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIps: any;
    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    readonly attrPublicIps: any;
    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    readonly attrZoneIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    maxAmount: number;
    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    sourceInstanceId: string;
    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    autoRenew: string | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    autoRenewPeriod: number | undefined;
    /**
     * @Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    backendServerWeight: number | undefined;
    /**
     * @Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    deploymentSetId: string | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    diskMappings: Array<RosInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    eniMappings: Array<RosInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    hpcClusterId: string | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | undefined;
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
    instanceName: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | undefined;
    /**
     * @Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6AddressCount: number | undefined;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    ipv6Addresses: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    keyPairName: string | undefined;
    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateId: string | undefined;
    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateName: string | undefined;
    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    launchTemplateVersion: string | undefined;
    /**
     * @Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    loadBalancerIdToAttach: string | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    period: number | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    periodUnit: string | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    spotStrategy: string | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    systemDiskCategory: string | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    systemDiskDescription: string | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    systemDiskDiskName: string | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::InstanceGroupClone`.
     *
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
    interface DiskMappingsProperty {
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
export declare namespace RosInstanceGroupClone {
    /**
     * @stability external
     */
    interface EniMappingsProperty {
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property timed: Whether it is timed execution. Default is False.
     */
    readonly timed?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ECS::Invocation`
 */
export declare class RosInvocation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Invocation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InvokeId: The id of command execution.
     */
    readonly attrInvokeId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commandId: The id of command.
     */
    commandId: string;
    /**
     * @Property instanceIds: The instance id list. Select up to 50 instances at a time.Instances status must be running.
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    frequency: string | undefined;
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
     * @Property timed: Whether it is timed execution. Default is False.
     */
    timed: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECS::Invocation`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::JoinSecurityGroup`
 */
export declare class RosJoinSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::JoinSecurityGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property securityGroupId: Security group id to join.
     */
    securityGroupId: string;
    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    instanceId: string | undefined;
    /**
     * @Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
     */
    instanceIdList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceList: Network interface list.
     */
    networkInterfaceList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::LaunchTemplate`
 */
export declare class RosLaunchTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::LaunchTemplate";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DefaultVersionNumber: The default version number of launch template.
     */
    readonly attrDefaultVersionNumber: any;
    /**
     * @Attribute LatestVersionNumber: The latest version number of launch template.
     */
    readonly attrLatestVersionNumber: any;
    /**
     * @Attribute LaunchTemplateId: The id of launch template.
     */
    readonly attrLaunchTemplateId: any;
    /**
     * @Attribute LaunchTemplateName: The name of launch template.
     */
    readonly attrLaunchTemplateName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property launchTemplateName: The name of launch template.
     */
    launchTemplateName: string;
    /**
     * @Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    autoReleaseTime: string | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    diskMappings: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    hostName: string | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    internetChargeType: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet in bandwidth in Mbps(Mega bit per second). The range is [1,200].
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    ioOptimized: string | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | undefined;
    /**
     * @Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    networkInterfaces: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    networkType: string | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    securityEnhancementStrategy: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    spotPriceLimit: string | undefined;
    /**
     * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    spotStrategy: string | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    systemDiskCategory: string | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    systemDiskDescription: string | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    systemDiskDiskName: string | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | undefined;
    /**
     * @Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property templateTags: Template tags to attach to launch template.
     */
    templateTags: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    userData: string | undefined;
    /**
     * @Property versionDescription: Description for version 1 of launch template.
     */
    versionDescription: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: Current zone to create the instance.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     *
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
export declare namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    interface NetworkInterfacesProperty {
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
export declare namespace RosLaunchTemplate {
    /**
     * @stability external
     */
    interface TemplateTagsProperty {
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
 * A ROS template type:  `ALIYUN::ECS::NetworkInterface`
 */
export declare class RosNetworkInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterface";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute MacAddress: The MAC address of your Network Interface.
     */
    readonly attrMacAddress: any;
    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: any;
    /**
     * @Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    readonly attrPrivateIpAddress: any;
    /**
     * @Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    readonly attrSecondaryPrivateIpAddresses: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    vSwitchId: string;
    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    description: string | undefined;
    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    networkInterfaceName: string | undefined;
    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    primaryIpAddress: string | undefined;
    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    privateIpAddresses: string[] | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    securityGroupIds: string[] | undefined;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export declare class RosNetworkInterfaceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfaceAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: any;
    /**
     * @Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    readonly attrTrunkNetworkInstanceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: ECS instance id
     */
    instanceId: string;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    networkInterfaceId: string;
    /**
     * @Property trunkNetworkInstanceId: undefined
     */
    trunkNetworkInstanceId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterfaceAttachment`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::NetworkInterfacePermission`
 */
export declare class RosNetworkInterfacePermission extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfacePermission";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    readonly attrNetworkInterfacePermissionId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountId: the account id
     */
    accountId: string;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    networkInterfaceId: string;
    /**
     * @Property permission: the permission
     */
    permission: string;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     *
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
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
     * @Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string;
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
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::PrepayInstance`
 */
export declare class RosPrepayInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrepayInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HostNames: Host names of created instance.
     */
    readonly attrHostNames: any;
    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    readonly attrInnerIps: any;
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    readonly attrInstanceIds: any;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIps: any;
    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    readonly attrPublicIps: any;
    /**
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    readonly attrRelatedOrderIds: any;
    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    readonly attrZoneIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string;
    /**
     * @Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    instanceType: string;
    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    maxAmount: number;
    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    minAmount: number;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string;
    /**
     * @Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    allocatePublicIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    autoRenewPeriod: number | undefined;
    /**
     * @Property dedicatedHostId: which dedicated host will be deployed
     */
    dedicatedHostId: string | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    deploymentSetId: string | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    diskMappings: Array<RosPrepayInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    hostName: string | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    hpcClusterId: string | undefined;
    /**
     * @Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    instanceChargeType: string | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
     */
    internetChargeType: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support true or false, Default is true.
     */
    ioOptimized: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    periodUnit: string | undefined;
    /**
     * @Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property securityEnhancementStrategy:
     */
    securityEnhancementStrategy: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    systemDiskCategory: string | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.
     */
    systemDiskDescription: string | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.
     */
    systemDiskDiskName: string | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    systemDiskPerformanceLevel: string | undefined;
    /**
     * @Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    systemDiskSize: number | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
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
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
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
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::PrepayInstanceGroupClone`
 */
export declare class RosPrepayInstanceGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrepayInstanceGroupClone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HostNames: Host names of created instance.
     */
    readonly attrHostNames: any;
    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    readonly attrInnerIps: any;
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    readonly attrInstanceIds: any;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIps: any;
    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    readonly attrPublicIps: any;
    /**
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    readonly attrRelatedOrderIds: any;
    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    readonly attrZoneIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    maxAmount: number;
    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    minAmount: number;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string;
    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    sourceInstanceId: string;
    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    autoRenew: string | undefined;
    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    autoRenewPeriod: number | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    deploymentSetId: string | undefined;
    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    description: string | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    diskMappings: Array<RosPrepayInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    eniMappings: Array<RosPrepayInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    hpcClusterId: string | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    imageId: string | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    internetMaxBandwidthIn: number | undefined;
    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    internetMaxBandwidthOut: number | undefined;
    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    keyPairName: string | undefined;
    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateId: string | undefined;
    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    launchTemplateName: string | undefined;
    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    launchTemplateVersion: string | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | undefined;
    /**
     * @Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    periodUnit: string | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | undefined;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | undefined;
    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    systemDiskCategory: string | undefined;
    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    systemDiskDescription: string | undefined;
    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    systemDiskDiskName: string | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceGroupCloneProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrepayInstanceGroupClone {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
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
export declare namespace RosPrepayInstanceGroupClone {
    /**
     * @stability external
     */
    interface EniMappingsProperty {
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
 * A ROS template type:  `ALIYUN::ECS::Route`
 */
export declare class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Route";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    destinationCidrBlock: string;
    /**
     * @Property routeId: RouteId of created route entry.
     */
    routeId: string;
    /**
     * @Property routeTableId: RouteTableId of created route entry.
     */
    routeTableId: string;
    /**
     * @Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    nextHopId: string | undefined;
    /**
     * @Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    nextHopList: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property nextHopType: The next hop type. Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    nextHopType: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * A ROS template type:  `ALIYUN::ECS::RunCommand`
 */
export declare class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RunCommand";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CommandId: The id of command created.
     */
    readonly attrCommandId: any;
    /**
     * @Attribute InvokeId: The invoke id of command.
     */
    readonly attrInvokeId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commandContent: The plaintext content or the Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
     * You can enable the custom parameter function by setting EnableParameter=true in the script content:
     * Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
     * The number of custom parameters cannot exceed 20.
     * A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
     * Each custom parameter key cannot exceed 64 bytes.
     */
    commandContent: string;
    /**
     * @Property instanceIds: The instance id list. Select up to 20 instances at a time.Instances status must be running.
     */
    instanceIds: string[];
    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     * RunShellScript: shell scripts for Linux instances
     */
    type: string;
    /**
     * @Property contentEncoding: The encoding mode of script content (CommandContent). Valid values (case insensitive):
     * PlainText: The script content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    contentEncoding: string | undefined;
    /**
     * @Property description: The description of the script, which supports all character sets. It can be up to 512 characters in length.
     */
    description: string | undefined;
    /**
     * @Property enableParameter: Specifies whether the script contains custom parameters.
     * Default value: false
     */
    enableParameter: boolean | ros.IResolvable | undefined;
    /**
     * @Property frequency: The execution period of recurring tasks. If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
     * The parameter value follows the cron expression. For more information, see Configure scheduled commands.
     */
    frequency: string | undefined;
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
    name: string | undefined;
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
     * @Property timed: Specifies whether to periodically run the script. Valid values:
     * true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
     * false: runs once only.
     * Default value: false
     */
    timed: boolean | ros.IResolvable | undefined;
    /**
     * @Property timeout: The timeout period for script execution. Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
     * Default value: 60.
     */
    timeout: number | undefined;
    /**
     * @Property workingDir: The running directory of the script in the ECS instance.
     * Default value:
     * Linux instances: under the home directory of the administrator (root user): /root.
     * Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
     */
    workingDir: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     *
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
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string;
    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECS::SNatEntry`
 */
export declare class RosSNatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SNatEntry";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SNatEntryId: The id of created SNAT entry.
     */
    readonly attrSNatEntryId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    sNatIp: string;
    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    sNatTableId: string;
    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    snatEntryName: string | undefined;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    sourceCidr: string | undefined;
    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    sourceVSwitchId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::SSHKeyPair`
 */
export declare class RosSSHKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPair";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    readonly attrKeyPairFingerPrint: any;
    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    readonly attrKeyPairName: any;
    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    readonly attrPrivateKeyBody: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
     */
    keyPairName: string;
    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    publicKeyBody: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::SSHKeyPairAttachment`
 */
export declare class RosSSHKeyPairAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPairAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The comma delimited ECS instance id list. Only support Linux.
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string;
    /**
     * Create a new `ALIYUN::ECS::SSHKeyPairAttachment`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::SecurityGroup`
 */
export declare class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecurityGroupId: generated security group id for security group.
     */
    readonly attrSecurityGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
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
    securityGroupName: string | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    securityGroupType: string | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    vpcId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::SecurityGroup`.
     *
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
export declare namespace RosSecurityGroup {
    /**
     * @stability external
     */
    interface SecurityGroupIngressProperty {
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
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupClone`
 */
export declare class RosSecurityGroupClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupClone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecurityGroupId: Generated security group id of new security group.
     */
    readonly attrSecurityGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    sourceSecurityGroupId: string;
    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    destinationRegionId: string | undefined;
    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    networkType: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    securityGroupName: string | undefined;
    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    securityGroupType: string | undefined;
    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    vpcId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
export declare class RosSecurityGroupEgress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupEgress";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    ipProtocol: string;
    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    portRange: string;
    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    description: string | undefined;
    /**
     * @Property destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
     */
    destCidrIp: string | undefined;
    /**
     * @Property destGroupId: Dest Group Id
     */
    destGroupId: string | undefined;
    /**
     * @Property destGroupOwnerId: Dest Group Owner Account ID
     */
    destGroupOwnerId: string | undefined;
    /**
     * @Property ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    ipv6DestCidrIp: string | undefined;
    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    nicType: string | undefined;
    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    policy: string | undefined;
    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    priority: number | undefined;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    securityGroupId: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupIngress`
 */
export declare class RosSecurityGroupIngress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupIngress";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipProtocol: Ip protocol for in rule.
     */
    ipProtocol: string;
    /**
     * @Property portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    portRange: string;
    /**
     * @Property description: Description of the security group rule, [1, 512] characters. The default is empty.
     */
    description: string | undefined;
    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    ipv6SourceCidrIp: string | undefined;
    /**
     * @Property nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
     */
    nicType: string | undefined;
    /**
     * @Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
     */
    policy: string | undefined;
    /**
     * @Property priority: Authorization policies priority range[1, 100]
     */
    priority: number | undefined;
    /**
     * @Property securityGroupId: Id of the security group.
     */
    securityGroupId: string | undefined;
    /**
     * @Property sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
     */
    sourceCidrIp: string | undefined;
    /**
     * @Property sourceGroupId: Source Group Id
     */
    sourceGroupId: string | undefined;
    /**
     * @Property sourceGroupOwnerId: Source Group Owner Account ID
     */
    sourceGroupOwnerId: string | undefined;
    /**
     * @Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    sourcePortRange: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupIngress`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::Snapshot`
 */
export declare class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Snapshot";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SnapshotId: The snapshot ID.
     */
    readonly attrSnapshotId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property diskId: Indicates the ID of the specified disk.
     */
    diskId: string;
    /**
     * @Property description: The description of a snapshot can be 2 to 256 characters in length and cannot begin with http:// or https://. The description will appear on the console. By default, the value is zero.
     */
    description: string | undefined;
    /**
     * @Property snapshotName: The name of the snapshot, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    snapshotName: string | undefined;
    /**
     * @Property timeout: The number of minutes to wait for create snapshot.
     */
    timeout: number | undefined;
    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::VPC`
 */
export declare class RosVPC extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VPC";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RouteTableId: The router table id of created VPC.
     */
    readonly attrRouteTableId: any;
    /**
     * @Attribute VRouterId: Router id of created VPC.
     */
    readonly attrVRouterId: any;
    /**
     * @Attribute VpcId: Id of created VPC.
     */
    readonly attrVpcId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    cidrBlock: string | undefined;
    /**
     * @Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    enableIpv6: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    ipv6CidrBlock: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    vpcName: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
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
 * A ROS template type:  `ALIYUN::ECS::VSwitch`
 */
export declare class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VSwitch";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CidrBlock: CIDR Block of created VSwitch
     */
    readonly attrCidrBlock: any;
    /**
     * @Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    readonly attrIpv6CidrBlock: any;
    /**
     * @Attribute VSwitchId: Id of created VSwitch.
     */
    readonly attrVSwitchId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    cidrBlock: string;
    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    vpcId: string;
    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    zoneId: string;
    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    ipv6CidrBlock: number | undefined;
    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    vSwitchName: string | undefined;
    /**
     * Create a new `ALIYUN::ECS::VSwitch`.
     *
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
