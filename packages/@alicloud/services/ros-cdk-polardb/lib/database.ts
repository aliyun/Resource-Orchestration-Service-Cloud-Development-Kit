import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    readonly dbName: string | ros.IResolvable;

    /**
     * Property accountName: The name of the database account to be used.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
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
     * Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    readonly dbDescription?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::Database`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
 */
export class Database extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DatabaseProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabaseProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDatabase = new RosDatabase(this, id,  {
            characterSetName: props.characterSetName,
            accountPrivilege: props.accountPrivilege === undefined || props.accountPrivilege === null ? 'ReadWrite' : props.accountPrivilege,
            dbDescription: props.dbDescription,
            dbClusterId: props.dbClusterId,
            collate: props.collate,
            dbName: props.dbName,
            ctype: props.ctype,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatabase;
    }
}
