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
 * This class encapsulates and extends the ROS resource type `ALIYUN::GraphDatabase::DbInstance`, which is used to create a Graph Database (GDB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export class DbInstance extends ros.Resource {

    /**
     * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CurrentMinorVersion: The current kernel image version.
     */
    public readonly attrCurrentMinorVersion: ros.IResolvable;

    /**
     * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    public readonly attrDbInstanceIpArray: ros.IResolvable;

    /**
     * Attribute DbInstanceCategory: The category of the db instance.
     */
    public readonly attrDbInstanceCategory: ros.IResolvable;

    /**
     * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    public readonly attrDbInstanceCpu: ros.IResolvable;

    /**
     * Attribute DbInstanceDescription: According to the practical example or notes.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable;

    /**
     * Attribute DbInstanceId: The first ID of the resource.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    public readonly attrDbInstanceMemory: ros.IResolvable;

    /**
     * Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    public readonly attrDbInstanceNetworkType: ros.IResolvable;

    /**
     * Attribute DbInstanceStorageType: Cloud Disk.
     */
    public readonly attrDbInstanceStorageType: ros.IResolvable;

    /**
     * Attribute DbInstanceType: The type of the db instance.
     */
    public readonly attrDbInstanceType: ros.IResolvable;

    /**
     * Attribute DbNodeClass: The class of the db node.
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * Attribute DbNodeCount: The count of the db node.
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * Attribute EcsSecurityGroupRelations: Security group information array.
     */
    public readonly attrEcsSecurityGroupRelations: ros.IResolvable;

    /**
     * Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * Attribute Expired: The expire status of the db instance.
     */
    public readonly attrExpired: ros.IResolvable;

    /**
     * Attribute LatestMinorVersion: The latest kernel image version.
     */
    public readonly attrLatestMinorVersion: ros.IResolvable;

    /**
     * Attribute LockMode: Instance lock state.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * Attribute LockReason: An instance is locked the reason.
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    public readonly attrMaintainTime: ros.IResolvable;

    /**
     * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Port: Application Port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * Attribute PublicPort: The public port ID of the resource.
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: Resource Group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Tags: resource Tag group.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute VSwitchId: The vpc switch id of the resource.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: ZoneId.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
