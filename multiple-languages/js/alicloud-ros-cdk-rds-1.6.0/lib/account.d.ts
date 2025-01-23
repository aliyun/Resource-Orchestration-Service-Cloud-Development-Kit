import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './rds.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-account
 */
export interface AccountProps {
    /**
     * Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Length:
     * MySQL 8.0 and 5.7: 2-32 characters.
     * MySQL 5.6、MariaDB and PostgreSQL Local version: 2-16 characters.
     * SQL Server: 2-64 characters.
     * PostgreSQL Cloud version: 2-63 characters.
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
     * It cannot begin with http:\/\/ or https:\/\/.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters\/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * This parameter is valid for MySQL 5.5\/5.6 only.
     * MySQL 5.7, SQL Server 2012\/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;
    /**
     * Attribute AccountName: Account name
     */
    readonly attrAccountName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::Account`, which is used to create a database account for an ApsaraDB for RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-account
 */
export declare class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountName: Account name
     */
    readonly attrAccountName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
