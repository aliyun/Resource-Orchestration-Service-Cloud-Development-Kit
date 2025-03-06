import * as ros from '@alicloud/ros-cdk-core';
import { RosDbInstance } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDbInstance as DbInstanceProperty };

/**
 * Properties for defining a `DbInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export interface DbInstanceProps {

    /**
     * Property dbInstanceCategory: The category of the db instance.
     */
    readonly dbInstanceCategory: string | ros.IResolvable;

    /**
     * Property dbInstanceNetworkType: The network type of the db instance.
     */
    readonly dbInstanceNetworkType: string | ros.IResolvable;

    /**
     * Property dbInstanceStorageType: Instance storage type, Valid values:
     * - cloud_essd.
     */
    readonly dbInstanceStorageType: string | ros.IResolvable;

    /**
     * Property dbNodeClass: The class of the db node. Valid values:
     * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
     */
    readonly dbNodeClass: string | ros.IResolvable;

    /**
     * Property dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
     */
    readonly dbNodeStorage: number | ros.IResolvable;

    /**
     * Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * Property backupSetId: Backup set id.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * Property createType: The creation method. Valid values:
     * - CreateDBInstance: Create instance
     * - CloneDBInstance: Clone instance
     * - CreateReadDBInstance: Create a read-only instance
     */
    readonly createType?: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property dbInstanceIpArray: IP address whitelist for the instance group list.
     */
    readonly dbInstanceIpArray?: Array<RosDbInstance.DBInstanceIPArrayProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ecsSecurityGroupRelations: Security group information array.
     */
    readonly ecsSecurityGroupRelations?: Array<RosDbInstance.EcsSecurityGroupRelationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    readonly maintainTime?: string | ros.IResolvable;

    /**
     * Property paymentType: The resource attribute field representing the paid type is desirable:
     * - PayAsYouGo: Postpaid.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property restoreType: Restore type.
     */
    readonly restoreType?: string | ros.IResolvable;

    /**
     * Property sourceDbInstanceId: Source Instance Id.
     */
    readonly sourceDbInstanceId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of db instance.
     */
    readonly tags?: RosDbInstance.TagsProperty[];

    /**
     * Property vpcId: The vpc id of the db instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vpc switch id of the resource.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: ZoneId.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `DbInstance`.
 */
export interface IDbInstance extends ros.IResource {
    readonly props: DbInstanceProps;

    /**
     * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CurrentMinorVersion: The current kernel image version.
     */
    readonly attrCurrentMinorVersion: ros.IResolvable | string;

    /**
     * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    readonly attrDbInstanceIpArray: ros.IResolvable | string;

    /**
     * Attribute DbInstanceCategory: The category of the db instance.
     */
    readonly attrDbInstanceCategory: ros.IResolvable | string;

    /**
     * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    readonly attrDbInstanceCpu: ros.IResolvable | string;

    /**
     * Attribute DbInstanceDescription: According to the practical example or notes.
     */
    readonly attrDbInstanceDescription: ros.IResolvable | string;

    /**
     * Attribute DbInstanceId: The first ID of the resource.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    readonly attrDbInstanceMemory: ros.IResolvable | string;

    /**
     * Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    readonly attrDbInstanceNetworkType: ros.IResolvable | string;

    /**
     * Attribute DbInstanceStorageType: Cloud Disk.
     */
    readonly attrDbInstanceStorageType: ros.IResolvable | string;

    /**
     * Attribute DbInstanceType: The type of the db instance.
     */
    readonly attrDbInstanceType: ros.IResolvable | string;

    /**
     * Attribute DbNodeClass: The class of the db node.
     */
    readonly attrDbNodeClass: ros.IResolvable | string;

    /**
     * Attribute DbNodeCount: The count of the db node.
     */
    readonly attrDbNodeCount: ros.IResolvable | string;

    /**
     * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    readonly attrDbNodeStorage: ros.IResolvable | string;

    /**
     * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    readonly attrDbVersion: ros.IResolvable | string;

    /**
     * Attribute EcsSecurityGroupRelations: Security group information array.
     */
    readonly attrEcsSecurityGroupRelations: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute Expired: The expire status of the db instance.
     */
    readonly attrExpired: ros.IResolvable | string;

    /**
     * Attribute LatestMinorVersion: The latest kernel image version.
     */
    readonly attrLatestMinorVersion: ros.IResolvable | string;

    /**
     * Attribute LockMode: Instance lock state.
     */
    readonly attrLockMode: ros.IResolvable | string;

    /**
     * Attribute LockReason: An instance is locked the reason.
     */
    readonly attrLockReason: ros.IResolvable | string;

    /**
     * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    readonly attrMaintainTime: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Port: Application Port.
     */
    readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicPort: The public port ID of the resource.
     */
    readonly attrPublicPort: ros.IResolvable | string;

    /**
     * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Resource Group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: resource Tag group.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vpc switch id of the resource.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: ZoneId.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GraphDatabase::DbInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export class DbInstance extends ros.Resource implements IDbInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DbInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CurrentMinorVersion: The current kernel image version.
     */
    public readonly attrCurrentMinorVersion: ros.IResolvable | string;

    /**
     * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    public readonly attrDbInstanceIpArray: ros.IResolvable | string;

    /**
     * Attribute DbInstanceCategory: The category of the db instance.
     */
    public readonly attrDbInstanceCategory: ros.IResolvable | string;

