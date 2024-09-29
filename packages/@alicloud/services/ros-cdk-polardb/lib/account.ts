import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
 */
export interface AccountProps {

    /**
     * Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:\/\/ or https:\/\/.
     * - It must be 2 to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;

    /**
     * Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * ReadIndex: has read and index permissions on the database.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege?: string | ros.IResolvable;

    /**
     * Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    readonly accountType?: string | ros.IResolvable;

    /**
     * Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    readonly dbName?: string | ros.IResolvable;

    /**
     * Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future. Valid values:
     * - 0 (default)): Not authorized.
     * - 1: Authorization.
     */
    readonly privForAllDb?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::Account`, which is used to create a database account for a specified PolarDB cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
 */
export class Account extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccount = new RosAccount(this, id,  {
            accountDescription: props.accountDescription,
            accountPrivilege: props.accountPrivilege,
            dbClusterId: props.dbClusterId,
            dbName: props.dbName,
            accountType: props.accountType,
            privForAllDb: props.privForAllDb,
            accountName: props.accountName,
            accountPassword: props.accountPassword,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
    }
}
