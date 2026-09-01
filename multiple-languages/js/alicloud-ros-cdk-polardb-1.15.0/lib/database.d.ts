import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './polardb.generated';
export { RosDatabase as DatabaseProperty };
/**
 * Properties for defining a `Database`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
 */
export interface DatabaseProps {
    /**
     * Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    readonly characterSetName: string | ros.IResolvable;
    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property dbName: The name of the database. The name must meet the following requirements:
     * *   The name can contain lowercase letters, digits, hyphens (-), and underscores
     * (_).
     * *   The name must start with a lowercase letter and end with a lowercase letter
     * or a digit. The name must be 1 to 64 characters in length.
     * > Do not use reserved words as database names, such as `test` or `mysql`.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * Property accountName: The name of the account that is authorized to access the database. You can call
     * the [DescribeAccounts]() operation to query account information.
     * >- You can specify only a standard account. By default, privileged accounts have
     * all permissions on all databases. You do not need to grant privileged accounts
     * the permissions to access the database.
     * >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle)
     * clusters or PolarDB for PostgreSQL clusters. This parameter is optional for
     * PolarDB for MySQL clusters.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * Property accountPrivilege: The permissions that are granted to the account. Valid values:
     * *   ReadWrite: read and write permissions.
     * *   ReadOnly: read-only permissions.
     * *   DMLOnly: permissions only to execute DML statements on the database.
     * *   DDLOnly: permissions only to execute DDL statements on the database.
     * *   ReadIndex: read-only and index permissions.
     * The default value is ReadWrite.
     * >
     * *   This parameter is valid only when the AccountName parameter is specified.
     * *   For a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for
     * PostgreSQL cluster, this parameter is optional. If AccountName is specified, it
     * is the account of the database owner.
     * *   For a PolarDB for MySQL cluster, this parameter is optional.
     */
    readonly accountPrivilege?: string | ros.IResolvable;
    /**
     * Property collate: A locale setting that specifies the collation for newly created databases.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     * when the cluster is PolarDB MySQL, this parameter is not supported.
     */
    readonly collate?: string | ros.IResolvable;
    /**
     * Property ctype: A locale setting that specifies the character classification of the database.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.
     * It is consistent with the incoming information of Collate.
     * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     *  when the cluster is PolarDB MySQL, this parameter is optional.
     */
    readonly ctype?: string | ros.IResolvable;
    /**
     * Property dbDescription: The description of the database. The description must meet the following
     * requirements:
     * *   It cannot start with `http:\/\/` or `https:\/\/`.
     * *   It must be 2 to 256 characters in length.
     * > This parameter is required for a PolarDB for Oracle or PolarDB for PostgreSQL
     * cluster. This parameter is optional for a PolarDB for MySQL cluster.
     */
    readonly dbDescription?: string | ros.IResolvable;
}
/**
 * Represents a `Database`.
 */
export interface IDatabase extends ros.IResource {
    readonly props: DatabaseProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::Database`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
 */
export declare class Database extends ros.Resource implements IDatabase {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DatabaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabaseProps, enableResourcePropertyConstraint?: boolean);
}
