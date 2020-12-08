import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './polardb.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `ALIYUN::POLARDB::Account`
 */
export interface AccountProps {
    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    readonly accountName: string;
    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    readonly accountPassword: string;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    readonly dbClusterId: string;
    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:// or https://.
     * - It must be 2 to 256 characters in length.
     */
    readonly accountDescription?: string;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege?: string;
    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    readonly accountType?: string;
    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    readonly dbName?: string;
}
/**
 * A ROS resource type:  `ALIYUN::POLARDB::Account`
 */
export declare class Account extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::POLARDB::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
