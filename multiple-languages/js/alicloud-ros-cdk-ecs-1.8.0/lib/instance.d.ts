import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ecs.generated';
export { RosInstance as InstanceProperty };
import { SecurityGroup } from './securitygroup';
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
 */
export interface InstanceProps {
    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
     * - **host**: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
     * Default value: **default**.
     */
    readonly affinity?: string | ros.IResolvable;
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
     * Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * - **Standard**: the standard mode.
     * - **Unlimited**: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;
    /**
     * Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. If the deployment set specified by **DeploymentSetId** uses the high availability group strategy (AvailabilityGroup), you can use **DeploymentSetGroupNo** to specify a deployment set group in the deployment set. Valid values: 1 to 7.
     */
    readonly deploymentSetGroupNo?: number | ros.IResolvable;
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
     * Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. Valid values:
     * - **enabled**
     * - **disabled**
     * Default value: **enabled**.
     */
    readonly httpEndpoint?: string | ros.IResolvable;
    /**
     * Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
     * - **optional**: does not forcefully use the security-enhanced mode (IMDSv2).
     * - **required**: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
     * Default value: **optional**.
     */
    readonly httpTokens?: string | ros.IResolvable;
    /**
     * Property imageFamily: The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
     * - **ImageFamily** must be empty if **ImageId** is specified.
     * - **ImageFamily** can be specified if **ImageId** is not specified.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;
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
     * Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property privatePoolOptions: The options of the private pool.
     */
    readonly privatePoolOptions?: RosInstance.PrivatePoolOptionsProperty | ros.IResolvable;
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
     * Property storageSetId: The storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * Property storageSetPartitionNumber: The maximum number of partitions in the storage set. The value must be greater than or equal to 2.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
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
     * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
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
     * Property tenancy: Specifies whether to create the instance on a dedicated host. Valid values:
     * - **default**: creates the instance on a non-dedicated host.
     * - **host**: creates the instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the instance.
     * Default value: **default**.
     */
    readonly tenancy?: string | ros.IResolvable;
    /**
     * Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
     */
    readonly useAdditionalService?: boolean | ros.IResolvable;
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
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute HostName: Host name of created instance.
     */
    readonly attrHostName: ros.IResolvable | string;
    /**
     * Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    readonly attrInnerIp: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The instance ID of created ecs instance
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    readonly attrPrimaryNetworkInterfaceId: ros.IResolvable | string;
    /**
     * Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIp: ros.IResolvable | string;
    /**
     * Attribute PublicIp: Public IP address of created ecs instance.
     */
    readonly attrPublicIp: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone ID of created instance.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Instance`, which is used to create an Elastic Compute Service (ECS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HostName: Host name of created instance.
     */
    readonly attrHostName: ros.IResolvable | string;
    /**
     * Attribute InnerIp: Inner IP address of the specified instance. Only for classical instance.
     */
    readonly attrInnerIp: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The instance ID of created ecs instance
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    readonly attrPrimaryNetworkInterfaceId: ros.IResolvable | string;
    /**
     * Attribute PrivateIp: Private IP address of created ecs instance. Only for VPC instance.
     */
    readonly attrPrivateIp: ros.IResolvable | string;
    /**
     * Attribute PublicIp: Public IP address of created ecs instance.
     */
    readonly attrPublicIp: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone ID of created instance.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     * @param zoneId Required when creating a VSwitch.
     * @param vpcCidrBlock Optional when creating a VPC. Default value is 192.168.0.0/16.
     * @param vSwitchCidrBlock Optional when creating a VSwitch. Default value is 192.168.0.0/24.
     * @param whetherCreateSecurityGroup Whether to create a security group. Default value is true.
     */
    autoCreateDependencies(zoneId?: string | ros.IResolvable | undefined, vpcCidrBlock?: string | undefined, vSwitchCidrBlock?: string | undefined, whetherCreateSecurityGroup?: Boolean): any[];
    /**
     * Add one or more security groups to an ECS instance.
     * @param securityGroups Security groups or security group IDs.
     */
    addSecurityGroups(...securityGroups: (SecurityGroup | string)[]): void;
    /**
     * Add one or more commands to the userdata of an ECS instance.
     * @param commands Commands to be added.
     */
    addUserDataCommands(...commands: (string | ros.IResolvable)[]): void;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
