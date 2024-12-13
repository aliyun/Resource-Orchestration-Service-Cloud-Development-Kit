import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
 */
export interface RosAccountProps {
    /**
     * @Property drdsAccountName: The name of the account.
     */
    readonly drdsAccountName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Account";
    /**
     * @Attribute AccountType: Indicates the type of an instance account. Valid values:
0: The instance account is a privileged account.
1: The instance account is a standard account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
     */
    readonly attrDbPrivileges: ros.IResolvable;
    /**
     * @Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DrdsAccountName: Indicates the username of an instance account.
     */
    readonly attrDrdsAccountName: ros.IResolvable;
    /**
     * @Attribute Host: Indicates an IP address that is allowed to access the database. The value % indicates that each IP address is allowed to access the database.
     */
    readonly attrHost: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property drdsAccountName: The name of the account.
     */
    drdsAccountName: string | ros.IResolvable;
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export interface RosAccountsProps {
    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Accounts";
    /**
     * @Attribute Accounts: Indicates the information about the instance accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * @Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    readonly attrDrdsAccountNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    instanceId: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDrdsDB`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
export interface RosDrdsDBProps {
    /**
     * @Property drdsDatabaseName: The name of the Drds database.
     */
    readonly drdsDatabaseName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsDB`, which is used to query the information about a single database on an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDB` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
export declare class RosDrdsDB extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDB";
    /**
     * @Attribute CreateTime: Database creation timestamp.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DrdsDatabaseName: The name of the Drds database.
     */
    readonly attrDrdsDatabaseName: ros.IResolvable;
    /**
     * @Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
     */
    readonly attrInstRole: ros.IResolvable;
    /**
     * @Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
     */
    readonly attrSchema: ros.IResolvable;
    /**
     * @Attribute SplitMode: The partition mode of the database.Valid values:
* HORIZONTAL: The database is horizontally partitioned.
* VERTICAL: The database is vertically partitioned.
     */
    readonly attrSplitMode: ros.IResolvable;
    /**
     * @Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    readonly attrStorageType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property drdsDatabaseName: The name of the Drds database.
     */
    drdsDatabaseName: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDrdsDBs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export interface RosDrdsDBsProps {
    /**
     * @Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsDBs`, which is used to query the information about databases on an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDBs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export declare class RosDrdsDBs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDBs";
    /**
     * @Attribute Databases: The list of drds databases.
     */
    readonly attrDatabases: ros.IResolvable;
    /**
     * @Attribute DrdsDatabaseNames: The list of drds database names.
     */
    readonly attrDrdsDatabaseNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Drds Instance ID.
     */
    instanceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
export interface RosDrdsInstanceProps {
    /**
     * @Property drdsInstanceId: The ID of the Drds instance.
     */
    readonly drdsInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsInstance`, which is used to query the information about a PolarDB-X 1.0 instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
export declare class RosDrdsInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstance";
    /**
     * @Attribute CommodityCode: The commodity code of the service.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * @Attribute CreateTime: The timestamp that indicates when the instance is created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DrdsInstanceId: The ID of the Drds instance.
     */
    readonly attrDrdsInstanceId: ros.IResolvable;
    /**
     * @Attribute ExpireDate: The timestamp that indicates when the instance expires.
     */
    readonly attrExpireDate: ros.IResolvable;
    /**
     * @Attribute InstRole: The role of the instance. Valid values:
* MASTER: The instance is a primary instance.
* SLAVE: The instance is a read-only instance to analyze complex queries.
* SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
     */
    readonly attrInstRole: ros.IResolvable;
    /**
     * @Attribute InstanceSeries: The edition of the instance. Valid values:
* starter: Starter Edition
* enterprise: Enterprise Edition
* standard: Standard Edition
     */
    readonly attrInstanceSeries: ros.IResolvable;
    /**
     * @Attribute InstanceSpec: The specification of the instance.
     */
    readonly attrInstanceSpec: ros.IResolvable;
    /**
     * @Attribute Label: The tag of the instance. Valid values:
* NORMAL: The instance is a standard instance.
* HA: The instance is a high-availability (HA) instance.
* VPC: The instance is a VPC-based instance.
     */
    readonly attrLabel: ros.IResolvable;
    /**
     * @Attribute MachineType: The machine type of the instance. Valid value: ecs.
     */
    readonly attrMachineType: ros.IResolvable;
    /**
     * @Attribute MasterInstanceId: The ID of the primary instance.
     */
    readonly attrMasterInstanceId: ros.IResolvable;
    /**
     * @Attribute MysqlVersion: Engine version.
     */
    readonly attrMysqlVersion: ros.IResolvable;
    /**
     * @Attribute NetworkType: The network type of the instance. Valid values:
* CLASSIC
* VPC
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute OrderInstanceId: The ID of the purchased instance.
     */
    readonly attrOrderInstanceId: ros.IResolvable;
    /**
     * @Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * @Attribute Type: The type of the instance. Valid values:
* PUBLIC: The returned instance is a shared instance.
* PRIVATE: The returned instance is a dedicated instance.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute Version: The version of the instance.
     */
    readonly attrVersion: ros.IResolvable;
    /**
     * @Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
     */
    readonly attrVersionAction: ros.IResolvable;
    /**
     * @Attribute Vips: The list of returned virtual IP addresses (VIPs).
     */
    readonly attrVips: ros.IResolvable;
    /**
     * @Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the zone in which the resource is located.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property drdsInstanceId: The ID of the Drds instance.
     */
    drdsInstanceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDrdsInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export interface RosDrdsInstancesProps {
    /**
     * @Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property type: Instance type.
     * Enumeration Value:
     * 1: PRIVATE
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsInstances`, which is used to query instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export declare class RosDrdsInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstances";
    /**
     * @Attribute InstanceIds: The list of drds instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of drds instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Example description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property type: Instance type.
     * Enumeration Value:
     * 1: PRIVATE
     * 0: PUBLIC
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
