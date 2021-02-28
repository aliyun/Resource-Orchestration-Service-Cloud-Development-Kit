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
    readonly imageId: string;

    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType: string;

    /**
     * Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number;

    /**
     * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    readonly allocatePublicIp?: boolean | ros.IResolvable;

    /**
     * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string;

    /**
     * Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string;

    /**
     * Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number;

    /**
     * Property dedicatedHostId: which dedicated host will be deployed
     */
    readonly dedicatedHostId?: string;

    /**
     * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string;

    /**
     * Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string;

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
    readonly hostName?: string;

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string;

    /**
     * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
     */
    readonly instanceChargeType?: string;

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
    readonly instanceName?: string;

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic
     */
    readonly internetChargeType?: string;

    /**
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'optimized'.
     */
    readonly ioOptimized?: string;

    /**
     * Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6AddressCount?: number;

    /**
     * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string;

    /**
     * Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string;

    /**
     * Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string;

    /**
     * Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string;

    /**
     * Property networkType: Instance network type. Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
     */
    readonly networkType?: string;

    /**
     * Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * Property passwordInherit: Specifies whether to use the password preset in the image. To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    readonly period?: number;

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string;

    /**
     * Property privateIpAddress: Private IP for the instance created. Only works for VPC instance and cannot duplicated with existing instance.
     */
    readonly privateIpAddress?: string;

    /**
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * Property securityEnhancementStrategy:
     */
    readonly securityEnhancementStrategy?: string;

    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string;

    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string;

    /**
     * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string;

    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string;

    /**
     * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string;

    /**
     * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string;

    /**
     * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string;

    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string;

    /**
     * Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;

    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;

    /**
     * Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
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
     * Attribute HostNames: Host names of created instance.
     */
    public readonly attrHostNames: any;

    /**
     * Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIps: any;

    /**
     * Attribute InstanceIds: The instance id list of created ecs instance
     */
    public readonly attrInstanceIds: any;

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIps: any;

    /**
     * Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public readonly attrPublicIps: any;

    /**
     * Attribute ZoneIds: Zone id of created instance.
     */
    public readonly attrZoneIds: any;

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
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            tags: ros.tagFactory(props.tags),
            hostName: props.hostName,
            launchTemplateName: props.launchTemplateName,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            launchTemplateId: props.launchTemplateId,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByTraffic',
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut ? props.internetMaxBandwidthOut : 1,
            vpcId: props.vpcId,
            launchTemplateVersion: props.launchTemplateVersion,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            autoReleaseTime: props.autoReleaseTime,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            diskMappings: props.diskMappings,
            userData: props.userData,
            systemDiskSize: props.systemDiskSize,
            autoRenew: props.autoRenew ? props.autoRenew : 'False',
            ipv6Addresses: props.ipv6Addresses,
            maxAmount: props.maxAmount,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            networkType: props.networkType ? props.networkType : 'classic',
            ipv6AddressCount: props.ipv6AddressCount,
            spotPriceLimit: props.spotPriceLimit,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp ? props.allocatePublicIp : true,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized ? props.ioOptimized : 'optimized',
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            eniMappings: props.eniMappings,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceGroup;
        this.attrHostNames = rosInstanceGroup.attrHostNames;
        this.attrInnerIps = rosInstanceGroup.attrInnerIps;
        this.attrInstanceIds = rosInstanceGroup.attrInstanceIds;
        this.attrOrderId = rosInstanceGroup.attrOrderId;
        this.attrPrivateIps = rosInstanceGroup.attrPrivateIps;
        this.attrPublicIps = rosInstanceGroup.attrPublicIps;
        this.attrZoneIds = rosInstanceGroup.attrZoneIds;
    }
}
