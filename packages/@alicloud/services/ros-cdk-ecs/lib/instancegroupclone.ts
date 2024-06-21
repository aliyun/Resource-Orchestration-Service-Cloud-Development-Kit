import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceGroupClone } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceGroupClone as InstanceGroupCloneProperty };

/**
 * Properties for defining a `InstanceGroupClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroupclone
 */
export interface InstanceGroupCloneProps {

    /**
     * Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    readonly maxAmount: number | ros.IResolvable;

    /**
     * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

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
     * Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    readonly backendServerWeight?: number | ros.IResolvable;

    /**
     * Property cpuOptions: Cpu options.
     */
    readonly cpuOptions?: RosInstanceGroupClone.CpuOptionsProperty | ros.IResolvable;

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
    readonly diskMappings?: Array<RosInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property eniMappings: NetworkInterface to attach to instance. Max support 2 ENIs.
     */
    readonly eniMappings?: Array<RosInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hostNames: The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
     * - The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.
     * - You cannot specify both HostName and HostNames.N.
     * - The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
     * - For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).
     * - For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    readonly hostNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property imageOptions: Image options.
     */
    readonly imageOptions?: RosInstanceGroupClone.ImageOptionsProperty | ros.IResolvable;

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
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [0,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;

    /**
     * Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

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
     * Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    readonly loadBalancerIdToAttach?: string | ros.IResolvable;

    /**
     * Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. Take note of the following items:
     * - The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
     * - The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.
     * - If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber
     */
    readonly networkInterfaceQueueNumber?: number | ros.IResolvable;

    /**
     * Property networkOptions: Network options.
     */
    readonly networkOptions?: RosInstanceGroupClone.NetworkOptionsProperty | ros.IResolvable;

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
     * Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityOptions: Security options.
     */
    readonly securityOptions?: RosInstanceGroupClone.SecurityOptionsProperty | ros.IResolvable;

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
     * Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
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
     * Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. Valid values:
     * - ase-256
     * - sm4-128
     * Default value: ase-256.
     */
    readonly systemDiskEncryptAlgorithm?: string | ros.IResolvable;

    /**
     * Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - true: encrypts the system disk.
     * - false: does not encrypt the system disk.
     * Default value: false.
     */
    readonly systemDiskEncrypted?: string | ros.IResolvable;

    /**
     * Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    readonly systemDiskKmsKeyId?: string | ros.IResolvable;

    /**
     * Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    readonly systemDiskProvisionedIops?: number | ros.IResolvable;

    /**
     * Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    readonly systemDiskStorageClusterId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstanceGroupClone.TagsProperty[];

    /**
     * Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the **HostName** parameter and to the instance name specified by the **InstanceName** parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:
     * - **true**: appends incremental suffixes to the hostname and the instance name.
     * - **false**: does not append incremental suffixes to the hostname or the instance name.
     * Default value: **false**.
     * When the **HostName** or **InstanceName** value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the **UniqueSuffix** parameter does not take effect. The names are sorted in the specified sequence.
     */
    readonly uniqueSuffix?: boolean | ros.IResolvable;

    /**
     * Property updatePolicy: Specify the policy at update. 
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    readonly updatePolicy?: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::InstanceGroupClone`, which is used to create clones of an Elastic Compute Service (ECS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceGroupClone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroupclone
 */
export class InstanceGroupClone extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceGroupCloneProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceGroupCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstanceGroupClone = new RosInstanceGroupClone(this, id,  {
            resourceGroupId: props.resourceGroupId,
            systemDiskDescription: props.systemDiskDescription,
            systemDiskProvisionedIops: props.systemDiskProvisionedIops,
            sourceInstanceId: props.sourceInstanceId,
            systemDiskEncryptAlgorithm: props.systemDiskEncryptAlgorithm,
            ramRoleName: props.ramRoleName,
            imageId: props.imageId,
            imageOptions: props.imageOptions,
            systemDiskDiskName: props.systemDiskDiskName,
            tags: props.tags,
            systemDiskStorageClusterId: props.systemDiskStorageClusterId,
            backendServerWeight: props.backendServerWeight === undefined || props.backendServerWeight === null ? 100 : props.backendServerWeight,
            launchTemplateName: props.launchTemplateName,
            updatePolicy: props.updatePolicy === undefined || props.updatePolicy === null ? 'ForNewInstances' : props.updatePolicy,
            systemDiskKmsKeyId: props.systemDiskKmsKeyId,
            cpuOptions: props.cpuOptions,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            launchTemplateId: props.launchTemplateId,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            uniqueSuffix: props.uniqueSuffix === undefined || props.uniqueSuffix === null ? false : props.uniqueSuffix,
            securityOptions: props.securityOptions,
            launchTemplateVersion: props.launchTemplateVersion,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
            autoReleaseTime: props.autoReleaseTime,
            description: props.description,
            diskMappings: props.diskMappings,
            autoRenew: props.autoRenew === undefined || props.autoRenew === null ? 'False' : props.autoRenew,
            ipv6Addresses: props.ipv6Addresses,
            systemDiskEncrypted: props.systemDiskEncrypted,
            maxAmount: props.maxAmount,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            ipv6AddressCount: props.ipv6AddressCount,
            spotPriceLimit: props.spotPriceLimit,
            hostNames: props.hostNames,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            loadBalancerIdToAttach: props.loadBalancerIdToAttach,
            systemDiskCategory: props.systemDiskCategory === undefined || props.systemDiskCategory === null ? 'cloud_efficiency' : props.systemDiskCategory,
            eniMappings: props.eniMappings,
            systemDiskBurstingEnabled: props.systemDiskBurstingEnabled,
            networkOptions: props.networkOptions,
            networkInterfaceQueueNumber: props.networkInterfaceQueueNumber,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn === undefined || props.internetMaxBandwidthIn === null ? 200 : props.internetMaxBandwidthIn,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceGroupClone;
        this.attrHostNames = rosInstanceGroupClone.attrHostNames;
        this.attrInnerIps = rosInstanceGroupClone.attrInnerIps;
        this.attrInstanceIds = rosInstanceGroupClone.attrInstanceIds;
        this.attrIpv6AddressIds = rosInstanceGroupClone.attrIpv6AddressIds;
        this.attrIpv6Addresses = rosInstanceGroupClone.attrIpv6Addresses;
        this.attrOrderId = rosInstanceGroupClone.attrOrderId;
        this.attrPrivateIps = rosInstanceGroupClone.attrPrivateIps;
        this.attrPublicIps = rosInstanceGroupClone.attrPublicIps;
        this.attrZoneIds = rosInstanceGroupClone.attrZoneIds;
    }
}
