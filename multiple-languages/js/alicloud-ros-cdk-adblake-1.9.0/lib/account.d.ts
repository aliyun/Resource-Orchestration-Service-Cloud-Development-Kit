import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './adblake.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
 */
export interface AccountProps {
    /**
     * Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !@#$%^&*()_+-=The password length is 8 to 32 characters.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account.
     */
    readonly accountType: string | ros.IResolvable;
    /**
     * Property dbClusterId: The ID of the ADB Lake cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property engine: The engine of the account.Valid values: AnalyticDB \/ Clickhouse.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * Property accountDescription: The description of the account.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * Property ramUser: Bind the RAM user to the cluster database common account
     */
    readonly ramUser?: string | ros.IResolvable;
}
/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;
    /**
     * Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADBLake::Account`, which is used to create a database account for an AnalyticDB for MySQL Data Lakehouse Edition cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
 */
export declare class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
