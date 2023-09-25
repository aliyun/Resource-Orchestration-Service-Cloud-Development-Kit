import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::ECS::Instance`
 */
export interface InstanceProps {

    /**
     * Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string | ros.IResolvable;

    /**
     * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;

    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupIds: The ID list of security group to which to assign the instance. The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    readonly spotDuration?: number | ros.IResolvable;

    /**
     * Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
     */
    readonly spotInterruptionBehavior?: string | ros.IResolvable;

    /**
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;

    /**
     * Property zoneIds: Zone ids for query parameters
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute HostName: Host name of created instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIp: ros.IResolvable;

    /**
     * Attribute InstanceId: The instance ID of created ecs instance
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    public readonly attrPrimaryNetworkInterfaceId: ros.IResolvable;

    /**
     * Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * Attribute PublicIp: Public IP address of created ecs instance.
     */
    public readonly attrPublicIp: ros.IResolvable;

    /**
     * Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * Attribute ZoneId: Zone ID of created instance.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            dedicatedHostId: props.dedicatedHostId,
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            diskMappings: props.diskMappings,
            userData: props.userData,
            systemDiskSize: props.systemDiskSize,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            autoRenew: props.autoRenew === undefined || props.autoRenew === null ? 'False' : props.autoRenew,
            spotDuration: props.spotDuration,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            spotPriceLimit: props.spotPriceLimit,
            zoneIds: props.zoneIds,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp === undefined || props.allocatePublicIp === null ? true : props.allocatePublicIp,
            tags: props.tags,
            hostName: props.hostName,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized === undefined || props.ioOptimized === null ? 'optimized' : props.ioOptimized,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'PayByTraffic' : props.internetChargeType,
            systemDiskCategory: props.systemDiskCategory === undefined || props.systemDiskCategory === null ? 'cloud_efficiency' : props.systemDiskCategory,
            spotInterruptionBehavior: props.spotInterruptionBehavior,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut === undefined || props.internetMaxBandwidthOut === null ? 1 : props.internetMaxBandwidthOut,
            vpcId: props.vpcId,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHostName = rosInstance.attrHostName;
        this.attrInnerIp = rosInstance.attrInnerIp;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrimaryNetworkInterfaceId = rosInstance.attrPrimaryNetworkInterfaceId;
        this.attrPrivateIp = rosInstance.attrPrivateIp;
        this.attrPublicIp = rosInstance.attrPublicIp;
        this.attrSecurityGroupIds = rosInstance.attrSecurityGroupIds;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
