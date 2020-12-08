import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceGroupClone } from './ecs.generated';
export { RosInstanceGroupClone as InstanceGroupCloneProperty };
/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroupClone`
 */
export interface InstanceGroupCloneProps {
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
    readonly tags?: {
        [key: string]: any;
    }[];
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs. For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::InstanceGroupClone`
 */
export declare class InstanceGroupClone extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
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
    /**
     * Create a new `ALIYUN::ECS::InstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceGroupCloneProps, enableResourcePropertyConstraint?: boolean);
}
