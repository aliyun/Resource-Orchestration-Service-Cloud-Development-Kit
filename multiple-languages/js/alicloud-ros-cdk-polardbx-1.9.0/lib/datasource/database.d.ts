import * as ros from '@alicloud/ros-cdk-core';
import { RosDatabase } from './polardbx.generated';
export { RosDatabase as DatabaseProperty };
/**
 * Properties for defining a `Database`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
export interface DatabaseProps {
    /**
     * Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    readonly polarDbxDatabaseName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Database`.
 */
export interface IDatabase extends ros.IResource {
    readonly props: DatabaseProps;
    /**
     * Attribute Accounts: The list of accounts that can be used to access the database.
     */
    readonly attrAccounts: ros.IResolvable | string;
    /**
     * Attribute CharacterSetName: The character set that is supported by the database.
     */
    readonly attrCharacterSetName: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute DatabaseDescription: The description of the database.
     */
    readonly attrDatabaseDescription: ros.IResolvable | string;
    /**
     * Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
     */
    readonly attrPolarDbxDatabaseName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PolarDBX::Database`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDatabase`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
export declare class Database extends ros.Resource implements IDatabase {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DatabaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Accounts: The list of accounts that can be used to access the database.
     */
    readonly attrAccounts: ros.IResolvable | string;
    /**
     * Attribute CharacterSetName: The character set that is supported by the database.
     */
    readonly attrCharacterSetName: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute DatabaseDescription: The description of the database.
     */
    readonly attrDatabaseDescription: ros.IResolvable | string;
    /**
     * Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
     */
    readonly attrPolarDbxDatabaseName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatabaseProps, enableResourcePropertyConstraint?: boolean);
}
