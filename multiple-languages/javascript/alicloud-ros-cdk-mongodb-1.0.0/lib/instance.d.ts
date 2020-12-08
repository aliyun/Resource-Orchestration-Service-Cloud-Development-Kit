import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './mongodb.generated';
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
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
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
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    readonly engineVersion?: string;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
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
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
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
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: any;
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: any;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    readonly attrReplicaSetName: any;
    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
