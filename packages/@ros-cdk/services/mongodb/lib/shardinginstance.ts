import * as ros from '@ros-cdk/core';
import { RosShardingInstance } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosShardingInstance as ShardingInstanceProperty };

/**
 * Properties for defining a `ALIYUN::MONGODB::ShardingInstance`
 */
export interface ShardingInstanceProps {

    /**
     * @Property configServer:
     */
    readonly configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mongos:
     */
    readonly mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property replicaSet:
     */
    readonly replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property engineVersion: Database instance version.Support 3.2, 3.4, 4.0
     */
    readonly engineVersion?: string;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;

    /**
     * @Property period: The subscription period of the instance.Unit: months.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB
     */
    readonly storageEngine?: string;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::MONGODB::ShardingInstance`
 */
export class ShardingInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: any;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ShardingInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosShardingInstance = new RosShardingInstance(this, id,  {
            engineVersion: props.engineVersion ? props.engineVersion : '3.4',
            zoneId: props.zoneId,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            securityIpArray: props.securityIpArray,
            mongos: props.mongos,
            storageEngine: props.storageEngine ? props.storageEngine : 'WiredTiger',
            restoreTime: props.restoreTime,
            accountPassword: props.accountPassword,
            vpcId: props.vpcId,
            protocolType: props.protocolType,
            chargeType: props.chargeType ? props.chargeType : 'PostPaid',
            networkType: props.networkType,
            configServer: props.configServer,
            srcDbInstanceId: props.srcDbInstanceId,
            replicaSet: props.replicaSet,
            dbInstanceDescription: props.dbInstanceDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosShardingInstance;
        this.attrDbInstanceId = rosShardingInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosShardingInstance.attrDbInstanceStatus;
        this.attrOrderId = rosShardingInstance.attrOrderId;
    }
}
