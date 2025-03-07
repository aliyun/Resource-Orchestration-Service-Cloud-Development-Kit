import * as ros from '@alicloud/ros-cdk-core';
import { RosDbInstance } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDbInstance as DbInstanceProperty };

/**
 * Properties for defining a `DbInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
 */
export interface DbInstanceProps {

    /**
     * Property dbInstanceId: The ID of the GDB Instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
     * Attribute DbInstanceId: The ID of the GDB Instance.
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
     * Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Port: Application Port.
     */
    readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: The public connection string ID of the DB instance.
     */
    readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicPort: The public port ID of the DB instance.
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
     * Attribute Tags: The tags of the GDB Instance.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vswitch id of the DB instance.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GraphDatabase::DbInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
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
     * Attribute DbInstanceId: The ID of the GDB Instance.
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
     * Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Port: Application Port.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: The public connection string ID of the DB instance.
     */
    public readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicPort: The public port ID of the DB instance.
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
     * Attribute Tags: The tags of the GDB Instance.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vswitch id of the DB instance.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the instance.
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
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
