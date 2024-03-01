import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountPrivilege } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccountPrivilege as AccountPrivilegeProperty };

/**
 * Properties for defining a `AccountPrivilege`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
 */
export interface AccountPrivilegeProps {

    /**
     * Property accountName: The name of the database account to be granted access permissions.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege: string | ros.IResolvable;

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    readonly dbName: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::AccountPrivilege`, which is used to grant access permissions on one or more databases in a specified ApsaraDB for POLARDB cluster to a standard account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccountPrivilege`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
 */
export class AccountPrivilege extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountPrivilegeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountPrivilegeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccountPrivilege = new RosAccountPrivilege(this, id,  {
            accountPrivilege: props.accountPrivilege,
            dbClusterId: props.dbClusterId,
            dbName: props.dbName,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccountPrivilege;
    }
}
