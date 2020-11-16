import * as ros from '@ros-cdk/core';
import { RosInstance } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::MONGODB::Instance`
 */
export interface InstanceProps {

    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,1000], increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string;

    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string;

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
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;

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
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

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
 * A ROS resource type:  `ALIYUN::MONGODB::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    public readonly attrConnectionUri: any;

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
     * @Attribute ReplicaSetName: Name of replica set
     */
    public readonly attrReplicaSetName: any;

    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            couponNo: props.couponNo,
            businessInfo: props.businessInfo,
            engineVersion: props.engineVersion ? props.engineVersion : '3.4',
            readonlyReplicas: props.readonlyReplicas,
            resourceGroupId: props.resourceGroupId,
            replicationFactor: props.replicationFactor,
            zoneId: props.zoneId,
            dbInstanceClass: props.dbInstanceClass,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            securityIpArray: props.securityIpArray,
            backupId: props.backupId,
            vpcPasswordFree: props.vpcPasswordFree,
            storageEngine: props.storageEngine ? props.storageEngine : 'WiredTiger',
            accountPassword: props.accountPassword,
            restoreTime: props.restoreTime,
            vpcId: props.vpcId,
            chargeType: props.chargeType ? props.chargeType : 'PostPaid',
            networkType: props.networkType,
            dbInstanceStorage: props.dbInstanceStorage,
            databaseNames: props.databaseNames,
            srcDbInstanceId: props.srcDbInstanceId,
            dbInstanceDescription: props.dbInstanceDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrConnectionUri = rosInstance.attrConnectionUri;
        this.attrDbInstanceId = rosInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosInstance.attrDbInstanceStatus;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrReplicaSetName = rosInstance.attrReplicaSetName;
    }
}
