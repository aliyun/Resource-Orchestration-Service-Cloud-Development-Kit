import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './adb.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export interface AccountProps {
    /**
     * Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password of the account.
     * The password must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * Special characters include ! @ # $ % ^ & * ()  _ + - and =
     * The password must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property accountDescription: The description of the account.
     * The description cannot start with http:\/\/or https:\/\/.
     * The description can be up to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * Property accountType: Normal: standard account
     * Super: privileged account
     */
    readonly accountType?: string | ros.IResolvable;
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
    /**
     * Attribute AccountType: The type of the account.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADB::Account`, which is used to create a database account for an AnalyticDB for MySQL cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
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
     * Attribute AccountType: The type of the account.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