    /**
     * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    public readonly attrDbInstanceCpu: ros.IResolvable | string;

    /**
     * Attribute DbInstanceDescription: According to the practical example or notes.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable | string;

    /**
     * Attribute DbInstanceId: The first ID of the resource.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    public readonly attrDbInstanceMemory: ros.IResolvable | string;

    /**
     * Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    public readonly attrDbInstanceNetworkType: ros.IResolvable | string;

    /**
     * Attribute DbInstanceStorageType: Cloud Disk.
     */
    public readonly attrDbInstanceStorageType: ros.IResolvable | string;

    /**
     * Attribute DbInstanceType: The type of the db instance.
     */
    public readonly attrDbInstanceType: ros.IResolvable | string;

    /**
     * Attribute DbNodeClass: The class of the db node.
     */
    public readonly attrDbNodeClass: ros.IResolvable | string;

    /**
     * Attribute DbNodeCount: The count of the db node.
     */
    public readonly attrDbNodeCount: ros.IResolvable | string;

    /**
     * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable | string;

    /**
     * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    public readonly attrDbVersion: ros.IResolvable | string;

    /**
     * Attribute EcsSecurityGroupRelations: Security group information array.
     */
    public readonly attrEcsSecurityGroupRelations: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute Expired: The expire status of the db instance.
     */
    public readonly attrExpired: ros.IResolvable | string;

    /**
     * Attribute LatestMinorVersion: The latest kernel image version.
     */
    public readonly attrLatestMinorVersion: ros.IResolvable | string;

    /**
     * Attribute LockMode: Instance lock state.
     */
    public readonly attrLockMode: ros.IResolvable | string;

    /**
     * Attribute LockReason: An instance is locked the reason.
     */
    public readonly attrLockReason: ros.IResolvable | string;

    /**
     * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    public readonly attrMaintainTime: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Port: Application Port.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    public readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicPort: The public port ID of the resource.
     */
    public readonly attrPublicPort: ros.IResolvable | string;

    /**
     * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Resource Group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: resource Tag group.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vpc switch id of the resource.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: ZoneId.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDbInstance = new RosDbInstance(this, id,  {
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            dbInstanceNetworkType: props.dbInstanceNetworkType,
            vSwitchId: props.vSwitchId,
            ecsSecurityGroupRelations: props.ecsSecurityGroupRelations,
            dbInstanceStorageType: props.dbInstanceStorageType,
            dbNodeStorage: props.dbNodeStorage,
            backupSetId: props.backupSetId,
            dbInstanceCategory: props.dbInstanceCategory,
            sourceDbInstanceId: props.sourceDbInstanceId,
            vpcId: props.vpcId,
            dbInstanceIpArray: props.dbInstanceIpArray,
            dbVersion: props.dbVersion,
            createType: props.createType,
            paymentType: props.paymentType === undefined || props.paymentType === null ? 'PayAsYouGo' : props.paymentType,
            dbInstanceDescription: props.dbInstanceDescription,
            restoreType: props.restoreType,
            dbNodeClass: props.dbNodeClass,
            maintainTime: props.maintainTime,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbInstance;
        this.attrConnectionString = rosDbInstance.attrConnectionString;
        this.attrCreateTime = rosDbInstance.attrCreateTime;
        this.attrCurrentMinorVersion = rosDbInstance.attrCurrentMinorVersion;
        this.attrDbInstanceIpArray = rosDbInstance.attrDbInstanceIpArray;
        this.attrDbInstanceCategory = rosDbInstance.attrDbInstanceCategory;
        this.attrDbInstanceCpu = rosDbInstance.attrDbInstanceCpu;
        this.attrDbInstanceDescription = rosDbInstance.attrDbInstanceDescription;
        this.attrDbInstanceId = rosDbInstance.attrDbInstanceId;
        this.attrDbInstanceMemory = rosDbInstance.attrDbInstanceMemory;
        this.attrDbInstanceNetworkType = rosDbInstance.attrDbInstanceNetworkType;
        this.attrDbInstanceStorageType = rosDbInstance.attrDbInstanceStorageType;
        this.attrDbInstanceType = rosDbInstance.attrDbInstanceType;
        this.attrDbNodeClass = rosDbInstance.attrDbNodeClass;
        this.attrDbNodeCount = rosDbInstance.attrDbNodeCount;
        this.attrDbNodeStorage = rosDbInstance.attrDbNodeStorage;
        this.attrDbVersion = rosDbInstance.attrDbVersion;
        this.attrEcsSecurityGroupRelations = rosDbInstance.attrEcsSecurityGroupRelations;
        this.attrExpireTime = rosDbInstance.attrExpireTime;
        this.attrExpired = rosDbInstance.attrExpired;
        this.attrLatestMinorVersion = rosDbInstance.attrLatestMinorVersion;
        this.attrLockMode = rosDbInstance.attrLockMode;
        this.attrLockReason = rosDbInstance.attrLockReason;
        this.attrMaintainTime = rosDbInstance.attrMaintainTime;
        this.attrPaymentType = rosDbInstance.attrPaymentType;
        this.attrPort = rosDbInstance.attrPort;
        this.attrPublicConnectionString = rosDbInstance.attrPublicConnectionString;
        this.attrPublicPort = rosDbInstance.attrPublicPort;
        this.attrReadOnlyDbInstanceIds = rosDbInstance.attrReadOnlyDbInstanceIds;
        this.attrResourceGroupId = rosDbInstance.attrResourceGroupId;
        this.attrTags = rosDbInstance.attrTags;
        this.attrVSwitchId = rosDbInstance.attrVSwitchId;
        this.attrVpcId = rosDbInstance.attrVpcId;
        this.attrZoneId = rosDbInstance.attrZoneId;
    }
}
