import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceClone } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceClone as InstanceCloneProperty };

/**
 * Properties for defining a `ALIYUN::ECS::InstanceClone`
 */
export interface InstanceCloneProps {

    /**
     * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

    /**
     * Property backendServerWeight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
     */
    readonly backendServerWeight?: number | ros.IResolvable;

    /**
     * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    readonly diskMappings?: Array<RosInstanceClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

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
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;

    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property loadBalancerIdToAttach: After the instance is created. Automatic attach it to the load balancer.
     */
    readonly loadBalancerIdToAttach?: string | ros.IResolvable;

    /**
     * Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

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
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;

    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstanceClone.TagsProperty[];

    /**
     * Property zoneId: The ID of the zone to which the instance belongs. For more information, 
     * call the DescribeZones operation to query the most recent zone list. 
     * Default value is empty, which means random selection.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::InstanceClone`
 */
export class InstanceClone extends ros.Resource {

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
     * Attribute InstanceId: The instance id of created ecs instance
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface id of created instance.
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
     * Attribute ZoneId: Zone id of created instance.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstanceClone = new RosInstanceClone(this, id,  {
            backendServerWeight: props.backendServerWeight === undefined || props.backendServerWeight === null ? 100 : props.backendServerWeight,
            keyPairName: props.keyPairName,
            description: props.description,
            diskMappings: props.diskMappings,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            securityGroupId: props.securityGroupId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            deletionProtection: props.deletionProtection,
            sourceInstanceId: props.sourceInstanceId,
            loadBalancerIdToAttach: props.loadBalancerIdToAttach,
            instanceName: props.instanceName,
            ramRoleName: props.ramRoleName,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn === undefined || props.internetMaxBandwidthIn === null ? 200 : props.internetMaxBandwidthIn,
            imageId: props.imageId,
            spotPriceLimit: props.spotPriceLimit,
            tags: props.tags,
            spotStrategy: props.spotStrategy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceClone;
        this.attrHostName = rosInstanceClone.attrHostName;
        this.attrInnerIp = rosInstanceClone.attrInnerIp;
        this.attrInstanceId = rosInstanceClone.attrInstanceId;
        this.attrPrimaryNetworkInterfaceId = rosInstanceClone.attrPrimaryNetworkInterfaceId;
        this.attrPrivateIp = rosInstanceClone.attrPrivateIp;
        this.attrPublicIp = rosInstanceClone.attrPublicIp;
        this.attrZoneId = rosInstanceClone.attrZoneId;
    }
}
