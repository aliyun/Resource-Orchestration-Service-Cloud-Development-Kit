import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };
import * as ram from "@alicloud/ros-cdk-ram";
import * as perms from "./perms.cdk"
import {IResolvable} from "@alicloud/ros-cdk-core";


/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export interface InstanceProps {

    /**
     * Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property backupId: Specific backup set Id.
     */
    readonly backupId?: string | ros.IResolvable;

    /**
     * Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string | ros.IResolvable;

    /**
     * Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;

    /**
     * Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property privateConnections: Connection configs of private connection.
     */
    readonly privateConnections?: RosInstance.PrivateConnectionsProperty | ros.IResolvable;

    /**
     * Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number | ros.IResolvable;

    /**
     * Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number | ros.IResolvable;

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
     * Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group. 
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * Property srcDbInstanceId: Create an instance of the backup set based on an instance.
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
    readonly tags?: RosInstance.TagsProperty[];

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
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

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
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: ros.IResolvable | string;

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

    /**
     * Attribute ReplicaSetName: Name of replica set
     */
    readonly attrReplicaSetName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ConnectionURI: Connection uri.
     */
    public readonly attrConnectionUri: ros.IResolvable | string;

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
     * Attribute ReplicaSetName: Name of replica set
     */
    public readonly attrReplicaSetName: ros.IResolvable | string;

    private grant(
        principle: ram.IPrincipal,
        actions: string[],
        resourceArn: string | IResolvable, ...otherResourceArns: (string | IResolvable)[]): ram.ManagedPolicy {
        const policyDocument: ram.RosManagedPolicy.PolicyDocumentProperty = {
            statement: [
                {
                    action: actions,
                    effect: 'Allow',
                    resource: [resourceArn, ...otherResourceArns],
                },
            ],
            version: '1',
        };
        return principle.addToPolicy(policyDocument);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list resources for this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantList(identity: ram.IPrincipal) {
        return this.grant(identity, perms.MONGODB_INSTANCE_LIST_ACTIONS,
            this.attrArn);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to list and get resources for this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantRead(identity: ram.IPrincipal) {
        return this.grant(identity, perms.MONGODB_INSTANCE_LIST_ACTIONS.concat(perms.MONGODB_INSTANCE_GET_ACTIONS),
            this.attrArn);
    }

    /**
     * Grant an RAM principal (Role/Group/User) permission to create, update and delete resources for this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantReadWrite(identity: ram.IPrincipal) {
        return this.grant(identity, perms.MONGODB_INSTANCE_LIST_ACTIONS.concat(
            perms.MONGODB_INSTANCE_GET_ACTIONS,
            perms.MONGODB_INSTANCE_CREATE_ACTIONS,
            perms.MONGODB_INSTANCE_UPDATE_ACTIONS,
            perms.MONGODB_INSTANCE_DELETE_ACTIONS,
            ),
            this.attrArn);
    }

    /**
     * Grant an RAM principal (Role/Group/User) full control over this MongoDB instance.
     *
     * @param identity The principal
     */
    public grantFullAccess(identity: ram.IPrincipal) {
        return this.grant(identity, ['dds:*'],
            this.attrArn);
    }


    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            businessInfo: props.businessInfo,
            resourceGroupId: props.resourceGroupId,
            hiddenZoneId: props.hiddenZoneId,
            autoRenew: props.autoRenew,
            securityIpArray: props.securityIpArray,
            backupId: props.backupId,
            storageEngine: props.storageEngine === undefined || props.storageEngine === null ? 'WiredTiger' : props.storageEngine,
            restoreTime: props.restoreTime,
            privateConnections: props.privateConnections,
            dbInstanceStorage: props.dbInstanceStorage,
            tags: props.tags,
            dbInstanceDescription: props.dbInstanceDescription,
            couponNo: props.couponNo,
            tdeStatus: props.tdeStatus,
            engineVersion: props.engineVersion === undefined || props.engineVersion === null ? '7.0' : props.engineVersion,
            storageType: props.storageType,
            readonlyReplicas: props.readonlyReplicas,
            replicationFactor: props.replicationFactor,
            zoneId: props.zoneId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            vpcPasswordFree: props.vpcPasswordFree,
            secondaryZoneId: props.secondaryZoneId,
            accountPassword: props.accountPassword,
            vpcId: props.vpcId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            databaseNames: props.databaseNames,
            srcDbInstanceId: props.srcDbInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrArn = rosInstance.attrArn;
        this.attrConnectionUri = rosInstance.attrConnectionUri;
        this.attrDbInstanceId = rosInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosInstance.attrDbInstanceStatus;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrReplicaSetName = rosInstance.attrReplicaSetName;
    }
}
