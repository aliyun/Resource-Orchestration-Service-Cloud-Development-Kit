import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::REDIS::Instance`
 */
export interface InstanceProps {

    /**
     * Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. 
     *  When the instance is about to expire, the instance is automatically renewed 
     * based on the number of months specified by this parameter. 
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;

    /**
     * Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the ApsaraDB for Redis instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property connections: Connection address
     */
    readonly connections?: RosInstance.ConnectionsProperty | ros.IResolvable;

    /**
     * Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string | ros.IResolvable;

    /**
     * Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string | ros.IResolvable;

    /**
     * Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::REDIS::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ArchitectureType: The architecture.
     */
    public readonly attrArchitectureType: ros.IResolvable;

    /**
     * Attribute Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute Capacity: The storage capacity of the instance. Unit: MB.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * Attribute ChargeType: The billing method of the instance.
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance
     */
    public readonly attrClassicInnerConnectionPort: ros.IResolvable;

    /**
     * Attribute ClassicInnerConnectionString: The classic inner connection string of the instance
     */
    public readonly attrClassicInnerConnectionString: ros.IResolvable;

    /**
     * Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * Attribute Connections: The maximum number of connections supported by the instance.
     */
    public readonly attrConnections: ros.IResolvable;

    /**
     * Attribute DirectConnectionPort: The direct connection port of the instance
     */
    public readonly attrDirectConnectionPort: ros.IResolvable;

    /**
     * Attribute DirectConnectionString: The direct connection string of the instance
     */
    public readonly attrDirectConnectionString: ros.IResolvable;

    /**
     * Attribute EngineVersion: The engine version of the instance.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
     */
    public readonly attrHasRenewChangeOrder: ros.IResolvable;

    /**
     * Attribute InstanceClass: Redis instance type.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance id of created redis instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: Name of created redis instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceType: The engine type of the instance.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute NetworkType: The network type.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * Attribute NodeType: The type of node.
     */
    public readonly attrNodeType: ros.IResolvable;

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute PackageType: The plan type.
     */
    public readonly attrPackageType: ros.IResolvable;

    /**
     * Attribute Port: Port of created instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PrivateIp: The internal IP address of the instance.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * Attribute PublicConnectionPort: The public connection port of the instance
     */
    public readonly attrPublicConnectionPort: ros.IResolvable;

    /**
     * Attribute PublicConnectionString: The public connection string of the instance
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * Attribute QPS: The queries per second (QPS) supported by the instance.
     */
    public readonly attrQps: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance
     */
    public readonly attrVpcPrivateConnectionPort: ros.IResolvable;

    /**
     * Attribute VpcPrivateConnectionString: The vpc private connection string of the instance
     */
    public readonly attrVpcPrivateConnectionString: ros.IResolvable;

    /**
     * Attribute ZoneId: The ID of the zone.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::REDIS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            connections: props.connections,
            engineVersion: props.engineVersion,
            evictionPolicy: props.evictionPolicy,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            instanceMaintainTime: props.instanceMaintainTime,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            autoRenewDuration: props.autoRenewDuration,
            instanceName: props.instanceName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            vpcId: props.vpcId,
            sslEnabled: props.sslEnabled,
            capacity: props.capacity,
            chargeType: props.chargeType,
            tags: props.tags,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrArchitectureType = rosInstance.attrArchitectureType;
        this.attrBandwidth = rosInstance.attrBandwidth;
        this.attrCapacity = rosInstance.attrCapacity;
        this.attrChargeType = rosInstance.attrChargeType;
        this.attrClassicInnerConnectionPort = rosInstance.attrClassicInnerConnectionPort;
        this.attrClassicInnerConnectionString = rosInstance.attrClassicInnerConnectionString;
        this.attrConnectionDomain = rosInstance.attrConnectionDomain;
        this.attrConnections = rosInstance.attrConnections;
        this.attrDirectConnectionPort = rosInstance.attrDirectConnectionPort;
        this.attrDirectConnectionString = rosInstance.attrDirectConnectionString;
        this.attrEngineVersion = rosInstance.attrEngineVersion;
        this.attrHasRenewChangeOrder = rosInstance.attrHasRenewChangeOrder;
        this.attrInstanceClass = rosInstance.attrInstanceClass;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrNetworkType = rosInstance.attrNetworkType;
        this.attrNodeType = rosInstance.attrNodeType;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrPackageType = rosInstance.attrPackageType;
        this.attrPort = rosInstance.attrPort;
        this.attrPrivateIp = rosInstance.attrPrivateIp;
        this.attrPublicConnectionPort = rosInstance.attrPublicConnectionPort;
        this.attrPublicConnectionString = rosInstance.attrPublicConnectionString;
        this.attrQps = rosInstance.attrQps;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrVpcPrivateConnectionPort = rosInstance.attrVpcPrivateConnectionPort;
        this.attrVpcPrivateConnectionString = rosInstance.attrVpcPrivateConnectionString;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
