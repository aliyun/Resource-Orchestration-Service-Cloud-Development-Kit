import * as ros from '@alicloud/ros-cdk-core';
import { RosPrepayInstance } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrepayInstance as PrepayInstanceProperty };

/**
 * Properties for defining a `PrepayInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-prepayinstance
 */
export interface PrepayInstanceProps {

    /**
     * Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. 
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default is False
     */
    readonly autoPay?: boolean | ros.IResolvable;

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
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * Property connections: Connection address
     */
    readonly connections?: RosPrepayInstance.ConnectionsProperty | ros.IResolvable;

    /**
     * Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property engineVersion: Engine version. Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
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
    readonly instanceMaintainTime?: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property nodeType: The type of node. Valid value:
     * - **STAND_ALONE**
     * - **MASTER_SLAVE**
     * - **double**
     * - **single**
     */
    readonly nodeType?: string | ros.IResolvable;

    /**
     * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    readonly productType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property secondaryZoneId: The secondary zone ID of the instance.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     */
    readonly shardCount?: number | ros.IResolvable;

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
    readonly tags?: RosPrepayInstance.TagsProperty[];

    /**
     * Property tairConfig: Tair config. This parameter is available only if the InstanceClass parameter is start with tair.
     */
    readonly tairConfig?: RosPrepayInstance.TairConfigProperty | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::REDIS::PrepayInstance`, which is used to create a subscription ApsaraDB for Redis instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrepayInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-prepayinstance
 */
export class PrepayInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrepayInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrepayInstance = new RosPrepayInstance(this, id,  {
            connections: props.connections,
            resourceGroupId: props.resourceGroupId,
            shardCount: props.shardCount,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            sslEnabled: props.sslEnabled,
            tairConfig: props.tairConfig,
            tags: props.tags,
            backupPolicy: props.backupPolicy,
            password: props.password,
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            evictionPolicy: props.evictionPolicy,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            productType: props.productType,
            instanceMaintainTime: props.instanceMaintainTime,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            secondaryZoneId: props.secondaryZoneId,
            autoRenewDuration: props.autoRenewDuration,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            nodeType: props.nodeType,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstance;
        this.attrArchitectureType = rosPrepayInstance.attrArchitectureType;
        this.attrBandwidth = rosPrepayInstance.attrBandwidth;
        this.attrCapacity = rosPrepayInstance.attrCapacity;
        this.attrChargeType = rosPrepayInstance.attrChargeType;
        this.attrClassicInnerConnectionPort = rosPrepayInstance.attrClassicInnerConnectionPort;
        this.attrClassicInnerConnectionString = rosPrepayInstance.attrClassicInnerConnectionString;
        this.attrConnectionDomain = rosPrepayInstance.attrConnectionDomain;
        this.attrConnections = rosPrepayInstance.attrConnections;
        this.attrDirectConnectionPort = rosPrepayInstance.attrDirectConnectionPort;
        this.attrDirectConnectionString = rosPrepayInstance.attrDirectConnectionString;
        this.attrEngineVersion = rosPrepayInstance.attrEngineVersion;
        this.attrHasRenewChangeOrder = rosPrepayInstance.attrHasRenewChangeOrder;
        this.attrInstanceClass = rosPrepayInstance.attrInstanceClass;
        this.attrInstanceId = rosPrepayInstance.attrInstanceId;
        this.attrInstanceName = rosPrepayInstance.attrInstanceName;
        this.attrInstanceType = rosPrepayInstance.attrInstanceType;
        this.attrNetworkType = rosPrepayInstance.attrNetworkType;
        this.attrNodeType = rosPrepayInstance.attrNodeType;
        this.attrOrderId = rosPrepayInstance.attrOrderId;
        this.attrPackageType = rosPrepayInstance.attrPackageType;
        this.attrPort = rosPrepayInstance.attrPort;
        this.attrPrivateIp = rosPrepayInstance.attrPrivateIp;
        this.attrPublicConnectionPort = rosPrepayInstance.attrPublicConnectionPort;
        this.attrPublicConnectionString = rosPrepayInstance.attrPublicConnectionString;
        this.attrQps = rosPrepayInstance.attrQps;
        this.attrResourceGroupId = rosPrepayInstance.attrResourceGroupId;
        this.attrVSwitchId = rosPrepayInstance.attrVSwitchId;
        this.attrVpcId = rosPrepayInstance.attrVpcId;
        this.attrVpcPrivateConnectionPort = rosPrepayInstance.attrVpcPrivateConnectionPort;
        this.attrVpcPrivateConnectionString = rosPrepayInstance.attrVpcPrivateConnectionString;
        this.attrZoneId = rosPrepayInstance.attrZoneId;
    }
}
