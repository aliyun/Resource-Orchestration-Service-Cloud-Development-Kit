import * as ros from '@alicloud/ros-cdk-core';
import { RosPrepayInstance } from './ecs.generated';
export { RosPrepayInstance as PrepayInstanceProperty };
/**
 * Properties for defining a `ALIYUN::ECS::PrepayInstance`
 */
export interface PrepayInstanceProps {
    /**
     * Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    readonly maxAmount: number | ros.IResolvable;
    /**
     * Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    readonly minAmount: number | ros.IResolvable;
    /**
     * Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number | ros.IResolvable;
    /**
     * Property periodType: Charge period for created instances.
     */
    readonly periodType: string | ros.IResolvable;
    /**
     * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;
    /**
     * Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
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
    readonly diskMappings?: Array<RosPrepayInstance.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
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
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;
    /**
     * Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance. Support true or false, Default is true.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;
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
     * Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
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
    readonly tags?: RosPrepayInstance.TagsProperty[];
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
}
/**
 * A ROS resource type:  `ALIYUN::ECS::PrepayInstance`
 */
export declare class PrepayInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute HostNames: Host names of created instance.
     */
    readonly attrHostNames: ros.IResolvable;
    /**
     * Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    readonly attrInnerIps: ros.IResolvable;
    /**
     * Attribute InstanceIds: The instance id list of created ecs instance
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIps: ros.IResolvable;
    /**
     * Attribute PublicIps: Public IP address list of created ecs instance.
     */
    readonly attrPublicIps: ros.IResolvable;
    /**
     * Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    readonly attrRelatedOrderIds: ros.IResolvable;
    /**
     * Attribute ZoneIds: Zone id of created instance.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::PrepayInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayInstanceProps, enableResourcePropertyConstraint?: boolean);
}
