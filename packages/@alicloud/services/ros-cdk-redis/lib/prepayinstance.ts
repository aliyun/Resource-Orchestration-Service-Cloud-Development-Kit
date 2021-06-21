import * as ros from '@alicloud/ros-cdk-core';
import { RosPrepayInstance } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrepayInstance as PrepayInstanceProperty };

/**
 * Properties for defining a `ALIYUN::REDIS::PrepayInstance`
 */
export interface PrepayInstanceProps {

    /**
     * Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number | ros.IResolvable;

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
     * Property instanceConnection: Instance connection message.
     */
    readonly instanceConnection?: RosPrepayInstance.InstanceConnectionProperty | ros.IResolvable;

    /**
     * Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
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
    readonly tags?: RosPrepayInstance.TagsProperty[];

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
 * A ROS resource type:  `ALIYUN::REDIS::PrepayInstance`
 */
export class PrepayInstance extends ros.Resource {

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
     * Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * Attribute Connections: The maximum number of connections supported by the instance.
     */
    public readonly attrConnections: ros.IResolvable;

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
     * Attribute ZoneId: The ID of the zone.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrepayInstance = new RosPrepayInstance(this, id,  {
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            evictionPolicy: props.evictionPolicy,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            instanceMaintainTime: props.instanceMaintainTime,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            instanceConnection: props.instanceConnection,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            sslEnabled: props.sslEnabled,
            capacity: props.capacity,
            tags: props.tags,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstance;
        this.attrArchitectureType = rosPrepayInstance.attrArchitectureType;
        this.attrBandwidth = rosPrepayInstance.attrBandwidth;
        this.attrCapacity = rosPrepayInstance.attrCapacity;
        this.attrChargeType = rosPrepayInstance.attrChargeType;
        this.attrConnectionDomain = rosPrepayInstance.attrConnectionDomain;
        this.attrConnections = rosPrepayInstance.attrConnections;
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
        this.attrQps = rosPrepayInstance.attrQps;
        this.attrResourceGroupId = rosPrepayInstance.attrResourceGroupId;
        this.attrVSwitchId = rosPrepayInstance.attrVSwitchId;
        this.attrVpcId = rosPrepayInstance.attrVpcId;
        this.attrZoneId = rosPrepayInstance.attrZoneId;
    }
}
