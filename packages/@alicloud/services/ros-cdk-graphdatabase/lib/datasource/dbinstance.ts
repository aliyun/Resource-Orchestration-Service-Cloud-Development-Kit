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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GraphDatabase::DbInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
 */
export class DbInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DbInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Attribute DbInstanceId: The ID of the GDB Instance.
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
     * Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Port: Application Port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PublicConnectionString: The public connection string ID of the DB instance.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * Attribute PublicPort: The public port ID of the DB instance.
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
     * Attribute Tags: The tags of the GDB Instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute VSwitchId: The vswitch id of the DB instance.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    public readonly attrZoneId: ros.IResolvable;

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
