import * as ros from '@alicloud/ros-cdk-core';
import { RosShardingInstance } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosShardingInstance as ShardingInstanceProperty };

/**
 * Properties for defining a `ShardingInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export interface ShardingInstanceProps {

    /**
     * Property configServer: The information of Configserver nodes.
     */
    readonly configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property mongos: The information of Mongos nodes.
     */
    readonly mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property replicaSet: The information of shard nodes.
     */
    readonly replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property accountPassword: The password of the root account. The password must meet the following
     * requirements:
     * - It must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * - Special characters include !@#$%^&\*()_+-=
     * - It must be 8 to 32 characters in length.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal for the instance. Valid values:
     * - true: Auto-renewal is enabled.
     * - false: Auto-renewal is disabled. You must manually renew the instance. This is
     * the default value.
     * > This parameter is optional and takes effect only when you set the ChargeType
     * parameter to PrePaid.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: The name of the instance. The name must meet the following requirements:
     * - It must start with a Chinese character or a letter.
     * - It can contain digits, Chinese characters, letters, underscores (_), periods
     * (.), and hyphens (-).
     * - It must be 2 to 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property engineVersion: The database version. Valid values:
     * - 8.0
     * - 7.0
     * - 6.0
     * - 5.0
     * - 4.4
     * - 4.2
     * - 4.0
     * > * When you clone an instance by calling this operation, the value of this
     * parameter must be the same as that of the source instance.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;

    /**
     * Property period: The subscription duration of the instance. Unit: month.
     * Valid values: 1 to 9 (integer), 12, 24, 36, and 60.
     * > This parameter is required and takes effect only when you set the ChargeType
     * parameter to PrePaid.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;

    /**
     * Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * Property srcDbInstanceId: The source instance ID.
     * > This parameter is required only when you clone an instance by calling this
     * operation. You must also specify the RestoreTime parameter.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;

    /**
     * Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;

    /**
     * Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosShardingInstance.TagsProperty[];

    /**
     * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `ShardingInstance`.
 */
export interface IShardingInstance extends ros.IResource {
    readonly props: ShardingInstanceProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable | string;

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::ShardingInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosShardingInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export class ShardingInstance extends ros.Resource implements IShardingInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ShardingInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable | string;

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ShardingInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosShardingInstance = new RosShardingInstance(this, id,  {
            tdeStatus: props.tdeStatus,
            engineVersion: props.engineVersion === undefined || props.engineVersion === null ? '7.0' : props.engineVersion,
            storageType: props.storageType,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            hiddenZoneId: props.hiddenZoneId,
            vSwitchId: props.vSwitchId,
            autoRenew: props.autoRenew,
            securityIpArray: props.securityIpArray,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            mongos: props.mongos,
            storageEngine: props.storageEngine === undefined || props.storageEngine === null ? 'WiredTiger' : props.storageEngine,
            secondaryZoneId: props.secondaryZoneId,
            accountPassword: props.accountPassword,
            restoreTime: props.restoreTime,
            vpcId: props.vpcId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            protocolType: props.protocolType,
            configServer: props.configServer,
            srcDbInstanceId: props.srcDbInstanceId,
            replicaSet: props.replicaSet,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosShardingInstance;
        this.attrArn = rosShardingInstance.attrArn;
        this.attrDbInstanceId = rosShardingInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosShardingInstance.attrDbInstanceStatus;
        this.attrOrderId = rosShardingInstance.attrOrderId;
    }
}
