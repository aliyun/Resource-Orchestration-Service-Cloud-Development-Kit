import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './rds.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `ALIYUN::RDS::Account`
 */
export interface AccountProps {
    /**
     * Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Contain no more than 16 characters.
     * For other invalid characters, see Forbidden keywords table.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountDescription: Account remarks.
     * It cannot begin with http:// or https://.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * This parameter is valid for MySQL 5.5/5.6 only.
     * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RDS::Account`
 */
export declare class Account extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccountName: Account name
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RDS::Account`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
