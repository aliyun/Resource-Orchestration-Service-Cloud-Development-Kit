import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './polardbx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDatabase as DatabaseProperty };

/**
 * Properties for defining a `ALIYUN::PolarDBX::Database`
 */
export interface DatabaseProps {

    /**
     * Property accounts: List of accounts.
     */
    readonly accounts: Array<RosDatabase.AccountsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property characterSetName: Character set, which supports the following character sets:
     * - **utf8 * *
     * - **gbk**
     * - **latin1 * *
     * - **utf8mb4 * *.
     */
    readonly characterSetName: string | ros.IResolvable;

    /**
     * Property databaseName: The name of the database.
     */
    readonly databaseName: string | ros.IResolvable;

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property databaseDescription: Database description information.
     */
    readonly databaseDescription?: string | ros.IResolvable;

    /**
     * Property mode: The mode selected when creating the database. The values are as follows:
     * - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
     * - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
     */
    readonly mode?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PolarDBX::Database`
 */
export class Database extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Accounts: List of accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * Attribute CharacterSetName: Character set, which supports the following character sets:.
     */
    public readonly attrCharacterSetName: ros.IResolvable;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute DatabaseDescription: Database description information.
     */
    public readonly attrDatabaseDescription: ros.IResolvable;

    /**
     * Attribute DatabaseName: The name of the database.
     */
    public readonly attrDatabaseName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PolarDBX::Database`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabaseProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDatabase = new RosDatabase(this, id,  {
            characterSetName: props.characterSetName,
            dbInstanceId: props.dbInstanceId,
            mode: props.mode,
            databaseName: props.databaseName,
            databaseDescription: props.databaseDescription,
            accounts: props.accounts,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatabase;
        this.attrAccounts = rosDatabase.attrAccounts;
        this.attrCharacterSetName = rosDatabase.attrCharacterSetName;
        this.attrDbInstanceId = rosDatabase.attrDbInstanceId;
        this.attrDatabaseDescription = rosDatabase.attrDatabaseDescription;
        this.attrDatabaseName = rosDatabase.attrDatabaseName;
    }
}
