import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './adb.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `ALIYUN::ADB::Account`
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
     * The description cannot start with http://or https://.
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
 * A ROS resource type:  `ALIYUN::ADB::Account`
 */
export declare class Account extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * Attribute AccountType: The type of the account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ADB::Account`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
