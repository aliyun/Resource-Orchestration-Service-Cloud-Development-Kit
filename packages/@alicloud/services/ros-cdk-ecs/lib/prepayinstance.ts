import * as ros from '@alicloud/ros-cdk-core';
import { RosPrepayInstance } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrepayInstance as PrepayInstanceProperty };

/**
 * Properties for defining a `ALIYUN::ECS::PrepayInstance`
 */
export interface PrepayInstanceProps {

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
    readonly tags?: { [key: string]: any }[];

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
 * A ROS resource type:  `ALIYUN::ECS::PrepayInstance`
 */
export class PrepayInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
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

    /**
     * Create a new `ALIYUN::ECS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrepayInstance = new RosPrepayInstance(this, id,  {
            periodType: props.periodType,
            dedicatedHostId: props.dedicatedHostId,
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            diskMappings: props.diskMappings,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            autoRenew: props.autoRenew ? props.autoRenew : false,
            maxAmount: props.maxAmount,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            minAmount: props.minAmount ? props.minAmount : 1,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp ? props.allocatePublicIp : true,
            tags: ros.tagFactory(props.tags),
            hostName: props.hostName,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized ? props.ioOptimized : true,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByBandwidth',
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut ? props.internetMaxBandwidthOut : 1,
            vpcId: props.vpcId,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstance;
        this.attrHostNames = rosPrepayInstance.attrHostNames;
        this.attrInnerIps = rosPrepayInstance.attrInnerIps;
        this.attrInstanceIds = rosPrepayInstance.attrInstanceIds;
        this.attrOrderId = rosPrepayInstance.attrOrderId;
        this.attrPrivateIps = rosPrepayInstance.attrPrivateIps;
        this.attrPublicIps = rosPrepayInstance.attrPublicIps;
        this.attrRelatedOrderIds = rosPrepayInstance.attrRelatedOrderIds;
        this.attrZoneIds = rosPrepayInstance.attrZoneIds;
    }
}
