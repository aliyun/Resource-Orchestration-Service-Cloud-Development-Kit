import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: The name of the GDB Account.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::Account`, which is used to query the information about an account of a Graph Database (GDB) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::Account";
    /**
     * @Attribute AccountDescription: GDB Account description.
     */
    readonly attrAccountDescription: ros.IResolvable;
    /**
     * @Attribute AccountName: The name of the GDB Account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute AccountType: GDB Account Type.
     */
    readonly attrAccountType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the GDB Account.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
 */
export interface RosAccountsProps {
    /**
     * @Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: Account name.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::Accounts`, which is used to query the information about accounts.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::Accounts";
    /**
     * @Attribute AccountNames: The list of account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * @Attribute Accounts: The list of accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Instance Id.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: Account name.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
 */
export interface RosDbInstanceProps {
    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::DbInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstance
 */
export declare class RosDbInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::DbInstance";
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
     * @Attribute DbInstanceId: The ID of the GDB Instance.
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
     * @Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Port: Application Port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: The public connection string ID of the DB instance.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicPort: The public port ID of the DB instance.
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
     * @Attribute Tags: The tags of the GDB Instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The vswitch id of the DB instance.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The vpc id of the db instance.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID of the instance.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the GDB Instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosDbInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
 */
export interface RosDbInstancesProps {
    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GraphDatabase::DbInstances`, which is used to query the information about Graph Database (GDB) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
 */
export declare class RosDbInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::DbInstances";
    /**
     * @Attribute DbInstanceIds: The list of db instance IDs.
     */
    readonly attrDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute DbInstances: The list of db instances.
     */
    readonly attrDbInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    dbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
