import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: Account password.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: Account description.
     */
    readonly accountDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GraphDatabase::Account`, which is used to create an account.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GraphDatabase::Account";
    /**
     * @Attribute AccountDescription: Account description.
     */
    readonly attrAccountDescription: ros.IResolvable;
    /**
     * @Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute AccountType: Account Type.
     */
    readonly attrAccountType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: Account name.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: Account password.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: Instance Id.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: Account description.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosDbInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export interface RosDbInstanceProps {
    /**
     * @Property dbInstanceCategory: The category of the db instance.
     */
    readonly dbInstanceCategory: string | ros.IResolvable;
    /**
     * @Property dbInstanceNetworkType: The network type of the db instance.
     */
    readonly dbInstanceNetworkType: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorageType: Instance storage type, Valid values:
     * - cloud_essd.
     */
    readonly dbInstanceStorageType: string | ros.IResolvable;
    /**
     * @Property dbNodeClass: The class of the db node. Valid values:
     * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
     */
    readonly dbNodeClass: string | ros.IResolvable;
    /**
     * @Property dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
     */
    readonly dbNodeStorage: number | ros.IResolvable;
    /**
     * @Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
     */
    readonly dbVersion: string | ros.IResolvable;
    /**
     * @Property backupSetId: Backup set id.
     */
    readonly backupSetId?: string | ros.IResolvable;
    /**
     * @Property createType: The creation method. Valid values:
     * - CreateDBInstance: Create instance
     * - CloneDBInstance: Clone instance
     * - CreateReadDBInstance: Create a read-only instance
     */
    readonly createType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceIpArray: IP address whitelist for the instance group list.
     */
    readonly dbInstanceIpArray?: Array<RosDbInstance.DBInstanceIPArrayProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ecsSecurityGroupRelations: Security group information array.
     */
    readonly ecsSecurityGroupRelations?: Array<RosDbInstance.EcsSecurityGroupRelationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    readonly maintainTime?: string | ros.IResolvable;
    /**
     * @Property paymentType: The resource attribute field representing the paid type is desirable:
     * - PayAsYouGo: Postpaid.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restoreType: Restore type.
     */
    readonly restoreType?: string | ros.IResolvable;
    /**
     * @Property sourceDbInstanceId: Source Instance Id.
     */
    readonly sourceDbInstanceId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of db instance.
     */
    readonly tags?: RosDbInstance.TagsProperty[];
    /**
     * @Property vpcId: The vpc id of the db instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vpc switch id of the resource.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: ZoneId.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GraphDatabase::DbInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
 */
export declare class RosDbInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GraphDatabase::DbInstance";
    /**
     * @Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CurrentMinorVersion: The current kernel image version.
     */
    readonly attrCurrentMinorVersion: ros.IResolvable;
    /**
     * @Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    readonly attrDbInstanceIpArray: ros.IResolvable;
    /**
     * @Attribute DbInstanceCategory: The category of the db instance.
     */
    readonly attrDbInstanceCategory: ros.IResolvable;
    /**
     * @Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    readonly attrDbInstanceCpu: ros.IResolvable;
    /**
     * @Attribute DbInstanceDescription: According to the practical example or notes.
     */
    readonly attrDbInstanceDescription: ros.IResolvable;
    /**
     * @Attribute DbInstanceId: The first ID of the resource.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    readonly attrDbInstanceMemory: ros.IResolvable;
    /**
     * @Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    readonly attrDbInstanceNetworkType: ros.IResolvable;
    /**
     * @Attribute DbInstanceStorageType: Cloud Disk.
     */
    readonly attrDbInstanceStorageType: ros.IResolvable;
    /**
     * @Attribute DbInstanceType: The type of the db instance.
     */
    readonly attrDbInstanceType: ros.IResolvable;
    /**
     * @Attribute DbNodeClass: The class of the db node.
     */
    readonly attrDbNodeClass: ros.IResolvable;
    /**
     * @Attribute DbNodeCount: The count of the db node.
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * @Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    readonly attrDbNodeStorage: ros.IResolvable;
    /**
     * @Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    readonly attrDbVersion: ros.IResolvable;
    /**
     * @Attribute EcsSecurityGroupRelations: Security group information array.
     */
    readonly attrEcsSecurityGroupRelations: ros.IResolvable;
    /**
     * @Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * @Attribute Expired: The expire status of the db instance.
     */
    readonly attrExpired: ros.IResolvable;
    /**
     * @Attribute LatestMinorVersion: The latest kernel image version.
     */
    readonly attrLatestMinorVersion: ros.IResolvable;
    /**
     * @Attribute LockMode: Instance lock state.
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * @Attribute LockReason: An instance is locked the reason.
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * @Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    readonly attrMaintainTime: ros.IResolvable;
    /**
     * @Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Port: Application Port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicPort: The public port ID of the resource.
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * @Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: Resource Group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: resource Tag group.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The vpc switch id of the resource.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The vpc id of the db instance.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: ZoneId.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceCategory: The category of the db instance.
     */
    dbInstanceCategory: string | ros.IResolvable;
    /**
     * @Property dbInstanceNetworkType: The network type of the db instance.
     */
    dbInstanceNetworkType: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorageType: Instance storage type, Valid values:
     * - cloud_essd.
     */
    dbInstanceStorageType: string | ros.IResolvable;
    /**
     * @Property dbNodeClass: The class of the db node. Valid values:
     * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
     */
    dbNodeClass: string | ros.IResolvable;
    /**
     * @Property dbNodeStorage: Instance storage space, which is measured in GB. The minimum storage space is 20 GB and the step size is 10GB.
     */
    dbNodeStorage: number | ros.IResolvable;
    /**
     * @Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
     */
    dbVersion: string | ros.IResolvable;
    /**
     * @Property backupSetId: Backup set id.
     */
    backupSetId: string | ros.IResolvable | undefined;
    /**
     * @Property createType: The creation method. Valid values:
     * - CreateDBInstance: Create instance
     * - CloneDBInstance: Clone instance
     * - CreateReadDBInstance: Create a read-only instance
     */
    createType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceIpArray: IP address whitelist for the instance group list.
     */
    dbInstanceIpArray: Array<RosDbInstance.DBInstanceIPArrayProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ecsSecurityGroupRelations: Security group information array.
     */
    ecsSecurityGroupRelations: Array<RosDbInstance.EcsSecurityGroupRelationsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    maintainTime: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The resource attribute field representing the paid type is desirable:
     * - PayAsYouGo: Postpaid.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restoreType: Restore type.
     */
    restoreType: string | ros.IResolvable | undefined;
    /**
     * @Property sourceDbInstanceId: Source Instance Id.
     */
    sourceDbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of db instance.
     */
    tags: RosDbInstance.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The vpc id of the db instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vpc switch id of the resource.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: ZoneId.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDbInstance {
    /**
     * @stability external
     */
    interface DBInstanceIPArrayProperty {
        /**
         * @Property securityIps: IP address whitelist addresses in the IP address list, and a maximum of 1000 comma-separated format is as follows: 0.0.0.0\/0 and 10.23.12.24(IP) or 10.23.12.24\/24(CIDR mode, CIDR (Classless Inter-Domain Routing)\/24 represents the address prefixes in the length of the range [1,32]).
         */
        readonly securityIps: string | ros.IResolvable;
        /**
         * @Property dbInstanceIpArrayName: IP address whitelist group name.
         */
        readonly dbInstanceIpArrayName?: string | ros.IResolvable;
    }
}
export declare namespace RosDbInstance {
    /**
     * @stability external
     */
    interface EcsSecurityGroupRelationsProperty {
        /**
         * @Property networkType: Network type.
         */
        readonly networkType?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group Id.
         */
        readonly securityGroupId: string | ros.IResolvable;
        /**
         * @Property regionId: Region.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
export declare namespace RosDbInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
