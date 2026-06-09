import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
 */
export interface RosAccountProps {
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    readonly polarDbxAccountName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Account";
    /**
     * @Attribute AccountDescription: The description of the account.
     */
    readonly attrAccountDescription: ros.IResolvable;
    /**
     * @Attribute AccountType: The type of the account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute CreateTime: The point in time when the account was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute PolarDBXAccountName: The username of the account.
     */
    readonly attrPolarDbxAccountName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    polarDbxAccountName: string | ros.IResolvable;
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
export interface RosAccountsProps {
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the account. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly accountType?: number | ros.IResolvable;
    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    readonly polarDbxAccountName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Accounts";
    /**
     * @Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.
     */
    readonly attrPolarDbxAccountNames: ros.IResolvable;
    /**
     * @Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.
     */
    readonly attrPolarDbxAccounts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the account. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    accountType: number | ros.IResolvable | undefined;
    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    polarDbxAccountName: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
export interface RosDatabaseProps {
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    readonly polarDbxDatabaseName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Database`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
export declare class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Database";
    /**
     * @Attribute Accounts: The list of accounts that can be used to access the database.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * @Attribute CharacterSetName: The character set that is supported by the database.
     */
    readonly attrCharacterSetName: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DatabaseDescription: The description of the database.
     */
    readonly attrDatabaseDescription: ros.IResolvable;
    /**
     * @Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
     */
    readonly attrPolarDbxDatabaseName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    polarDbxDatabaseName: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDatabases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
 */
export interface RosDatabasesProps {
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    readonly polarDbxDatabaseName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Databases`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Databases` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
 */
export declare class RosDatabases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Databases";
    /**
     * @Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.
     */
    readonly attrPolarDbxDatabaseNames: ros.IResolvable;
    /**
     * @Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.
     */
    readonly attrPolarDbxDatabases: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    polarDbxDatabaseName: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosDatabasesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
