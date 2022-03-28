import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceGroup } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceGroup as InstanceGroupProperty };

/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroup`
 */
export interface InstanceGroupProps {

    /**
     * Property imageId: Image ID to create ecs instance.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number | ros.IResolvable;

    /**
     * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string | ros.IResolvable;

    /**
     * Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
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
     * Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    readonly diskMappings?: Array<RosInstanceGroup.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    readonly eniMappings?: Array<RosInstanceGroup.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components. 
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
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. 
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
     * Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string | ros.IResolvable;

    /**
     * Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.Old instances will not be changed.
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
     * Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;

    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    readonly systemDiskProvisionedIops?: number | ros.IResolvable;

    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstanceGroup.TagsProperty[];

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
 * A ROS resource type:  `ALIYUN::ECS::InstanceGroup`
 */
export class InstanceGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute HostNames: Host names of created instances.
     */
    public readonly attrHostNames: ros.IResolvable;

    /**
     * Attribute InnerIps: Inner IP address list of the specified instances. Only for classical instances.
     */
    public readonly attrInnerIps: ros.IResolvable;

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances. Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public readonly attrIpv6AddressIds: ros.IResolvable;

    /**
     * Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances. Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public readonly attrIpv6Addresses: ros.IResolvable;

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute PrivateIps: Private IP address list of created ecs instances. Only for VPC instance.
     */
    public readonly attrPrivateIps: ros.IResolvable;

    /**
     * Attribute PublicIps: Public IP address list of created ecs instances.
     */
    public readonly attrPublicIps: ros.IResolvable;

    /**
     * Attribute ZoneIds: Zone id of created instances.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::InstanceGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstanceGroup = new RosInstanceGroup(this, id,  {
            dedicatedHostId: props.dedicatedHostId,
            resourceGroupId: props.resourceGroupId,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            systemDiskProvisionedIops: props.systemDiskProvisionedIops,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            tags: props.tags,
            hostName: props.hostName,
            launchTemplateName: props.launchTemplateName,
            vSwitchId: props.vSwitchId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            launchTemplateId: props.launchTemplateId,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'PayByTraffic' : props.internetChargeType,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut === undefined || props.internetMaxBandwidthOut === null ? 1 : props.internetMaxBandwidthOut,
            vpcId: props.vpcId,
            launchTemplateVersion: props.launchTemplateVersion,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            autoReleaseTime: props.autoReleaseTime,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            diskMappings: props.diskMappings,
            userData: props.userData,
            systemDiskSize: props.systemDiskSize,
            autoRenew: props.autoRenew === undefined || props.autoRenew === null ? 'False' : props.autoRenew,
            ipv6Addresses: props.ipv6Addresses,
            maxAmount: props.maxAmount,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            networkType: props.networkType,
            ipv6AddressCount: props.ipv6AddressCount,
            spotPriceLimit: props.spotPriceLimit,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp === undefined || props.allocatePublicIp === null ? true : props.allocatePublicIp,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized === undefined || props.ioOptimized === null ? 'optimized' : props.ioOptimized,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            systemDiskCategory: props.systemDiskCategory === undefined || props.systemDiskCategory === null ? 'cloud_efficiency' : props.systemDiskCategory,
            eniMappings: props.eniMappings,
            systemDiskBurstingEnabled: props.systemDiskBurstingEnabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceGroup;
        this.attrHostNames = rosInstanceGroup.attrHostNames;
        this.attrInnerIps = rosInstanceGroup.attrInnerIps;
        this.attrInstanceIds = rosInstanceGroup.attrInstanceIds;
        this.attrIpv6AddressIds = rosInstanceGroup.attrIpv6AddressIds;
        this.attrIpv6Addresses = rosInstanceGroup.attrIpv6Addresses;
        this.attrOrderId = rosInstanceGroup.attrOrderId;
        this.attrPrivateIps = rosInstanceGroup.attrPrivateIps;
        this.attrPublicIps = rosInstanceGroup.attrPublicIps;
        this.attrZoneIds = rosInstanceGroup.attrZoneIds;
    }
}
