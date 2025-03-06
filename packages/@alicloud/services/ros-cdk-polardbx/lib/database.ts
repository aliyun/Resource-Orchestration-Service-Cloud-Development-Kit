import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './polardbx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDatabase as DatabaseProperty };

/**
 * Properties for defining a `Database`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
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
 * Represents a `Database`.
 */
export interface IDatabase extends ros.IResource {
    readonly props: DatabaseProps;

    /**
     * Attribute Accounts: List of accounts.
     */
    readonly attrAccounts: ros.IResolvable | string;

    /**
     * Attribute CharacterSetName: Character set, which supports the following character sets:.
     */
    readonly attrCharacterSetName: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DatabaseDescription: Database description information.
     */
    readonly attrDatabaseDescription: ros.IResolvable | string;

    /**
     * Attribute DatabaseName: The name of the database.
     */
    readonly attrDatabaseName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PolarDBX::Database`, which is used to create a database.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
export class Database extends ros.Resource implements IDatabase {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DatabaseProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Accounts: List of accounts.
     */
    public readonly attrAccounts: ros.IResolvable | string;

    /**
     * Attribute CharacterSetName: Character set, which supports the following character sets:.
     */
    public readonly attrCharacterSetName: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DatabaseDescription: Database description information.
     */
    public readonly attrDatabaseDescription: ros.IResolvable | string;

    /**
     * Attribute DatabaseName: The name of the database.
     */
    public readonly attrDatabaseName: ros.IResolvable | string;

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
