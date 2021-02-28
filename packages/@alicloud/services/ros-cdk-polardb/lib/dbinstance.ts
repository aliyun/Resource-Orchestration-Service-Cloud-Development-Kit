import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstance as DBInstanceProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::DBInstance`
 */
export interface DBInstanceProps {

    /**
     * Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    readonly characterSetName: string;

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    readonly dbClusterId: string;

    /**
     * Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    readonly dbName: string;

    /**
     * Property accountName: The name of the database account to be used.
     */
    readonly accountName?: string;

    /**
     * Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    readonly accountPrivilege?: string;

    /**
     * Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    readonly dbDescription?: string;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBInstance`
 */
export class DBInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::POLARDB::DBInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBInstance = new RosDBInstance(this, id,  {
            characterSetName: props.characterSetName,
            accountPrivilege: props.accountPrivilege ? props.accountPrivilege : 'ReadWrite',
            dbDescription: props.dbDescription,
            dbClusterId: props.dbClusterId,
            dbName: props.dbName,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
    }
}
