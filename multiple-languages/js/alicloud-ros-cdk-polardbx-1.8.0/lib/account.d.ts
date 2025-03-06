import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './polardbx.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export interface AccountProps {
    /**
     * Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password of the account.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountDescription: Account description information.
     */
    readonly accountDescription?: string | ros.IResolvable;
}
/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;
    /**
     * Attribute AccountDescription: Account description information.
     */
    readonly attrAccountDescription: ros.IResolvable | string;
    /**
     * Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable | string;
    /**
     * Attribute AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PolarDBX::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export declare class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountDescription: Account description information.
     */
    readonly attrAccountDescription: ros.IResolvable | string;
    /**
     * Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable | string;
    /**
     * Attribute AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly attrAccountType: ros.IResolvable | string;
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
