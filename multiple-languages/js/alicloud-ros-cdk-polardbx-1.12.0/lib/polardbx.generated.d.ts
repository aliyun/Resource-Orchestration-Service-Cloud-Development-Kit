import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: Account description information.
     */
    readonly accountDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PolarDBX::Account`, which is used to create an account.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::Account";
    /**
     * @Attribute AccountDescription: Account description information.
     */
    readonly attrAccountDescription: ros.IResolvable;
    /**
     * @Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: Account name.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: Account description information.
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
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
export interface RosDBInstanceProps {
    /**
     * @Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    readonly dbNodeClass: string | ros.IResolvable;
    /**
     * @Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    readonly dbNodeCount: number | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property primaryZone: The primary zone.
     */
    readonly primaryZone: string | ros.IResolvable;
    /**
     * @Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    readonly topologyType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC to which the instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property secondaryZone: The secondary zone.
     */
    readonly secondaryZone?: string | ros.IResolvable;
    /**
     * @Property securityIpConfig: Instance whitelist configuration.
     */
    readonly securityIpConfig?: RosDBInstance.SecurityIpConfigProperty | ros.IResolvable;
    /**
     * @Property tertiaryZone: The tertiary zone.
     */
    readonly tertiaryZone?: string | ros.IResolvable;
    /**
     * @Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    readonly usedTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PolarDBX::DBInstance`, which is used to create a PolarDB for Xscale (PolarDB-X) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::DBInstance";
    /**
     * @Attribute ConnectionString: Intranet connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceName: The name of the instance that you create.
     */
    readonly attrDbInstanceName: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute Port: Intranet connection port.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    dbNodeClass: string | ros.IResolvable;
    /**
     * @Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    dbNodeCount: number | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine.
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property primaryZone: The primary zone.
     */
    primaryZone: string | ros.IResolvable;
    /**
     * @Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    topologyType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC to which the instance belongs.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryZone: The secondary zone.
     */
    secondaryZone: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpConfig: Instance whitelist configuration.
     */
    securityIpConfig: RosDBInstance.SecurityIpConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property tertiaryZone: The tertiary zone.
     */
    tertiaryZone: string | ros.IResolvable | undefined;
    /**
     * @Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    usedTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBInstance {
    /**
     * @stability external
     */
    interface SecurityIpConfigProperty {
        /**
         * @Property groupName: The whitelist group name of the instance.
         */
        readonly groupName?: string | ros.IResolvable;
        /**
         * @Property securityIpList: The IP list in the whitelist group, multiple IP whitelists are separated by commas (,).
         */
        readonly securityIpList?: string | ros.IResolvable;
        /**
         * @Property modifyMode: Whitelist modification mode, the value range is as follows:
     * 0: Overwrite and modify the whitelist group;1: Add a whitelist group;2: Delete the whitelist group.
         */
        readonly modifyMode?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
export interface RosDatabaseProps {
    /**
     * @Property accounts: List of accounts.
     */
    readonly accounts: Array<RosDatabase.AccountsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property characterSetName: Character set, which supports the following character sets:
     * - **utf8 * *
     * - **gbk**
     * - **latin1 * *
     * - **utf8mb4 * *.
     */
    readonly characterSetName: string | ros.IResolvable;
    /**
     * @Property databaseName: The name of the database.
     */
    readonly databaseName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property databaseDescription: Database description information.
     */
    readonly databaseDescription?: string | ros.IResolvable;
    /**
     * @Property mode: The mode selected when creating the database. The values are as follows:
     * - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
     * - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
     */
    readonly mode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PolarDBX::Database`, which is used to create a database.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
export declare class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::Database";
    /**
     * @Attribute Accounts: List of accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * @Attribute CharacterSetName: Character set, which supports the following character sets:.
     */
    readonly attrCharacterSetName: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DatabaseDescription: Database description information.
     */
    readonly attrDatabaseDescription: ros.IResolvable;
    /**
     * @Attribute DatabaseName: The name of the database.
     */
    readonly attrDatabaseName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accounts: List of accounts.
     */
    accounts: Array<RosDatabase.AccountsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property characterSetName: Character set, which supports the following character sets:
     * - **utf8 * *
     * - **gbk**
     * - **latin1 * *
     * - **utf8mb4 * *.
     */
    characterSetName: string | ros.IResolvable;
    /**
     * @Property databaseName: The name of the database.
     */
    databaseName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property databaseDescription: Database description information.
     */
    databaseDescription: string | ros.IResolvable | undefined;
    /**
     * @Property mode: The mode selected when creating the database. The values are as follows:
     * - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
     * - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
     */
    mode: string | ros.IResolvable | undefined;
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
export declare namespace RosDatabase {
    /**
     * @stability external
     */
    interface AccountsProperty {
        /**
         * @Property accountPrivilege: Permission.
         */
        readonly accountPrivilege: string | ros.IResolvable;
        /**
         * @Property accountName: Account name.
         */
        readonly accountName: string | ros.IResolvable;
    }
}
