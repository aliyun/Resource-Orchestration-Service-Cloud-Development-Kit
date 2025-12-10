import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './gpdb.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
 */
export interface AccountProps {
    /**
     * Property accountName: The name of the privileged account.
     * The name can contain lowercase letters, digits, and underscores (_).
     * The name must start with a lowercase letter and end with a lowercase letter or a digit.
     * The name cannot start with gp.
     * The name must be 2 to 16 characters in length.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password of the privileged account.
     * The password must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * Special characters include ! @ # $ % ^ & * ( ) _ + - =
     * The password must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the instance.
     * Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
     * region, including instance IDs.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountDescription: The description of the privileged account.
     */
    readonly accountDescription?: string | ros.IResolvable;
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
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
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
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
