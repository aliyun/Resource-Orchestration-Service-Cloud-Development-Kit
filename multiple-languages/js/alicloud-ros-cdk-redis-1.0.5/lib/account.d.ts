import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './redis.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `ALIYUN::REDIS::Account`
 */
export interface AccountProps {
    /**
     * Property accountName: The name of the account. The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance for which you want to create the account.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:// or https://.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * Property accountPrivilege: The permission of the account. Valid values:
     * RoleReadOnly
     * RoleReadWrite (default value)
     * RoleRepl
     * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
     * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
     * permission can be granted to an account only in an ApsaraDB for Redis instance of
     * the standard edition in Redis 4.0.
     */
    readonly accountPrivilege?: string | ros.IResolvable;
    /**
     * Property accountType: The type of the account. Set this parameter to Normal.
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::REDIS::Account`
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
     * Attribute InstanceId: The name of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::REDIS::Account`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
