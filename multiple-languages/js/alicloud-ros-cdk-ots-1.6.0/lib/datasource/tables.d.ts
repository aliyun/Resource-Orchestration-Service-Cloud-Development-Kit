import * as ros from '@alicloud/ros-cdk-core';
import { RosTables } from './ots.generated';
export { RosTables as TablesProperty };
/**
 * Properties for defining a `Tables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-tables
 */
export interface TablesProps {
    /**
     * Property instanceName: The name of the instance to which the table belongs.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property tableName: The name of table.
     */
    readonly tableName?: string | ros.IResolvable;
}
/**
 * Represents a `Tables`.
 */
export interface ITables extends ros.IResource {
    readonly props: TablesProps;
    /**
     * Attribute TableNames: The list of table names.
     */
    readonly attrTableNames: ros.IResolvable | string;
    /**
     * Attribute Tables: The list of tables.
     */
    readonly attrTables: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OTS::Tables`, which is used to query the names of all tables that are created in an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTables`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-tables
 */
export declare class Tables extends ros.Resource implements ITables {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TablesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TableNames: The list of table names.
     */
    readonly attrTableNames: ros.IResolvable | string;
    /**
     * Attribute Tables: The list of tables.
     */
    readonly attrTables: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TablesProps, enableResourcePropertyConstraint?: boolean);
}
