import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountPrivilege } from './polardb.generated';
export { RosAccountPrivilege as AccountPrivilegeProperty };
/**
 * Properties for defining a `ALIYUN::POLARDB::AccountPrivilege`
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
 * A ROS resource type:  `ALIYUN::POLARDB::AccountPrivilege`
 */
export declare class AccountPrivilege extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::POLARDB::AccountPrivilege`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountPrivilegeProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=accountprivilege.d.ts.map